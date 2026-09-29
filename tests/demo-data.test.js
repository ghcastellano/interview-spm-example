import test from 'node:test';
import assert from 'node:assert/strict';
import { projects, decisions, locations, gates, modules, toEpic, prioritizationData, registerCsv, snapshot } from '../client/src/demo/data.js';

test('register has valid references, dates and an acyclic dependency graph',()=>{
  const ids=new Set(projects.map(p=>p.id));
  assert.equal(ids.size,projects.length);
  const visiting=new Set(), visited=new Set();
  function walk(id){assert.ok(!visiting.has(id),`Dependency cycle at ${id}`);if(visited.has(id))return;visiting.add(id);const p=projects.find(p=>p.id===id);for(const dependency of p.dependencies){assert.ok(ids.has(dependency));walk(dependency);}visiting.delete(id);visited.add(id);}
  for(const p of projects){assert.ok(p.owner&&p.risk&&p.nextAction);assert.ok(p.start<=p.deadline);assert.ok(p.progress>=0&&p.progress<=100);assert.ok(!p.decision||decisions.some(d=>d.id===p.decision));if(p.status==='Complete'){assert.equal(p.progress,100);assert.ok(p.deadline<=snapshot);}walk(p.id);}
});
test('readiness totals reconcile across locations, learning paths and gates',()=>{
  const sum=(rows,key)=>rows.reduce((n,r)=>n+r[key],0);
  assert.equal(sum(locations,'assets'),3000);assert.equal(sum(locations,'mapped'),2902);
  assert.equal(sum(locations,'certified'),sum(modules,'complete'));assert.equal(sum(locations,'learners'),sum(modules,'total'));
  assert.equal(gates.filter(g=>g.status==='Passed').length,2);
  assert.ok(locations.every(l=>l.mapped<=l.assets&&l.certified<=l.learners));
});
test('existing timeline and dependency views receive reciprocal references',()=>{
  const epics=projects.map(toEpic);
  for(const epic of epics){for(const parent of epic.dependencies.blockedBy){assert.ok(epics.find(e=>e.key===parent.key).dependencies.blocks.some(e=>e.key===epic.key));}}
});
test('prioritization computes scores and counts from unfinished initiatives',()=>{
  const result=prioritizationData();assert.equal(result.epics.length,9);
  assert.equal(Object.values(result.quadrants).reduce((a,b)=>a+b),9);
  assert.equal(Object.values(result.moscowDistribution).reduce((a,b)=>a+b),9);
  for(const e of result.epics)assert.equal(e.wsjf.wsjfScore,Number((e.wsjf.costOfDelay/e.wsjf.jobSize).toFixed(2)));
});
test('CSV exports all eight fields, selected scope, simulated decision state and quoted text',()=>{
  const csv=registerCsv([{...projects[0],nextAction:'Validate "billing", then close'}],{'DEC-01':'Approved'});
  assert.equal(csv.split('\r\n').length,2);assert.ok(csv.includes('"Executive Decision Required"'));assert.ok(csv.includes('"DEC-01: Approved"'));assert.ok(csv.includes('"Validate ""billing"", then close"'));
});
