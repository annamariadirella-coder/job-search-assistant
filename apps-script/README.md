# Optional morning scanner

This is a standalone private Google Apps Script installation. Repository publication does not install it, create triggers, access your Drive files or enable paid AI.

## Defaults and scope

The snapshot targets senior Operations/Strategy/Product-adjacent roles in Germany and remote Europe. The filters are in `eligible` and `roleFamilies`, and the company catalog is `BOARD_ROWS` in Code.gs. The Evidence Bank and Charter do not automatically configure those filters. Review them before using the scanner for different targets. See the runtime report for actual completed, unavailable and unchecked sources.

## New installation

1. Complete the Evidence Bank template privately. Create a private targeting document describing role/location/language preferences. Supported sources include native Google Docs, DOCX and text files.
2. Import `templates/tracker-template.csv` into a native Google Sheet. Preserve Company, Role title, Source and Status headers; the scanner reads this sheet and does not write to it.
3. Create an empty private Drive folder to provide the initial OUTPUT_FOLDER_ID. No reports are published.
4. Create a standalone Apps Script project. Add Code.gs, show the manifest in project settings and copy appsscript.json. Keep the default Google Cloud project. Enable the Drive v3 and Sheets v4 advanced services listed in the manifest.
5. In private Script Properties, set:

| Property | Value to provide privately |
|---|---|
| EVIDENCE_FILE_ID | Your Evidence Bank file ID |
| CHARTER_FILE_ID | Your targeting document file ID |
| TRACKER_SHEET_ID | Your native Google Sheet ID |
| TRACKER_RANGE | Full application tab, for example `'Applications'!A1:N500` using your actual tab name |
| OUTPUT_FOLDER_ID | The empty private initial folder ID |

6. Run `initializeOutputFolder` once. It validates sources, creates an app-owned private output folder and stores its ID. Existing state in the initial folder is carried forward if present; the old folder is retained.
7. Run `scanJobs` manually, authorize the existing scopes and inspect Executions and the Drive reports. Verify duplicates, source failures, location/language filtering and job links.
8. After the manual scan succeeds, run `enableDailyScan` once. The default window is 09:00–10:00 Europe/Berlin, not an exact minute. Adjust the scheduler timezone/hour if necessary.

Never commit Script Property values, source files, reports or credentials. Do not deploy the collector as a public web app.

## Existing working installations

The assistant instructions and templates can be used with an existing scanner without reinstalling it. If explicitly updating the collector, back up the installed code, keep the existing private properties/folder/state/manifest/trigger and verify compatibility. Do not call initializeOutputFolder or enableDailyScan again. Do not run another process against the same output folder concurrently.

## Output and limits

The scanner writes processed_jobs.json, candidates.json and candidates.md in its private folder. Candidates contain up to 20 employer-verified postings, with deferred work retained. Aggregator discovery leads are separate and unverified. These counts are work budgets, not shortlist quotas or evidence of suitable jobs.

Default board work budget: 80 attempted boards per run, with rotation and pagination checkpoints. Public discovery feeds include Arbeitnow, Jobicy and Remotive. Source failures are logged as partial coverage. Check the employer's original posting before acting on an opportunity.

Apps Script quotas and provider access limits apply. The soft deadline cannot cancel in-flight requests. Read-only source/Tracker scopes and app-file output access are included in the manifest; external HTTP requests and trigger management are also required.

## Optional paid scoring — off by default

Scoring.gs and ScoringConfig.gs are supplied for compatibility and synthetic tests; they are not required for collector-only use. If installed, no model calls occur unless AI_SCORING_ENABLED is exactly `true` and private OPENAI_API_KEY/OPENAI_MODEL configuration is valid. AI_MAX_JOBS defaults to 3. Enabling scoring sends selected private source text to the configured API and incurs provider charges. Do not enable it merely to follow this guide.

The free guided workflow instead reviews the private report with your assistant and asks you decisive questions. That assistant environment may have its own subscription costs and usage limits.
