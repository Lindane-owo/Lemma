const BOOKS = {
  linalg:{name:'线代与几何'},
  analysis1:{name:'工科分析·上'},
  analysis2:{name:'工科分析·下'},
  practice:{name:'数分·高代练习'}
};
const Q = [];
[['BOOK_QUESTIONS','linalg'],['ANALYSIS1_QUESTIONS','analysis1'],['ANALYSIS2_QUESTIONS','analysis2'],['QUESTIONS','practice']].forEach(function(pair){
  (window[pair[0]]||[]).forEach(function(q){ q.book = pair[1]; Q.push(q); });
});
Q.forEach((q,i)=>{
  q.__no = 'P' + String(i+1).padStart(4,'0');
  if(!q.title){
    let t = String(q.statement||'').replace(/\$\$[\s\S]*?\$\$/g,'').replace(/\$[^$]*\$/g,'').replace(/\\[a-zA-Z]+/g,'').replace(/[{}]/g,'').trim();
    const m = String(q.id||'').match(/^ch(\d+)-(.+)$/);
    if(m){ const short = String(q.chapter||'').replace(/^第\d+章\s*/,'') || ('第'+m[1]+'章'); q.title = short + ' · ' + m[2]; }
    else q.title = t ? t.slice(0,26) : ('第'+(i+1)+'题');
  }
});

/* 确定性打乱选择题选项（按 id 播种），避免正确答案全在 A */
(function(){
  function seedOf(str){ let s=0; for(let i=0;i<str.length;i++) s=(s*31+str.charCodeAt(i))>>>0; return s||1; }
  function rnd(o){ o.s=(o.s*1103515245+12345)&0x7fffffff; return o.s/0x7fffffff; }
  Q.forEach(q=>{
    if(q.type!=='choice' || !Array.isArray(q.options) || q.options.length<2) return;
    const old=q.options.slice(), ans=Number(q.answer);
    if(!(ans>=0 && ans<old.length)) return;
    const perm=old.map((_,i)=>i), seed={s:seedOf(String(q.id))};
    for(let i=perm.length-1;i>0;i--){ const j=Math.floor(rnd(seed)*(i+1)); [perm[i],perm[j]]=[perm[j],perm[i]]; }
    q.options=perm.map(i=>old[i]);
    q.answer=perm.indexOf(ans);
  });
})();

