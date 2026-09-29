// Avon-context demonstration scenario. Public business facts are separated from fictional delivery data.
export const snapshot = "2026-09-29";
export const workstreams = [
  "ERP & systems",
  "Legacy retirement",
  "Asset integration",
  "Processes & SOPs",
  "Training & adoption",
  "Governance & scale"
];
export const projects = [
  {
    "id": "ERP-01",
    "name": "Stabilize rental billing & ERP controls",
    "stream": "ERP & systems",
    "owner": "Maya Chen",
    "start": "2026-08-03",
    "deadline": "2026-10-09",
    "status": "At risk",
    "progress": 65,
    "dependencies": [],
    "risk": "Extensions, fuel and mileage exceptions may delay accurate rental invoices.",
    "nextAction": "Validate 12 rental billing cases with Finance and branch leads by Oct 2.",
    "decision": "DEC-01",
    "value": 10,
    "urgency": 10,
    "reduction": 8,
    "effort": 5,
    "moscow": "Must Have",
    "businessContext": "Proposed discovery focus: trace a production booking from quote to agreement, pickup, extension, return and invoice. Include corporate-account authorization and COI checkpoints. The ERP platform and current gaps are unconfirmed.",
    "deliverables": "Current-state workflow and configuration inventory; issue log separating defects, configuration gaps, process gaps and unresolved policy decisions; inventory of spreadsheet workarounds; prioritized implementation roadmap with owner, deadline and vendor dependency.",
    "acceptance": "Finance and branch leads approve 12 sample cases covering multi-vehicle bookings, daily/weekly/monthly terms, extensions, mileage, fuel, returns and invoice adjustments. Policy and pricing rules must be confirmed with Avon before configuration.",
    "measures": "Proposed measures: first-pass invoice accuracy, billing-exception age and return-to-invoice time. Establish baselines during discovery; no actual Avon results are represented.",
    "requirement": "ERP & systems stabilization · operational decisions · prioritized implementation roadmap",
    "ownerRole": "ERP workstream lead"
  },
  {
    "id": "ERP-02",
    "name": "Reconcile fleet, customer & parking records",
    "stream": "ERP & systems",
    "owner": "Diego Santos",
    "start": "2026-08-10",
    "deadline": "2026-10-16",
    "status": "On track",
    "progress": 72,
    "dependencies": [],
    "risk": "Duplicate VINs or stale availability may allocate a vehicle already on rent.",
    "nextAction": "Resolve 84 duplicate records within the 98 exceptions; secure controller sign-off.",
    "decision": null,
    "value": 9,
    "urgency": 9,
    "reduction": 10,
    "effort": 8,
    "moscow": "Must Have",
    "businessContext": "Use a canonical fleet record for VIN, vehicle class, home branch, current location, rental status and maintenance hold. Model studio-parking spaces and reservations separately from vehicles; the 3,000 records are fictional test scope, not Avon fleet size.",
    "deliverables": "Source-to-target data dictionary; corporate-customer and agreement crosswalk; fleet and parking resource register; ownership rules; reconciliation workbook with exception queue. Include specialty production vehicles, vans and trucks in test data.",
    "acceptance": "All 3,000 scenario records mapped, duplicate identifiers resolved and active/future bookings matched to the correct resource. Controller signs financial totals; branch leads verify availability and parking allocations.",
    "measures": "Record mapping completeness, duplicate rate and unresolved booking conflicts. The 84 duplicate records are a subset of 98 exceptions; the remaining 14 have incomplete fields.",
    "requirement": "ERP stabilization · asset tracking · reconciliation · legacy dependencies",
    "ownerRole": "Data steward / fleet lead"
  },
  {
    "id": "LEG-01",
    "name": "Retire legacy rental & billing workflows",
    "stream": "Legacy retirement",
    "owner": "Priya Shah",
    "start": "2026-09-01",
    "deadline": "2026-11-13",
    "status": "Blocked",
    "progress": 40,
    "dependencies": [
      "ERP-01",
      "ERP-02",
      "TRN-01"
    ],
    "risk": "Open booking, reconciliation and recovery gates prevent a safe switch.",
    "nextAction": "Rehearse reservations-to-invoice cutover; close G2–G4 before the Nov 6 review.",
    "decision": "DEC-02",
    "value": 8,
    "urgency": 10,
    "reduction": 10,
    "effort": 8,
    "moscow": "Must Have",
    "businessContext": "Hypothetical legacy dependencies include future reservations, on-rent agreements, extension records, fleet availability, corporate accounts, parking bookings and financial exports. Discover actual tools and interfaces before selecting systems to retire.",
    "deliverables": "Dependency map with system owner, upstream/downstream interface and system of record; cutover runbook; UAT matrix; control-total reconciliation; five go/no-go gates; rollback and communications plan; searchable archive and vendor-exit checklist.",
    "acceptance": "All five gates must pass. Reconcile active rentals, future bookings, resource availability and financial balances before switch. Run a recovery rehearsal with queued pickup/return transactions and explicit authority to abort.",
    "measures": "Critical-case pass rate, reconciliation variance, booking conflicts and recovery time. Confirm the proposed two-hour recovery objective with branch Operations and the vendor.",
    "requirement": "Legacy retirement · dependency map · tests · reconciliation · go/no-go · contingency",
    "ownerRole": "Cutover lead"
  },
  {
    "id": "INT-01",
    "name": "Integrate a new managed asset portfolio",
    "stream": "Asset integration",
    "owner": "Elena Torres",
    "start": "2026-08-17",
    "deadline": "2026-10-30",
    "status": "At risk",
    "progress": 58,
    "dependencies": [
      "ERP-02",
      "SOP-01"
    ],
    "risk": "New-portfolio records and role readiness lag the existing-branch pilots.",
    "nextAction": "Resolve 56 new-portfolio mapping exceptions; confirm scope before staging rollout.",
    "decision": "DEC-03",
    "value": 10,
    "urgency": 9,
    "reduction": 8,
    "effort": 13,
    "moscow": "Must Have",
    "businessContext": "The transformation brief prioritizes a significant new managed portfolio. Its identity, asset mix, size and geography are not public facts used here. This scenario uses 800 hypothetical incoming records plus 2,200 existing pilot records at Hollywood and Saticoy.",
    "deliverables": "Repeatable onboarding playbook; scope and contract inventory; RACI; asset, customer and booking migration; capacity and geography assessment; permissions and vendor setup; acceptance pack; 14-day hypercare and 30-day benefits review.",
    "acceptance": "Per rollout group: 100% data mapping, at least 90% role certification, full shift-lead coverage, passed UAT and local sign-off. No group is currently authorized to launch. Existing-branch pilots precede the hypothetical incoming portfolio.",
    "measures": "Time to onboard, data exceptions, certification coverage and unresolved post-launch incidents. Separate vehicle availability from studio-parking capacity when the portfolio scope includes both.",
    "requirement": "New asset / business integration · significant portfolio · future location and market expansion",
    "ownerRole": "Integration lead"
  },
  {
    "id": "SOP-01",
    "name": "Standardize reservation-to-cash SOPs",
    "stream": "Processes & SOPs",
    "owner": "Lucas Reed",
    "start": "2026-08-03",
    "deadline": "2026-10-09",
    "status": "On track",
    "progress": 80,
    "dependencies": [
      "ERP-01"
    ],
    "risk": "Local handoff gaps may leave returned vehicles unavailable or invoices incomplete.",
    "nextAction": "Pilot SOP-101 with rental-counter and fleet leads at Hollywood and Saticoy on Oct 1.",
    "decision": null,
    "value": 8,
    "urgency": 7,
    "reduction": 7,
    "effort": 3,
    "moscow": "Must Have",
    "businessContext": "Map handoffs among reservations, corporate-account support, rental counter, yard/fleet and Finance. Include production bookings, vehicle substitutions, extensions, after-hours returns and exception handling.",
    "deliverables": "Current/future process maps; SOP-101 checklist; role ownership; approval and exception paths; annotated screenshots; short walkthrough-video scripts; troubleshooting guide; version and approval log. Media capture follows validated system access.",
    "acceptance": "Both pilot branches complete a representative rental cycle and exception exercise. A returned vehicle remains on inspection/maintenance hold until an authorized fleet lead releases it. Finance confirms invoice evidence before close.",
    "measures": "Return-to-ready turnaround, return-to-invoice time, avoidable rework and SOP exception age; baseline and target agreed with process owners.",
    "requirement": "Process mapping & SOPs · checklists · screenshots · videos · troubleshooting",
    "ownerRole": "Process excellence lead"
  },
  {
    "id": "SOP-02",
    "name": "Publish fleet intake & parking playbooks",
    "stream": "Processes & SOPs",
    "owner": "Lucas Reed",
    "start": "2026-08-03",
    "deadline": "2026-09-25",
    "status": "Complete",
    "progress": 100,
    "dependencies": [],
    "risk": "Uncontrolled changes could confuse fleet readiness with parking-space availability.",
    "nextAction": "Review version 1.1 after the first new-portfolio onboarding wave.",
    "decision": null,
    "value": 7,
    "urgency": 5,
    "reduction": 8,
    "effort": 3,
    "moscow": "Should Have",
    "businessContext": "Define a practical intake control for rental vehicles and a separate allocation control for studio-parking spaces. Completion refers only to written sample playbooks in this demonstration scenario, not an Avon-approved operating procedure.",
    "deliverables": "SOP-102 intake checklist and SOP-104 studio-parking checklist; required fields by resource type; duplicate and overlap checks; maintenance holds; troubleshooting and approval records.",
    "acceptance": "Fleet intake verifies identity, class, branch, condition and release authority. Parking intake verifies capacity, access window and allocation with no overlapping reservation. Process owners approve publication before live use.",
    "measures": "Duplicate-resource rate, intake-to-ready time and parking allocation conflicts; monthly exception review and quarterly controlled revision.",
    "requirement": "Practical SOPs · asset intake · scalable operational processes · ongoing governance",
    "ownerRole": "Process excellence lead"
  },
  {
    "id": "TRN-01",
    "name": "Certify rental, fleet & billing teams",
    "stream": "Training & adoption",
    "owner": "Ana Costa",
    "start": "2026-09-01",
    "deadline": "2026-10-23",
    "status": "At risk",
    "progress": 62,
    "dependencies": [
      "SOP-01"
    ],
    "risk": "New-portfolio certification is 55%; pickup demand limits protected training time.",
    "nextAction": "Schedule two shift-covered scenario labs; reassess failed rental and return cases.",
    "decision": "DEC-01",
    "value": 8,
    "urgency": 9,
    "reduction": 9,
    "effort": 5,
    "moscow": "Must Have",
    "businessContext": "Build role-based paths for rental-counter staff, yard/fleet teams, Finance/corporate accounts and branch supervisors. Training language and accessibility needs require discovery; no workforce language profile is assumed.",
    "deliverables": "Role/skill matrix; sample SOPs and checklists; annotated screenshot packs and short video demonstrations to produce after system validation; sandbox exercises; scored assessments; train-the-trainer and new-hire learning paths.",
    "acceptance": "At least 90% certified in each rollout group and 100% shift-lead coverage. Certification requires successful task execution and exception escalation, not attendance. Failed attempts trigger coached practice and reassessment.",
    "measures": "Time to independent task execution, assessment pass rate, new-hire ramp time and repeat support questions. Mock coverage is 92/120, reconciled across modules and rollout groups.",
    "requirement": "Training infrastructure · role-based modules · reduce dependence on individual experts",
    "ownerRole": "Training & adoption lead"
  },
  {
    "id": "GOV-01",
    "name": "Run the single transformation dashboard",
    "stream": "Governance & scale",
    "owner": "Gustavo Castellano",
    "start": "2026-08-03",
    "deadline": "2026-09-18",
    "status": "Complete",
    "progress": 100,
    "dependencies": [],
    "risk": "Unresolved decisions could delay pickups, fleet readiness or portfolio integration.",
    "nextAction": "Publish Friday decisions with owners and dates; track overdue actions.",
    "decision": null,
    "value": 8,
    "urgency": 8,
    "reduction": 7,
    "effort": 2,
    "moscow": "Must Have",
    "businessContext": "Use one transformation register across rental operations, fleet, Finance, branch leadership and external vendors. Gustavo is the proposed program lead; other named owners and roles are illustrative assignments.",
    "deliverables": "Eight-field dashboard: Project, Owner, Deadline, Status, Dependency, Risk, Next Action and Executive Decision Required; RACI; weekly pre-read; RAID and decision logs; documented escalation thresholds.",
    "acceptance": "Monday triage, Wednesday dependencies and Friday executive decisions at 09:00 Pacific. Owners refresh evidence before review; publish decisions and action owners the same day. Simulated approval never changes readiness gates.",
    "measures": "Overdue actions, decision latency, unresolved dependencies and milestone predictability. Review rental continuity, adoption and business outcomes alongside delivery progress.",
    "requirement": "Single transformation dashboard · disciplined weekly program-management cadence",
    "ownerRole": "Program lead (proposed)"
  },
  {
    "id": "SYS-01",
    "name": "Integrate fleet, rental & workflow systems",
    "stream": "Governance & scale",
    "owner": "Maya Chen",
    "start": "2026-11-02",
    "deadline": "2027-01-29",
    "status": "Planned",
    "progress": 0,
    "dependencies": [
      "LEG-01"
    ],
    "risk": "Vendor interfaces and fleet-status ownership require discovery before integration.",
    "nextAction": "Validate reservation, return, maintenance and parking interfaces at the November review.",
    "decision": null,
    "value": 7,
    "urgency": 4,
    "reduction": 5,
    "effort": 8,
    "moscow": "Should Have",
    "businessContext": "Proposed month-6 interfaces connect booking demand, rental agreements, vehicle availability, maintenance holds, transfers and billing. Parking capacity remains its own resource ledger. Actual vendors, APIs and ERP capabilities are to be assessed.",
    "deliverables": "Systems and vendor inventory; interface contracts; error/retry ownership; fleet transfer and maintenance workflow; automation backlog; operational reporting for utilization, downtime, turnaround and invoice exceptions; support SLA.",
    "acceptance": "Pilot a rental cycle and Hollywood/Saticoy vehicle transfer without double allocation. Validate retry, duplicate-message and outage handling; Finance reconciles the result and Operations accepts the support model.",
    "measures": "Availability freshness, integration error age, utilization and downtime. Define denominators by vehicle class/branch; agree targets only after baseline measurement.",
    "requirement": "3–6–9 roadmap · ERP · workflow/fleet systems · integrations · automation · reporting · vendors",
    "ownerRole": "Systems & vendor lead"
  },
  {
    "id": "SYS-02",
    "name": "Evaluate RFID for fleet & yard tracking",
    "stream": "Governance & scale",
    "owner": "Diego Santos",
    "start": "2027-02-01",
    "deadline": "2027-04-30",
    "status": "Planned",
    "progress": 0,
    "dependencies": [
      "SYS-01",
      "INT-01"
    ],
    "risk": "Gate-read accuracy, metal interference and hardware costs may erode pilot value.",
    "nextAction": "Scope a controlled yard pilot with a proposed 98% read-accuracy gate and ROI baseline.",
    "decision": null,
    "value": 6,
    "urgency": 3,
    "reduction": 4,
    "effort": 8,
    "moscow": "Could Have",
    "businessContext": "RFID is a future option in the transformation brief, not a statement about current Avon technology. Assess whether controlled yard entry/exit and vehicle location events reduce manual checks for an agreed pilot vehicle class.",
    "deliverables": "RFID feasibility and vendor comparison; baseline manual effort; tag/reader pilot design; access and data-retention review; integration design; cost/benefit model; scale-or-stop recommendation.",
    "acceptance": "Proposed threshold: at least 98% accurate reads against manually verified passages, correct event-to-vehicle mapping and approved payback case. A reader event must not automatically mark a returned vehicle rentable before inspection.",
    "measures": "True reads divided by verified passages; missed/duplicate reads; labor time per check; total implementation and support cost. Executive sponsor approves thresholds before procurement.",
    "requirement": "Month-9 roadmap · asset tracking · RFID · automation · operational technology opportunities",
    "ownerRole": "Fleet data / pilot lead"
  },
  {
    "id": "GOV-02",
    "name": "Sustain branch, SOP & vendor governance",
    "stream": "Governance & scale",
    "owner": "Gustavo Castellano",
    "start": "2026-11-16",
    "deadline": "2027-04-30",
    "status": "Planned",
    "progress": 0,
    "dependencies": [
      "INT-01",
      "TRN-01"
    ],
    "risk": "Expansion may outpace branch-owner capacity and consistent rental controls.",
    "nextAction": "Assign process owners and vendor review dates; tailor the next-location launch checklist.",
    "decision": null,
    "value": 9,
    "urgency": 6,
    "reduction": 7,
    "effort": 5,
    "moscow": "Should Have",
    "businessContext": "After the initial six months, retain a permanent operational bridge among rental branches, Finance, fleet teams, executives and software/vendor partners. Reuse the integration playbook for future facilities, acquisitions and markets.",
    "deliverables": "Monthly SOP/adoption and vendor SLA reviews; quarterly 3–6–9 roadmap refresh; controlled process and training versions; new-location readiness pack; benefits dashboard; vendor action and renewal register.",
    "acceptance": "Every priority process has an owner, review date and linked training module. Changes trigger impact review and recertification when needed. Each expansion passes readiness gates and has a named BAU owner.",
    "measures": "Process review compliance, adoption by role/branch, vendor SLA performance, onboarding cycle time and sustained business benefits. Keep operational risk and executive decisions visible in the same register.",
    "requirement": "Permanent responsibilities · SOP governance · systems/vendors · market expansion · executive reporting",
    "ownerRole": "Program lead (proposed)"
  }
];
export const decisions = [
  {
    "id": "DEC-01",
    "title": "Protect rental billing & training capacity",
    "owner": "COO + CFO (illustrative)",
    "due": "2026-10-02",
    "recommendation": "Approve 80 hours of Finance SME support and two protected rental/return labs with branch shift coverage.",
    "tradeoff": "Scenario estimate: $8,000 of backfill protects pickup coverage while billing rules and operator proficiency are validated.",
    "consequence": "Without capacity, propose moving the Oct 9 billing milestone by one week and retain the current process until validated."
  },
  {
    "id": "DEC-02",
    "title": "Authorize the rental legacy exit window",
    "owner": "COO (illustrative)",
    "due": "2026-11-06",
    "recommendation": "Hold the Nov 13 cutover until all five gates pass for active rentals, future reservations, financial balances and recovery.",
    "tradeoff": "Scenario estimate: a $4,500, 30-day legacy extension preserves reservation and pickup continuity.",
    "consequence": "Keep legacy as the declared system of record until reconciliation, training and recovery evidence pass."
  },
  {
    "id": "DEC-03",
    "title": "Stage pilots before portfolio rollout",
    "owner": "COO + Operations lead (illustrative)",
    "due": "2026-10-02",
    "recommendation": "Sequence Hollywood and Saticoy pilots first, only after their gates pass; hold the new portfolio until its readiness gaps close.",
    "tradeoff": "Two waves add one week of scenario transition support, while reducing simultaneous exposure across rental operations.",
    "consequence": "A single-wave launch exposes 800 hypothetical incoming records to incomplete mapping and 55% role certification."
  }
];
export const locations = [
  {
    "name": "Hollywood pilot",
    "region": "Existing branch · mock cohort",
    "assets": 1200,
    "mapped": 1188,
    "certified": 36,
    "learners": 40,
    "readiness": 92,
    "status": "On track",
    "owner": "Elena Torres",
    "next": "Close 12 mapping exceptions and validate a multi-vehicle production rental by Oct 9."
  },
  {
    "name": "Saticoy pilot",
    "region": "Existing branch · mock cohort",
    "assets": 1000,
    "mapped": 970,
    "certified": 34,
    "learners": 40,
    "readiness": 85,
    "status": "On track",
    "owner": "Marcus Lee",
    "next": "Close 30 mapping exceptions and raise certification above 90% before pilot approval."
  },
  {
    "name": "New portfolio · TBD",
    "region": "Hypothetical incoming scope",
    "assets": 800,
    "mapped": 744,
    "certified": 22,
    "learners": 40,
    "readiness": 61,
    "status": "At risk",
    "owner": "Sofia Rivera",
    "next": "Confirm portfolio scope; resolve 56 mapping exceptions and run protected scenario labs."
  }
];
export const gates = [
  {
    "id": "G1",
    "title": "Critical rental & parking workflow testing",
    "owner": "ERP + branch leads",
    "status": "Passed",
    "evidence": "Mock result: 48/48 reservation → pickup → return → invoice, extension and parking-allocation cases pass; no severity 1/2 defects.",
    "target": "100% critical cases pass, including maintenance holds, after-hours returns and overlapping-resource checks."
  },
  {
    "id": "G2",
    "title": "Financial, fleet & booking reconciliation",
    "owner": "Controller + fleet lead",
    "status": "Open",
    "evidence": "Mock: 2,902/3,000 scoped records mapped; 98 exceptions remain. Billing variance: 0.6%. Active/future agreement sign-off pending.",
    "target": "100% records mapped; all active/future bookings matched; zero double allocations; billing variance ≤0.1%; signed reconciliation."
  },
  {
    "id": "G3",
    "title": "Rental-team readiness",
    "owner": "Training lead",
    "status": "Open",
    "evidence": "Mock: 92/120 certified (77%); incoming cohort 22/40 (55%). Saticoy 34/40 (85%) also remains below the gate.",
    "target": "≥90% certified in every rollout group; 100% shift-lead coverage; pickup, return and exception handoffs demonstrated."
  },
  {
    "id": "G4",
    "title": "Rental continuity & rollback rehearsal",
    "owner": "Vendor + Operations",
    "status": "Open",
    "evidence": "Recovery runbook reviewed in scenario; timed rehearsal with queued pickups, returns and extensions pending Oct 16.",
    "target": "Restore the agreed rental system of record in ≤2 hours; reconcile queued transactions with zero loss or duplicate bookings."
  },
  {
    "id": "G5",
    "title": "Support, archive & retirement ownership",
    "owner": "Operations director",
    "status": "Passed",
    "evidence": "Mock: escalation roster, searchable agreement/invoice archive and 14-day hypercare coverage agreed.",
    "target": "Named duty leads; tested archive retrieval and access controls; Finance-approved retention and cancellation plan."
  }
];
export const sops = [
  {
    "id": "SOP-101",
    "name": "Reservation to return and cash",
    "owner": "Lucas Reed",
    "version": "0.9",
    "status": "In review",
    "review": "2026-10-09",
    "role": "Rental counter, fleet & billing",
    "steps": [
      "Validate dates, vehicle class, pickup branch and availability; link all vehicles in a production booking.",
      "Confirm customer/driver, corporate-account documentation and payment-authorization checkpoints under approved policy; issue the rental agreement.",
      "Record vehicle ID, mileage, fuel and condition at pickup; obtain the required handoff evidence.",
      "Route extension requests to the pickup branch. At return, capture mileage, fuel and condition; keep the vehicle on hold until inspection and any maintenance are complete.",
      "Reconcile the agreement, approved adjustments and return evidence to the invoice; resolve exceptions before daily close."
    ],
    "exception": "Mismatch between reservation and available vehicle: stop assignment, route to the branch lead for an approved alternative, update the customer and record the decision. For an after-hours return, retain the return event and hold the vehicle until inspection; do not mark it immediately rentable."
  },
  {
    "id": "SOP-102",
    "name": "Fleet intake and readiness controls",
    "owner": "Diego Santos",
    "version": "1.1",
    "status": "Published",
    "review": "2026-10-30",
    "role": "Fleet / yard teams & data stewards",
    "steps": [
      "Verify source ownership/management record, VIN, vehicle class, home branch and required documentation.",
      "Check duplicate VINs and assign one canonical fleet ID; distinguish owned, managed and transferred units.",
      "Load approved staging records with location, condition, inspection and maintenance-hold status.",
      "Reconcile counts and any linked active/future rental commitments; obtain fleet and branch approval.",
      "Release a vehicle to available inventory only after readiness approval; retain intake evidence and train the receiving team."
    ],
    "exception": "Duplicate VIN or unresolved condition: quarantine the record and keep the vehicle unavailable. Assign the fleet data steward and maintenance/branch owner; resolve and document the release before any booking assignment."
  },
  {
    "id": "SOP-103",
    "name": "Portfolio / branch launch checklist",
    "owner": "Elena Torres",
    "version": "1.0",
    "status": "Published",
    "review": "2026-10-30",
    "role": "Integration & branch managers",
    "steps": [
      "Confirm managed-portfolio scope, resource types, geography, contracts, accountable owner and local operating constraints.",
      "Map fleet, customers, rental agreements and parking resources where relevant; configure roles and vendor interfaces.",
      "Test booking, pickup, extension, return, maintenance hold and invoice flows; reconcile control totals.",
      "Certify role-based tasks, cover every shift and rehearse support and rollback paths.",
      "Approve all launch gates; run 14-day hypercare and a 30-day benefits review before handover to the local owner."
    ],
    "exception": "Failed readiness gate: hold that rollout group, record recovery owner/date, protect existing bookings and escalate customer or commercial impact to the executive sponsor."
  },
  {
    "id": "SOP-104",
    "name": "Studio-parking booking & allocation",
    "owner": "Lucas Reed",
    "version": "1.1",
    "status": "Published",
    "review": "2026-10-30",
    "role": "Parking coordinator & branch lead",
    "steps": [
      "Capture production/client request, dates, arrival/departure windows and vehicle-space requirements.",
      "Check site capacity and access constraints against the parking reservation ledger; keep parking space separate from rental-vehicle inventory.",
      "Confirm approved terms, allocation and access instructions; record accountable on-site contacts.",
      "Log arrival, space assignment and any approved changes; escalate overlapping allocations before committing capacity.",
      "Confirm departure, release parking capacity and reconcile charges and exceptions under the agreed account terms."
    ],
    "exception": "Overlapping booking or blocked access: hold the allocation, notify the parking/branch lead and agree an alternative with the client. Record the change in the parking ledger; never resolve capacity by changing vehicle rental availability."
  }
];
export const modules = [
  {
    "name": "Reservations, pickups & returns",
    "role": "Rental counter teams",
    "format": "Guided walkthrough + rental scenario lab",
    "complete": 36,
    "total": 45,
    "pass": "Complete 5 cases including a production booking, extension and after-hours return without a critical error."
  },
  {
    "name": "Rental billing & corporate accounts",
    "role": "Finance & account teams",
    "format": "Screenshot pack (planned) + reconciliation checklist",
    "complete": 24,
    "total": 30,
    "pass": "Reconcile a sample rental batch within 0.1%; route fuel, mileage and corporate-document exceptions."
  },
  {
    "name": "Fleet intake, holds & parking resources",
    "role": "Fleet / yard teams",
    "format": "SOP + sandbox exercise",
    "complete": 20,
    "total": 25,
    "pass": "Import 20 mock records without duplicates; demonstrate a maintenance hold and separate parking allocation."
  },
  {
    "name": "Branch readiness & escalation",
    "role": "Branch supervisors",
    "format": "Shift-covered lab + teach-back",
    "complete": 12,
    "total": 20,
    "pass": "Demonstrate no-go, pickup-continuity and vendor escalation procedures; coach one new-hire scenario."
  }
];
export const context = {
  "facts": "Public business context: vehicle rentals for productions, businesses and individuals; specialty fleet categories; corporate accounts; studio parking. Hollywood and Saticoy appear on the current locations page.",
  "assumptions": "All project health, dates, owners other than the presenter, budgets, staffing, fleet counts, readiness and outcomes are fictional. ERP/vendor identity, actual process gaps and the incoming portfolio scope must be discovered with Avon. Northstar is the dashboard framework, not an Avon brand or affiliated product.",
  "scope": "3,000 mock records = 1,200 Hollywood pilot + 1,000 Saticoy pilot + 800 hypothetical incoming portfolio. These are sample rollout cohorts, not verified fleet sizes. Branch names are public; the company-wide footprint needs validation because the About and Locations pages differ.",
  "sources": [
    {
      "label": "Avon · business and rental services",
      "url": "https://www.avonrents.com/"
    },
    {
      "label": "Fleet · production vehicles, vans and trucks",
      "url": "https://www.avonrents.com/fleet/"
    },
    {
      "label": "Locations · Hollywood and Saticoy",
      "url": "https://www.avonrents.com/our-locations/"
    },
    {
      "label": "FAQs · returns, extensions and parking",
      "url": "https://www.avonrents.com/faqs/"
    },
    {
      "label": "Corporate accounts · operational handoffs",
      "url": "https://www.avonrents.com/resources/corporate-accounts/"
    }
  ]
};
export const health = status => ({'On track':'on-track','At risk':'at-risk','Blocked':'blocked','Complete':'done','Planned':'no-data'}[status]);
export function toEpic(p) {
  const link = id => { const item = projects.find(x=>x.id===id); return {key:id, status:item?.status==='Complete'?'Done':item?.status}; };
  return {key:p.id, summary:p.name, created:p.start, targetStart:p.start, targetEnd:p.deadline, dueDate:p.deadline, health:health(p.status), progress:p.progress, status:p.status, statusCategory:p.status==='Complete'?'done':p.status==='Planned'?'new':'indeterminate', parentKey:`WS-${workstreams.indexOf(p.stream)+1}`, dependencies:{blockedBy:p.dependencies.map(link), blocks:projects.filter(x=>x.dependencies.includes(p.id)).map(x=>link(x.id)), relatesTo:[]}};
}
export const initiatives = workstreams.map((name,i)=>({key:`WS-${i+1}`,summary:name,health: projects.some(p=>p.stream===name&&p.status==='Blocked')?'blocked':projects.some(p=>p.stream===name&&p.status==='At risk')?'at-risk':'on-track',progress:Math.round(projects.filter(p=>p.stream===name).reduce((s,p)=>s+p.progress,0)/projects.filter(p=>p.stream===name).length)}));
export function prioritizationData() {
  const epics = projects.filter(p=>p.status!=='Complete').map(p=>({...toEpic(p),value:p.value, effort:p.effort, moscow:p.moscow, wsjf:{businessValue:p.value,timeCriticality:p.urgency,riskReduction:p.reduction,jobSize:p.effort,costOfDelay:p.value+p.urgency+p.reduction,wsjfScore:Number(((p.value+p.urgency+p.reduction)/p.effort).toFixed(2))}}));
  const median = arr=>[...arr].sort((a,b)=>a-b)[Math.floor(arr.length/2)];
  const medianEffort=median(epics.map(p=>p.effort)), medianValue=median(epics.map(p=>p.value)), medianCod=median(epics.map(p=>p.wsjf.costOfDelay));
  const quadrants={quickWins:0,bigBets:0,fillIns:0,moneyPit:0}, moscowDistribution={};
  epics.forEach(p=>{quadrants[p.wsjf.costOfDelay>=medianCod?(p.effort<medianEffort?'quickWins':'bigBets'):(p.effort<medianEffort?'fillIns':'moneyPit')]++;moscowDistribution[p.moscow]=(moscowDistribution[p.moscow]||0)+1;});
  return {epics,quadrants,moscowDistribution,medianEffort,medianValue};
}
export function registerCsv(items, decisionState) {
  const data=[['Project','Owner','Deadline','Status','Dependency','Risk','Next Action','Executive Decision Required'],...items.map(p=>[`${p.id} ${p.name}`,p.owner,p.deadline,p.status,p.dependencies.join('; ')||'None',p.risk,p.nextAction,p.decision?`${p.decision}: ${decisionState[p.decision]||'Pending'}`:'None'])];
  return data.map(row=>row.map(value=>'"'+String(value).replace(/"/g,'""')+'"').join(',')).join('\r\n');
}
