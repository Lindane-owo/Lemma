/* 题库数据：数分 + 高等代数
   字段说明：
   id, subject(数分/高代), chapter, difficulty(1基础/2提高/3挑战)
   type(choice/fill/calc), statement(含 $..$ 公式)
   options(choice 用，answer 为正确选项下标), answer(fill/calc 用，可含 π/e/分数/根号)
   tolerance(数值容差), hint, solution
*/
window.QUESTIONS = [
  /* ===================== 数学分析 ===================== */
  // —— 数列极限 ——
  {id:"ma-seq-01", title:"有理分式求极限", subject:"数分", chapter:"数列极限", difficulty:1, type:"fill",
   statement:"求极限 $\\lim\\limits_{n\\to\\infty}\\dfrac{2n+1}{3n+5}$", answer:"2/3",
   hint:"分子分母同除以 n", solution:"同除 n：$\\dfrac{2+1/n}{3+5/n}\\to\\dfrac{2}{3}$"},
  {id:"ma-seq-02", title:"振荡数列的极限", subject:"数分", chapter:"数列极限", difficulty:1, type:"choice",
   statement:"数列 $a_n=(-1)^n$ 的极限", options:["0","1","-1","不存在"], answer:3,
   hint:"子列取 1 和 -1，两个子列极限不同", solution:"取偶子列 $a_{2n}=1$、奇子列 $a_{2n+1}=-1$，极限不唯一，故不存在。"},
  {id:"ma-seq-03", title:"求和式的极限", subject:"数分", chapter:"数列极限", difficulty:2, type:"fill",
   statement:"求极限 $\\lim\\limits_{n\\to\\infty}\\dfrac{1+2+\\cdots+n}{n^2}$", answer:"1/2",
   hint:"先求和 $1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$", solution:"$\\dfrac{n(n+1)/2}{n^2}=\\dfrac{1+1/n}{2}\\to\\dfrac12$"},
  {id:"ma-seq-04", title:"重要极限（数列）", subject:"数分", chapter:"数列极限", difficulty:2, type:"fill",
   statement:"求极限 $\\lim\\limits_{n\\to\\infty}\\left(1+\\dfrac1n\\right)^n$", answer:"e",
   hint:"这是重要极限 $e$ 的定义", solution:"$\\lim(1+1/n)^n=e\\approx2.718$"},
  {id:"ma-seq-05", title:"根式差的有理化", subject:"数分", chapter:"数列极限", difficulty:3, type:"fill",
   statement:"求极限 $\\lim\\limits_{n\\to\\infty}\\left(\\sqrt{n+1}-\\sqrt n\\right)\\sqrt n$", answer:"1/2",
   hint:"有理化：$\\dfrac{1}{\\sqrt{n+1}+\\sqrt n}$", solution:"$\\dfrac{\\sqrt n}{\\sqrt{n+1}+\\sqrt n}=\\dfrac{1}{\\sqrt{1+1/n}+1}\\to\\dfrac12$"},
  {id:"ma-seq-06", title:"n 次根号下的极限", subject:"数分", chapter:"数列极限", difficulty:3, type:"fill",
   statement:"求极限 $\\lim\\limits_{n\\to\\infty}\\sqrt[n]{n}$", answer:"1",
   hint:"用夹逼或取对数", solution:"$1\\le\\sqrt[n]{n}\\le\\sqrt[n]{n\\cdot n\\cdot1\\cdots1}$ 夹逼得 1；或取对数 $\\dfrac{\\ln n}{n}\\to0$。"},

  // —— 函数极限与连续 ——
  {id:"ma-lim-01", title:"重要极限 sin x/x", subject:"数分", chapter:"函数极限与连续", difficulty:1, type:"fill",
   statement:"求极限 $\\lim\\limits_{x\\to0}\\dfrac{\\sin x}{x}$", answer:"1",
   hint:"重要极限", solution:"$\\lim_{x\\to0}\\dfrac{\\sin x}{x}=1$"},
  {id:"ma-lim-02", title:"等价无穷小 1−cos x", subject:"数分", chapter:"函数极限与连续", difficulty:2, type:"fill",
   statement:"求极限 $\\lim\\limits_{x\\to0}\\dfrac{1-\\cos x}{x^2}$", answer:"1/2",
   hint:"$1-\\cos x\\sim\\dfrac{x^2}{2}$", solution:"$\\dfrac{1-\\cos x}{x^2}\\to\\dfrac12$"},
  {id:"ma-lim-03", title:"等价无穷小 eˣ−1", subject:"数分", chapter:"函数极限与连续", difficulty:1, type:"fill",
   statement:"求极限 $\\lim\\limits_{x\\to0}\\dfrac{e^x-1}{x}$", answer:"1",
   hint:"$e^x-1\\sim x$", solution:"$\\dfrac{e^x-1}{x}\\to1$"},
  {id:"ma-lim-04", title:"可去间断点判定", subject:"数分", chapter:"函数极限与连续", difficulty:2, type:"choice",
   statement:"函数 $f(x)=\\dfrac{\\sin x}{x}$ 在 $x=0$ 处", options:["连续","可去间断点","跳跃间断点","无穷间断点"], answer:1,
   hint:"$x=0$ 无定义，但极限存在", solution:"极限为 1，但函数在该点无定义，属可去间断点（可补充定义使之连续）。"},
  {id:"ma-lim-05", title:"重要极限（函数）", subject:"数分", chapter:"函数极限与连续", difficulty:2, type:"fill",
   statement:"求极限 $\\lim\\limits_{x\\to\\infty}\\left(1+\\dfrac1x\\right)^x$", answer:"e",
   hint:"重要极限", solution:"$\\lim(1+1/x)^x=e$"},

  // —— 导数与微分 ——
  {id:"ma-der-01", title:"正弦函数的导数", subject:"数分", chapter:"导数与微分", difficulty:1, type:"choice",
   statement:"$(\\sin x)'$ 等于", options:["$\\cos x$","$-\\cos x$","$-\\sin x$","$\\tan x$"], answer:0,
   hint:"基本求导公式", solution:"$(\\sin x)'=\\cos x$"},
  {id:"ma-der-02", title:"指数函数的导数", subject:"数分", chapter:"导数与微分", difficulty:1, type:"choice",
   statement:"$(e^x)'$ 等于", options:["$e^x$","$xe^{x-1}$","$e^{x-1}$","$\\ln x$"], answer:0,
   hint:"$e^x$ 的导数还是自己", solution:"$(e^x)'=e^x$"},
  {id:"ma-der-03", title:"多项式求导代值", subject:"数分", chapter:"导数与微分", difficulty:2, type:"fill",
   statement:"设 $f(x)=x^3+2x$，求 $f'(1)$", answer:"5",
   hint:"$f'(x)=3x^2+2$", solution:"$f'(x)=3x^2+2$，$f'(1)=3+2=5$"},
  {id:"ma-der-04", title:"幂指函数求导", subject:"数分", chapter:"导数与微分", difficulty:3, type:"fill",
   statement:"设 $f(x)=x^x$（$x>0$），求 $f'(1)$", answer:"1",
   hint:"$x^x=e^{x\\ln x}$", solution:"$f'(x)=x^x(\\ln x+1)$，$f'(1)=1\\cdot(0+1)=1$"},
  {id:"ma-der-05", title:"绝对值函数的可导性", subject:"数分", chapter:"导数与微分", difficulty:2, type:"choice",
   statement:"$f(x)=|x|$ 在 $x=0$ 处", options:["可导且导数为 0","可导且导数为 1","不可导","连续但无定义"], answer:2,
   hint:"左右导数不相等", solution:"左导数为 -1、右导数为 1，左右不相等，故不可导（但连续）。"},

  // —— 微分中值定理 ——
  {id:"ma-mvt-01", title:"拉格朗日定理的条件", subject:"数分", chapter:"微分中值定理", difficulty:1, type:"choice",
   statement:"拉格朗日中值定理的条件是 $f$ 在 $[a,b]$ 上", options:["连续，在 $(a,b)$ 内可导","仅连续","仅可导","可积"], answer:0,
   hint:"闭区间连续 + 开区间可导", solution:"需 $[a,b]$ 连续、$(a,b)$ 内可导，则存在 $\\xi$ 使 $f'(\\xi)=\\dfrac{f(b)-f(a)}{b-a}$。"},
  {id:"ma-mvt-02", title:"罗尔定理的结论", subject:"数分", chapter:"微分中值定理", difficulty:1, type:"choice",
   statement:"罗尔定理中，若 $f(a)=f(b)$，则存在 $\\xi\\in(a,b)$ 使", options:["$f'(\\xi)=0$","$f'(\\xi)=1$","$f''(\\xi)=0$","$f'(\\xi)$ 不存在"], answer:0,
   hint:"端点值相等 → 中间有水平切线", solution:"罗尔定理：存在 $\\xi$ 使 $f'(\\xi)=0$。"},

  // —— 不定积分 ——
  {id:"ma-int-01", title:"幂函数的不定积分", subject:"数分", chapter:"不定积分", difficulty:1, type:"choice",
   statement:"$\\int x\\,dx$ 等于", options:["$x^2+C$","$\\dfrac{x^2}{2}+C$","$2x+C$","$\\ln x+C$"], answer:1,
   hint:"幂函数积分公式", solution:"$\\int x\\,dx=\\dfrac{x^2}{2}+C$"},
  {id:"ma-int-02", title:"倒数的不定积分", subject:"数分", chapter:"不定积分", difficulty:1, type:"choice",
   statement:"$\\int\\dfrac1x\\,dx$ 等于", options:["$\\ln|x|+C$","$x^2+C$","$-\\dfrac1{x^2}+C$","$e^x+C$"], answer:0,
   hint:"1/x 的原函数", solution:"$\\int\\dfrac1x dx=\\ln|x|+C$"},
  {id:"ma-int-03", title:"正弦的不定积分", subject:"数分", chapter:"不定积分", difficulty:1, type:"choice",
   statement:"$\\int\\sin x\\,dx$ 等于", options:["$\\cos x+C$","$-\\cos x+C$","$\\sin x+C$","$-\\sin x+C$"], answer:1,
   hint:"谁的导数是 sin x", solution:"$\\int\\sin x dx=-\\cos x+C$"},
  {id:"ma-int-04", title:"幂函数的定积分", subject:"数分", chapter:"不定积分", difficulty:2, type:"fill",
   statement:"求 $\\int_0^1 x^2\\,dx$", answer:"1/3",
   hint:"幂函数积分", solution:"$\\left.\\dfrac{x^3}{3}\\right|_0^1=\\dfrac13$"},

  // —— 定积分 ——
  {id:"ma-def-01", title:"正弦函数的定积分", subject:"数分", chapter:"定积分", difficulty:1, type:"fill",
   statement:"求 $\\int_0^{\\pi}\\sin x\\,dx$", answer:"2",
   hint:"$\\int\\sin x\\,dx=-\\cos x$", solution:"$[-\\cos x]_0^{\\pi}=-(-1)-(-1)=2$"},
  {id:"ma-def-02", title:"指数函数的定积分", subject:"数分", chapter:"定积分", difficulty:2, type:"fill",
   statement:"求 $\\int_0^1 e^x\\,dx$", answer:"e-1",
   hint:"原函数是 e^x", solution:"$[e^x]_0^1=e-1$"},
  {id:"ma-def-03", title:"降幂后求定积分", subject:"数分", chapter:"定积分", difficulty:3, type:"fill",
   statement:"求 $\\int_0^{\\pi/2}\\sin^2 x\\,dx$", answer:"π/4",
   hint:"$\\sin^2x=\\dfrac{1-\\cos2x}{2}$", solution:"$\\int_0^{\\pi/2}\\dfrac{1-\\cos2x}{2}dx=\\dfrac{\\pi}{4}$"},

  // —— 反常积分 ——
  {id:"ma-imp-01", title:"无穷限反常积分", subject:"数分", chapter:"反常积分", difficulty:2, type:"fill",
   statement:"求 $\\int_0^{+\\infty}e^{-x}\\,dx$", answer:"1",
   hint:"$[-e^{-x}]_0^{\\infty}$", solution:"$[-e^{-x}]_0^{\\infty}=0-(-1)=1$"},
  {id:"ma-imp-02", title:"p 积分的敛散性", subject:"数分", chapter:"反常积分", difficulty:2, type:"choice",
   statement:"$\\int_1^{+\\infty}\\dfrac{1}{x^p}dx$ 当 $p$ 取何值时收敛", options:["$p<1$","$p=1$","$p>1$","任意 p"], answer:2,
   hint:"p 级数/积分判别", solution:"$p>1$ 时收敛，$p\\le1$ 时发散。"},

  // —— 无穷级数 ——
  {id:"ma-ser-01", title:"几何级数求和", subject:"数分", chapter:"无穷级数", difficulty:2, type:"fill",
   statement:"求级数 $\\sum\\limits_{n=1}^{\\infty}\\left(\\dfrac12\\right)^n$ 的和", answer:"1",
   hint:"等比级数 $\\dfrac{a}{1-q}$", solution:"$\\dfrac{1/2}{1-1/2}=1$"},
  {id:"ma-ser-02", title:"p=2 级数求和", subject:"数分", chapter:"无穷级数", difficulty:3, type:"fill",
   statement:"求级数 $\\sum\\limits_{n=1}^{\\infty}\\dfrac{1}{n^2}$ 的和", answer:"π^2/6",
   hint:"巴塞尔问题", solution:"$\\sum\\dfrac1{n^2}=\\dfrac{\\pi^2}{6}$"},
  {id:"ma-ser-03", title:"调和级数的敛散性", subject:"数分", chapter:"无穷级数", difficulty:1, type:"choice",
   statement:"级数 $\\sum\\limits_{n=1}^{\\infty}\\dfrac1n$ 的敛散性", options:["收敛","发散","条件收敛","绝对收敛"], answer:1,
   hint:"调和级数", solution:"调和级数 $\\sum\\dfrac1n$ 发散。"},

  // —— 多元微分 ——
  {id:"ma-mul-01", title:"偏导数在一点的值", subject:"数分", chapter:"多元函数微分", difficulty:2, type:"fill",
   statement:"设 $f(x,y)=x^2+2xy$，求 $\\dfrac{\\partial f}{\\partial x}$ 在点 $(1,1)$ 的值", answer:"4",
   hint:"$\\dfrac{\\partial f}{\\partial x}=2x+2y$", solution:"$2x+2y$ 在 $(1,1)$ 处为 $2+2=4$。"},

  /* ===================== 高等代数 ===================== */
  // —— 行列式 ——
  {id:"la-det-01", title:"二阶行列式：直接展开", subject:"高代", chapter:"行列式", difficulty:1, type:"fill",
   statement:"计算二阶行列式 $\\begin{vmatrix}1&2\\\\3&4\\end{vmatrix}$", answer:"-2",
   hint:"$ad-bc$", solution:"$1\\cdot4-2\\cdot3=-2$"},
  {id:"la-det-02", title:"二阶行列式：对称型", subject:"高代", chapter:"行列式", difficulty:1, type:"fill",
   statement:"计算 $\\begin{vmatrix}2&1\\\\1&2\\end{vmatrix}$", answer:"3",
   hint:"对角相乘相减", solution:"$2\\cdot2-1\\cdot1=3$"},
  {id:"la-det-03", title:"对角行列式", subject:"高代", chapter:"行列式", difficulty:1, type:"fill",
   statement:"计算 $\\begin{vmatrix}1&0&0\\\\0&2&0\\\\0&0&3\\end{vmatrix}$", answer:"6",
   hint:"对角行列式 = 对角线元素乘积", solution:"$1\\cdot2\\cdot3=6$"},
  {id:"la-det-04", title:"三阶行列式展开", subject:"高代", chapter:"行列式", difficulty:2, type:"fill",
   statement:"计算 $\\begin{vmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{vmatrix}$", answer:"0",
   hint:"注意第三行与第一、二行的线性关系", solution:"第二行减第一行得 $(3,3,3)$，第三行减第二行也得 $(3,3,3)$，两行相同/成比例，行列式为 0。"},
  {id:"la-det-05", title:"交换两行的性质", subject:"高代", chapter:"行列式", difficulty:1, type:"choice",
   statement:"若交换行列式的两行，则行列式的值", options:["不变","变为相反数","变为 0","变为 2 倍"], answer:1,
   hint:"行列式的性质", solution:"交换两行，行列式变号（变为相反数）。"},

  // —— 矩阵运算 ——
  {id:"la-mat-01", title:"矩阵的迹", subject:"高代", chapter:"矩阵运算", difficulty:1, type:"fill",
   statement:"设 $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$，则 $A$ 的迹（对角线元素之和）", answer:"5",
   hint:"trace = a11 + a22", solution:"$1+4=5$"},
  {id:"la-mat-02", title:"矩阵乘法的元素", subject:"高代", chapter:"矩阵运算", difficulty:2, type:"fill",
   statement:"设 $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$，求 $A^2$ 的 (1,1) 元素", answer:"7",
   hint:"$A^2$ 的 (1,1) = 第一行 × 第一列", solution:"$1\\cdot1+2\\cdot3=7$"},
  {id:"la-mat-03", title:"单位矩阵的乘法", subject:"高代", chapter:"矩阵运算", difficulty:1, type:"choice",
   statement:"设 $I$ 为单位矩阵，则 $A\\cdot I$ 等于", options:["$A$","$I$","$2A$","$0$"], answer:0,
   hint:"单位矩阵是乘法的单位元", solution:"$AI=IA=A$"},
  {id:"la-mat-04", title:"对角矩阵求逆", subject:"高代", chapter:"矩阵运算", difficulty:2, type:"fill",
   statement:"设 $A=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$，求 $A^{-1}$ 的 (1,1) 元素", answer:"1/2",
   hint:"对角矩阵求逆 = 对角元素取倒数", solution:"$A^{-1}=\\begin{pmatrix}1/2&0\\\\0&1/3\\end{pmatrix}$，故 (1,1) 为 $1/2$。"},
  {id:"la-mat-05", title:"特殊矩阵的幂", subject:"高代", chapter:"矩阵运算", difficulty:2, type:"choice",
   statement:"设 $A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$，则 $A^2$ 等于", options:["$\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$","$\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$","$\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$","$\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$"], answer:0,
   hint:"直接算 $A\\cdot A$", solution:"$A^2=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$"},

  // —— 矩阵的秩 ——
  {id:"la-rnk-01", title:"单位矩阵的秩", subject:"高代", chapter:"矩阵的秩", difficulty:1, type:"fill",
   statement:"求矩阵 $\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}$ 的秩", answer:"3",
   hint:"单位矩阵满秩", solution:"三阶单位矩阵的秩为 3。"},
  {id:"la-rnk-02", title:"用展开判定秩", subject:"高代", chapter:"矩阵的秩", difficulty:2, type:"fill",
   statement:"求矩阵 $\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$ 的秩", answer:"1",
   hint:"第二行是第一行的 2 倍", solution:"两行成比例，秩为 1。"},
  {id:"la-rnk-03", title:"秩的取值范围", subject:"高代", chapter:"矩阵的秩", difficulty:1, type:"choice",
   statement:"$m\\times n$ 矩阵的秩的取值范围是", options:["$0\\le r\\le\\min(m,n)$","$r=m+n$","$r>\\min(m,n)$","$r=mn$"], answer:0,
   hint:"秩不超过行数和列数的最小值", solution:"$0\\le r\\le\\min(m,n)$。"},

  // —— 线性方程组 ——
  {id:"la-lin-01", title:"二元非齐次方程组", subject:"高代", chapter:"线性方程组", difficulty:1, type:"fill",
   statement:"解方程组 $\\begin{cases}x+y=3\\\\x-y=1\\end{cases}$，求 $x$", answer:"2",
   hint:"两式相加消去 y", solution:"相加得 $2x=4$，$x=2$。"},
  {id:"la-lin-02", title:"齐次组自由变量", subject:"高代", chapter:"线性方程组", difficulty:2, type:"fill",
   statement:"齐次方程组 $\\begin{cases}2x-y=0\\\\4x-2y=0\\end{cases}$ 的自由变量个数", answer:"1",
   hint:"两个方程其实是同一个", solution:"系数矩阵秩为 1，2 个变量，自由变量数 $2-1=1$。"},
  {id:"la-lin-03", title:"唯一解的充要条件", subject:"高代", chapter:"线性方程组", difficulty:1, type:"choice",
   statement:"$n$ 元线性方程组 $Ax=b$ 有唯一解的充要条件", options:["$|A|\\ne0$","$|A|=0$","$b=0$","$A=I$"], answer:0,
   hint:"系数矩阵可逆", solution:"$A$ 可逆（$|A|\\ne0$）时解唯一。"},

  // —— 向量空间 ——
  {id:"la-vec-01", title:"张成子空间的维数", subject:"高代", chapter:"向量空间", difficulty:1, type:"fill",
   statement:"$\\mathbb{R}^3$ 中由 $(1,0,0),(0,1,0)$ 张成的子空间维数", answer:"2",
   hint:"两个线性无关向量", solution:"两向量线性无关，张成二维子空间。"},
  {id:"la-vec-02", title:"线性相关的判定", subject:"高代", chapter:"向量空间", difficulty:2, type:"choice",
   statement:"向量组 $(1,1),(2,2)$ 是否线性无关", options:["线性无关","线性相关","无法判断","正交"], answer:1,
   hint:"第二个是第一个的 2 倍", solution:"$(2,2)=2(1,1)$，线性相关。"},

  // —— 线性变换 ——
  {id:"la-lt-01", title:"线性变换的定义", subject:"高代", chapter:"线性变换", difficulty:1, type:"choice",
   statement:"线性变换 $T$ 必须满足", options:["$T(x+y)=T(x)+T(y)$ 且 $T(kx)=kT(x)$","$T(x)=x$","$T(0)=1$","$T(x)=x^2$"], answer:0,
   hint:"保持加法与数乘", solution:"线性变换需保持加法 $T(x+y)=T(x)+T(y)$ 与数乘 $T(kx)=kT(x)$。"},

  // —— 特征值与特征向量 ——
  {id:"la-eig-01", title:"对角矩阵的特征值", subject:"高代", chapter:"特征值与特征向量", difficulty:1, type:"choice",
   statement:"矩阵 $\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$ 的特征值", options:["$2,3$","$2,2$","$3,3$","$0,5$"], answer:0,
   hint:"对角矩阵的特征值就是对角元素", solution:"对角矩阵特征值为对角线元素 $2,3$。"},
  {id:"la-eig-02", title:"特征值之和等于迹", subject:"高代", chapter:"特征值与特征向量", difficulty:1, type:"fill",
   statement:"矩阵 $\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$ 的特征值之和（= 迹）", answer:"3",
   hint:"特征值之和 = 迹", solution:"迹 $=1+2=3$。"},
  {id:"la-eig-03", title:"特征值之积等于行列式", subject:"高代", chapter:"特征值与特征向量", difficulty:2, type:"fill",
   statement:"矩阵 $\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$ 的特征值之积（= 行列式）", answer:"2",
   hint:"特征值之积 = 行列式", solution:"$|A|=1\\cdot2-1\\cdot0=2$。"},
  {id:"la-eig-04", title:"上三角矩阵的特征值", subject:"高代", chapter:"特征值与特征向量", difficulty:1, type:"choice",
   statement:"矩阵 $\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$ 的两个特征值是", options:["$1,2$","$1,1$","$2,2$","$-1,2$"], answer:0,
   hint:"$|\\lambda I-A|=0$", solution:"$\\begin{vmatrix}\\lambda-1&-1\\\\0&\\lambda-2\\end{vmatrix}=(\\lambda-1)(\\lambda-2)=0$，得 $1,2$。"},

  // —— 二次型 ——
  {id:"la-qua-01", title:"二次型的矩阵", subject:"高代", chapter:"二次型", difficulty:2, type:"choice",
   statement:"二次型 $f(x,y)=x^2+4xy+y^2$ 对应的矩阵是", options:["$\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$","$\\begin{pmatrix}1&4\\\\4&1\\end{pmatrix}$","$\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$","$\\begin{pmatrix}1&4\\\\0&1\\end{pmatrix}$"], answer:0,
   hint:"交叉项系数要除以 2 填到对称位置", solution:"$f=x^2+4xy+y^2$，对称矩阵为 $\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$（交叉项系数 4 对半分到两个对称位置）。"},
  {id:"la-qua-02", title:"实对称矩阵的性质", subject:"高代", chapter:"二次型", difficulty:1, type:"choice",
   statement:"一个实对称矩阵一定", options:["可对角化","不可逆","有重特征值","为零矩阵"], answer:0,
   hint:"实对称矩阵可正交对角化", solution:"实对称矩阵必可（正交）对角化，特征值都是实数。"},

  // —— 欧氏空间 ——
  {id:"la-euc-01", title:"向量的内积", subject:"高代", chapter:"欧氏空间", difficulty:1, type:"fill",
   statement:"向量 $(1,2)$ 与 $(2,1)$ 的内积", answer:"4",
   hint:"对应分量相乘再相加", solution:"$1\\cdot2+2\\cdot1=4$。"},
  {id:"la-euc-02", title:"向量正交的充要条件", subject:"高代", chapter:"欧氏空间", difficulty:1, type:"choice",
   statement:"两个非零向量正交的充要条件是", options:["内积为 0","内积为 1","模长相等","方向相同"], answer:0,
   hint:"正交即内积为零", solution:"$\\alpha\\perp\\beta \\iff (\\alpha,\\beta)=0$。"}
];