/* ---------- 核心考点标签 ---------- */
const TAG_ORDER = [
  '行列式计算','行列式性质','按行列展开','克拉默法则','范德蒙德行列式','递推行列式',
  '矩阵运算','逆矩阵','分块矩阵','矩阵的秩','初等变换','伴随矩阵',
  '向量运算','数量积与向量积','平面方程','直线方程','距离与夹角',
  '线性相关与无关','极大无关组','向量组的秩','基与坐标',
  '齐次方程组','非齐次方程组','解的结构','基础解系',
  '特征值与特征向量','相似对角化','实对称矩阵',
  '二次型与标准形','正交变换','正定性','惯性定理',
  '曲面与曲线方程','二次曲面','切线切平面',
  '线性空间与子空间','线性变换','欧氏空间与正交','同构',
  '函数与映射','数列极限','函数极限','连续与间断','无穷小比较',
  '导数与微分','求导法则','高阶导数','中值定理','洛必达法则','泰勒公式','单调性与极值','凹凸与拐点','渐近线与曲率','不等式证明',
  '不定积分','换元积分','分部积分','定积分计算','变限积分','反常积分','定积分应用',
  '可分离变量','一阶线性方程','可降阶方程','二阶常系数方程','线性微分方程','微分方程组','微分方程应用',
  '多元函数极限与连续','多元函数与定义域','偏导数与全微分','复合与隐函数求导','多元泰勒公式','向量值函数求导','方向导数与梯度','多元函数极值','偏导几何应用',
  '重积分概念','二重积分','三重积分','重积分换序','含参积分与极限','重积分应用','曲线积分','曲面积分','两类积分关系','格林与高斯公式','场论初步',
  '数项级数','正项级数判敛','函数项级数','交错级数与绝对收敛','幂级数','傅里叶级数'
];
const TAG_RULES = {
  linalg: {
    1:{d:'行列式计算',r:[[/克拉默|克莱姆/,'克拉默法则'],[/范德蒙/,'范德蒙德行列式'],[/递推|归纳/,'递推行列式'],[/余子式|代数余子式/,'按行列展开'],[/性质/,'行列式性质']]},
    2:{d:'矩阵运算',r:[[/逆矩阵|可逆/,'逆矩阵'],[/分块/,'分块矩阵'],[/秩|r\(A\)/,'矩阵的秩'],[/初等变换|阶梯形|最简形/,'初等变换'],[/伴随/,'伴随矩阵']]},
    3:{d:'向量运算',r:[[/数量积|内积|点积|向量积|叉积|外积/,'数量积与向量积'],[/平面/,'平面方程'],[/直线/,'直线方程'],[/距离|夹角/,'距离与夹角']]},
    4:{d:'线性相关与无关',r:[[/极大/,'极大无关组'],[/秩/,'向量组的秩'],[/基|坐标|维数/,'基与坐标']]},
    5:{d:'解的结构',r:[[/齐次/,'齐次方程组'],[/非齐次/,'非齐次方程组'],[/基础解系/,'基础解系'],[/克拉默|克莱姆/,'克拉默法则']]},
    6:{d:'特征值与特征向量',r:[[/相似|对角化/,'相似对角化'],[/实对称/,'实对称矩阵']]},
    7:{d:'二次型与标准形',r:[[/正交变换|正交矩阵/,'正交变换'],[/正定|负定|半正定/,'正定性'],[/惯性/,'惯性定理']]},
    8:{d:'曲面与曲线方程',r:[[/椭球|双曲|抛物|柱面|锥面/,'二次曲面'],[/切线|切平面|法线|法平面/,'切线切平面']]},
    9:{d:'线性空间与子空间',r:[[/线性变换/,'线性变换'],[/欧氏空间|施密特/,'欧氏空间与正交'],[/同构/,'同构']]}
  },
  analysis1: {
    1:{d:'函数极限',r:[[/数列|\\lim_\{n/,'数列极限'],[/连续|间断/,'连续与间断'],[/等价无穷小|无穷小|高阶无穷小|同阶/,'无穷小比较'],[/集合|映射/,'函数与映射']]},
    2:{d:'导数与微分',r:[[/高阶导数|y''|n 阶导|n阶导/,'高阶导数'],[/罗尔|拉格朗日|柯西中值|中值定理/,'中值定理'],[/洛必达/,'洛必达法则'],[/泰勒|麦克劳林/,'泰勒公式'],[/单调|极值|最值/,'单调性与极值'],[/凹凸|拐点/,'凹凸与拐点'],[/渐近线|曲率/,'渐近线与曲率'],[/不等式/,'不等式证明']]},
    3:{d:'定积分计算',r:[[/不定积分|原函数/,'不定积分'],[/换元/,'换元积分'],[/分部积分/,'分部积分'],[/变限|上限函数/,'变限积分'],[/反常|广义积分/,'反常积分'],[/面积|体积|弧长|功|压力|质心/,'定积分应用']]},
    4:{d:'一阶线性方程',r:[[/可分离|分离变量/,'可分离变量'],[/降阶/,'可降阶方程'],[/二阶|特征方程|常系数/,'二阶常系数方程'],[/应用|模型/,'微分方程应用']]}
  },
  analysis2: {
    5:{d:'偏导数与全微分',r:[[/复合|隐函数|链式/,'复合与隐函数求导'],[/方向导数|梯度/,'方向导数与梯度'],[/极值|最值|条件极值/,'多元函数极值'],[/切平面|法线|切线/,'偏导几何应用']]},
    6:{d:'二重积分',r:[[/三重/,'三重积分'],[/换序|极坐标|柱坐标|球坐标/,'重积分换序'],[/曲线积分/,'曲线积分'],[/曲面积分/,'曲面积分'],[/格林|高斯|斯托克斯/,'格林与高斯公式'],[/散度|旋度|通量|环量/,'场论初步']]},
    7:{d:'数项级数',r:[[/幂级数|收敛半径|收敛域/,'幂级数'],[/傅里叶/,'傅里叶级数'],[/交错|绝对收敛|条件收敛/,'交错级数与绝对收敛'],[/收敛|发散|判别|比值|根值/,'正项级数判敛',/幂级数|傅里叶/]]}
  }
};
const BLOCK_TAGS = {
  'analysis1|1|1.1':'函数与映射',
  'analysis1|1|1.2':'数列极限',
  'analysis1|1|1.3':'函数极限',
  'analysis1|1|1.4':'无穷小比较',
  'analysis1|1|1.5':'连续与间断',
  'analysis1|2|2.1':'导数与微分',
  'analysis1|2|2.2':'求导法则',
  'analysis1|2|2.3':'导数与微分',
  'analysis1|2|2.4':'中值定理',
  'analysis1|2|2.5':'泰勒公式',
  'analysis1|2|2.6':'单调性与极值',
  'analysis1|2|2.7':'渐近线与曲率',
  'analysis1|3|3.1':'定积分计算',
  'analysis1|3|3.2':'变限积分',
  'analysis1|3|3.3':'换元积分',
  'analysis1|3|3.4':'定积分应用',
  'analysis1|3|3.5':'反常积分',
  'analysis1|4|4.1':'可分离变量',
  'analysis1|4|4.2':'线性微分方程',
  'analysis1|4|4.3':'微分方程组',
  'analysis2|5|5.1':'多元函数极限与连续',
  'analysis2|5|5.2':'多元函数与定义域',
  'analysis2|5|5.3':'偏导数与全微分',
  'analysis2|5|5.4':'多元泰勒公式',
  'analysis2|5|5.5':'向量值函数求导',
  'analysis2|5|5.6':'偏导几何应用',
  'analysis2|6|6.1':'重积分概念',
  'analysis2|6|6.2':'二重积分',
  'analysis2|6|6.3':'三重积分',
  'analysis2|6|6.4':'含参积分与极限',
  'analysis2|6|6.5':'重积分应用',
  'analysis2|6|6.6':'曲线积分',
  'analysis2|6|6.7':'两类积分关系',
  'analysis2|6|6.8':'格林与高斯公式',
  'analysis2|7|7.1':'数项级数',
  'analysis2|7|7.2':'函数项级数',
  'analysis2|7|7.3':'幂级数',
  'analysis2|7|7.4':'傅里叶级数'
};
(function(){
  function chNo(q){ const m=String(q.id).match(/^(?:ch|s|x)(\d+)/); return m?Number(m[1]):0; }
  function blkOf(q){ const m=String(q.id).match(/^(?:ch|s|x)\d+-([0-9]+(?:\.[0-9]+)?)-/); return m?m[1]:''; }
  Q.forEach(q=>{
    if(q.tags && q.tags.length) return;
    if(q.book==='practice'){ q.tags = [q.chapter]; return; }
    const bk = q.book+'|'+chNo(q)+'|'+blkOf(q);
    if(BLOCK_TAGS[bk]){ q.tags = [BLOCK_TAGS[bk]]; return; }
    const grp = TAG_RULES[q.book]; if(!grp) return;
    const rule = grp[chNo(q)]; if(!rule) return;
    const s = String(q.statement||'');
    const hit = [];
    (rule.r||[]).forEach(function(it){
      const re=it[0], tag=it[1], not=it[2];
      if(not && not.test(s)) return;
      if(re.test(s) && hit.indexOf(tag)<0) hit.push(tag);
    });
    q.tags = hit.length ? hit.slice(0,3) : [rule.d];
  });
})();

const DIFF = {1:['基础','d1'],2:['提高','d2'],3:['挑战','d3']};
const LS = { get(k,d){ try{ const v=localStorage.getItem(k); return v==null?d:JSON.parse(v);}catch(e){return d;} },
             set(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} } };
