# CV-first walkthrough review

Reviewed 14 October 2026. This is an author-run manual simulation with scripted fictional applicant answers, not an independent user study or benchmark of AI assistants.

## Reproduce without installing the scanner

1. Follow [Start here](START-HERE.md) and paste [the fictional CV](examples/demo-inputs/cv.txt).
2. Provide [the fictional JDs](examples/demo-inputs/job-description.md) and [tracker](examples/demo-inputs/tracker.csv).
3. Use [the scripted confirmations](examples/demo-inputs/confirmations.md) when the assistant asks for missing constraints or ownership.
4. Compare the proposed evidence and CV with [the confirmed records](examples/demo-inputs/evidence-bank.md) and [tailored excerpt](examples/demo-inputs/tailored-cv.md).
5. Restart with the saved evidence and tracker. The assistant should use them rather than rely on memory or repeat already confirmed ownership questions.

## Checks and observed outcome

| Check | Outcome of this manual simulation |
|---|---|
| Begin with a CV, without installation or completed bank | Supported by the starter message and supplied input |
| Missing compensation constraint | Asked and confirmed in round 1; JD pay remains unknown |
| Limit questions | Three in the first round, combining team/KPI confirmation with relevant ownership |
| Check prior application | HarborCloud excluded using the sample tracker; CedarCloud absent from this sample |
| Missing tracker | Instructions now explicitly say duplicate checking unavailable; provide a blank tracker or relevant rows |
| Verify availability | Fictional employers cannot be verified; never label them live opportunities |
| Distinguish requirement from preference | Undocumented SaaS background remains a preference/gap, not invented experience |
| Correct ambiguous CV wording | “Built automation” narrowed to requirements/testing/training; Engineering credited for coding |
| Avoid unsupported output claims | Removed service-priority and documentation ownership; avoided precise tenure from year-only dates |
| Preserve learning | Reviewable evidence file and explicit private handoff between sessions |
| Produce application text | Editable CV excerpt produced; missing facts and submission conditions stated |
| Send or modify tracker/source automatically | No application, message, status update or source write performed |

## What changed after the walkthrough

The original example lacked reusable input files and a visible duplicate case. It also included CV duties absent from its input. The revised demo provides the inputs, confirmed records and conservative output; onboarding now explains a missing tracker and how to save progress between sessions.

## Limits and final gate

This run does not test live vacancy discovery or employer availability, exported CV layout, real hiring eligibility, installation permissions, assistant-provider behavior or job outcomes. It intentionally stops at a truthful draft. A real candidate supplies verified missing CV facts and checks availability/pay/employment conditions before submission. The scanner's synthetic tests exercise collection components separately and are not evidence of a complete live assistant run.
