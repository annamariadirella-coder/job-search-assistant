# Job Search Assistant

A guided workflow for finding relevant jobs and preparing truthful, tailored applications from a private Career Evidence Bank.

The assistant helps with four steps:

1. Find relevant vacancies and verify the original employer posting.
2. Check the applicant's private tracker to avoid duplicate applications.
3. Map material requirements to confirmed experience, transferable experience and unresolved questions.
4. Ask only questions that can materially change the application, then prepare a targeted CV and any requested application answers.

The applicant decides whether to apply and submits the application.

## What this project is today

This package contains a reusable assistant instruction, an Evidence Bank template, a tracker template, a review checklist and an optional Google Apps Script morning scanner. It is a documented, human-guided workflow, not an autonomous application agent. The scanner runs only after you configure it in your own Google account.

Connected browsing, document and spreadsheet tools depend on the assistant environment. The files themselves require no API subscription. An existing assistant subscription or optional external services may have their own costs and limits.

## Start

1. Fill out [the evidence template](evidence-bank-template.md) privately. Do not commit the completed version.
2. Provide your role priorities, location/language constraints, compensation requirements and application tracker privately to your assistant.
3. Use [the assistant instruction](assistant-instruction.md), and optionally set up [the morning scanner](apps-script/README.md).
4. Request a small set of relevant, employer-verified jobs. An empty set is acceptable if no credible match is found.
5. Answer any decisive clarification questions. Review the final CV and application answers before submitting them yourself.

## Design principles

- Direct user clarifications outrank older source wording. Keep facts and scope boundaries explicit.
- A job title alone is insufficient to establish fit or exclude a role.
- Mandatory requirements and preferences must be distinguished.
- Missing evidence is an uncertainty, not proof the applicant has never done something.
- Supervising a technical implementation does not establish personally building it.
- Collaboration and influence do not automatically establish final ownership.
- No invented experience, metrics, tools, language proficiency or seniority.
- No quota of weak recommendations, fabricated fit percentages or guaranteed interview predictions.
- Errors, partial coverage and unverified employer availability must be disclosed.
- No autonomous applications, outreach, payments or changes to source documents.

## Privacy

Career records, CVs, tracker exports, contact information and clarification histories stay in the applicant's private environment. Publish only blank templates, generic instructions and fictional examples. Do not publish real job-search screenshots containing personal information.

## Morning scanner

The collector reads private reference files and a Google Sheets tracker, rotates through configured employer ATS feeds, checks public discovery feeds, filters/deduplicates jobs and saves a private review packet. It distinguishes employer-verified jobs from discovery leads. Collection alone does not establish personal fit and never creates a CV or applies for a job.

The included defaults target senior Operations/Strategy/Product-adjacent roles in Germany and remote Europe. They do not automatically adapt to the text of your Evidence Bank. Other career targets require reviewing the code's role/location/language filters and board catalog. Coverage is partial, and endpoints may fail.

An existing working installation does not need replacement to use the assistant workflow. Do not create a duplicate trigger or output writer. See [setup and existing-installation guidance](apps-script/README.md).

## Tests and provenance

Run `node tests/apps_script.test.cjs` with Node.js 20+ for synthetic collector checks. The collector and its fixtures are a pinned MIT-licensed snapshot from JobOps; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). No private runtime data is included.

These tests cover collector behavior and optional scoring guardrails; they do not prove that the assistant workflow will find a job or generate error-free application documents. See [verification scope](VERIFICATION.md).

## Current limitations

The workflow requires human judgment and source verification. Exact quotations establish provenance, not semantic correctness. Job availability can change; web research is not exhaustive. A polished CV cannot guarantee an interview or job offer. The workflow has not undergone an independent accuracy benchmark.

## License

MIT. Copyright notices for the reused collector are retained. LinkedIn publication is a separate action; no post is sent by this project.