let progress = LS.get('progress', {});   // {qid:{tried,correct}}
let wrongIds = LS.get('wrongIds', []);
const state = { view:'set', subject:'all', difficulty:0, tag:'all', status:'all', source:'all', book:'all', q:'', tagMore:false, toolsMore:false, detail:null };
const app = document.getElementById('app');

function save(){ LS.set('progress',progress); LS.set('wrongIds',wrongIds); }
function renderMath(el){ if(window.renderMathInElement){ renderMathInElement(el,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false}); } }
function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* ---------- 判分 ---------- */
function latexClean(x){
  let t = String(x==null?'':x).replace(/\$/g,'').replace(/\\left|\\right/g,'')
      .replace(/\\[,;!]/g,'').replace(/\\mathrm\{([^{}]*)\}/g,'$1').replace(/\\text\{([^{}]*)\}/g,'$1');
  for(let i=0;i<3;i++) t = t.replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g,'(($1)/($2))');
  t = t.replace(/\\sqrt\s*\[([^{}]*)\]\s*\{([^{}]*)\}/g,'($2)**(1/($1))')
       .replace(/\\sqrt\s*\{([^{}]*)\}/g,'sqrt($1)')
       .replace(/\^\{([^{}]*)\}/g,'**($1)')
       .replace(/\\pi/g,'PI').replace(/\\times|\\cdot/g,'*').replace(/\\div/g,'/')
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
  const rest = s.replace(/(PI|E|sqrt|sin|cos|tan|ln)/g,'');
  if(!/^[0-9+\-*/().\s]*$/.test(rest)) return null;
  try{ const names=['PI','E','sqrt','sin','cos','tan','ln']; const vals=[Math.PI,Math.E,Math.sqrt,Math.sin,Math.cos,Math.tan,Math.log];
    const v = Function(...names,'"use strict";return ('+s+')')(...vals);
    return (typeof v==='number'&&isFinite(v))? v : null; }catch(e){ return null; }
}
function check(q,student){
  if(q.type==='choice') return {correct: choiceIdx(student)===choiceIdx(q.answer)};
  const ans=parseNum(q.answer), stu=parseNum(student);
  if(stu===null) return {correct:false, msg:'无法识别，请输入数值（如 2/3、0.5、π、sqrt(2)）'};
  return {correct: ans!==null && Math.abs(stu-ans)<=(q.tolerance||1e-6)};
}

/* ---------- 状态/统计 ---------- */
function statusOf(q){ const p=progress[q.id]; if(!p||!p.tried) return ['未做','']; if(p.correct>0) return ['通过','pass']; return ['尝试','tried']; }
function rateOf(q){ const p=progress[q.id]; if(!p||!p.tried) return '—'; return Math.round(p.correct/p.tried*100)+'%'; }
function stats(){
  let done=0,ok=0,passQ=0;
  for(const id in progress){ const p=progress[id]||{}; done+=(p.tried||0); ok+=(p.correct||0); if((p.correct||0)>0) passQ++; }
  return {total:Q.length, passQ, done, ok, rate: done? Math.round(ok/done*100):0, wrong:wrongIds.length};
}

/* ---------- 筛选 ---------- */
function tagsIn(book){
  const has = new Set();
  Q.forEach(q=>{ if(book==='all'||q.book===book) (q.tags||[]).forEach(t=>has.add(t)); });
  return TAG_ORDER.filter(t=>has.has(t)).concat([...has].filter(t=>TAG_ORDER.indexOf(t)<0).sort());
}
function filtered(){
  return Q.filter(q=>{
    if(state.subject!=='all' && q.subject!==state.subject) return false;
    if(state.difficulty && q.difficulty!==state.difficulty) return false;
    if(state.tag!=='all' && !(q.tags||[]).includes(state.tag)) return false;
    if(state.q){
      const k=state.q.trim().toLowerCase();
      if(k){
        const hay=((q.__no||'')+' '+(q.title||'')+' '+(q.statement||'')).toLowerCase();
        if(!hay.includes(k)) return false;
      }
    }
    if(state.status!=='all'){ const st=statusOf(q)[0]; if(state.status==='未做'&&st!=='未做') return false; if(state.status==='通过'&&st!=='通过') return false; if(state.status==='尝试'&&st!=='尝试') return false; }
    if(state.source!=='all'){ const isBook=String(q.chapter||'').startsWith('第'); if(state.source==='book'&&!isBook) return false; if(state.source==='practice'&&isBook) return false; }
    if(state.book!=='all' && q.book!==state.book) return false;
    return true;
  });
}

