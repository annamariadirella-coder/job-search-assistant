# Is the scan doing enough?

The 80-board default is attempted work, not 80 healthy sources. Twenty verified postings is a report budget, not twenty suitable jobs. Neither proves complete market coverage.

Use the private report to check board failures, deferred work and whether the report repeatedly fills its budget. Preserve daily snapshots privately before the next run overwrites them. Compare several runs before changing budgets.

An optional offline check requires Node.js and your downloaded private `candidates.json` and `processed_jobs.json`:

```sh
node tools/audit-scan.cjs /private/path/candidates.json /private/path/processed_jobs.json
```

It reads files without modifying them or contacting any service. Output contains counts, not company names, job descriptions, links or private file IDs. Keep inputs and output private. Use a report and state saved from the same completed run; a count mismatch means they may be out of sync.

Last verification age is not time waiting in the queue. The collector keeps delivered postings pending until tracked or removed, and revisits the least recently checked items. One snapshot cannot prove starvation or how frequently the budget fills. Successful pages do not prove that every page of a board was read.

If sources fail, verify their official career pages and repair or retire obsolete source routes. If reports contain irrelevant roles, refine the reviewed search profile before raising budgets. Review deferred roles directly while investigating. Always check the tracker by employer and role, since a repost or changed URL may already be an application.

The collector accepts legacy provider:board audit keys as well as regional keys, so audited unavailable routes are actually paused. A route with two recorded not-found failures rests for seven days from its last attempt, then may be retried; the explicit RETRY_UNAVAILABLE_BOARDS setting bypasses these pauses. A pause applies to a source route, not to all roles at that employer. Quota/rate-limit recovery uses the existing provider logic.

Measure the outcome that matters separately: new, employer-confirmed opportunities suitable for the candidate, and applications prepared from confirmed career evidence. Discovery leads still need employer confirmation.
