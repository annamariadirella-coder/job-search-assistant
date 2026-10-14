# Verification scope

Initial package prepared 14 October 2026.

User-friendly onboarding revision: existing collector suites and new search-profile tests executed locally and passed. Tests cover Spain/remote Europe acceptance, remote-only and country-exclusion handling, junior/title/language filtering, malformed JSON rejection, preservation of original defaults, read-only configuration checks and blocking the Germany-specific paid scorer for custom profiles. The full end-user installation with real Google permissions was not repeated. The fictional CV walkthrough is an illustration, not a document-export or outcome benchmark.

- Collector synthetic suite executed locally with Node.js: passed.
- Covered: public feeds/pagination, queue preservation, tracker deduplication, rotations, provider errors/recovery, identity checks and optional scoring failure/citation guardrails.
- No new paid AI call, public web-app deployment, real application submission or change to the existing private scan is part of this package.
- The reusable assistant instruction and templates were reviewed for consistency and privacy; they are not a trained or independently benchmarked semantic-matching engine.
- User installation, authorization, source permissions and daily trigger health must be verified in that user's Google account.
- Existing defaults target Germany/remote Europe and selected senior role families. No general market-coverage or fit-accuracy guarantee is made.
- Provider endpoints can change. Failed endpoints do not establish that the employer has stopped hiring.
- The initial package does not include experimental pilot code or private review cards.

The public release includes only instructions, blank templates, public collector source, synthetic fixtures, licensing and setup documentation. CVs, Evidence Bank contents, tracker data and live outputs are not included.