/* ---------- 题集页 ---------- */
function listPanel(list){
  const rows = list.map(q=>{
    const d = DIFF[q.difficulty]||['',''];
    const [stTxt, stCls] = statusOf(q);
    return `<tr>
      <td class="tid">${q.__no}</td>
      <td class="ttitle" data-id="${q.id}">${esc(q.title||'').slice(0,40) || ('题 ' + q.__no)}</td>
      <td>${(q.tags||[q.chapter]).map(t=>`<span class="tagchip">${t}</span>`).join('')}</td>
      <td><span class="diff ${d[1]}">${d[0]}</span></td>
      <td><span class="status ${stCls}"><i></i>${stTxt}</span></td>
      <td class="rate">${rateOf(q)}</td>
    </tr>`;
  }).join('');
  return `<div class="panel">
      <table>
        <thead><tr><th style="width:90px">题号</th><th>题目名称</th><th style="width:320px">考点标签</th><th style="width:90px">难度</th><th style="width:100px">状态</th><th style="width:90px">通过率</th></tr></thead>
        <tbody>${rows || '<tr><td colspan="6" class="empty">没有符合条件的题目</td></tr>'}</tbody>
      </table>
    </div>`;
}
function renderSet(){
  const st = stats();
  const list = filtered();
  const bc = {}; Q.forEach(q=>{ bc[q.book]=(bc[q.book]||0)+1; });
  const bookMeta = Object.keys(BOOKS).map(k=>BOOKS[k].name+' <b>'+(bc[k]||0)+'</b>').join('<span class="dot">|</span>');
  const diffChips = [['全部',0,''],['基础',1,'d1'],['提高',2,'d2'],['挑战',3,'d3']].map(([L,v,c])=>
    `<button class="chip ${c} ${state.difficulty===v?'on':''}" data-diff="${v}">${L}</button>`).join('');
  const allTags = tagsIn(state.book);
  const shownTags = state.tagMore ? allTags : allTags.slice(0, 30);
  const tagChips = ['全部'].concat(shownTags).map(c=>
    `<button class="chip ${state.tag===c?'on':''}" data-tag="${c}">${c==='全部'?'全部考点':c}</button>`).join('')
    + (allTags.length>30 ? `<button class="chip more" data-more="1">${state.tagMore?'收起 ▴':'更多 ▾'}</button>` : '');
  const statusChips = [['全部','all'],['未做','未做'],['尝试','尝试'],['通过','通过']].map(([L,v])=>
    `<button class="chip ${state.status===v?'on':''}" data-status="${v}">${L}</button>`).join('');
  const bookChips = [['全部','all']].concat(Object.keys(BOOKS).map(k=>[BOOKS[k].name,k])).map(([L,v])=>
    `<button class="chip ${state.book===v?'on':''}" data-book="${v}">${L}</button>`).join('');
  const sourceChips = [['全部','all'],['教材习题','book'],['练习','practice']].map(([L,v])=>
    `<button class="chip ${state.source===v?'on':''}" data-source="${v}">${L}</button>`).join('');
  app.innerHTML = `
    <div class="pshead">
      <h1>Lemma 刷题集 <span class="tag">教材习题 + 练习</span></h1>
      <div class="meta">题目总数 <b>${st.total}</b><span class="dot">|</span>${bookMeta}</div>
      <div class="meta" style="margin-top:6px">已通过 <b>${st.passQ}</b><span class="dot">|</span>总正确率 <b>${st.rate}%</b><span class="dot">|</span>错题 <b>${st.wrong}</b><span class="dot">|</span>难度：<span style="color:var(--d1)">■基础</span> <span style="color:var(--d2)">■提高</span> <span style="color:var(--d3)">■挑战</span></div>
    </div>
    <div class="filters">
      <div class="frow"><span class="lab">搜索</span><div class="chips"><input id="qsearch" class="search" placeholder="题号 / 标题 / 题干关键词" value="${String(state.q||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;')}"><span class="count">共 ${list.length} 题</span></div></div>
      <div class="frow"><span class="lab">难度</span><div class="chips">${diffChips}</div></div>
      <div class="frow"><span class="lab">考点</span><div class="chips">${tagChips}</div></div>
      <div class="frow"><span class="lab">状态</span><div class="chips">${statusChips}</div></div>
      <div class="frow"><span class="lab">教材</span><div class="chips">${bookChips}</div></div>
      <div class="frow"><span class="lab">来源</span><div class="chips">${sourceChips}</div></div>
    </div>
    ${listPanel(list)}`;
  // 事件
  app.querySelectorAll('[data-diff]').forEach(b=> b.onclick=()=>{ state.difficulty=Number(b.dataset.diff); renderSet(); });
  app.querySelectorAll('[data-tag]').forEach(b=> b.onclick=()=>{ state.tag=b.dataset.tag==='全部'?'all':b.dataset.tag; renderSet(); });
  app.querySelectorAll('[data-more]').forEach(b=> b.onclick=()=>{ state.tagMore=!state.tagMore; renderSet(); });
  const si=app.querySelector('#qsearch');
  if(si){
    let composing=false;
    const applySearch=()=>{
      state.q=si.value;
      const list=filtered();
      const p=app.querySelector('.panel');
      if(p) p.outerHTML=listPanel(list);
      const c=app.querySelector('.count'); if(c) c.textContent='共 '+list.length+' 题';
      app.querySelectorAll('.ttitle').forEach(t=> t.onclick=()=>{ openDetail(t.dataset.id); });
    };
    si.addEventListener('compositionstart', ()=>{ composing=true; });
    si.addEventListener('compositionend', ()=>{ composing=false; applySearch(); });
    si.addEventListener('input', e=>{ if(composing || e.isComposing) return; applySearch(); });
  }
  app.querySelectorAll('[data-status]').forEach(b=> b.onclick=()=>{ state.status=b.dataset.status; renderSet(); });
  app.querySelectorAll('[data-source]').forEach(b=> b.onclick=()=>{ state.source=b.dataset.source; renderSet(); });
  app.querySelectorAll('[data-book]').forEach(b=> b.onclick=()=>{ state.book=b.dataset.book; renderSet(); });
  app.querySelectorAll('.ttitle').forEach(t=> t.onclick=()=>{ openDetail(t.dataset.id); });
  renderMath(app);
}

