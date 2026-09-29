import test from 'node:test';
import assert from 'node:assert/strict';
import { configured,validPassword,issueSession,validSession } from '../lib/access.js';
const env={ACCESS_PASSWORD:'fictional-test-password-only',SESSION_SECRET:'unit-test-session-secret-with-32-characters'};
test('access fails closed without valid configuration',()=>{assert.equal(configured({}),false);assert.equal(validPassword('',{}),false);assert.equal(validSession('anything',{}),false);});
test('password is mandatory, exact and bounded',()=>{assert.ok(validPassword(env.ACCESS_PASSWORD,env));for(const password of ['',undefined,'wrong',env.ACCESS_PASSWORD+' ',Array(300).fill('x').join('')])assert.equal(validPassword(password,env),false);});
test('sessions reject tampering and expire after eight hours',()=>{const now=Date.now(),token=issueSession(env,now);assert.ok(validSession(token,env,now));assert.equal(validSession(token+'x',env,now),false);assert.equal(validSession(token,env,now+8*60*60*1000),false);assert.equal(validSession('invalid',env),false);});
test('password or signing-key rotation invalidates existing sessions',()=>{const token=issueSession(env);assert.equal(validSession(token,{...env,ACCESS_PASSWORD:'different-password-123456'}),false);assert.equal(validSession(token,{...env,SESSION_SECRET:'different-key-with-at-least-32-characters'}),false);});
