const fs = require('fs');
const path = require('path');
const J = path.join(__dirname, '..', 'source', 'json');
const files = ['s1','s2','s3','s4','x5','x6','x7'];
for (const f of files) {
  const p = path.join(J, f + '.json');
  if (!fs.existsSync(p)) { console.log(f, 'MISSING'); continue; }
  let a;
  try { a = JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch (e) { console.log(f, 'PARSE-ERR', e.message); continue; }
  const t = {}; a.forEach(q => t[q.type] = (t[q.type] || 0) + 1);
  const secs = {};
  a.forEach(q => { const m = String(q.id).match(/^[sx]\d+-(.+?)-\d+$/); const k = m ? m[1] : '?'; secs[k] = (secs[k] || 0) + 1; });
  console.log('==', f, a.length, JSON.stringify(t));
  console.log('   ', Object.keys(secs).map(k => k + ':' + secs[k]).join('  '));
  const bad = a.filter(q => !q.type || q.type === 'undefined' || !q.id || !q.statement);
  if (bad.length) console.log('   BAD:', bad.map(q => q.id).join(','));
  const noSol = a.filter(q => !q.solution || !String(q.solution).trim());
  if (noSol.length) console.log('   NO-SOLUTION:', noSol.length, noSol.slice(0, 8).map(q => q.id).join(','));
}