/* ---------- 详情页 ---------- */
function openDetail(id){
  state.detail = Q.find(q=>q.id===id);
  state.view='detail'; renderDetail();
}
function choiceIdx(v){
  if(typeof v==='number') return v;
  const s=String(v==null?'':v).trim();
  if(/^[0-3]$/.test(s)) return Number(s);
  const m=s.toUpperCase().match(/[A-D]/);
  return m? m[0].charCodeAt(0)-65 : NaN;
}
const TOOL_GROUPS = [
  {g:'分式根式', on:1, items:[
    {t:'\\frac{a}{b}', i:'\\frac{|}{}'},
    {t:'\\sqrt{a}', i:'\\sqrt{|}'},
    {t:'\\sqrt[n]{a}', i:'\\sqrt[n]{|}'},
    {t:'a^{n}', i:'^{|}'},
    {t:'a_{n}', i:'_{|}'},
    {t:'\\overline{a}', i:'\\overline{|}'},
    {t:'\\vec{a}', i:'\\vec{|}'},
    {t:'\\hat{a}', i:'\\hat{|}'},
    {t:'\\binom{n}{k}', i:'\\binom{|}{}'},
    {t:'\\left(\\right)', i:'\\left( | \\right)'},
    {t:'\\left|x\\right|', i:'\\left| | \\right|'},
    {t:'\\text{字}', i:'\\text{|}'}
  ]},
  {g:'微积分', on:1, items:[
    {t:'\\int', i:'\\int '},
    {t:'\\int_a^b', i:'\\int_{|}^{}'},
    {t:'\\iint', i:'\\iint '},
    {t:'\\iiint', i:'\\iiint '},
    {t:'\\oint', i:'\\oint '},
    {t:'\\lim', i:'\\lim_{x \\to |}'},
    {t:'\\sum', i:'\\sum_{|}^{}'},
    {t:'\\prod', i:'\\prod_{i=1}^{n} '},
    {t:'\\partial', i:'\\partial '},
    {t:'\\nabla', i:'\\nabla '},
    {t:'\\infty', i:'\\infty '},
    {t:'\\mathrm{d}x', i:'\\mathrm{d}|'}
  ]},
  {g:'关系运算', on:1, items:[
    {t:'=', i:'='},
    {t:'\\ne', i:'\\ne '},
    {t:'\\approx', i:'\\approx '},
    {t:'\\le', i:'\\le '},
    {t:'\\ge', i:'\\ge '},
    {t:'\\ll', i:'\\ll '},
    {t:'\\gg', i:'\\gg '},
    {t:'\\sim', i:'\\sim '},
    {t:'\\equiv', i:'\\equiv '},
    {t:'\\propto', i:'\\propto '},
    {t:'\\pm', i:'\\pm '},
    {t:'\\mp', i:'\\mp '},
    {t:'\\times', i:'\\times '},
    {t:'\\cdot', i:'\\cdot '},
    {t:'\\div', i:'\\div '},
    {t:'\\to', i:'\\to '}
  ]},
  {g:'函数', on:1, items:[
    {t:'\\sin', i:'\\sin '},
    {t:'\\cos', i:'\\cos '},
    {t:'\\tan', i:'\\tan '},
    {t:'\\arcsin', i:'\\arcsin '},
    {t:'\\arctan', i:'\\arctan '},
    {t:'\\ln', i:'\\ln '},
    {t:'\\log', i:'\\log '},
    {t:'\\exp', i:'\\exp '},
    {t:'\\sin^{2}x', i:'\\sin^{2}|'}
  ]},
  {g:'希腊字母', on:1, items:['alpha','beta','gamma','delta','epsilon','varepsilon','zeta','eta','theta','lambda','mu','nu','xi','pi','rho','sigma','tau','varphi','chi','psi','omega'].map(function(x){ return {t:'\\'+x, i:'\\'+x+' '}; })},
  {g:'集合逻辑', items:[
    {t:'\\in', i:'\\in '},
    {t:'\\notin', i:'\\notin '},
    {t:'\\subset', i:'\\subset '},
    {t:'\\subseteq', i:'\\subseteq '},
    {t:'\\supset', i:'\\supset '},
    {t:'\\cup', i:'\\cup '},
    {t:'\\cap', i:'\\cap '},
    {t:'\\emptyset', i:'\\emptyset '},
    {t:'\\forall', i:'\\forall '},
    {t:'\\exists', i:'\\exists '},
    {t:'\\Rightarrow', i:'\\Rightarrow '},
    {t:'\\Leftrightarrow', i:'\\Leftrightarrow '},
    {t:'\\neg', i:'\\neg '},
    {t:'\\wedge', i:'\\wedge '},
    {t:'\\vee', i:'\\vee '},
    {t:'\\mathbb{R}', i:'\\mathbb{R}'},
    {t:'\\mathbb{N}', i:'\\mathbb{N}'},
    {t:'\\mathbb{Z}', i:'\\mathbb{Z}'},
    {t:'\\mathbb{C}', i:'\\mathbb{C}'}
  ]},
  {g:'矩阵排版', items:[
    {t:'\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}', i:'\\begin{pmatrix}| & \\\\ & \\end{pmatrix}'},
    {t:'\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}', i:'\\begin{vmatrix}| & \\\\ & \\end{vmatrix}'},
    {t:'\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}', i:'\\begin{bmatrix}| & \\\\ & \\end{bmatrix}'},
    {t:'\\begin{cases}a\\\\b\\end{cases}', i:'\\begin{cases}| \\\\ \\end{cases}'},
    {t:'\\cdots', i:'\\cdots '},
    {t:'\\vdots', i:'\\vdots '},
    {t:'\\ddots', i:'\\ddots '},
    {t:'\\boxed{答案}', i:'\\boxed{|}'},
    {t:'\\frac{\\partial z}{\\partial x}', i:'\\frac{\\partial z}{\\partial x}'}
  ]},
  {g:'几何', items:[
    {t:'\\angle', i:'\\angle '},
    {t:'\\perp', i:'\\perp '},
    {t:'\\parallel', i:'\\parallel '},
    {t:'\\triangle', i:'\\triangle '},
    {t:'\\square', i:'\\square '},
    {t:'\\circ', i:'^\\circ '},
    {t:'\\cong', i:'\\cong '},
    {t:'\\simeq', i:'\\simeq '}
  ]},
  {g:'大写希腊', items:['Gamma','Delta','Theta','Lambda','Xi','Pi','Sigma','Phi','Psi','Omega'].map(function(x){ return {t:'\\'+x, i:'\\'+x+' '}; })}
];
/* ---------- 公式框：点击符号即渲染在框内 ---------- */
let inlineEd = null;
function closeInlineEditor(){
  if(inlineEd){ const w=inlineEd; inlineEd=null; if(w.parentNode) w.parentNode.removeChild(w); }
}
function renderInto(el, tex){
  el.innerHTML='';
  try{ katex.render(tex, el, {throwOnError:false}); }
  catch(e){ el.textContent = tex; }
}
function makeMathNode(tex){
  const sp=document.createElement('span');
  sp.className='mnode'; sp.contentEditable='false'; sp.dataset.tex=tex;
  renderInto(sp, tex);
  return sp;
}
function serializeBox(box){
  let out='';
  (function walk(el){
    el.childNodes.forEach(function(n){
      if(n.nodeType===3) out += n.nodeValue;
      else if(n.nodeType===1){
        if(n.classList && n.classList.contains('mnode')) out += '$'+n.dataset.tex+'$';
        else if(n.nodeName==='BR') out += '\n';
        else { walk(n); if(n.nodeName==='DIV'||n.nodeName==='P') out += '\n'; }
      }
    });
  })(box);
  return out.replace(/\u200b/g,'');
}
function hasRawDollar(box){
  let f=false;
  (function walk(el){
    el.childNodes.forEach(function(n){
      if(n.nodeType===3){ if(n.nodeValue.indexOf('$')>=0) f=true; }
      else if(n.nodeType===1 && !(n.classList&&n.classList.contains('mnode'))) walk(n);
    });
  })(box);
  return f;
}
function buildFrom(box, src){
  box.innerHTML='';
  const re=/\$([^$\n]+)\$/g;
  let last=0, m;
  while((m=re.exec(src))){
    if(m.index>last) box.appendChild(document.createTextNode(src.slice(last,m.index)));
    box.appendChild(makeMathNode(m[1]));
    last=re.lastIndex;
  }
  if(last<src.length) box.appendChild(document.createTextNode(src.slice(last)));
}
function caretRange(box){
  const sel=window.getSelection();
  if(sel && sel.rangeCount){ const r=sel.getRangeAt(0); if(box.contains(r.startContainer)) return r; }
  return null;
}
function insertMathAtCaret(box, tex, caretIdx){
  if(!box || box.getAttribute('contenteditable')==='false') return;
  box.focus();
  let r = caretRange(box);
  if(!r){ r=document.createRange(); r.selectNodeContents(box); r.collapse(false); }
  r.deleteContents();
  const node = makeMathNode(tex);
  r.insertNode(node);
  const zw = document.createTextNode('\u200b');
  node.parentNode.insertBefore(zw, node.nextSibling);
  const r2=document.createRange(); r2.setStart(zw,1); r2.collapse(true);
  const sel=window.getSelection(); sel.removeAllRanges(); sel.addRange(r2);
  openInlineEditor(node, caretIdx);
}
function openInlineEditor(node, caretIdx){
  closeInlineEditor();
  const orig = node.dataset.tex;
  const rect = node.getBoundingClientRect();
  const wrap=document.createElement('div'); wrap.className='inline-ed';
  const inp=document.createElement('input'); inp.type='text'; inp.spellcheck=false; inp.value=orig;
  const tip=document.createElement('span'); tip.className='tip'; tip.textContent='Enter 确认 · Esc 取消';
  wrap.appendChild(inp); wrap.appendChild(tip);
  document.body.appendChild(wrap);
  wrap.style.left = Math.max(8, rect.left + window.scrollX) + 'px';
  wrap.style.top  = (rect.bottom + window.scrollY + 8) + 'px';
  inlineEd = wrap;
  const syncBox = ()=>{ const bx=document.getElementById('ansBox'); if(bx) bx.dispatchEvent(new Event('input')); };
  const commit = ()=>{
    const v=inp.value;
    if(!v.trim()){ node.remove(); }
    else { node.dataset.tex=v; renderInto(node, v); }
    closeInlineEditor(); syncBox();
  };
  inp.oninput = ()=>{
    if(inp.value.trim()){ node.dataset.tex=inp.value; renderInto(node, inp.value); }
  };
  inp.onkeydown = function(e){
    if(e.key==='Enter'){ e.preventDefault(); commit(); }
    else if(e.key==='Escape'){ e.preventDefault(); node.dataset.tex=orig; renderInto(node, orig); closeInlineEditor(); }
  };
  inp.onblur = function(){ setTimeout(function(){ if(inlineEd===wrap) commit(); }, 130); };
  inp.focus();
  const ci = (caretIdx==null? inp.value.length : Math.min(caretIdx, inp.value.length));
  inp.setSelectionRange(ci, ci);
}
function buildToolbar(ta){
  const box = document.getElementById('toolbar'); if(!box) return;
  const groups = TOOL_GROUPS.filter(function(g){ return g.on || state.toolsMore; });
  box.innerHTML = groups.map(function(g){
    return '<div class="tgrow"><span class="tg">'+g.g+'</span>'+
      g.items.map(function(it){
        return '<button type="button" class="tb" data-t="'+esc(it.t)+'" data-i="'+esc(it.i)+'" title="插入 '+esc(it.t)+'"></button>';
      }).join('') + '</div>';
  }).join('') +
  '<div class="tgrow"><button type="button" class="tbmore" id="tbMore">'+
    (state.toolsMore?'收起符号 ▴':'更多符号（集合 · 矩阵 · 几何）▾')+'</button></div>';
  box.querySelectorAll('.tb').forEach(function(b){
    try{ katex.render(b.dataset.t, b, {throwOnError:true}); }
    catch(err){ b.textContent = b.dataset.t; }
    b.onclick = function(){
      const ins=b.dataset.i, k=ins.indexOf('|');
      const tex = k>=0 ? ins.slice(0,k)+ins.slice(k+1) : ins;
      insertMathAtCaret(document.getElementById('ansBox'), tex, k>=0? k : tex.length);
    };
  });
  const more = document.getElementById('tbMore');
  if(more) more.onclick = function(){ state.toolsMore = !state.toolsMore; buildToolbar(ta); };
}
function bump(qid, correct){
  const p = progress[qid] = progress[qid]||{};
  p.tried = (p.tried||0)+1;
  p.correct = (p.correct||0)+(correct?1:0);
  if(correct) wrongIds = wrongIds.filter(id=>id!==qid);
  save();
}
function recordSelf(q, ok){
  const p = progress[q.id] = progress[q.id]||{};
  p.correct = (p.correct||0)+(ok?1:0);
  if(ok) wrongIds = wrongIds.filter(id=>id!==q.id);
  else if(!wrongIds.includes(q.id)) wrongIds.push(q.id);
  save();
}
function nextOf(q){ return Q[Q.findIndex(x=>x.id===q.id)+1]; }
function bindNext(q){
  const b=document.getElementById('nextBtn'); if(!b) return;
  b.onclick=()=>{ const nx=nextOf(q); if(nx) openDetail(nx.id); else { state.view='set'; renderSet(); } };
}
function showSolution(q, opts){
  const self = !!(opts&&opts.self);
  let h = `<div class="dcard"><h3>📖 参考答案与解析</h3>`;
  if(q.type==='choice'){
    const ci=choiceIdx(q.answer);
    h += `<div class="fb fb-ok">正确答案：<b>${isNaN(ci)?esc(String(q.answer)):String.fromCharCode(65+ci)}</b></div>`;
  } else if(q.answer!=null && q.answer!==''){
    h += `<div class="fb" style="background:#fafafa;border:1px solid #eee;color:#333"><b>参考答案：</b>${esc(String(q.answer))}</div>`;
  }
  h += `<div class="sol"><b>解析：</b>${esc(q.solution||'')}</div>`;
  if(self) h += `<div class="ansrow" style="margin-top:14px"><span class="hintline">对照上面的参考答案自评：</span>
    <button class="btn" id="selfOk">✅ 我答对了</button>
    <button class="btn btn2" id="selfNo">❌ 没答对</button></div>`;
  h += `</div>`;
  return h;
}
function bindSelf(q){
  const ok=document.getElementById('selfOk'), no=document.getElementById('selfNo');
  if(ok) ok.onclick=()=>{ recordSelf(q,true); finishSelf(q,true); };
  if(no) no.onclick=()=>{ recordSelf(q,false); finishSelf(q,false); };
}
function finishSelf(q, ok){
  const box=document.getElementById('resultCard');
  const row=box.querySelector('.ansrow');
  if(row) row.innerHTML=`<span style="font-weight:600;color:${ok?'#237804':'#a8071a'}">已记录：${ok?'掌握':'待复习'}</span>`;
  const acts=document.getElementById('actions');
  acts.innerHTML=`<button class="btn" id="nextBtn">下一题 →</button>`;
  acts.style.display='flex'; bindNext(q);
}
function markAttempt(q){
  const p = progress[q.id] = progress[q.id]||{};
  p.tried = (p.tried||0)+1; save();
}
function renderDetail(){
  const q = state.detail; if(!q){ state.view='set'; renderSet(); return; }
  const d = DIFF[q.difficulty]||['',''];
  const [stTxt,stCls] = statusOf(q);
  const p = progress[q.id]||{};
  const inWrong = wrongIds.includes(q.id);
  app.innerHTML = `
    <div class="detail">
      <div class="breadcrumb"><a id="backLink">← 返回题集</a></div>
      <div class="dcard">
        <div class="dtop">
          <h2>${q.__no} · ${esc(q.title||'题目')}</h2>
          <div class="tags">
            <span class="diff ${d[1]}">${d[0]}</span>
            <span class="tagchip">${esc(q.subject)}</span>
            ${(q.tags||[q.chapter]).map(t=>`<span class="tagchip">${t}</span>`).join('')}
            <span class="status ${stCls}" style="margin-left:6px"><i></i>${stTxt}</span>
            <button class="wbtn ${inWrong?'on':''}" id="wbtn">${inWrong?'★ 已在错题本':'＋ 加入错题本'}</button>
          </div>
        </div>
        <div class="stem" id="stem">${esc(q.statement)}</div>
      </div>
      <div class="dcard">
        <h3>✍️ 作答区</h3>
        <div id="answerArea"></div>
      </div>
      <div id="resultCard"></div>
      <div id="actions" style="display:none;gap:10px;margin-top:2px;flex-wrap:wrap"></div>
    </div>`;
  renderMath(app);
  document.getElementById('backLink').onclick = ()=>{ state.view='set'; renderSet(); };
  const wb = document.getElementById('wbtn');
  wb.onclick = ()=>{
    if(wrongIds.includes(q.id)) wrongIds = wrongIds.filter(id=>id!==q.id);
    else wrongIds.push(q.id);
    save();
    const on = wrongIds.includes(q.id);
    wb.classList.toggle('on', on);
    wb.innerHTML = on ? '★ 已在错题本' : '＋ 加入错题本';
  };
  const area = document.getElementById('answerArea');
  if(q.type==='choice'){
    area.innerHTML = `<div class="opts">${q.options.map((o,i)=>
      `<button class="opt" data-i="${i}"><span class="oi">${String.fromCharCode(65+i)}</span><span class="ot">${esc(o)}</span></button>`).join('')}</div>`;
    renderMath(area);
    area.querySelectorAll('.opt').forEach(b=> b.onclick=()=>{
      if(area.dataset.done) return;
      area.dataset.done='1';
      area.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel'));
      b.classList.add('sel');
      judge(q, Number(b.dataset.i));
    });
  } else if(q.type==='fill'){
    area.innerHTML = `<div class="ansrow"><input id="ansInput" placeholder="输入答案，如 2/3、0.5、π、sqrt(2)" autocomplete="off"><button class="btn" id="subBtn">提交作答</button></div>
      <div class="hintline">支持分数 <code>2/3</code>、根号 <code>sqrt(2)</code>、<code>π</code>、<code>e</code>、<code>sin</code>、<code>ln</code>，也支持 <code>$\\frac{1}{2}$</code> 这类 LaTeX 写法。</div>`;
    const inp = document.getElementById('ansInput');
    const go = ()=>judge(q, inp.value);
    document.getElementById('subBtn').onclick = go;
    inp.addEventListener('keydown', e=>{ if(e.key==='Enter') go(); });
    inp.focus();
  } else {
    area.innerHTML = `
      <div class="editor">
        <div class="toolbar" id="toolbar"></div>
        <div class="richbox" id="ansBox" contenteditable="true" spellcheck="false"
             data-ph="在这里写解答：点上面的符号会直接插入成公式（框里看到的就是渲染后的样子），普通文字照常输入。"></div>
      </div>
      <div class="ansrow"><button class="btn" id="subBtn">提交并查看参考答案</button><span class="hintline">点框里的公式可再次修改；提交后对照解析自我评估</span></div>`;
    const box = document.getElementById('ansBox');
    buildFrom(box, p.draft||'');
    const sync = ()=>{ const pp = progress[q.id] = progress[q.id]||{}; pp.draft = serializeBox(box); save(); };
    box.addEventListener('input', ()=>{ sync(); });
    box.addEventListener('paste', e=>{
      e.preventDefault();
      const t=(e.clipboardData||window.clipboardData).getData('text/plain');
      document.execCommand('insertText', false, t);
    });
    box.addEventListener('click', e=>{
      const n = e.target && e.target.closest ? e.target.closest('.mnode') : null;
      if(n){ e.preventDefault(); openInlineEditor(n); }
    });
    box.addEventListener('blur', ()=>{
      setTimeout(()=>{
        const ae=document.activeElement;
        if(ae && ae.closest && ae.closest('.inline-ed')) return;
        if(hasRawDollar(box)){ const s=serializeBox(box); buildFrom(box, s); sync(); }
      }, 160);
    });
    buildToolbar(box);
    document.getElementById('subBtn').onclick = ()=>{
      closeInlineEditor();
      if(!serializeBox(box).trim() && !confirm('还没写解答，直接查看参考答案吗？')) return;
      markAttempt(q);
      const rc=document.getElementById('resultCard');
      rc.innerHTML = showSolution(q,{self:true});
      renderMath(rc); bindSelf(q);
      box.setAttribute('contenteditable','false');
      box.classList.add('locked');
      document.getElementById('subBtn').style.display='none';
      const hl=area.querySelector('.hintline'); if(hl) hl.style.display='none';
    };
  }
}
function judge(q, student){
  const res = check(q, student);
  bump(q.id, res.correct);
  if(q.type==='choice'){
    const area=document.getElementById('answerArea');
    const ci=choiceIdx(q.answer), si=choiceIdx(student);
    if(area) area.querySelectorAll('.opt').forEach((b,i)=>{
      if(i===ci) b.classList.add('ok');
      if(i===si && !res.correct) b.classList.add('no');
    });
  }
  const rc = document.getElementById('resultCard');
  rc.innerHTML = resultHtml(q, res);
  renderMath(rc);
  const acts = document.getElementById('actions');
  acts.innerHTML = `<button class="btn" id="nextBtn">下一题 →</button>`;
  acts.style.display='flex'; bindNext(q);
  const inp = document.getElementById('ansInput'); if(inp) inp.disabled=true;
  const sb = document.getElementById('subBtn'); if(sb) sb.style.display='none';
}
function resultHtml(q,res){
  let h = `<div class="dcard"><h3>${res.correct?'✅ 回答正确':'❌ 回答错误'}</h3>`;
  if(!res.correct){
    if(q.type==='choice'){
      const ci=choiceIdx(q.answer);
      h += `<div class="fb fb-no">正确答案：<b>${isNaN(ci)?esc(String(q.answer)):String.fromCharCode(65+ci)}</b></div>`;
    } else if(q.answer!=null && q.answer!==''){
      h += `<div class="fb fb-no">正确答案：<b>${esc(String(q.answer))}</b></div>`;
    }
  } else if(q.answer!=null && q.answer!=='' && q.type!=='choice'){
    h += `<div class="fb fb-ok">参考答案：<b>${esc(String(q.answer))}</b></div>`;
  }
  if(res.msg) h += `<div class="fb" style="background:#fffbe6;border-color:#ffe58f;color:#ad6800">${esc(res.msg)}</div>`;
  if(!res.correct && q.hint) h += `<div class="fb" style="background:#f6ffed;border-color:#d9f7be;color:#389e0d">💡 ${esc(q.hint)}</div>`;
  h += `<div class="sol"><b>解析：</b>${esc(q.solution||'')}</div></div>`;
  return h;
}

