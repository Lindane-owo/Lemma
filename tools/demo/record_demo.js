// Lemma 演示视频录制脚本
// 用法：node tools/demo/record_demo.js
// 产物：demo-out/demo.webm（再由 ffmpeg 转 Lemma-demo.mp4）
const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const OUT = path.resolve(__dirname, '../../demo-out');
const INDEX = 'file:///D:/Lemma/index.html';

// 分镜时间轴（毫秒，从 t0 起算）
const T = { s1: 6000, s2: 20000, s3: 32000, s4: 46000, s5: 66000, s6: 78000, s7: 86000, s8: 90000 };

function overlayScript() {
  const boot = () => {
    const st = document.createElement('style');
    st.textContent = `
      #__cursor{position:fixed;z-index:2147483647;width:16px;height:16px;border-radius:50%;
        background:rgba(0,0,0,.30);border:2px solid #fff;box-shadow:0 0 8px rgba(0,0,0,.45);
        pointer-events:none;left:-40px;top:-40px;transition:left .09s linear,top .09s linear}
      #__cap{position:fixed;left:50%;bottom:36px;transform:translateX(-50%);z-index:2147483646;
        max-width:1600px;padding:12px 28px;border-radius:12px;background:rgba(0,0,0,.78);color:#fff;
        font:32px/1.45 "Microsoft YaHei","PingFang SC",sans-serif;pointer-events:none;opacity:0;
        transition:opacity .18s;white-space:nowrap}
      #__cap.on{opacity:1}
      #__end{position:fixed;inset:0;z-index:2147483645;background:#111;color:#fff;display:flex;
        flex-direction:column;align-items:center;justify-content:center;gap:16px;opacity:0;
        pointer-events:none;transition:opacity .4s;
        font:600 60px/1.45 "Microsoft YaHei","PingFang SC",sans-serif;text-align:center}
      #__end.on{opacity:1}
      #__end small{font-size:28px;font-weight:400;color:#bbb}
    `;
    document.documentElement.appendChild(st);
    const mk = (id) => { const d = document.createElement('div'); d.id = id; document.documentElement.appendChild(d); return d; };
    const cur = mk('__cursor');
    const cap = mk('__cap');
    const end = mk('__end');
    window.__cap = (t) => { cap.textContent = t || ''; cap.classList.toggle('on', !!t); };
    window.__end = (html) => { end.innerHTML = html; end.classList.toggle('on', !!html); };
    window.addEventListener('mousemove', (e) => {
      cur.style.left = (e.clientX - 10) + 'px';
      cur.style.top = (e.clientY - 10) + 'px';
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
}

(async () => {
  fs.mkdirSync(path.join(OUT, 'raw'), { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: { dir: path.join(OUT, 'raw'), size: { width: 1920, height: 1080 } },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  page.setDefaultTimeout(15000);
  await page.addInitScript(overlayScript);
  await page.goto(INDEX);
  await page.waitForTimeout(1200);

  const t0 = Date.now();
  const holdTo = async (ms) => {
    const d = ms - (Date.now() - t0);
    if (d > 0) await page.waitForTimeout(d);
  };
  const say = async (text) => page.evaluate((t) => window.__cap(t), text);
  const moveClick = async (sel, idx = 0) => {
    const loc = page.locator(sel).nth(idx);
    const bb = await loc.boundingBox();
    if (!bb) throw new Error('找不到元素: ' + sel + '[' + idx + ']');
    const x = bb.x + bb.width / 2;
    const y = bb.y + bb.height / 2;
    await page.mouse.move(x, y, { steps: 26 });
    await page.waitForTimeout(260);
    await page.mouse.click(x, y);
  };
  const typeText = async (text, delay = 130) => page.keyboard.type(text, { delay });

  const picks = await page.evaluate(() => {
    const choice = Q.find((q) => q.type === 'choice' && q.book === 'linalg' && Array.isArray(q.options) && q.options.length >= 3);
    const fill = Q.find((q) => q.id === 'ma-def-03') || Q.find((q) => q.type === 'fill' && String(q.answer).includes('π'));
    const proof = Q.find((q) => q.type === 'proof' && q.book === 'linalg');
    if (!choice || !fill || !proof) return null;
    return { choice: choice.id, choiceWrong: (Number(choice.answer) + 1) % choice.options.length, fill: fill.id, proof: proof.id };
  });
  if (!picks) throw new Error('挑题失败');
  console.log('PICKS', JSON.stringify(picks));

  try {
    // 1. 首页
    await say('Lemma · 数分 / 高代刷题站，1387 题，离线即用');
    await holdTo(T.s1);

    // 2. 筛选
    await say('难度 / 考点 / 教材 / 关键词，多维筛选');
    await page.waitForTimeout(400);
    await moveClick('[data-diff="2"]');
    await page.waitForTimeout(600);
    await moveClick('[data-book="linalg"]');
    await page.waitForTimeout(600);
    await moveClick('#qsearch');
    await typeText('行列式', 170);
    await page.waitForTimeout(900);
    await moveClick('[data-tag="行列式计算"]');
    await page.waitForTimeout(900);
    await holdTo(T.s2);

    // 3. 选择题
    await say('选择题：点选即判，对错标色');
    await page.evaluate((id) => openDetail(id), picks.choice);
    await page.waitForTimeout(900);
    await moveClick('.opt', picks.choiceWrong);
    await page.waitForTimeout(2200);
    await holdTo(T.s3);

    // 4. 填空题
    await say('填空题：支持 π、√、分式、LaTeX 写法');
    await page.evaluate((id) => openDetail(id), picks.fill);
    await page.waitForTimeout(800);
    await moveClick('#ansInput');
    await typeText('\\frac{\\pi}{4}', 140);
    await page.waitForTimeout(500);
    await moveClick('#subBtn');
    await page.waitForTimeout(1800);
    await holdTo(T.s4);

    // 5. 证明题 + LaTeX 工具栏
    await say('证明题：内置 LaTeX 编辑器，公式框内直接渲染');
    await page.evaluate((id) => openDetail(id), picks.proof);
    await page.waitForTimeout(900);
    await moveClick('#ansBox');
    await page.waitForTimeout(300);
    for (const idx of [12, 17, 18]) {           // \int  \lim  \sum
      await moveClick('#toolbar .tb', idx);
      await page.waitForTimeout(350);
      await page.keyboard.press('End');
      await page.waitForTimeout(200);
    }
    await page.waitForTimeout(600);
    await moveClick('#subBtn');
    await page.waitForTimeout(1500);
    await moveClick('#selfOk');
    await page.waitForTimeout(900);
    await holdTo(T.s5);

    // 6. 错题本
    await say('答错自动进入错题本');
    await moveClick('#menu button[data-view="wrong"]');
    await page.waitForTimeout(900);
    await moveClick('.ttitle', 0);
    await page.waitForTimeout(1200);
    await holdTo(T.s6);

    // 7. 回到题集看统计
    await say('已练 / 正确率 / 错题数，自动保存');
    await page.evaluate(() => goView('set'));
    await page.waitForTimeout(700);
    await page.mouse.wheel(0, -2400);
    await page.waitForTimeout(700);
    await holdTo(T.s7);

    // 8. 尾卡
    await page.evaluate(() => window.__cap(''));
    await page.evaluate(() => { const c = document.getElementById('__cursor'); if (c) c.style.display = 'none'; });
    await page.waitForTimeout(250);
    await page.evaluate(() => window.__end('Lemma · 双击 index.html 即可使用<small>1387 题 · 离线运行 · 数据只存在本机</small>'));
    await holdTo(T.s8);
  } catch (e) {
    console.error('RECORD FAIL:', e.message);
    await ctx.close();
    await browser.close();
    process.exit(1);
  }

  const v = page.video();
  await ctx.close();
  await v.saveAs(path.join(OUT, 'demo.webm'));
  await browser.close();
  console.log('VIDEO OK', path.join(OUT, 'demo.webm'));
})().catch((e) => { console.error('FATAL:', e.message); process.exit(1); });
