# Northstar — Senior Program Manager interview case

A password-protected, fictional business-transformation dashboard for a Senior Program Manager interview. Eight views cover executive visibility, accountability, roadmap, prioritization, legacy cutover, asset integration, SOPs, training and governance.

## Access

The welcome page asks only for a shared password. No username, email, account or external identity provider is required. The password is checked on the server. JavaScript, CSS and fixture data require the same signed session as the dashboard. Sessions expire after eight hours; **Lock access** clears the browser session. Rotating either server secret invalidates previously issued sessions.

`ACCESS_PASSWORD` (at least 16 characters) and `SESSION_SECRET` (at least 32 characters) must be configured in Vercel for production and preview. Never prefix these values with `VITE_`, place them in client code or commit them. Missing configuration fails closed.

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

All business names, people, numbers and outcomes are illustrative. The fixed snapshot is September 29, 2026. The operation expands from 8 to 11 locations with 3,000 new managed assets. There are 11 initiatives across six workstreams; 6 active, 2 complete and 3 planned. 2,902 assets are mapped and 92 of 120 operators certified. Cutover remains NO-GO: only 2 of 5 mandatory gates are passed.

Start with **Executive overview**, inspect an at-risk initiative in the **Transformation register**, explain the evidence gates under **Legacy cutover**, compare locations under **Asset integration**, and close with the recommendation in the **Governance & decisions** log. The built-in presentation guide provides a ten-minute walkthrough.

Decision approvals are local simulations. They never change release evidence. Reset demo decisions before an interview. Sample SOPs are included; screenshot packs and video demonstrations are described curriculum deliverables, not media supplied by this demo.

The original dashboard's timeline, dependency matrix and prioritization views were adapted for this case. This publication repository contains no Jira backend, real operational data, credentials or original repository history.

## Validation

`npm test` checks session security, expiry, rotation, data integrity, dependency cycles, score calculations and CSV escaping. The browser verification covers password-only entry, incorrect passwords, protected asset access, session persistence, all dashboard views and logout. No account is created and no database is required.
