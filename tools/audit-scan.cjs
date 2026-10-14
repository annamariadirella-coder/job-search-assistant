// Read-only, offline audit. Outputs counts only; never vacancy text or identifiers.
const fs = require('node:fs');
function key(j) {
  return ['personio', 'recruitee'].includes(j.provider)
    ? `${j.provider}:${String(j.board?.board || '').toLowerCase()}:${j.id}`
    : `${j.provider}:${j.id}`;
}
function audit(report, state) {
  if (!Array.isArray(report.candidates) || !Array.isArray(report.board_pages) ||
      !state.pending_review || typeof state.pending_review !== 'object' || Array.isArray(state.pending_review))
    throw new Error('Invalid scan report or state');
  const now = Date.parse(report.checked_at);
  if (!Number.isFinite(now)) throw new Error('Missing valid report timestamp');
  const reported = new Set(report.candidates.map(key));
  const deferred = Object.entries(state.pending_review).filter(([k]) => !reported.has(k)).map(([,j])=>j);
  const statuses = {};
  report.board_pages.forEach(p => { const status = ['ok','unavailable','deferred_time_budget','deferred_provider_cooldown','page_checkpoint'].includes(p.status) ? p.status : 'other'; statuses[status]=(statuses[status]||0)+1; });
  let unknown=0, olderThan7Days=0, oldest=0;
  deferred.forEach(j => {
    const t=Date.parse(j.live_checked_at);
    if (!Number.isFinite(t) || t>now) {unknown++; return;}
    const days=(now-t)/86400000; oldest=Math.max(oldest,days); if(days>=7) olderThan7Days++;
  });
  return {
    checked_at: report.checked_at,
    attempted_boards: report.company_boards ?? null,
    board_page_statuses: statuses,
    verified_report_count: report.candidates.filter(j=>j.employer_live_verified===true).length,
    report_count: report.candidates.length,
    reaches_current_20_item_budget: report.candidates.length>=20,
    deferred_count: deferred.length,
    reported_deferred_count: report.deferred ?? null,
    queue_count_consistent: report.deferred===deferred.length,
    deferred_without_valid_check_time: unknown,
    deferred_last_check_at_least_7_days_old: olderThan7Days,
    oldest_deferred_check_days: Math.floor(oldest),
    discovery_lead_count: Array.isArray(report.discovery_leads)?report.discovery_leads.length:0,
    time_budget_reached: report.time_budget_reached===true,
    limitations: 'One snapshot cannot establish queue waiting time, starvation, trends, market coverage or job suitability. Last check age is not first-seen age. Page successes do not prove complete board coverage.'
  };
}
module.exports={audit};
if(require.main===module) {
  try {
    if(process.argv.length!==4) throw new Error('Usage: node tools/audit-scan.cjs candidates.json processed_jobs.json');
    const read=p=>JSON.parse(fs.readFileSync(p,'utf8').replace(/^\uFEFF/,''));
    console.log(JSON.stringify(audit(read(process.argv[2]),read(process.argv[3])),null,2));
  } catch(e) { console.error('Audit failed. Check the two private JSON inputs and their timestamps.'); process.exitCode=1; }
}