/* ---------- 错题本 ---------- */
function renderWrong(){
  const list = Q.filter(q=> wrongIds.includes(q.id));
  const rows = list.map(q=>{
    const d=DIFF[q.difficulty]||['',''];
    const p=progress[q.id];
    const [stTxt,stCls]=statusOf(q);
    return `<tr><td class="tid">${q.__no}</td>
      <td class="ttitle" data-id="${q.id}">${esc(q.title||('题 '+q.__no)).slice(0,40)}</td>
      <td>${(q.tags||[q.chapter]).map(t=>`<span class="tagchip">${t}</span>`).join('')}</td>
      <td><span class="diff ${d[1]}">${d[0]}</span></td>
      <td><span class="status ${stCls}"><i></i>${stTxt}</span></td>
      <td class="rmwrap"><button class="rm" data-rm="${q.id}">移出</button></td></tr>`;
  }).join('');
  app.innerHTML = `<div class="pshead"><h1>📕 错题本</h1><div class="meta">共 <b>${list.length}</b> 题，点击标题重做；也可随手把任意题目加进来</div></div>
    <div class="panel"><table><thead><tr><th style="width:90px">题号</th><th>题目名称</th><th style="width:34%">考点标签</th><th style="width:80px">难度</th><th style="width:86px">状态</th><th style="width:92px">操作</th></tr></thead>
    <tbody>${rows||'<tr><td colspan="6" class="empty">错题本是空的，继续保持！</td></tr>'}</tbody></table></div>`;
  app.querySelectorAll('.ttitle').forEach(t=> t.onclick=()=> openDetail(t.dataset.id));
  app.querySelectorAll('[data-rm]').forEach(b=> b.onclick=(e)=>{
    e.stopPropagation();
    wrongIds = wrongIds.filter(id=>id!==b.dataset.rm);
    save(); renderWrong();
  });
  renderMath(app);
}

/* ---------- 导航 ---------- */
document.getElementById('menu').querySelectorAll('button').forEach(b=> b.onclick=()=>{
  document.querySelectorAll('#menu button').forEach(x=>x.classList.remove('on')); b.classList.add('on');
  state.view = b.dataset.view;
  if(state.view==='set') renderSet(); else renderWrong();
});
document.getElementById('resetBtn').onclick = ()=>{ if(confirm('确定重置所有进度和错题本？')){ progress={}; wrongIds=[]; save(); renderSet(); } };
document.querySelectorAll('#menu button').forEach(b=>{ if(b.dataset.view==='set') b.classList.add('on'); });

/* ---------- 启动 ---------- */
renderSet();
