# When something is missing or blocked

## Without the scanner

| Problem | Next step |
|---|---|
| Assistant cannot read the CV | Paste the relevant text or provide a supported document format. Do not let it infer missing history. |
| Assistant cannot browse | Provide the JD and original URL; availability remains unverified until you or a connected tool checks it. |
| Assistant cannot export a CV file | Request editable CV text and use your document editor. Do not treat a claimed file as delivered without opening it. |
| Too many questions before any help | Ask for a draft profile from the CV and only the next three decisive questions. |

## Scanner configuration check

Run `checkConfiguration`. It reads your settings/documents/tracker/folder and logs only check outcomes plus search terms. It creates no folder or trigger and writes no report. Search terms and locations are still private preferences: do not publish your logs without reviewing them.

| Blocked check | What to verify |
|---|---|
| Required private settings | All five property names from setup have nonempty values. |
| Search profile | SEARCH_PROFILE_JSON is valid JSON and matches the example's required fields and types. Keywords are literal text, not regex. |
| Evidence / targeting document | Correct file ID, account access, supported Docs/DOCX/text format and nonempty source. A PDF CV can be used in the guided assistant workflow, but is not a collector reference format. |
| Tracker | Correct native Sheet ID, actual tab/range and Company, Role title, Source, Status headers. Every populated identity row needs company and role. |
| Output folder | Correct readable Drive folder ID, not a document ID or a deleted folder. |

The checker does not guarantee write permissions, provider availability, quota headroom or a successful scan. Verify the first manual run before scheduling.

## Read the run result

- Scan stopped with an error: inspect Executions and fix it before assuming you received fresh output.
- Report says partial: review errors and unavailable sources; some work succeeded, but coverage is incomplete.
- Zero candidates with successful sources: check profile terms, tracker duplicates and deferred work. This does not prove the market has no jobs.
- Zero working sources: investigate access/provider failures before changing your career targeting.
- Discovery lead: verify the original employer before recommending an application.
- Missing old queue item after a profile change: basic filtering may remove roles outside the new profile from pending_review. Back up private state before changing profiles; this is not an archive of every job ever seen.

## Keeping costs and private data under control

Paid AI is off by default. Custom scanner profiles use the guided assistant review; the inherited paid prompt assumes Germany and is blocked for custom profiles. Your assistant subscription, if any, has its own limits. Source documents and tracker exports stay private. Never paste keys or publish raw logs in an issue.
