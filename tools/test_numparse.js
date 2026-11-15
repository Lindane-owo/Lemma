// 判分解析器单测：node tools/test_numparse.js
const { parseNum } = require('../assets/numparse.js');

const cases = [
  ['2/3', 2/3],
  ['0.5', 0.5],
  ['π', Math.PI],
  ['2π', 2*Math.PI],
  ['2pi', 2*Math.PI],
  ['1/(2π)', 1/(2*Math.PI)],
  ['π^2/6', Math.PI**2/6],
  ['e-1', Math.E-1],
  ['√2', Math.SQRT2],
  ['2sqrt(2)', 2*Math.SQRT2],
  ['sin(π/6)', 0.5],
  ['ln2', Math.LN2],
  ['1e-3', 0.001],
  ['约 0.5', 0.5],
  ['$\\frac{1}{2}$', 0.5],
  ['\\frac{\\pi}{4}', Math.PI/4],
  ['3\\pi', 3*Math.PI],
  ['2\\sqrt{2}', 2*Math.SQRT2],
  ['\\dfrac{3\\pi}{4}', 3*Math.PI/4],
  ['\\dfrac{2}{3\\sqrt{3}}', 2/(3*Math.sqrt(3))],
  ['\\ln 2', Math.LN2],
  ['\\mathrm{e}^{2}', Math.E**2],
  ['\\sqrt[3]{8}', 2],
  ['abc', null],
  ['[-1,2)', null],
  ['alert(1)', null]
];

let pass = 0, fail = 0;
for (const [input, exp] of cases) {
  const got = parseNum(input);
  const ok = exp === null ? got === null : (got !== null && Math.abs(got - exp) < 1e-9);
  if (ok) pass++;
  else { fail++; console.log('FAIL', JSON.stringify(input), '=>', got, 'expected', exp); }
}
console.log(`PASS ${pass}/${cases.length}`);
if (fail) process.exit(1);
