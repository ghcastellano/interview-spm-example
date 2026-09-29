# Northstar — Avon-context Senior Program Manager interview case

A password-protected business-transformation dashboard with public Avon business context and fictional delivery data for a Senior Program Manager interview. Eight views cover executive visibility, accountability, roadmap, prioritization, legacy cutover, asset integration, SOPs, training and governance.

## Access

The welcome page asks only for a shared password. No username, email, account or external identity provider is required. The password is checked on the server. JavaScript, CSS and fixture data require the same signed session as the dashboard. Sessions expire after eight hours; **Lock access** clears the browser session. Rotating either server secret invalidates previously issued sessions.

`ACCESS_PASSWORD` (at least 6 characters) and `SESSION_SECRET` (at least 32 characters) must be configured in Vercel for production and preview. Never prefix these values with `VITE_`, place them in client code or commit them. Missing configuration fails closed.

## Local use

```sh
npm ci --prefix client
cp .env.example .env.local
# Set your own strong ACCESS_PASSWORD and random SESSION_SECRET in .env.local.
npm run build
npm start
```

Open http://127.0.0.1:4174. This server exercises the same gateway as production. The client Vite dev server alone is not the protected entrypoint.

## Deployment

The Vercel project is connected to GitHub; pushes to `main` deploy production. `vercel.json` builds the React app into `client/dist` and packages these files inside the Node function. The public output directory is intentionally empty: there is no publicly served copy of the data bundle. All requests go through `api/gateway.js` and authenticated responses are not cached.

## Scenario and presentation

Avon’s public services and the Hollywood/Saticoy branch names provide business context. All project gaps, assignments, budgets, staffing, counts and outcomes are fictional. The fixed scenario snapshot is September 29, 2026. The sample scope contains 1,200 Hollywood pilot records, 1,000 Saticoy pilot records and 800 hypothetical incoming portfolio records, not verified Avon fleet sizes. The incoming portfolio type, geography and scale require discovery. There are 11 initiatives across six workstreams; 6 active, 2 complete and 3 planned. 2,902 of 3,000 records are mapped and 92 of 120 learners certified. Cutover remains NO-GO: only 2 of 5 mandatory gates pass. See [Avon context and role mapping](AVON-CONTEXT.md) for sources and assumptions.

Start with the **Single transformation dashboard**, inspect an at-risk initiative in its eight-field register, explain the evidence gates under **Legacy cutover**, compare rollout cohorts under **Asset integration**, and close with the recommendation in the **Governance & decisions** log. The password page explains the proposed transformation approach and mock-data boundary. The intended implementation would connect the client’s management tools, such as Jira, Oracle work-management solutions or other systems, subject to discovery and access; no integration is active in this demo.

Decision approvals are local simulations. They never change release evidence. Reset demo decisions before an interview. Sample SOPs are included; screenshot packs and video demonstrations are described curriculum deliverables, not media supplied by this demo.

The original dashboard's timeline, dependency matrix and prioritization views were adapted for this case. This publication repository contains no Jira backend, real operational data, credentials or original repository history.

## Validation

`npm test` checks session security, expiry, rotation, data integrity, dependency cycles, score calculations and CSV escaping. The browser verification covers password-only entry, incorrect passwords, protected asset access, session persistence, all dashboard views and logout. No account is created and no database is required.
