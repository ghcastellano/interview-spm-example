// Entirely fictional interview case. Fixed snapshot keeps the narrative reproducible.
export const snapshot = '2026-09-29';
export const workstreams = ['ERP & systems', 'Legacy retirement', 'Asset integration', 'Processes & SOPs', 'Training & adoption', 'Governance & scale'];
const rows = [
  ['ERP-01', 'Resolve ERP billing configuration gaps', 0, 'Maya Chen', '2026-08-03', '2026-10-09', 'At risk', 65, [], 'Incorrect tax mapping may delay the first consolidated close.', 'Validate 12 exception cases with Finance by Oct 2.', 'DEC-01', 10, 10, 8, 5, 'Must Have'],
  ['ERP-02', 'Reconcile asset and customer master data', 0, 'Diego Santos', '2026-08-10', '2026-10-16', 'On track', 72, [], 'Duplicate asset IDs could contaminate migrated balances.', 'Resolve remaining 84 duplicates and obtain controller sign-off.', null, 9, 9, 10, 8, 'Must Have'],
  ['LEG-01', 'Retire legacy dispatch and billing', 1, 'Priya Shah', '2026-09-01', '2026-11-13', 'Blocked', 40, ['ERP-01', 'ERP-02', 'TRN-01'], 'Open reconciliation and recovery gates prevent a safe cutover.', 'Run cutover rehearsal; close G2 and G4 before the Nov 6 review.', 'DEC-02', 8, 10, 10, 8, 'Must Have'],
  ['INT-01', 'Onboard Pacific managed asset portfolio', 2, 'Elena Torres', '2026-08-17', '2026-10-30', 'At risk', 58, ['ERP-02', 'SOP-01'], 'Phoenix has incomplete asset mapping and low operator readiness.', 'Close Phoenix data exceptions; stage rollout by location.', 'DEC-03', 10, 9, 8, 13, 'Must Have'],
  ['SOP-01', 'Standardize work order to cash', 3, 'Lucas Reed', '2026-08-03', '2026-10-09', 'On track', 80, ['ERP-01'], 'Local workarounds may persist after the SOP is released.', 'Pilot SOP-101 with two shift supervisors on Oct 1.', null, 8, 7, 7, 3, 'Must Have'],
  ['SOP-02', 'Publish asset intake and exception playbooks', 3, 'Lucas Reed', '2026-08-03', '2026-09-25', 'Complete', 100, [], 'Monthly reviews needed to prevent outdated instructions.', 'Review version 1.1 after the first Pacific onboarding wave.', null, 7, 5, 8, 3, 'Should Have'],
  ['TRN-01', 'Certify role-based ERP operator training', 4, 'Ana Costa', '2026-09-01', '2026-10-23', 'At risk', 62, ['SOP-01'], 'Phoenix coverage is 55%; shift coverage limits attendance.', 'Schedule two bilingual labs and reassess failed scenarios.', 'DEC-01', 8, 9, 9, 5, 'Must Have'],
  ['GOV-01', 'Establish weekly transformation governance', 5, 'Gustavo Castellano', '2026-08-03', '2026-09-18', 'Complete', 100, [], 'Decision latency needs monitoring as the portfolio grows.', 'Publish Friday decision log and verify action ownership.', null, 8, 8, 7, 2, 'Must Have'],
  ['SYS-01', 'Pilot fleet and workflow integration', 5, 'Maya Chen', '2026-11-02', '2027-01-29', 'Planned', 0, ['LEG-01'], 'Vendor interface capabilities remain unvalidated.', 'Confirm API scope and support SLA at the November vendor review.', null, 7, 4, 5, 8, 'Should Have'],
  ['SYS-02', 'Pilot RFID and asset tracking automation', 5, 'Diego Santos', '2027-02-01', '2027-04-30', 'Planned', 0, ['SYS-01', 'INT-01'], 'Read accuracy and hardware cost require a field pilot.', 'Set a 98% read-accuracy gate and agree the pilot business case.', null, 6, 3, 4, 8, 'Could Have'],
  ['GOV-02', 'Scale location onboarding and SOP governance', 5, 'Gustavo Castellano', '2026-11-16', '2027-04-30', 'Planned', 0, ['INT-01', 'TRN-01'], 'Expansion may outpace local process-owner capacity.', 'Assign regional process owners and quarterly review dates.', null, 9, 6, 7, 5, 'Should Have'],
];
export const projects = rows.map(([id, name, stream, owner, start, deadline, status, progress, dependencies, risk, nextAction, decision, value, urgency, reduction, effort, moscow]) => ({id, name, stream: workstreams[stream], owner, start, deadline, status, progress, dependencies, risk, nextAction, decision, value, urgency, reduction, effort, moscow}));
export const decisions = [
  {id:'DEC-01', title:'Protect ERP stabilization capacity', owner:'COO + CFO', due:'2026-10-02', recommendation:'Approve 80 hours of Finance SME support and two protected training labs.', tradeoff:'Temporary operational backfill of $8,000 avoids accepting untested billing rules.', consequence:'Without capacity, propose moving the Oct 9 billing milestone by one week.'},
  {id:'DEC-02', title:'Authorize the legacy exit window', owner:'COO', due:'2026-11-06', recommendation:'Hold the Nov 13 cutover until every mandatory gate is passed.', tradeoff:'A 30-day legacy extension costs $4,500 but preserves dispatch continuity.', consequence:'Retain legacy as the system of record until reconciliation and rollback evidence pass.'},
  {id:'DEC-03', title:'Sequence the Pacific portfolio rollout', owner:'COO + Regional GM', due:'2026-10-02', recommendation:'Launch San Diego and Las Vegas first; hold Phoenix behind readiness gates.', tradeoff:'Two waves add one week of transition support and reduce simultaneous exposure.', consequence:'A single-wave launch exposes 800 assets to unproven data and operator readiness.'},
];
export const locations = [
  {name:'San Diego', region:'California', assets:1200, mapped:1188, certified:36, learners:40, readiness:92, status:'On track', owner:'Elena Torres', next:'Complete supervisor sign-off on Oct 9.'},
  {name:'Las Vegas', region:'Nevada', assets:1000, mapped:970, certified:34, learners:40, readiness:85, status:'On track', owner:'Marcus Lee', next:'Close 30 mapping exceptions by Oct 9.'},
  {name:'Phoenix', region:'Arizona', assets:800, mapped:744, certified:22, learners:40, readiness:61, status:'At risk', owner:'Sofia Rivera', next:'Resolve 56 mapping exceptions and complete bilingual labs.'},
];
export const gates = [
  {id:'G1', title:'Critical workflow testing', owner:'ERP lead', status:'Passed', evidence:'48/48 order → dispatch → invoice scenarios passed; no severity 1 or 2 defects.', target:'100% critical cases pass; zero severity 1/2 defects.'},
  {id:'G2', title:'Financial and asset reconciliation', owner:'Controller', status:'Open', evidence:'2,902/3,000 assets mapped; 98 exceptions remain. Billing variance: 0.6%.', target:'100% asset mapping and billing variance ≤ 0.1%; signed reconciliation.'},
  {id:'G3', title:'Operator readiness', owner:'Training lead', status:'Open', evidence:'92/120 operators certified (77%); Phoenix 22/40 (55%).', target:'≥ 90% certified in each location; 100% shift-lead coverage.'},
  {id:'G4', title:'Rollback rehearsal', owner:'Vendor + operations', status:'Open', evidence:'Restore script reviewed; timed recovery rehearsal pending Oct 16.', target:'Restore dispatch in ≤ 2 hours; reconcile queued transactions with zero loss.'},
  {id:'G5', title:'Support and retention ownership', owner:'Operations director', status:'Passed', evidence:'Vendor escalation roster, read-only archive and 14-day hypercare coverage agreed.', target:'Named duty leads, searchable archive and approved escalation path.'},
];
export const sops = [
  {id:'SOP-101', name:'Work order to cash', owner:'Lucas Reed', version:'0.9', status:'In review', review:'2026-10-09', role:'Dispatchers & billing', steps:['Dispatcher validates service request, asset ID and location.', 'Supervisor assigns crew and approves exceptions.', 'Operator records work completion and supporting evidence.', 'Billing analyst reconciles approved work to the invoice.', 'Controller reviews exceptions before the daily close.'], exception:'Missing asset ID: quarantine the order in the exception queue, assign the data steward, and do not issue an invoice until resolved.'},
  {id:'SOP-102', name:'Asset intake and exception handling', owner:'Diego Santos', version:'1.1', status:'Published', review:'2026-10-30', role:'Asset stewards', steps:['Verify ownership, site and serial number against source records.', 'Check for duplicates and assign one canonical asset ID.', 'Load the approved template into ERP staging.', 'Reconcile counts and obtain location-manager approval.', 'Release the asset for dispatch and retain import evidence.'], exception:'Duplicate serial number: stop activation, compare source records, and route to the regional data steward within one business day.'},
  {id:'SOP-103', name:'New location launch checklist', owner:'Elena Torres', version:'1.0', status:'Published', review:'2026-10-30', role:'Location managers', steps:['Confirm scope, accountable owner, asset inventory and local constraints.', 'Complete data mapping, roles and vendor configuration.', 'Run representative work orders and reconcile results.', 'Certify shift leads and verify support coverage.', 'Approve launch gates and monitor the first 14 days.'], exception:'Failed launch gate: hold that location, document the recovery owner and date, and escalate any commercial impact to the COO.'},
];
export const modules = [
  {name:'ERP dispatch essentials', role:'Dispatchers', format:'Guided walkthrough + scenario lab', complete:36, total:45, pass:'Complete 5 dispatch scenarios without a critical error.'},
  {name:'Billing and close controls', role:'Finance & billing', format:'Annotated screenshots + reconciliation checklist', complete:24, total:30, pass:'Reconcile a sample batch within 0.1% and explain exceptions.'},
  {name:'Asset intake and stewardship', role:'Asset stewards', format:'SOP + sandbox exercise', complete:20, total:25, pass:'Import 20 assets with no duplicates or missing required fields.'},
  {name:'Shift readiness and escalation', role:'Supervisors', format:'Bilingual lab + teach-back', complete:12, total:20, pass:'Demonstrate escalation, cutover hold and handoff procedures.'},
];
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
