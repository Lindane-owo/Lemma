const fs=require('fs'), path=require('path');
const BASE=path.join(__dirname,'..'), DIR=path.join(BASE,'source','json');

function isnum(s){
  if(s===null||s===undefined) return false;
  let t=String(s).trim(); if(!t) return false;
  if(!isNaN(Number(t))) return true;
  // 允许 分数/π/根号/简单函数 表达式（与前端 parseNum 保持一致）
  let u=t.replace(/√\s*\(/g,'sqrt(').replace(/√\s*(\d+(?:\.\d+)?)/g,'sqrt($1)')
       .replace(/π/g,'PI').replace(/\bpi\b/gi,'PI').replace(/\be\b/gi,'E')
       .replace(/\^/g,'**').replace(/×/g,'*').replace(/÷/g,'/');
  const rest=u.replace(/(PI|E|sqrt|sin|cos|tan|ln)/g,'');
  if(!/^[0-9+\-*/().\s]*$/.test(rest)) return false;
  try{
    const v=Function('PI','E','sqrt','sin','cos','tan','ln','"use strict";return ('+u+')')(Math.PI,Math.E,Math.sqrt,Math.sin,Math.cos,Math.tan,Math.log);
    return typeof v==='number' && isFinite(v);
  }catch(e){ return false; }
}
const YES_POS=new Set(['是','对','能','正确','有','存在','是。']);
const YES_NEG=new Set(['不是','错','不能','错误','否','没有','不存在','无']);

function normalize(q){
  if(q.type==='fill' && !isnum(q.answer)){
    const a=String(q.answer==null?'':q.answer).trim();
    if(YES_POS.has(a) || YES_NEG.has(a)){
      q.type='choice';
      q.options=['是','不是'];
      q.answer=YES_POS.has(a)?0:1;
    } else {
      q.type='text';
    }
  }
  return q;
}

const arr=[], report=[];
for(let n=1;n<=9;n++){
  const fp=path.join(DIR,`ch${n}.json`);
  if(!fs.existsSync(fp)){ report.push(`ch${n}: MISSING`); continue; }
  let data;
  try{ data=JSON.parse(fs.readFileSync(fp,'utf8')); }
  catch(e){ report.push(`ch${n}: PARSE FAIL ${e.message}`); continue; }
  if(!Array.isArray(data)){ report.push(`ch${n}: not array`); continue; }
  for(const q of data){ if(!q.subject) q.subject='高代'; normalize(q); arr.push(q); }
  report.push(`ch${n}: ${data.length}`);
}

const issues=[], seen=new Set();
for(const q of arr){
  const id=q.id;
  if(!id){ issues.push('missing id: '+JSON.stringify(q).slice(0,60)); continue; }
  if(seen.has(id)) issues.push('dup id: '+id);
  seen.add(id);
  if(!q.statement) issues.push(id+': no statement');
  const t=q.type;
  if(t==='choice'){
    const o=q.options||[], a=q.answer;
    if(!Number.isInteger(a)||a<0||a>=o.length) issues.push(`${id}: choice answer bad ${a}/${o.length}`);
    if(o.length<2) issues.push(id+': options<2');
  } else if(t==='fill'){
    if(q.answer===undefined||q.answer===null||q.answer==='') issues.push(id+': fill no answer');
    else if(!isnum(q.answer)) issues.push(id+': fill nonnum (should be text)');
  } else if(t==='proof'){
    if(!q.solution) issues.push(id+': proof no solution');
  } else if(t==='text'){
    if(!q.answer && !q.solution) issues.push(id+': text empty');
  } else issues.push(id+': unknown type '+t);
}

const body=JSON.stringify(arr,null,1);
fs.writeFileSync(path.join(BASE,'data','book_questions.js'),'window.BOOK_QUESTIONS = '+body+';\n','utf8');

console.log('=== chapters ==='); report.forEach(r=>console.log('  '+r));
console.log('TOTAL', arr.length);
const tc={}, dc={};
arr.forEach(q=>{ tc[q.type]=(tc[q.type]||0)+1; dc[q.difficulty]=(dc[q.difficulty]||0)+1; });
console.log('types', JSON.stringify(tc));
console.log('difficulty', JSON.stringify(dc));
console.log('ISSUES', issues.length);
issues.slice(0,80).forEach(x=>console.log('  ! '+x));
