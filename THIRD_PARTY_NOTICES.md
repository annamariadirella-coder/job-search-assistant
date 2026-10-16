# Reused source

Collector files in apps-script/, synthetic fixtures in tests/ and context/apps_script_boards.json are reused from [JobOps](https://github.com/annamariadirella-coder/apply-maybe-skip), commit d16f1d0d4949b2d8fe1d92b4a24a34525da46339, under the MIT License. The original copyright and permission notice is retained in LICENSE.

This package presents those collector components alongside a guided evidence-based application workflow. It does not include the JobOps extension, dashboard or private workspace.

The user-friendly onboarding revision modifies Code.gs to accept a private search profile and adds a read-only configuration check. Scoring.gs blocks the inherited Germany-specific paid scorer for custom profiles. These changes are specific to Next Chapter; the upstream JobOps snapshot and the owner's private installation are not modified automatically.
# Public discovery feed attribution

We Work Remotely supplies a public RSS feed: https://weworkremotely.com/remote-job-rss-feed . Retain the original listing links and source name.

Remote OK supplies https://remoteok.com/api . Its feed requires credit to Remote OK and a direct, followable link to the original Remote OK listing when sharing or publishing results. The collector retains both the source name and listing URL. Do not use its logo without permission. Review the feed terms before redistributing results.

Working Nomads links its public API from https://www.workingnomads.com/jobs to https://www.workingnomads.com/api/exposed_jobs/ . Retain its name and original listing links. This integration is for private job-search review; API availability does not grant rights to build a competing job board or redistribute listings. Terms: https://www.workingnomads.com/terms-and-conditions .

Himalayas provides https://himalayas.app/jobs/api/search with documentation at https://himalayas.app/docs/remote-jobs-api . Display Himalayas attribution and retain the provider's original applicationLink for application navigation. Its API terms apply to personal and commercial integrations and prohibit redistribution of job data to other boards or aggregators, including Google Jobs and LinkedIn Jobs. The repository distributes adapter code and synthetic tests, not provider job data. No API key or paid service is configured by this change.

