/* 数值答案解析器：前端判分与 tools/ 共用
   浏览器里挂到 window.LemmaNum；node 里通过 module.exports 使用 */
(function(root){
  function latexClean(x){
    let t = String(x==null?'':x).replace(/\$/g,'').replace(/\\left|\\right/g,'')
        .replace(/\\[,;!]/g,'').replace(/\\mathrm\{([^{}]*)\}/g,'$1').replace(/\\text\{([^{}]*)\}/g,'$1');
    for(let i=0;i<8;i++){
      const before = t;
      t = t.replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g,'(($1)/($2))')
           .replace(/\\sqrt\s*\[([^{}]*)\]\s*\{([^{}]*)\}/g,'($2)**(1/($1))')
           .replace(/\\sqrt\s*\{([^{}]*)\}/g,'sqrt($1)')
           .replace(/\^\{([^{}]*)\}/g,'**($1)');
      if(t===before) break;
    }
    t = t.replace(/\\pi/g,'PI').replace(/\\times|\\cdot/g,'*').replace(/\\div/g,'/')
         .replace(/\\ln|\\log/g,'ln').replace(/\\sin/g,'sin').replace(/\\cos/g,'cos').replace(/\\tan/g,'tan')
         .replace(/[{}\\]/g,' ');
    return t;
  }
  function parseNum(str){
    let s = latexClean(str).trim(); if(!s) return null;
    s = s.replace(/√\s*\(/g,'sqrt(').replace(/√\s*(\d+(?:\.\d+)?)/g,'sqrt($1)')
         .replace(/π/g,'PI').replace(/\bpi\b/gi,'PI').replace(/\be\b/gi,'E')
         .replace(/\bsqrt\b/gi,'sqrt').replace(/\bsin\b/gi,'sin').replace(/\bcos\b/gi,'cos').replace(/\btan\b/gi,'tan').replace(/\bln\b/gi,'ln')
         .replace(/\^/g,'**').replace(/×/g,'*').replace(/÷/g,'/');
    s = s.replace(/^\s*(约|≈)\s*/, '');
    s = s.replace(/(\d+(?:\.\d+)?)e([+-]?\d+)/gi, '($1*10**($2))'); /* 1e-3 → (1*10**(-3))，避免和常数 e 混淆 */
    s = s.replace(/(\d)\s*pi\b/gi, '$1PI');                   /* 2pi：pi 前是数字时没有词边界 */
    s = s.replace(/\b(ln|sin|cos|tan|sqrt)\s*(\d+(?:\.\d+)?|PI|E)\b/g, '$1($2)');
    s = s.replace(/(\d|\))\s*(?=PI|E\b|sqrt|sin|cos|tan|ln|\()/g, '$1*');
    s = s.replace(/\b(PI|E)\s*(?=\d|\(|PI|E\b|sqrt|sin|cos|tan|ln)/g, '$1*');
    const rest = s.replace(/(PI|E|sqrt|sin|cos|tan|ln)/g,'');
    if(!/^[0-9+\-*/().\s]*$/.test(rest)) return null;
    try{
      const names=['PI','E','sqrt','sin','cos','tan','ln'];
      const vals=[Math.PI,Math.E,Math.sqrt,Math.sin,Math.cos,Math.tan,Math.log];
      const v = Function(...names,'"use strict";return ('+s+')')(...vals);
      return (typeof v==='number'&&isFinite(v))? v : null;
    }catch(e){ return null; }
  }
  const api = { latexClean, parseNum };
  root.LemmaNum = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
