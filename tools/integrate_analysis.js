// 把 json/ 下的章节题组合并成 analysis1_questions.js / analysis2_questions.js
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const J = path.join(ROOT, 'source', 'json');
const { parseNum } = require('../assets/numparse.js');

const GROUPS = {
  analysis1: { files: ['s1', 's2', 's3', 's4'], out: 'data/analysis1_questions.js', var: 'ANALYSIS1_QUESTIONS' },
  analysis2: { files: ['x5', 'x6', 'x7'], out: 'data/analysis2_questions.js', var: 'ANALYSIS2_QUESTIONS' }
};

function fixStr(s) {
  if (typeof s !== 'string') return s;
  // 修复 JSON 里 \b 被解析成退格符的常见错误
  return s.replace(/\u0008/g, '\\b').replace(/\u000c/g, '\\f');
}

function fixCtrl(s) {
  if (typeof s !== 'string') return s;
  const B = String.fromCharCode(92);
  return s.split(String.fromCharCode(9)).join(B + 't').split(String.fromCharCode(13)).join('');
}

// 个别 agent 把 (A)(B)(C)(D) 选项也写进了题干，choice 题去掉尾部的内联选项
function stripInlineOptions(s) {
  if (!s) return s;
  const dIdx = Math.max(s.lastIndexOf('(D)'), s.lastIndexOf('（D）'));
  if (dIdx < 0) return s;
  const aIdx = Math.max(s.lastIndexOf('(A)', dIdx), s.lastIndexOf('（A）', dIdx));
  if (aIdx < 0) return s;
  const tail = s.slice(aIdx);
  if (tail.length > 420) return s;
  if (!/[（(]\s*[BC]\s*[）)]/.test(tail)) return s;
  return s.slice(0, aIdx).trim();
}

let problems = 0;
for (const [book, cfg] of Object.entries(GROUPS)) {
  let all = [];
  let converted = 0;
  for (const f of cfg.files) {
    const p = path.join(J, f + '.json');
    if (!fs.existsSync(p)) { console.log('  [missing]', f + '.json'); continue; }
    let arr;
    try { arr = JSON.parse(fs.readFileSync(p, 'utf8')); }
    catch (e) { console.log('  [parse-error]', f + '.json', e.message); continue; }
    arr.forEach(q => {
      if (!q.id || !q.type) { problems++; console.log('  [bad]', f, JSON.stringify(q).slice(0, 80)); return; }
      q.statement = fixCtrl(fixStr(q.statement));
      q.solution = fixCtrl(fixStr(q.solution));
      if (q.type === 'choice') q.statement = stripInlineOptions(q.statement);
      if (Array.isArray(q.options)) q.options = q.options.map(x => fixCtrl(fixStr(x)));
      if (q.type === 'choice' && Array.isArray(q.options)) q.options = q.options.map(o => {
        const s = String(o);
        if (s.startsWith('(A)') || s.startsWith('(B)') || s.startsWith('(C)') || s.startsWith('(D)')) return s.slice(3).trim();
        if (s.startsWith('（A）') || s.startsWith('（B）') || s.startsWith('（C）') || s.startsWith('（D）')) return s.slice(3).trim();
        return s;
      });
      if (q.type === 'choice' && typeof q.answer === 'string') {
        const av = q.answer.trim();
        if (av.length === 1 && av >= '0' && av <= '9') q.answer = Number(av);
      }
      if (q.type === 'fill' && parseNum(q.answer) === null) { q.type = 'text'; converted++; }
      all.push(q);
    });
    console.log('  ' + f + '.json: ' + arr.length);
  }
  // 去重
  const seen = new Set(); const uniq = [];
  for (const q of all) { if (seen.has(q.id)) { console.log('  [dup]', q.id); continue; } seen.add(q.id); uniq.push(q); }
  const out = 'window.' + cfg.var + ' = ' + JSON.stringify(uniq) + ';\n';
  fs.writeFileSync(path.join(ROOT, cfg.out), out);
  console.log(book + ': ' + uniq.length + ' questions -> ' + cfg.out + ' (fill->text: ' + converted + ')');
}
console.log('problems:', problems);
