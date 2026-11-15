// 校验源 JSON 与生成后的 data：重复 id、填空不可判分、控制字符、坏选项
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');
const J = path.join(ROOT, 'source', 'json');
const { parseNum } = require('../assets/numparse.js');

const srcFiles = [];
for (let n = 1; n <= 9; n++) srcFiles.push('ch' + n);
['s1', 's2', 's3', 's4', 'x5', 'x6', 'x7'].forEach(f => srcFiles.push(f));

let srcTotal = 0, srcBadFiles = 0;
for (const f of srcFiles) {
  const p = path.join(J, f + '.json');
  if (!fs.existsSync(p)) { console.log('SRC', f, 'MISSING'); srcBadFiles++; continue; }
  let a;
  try { a = JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch (e) { console.log('SRC', f, 'PARSE-ERR', e.message); srcBadFiles++; continue; }
  srcTotal += a.length;
  const bad = a.filter(q => !q.type || !q.id || !q.statement);
  const noSol = a.filter(q => !q.solution || !String(q.solution).trim());
  const dup = a.length - new Set(a.map(q => q.id)).size;
  if (bad.length || noSol.length || dup) {
    console.log('SRC', f, 'BAD', bad.length, 'NO-SOL', noSol.length, 'DUP', dup);
    srcBadFiles++;
  }
  console.log('SRC', f, a.length);
}
console.log('SRC TOTAL', srcTotal, 'files', srcFiles.length, 'badFiles', srcBadFiles);

const ctx = { window: {} };
vm.createContext(ctx);
const dataFiles = ['questions.js', 'book_questions.js', 'analysis1_questions.js', 'analysis2_questions.js'];
let dataBadFiles = 0;
for (const f of dataFiles) {
  const p = path.join(ROOT, 'data', f);
  if (!fs.existsSync(p)) { console.log('DATA', f, 'MISSING'); dataBadFiles++; continue; }
  vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: f });
}
const all = [].concat(
  ctx.window.QUESTIONS || [],
  ctx.window.BOOK_QUESTIONS || [],
  ctx.window.ANALYSIS1_QUESTIONS || [],
  ctx.window.ANALYSIS2_QUESTIONS || []
);
console.log('DATA TOTAL', all.length);

const ids = all.map(q => q.id);
const dupIds = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
console.log('DUP IDS', dupIds.length, dupIds.slice(0, 5).join(','));

const fillBad = all.filter(q => q.type === 'fill' && parseNum(q.answer) === null);
console.log('FILL UNPARSEABLE', fillBad.length, fillBad.slice(0, 5).map(q => q.id).join(','));

function hasCtrl(s) {
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c < 32 && c !== 10 && c !== 13) return true;
  }
  return false;
}
const ctrl = [];
for (const q of all) {
  ['statement', 'solution', 'title', 'answer'].forEach(k => {
    const s = q[k];
    if (typeof s === 'string' && hasCtrl(s)) ctrl.push(q.id + ':' + k);
  });
}
console.log('CTRL CHARS', ctrl.length, ctrl.slice(0, 5).join(','));

const badChoice = all.filter(q => q.type === 'choice' && (
  !Array.isArray(q.options) || q.options.length < 2 ||
  !Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length
));
console.log('BAD CHOICE', badChoice.length, badChoice.slice(0, 5).map(q => q.id).join(','));

if (srcBadFiles || dataBadFiles || dupIds.length || fillBad.length || ctrl.length || badChoice.length) {
  process.exitCode = 1;
}
