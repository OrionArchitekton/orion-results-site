import assert from 'node:assert/strict';
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
const workflow = fs.readFileSync('.github/workflows/ci.yml', 'utf8');
const program = workflow.match(/run: python3 -c '([^']+)'/)[1];
const success = { result: 'success' };
const cases = [
  [{ build: success, gitleaks: success }, true],
  [{ build: success }, false],
  [{ gitleaks: success }, false],
  [{ build: success, gitleaks: { result: 'skipped' } }, false],
  [{ build: { result: 'cancelled' }, gitleaks: success }, false],
  [{ build: success, gitleaks: { result: 'failure' } }, false],
  [{ build: success, gitleaks: success, unexpected: success }, false],
];
for (const [needs, passing] of cases) {
  const run = spawnSync('python3', ['-c', program], {
    env: { ...process.env, RESULTS: JSON.stringify(needs) }, encoding: 'utf8',
  });
  assert.ifError(run.error);
  assert.equal(run.status === 0, passing, JSON.stringify(needs));
}
console.log('CI prerequisite gate: 7 native positive/negative cases passed');
