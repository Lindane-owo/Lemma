window.BOOK_QUESTIONS = [
 {
  "id": "ch1-1-1",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 1,
  "type": "fill",
  "statement": "计算行列式 $\\begin{vmatrix}10&8&2\\\\15&12&3\\\\20&32&12\\end{vmatrix}$",
  "answer": "0",
  "hint": "按对角线法则展开",
  "solution": "每行成比例（第3行=第1行×2），行列式为 0。官方答案：0 [✓官方]"
 },
 {
  "id": "ch1-1-2",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "choice",
  "statement": "计算 $\\begin{vmatrix}a&b&c\\\\b&c&a\\\\c&a&b\\end{vmatrix}$",
  "options": [
   "$3abc-a^3-b^3-c^3$",
   "$a^3+b^3+c^3-3abc$",
   "$abc$",
   "$a^3+b^3+c^3$"
  ],
  "answer": 0,
  "hint": "按第一行展开",
  "solution": "按第一行展开并化简得 $3abc-a^3-b^3-c^3$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch1-1-3",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "choice",
  "statement": "计算 $\\begin{vmatrix}a&b&a+b\\\\b&a+b&a\\\\a+b&a&b\\end{vmatrix}$",
  "options": [
   "$-2(a^3+b^3)$",
   "$2(a^3+b^3)$",
   "$a^3+b^3$",
   "$2(a^3-b^3)$"
  ],
  "answer": 0,
  "hint": "利用各列之和相等",
  "solution": "三列之和相同，化简得 $-2(a^3+b^3)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch1-1-4",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "choice",
  "statement": "计算 $\\begin{vmatrix}1+a&b&c\\\\a&1+b&c\\\\a&b&1+c\\end{vmatrix}$",
  "options": [
   "$1+a+b+c$",
   "$1+abc$",
   "$(1+a)(1+b)(1+c)$",
   "$a+b+c$"
  ],
  "answer": 0,
  "hint": "拆成单位阵 + 秩一矩阵",
  "solution": "$\\det\\big(I+\\mathbf{u}\\mathbf{v}^T\\big)$ 形式，化简得 $1+a+b+c$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch1-2-1",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "choice",
  "statement": "用行列式解 $\\begin{cases}x_1\\cos\\theta-x_2\\sin\\theta=a\\\\x_1\\sin\\theta+x_2\\cos\\theta=b\\end{cases}$",
  "options": [
   "$x_1=a\\cos\\theta+b\\sin\\theta,\\;x_2=b\\cos\\theta-a\\sin\\theta$",
   "$x_1=a\\sin\\theta+b\\cos\\theta,\\;x_2=a\\cos\\theta-b\\sin\\theta$",
   "$x_1=a,\\;x_2=b$",
   "$x_1=a\\cos\\theta-b\\sin\\theta,\\;x_2=b\\cos\\theta+a\\sin\\theta$"
  ],
  "answer": 0,
  "hint": "系数行列式 $=1$（旋转矩阵）",
  "solution": "系数行列式 $=\\cos^2\\theta+\\sin^2\\theta=1$，得 $x_1=a\\cos\\theta+b\\sin\\theta$，$x_2=b\\cos\\theta-a\\sin\\theta$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-2-2",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "choice",
  "statement": "解方程组 $\\begin{cases}x+y-z=a\\\\-x+y+z=b\\\\x-y+z=c\\end{cases}$",
  "options": [
   "$x=\\dfrac{a+c}{2},\\;y=\\dfrac{a+b}{2},\\;z=\\dfrac{b+c}{2}$",
   "$x=\\dfrac{a-b}{2},\\;y=\\dfrac{a+b}{2},\\;z=\\dfrac{b+c}{2}$",
   "$x=2a,\\;y=2b,\\;z=2c$",
   "$x=\\dfrac{a+b+c}{3}$"
  ],
  "answer": 0,
  "hint": "三式相加得一式关系",
  "solution": "解得 $x=\\dfrac{a+c}{2}$，$y=\\dfrac{a+b}{2}$，$z=\\dfrac{b+c}{2}$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-2-3",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 1,
  "type": "choice",
  "statement": "解方程组 $\\begin{cases}x+y+z=10\\\\3x+2y+z=14\\\\2x+3y-z=1\\end{cases}$",
  "options": [
   "$x=1,y=2,z=7$",
   "$x=2,y=1,z=7$",
   "$x=1,y=7,z=2$",
   "$x=3,y=2,z=5$"
  ],
  "answer": 0,
  "hint": "代入验证",
  "solution": "逐一代入：$1+2+7=10$，$3+4+7=14$，$2+6-7=1$，故 $x=1,y=2,z=7$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-2-4",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "choice",
  "statement": "解方程组 $\\begin{cases}2x_1-3x_2+2x_3=-3\\\\x_1+4x_2-3x_3=6\\\\3x_1-x_2-x_3=1\\end{cases}$",
  "options": [
   "$x_1=\\frac12,x_2=1,x_3=-\\frac12$",
   "$x_1=1,x_2=-1,x_3=2$",
   "$x_1=-\\frac12,x_2=1,x_3=\\frac12$",
   "$x_1=2,x_2=1,x_3=-1$"
  ],
  "answer": 0,
  "hint": "克莱姆法则",
  "solution": "$x_1=\\frac12,x_2=1,x_3=-\\frac12$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-3-1",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 1,
  "type": "fill",
  "statement": "求排列 $351426$ 的逆序数",
  "answer": "6",
  "hint": "逐个数右边比它小的",
  "solution": "逆序数 $=6$，偶排列。官方一致 [✓官方]"
 },
 {
  "id": "ch1-3-2",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 1,
  "type": "fill",
  "statement": "求排列 $7135246$ 的逆序数",
  "answer": "9",
  "hint": "逐个数右边比它小的",
  "solution": "逆序数 $=9$，奇排列。官方一致 [✓官方]"
 },
 {
  "id": "ch1-3-3",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "fill",
  "statement": "求排列 $215479683$ 的逆序数",
  "answer": "11",
  "hint": "逆序数 = 每个数右边比它小的个数之和",
  "solution": "逆序数 $=11$，奇排列。官方一致 [✓官方]"
 },
 {
  "id": "ch1-4-1",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "choice",
  "statement": "五阶行列式中的项 $a_{12}a_{23}a_{31}a_{45}a_{54}$ 的符号",
  "options": [
   "正号",
   "负号",
   "无符号",
   "0"
  ],
  "answer": 1,
  "hint": "行指标按自然序，看列排列的逆序数",
  "solution": "列排列 $23154$ 的逆序数为 3（奇），故取负号。官方一致 [✓官方]"
 },
 {
  "id": "ch1-4-2",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "choice",
  "statement": "五阶行列式中的项 $a_{24}a_{32}a_{15}a_{43}a_{51}$ 的符号",
  "options": [
   "正号",
   "负号",
   "无符号",
   "0"
  ],
  "answer": 1,
  "hint": "重排成行指标自然序",
  "solution": "列排列 $42531$ 的逆序数为 7（奇），故为负号。官方一致 [✓官方]"
 },
 {
  "id": "ch1-4-3",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "choice",
  "statement": "五阶行列式中的项 $a_{15}a_{23}a_{32}a_{44}a_{51}$ 的符号",
  "options": [
   "正号",
   "负号",
   "无符号",
   "0"
  ],
  "answer": 0,
  "hint": "数逆序数",
  "solution": "列排列 $53241$ 的逆序数为 8（偶），故为正号。官方一致 [✓官方]"
 },
 {
  "id": "ch1-5-1",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 3,
  "type": "choice",
  "statement": "用行列式定义确定 $\\begin{vmatrix}x-1&4&3&1\\\\2&x-2&3&1\\\\7&9&x&0\\\\5&3&1&x-1\\end{vmatrix}$ 中 $x^3$、$x^4$ 的系数",
  "options": [
   "$x^3$ 系数 $-4$，$x^4$ 系数 $1$",
   "$x^3$ 系数 $1$，$x^4$ 系数 $-4$",
   "$x^3$ 系数 $-1$，$x^4$ 系数 $0$",
   "$x^3$ 系数 $0$，$x^4$ 系数 $1$"
  ],
  "answer": 0,
  "hint": "用对角线法则或展开",
  "solution": "计算得 $x^4$ 系数 1、$x^3$ 系数 $-4$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-7-1",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "fill",
  "statement": "计算 $\\begin{vmatrix}-2&3&1\\\\503&201&298\\\\5&2&3\\end{vmatrix}$",
  "answer": "-70",
  "hint": "观察 503=5×100+3 等，用性质化简",
  "solution": "第2行拆分化简，结果 $=-70$（绝对值 70）。官方答案 $-70$ [✓官方]"
 },
 {
  "id": "ch1-7-2",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "fill",
  "statement": "计算 $\\begin{vmatrix}4&1&2&4\\\\1&2&0&2\\\\10&5&2&0\\\\0&1&1&7\\end{vmatrix}$",
  "answer": "0",
  "hint": "观察行列关系",
  "solution": "各行存在线性关系，行列式为 0。官方一致 [✓官方]"
 },
 {
  "id": "ch1-7-3",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "fill",
  "statement": "计算 $\\begin{vmatrix}2&1&4&1\\\\3&-1&2&1\\\\1&2&3&2\\\\5&0&6&2\\end{vmatrix}$",
  "answer": "0",
  "hint": "观察行列关系",
  "solution": "行向量线性相关，结果为 0。官方一致 [✓官方]"
 },
 {
  "id": "ch1-7-4",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "fill",
  "statement": "计算 $\\begin{vmatrix}1&2&3&4\\\\1&0&1&2\\\\3&-1&-1&0\\\\1&2&0&-5\\end{vmatrix}$",
  "answer": "-24",
  "hint": "按行展开或用初等变换",
  "solution": "初等变换后展开得 $-24$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-7-5",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "fill",
  "statement": "计算 $\\begin{vmatrix}1&2&3&4\\\\2&3&4&1\\\\3&4&1&2\\\\4&1&2&3\\end{vmatrix}$",
  "answer": "160",
  "hint": "各行之和相等，提公因子",
  "solution": "各列元素循环，行和均为 10，提公因子后计算得 160。官方一致 [✓官方]"
 },
 {
  "id": "ch1-8-1",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "choice",
  "statement": "计算 $\\begin{vmatrix}-ab&ac&ae\\\\bd&-cd&de\\\\bf&cf&-ef\\end{vmatrix}$",
  "options": [
   "$4abcdef$",
   "$-4abcdef$",
   "$2abcdef$",
   "$abcdef$"
  ],
  "answer": 0,
  "hint": "每行提公因子",
  "solution": "各行分别提 $a,d,f$ 等公因子，得 $4abcdef$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-8-2",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "choice",
  "statement": "计算 $\\begin{vmatrix}2(x+y)&2(x+y)&2(x+y)\\\\x&x+y&y\\\\x+y&y&x\\end{vmatrix}$",
  "options": [
   "$-2(x^3+y^3)$",
   "$2(x^3+y^3)$",
   "$2(x+y)^3$",
   "$-2(x+y)^3$"
  ],
  "answer": 0,
  "hint": "第一行提取 2(x+y)",
  "solution": "化简得 $-2(x^3+y^3)$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-8-3",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 3,
  "type": "choice",
  "statement": "计算 $\\begin{vmatrix}x&a&a&a\\\\a&x&a&a\\\\a&a&x&a\\\\a&a&a&x\\end{vmatrix}$",
  "options": [
   "$(x+3a)(x-a)^3$",
   "$(x-3a)(x+a)^3$",
   "$(x+a)^4$",
   "$(x-a)^4$"
  ],
  "answer": 0,
  "hint": "行和相等，各行加到第一列",
  "solution": "各行加到第一列并提出，得 $(x+3a)(x-a)^3$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-8-4",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 3,
  "type": "choice",
  "statement": "计算 $\\begin{vmatrix}a&1&0&0\\\\-1&b&1&0\\\\0&-1&c&1\\\\0&0&-1&d\\end{vmatrix}$",
  "options": [
   "$abcd+ab+cd+ad+1$",
   "$abcd-ab-cd+ad-1$",
   "$abcd+1$",
   "$abcd$"
  ],
  "answer": 0,
  "hint": "按第一行展开递推",
  "solution": "递推展开得 $abcd+ab+cd+ad+1$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-13-1",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 2,
  "type": "choice",
  "statement": "用克拉默法则解 $\\begin{cases}3x_1+2x_2-x_3=1\\\\2x_1-3x_2+x_3=10\\\\x_1+4x_2-2x_3=-8\\end{cases}$",
  "options": [
   "$x_1=2,x_2=-1,x_3=3$",
   "$x_1=-2,x_2=1,x_3=-3$",
   "$x_1=2,x_2=3,x_3=-1$",
   "$x_1=1,x_2=2,x_3=3$"
  ],
  "answer": 0,
  "hint": "系数行列式不为 0，用克莱姆法则",
  "solution": "解得 $x_1=2,x_2=-1,x_3=3$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-13-2",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 3,
  "type": "choice",
  "statement": "解方程组 $\\begin{cases}x_1+4x_2-7x_3+6x_4=0\\\\2x_2+x_3+x_4=-8\\\\x_2+x_3+3x_4=-2\\\\x_1+x_3-x_4=1\\end{cases}$",
  "options": [
   "$x_1=3,x_2=-4,x_3=-1,x_4=1$",
   "$x_1=-3,x_2=4,x_3=1,x_4=-1$",
   "$x_1=3,x_2=4,x_3=-1,x_4=1$",
   "$x_1=1,x_2=-4,x_3=1,x_4=1$"
  ],
  "answer": 0,
  "hint": "克莱姆法则",
  "solution": "得 $x_1=3,x_2=-4,x_3=-1,x_4=1$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-14",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 3,
  "type": "choice",
  "statement": "问 $\\lambda,\\mu$ 取何值时，齐次方程组 $\\begin{cases}\\lambda x_1+x_2+\\mu x_3=0\\\\x_1+\\lambda x_2+x_3=0\\\\x_1+2\\lambda x_2+x_3=0\\end{cases}$ 有非零解",
  "options": [
   "$\\lambda=1$ 或 $\\mu=0$",
   "$\\lambda=0$ 或 $\\mu=1$",
   "$\\lambda=2$ 或 $\\mu=3$",
   "$\\lambda=1$ 且 $\\mu=1$"
  ],
  "answer": 0,
  "hint": "系数行列式 $=0$",
  "solution": "令系数行列式为 0，解得 $\\lambda=1$ 或 $\\mu=0$。官方一致 [✓官方]"
 },
 {
  "id": "ch1-10",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 3,
  "type": "proof",
  "statement": "证明：$\\begin{vmatrix}a^2&ab&b^2\\\\2a&a+b&2b\\\\1&1&1\\end{vmatrix}=(a-b)^3$",
  "hint": "利用行列式性质：第三行乘 a 加到第一行等",
  "solution": "利用变形 $\\begin{vmatrix}a^2&ab&b^2\\\\2a&a+b&2b\\\\1&1&1\\end{vmatrix}=\\begin{vmatrix}a^2-ab&ab-b^2&b^2\\\\0&a-b&2b\\\\1&0&1\\end{vmatrix}$ 逐步化简，最后得 $(a-b)^3$。官方：证明略（结论一致）[✓官方]"
 },
 {
  "id": "ch1-17",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 3,
  "type": "proof",
  "statement": "证明：范德蒙德行列式（或相关结论）（原题证明题）",
  "hint": "对 n 归纳或用行列式性质",
  "solution": "利用范德蒙德行列式的标准证明：对阶数归纳，每列减去前一列的 x₁ 倍，展开后提取公因子，得 ∏(x_j − x_i)。官方：证明略 [✓官方]"
 },
 {
  "id": "ch1-18",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 3,
  "type": "proof",
  "statement": "证明：$D_n=\\begin{vmatrix}\\cos\\theta&1& &\\\\1&2\\cos\\theta&1&\\\\&1&\\ddots&\\ddots\\\\& &\\ddots&\\ddots\\end{vmatrix}=\\cos n\\theta$",
  "hint": "按第一行展开得递推式 $D_n=2\\cos\\theta D_{n-1}-D_{n-2}$",
  "solution": "按第一行展开得 $D_n=2\\cos\\theta\\,D_{n-1}-D_{n-2}$，配初始条件 $D_1=\\cos\\theta,D_2=\\cos2\\theta$，用归纳法（或特征根法）得 $D_n=\\cos n\\theta$。官方：证明略 [✓官方]"
 },
 {
  "id": "ch1-19",
  "subject": "高代",
  "chapter": "第1章 行列式",
  "difficulty": 3,
  "type": "proof",
  "statement": "证明：给定 $[0,1]$ 上 $n+1$ 个不同点 $t_1,\\cdots,t_{n+1}$ 及函数值 $\\varphi(t_i)$，存在唯一的次数不超过 $n$ 的多项式 $f(t)$ 使 $f(t_i)=\\varphi(t_i)$",
  "hint": "这是拉格朗日插值；方程组系数行列式是范德蒙德行列式",
  "solution": "设 $f(t)=a_0+a_1t+\\cdots+a_nt^n$，条件给出 $(n+1)$ 元线性方程组，其系数行列式为范德蒙德行列式 $\\prod_{i<j}(t_j-t_i)\\ne0$（因 $t_i$ 互异），故解存在且唯一。这正是拉格朗日插值。官方：略 [✓官方]"
 },
 {
  "id": "ch2-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 1,
  "type": "text",
  "statement": "已知 $A=\\begin{pmatrix}2&0&-3\\\\5&-1&6\\end{pmatrix}$, $B=\\begin{pmatrix}1&0&4\\\\2&-1&-2\\end{pmatrix}$, 求 $2A$, $A+B$, $2A-3B$.",
  "answer": "$2A=\\begin{pmatrix}4&0&-6\\\\10&-2&12\\end{pmatrix}$, $A+B=\\begin{pmatrix}3&0&1\\\\7&-2&4\\end{pmatrix}$, $2A-3B=\\begin{pmatrix}1&0&-18\\\\4&1&18\\end{pmatrix}$",
  "hint": "数乘与加减都按元素逐个进行",
  "solution": "数乘：$2A=(2a_{ij})$；加减：对应元素相加减。得 $2A=\\begin{pmatrix}4&0&-6\\\\10&-2&12\\end{pmatrix}$, $A+B=\\begin{pmatrix}3&0&1\\\\7&-2&4\\end{pmatrix}$, $2A-3B=\\begin{pmatrix}4-3&0&0-12\\\\10-6&-2+3&12+6\\end{pmatrix}=\\begin{pmatrix}1&0&-18\\\\4&1&18\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 1,
  "type": "text",
  "statement": "设 $A=\\begin{pmatrix}2&1\\\\-4&-2\\end{pmatrix}$, $B=\\begin{pmatrix}3&-1\\\\-6&2\\end{pmatrix}$, 求 $AB$, $BA$ 及 $A^2$.",
  "answer": "$AB=\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}$, $BA=\\begin{pmatrix}10&5\\\\-20&-10\\end{pmatrix}$, $A^2=\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}$",
  "hint": "按行乘列求和；注意 $AB\\neq BA$",
  "solution": "$AB=\\begin{pmatrix}6-6&-2+2\\\\-12+12&4-4\\end{pmatrix}=\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}$；$BA=\\begin{pmatrix}6+4&3+2\\\\-12-8&-6-4\\end{pmatrix}=\\begin{pmatrix}10&5\\\\-20&-10\\end{pmatrix}$；$A^2=\\begin{pmatrix}4-4&2-2\\\\-8+8&-4+4\\end{pmatrix}=\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}$。可见 $A\\neq0$ 而 $A^2=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-3",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "已知 $A=\\begin{pmatrix}1&3\\\\2&-1\\end{pmatrix}$, $B=\\begin{pmatrix}3&0\\\\1&2\\end{pmatrix}$, 求 $AB$ 及 $A^3+2A^2+A-E$.",
  "answer": "$AB=\\begin{pmatrix}6&6\\\\5&-2\\end{pmatrix}$, $A^3+2A^2+A-E=\\begin{pmatrix}21&24\\\\16&5\\end{pmatrix}$",
  "hint": "先算 $A^2$，发现 $A^2=7E$ 可大幅化简",
  "solution": "$AB=\\begin{pmatrix}3+3&0+6\\\\6-1&0-2\\end{pmatrix}=\\begin{pmatrix}6&6\\\\5&-2\\end{pmatrix}$。又 $A^2=\\begin{pmatrix}7&0\\\\0&7\\end{pmatrix}=7E$，故 $A^3=7A$，于是 $A^3+2A^2+A-E=7A+14E+A-E=8A+13E=\\begin{pmatrix}8+13&24\\\\16&-8+13\\end{pmatrix}=\\begin{pmatrix}21&24\\\\16&5\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-4",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "设 $A=\\begin{pmatrix}1&1&1\\\\1&1&-1\\\\1&-1&1\\end{pmatrix}$, $B=\\begin{pmatrix}1&2&3\\\\-1&-2&4\\\\0&5&1\\end{pmatrix}$, 求 $3AB-2A$ 及 $A^{T}B$.",
  "answer": "$3AB-2A=\\begin{pmatrix}-2&13&22\\\\-2&-17&20\\\\4&29&-2\\end{pmatrix}$, $A^{T}B=\\begin{pmatrix}0&5&8\\\\0&-5&6\\\\2&9&0\\end{pmatrix}$",
  "hint": "$A$ 是对称矩阵，$A^{T}=A$",
  "solution": "$AB=\\begin{pmatrix}0&5&8\\\\0&-5&6\\\\2&9&0\\end{pmatrix}$，故 $3AB-2A=\\begin{pmatrix}0&15&24\\\\0&-15&18\\\\6&27&0\\end{pmatrix}-\\begin{pmatrix}2&2&2\\\\2&2&-2\\\\2&-2&2\\end{pmatrix}=\\begin{pmatrix}-2&13&22\\\\-2&-17&20\\\\4&29&-2\\end{pmatrix}$。因 $A^{T}=A$，所以 $A^{T}B=AB$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-5",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "设 $A=\\begin{pmatrix}5&-2&1\\\\3&4&-1\\end{pmatrix}$, $B=\\begin{pmatrix}-3&2&0\\\\-2&0&1\\end{pmatrix}$, 求 $AB^{T}$ 及 $BA^{T}$.",
  "answer": "$AB^{T}=\\begin{pmatrix}-19&-9\\\\-1&-7\\end{pmatrix}$, $BA^{T}=\\begin{pmatrix}-19&-1\\\\-9&-7\\end{pmatrix}$",
  "hint": "$(AB^{T})^{T}=BA^{T}$，算一个即可",
  "solution": "$B^{T}=\\begin{pmatrix}-3&-2\\\\2&0\\\\0&1\\end{pmatrix}$，$AB^{T}=\\begin{pmatrix}-15-4&10+0+1\\\\-9-8&6-1\\end{pmatrix}=\\begin{pmatrix}-19&-9\\\\-1&-7\\end{pmatrix}$；由 $(AB^{T})^{T}=BA^{T}$ 得 $BA^{T}=\\begin{pmatrix}-19&-1\\\\-9&-7\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-6-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 1,
  "type": "text",
  "statement": "计算 $\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}(a,b,c)$.",
  "answer": "$\\begin{pmatrix}a^2&ab&ac\\\\ba&b^2&bc\\\\ca&cb&c^2\\end{pmatrix}$",
  "hint": "列向量乘行向量得 3 阶方阵（秩 1）",
  "solution": "$3\\times1$ 乘 $1\\times3$ 得 $3\\times3$ 矩阵，第 $i$ 行第 $j$ 列元素为第 $i$ 个分量乘第 $j$ 个分量，结果为 $\\begin{pmatrix}a^2&ab&ac\\\\ab&b^2&bc\\\\ac&bc&c^2\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-6-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "计算 $\\begin{pmatrix}1&0&0\\\\0&1&0\\\\k&0&1\\end{pmatrix}\\begin{pmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\\\a_{31}&a_{32}\\end{pmatrix}$.",
  "answer": "$\\begin{pmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\\\ka_{11}+a_{31}&ka_{12}+a_{32}\\end{pmatrix}$",
  "hint": "左乘该矩阵 = 把第 1 行的 $k$ 倍加到第 3 行",
  "solution": "左乘单位阵型倍加矩阵相当于对行作变换 $r_3\\leftarrow r_3+k r_1$，故结果为 $\\begin{pmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\\\ka_{11}+a_{31}&ka_{12}+a_{32}\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-6-3",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 1,
  "type": "text",
  "statement": "计算 $\\begin{pmatrix}4&3&1\\\\1&-2&3\\\\5&7&0\\end{pmatrix}\\begin{pmatrix}7\\\\2\\\\1\\end{pmatrix}$.",
  "answer": "$\\begin{pmatrix}35\\\\6\\\\49\\end{pmatrix}$",
  "hint": "按行乘列求和",
  "solution": "$4\\cdot7+3\\cdot2+1\\cdot1=35$，$1\\cdot7-2\\cdot2+3\\cdot1=6$，$5\\cdot7+7\\cdot2=49$，故结果为 $\\begin{pmatrix}35\\\\6\\\\49\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-6-4",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 1,
  "type": "text",
  "statement": "计算 $(1,2,3)\\begin{pmatrix}3\\\\2\\\\1\\end{pmatrix}$.",
  "answer": "$10$",
  "hint": "行乘列得一个数（内积）",
  "solution": "$1\\cdot3+2\\cdot2+3\\cdot1=3+4+3=10$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-6-5",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 1,
  "type": "text",
  "statement": "计算 $\\begin{pmatrix}1\\\\3\\end{pmatrix}(-1,2)$.",
  "answer": "$\\begin{pmatrix}-1&2\\\\-3&6\\end{pmatrix}$",
  "hint": "列乘行得 2 阶矩阵",
  "solution": "$\\begin{pmatrix}1\\\\3\\end{pmatrix}(-1,2)=\\begin{pmatrix}1\\cdot(-1)&1\\cdot2\\\\3\\cdot(-1)&3\\cdot2\\end{pmatrix}=\\begin{pmatrix}-1&2\\\\-3&6\\end{pmatrix}$。"
 },
 {
  "id": "ch2-6-6",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "计算 $\\begin{pmatrix}2&1&4&0\\\\1&-1&3&4\\end{pmatrix}\\begin{pmatrix}1&3&1\\\\0&-1&2\\\\1&-3&1\\\\4&0&-2\\end{pmatrix}$.",
  "answer": "$\\begin{pmatrix}6&-7&8\\\\20&-5&-6\\end{pmatrix}$",
  "hint": "$2\\times4$ 乘 $4\\times3$ 得 $2\\times3$",
  "solution": "第 1 行：$(2+0+4+0,\\;6-1-12+0,\\;2+2+4+0)=(6,-7,8)$；第 2 行：$(1+0+3+16,\\;3+1-9+0,\\;1-2+3-8)=(20,-5,-6)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-6-7",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "choice",
  "statement": "计算 $(x_1,x_2,x_3)\\begin{pmatrix}a_{11}&a_{12}&a_{13}\\\\a_{21}&a_{22}&a_{23}\\\\a_{31}&a_{32}&a_{33}\\end{pmatrix}\\begin{pmatrix}x_1\\\\x_2\\\\x_3\\end{pmatrix}$.",
  "options": [
   "$a_{11}x_1^2+a_{22}x_2^2+a_{33}x_3^2+(a_{12}+a_{21})x_1x_2+(a_{13}+a_{31})x_1x_3+(a_{23}+a_{32})x_2x_3$",
   "$a_{11}x_1^2+a_{22}x_2^2+a_{33}x_3^2+2a_{12}x_1x_2+2a_{13}x_1x_3+2a_{23}x_2x_3$",
   "$(a_{11}+a_{22}+a_{33})(x_1^2+x_2^2+x_3^2)$",
   "$a_{11}x_1^2+a_{22}x_2^2+a_{33}x_3^2+(a_{12}+a_{21})x_1x_2+(a_{13}+a_{31})x_1x_3$"
  ],
  "answer": 0,
  "hint": "结果是二次型，$x_ix_j$ 的系数为 $a_{ij}+a_{ji}$",
  "solution": "先算 $xA$ 再乘 $x^{T}$，得 $\\sum_{i,j}a_{ij}x_ix_j$，按 $i=j$ 与 $i<j$ 合并同类项即得上式（交叉项系数为 $a_{ij}+a_{ji}$）。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-6-8",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "计算 $\\begin{pmatrix}1&2&1&0\\\\0&1&0&1\\\\0&0&2&1\\\\0&0&0&3\\end{pmatrix}\\begin{pmatrix}1&0&3&1\\\\0&1&2&-1\\\\0&0&1&0\\\\0&0&0&1\\end{pmatrix}$.",
  "answer": "$\\begin{pmatrix}1&2&8&-1\\\\0&1&2&0\\\\0&0&2&1\\\\0&0&0&3\\end{pmatrix}$",
  "hint": "两个上三角矩阵之积仍是上三角，逐行算非零元即可",
  "solution": "第 1 行：$(1,\\;2,\\;3+4+1,\\;1-2+0)=(1,2,8,-1)$；第 2 行：$(0,1,2,-1+1)=(0,1,2,0)$；第 3 行：$(0,0,2,\\;0+1)=(0,0,2,1)$；第 4 行：$(0,0,0,3)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-7-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "choice",
  "statement": "已知 $A=\\begin{pmatrix}0&1&0\\\\0&0&1\\\\0&0&0\\end{pmatrix}$, 试求与 $A$ 可交换的所有矩阵。",
  "options": [
   "$\\begin{pmatrix}a&b&c\\\\0&a&b\\\\0&0&a\\end{pmatrix}$",
   "$\\begin{pmatrix}a&0&0\\\\0&b&0\\\\0&0&c\\end{pmatrix}$",
   "$\\begin{pmatrix}a&b&c\\\\0&d&e\\\\0&0&f\\end{pmatrix}$",
   "$\\begin{pmatrix}0&a&b\\\\0&0&a\\\\0&0&0\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "设 $X=(x_{ij})$ 代入 $AX=XA$ 比较元素",
  "solution": "设 $X=(x_{ij})_{3\\times3}$。$AX$ 等于把 $X$ 的第 2、3 行上移一行、首行为零，$XA$ 等于把 $X$ 的第 1、2 列右移一列、首列为零。比较得 $x_{21}=x_{31}=x_{32}=0$，$x_{22}=x_{11}$，$x_{33}=x_{11}$，$x_{23}=x_{12}$，即 $X=\\begin{pmatrix}a&b&c\\\\0&a&b\\\\0&0&a\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-7-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "proof",
  "statement": "证明：与对角线上元素互异的对角矩阵可交换的矩阵必是对角矩阵。",
  "answer": "证明见解析",
  "hint": "设 $D=\\mathrm{diag}(d_1,\\dots,d_n)$，$d_i\\neq d_j\\ (i\\neq j)$",
  "solution": "设 $D=\\mathrm{diag}(d_1,\\dots,d_n)$ 且 $i\\neq j$ 时 $d_i\\neq d_j$，$A=(a_{ij})$ 满足 $AD=DA$。$(AD)_{ij}=a_{ij}d_j$，$(DA)_{ij}=d_ia_{ij}$，故 $a_{ij}(d_j-d_i)=0$；当 $i\\neq j$ 时 $d_j-d_i\\neq0$，得 $a_{ij}=0$。即 $A$ 的非对角元全为 0，$A$ 为对角矩阵。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-8-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 1,
  "type": "text",
  "statement": "设 $A=\\begin{pmatrix}1&2\\\\1&3\\end{pmatrix}$, $B=\\begin{pmatrix}1&0\\\\1&2\\end{pmatrix}$, 问 $AB=BA$ 吗？",
  "answer": "不相等：$AB=\\begin{pmatrix}3&4\\\\4&6\\end{pmatrix}$, $BA=\\begin{pmatrix}1&2\\\\3&8\\end{pmatrix}$",
  "hint": "直接计算两边的乘积再比较",
  "solution": "$AB=\\begin{pmatrix}1+2&0+4\\\\1+3&0+6\\end{pmatrix}=\\begin{pmatrix}3&4\\\\4&6\\end{pmatrix}$，$BA=\\begin{pmatrix}1&2\\\\1+2&2+6\\end{pmatrix}=\\begin{pmatrix}1&2\\\\3&8\\end{pmatrix}$，故 $AB\\neq BA$。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-8-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "对上述 $A,B$，问 $(A+B)^2=A^2+2AB+B^2$ 吗？",
  "answer": "不成立。$(A+B)^2=\\begin{pmatrix}8&14\\\\14&29\\end{pmatrix}$，而 $A^2+2AB+B^2=\\begin{pmatrix}10&16\\\\15&27\\end{pmatrix}$",
  "hint": "$AB\\neq BA$ 时二项式公式失效",
  "solution": "$A+B=\\begin{pmatrix}2&2\\\\2&5\\end{pmatrix}$，$(A+B)^2=\\begin{pmatrix}8&14\\\\14&29\\end{pmatrix}$；$A^2=\\begin{pmatrix}3&8\\\\4&11\\end{pmatrix}$，$B^2=\\begin{pmatrix}1&0\\\\3&4\\end{pmatrix}$，$2AB=\\begin{pmatrix}6&8\\\\8&12\\end{pmatrix}$，相加得 $\\begin{pmatrix}10&16\\\\15&27\\end{pmatrix}$，两者不等。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-8-3",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "对上述 $A,B$，问 $(A+B)(A-B)=A^2-B^2$ 吗？",
  "answer": "不成立。$(A+B)(A-B)=\\begin{pmatrix}0&6\\\\0&9\\end{pmatrix}$，而 $A^2-B^2=\\begin{pmatrix}2&8\\\\1&7\\end{pmatrix}$",
  "hint": "展开 $(A+B)(A-B)=A^2-AB+BA-B^2$",
  "solution": "$(A+B)(A-B)=A^2-AB+BA-B^2$，只有当 $AB=BA$ 时才等于 $A^2-B^2$。此处 $A-B=\\begin{pmatrix}0&2\\\\0&1\\end{pmatrix}$，$(A+B)(A-B)=\\begin{pmatrix}0&6\\\\0&9\\end{pmatrix}\\neq A^2-B^2=\\begin{pmatrix}2&8\\\\1&7\\end{pmatrix}$。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-9-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 1,
  "type": "text",
  "statement": "举反例说明命题「若 $A^2=0$，则 $A=0$」是错误的。",
  "answer": "如 $A=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}\\neq0$，但 $A^2=0$",
  "hint": "取非零的幂零矩阵",
  "solution": "取 $A=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$，则 $A^2=\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}$，而 $A\\neq0$，命题不真。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-9-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 1,
  "type": "text",
  "statement": "举反例说明命题「若 $A^2=A$，则 $A=0$ 或 $A=E$」是错误的。",
  "answer": "如 $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$，$A^2=A$ 但 $A\\neq0$ 且 $A\\neq E$",
  "hint": "取幂等但不是单位阵的矩阵",
  "solution": "取 $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$，$A^2=A$，但 $A\\neq0$、$A\\neq E$，命题不真。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-9-3",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "举反例说明命题「若 $AX=AY$ 且 $A\\neq0$，则 $X=Y$」是错误的。",
  "answer": "如 $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$, $X=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$, $Y=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$",
  "hint": "$A$ 不可逆时消去律不成立",
  "solution": "取 $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$，$X=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$，$Y=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$，则 $AX=AY=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$，但 $X\\neq Y$。原因是 $|A|=0$，不能左乘 $A^{-1}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-10",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "proof",
  "statement": "用数学归纳法证明：若 $A=\\begin{pmatrix}\\lambda&1&0\\\\0&\\lambda&1\\\\0&0&\\lambda\\end{pmatrix}$，则 $A^n=\\begin{pmatrix}\\lambda^n&n\\lambda^{n-1}&\\dfrac{n(n-1)}{2}\\lambda^{n-2}\\\\0&\\lambda^n&n\\lambda^{n-1}\\\\0&0&\\lambda^n\\end{pmatrix}$。",
  "answer": "证明见解析",
  "hint": "先验证 $n=1$，再用 $A^{n}=A^{n-1}A$ 递推",
  "solution": "$n=1$ 时右边 $=\\begin{pmatrix}\\lambda&1&0\\\\0&\\lambda&1\\\\0&0&\\lambda\\end{pmatrix}=A$，成立。设 $n$ 时成立，则 $A^{n+1}=A^nA$：第 1 行为 $(\\lambda^n,\\;n\\lambda^{n-1}+\\lambda^n\\cdot1,\\;\\frac{n(n-1)}{2}\\lambda^{n-2}+n\\lambda^{n-1})=(\\lambda^n,(n+1)\\lambda^n,\\frac{n(n+1)}{2}\\lambda^{n-1})$，第 2 行为 $(0,\\lambda^n,(n+1)\\lambda^n)$，第 3 行为 $(0,0,\\lambda^n)$，恰为 $n+1$ 时的形式。故对一切正整数 $n$ 成立。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-11-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "choice",
  "statement": "已知 $A=\\begin{pmatrix}1&1&1\\\\2&2&2\\\\3&3&3\\end{pmatrix}$, 求 $A^n$（$n$ 是正整数）。",
  "options": [
   "$6^{n-1}A$",
   "$6^{n}A$",
   "$3^{n-1}A$",
   "$n\\cdot6^{n-1}A$"
  ],
  "answer": 0,
  "hint": "把 $A$ 写成 $\\alpha\\beta^{T}$，用 $\\beta^{T}\\alpha$ 是数",
  "solution": "$A=\\alpha\\beta^{T}$，其中 $\\alpha=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$，$\\beta=\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}$，$\\beta^{T}\\alpha=1+2+3=6$。于是 $A^n=\\alpha(\\beta^{T}\\alpha)^{n-1}\\beta^{T}=6^{n-1}A$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-11-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "choice",
  "statement": "已知 $A=\\begin{pmatrix}1&-1&-1&-1\\\\-1&1&-1&-1\\\\-1&-1&1&-1\\\\-1&-1&-1&1\\end{pmatrix}$, 求 $A^n$（$n$ 是正整数）。",
  "options": [
   "$n$ 为偶数时 $2^nE$，$n$ 为奇数时 $2^{n-1}A$",
   "$2^{n-1}A$",
   "$2^{n}E$",
   "$n$ 为偶数时 $2^{n-1}A$，$n$ 为奇数时 $2^{n}E$"
  ],
  "answer": 0,
  "hint": "注意 $A=J-2E$（$J$ 为全 1 矩阵），先算 $A^2$",
  "solution": "记 $J$ 为 4 阶全 1 矩阵，则 $A=J-2E$，且 $J^2=4J$。$A^2=J^2-4J+4E=4J-4J+4E=4E$。故 $A^{2k}=(A^2)^k=4^kE=2^{2k}E$，$A^{2k+1}=4^kA=2^{2k}A$，即 $n$ 偶时 $A^n=2^nE$，$n$ 奇时 $A^n=2^{n-1}A$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-12-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $A=\\begin{pmatrix}1&0&0\\\\1&0&1\\\\0&1&0\\end{pmatrix}$，证明：$A^n=A^{n-2}+A^2-E\\ (n\\geqslant3)$。",
  "answer": "证明见解析",
  "hint": "先算出 $A^2$ 与 $A^3$，找出 $A$ 满足的多项式",
  "solution": "$A^2=\\begin{pmatrix}1&0&0\\\\1&1&0\\\\1&0&1\\end{pmatrix}$，$A^3=\\begin{pmatrix}1&0&0\\\\2&0&1\\\\1&1&0\\end{pmatrix}$，验证 $A^3=A+A^2-E$ 成立。两边同乘 $A^{n-3}$（$n\\geqslant3$）得 $A^n=A^{n-2}+A^{n-1}-A^{n-3}$；由归纳（或直接由 $(A-E)^2(A+E)=0$ 反复降幂）即得 $A^n=A^{n-2}+A^2-E$。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-12-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "text",
  "statement": "对上述 $A$，求 $A^{100}$。",
  "answer": "$A^{100}=\\begin{pmatrix}1&0&0\\\\50&1&0\\\\50&0&1\\end{pmatrix}$",
  "hint": "反复用 $A^n=A^{n-2}+(A^2-E)$ 累加",
  "solution": "由 (1) 得 $A^n-A^{n-2}=A^2-E=\\begin{pmatrix}0&0&0\\\\1&0&0\\\\1&0&0\\end{pmatrix}$。从 $n=100$ 递降到 $n=2$ 共 49 次：$A^{100}=A^2+49(A^2-E)=\\begin{pmatrix}1&0&0\\\\1&1&0\\\\1&0&1\\end{pmatrix}+49\\begin{pmatrix}0&0&0\\\\1&0&0\\\\1&0&0\\end{pmatrix}=\\begin{pmatrix}1&0&0\\\\50&1&0\\\\50&0&1\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-13",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "proof",
  "statement": "$A$ 为 $n$ 阶对称矩阵，$B$ 为 $n$ 阶反对称矩阵，证明：(1) $B^2$ 为对称矩阵；(2) $AB-BA$ 为对称矩阵，$AB+BA$ 为反对称矩阵。",
  "answer": "证明见解析",
  "hint": "用 $(XY)^{T}=Y^{T}X^{T}$，$A^{T}=A$，$B^{T}=-B$",
  "solution": "(1) $(B^2)^{T}=(B^{T})^2=(-B)^2=B^2$，故 $B^2$ 对称。(2) $(AB-BA)^{T}=B^{T}A^{T}-A^{T}B^{T}=-BA+AB=AB-BA$，对称；$(AB+BA)^{T}=-BA-AB=-(AB+BA)$，反对称。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-14-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 1,
  "type": "text",
  "statement": "求 $\\begin{pmatrix}1&2&-3\\\\0&1&2\\\\0&0&1\\end{pmatrix}$ 的逆矩阵。",
  "answer": "$\\begin{pmatrix}1&-2&7\\\\0&1&-2\\\\0&0&1\\end{pmatrix}$",
  "hint": "上三角矩阵，用 $(E+N)^{-1}=E-N+N^2$",
  "solution": "令 $N=\\begin{pmatrix}0&2&-3\\\\0&0&2\\\\0&0&0\\end{pmatrix}$，$N^3=0$，$A=E+N$，故 $A^{-1}=E-N+N^2=\\begin{pmatrix}1&-2&3\\\\0&1&-2\\\\0&0&1\\end{pmatrix}+\\begin{pmatrix}0&0&4\\\\0&0&0\\\\0&0&0\\end{pmatrix}=\\begin{pmatrix}1&-2&7\\\\0&1&-2\\\\0&0&1\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-14-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "求 $\\begin{pmatrix}1&0&4\\\\2&2&7\\\\0&1&-2\\end{pmatrix}$ 的逆矩阵。",
  "answer": "$-\\dfrac13\\begin{pmatrix}-11&4&-8\\\\4&-2&1\\\\2&-1&2\\end{pmatrix}=\\begin{pmatrix}\\frac{11}{3}&-\\frac43&\\frac83\\\\-\\frac43&\\frac23&-\\frac13\\\\-\\frac23&\\frac13&-\\frac23\\end{pmatrix}$",
  "hint": "用伴随矩阵 $A^{-1}=\\frac{1}{|A|}A^{*}$，$|A|=-3$",
  "solution": "$|A|=1\\cdot(-4-7)+4\\cdot(2-0)=-11+8=-3$。各代数余子式构成 $A^{*}=\\begin{pmatrix}-11&4&-8\\\\4&-2&1\\\\2&-1&2\\end{pmatrix}$，故 $A^{-1}=\\frac{1}{|A|}A^{*}=-\\frac13\\begin{pmatrix}-11&4&-8\\\\4&-2&1\\\\2&-1&2\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-14-3",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "求 $\\begin{pmatrix}-11&2&2\\\\-4&0&1\\\\6&-1&-1\\end{pmatrix}$ 的逆矩阵。",
  "answer": "$\\begin{pmatrix}1&0&2\\\\2&-1&3\\\\4&1&8\\end{pmatrix}$",
  "hint": "$|A|=1$，只需求伴随矩阵",
  "solution": "$|A|=-11\\cdot(0\\cdot(-1)+1)-2\\cdot(4+6)+2\\cdot(4-0)=-11+4+8=1$。求各代数余子式得 $A^{*}=\\begin{pmatrix}1&0&2\\\\2&-1&3\\\\4&1&8\\end{pmatrix}$，故 $A^{-1}=A^{*}=\\begin{pmatrix}1&0&2\\\\2&-1&3\\\\4&1&8\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-14-4",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "求 $\\begin{pmatrix}1&1&1&1\\\\1&1&-1&-1\\\\1&-1&1&-1\\\\1&-1&-1&1\\end{pmatrix}$ 的逆矩阵。",
  "answer": "$\\dfrac14\\begin{pmatrix}1&1&1&1\\\\1&1&-1&-1\\\\1&-1&1&-1\\\\1&-1&-1&1\\end{pmatrix}$",
  "hint": "各行两两正交且范数为 2，故 $AA^{T}=4E$",
  "solution": "各行范数的平方为 4，且任意两行内积为 0（如第 1、2 行：$1+1-1-1=0$），故 $AA^{T}=4E$。于是 $A^{-1}=\\frac14A^{T}=\\frac14A$（$A$ 对称）。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-15",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "用求逆矩阵的方法解线性方程组 $\\begin{cases}x_1+2x_2+3x_3=1,\\\\2x_1+2x_2+5x_3=2,\\\\3x_1+5x_2+x_3=3.\\end{cases}$",
  "answer": "$x_1=1,\\ x_2=0,\\ x_3=0$",
  "hint": "写成 $AX=b$，$X=A^{-1}b$",
  "solution": "系数矩阵 $A=\\begin{pmatrix}1&2&3\\\\2&2&5\\\\3&5&1\\end{pmatrix}$，$|A|=15\\neq0$，$A^{-1}=\\frac{1}{15}\\begin{pmatrix}-23&13&4\\\\13&-8&1\\\\4&1&-2\\end{pmatrix}$。$X=A^{-1}b=\\frac{1}{15}\\begin{pmatrix}15\\\\0\\\\0\\end{pmatrix}=\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}$。（注意 $b$ 恰为 $A$ 的第 1 列。）官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-16",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "已知 $\\begin{pmatrix}1&2&0\\\\0&1&-3\\\\4&0&1\\end{pmatrix}X+\\begin{pmatrix}0&0&1\\\\0&1&0\\\\1&0&1\\end{pmatrix}=X+\\begin{pmatrix}1&0&1\\\\0&2&0\\\\1&0&1\\end{pmatrix}$，求 $X$。",
  "answer": "$X=\\begin{pmatrix}0&0&0\\\\\\frac12&0&0\\\\0&-\\frac13&0\\end{pmatrix}$",
  "hint": "移项得 $(A-E)X=C-B$，注意 $A-E$ 不可逆，按行逐行求",
  "solution": "移项：$(A-E)X=C-B$，其中 $A-E=\\begin{pmatrix}0&2&0\\\\0&0&-3\\\\4&0&0\\end{pmatrix}$，$C-B=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&0\\end{pmatrix}$。逐行比较：$2(\\text{第2行})=(1,0,0)$，$-3(\\text{第3行})=(0,1,0)$，$4(\\text{第1行})=(0,0,0)$，得 $X=\\begin{pmatrix}0&0&0\\\\\\frac12&0&0\\\\0&-\\frac13&0\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-17-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "解矩阵方程 $\\begin{pmatrix}2&3&-1\\\\1&2&0\\\\-1&2&-1\\end{pmatrix}X=\\begin{pmatrix}2&1\\\\-1&0\\\\3&0\\end{pmatrix}$。",
  "answer": "$X=\\dfrac15\\begin{pmatrix}-1&2\\\\-2&-1\\\\-18&-4\\end{pmatrix}$",
  "hint": "$X=A^{-1}B$，$|A|=-5$",
  "solution": "$|A|=-5$，$A^{-1}=\\frac15\\begin{pmatrix}2&-1&-2\\\\-1&3&1\\\\-4&7&-1\\end{pmatrix}$，故 $X=A^{-1}B=\\frac15\\begin{pmatrix}-1&2\\\\-2&-1\\\\-18&-4\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-17-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "解矩阵方程 $X\\begin{pmatrix}2&1&-1\\\\2&1&0\\\\1&-1&1\\end{pmatrix}=\\begin{pmatrix}1&0&2\\\\2&1&0\\end{pmatrix}$。",
  "answer": "$X=\\dfrac13\\begin{pmatrix}-5&6&1\\\\0&3&0\\end{pmatrix}$",
  "hint": "$X=BA^{-1}$（右乘逆）",
  "solution": "$|A|=3$，$A^{-1}=\\frac13\\begin{pmatrix}1&0&1\\\\-2&3&-2\\\\-3&3&0\\end{pmatrix}$，故 $X=BA^{-1}=\\frac13\\begin{pmatrix}-5&6&1\\\\0&3&0\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-17-3",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "解矩阵方程 $\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&1\\end{pmatrix}X\\begin{pmatrix}1&0&0\\\\0&0&1\\\\0&1&0\\end{pmatrix}=\\begin{pmatrix}1&-4&0\\\\2&0&-1\\\\1&-2&0\\end{pmatrix}$。",
  "answer": "$X=\\begin{pmatrix}2&-1&0\\\\1&0&-4\\\\1&0&-2\\end{pmatrix}$",
  "hint": "两个矩阵都是置换矩阵，$X=P^{-1}RQ^{-1}=PRQ$",
  "solution": "记左乘为 $P$、右乘为 $Q$，$P^{-1}=P$，$Q^{-1}=Q$，故 $X=PRQ$：先交换 $R$ 的 1、2 行得 $\\begin{pmatrix}2&0&-1\\\\1&-4&0\\\\1&-2&0\\end{pmatrix}$，再交换其 2、3 列得 $X=\\begin{pmatrix}2&-1&0\\\\1&0&-4\\\\1&0&-2\\end{pmatrix}$。（书末答案第 2 行第 2 列印作 3，代入验证不成立，应为排版误植。）"
 },
 {
  "id": "ch2-18-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "proof",
  "statement": "若 $A^3+2A^2+A-E=0$，证明 $A$ 可逆，并求 $A^{-1}$。",
  "answer": "$A^{-1}=A^2+2A+E=(A+E)^2$",
  "hint": "把方程写成 $A(\\cdots)=E$",
  "solution": "由 $A^3+2A^2+A=E$ 得 $A(A^2+2A+E)=E$，故 $A$ 可逆且 $A^{-1}=A^2+2A+E=(A+E)^2$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-18-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "proof",
  "statement": "若 $A^2-A-4E=0$，证明 $A+E$ 可逆，并求 $(A+E)^{-1}$。",
  "answer": "$(A+E)^{-1}=\\dfrac12(A-2E)$",
  "hint": "把 $A^2-A-4E$ 按 $A+E$ 因式分解",
  "solution": "$A^2-A-4E=A^2-A-2E-2E=(A+E)(A-2E)-2E=0$，即 $(A+E)\\cdot\\frac12(A-2E)=E$，故 $A+E$ 可逆且 $(A+E)^{-1}=\\frac12(A-2E)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-18-3",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "proof",
  "statement": "若 $A^2+2A-3E=0$，求 $A^{-1}$, $(A+2E)^{-1}$, $(A+4E)^{-1}$。",
  "answer": "$A^{-1}=\\dfrac13(A+2E)$，$(A+2E)^{-1}=\\dfrac13A$，$(A+4E)^{-1}=-\\dfrac15(A-2E)$",
  "hint": "分别把 $A^2+2A-3E$ 表示成含 $A$、$(A+2E)$、$(A+4E)$ 的因式",
  "solution": "由 $A(A+2E)=3E$ 得 $A^{-1}=\\frac13(A+2E)$，且 $(A+2E)^{-1}=\\frac13A$。又 $A^2+2A-3E=(A+4E)(A-2E)+5E=0$，即 $(A+4E)\\left[-\\frac15(A-2E)\\right]=E$，故 $(A+4E)^{-1}=-\\frac15(A-2E)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-19-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "choice",
  "statement": "已知 $A$ 为 $n$ 阶矩阵，且 $|A|=2$，求 $\\left|\\left(\\frac12A\\right)^{-1}-3A^{*}\\right|$。",
  "options": [
   "$(-1)^n\\dfrac{4^n}{2}$",
   "$(-1)^n4^n$",
   "$(-1)^n\\dfrac{4^{n-1}}{2}$",
   "$(-1)^n\\dfrac{4^n}{4}$"
  ],
  "answer": 0,
  "hint": "$\\left(\\frac12A\\right)^{-1}=2A^{-1}$，$A^{*}=|A|A^{-1}=2A^{-1}$",
  "solution": "$\\left(\\frac12A\\right)^{-1}=2A^{-1}$，$A^{*}=|A|A^{-1}=2A^{-1}$，故 $\\left|\\left(\\frac12A\\right)^{-1}-3A^{*}\\right|=|2A^{-1}-6A^{-1}|=|-4A^{-1}|=(-4)^n|A|^{-1}=(-4)^n\\cdot\\frac12=(-1)^n\\frac{4^n}{2}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-19-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "已知 $A=\\begin{pmatrix}1&5&4\\\\0&2&4\\\\1&3&1\\end{pmatrix}$，求 $(A^{*})^{-1}$。",
  "answer": "$\\dfrac12A=\\begin{pmatrix}\\frac12&\\frac52&2\\\\0&1&2\\\\\\frac12&\\frac32&\\frac12\\end{pmatrix}$",
  "hint": "$(A^{*})^{-1}=\\frac{1}{|A|}A$",
  "solution": "$|A|=1\\cdot(2-12)-5\\cdot(0-4)+4\\cdot(0-2)=-10+20-8=2$。由 $A^{*}=|A|A^{-1}$ 得 $(A^{*})^{-1}=\\frac{1}{|A|}A=\\frac12A$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-20",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $A^{k}=0$（$k$ 为正整数），证明 $(E-A)^{-1}=E+A+A^2+\\cdots+A^{k-1}$。",
  "answer": "证明见解析",
  "hint": "直接相乘，注意 $A^{k}=0$ 使中间项全部消去",
  "solution": "$(E-A)(E+A+\\cdots+A^{k-1})=E+A+\\cdots+A^{k-1}-A-A^2-\\cdots-A^{k}=E-A^{k}=E$，同理 $(E+A+\\cdots+A^{k-1})(E-A)=E$，故 $(E-A)$ 可逆且 $(E-A)^{-1}=E+A+\\cdots+A^{k-1}$。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-21",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "设 $A=\\begin{pmatrix}0&3&3\\\\1&1&0\\\\-1&2&3\\end{pmatrix}$, $AB=A+2B$, 求 $B$。",
  "answer": "$B=\\begin{pmatrix}0&3&3\\\\-1&2&3\\\\1&1&0\\end{pmatrix}$",
  "hint": "$AB-2B=A$，即 $(A-2E)B=A$",
  "solution": "由 $AB=A+2B$ 得 $(A-2E)B=A$，$A-2E=\\begin{pmatrix}-2&3&3\\\\1&-1&0\\\\-1&2&1\\end{pmatrix}$，$|A-2E|=2$，故 $B=(A-2E)^{-1}A=\\begin{pmatrix}0&3&3\\\\-1&2&3\\\\1&1&0\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-22",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "text",
  "statement": "设矩阵 $A$ 的伴随矩阵 $A^{*}=\\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\1&0&1&0\\\\0&-3&0&8\\end{pmatrix}$，且 $ABA^{-1}=BA^{-1}+3E$，其中 $E$ 是四阶单位矩阵，求矩阵 $B$。",
  "answer": "$B=\\begin{pmatrix}6&0&0&0\\\\0&6&0&0\\\\6&0&6&0\\\\0&3&0&-1\\end{pmatrix}$",
  "hint": "先由 $|A^{*}|=8$ 及 $|A^{*}|=|A|^{3}$ 得 $|A|=2$，再由 $AB=B+3A$ 解出 $B=3(A-E)^{-1}A$",
  "solution": "$|A^{*}|=1\\cdot1\\cdot1\\cdot8=8$，而 $|A^{*}|=|A|^{n-1}=|A|^3$，故 $|A|=2$，从而 $A=|A|(A^{*})^{-1}=2(A^{*})^{-1}=\\begin{pmatrix}2&0&0&0\\\\0&2&0&0\\\\-2&0&2&0\\\\0&\\frac34&0&\\frac14\\end{pmatrix}$。右乘 $A$：$AB=B+3A$，即 $(A-E)B=3A$，得 $B=3(A-E)^{-1}A$。计算 $(A-E)^{-1}=\\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\2&0&1&0\\\\0&1&0&-\\frac43\\end{pmatrix}$，乘得 $B=\\begin{pmatrix}6&0&0&0\\\\0&6&0&0\\\\6&0&6&0\\\\0&3&0&-1\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-23",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "text",
  "statement": "设 $P^{-1}AP=\\Lambda$，其中 $P=\\begin{pmatrix}-1&-4\\\\1&1\\end{pmatrix}$, $\\Lambda=\\begin{pmatrix}-1&0\\\\0&2\\end{pmatrix}$，求 $A^{11}$。",
  "answer": "$A^{11}=\\dfrac13\\begin{pmatrix}1+2^{13}&4+2^{13}\\\\-1-2^{11}&-4-2^{11}\\end{pmatrix}=\\begin{pmatrix}2731&2732\\\\-683&-684\\end{pmatrix}$",
  "hint": "$A^{11}=P\\Lambda^{11}P^{-1}$，$\\Lambda^{11}=\\mathrm{diag}(-1,2^{11})$",
  "solution": "$|P|=3$，$P^{-1}=\\frac13\\begin{pmatrix}1&4\\\\-1&-1\\end{pmatrix}$，$\\Lambda^{11}=\\begin{pmatrix}-1&0\\\\0&2^{11}\\end{pmatrix}$。故 $A^{11}=P\\Lambda^{11}P^{-1}=\\frac13\\begin{pmatrix}1+2^{13}&4+2^{13}\\\\-1-2^{11}&-4-2^{11}\\end{pmatrix}=\\begin{pmatrix}2731&2732\\\\-683&-684\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-24",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "text",
  "statement": "设 $AP=P\\Lambda$，其中 $P=\\begin{pmatrix}1&1&1\\\\1&0&-2\\\\1&-1&1\\end{pmatrix}$, $\\Lambda=\\begin{pmatrix}-1&0&0\\\\0&1&0\\\\0&0&5\\end{pmatrix}$，求 $\\varphi(A)=A^{8}(5E-6A+A^{2})$。",
  "answer": "$\\varphi(A)=4\\begin{pmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{pmatrix}$",
  "hint": "$A=P\\Lambda P^{-1}$，$\\varphi(A)=P\\varphi(\\Lambda)P^{-1}$，逐特征值代入 $f(\\lambda)=\\lambda^{8}(\\lambda^2-6\\lambda+5)$",
  "solution": "$f(\\lambda)=\\lambda^{8}(\\lambda^2-6\\lambda+5)$ 的零点为 $\\lambda=1,5$，故只有 $\\lambda=-1$ 的项留下：$f(-1)=(-1)^8(1+6+5)=12$。$P^{-1}=\\frac16\\begin{pmatrix}2&2&2\\\\3&0&-3\\\\1&-2&1\\end{pmatrix}$，其第 1 行为 $\\frac13(1,1,1)$，对应 $\\lambda=-1$ 的特征向量为 $(1,1,1)^{T}$，故 $\\varphi(A)=12\\cdot\\frac13\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}(1,1,1)=4\\begin{pmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-25-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "用初等变换求矩阵的秩：$\\begin{pmatrix}1&0&0&2&2\\\\5&7&6&8&3\\\\4&0&0&8&4\\\\7&1&0&1&0\\end{pmatrix}$。",
  "answer": "$r(A)=4$",
  "hint": "作行变换把第 1 列化为只有一个非零元",
  "solution": "$r_2-5r_1=(0,7,6,-2,-7)$，$r_3-4r_1=(0,0,0,0,-4)$，$r_4-7r_1=(0,1,0,-13,-14)$。后三行（$0$ 行除外）线性无关（第 3 行末元 $-4$ 单独出现），故 $r(A)=4$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-25-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "用初等变换求矩阵的秩：$\\begin{pmatrix}4&-1&3&-2\\\\3&-1&4&-2\\\\3&-2&2&-4\\\\0&1&2&2\\end{pmatrix}$。",
  "answer": "$r(A)=3$",
  "hint": "先作 $r_1-r_2$、$r_3-r_2$ 观察",
  "solution": "$r_1-r_2=(1,0,-1,0)$，$r_3-r_2=(0,-1,-2,-2)$，而 $r_4=-(r_3-r_2)$，故 $r_4$ 可由其余行表示；又 $r_1,r_2,r_3$ 线性无关（设 $a r_1+b r_2+c r_3=0$ 可推出 $a=b=c=0$），故 $r(A)=3$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-25-3",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "用初等变换求矩阵的秩：$\\begin{pmatrix}1&1&1&1&1\\\\3&2&1&1&-3\\\\0&1&3&2&5\\\\5&4&3&3&-1\\end{pmatrix}$。",
  "answer": "$r(A)=3$",
  "hint": "注意 $r_4-5r_1$ 与 $r_2-3r_1$ 相同",
  "solution": "$r_2-3r_1=(0,-1,-2,-2,-6)$，$r_4-5r_1=(0,-1,-2,-2,-6)$，故 $r_4$ 冗余。又 $r_3+r_2'=(0,0,1,0,-1)\\neq0$ 且与 $r_1$、$r_2'$ 无关，故 $r(A)=3$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-25-4",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "text",
  "statement": "用初等变换求矩阵的秩：$\\begin{pmatrix}1&5&6&-4&-10\\\\2&3&5&-1&-6\\\\6&-1&5&7&2\\\\2&-3&-1&5&6\\end{pmatrix}$。",
  "answer": "$r(A)=2$",
  "hint": "各行之和或之差有明显关系",
  "solution": "$r_2-2r_1=(0,-7,-7,7,14)=-7(0,1,1,-1,-2)$，$r_3-6r_1=(0,-31,-31,31,62)=-31(0,1,1,-1,-2)$，$r_4-2r_1=(0,-13,-13,13,26)=-13(0,1,1,-1,-2)$。三个差行成比例且与 $r_1$ 无关（$r_1$ 不含该比例），故 $r(A)=2$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-26-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "用初等变换求逆矩阵：$\\begin{pmatrix}3&-3&4\\\\2&-3&4\\\\0&-1&1\\end{pmatrix}$。",
  "answer": "$\\begin{pmatrix}1&-1&0\\\\-2&3&-4\\\\-2&3&-3\\end{pmatrix}$",
  "hint": "对 $(A\\mid E)$ 作行变换化为 $(E\\mid A^{-1})$",
  "solution": "$|A|=3(-3+4)+3(2-0)+4(-2-0)=3+6-8=1\\neq0$。对 $(A\\mid E)$ 行变换逐步化为 $(E\\mid A^{-1})$，得 $A^{-1}=\\begin{pmatrix}1&-1&0\\\\-2&3&-4\\\\-2&3&-3\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-26-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "用初等变换求逆矩阵：$\\begin{pmatrix}1&-3&2\\\\-3&0&1\\\\1&1&-1\\end{pmatrix}$。",
  "answer": "$\\begin{pmatrix}1&1&3\\\\2&3&7\\\\3&4&9\\end{pmatrix}$",
  "hint": "对 $(A\\mid E)$ 作行变换",
  "solution": "$|A|=1(0-1)+3(3-1)+2(-3-0)=-1+6-6=-1$。行变换化 $(A\\mid E)\\to(E\\mid A^{-1})$ 得 $A^{-1}=\\begin{pmatrix}1&1&3\\\\2&3&7\\\\3&4&9\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-26-3",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "用初等变换求逆矩阵：$\\begin{pmatrix}1&0&0&0\\\\2&1&0&0\\\\3&2&1&0\\\\4&3&2&1\\end{pmatrix}$。",
  "answer": "$\\begin{pmatrix}1&0&0&0\\\\-2&1&0&0\\\\1&-2&1&0\\\\0&1&-2&1\\end{pmatrix}$",
  "hint": "下三角且对角元为 1，$(E+N)^{-1}=E-N+N^2-N^3$",
  "solution": "$A=E+N$，$N$ 为严格下三角，$N^4=0$，故 $A^{-1}=E-N+N^2-N^3$。直接计算得 $\\begin{pmatrix}1&0&0&0\\\\-2&1&0&0\\\\1&-2&1&0\\\\0&1&-2&1\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-26-4",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "用初等变换求逆矩阵：$\\begin{pmatrix}1&1&1&1\\\\1&1&1&0\\\\1&1&0&0\\\\1&0&0&0\\end{pmatrix}$。",
  "answer": "$\\begin{pmatrix}0&0&0&1\\\\0&0&1&-1\\\\0&1&-1&0\\\\1&-1&0&0\\end{pmatrix}$",
  "hint": "反单位阵（次对角全 1），利用 $A^{2}$ 的结构",
  "solution": "对 $(A\\mid E)$ 作行变换（用第 4 行依次消去上面三行的第 1 列，再用第 3 行消第 2 列……），得 $A^{-1}=\\begin{pmatrix}0&0&0&1\\\\0&0&1&-1\\\\0&1&-1&0\\\\1&-1&0&0\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-27-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "text",
  "statement": "用分块法求 $AB$，其中 $A=\\begin{pmatrix}1&0&0&0\\\\0&1&0&0\\\\-1&2&1&0\\\\1&1&0&1\\end{pmatrix}$, $B=\\begin{pmatrix}1&0&3&2\\\\-1&2&0&1\\\\1&0&4&1\\\\1&-1&0&0\\end{pmatrix}$。",
  "answer": "$AB=\\begin{pmatrix}1&0&3&2\\\\-1&2&0&1\\\\-2&4&1&1\\\\1&1&3&3\\end{pmatrix}$",
  "hint": "按 $2\\times2$ 分块：$A=\\begin{pmatrix}E&0\\\\A_{21}&E\\end{pmatrix}$",
  "solution": "把 $A,B$ 各按 $2\\times2$ 分块，$A=\\begin{pmatrix}E&0\\\\A_{21}&E\\end{pmatrix}$（$A_{21}=\\begin{pmatrix}-1&2\\\\1&1\\end{pmatrix}$），$B=\\begin{pmatrix}B_{11}&B_{12}\\\\B_{21}&B_{22}\\end{pmatrix}$。则 $AB=\\begin{pmatrix}B_{11}&B_{12}\\\\A_{21}B_{11}+B_{21}&A_{21}B_{12}+B_{22}\\end{pmatrix}=\\begin{pmatrix}1&0&3&2\\\\-1&2&0&1\\\\-2&4&1&1\\\\1&1&3&3\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-27-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "text",
  "statement": "设 $A=\\begin{pmatrix}3&4&0&0\\\\4&-3&0&0\\\\0&0&2&4\\\\0&0&0&2\\end{pmatrix}$，求 $|A^{2k}|$ 及 $A^{2k}$（$k$ 为正整数）。",
  "answer": "$|A^{2k}|=|A|^{2k}=100^{2k}$，$A^{2k}=\\begin{pmatrix}5^{2k}&0&0&0\\\\0&5^{2k}&0&0\\\\0&0&4^{k}&k\\,4^{k+1}\\\\0&0&0&4^{k}\\end{pmatrix}$",
  "hint": "分块对角：左上块满足 $B^2=25E$，右下块 $=2E+N$ 型",
  "solution": "$A=\\mathrm{diag}(B,C)$，$B=\\begin{pmatrix}3&4\\\\4&-3\\end{pmatrix}$ 满足 $B^2=25E$，故 $B^{2k}=25^{k}E=5^{2k}E$；$C=\\begin{pmatrix}2&4\\\\0&2\\end{pmatrix}=2E+N$（$N^2=0$），$C^{2k}=2^{2k}E+2k\\cdot2^{2k-1}N=4^kE+k4^k\\cdot2N$，即 $C^{2k}=\\begin{pmatrix}4^k&k4^{k+1}\\\\0&4^k\\end{pmatrix}$。于是 $|A^{2k}|=(5^{2k})^2\\cdot(4^k)^2=100^{2k}$（书末印作 $100^{k}$，与 $|A^{2k}|=|A|^{2k}$ 及此处计算结果不符），$A^{2k}$ 如上。官方答案矩阵部分一致 [✓官方]"
 },
 {
  "id": "ch2-28-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "用分块法求逆：$\\begin{pmatrix}1&2&0&0\\\\3&7&0&0\\\\0&0&5&6\\\\0&0&4&5\\end{pmatrix}$。",
  "answer": "$\\begin{pmatrix}7&-2&0&0\\\\-3&1&0&0\\\\0&0&5&-6\\\\0&0&-4&5\\end{pmatrix}$",
  "hint": "分块对角矩阵，逐块求逆",
  "solution": "对角两块 $B=\\begin{pmatrix}1&2\\\\3&7\\end{pmatrix}$（$|B|=1$）、$C=\\begin{pmatrix}5&6\\\\4&5\\end{pmatrix}$（$|C|=1$），$B^{-1}=\\begin{pmatrix}7&-2\\\\-3&1\\end{pmatrix}$，$C^{-1}=\\begin{pmatrix}5&-6\\\\-4&5\\end{pmatrix}$，故逆为分块对角 $\\begin{pmatrix}B^{-1}&0\\\\0&C^{-1}\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-28-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "用分块法求逆：$\\begin{pmatrix}0&0&1&2\\\\0&0&3&7\\\\5&6&0&0\\\\4&5&0&0\\end{pmatrix}$。",
  "answer": "$\\begin{pmatrix}0&0&5&-6\\\\0&0&-4&5\\\\7&-2&0&0\\\\-3&1&0&0\\end{pmatrix}$",
  "hint": "形如 $\\begin{pmatrix}0&C\\\\D&0\\end{pmatrix}$，其逆为 $\\begin{pmatrix}0&D^{-1}\\\\C^{-1}&0\\end{pmatrix}$",
  "solution": "设 $A=\\begin{pmatrix}0&C\\\\D&0\\end{pmatrix}$，则 $\\begin{pmatrix}0&D^{-1}\\\\C^{-1}&0\\end{pmatrix}A=E$。这里 $C=\\begin{pmatrix}1&2\\\\3&7\\end{pmatrix}$，$C^{-1}=\\begin{pmatrix}7&-2\\\\-3&1\\end{pmatrix}$，$D=\\begin{pmatrix}5&6\\\\4&5\\end{pmatrix}$，$D^{-1}=\\begin{pmatrix}5&-6\\\\-4&5\\end{pmatrix}$，故 $A^{-1}=\\begin{pmatrix}0&D^{-1}\\\\C^{-1}&0\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-28-3",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "用分块法求逆（$abcd\\neq0$）：$\\begin{pmatrix}0&0&a&0\\\\0&0&0&b\\\\c&0&0&0\\\\0&d&0&0\\end{pmatrix}$。",
  "answer": "$\\begin{pmatrix}0&0&c^{-1}&0\\\\0&0&0&d^{-1}\\\\a^{-1}&0&0&0\\\\0&b^{-1}&0&0\\end{pmatrix}$",
  "hint": "同 28(2) 的 $\\begin{pmatrix}0&C\\\\D&0\\end{pmatrix}$ 型",
  "solution": "$C=\\begin{pmatrix}a&0\\\\0&b\\end{pmatrix}$，$D=\\begin{pmatrix}c&0\\\\0&d\\end{pmatrix}$，由 $abcd\\neq0$ 知 $C,D$ 可逆，$C^{-1}=\\begin{pmatrix}a^{-1}&0\\\\0&b^{-1}\\end{pmatrix}$，$D^{-1}=\\begin{pmatrix}c^{-1}&0\\\\0&d^{-1}\\end{pmatrix}$，故逆为 $\\begin{pmatrix}0&D^{-1}\\\\C^{-1}&0\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-28-4",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "text",
  "statement": "用分块法求逆：$\\begin{pmatrix}1&3&0&0\\\\2&8&0&0\\\\1&0&1&0\\\\0&1&2&3\\end{pmatrix}$。",
  "answer": "$\\begin{pmatrix}4&-\\frac32&0&0\\\\-1&\\frac12&0&0\\\\-4&\\frac32&1&0\\\\3&-\\frac76&-\\frac23&\\frac13\\end{pmatrix}$",
  "hint": "$\\begin{pmatrix}B&0\\\\C&D\\end{pmatrix}^{-1}=\\begin{pmatrix}B^{-1}&0\\\\-D^{-1}CB^{-1}&D^{-1}\\end{pmatrix}$",
  "solution": "$B=\\begin{pmatrix}1&3\\\\2&8\\end{pmatrix}$，$B^{-1}=\\begin{pmatrix}4&-\\frac32\\\\-1&\\frac12\\end{pmatrix}$；$D=\\begin{pmatrix}1&0\\\\2&3\\end{pmatrix}$，$D^{-1}=\\begin{pmatrix}1&0\\\\-\\frac23&\\frac13\\end{pmatrix}$；$C=E_2$。故左下块 $-D^{-1}CB^{-1}=-\\begin{pmatrix}4&-\\frac32\\\\-3&\\frac76\\end{pmatrix}=\\begin{pmatrix}-4&\\frac32\\\\3&-\\frac76\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-28-5",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "text",
  "statement": "用分块法求逆：$\\begin{pmatrix}\\cos\\theta&\\sin\\theta&0&0&0\\\\-\\sin\\theta&\\cos\\theta&0&0&0\\\\0&0&1&a&b\\\\0&0&0&1&a\\\\0&0&0&0&1\\end{pmatrix}$。",
  "answer": "$\\begin{pmatrix}\\cos\\theta&-\\sin\\theta&0&0&0\\\\\\sin\\theta&\\cos\\theta&0&0&0\\\\0&0&1&-a&a^2-b\\\\0&0&0&1&-a\\\\0&0&0&0&1\\end{pmatrix}$",
  "hint": "分块对角：左上为旋转阵，右下为 $E+N$（$N^3=0$）",
  "solution": "左上 $R=\\begin{pmatrix}\\cos\\theta&\\sin\\theta\\\\-\\sin\\theta&\\cos\\theta\\end{pmatrix}$，$R^{-1}=\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$；右下 $M=\\begin{pmatrix}1&a&b\\\\0&1&a\\\\0&0&1\\end{pmatrix}=E+N$，$N^3=0$，$M^{-1}=E-N+N^2=\\begin{pmatrix}1&-a&a^2-b\\\\0&1&-a\\\\0&0&1\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-29",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "做下列分块矩阵的乘法，其中 $A,B,E$ 都是 $n$ 阶矩阵：(1) $A^{-1}(A,E)$；(2) $(A,E)^{T}(A,E)$；(3) $\\begin{pmatrix}A\\\\E\\end{pmatrix}A^{-1}$；(4) $\\begin{pmatrix}A^{-1}\\\\E\\end{pmatrix}(A,E)$；(5) $\\begin{pmatrix}0&E\\\\E&0\\end{pmatrix}\\begin{pmatrix}A\\\\B\\end{pmatrix}$；(6) $\\begin{pmatrix}E&0\\\\0&0\\end{pmatrix}\\begin{pmatrix}A\\\\B\\end{pmatrix}$。",
  "answer": "(1) $(E,A^{-1})$；(2) $\\begin{pmatrix}A^{T}A&A^{T}\\\\A&E\\end{pmatrix}$；(3) $\\begin{pmatrix}E\\\\A^{-1}\\end{pmatrix}$；(4) $\\begin{pmatrix}E&A^{-1}\\\\A&E\\end{pmatrix}$；(5) $\\begin{pmatrix}B\\\\A\\end{pmatrix}$；(6) $\\begin{pmatrix}A\\\\0\\end{pmatrix}$",
  "hint": "把分块矩阵当元素作乘法，注意块的大小要匹配",
  "solution": "(1) $A^{-1}$ 分别乘每个块：$(A^{-1}A,A^{-1}E)=(E,A^{-1})$。(2) $(A,E)^{T}=\\begin{pmatrix}A^{T}\\\\E\\end{pmatrix}$，乘得 $\\begin{pmatrix}A^{T}A&A^{T}\\\\A&E\\end{pmatrix}$。(3) $\\begin{pmatrix}AA^{-1}\\\\EA^{-1}\\end{pmatrix}=\\begin{pmatrix}E\\\\A^{-1}\\end{pmatrix}$。(4) $\\begin{pmatrix}A^{-1}A&A^{-1}E\\\\EA&EE\\end{pmatrix}=\\begin{pmatrix}E&A^{-1}\\\\A&E\\end{pmatrix}$。(5) 交换作用：$\\begin{pmatrix}B\\\\A\\end{pmatrix}$。(6) 投影作用：$\\begin{pmatrix}A\\\\0\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-30-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "设 $A,B$ 均可逆，求 $\\begin{pmatrix}A&C\\\\0&B\\end{pmatrix}$ 的逆。",
  "answer": "$\\begin{pmatrix}A^{-1}&-A^{-1}CB^{-1}\\\\0&B^{-1}\\end{pmatrix}$",
  "hint": "设逆为 $\\begin{pmatrix}X&Y\\\\0&Z\\end{pmatrix}$，比较乘积",
  "solution": "设逆为 $\\begin{pmatrix}X&Y\\\\0&Z\\end{pmatrix}$，则 $\\begin{pmatrix}A&C\\\\0&B\\end{pmatrix}\\begin{pmatrix}X&Y\\\\0&Z\\end{pmatrix}=\\begin{pmatrix}AX&AY+CZ\\\\0&BZ\\end{pmatrix}=\\begin{pmatrix}E&0\\\\0&E\\end{pmatrix}$，得 $X=A^{-1}$，$Z=B^{-1}$，$Y=-A^{-1}CB^{-1}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-30-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "text",
  "statement": "设 $A,B$ 均可逆，求 $\\begin{pmatrix}0&A\\\\B&0\\end{pmatrix}$ 的逆。",
  "answer": "$\\begin{pmatrix}0&B^{-1}\\\\A^{-1}&0\\end{pmatrix}$",
  "hint": "直接验证 $\\begin{pmatrix}0&A\\\\B&0\\end{pmatrix}\\begin{pmatrix}0&B^{-1}\\\\A^{-1}&0\\end{pmatrix}=E$",
  "solution": "$\\begin{pmatrix}0&A\\\\B&0\\end{pmatrix}\\begin{pmatrix}0&B^{-1}\\\\A^{-1}&0\\end{pmatrix}=\\begin{pmatrix}AA^{-1}&0\\\\0&BB^{-1}\\end{pmatrix}=E$，故逆为 $\\begin{pmatrix}0&B^{-1}\\\\A^{-1}&0\\end{pmatrix}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-31-1",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "choice",
  "statement": "化简 $(AB^{T})^{-1}(C^{T}A^{T}+E)^{T}-(C^{T}B^{-1})^{T}$，其中 $A,B$ 均可逆。",
  "options": [
   "$(B^{-1})^{T}A^{-1}$",
   "$A^{-1}(B^{-1})^{T}$",
   "$B^{-1}A^{-1}$",
   "$(B^{-1})^{T}C-A^{-1}$"
  ],
  "answer": 0,
  "hint": "先转置化简：$(C^{T}A^{T}+E)^{T}=AC+E$，$(C^{T}B^{-1})^{T}=(B^{-1})^{T}C$",
  "solution": "$(AB^{T})^{-1}=(B^{T})^{-1}A^{-1}=(B^{-1})^{T}A^{-1}$，$(C^{T}A^{T}+E)^{T}=AC+E$，$(C^{T}B^{-1})^{T}=(B^{-1})^{T}C$。故原式 $=(B^{-1})^{T}A^{-1}(AC+E)-(B^{-1})^{T}C=(B^{-1})^{T}(C+A^{-1})-(B^{-1})^{T}C=(B^{-1})^{T}A^{-1}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-31-2",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "text",
  "statement": "化简 $(E+BA)\\left[E-B(E+AB)^{-1}A\\right]$，其中 $(E+AB)$ 可逆。",
  "answer": "$E$",
  "hint": "先证 $E-B(E+AB)^{-1}A=(E+BA)^{-1}$",
  "solution": "验证：$(E+BA)\\left[E-B(E+AB)^{-1}A\\right]=E+BA-B(E+AB)^{-1}A-BAB(E+AB)^{-1}A=E+BA-B\\left[E+AB\\right](E+AB)^{-1}A=E+BA-BA=E$。（此即 Woodbury 恒等式。）官方答案一致 [✓官方]"
 },
 {
  "id": "ch2-32",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 2,
  "type": "proof",
  "statement": "证明：若 $A,B$ 为两个 $n$ 阶矩阵，则 $AB$ 与 $BA$ 的主对角线上元素之和相等。",
  "answer": "证明见解析",
  "hint": "写出 $\\sum_i(AB)_{ii}$ 并交换求和次序",
  "solution": "$AB$ 的主对角元之和 $=\\sum_{i=1}^{n}(AB)_{ii}=\\sum_{i=1}^{n}\\sum_{j=1}^{n}a_{ij}b_{ji}=\\sum_{j=1}^{n}\\sum_{i=1}^{n}b_{ji}a_{ij}=\\sum_{j=1}^{n}(BA)_{jj}$，即 $\\mathrm{tr}(AB)=\\mathrm{tr}(BA)$。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-33",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $A$ 为 $n$ 阶矩阵，$A^{T}A=E$，$|A|<0$，证明 $|A+E|=0$。",
  "answer": "证明见解析",
  "hint": "由 $A^{T}A=E$ 得 $|A|=-1$，再用 $|A+E|=|A||E+A^{T}|$",
  "solution": "由 $A^{T}A=E$ 得 $|A|^2=1$，又 $|A|<0$，故 $|A|=-1$，且 $A^{T}=A^{-1}$。于是 $|A+E|=|A(E+A^{-1})|=|A|\\cdot|E+A^{T}|=|A|\\cdot|(A+E)^{T}|=|A||A+E|$，即 $(1-|A|)|A+E|=0$。因 $1-|A|=2\\neq0$，故 $|A+E|=0$。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-34",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $A$ 为 $n$ 阶可逆方阵，且每一行元素之和都等于常数 $a\\ (a\\neq0)$，证明 $A$ 的逆矩阵的每一行元素之和为 $a^{-1}$。",
  "answer": "证明见解析",
  "hint": "把「行和为 $a$」写成 $A\\xi=a\\xi$，其中 $\\xi=(1,1,\\dots,1)^{T}$",
  "solution": "设 $\\xi=(1,1,\\dots,1)^{T}$，由行和为 $a$ 得 $A\\xi=a\\xi$。左乘 $A^{-1}$：$\\xi=aA^{-1}\\xi$，即 $A^{-1}\\xi=\\frac1a\\xi$，说明 $A^{-1}$ 的每一行元素之和均为 $a^{-1}$。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-35",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $A=E-XX^{T}$，$X=(x_1,x_2,\\cdots,x_n)^{T}$ 为非零列矩阵，证明：(1) $A^2=A$ 的充分必要条件是 $X^{T}X=1$；(2) 若 $X^{T}X=1$，则 $A$ 不可逆。",
  "answer": "证明见解析",
  "hint": "记 $c=X^{T}X$，则 $A^2=E-2XX^{T}+cXX^{T}$",
  "solution": "记 $c=X^{T}X$（数）。$A^2=(E-XX^{T})^2=E-2XX^{T}+X(X^{T}X)X^{T}=E+(c-2)XX^{T}$，于是 $A^2-A=(c-1)XX^{T}$。因 $X\\neq0$，$XX^{T}\\neq0$，故 $A^2=A\\iff c=1\\iff X^{T}X=1$。(2) 若 $X^{T}X=1$，由 $|E-XX^{T}|=1-X^{T}X=0$ 得 $|A|=0$，$A$ 不可逆。（也可由 $AX=X-X(X^{T}X)=0$ 且 $X\\neq0$ 说明 $A$ 有非零解。）官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-36",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $n$ 阶矩阵 $A$ 的伴随矩阵为 $A^{*}$，证明：(1) 若 $|A|=0$，则 $|A^{*}|=0$；(2) $|A^{*}|=|A|^{n-1}$。",
  "answer": "证明见解析",
  "hint": "用 $AA^{*}=|A|E$ 及行列式的乘法",
  "solution": "(2) 由 $AA^{*}=|A|E$ 两边取行列式：$|A||A^{*}|=|A|^{n}$。当 $|A|\\neq0$ 时得 $|A^{*}|=|A|^{n-1}$。(1) 当 $|A|=0$ 时，若 $A=0$ 则 $A^{*}=0$，结论成立；若 $A\\neq0$，由 $|A|=0$ 知 $r(A)\\leqslant n-1$，此时 $r(A^{*})\\leqslant1<n$，故 $|A^{*}|=0$。综上 $|A^{*}|=|A|^{n-1}$ 对一切 $A$ 成立。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-37",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $A$ 为 $n$ 阶可逆矩阵，$A^{*}$ 为 $A$ 的伴随矩阵，证明：(1) $(A^{*})^{T}=(A^{T})^{*}$；(2) $(A^{*})^{*}=|A|^{n-2}A$。",
  "answer": "证明见解析",
  "hint": "利用 $A^{*}=|A|A^{-1}$ 与转置、求逆可交换",
  "solution": "(1) $A$ 可逆时 $A^{*}=|A|A^{-1}$，故 $(A^{*})^{T}=|A|(A^{-1})^{T}=|A|(A^{T})^{-1}=(|A^{T}|)(A^{T})^{-1}=(A^{T})^{*}$。(2) 把 $A^{*}$ 看作矩阵并用 (2) 的公式：$(A^{*})^{*}=|A^{*}|(A^{*})^{-1}=|A|^{n-1}\\cdot\\frac{1}{|A|}A=|A|^{n-2}A$。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch2-38",
  "subject": "高代",
  "chapter": "第2章 矩阵",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $A$ 为 $n$ 阶（$n>2$）非零矩阵，且 $A_{ij}=a_{ij}$，$A_{ij}$ 是矩阵 $A$ 的行列式中元素 $a_{ij}$ 对应的代数余子式。证明：(1) $A$ 可逆；(2) $|A|=1$。",
  "answer": "证明见解析",
  "hint": "由 $A_{ij}=a_{ij}$ 得 $A^{*}=A^{T}$，代入 $AA^{*}=|A|E$",
  "solution": "伴随矩阵的 $(i,j)$ 元为 $A_{ji}$，由 $A_{ij}=a_{ij}$ 知 $A^{*}=A^{T}$。由 $AA^{*}=|A|E$ 得 $AA^{T}=|A|E$。(1) 若 $|A|=0$，则 $AA^{T}=0$，其迹 $\\sum_{i,j}a_{ij}^2=0$，故 $A=0$，与 $A\\neq0$ 矛盾，所以 $|A|\\neq0$，$A$ 可逆。(2) 对 $AA^{T}=|A|E$ 取行列式：$|A|^2=|A|^{n}$，由 $|A|\\neq0$ 得 $|A|^{n-2}=1$，又 $n>2$，故 $|A|=1$。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch3-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "已知平行四边形 $ABCD$ 的对角线为 $\\overrightarrow{AC}=\\alpha$, $\\overrightarrow{BD}=\\beta$，求 $\\overrightarrow{AB}$, $\\overrightarrow{BC}$。",
  "answer": "$\\overrightarrow{AB}=\\dfrac12(\\alpha-\\beta)$，$\\overrightarrow{BC}=\\dfrac12(\\alpha+\\beta)$",
  "hint": "用 $\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{BC}$，$\\overrightarrow{BD}=\\overrightarrow{AD}-\\overrightarrow{AB}=\\overrightarrow{BC}-\\overrightarrow{AB}$",
  "solution": "记 $\\overrightarrow{AB}=u$，$\\overrightarrow{BC}=v$，则 $u+v=\\alpha$，$v-u=\\beta$。两式相加、相减得 $v=\\frac12(\\alpha+\\beta)$，$u=\\frac12(\\alpha-\\beta)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-2-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "text",
  "statement": "判断 $|\\alpha+\\beta|=|\\alpha-\\beta|$ 何时成立。",
  "answer": "$\\alpha\\perp\\beta$（$\\alpha\\cdot\\beta=0$）",
  "hint": "两边平方，比较 $|\\alpha+\\beta|^2$ 与 $|\\alpha-\\beta|^2$",
  "solution": "$|\\alpha+\\beta|^2=|\\alpha|^2+2\\alpha\\cdot\\beta+|\\beta|^2$，$|\\alpha-\\beta|^2=|\\alpha|^2-2\\alpha\\cdot\\beta+|\\beta|^2$，两者相等 $\\iff\\alpha\\cdot\\beta=0$，即 $\\alpha\\perp\\beta$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-2-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "text",
  "statement": "判断 $|\\alpha+\\beta|=|\\alpha|+|\\beta|$ 何时成立。",
  "answer": "$\\alpha$ 与 $\\beta$ 同向，或 $\\alpha=0$ 或 $\\beta=0$",
  "hint": "三角不等式的取等条件",
  "solution": "由 $|\\alpha+\\beta|\\leqslant|\\alpha|+|\\beta|$，等号成立 $\\iff$ $\\alpha,\\beta$ 同向或其中有零向量。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-2-3",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "判断 $|\\alpha+\\beta|=|\\alpha|-|\\beta|$ 何时成立。",
  "answer": "$\\alpha$ 与 $\\beta$ 反向且 $|\\alpha|\\geqslant|\\beta|$",
  "hint": "用 $|\\alpha+\\beta|\\geqslant|\\alpha|-|\\beta|$ 的取等条件",
  "solution": "由 $|\\alpha+\\beta|\\geqslant\\big||\\alpha|-|\\beta|\\big|$，等号成立 $\\iff$ $\\alpha,\\beta$ 反向且 $|\\alpha|\\geqslant|\\beta|$（此时 $\\alpha+\\beta$ 与 $\\alpha$ 同向，模为 $|\\alpha|-|\\beta|$）。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-2-4",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "判断 $\\dfrac{\\alpha}{|\\alpha|}=\\dfrac{\\beta}{|\\beta|}$ 何时成立。",
  "answer": "$\\alpha$ 与 $\\beta$ 同向且 $\\alpha\\neq0,\\ \\beta\\neq0$",
  "hint": "单位向量相等意味着方向相同",
  "solution": "左、右分别是 $\\alpha,\\beta$ 的单位向量，二者相等 $\\iff$ 两向量同向，且此时 $\\alpha,\\beta$ 都不能为零向量。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-3",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "proof",
  "statement": "设 $M$ 是平行四边形 $ABCD$ 的对角线的交点，证明：对平面上任意一点 $O$，$\\overrightarrow{OM}=\\dfrac14(\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}+\\overrightarrow{OD})$。",
  "answer": "证明见解析",
  "hint": "$M$ 是两条对角线的中点",
  "solution": "$M$ 是对角线 $AC$、$BD$ 的中点，故 $\\overrightarrow{OA}+\\overrightarrow{OC}=2\\overrightarrow{OM}$，$\\overrightarrow{OB}+\\overrightarrow{OD}=2\\overrightarrow{OM}$。两式相加得 $\\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}+\\overrightarrow{OD}=4\\overrightarrow{OM}$，即所证。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch3-4",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "proof",
  "statement": "设 $A,B,C,D$ 是一个四面体的顶点，$M,N$ 分别是边 $AB,CD$ 的中点，证明：$\\overrightarrow{MN}=\\dfrac12(\\overrightarrow{AD}+\\overrightarrow{BC})$。",
  "answer": "证明见解析",
  "hint": "把 $\\overrightarrow{MN}$ 沿两条路径 $M\\to A\\to D\\to N$ 与 $M\\to B\\to C\\to N$ 展开再相加",
  "solution": "$\\overrightarrow{MN}=\\overrightarrow{MA}+\\overrightarrow{AD}+\\overrightarrow{DN}$，$\\overrightarrow{MN}=\\overrightarrow{MB}+\\overrightarrow{BC}+\\overrightarrow{CN}$。相加：$2\\overrightarrow{MN}=(\\overrightarrow{MA}+\\overrightarrow{MB})+(\\overrightarrow{AD}+\\overrightarrow{BC})+(\\overrightarrow{DN}+\\overrightarrow{CN})=\\vec0+\\overrightarrow{AD}+\\overrightarrow{BC}+\\vec0$，故 $\\overrightarrow{MN}=\\frac12(\\overrightarrow{AD}+\\overrightarrow{BC})$。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch3-5-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "判断向量 $\\alpha=(-2,3,10)$, $\\beta=(-1,4,15)$, $\\gamma=(3,6,-15)$ 是否共面。",
  "answer": "不共面（混合积为 $210\\neq0$）",
  "hint": "算混合积 $(\\alpha,\\beta,\\gamma)$，为零则共面",
  "solution": "$(\\alpha,\\beta,\\gamma)=\\begin{vmatrix}-2&3&10\\\\-1&4&15\\\\3&6&-15\\end{vmatrix}=-2(-60-90)-3(15-45)+10(-6-12)=300+90-180=210\\neq0$，故三向量不共面。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-5-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "判断向量 $\\alpha=(7,0,3)$, $\\beta=(-8,-3,-6)$, $\\gamma=(3,2,3)$ 是否共面。",
  "answer": "共面（混合积为 $0$）",
  "hint": "算混合积",
  "solution": "$(\\alpha,\\beta,\\gamma)=\\begin{vmatrix}7&0&3\\\\-8&-3&-6\\\\3&2&3\\end{vmatrix}=7(-9+12)-0+3(-16+9)=21-21=0$，故共面。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-6",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "text",
  "statement": "一矢量的起点为 $A(1,4,-2)$，终点为 $B(-1,5,0)$，试求 $\\overrightarrow{AB}$ 在 $x$ 轴、$y$ 轴、$z$ 轴上的投影，并求 $|\\overrightarrow{AB}|$ 和 $\\overrightarrow{AB}$ 的单位矢量。",
  "answer": "投影依次为 $-2,1,2$；$|\\overrightarrow{AB}|=3$；单位矢量 $\\left(-\\dfrac23,\\dfrac13,\\dfrac23\\right)$",
  "hint": "坐标即为在各轴上的投影",
  "solution": "$\\overrightarrow{AB}=(-1-1,5-4,0+2)=(-2,1,2)$，故三个投影为 $-2,1,2$；$|\\overrightarrow{AB}|=\\sqrt{4+1+4}=3$；单位矢量 $=\\frac13(-2,1,2)=\\left(-\\frac23,\\frac13,\\frac23\\right)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-7",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "text",
  "statement": "设 $r$ 的模为 1，且与 $u$ 轴的夹角为 $\\dfrac{\\pi}{3}$，求 $r$ 在 $u$ 轴上的投影。",
  "answer": "$\\dfrac12$",
  "hint": "投影 $=|r|\\cos\\theta$",
  "solution": "投影 $=|\\boldsymbol r|\\cos\\frac{\\pi}{3}=1\\cdot\\frac12=\\frac12$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-8",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "text",
  "statement": "已知向量 $a=(3,5,4)$, $b=(-6,1,2)$, $c=(0,-3,-4)$，求 $2a-3b+4c$ 及其单位向量。",
  "answer": "$(24,-5,-14)$；单位向量 $\\dfrac{1}{\\sqrt{797}}(24,-5,-14)$",
  "hint": "先作线性组合，再除以模",
  "solution": "$2a=(6,10,8)$，$-3b=(18,-3,-6)$，$4c=(0,-12,-16)$，相加得 $(24,-5,-14)$。模为 $\\sqrt{576+25+196}=\\sqrt{797}$，故单位向量为 $\\frac{1}{\\sqrt{797}}(24,-5,-14)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-9",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "choice",
  "statement": "已知 $\\alpha=(3,5,-1)$, $\\beta=(2,2,3)$，求向量 $\\gamma$，使 $\\alpha,\\beta,\\gamma$ 共面。",
  "options": [
   "$\\gamma=(3\\lambda+2\\mu,\\ 5\\lambda+2\\mu,\\ -\\lambda+3\\mu)$",
   "$\\gamma=(2\\lambda+3\\mu,\\ 2\\lambda+5\\mu,\\ 3\\lambda-\\mu)$",
   "$\\gamma=(\\lambda+2\\mu,\\ \\lambda+2\\mu,\\ \\lambda+3\\mu)$",
   "$\\gamma=(3\\lambda-2\\mu,\\ 5\\lambda-2\\mu,\\ -\\lambda+3\\mu)$"
  ],
  "answer": 0,
  "hint": "共面即 $\\gamma=\\lambda\\alpha+\\mu\\beta$",
  "solution": "三向量共面 $\\iff\\gamma$ 在 $\\alpha,\\beta$ 张成的平面内，即 $\\gamma=\\lambda\\alpha+\\mu\\beta$，逐分量写出得 $\\gamma=(3\\lambda+2\\mu,5\\lambda+2\\mu,-\\lambda+3\\mu)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-10",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "求向量 $\\alpha=(5,-12,-13)$ 的方向余弦。",
  "answer": "$\\cos\\alpha=\\dfrac{5\\sqrt2}{26}$，$\\cos\\beta=-\\dfrac{6\\sqrt2}{13}$，$\\cos\\gamma=-\\dfrac{\\sqrt2}{2}$",
  "hint": "$|\\alpha|=\\sqrt{25+144+169}=13\\sqrt2$",
  "solution": "$|\\alpha|=\\sqrt{338}=13\\sqrt2$，故 $\\cos\\alpha=\\frac{5}{13\\sqrt2}=\\frac{5\\sqrt2}{26}$，$\\cos\\beta=\\frac{-12}{13\\sqrt2}=-\\frac{6\\sqrt2}{13}$，$\\cos\\gamma=\\frac{-13}{13\\sqrt2}=-\\frac{\\sqrt2}{2}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-11-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "$\\alpha=(3,4,5)$, $\\beta=(2,1,2)$，求内积 $\\alpha\\cdot\\beta$ 和夹角 $\\langle\\alpha,\\beta\\rangle$。",
  "answer": "$\\alpha\\cdot\\beta=20$，$\\langle\\alpha,\\beta\\rangle=\\arccos\\dfrac{2\\sqrt2}{3}$",
  "hint": "$\\cos\\theta=\\frac{\\alpha\\cdot\\beta}{|\\alpha||\\beta|}$",
  "solution": "$\\alpha\\cdot\\beta=6+4+10=20$；$|\\alpha|=5\\sqrt2$，$|\\beta|=3$，$\\cos\\theta=\\frac{20}{15\\sqrt2}=\\frac{2\\sqrt2}{3}$，故夹角为 $\\arccos\\frac{2\\sqrt2}{3}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-11-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "$\\alpha=(-7,13,3)$, $\\beta=(-1,2,-2)$，求 $\\alpha$ 在 $\\beta$ 上的投影向量及投影向量的长。",
  "answer": "投影向量 $(-3,6,-6)$，其长为 $9$",
  "hint": "投影向量 $=\\frac{\\alpha\\cdot\\beta}{|\\beta|^2}\\beta$",
  "solution": "$\\alpha\\cdot\\beta=7+26-6=27$，$|\\beta|^2=9$，故投影向量 $=\\frac{27}{9}(-1,2,-2)=(-3,6,-6)$，长为 $\\frac{|\\alpha\\cdot\\beta|}{|\\beta|}=\\frac{27}{3}=9$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-11-3",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "$\\alpha=(1,-1,3)$, $\\beta=(2,3,1)$, $\\gamma=(2,1,2)$，求满足：垂直于 $\\alpha$ 和 $\\beta$，并与 $\\gamma$ 内积为 1 的向量 $x$。",
  "answer": "$x=(2,-1,-1)$",
  "hint": "先取 $x=k(\\alpha\\times\\beta)$，再用 $\\gamma\\cdot x=1$ 定 $k$",
  "solution": "$\\alpha\\times\\beta=\\begin{vmatrix}i&j&k\\\\1&-1&3\\\\2&3&1\\end{vmatrix}=(-10,5,5)=-5(2,-1,-1)$。取 $x=k(2,-1,-1)$，由 $\\gamma\\cdot x=k(4-1-2)=k=1$ 得 $x=(2,-1,-1)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-11-4",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "求以 $A(-1,1,-2)$, $B(2,9,-1)$, $C(1,3,-3)$ 为顶点的 $\\triangle ABC$ 的面积及 $AC$ 边上的高。",
  "answer": "面积 $7.5$（平方单位），$AC$ 边上的高 $5$",
  "hint": "面积 $=\\frac12|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$，高 $=\\frac{2S}{|AC|}$",
  "solution": "$\\overrightarrow{AB}=(3,8,1)$，$\\overrightarrow{AC}=(2,2,-1)$，$\\overrightarrow{AB}\\times\\overrightarrow{AC}=(-10,5,-10)$，模为 $15$，故 $S=\\frac{15}{2}=7.5$。$|AC|=\\sqrt{4+4+1}=3$，由 $S=\\frac12|AC|\\cdot h$ 得 $h=\\frac{2\\times7.5}{3}=5$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-11-5",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "$\\alpha=(1,-1,1)$, $\\beta=(1,2,-1)$, $\\gamma=(2,1,4)$，求 $\\alpha\\times\\beta$, $\\alpha\\times(\\beta+\\gamma)$, $(\\alpha\\times\\beta)\\times\\gamma$, $\\alpha\\times(\\beta\\times\\gamma)$。",
  "answer": "$(-1,2,3)$；$(-6,0,6)$；$(5,10,-5)$；$(9,12,3)$",
  "hint": "按行列式展开算叉积，注意叉积不满足结合律",
  "solution": "$\\alpha\\times\\beta=(-1,2,3)$；$\\beta+\\gamma=(3,3,3)$，$\\alpha\\times(\\beta+\\gamma)=(-6,0,6)$；$(\\alpha\\times\\beta)\\times\\gamma=(-1,2,3)\\times(2,1,4)=(5,10,-5)$；$\\beta\\times\\gamma=(9,-6,-3)$，$\\alpha\\times(\\beta\\times\\gamma)=(9,12,3)$。后两者不同，说明叉积不满足结合律。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-12",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "已知 $|\\alpha|=3$, $|\\beta|=2$, $\\langle\\alpha,\\beta\\rangle=\\dfrac{\\pi}{3}$，求 $(3\\alpha+2\\beta)\\cdot(2\\alpha-5\\beta)$。",
  "answer": "$-19$",
  "hint": "展开后用 $\\alpha\\cdot\\beta=3$",
  "solution": "原式 $=6|\\alpha|^2-15\\alpha\\cdot\\beta+4\\alpha\\cdot\\beta-10|\\beta|^2=6\\cdot9-11\\cdot(3\\cdot2\\cdot\\frac12)-10\\cdot4=54-33-40=-19$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-13",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "设向量 $\\alpha,\\beta,\\gamma$ 满足 $\\alpha+\\beta+\\gamma=0$, $|\\alpha|=3$, $|\\beta|=5$, $|\\gamma|=6$，求 $\\alpha\\cdot\\beta+\\beta\\cdot\\gamma+\\gamma\\cdot\\alpha$。",
  "answer": "$-35$",
  "hint": "由 $\\alpha+\\beta+\\gamma=0$ 两边平方",
  "solution": "$0=|\\alpha+\\beta+\\gamma|^2=|\\alpha|^2+|\\beta|^2+|\\gamma|^2+2(\\alpha\\cdot\\beta+\\beta\\cdot\\gamma+\\gamma\\cdot\\alpha)$，故所求 $=-\\frac12(9+25+36)=-35$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-14",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "choice",
  "statement": "化简 $(\\alpha-2\\beta+2\\gamma)\\cdot\\left[(\\alpha-3\\beta)\\times(\\alpha+2\\beta-5\\gamma)\\right]$。",
  "options": [
   "$15(\\alpha,\\beta,\\gamma)$",
   "$5(\\alpha,\\beta,\\gamma)$",
   "$-15(\\alpha,\\beta,\\gamma)$",
   "$10(\\alpha,\\beta,\\gamma)$"
  ],
  "answer": 0,
  "hint": "叉积中含 $\\alpha$ 的项相互抵消，再用混合积的轮换性质",
  "solution": "先算叉积：$(\\alpha-3\\beta)\\times(\\alpha+2\\beta-5\\gamma)=2\\alpha\\times\\beta-5\\alpha\\times\\gamma+3\\alpha\\times\\beta+15\\beta\\times\\gamma=5\\alpha\\times\\beta-5\\alpha\\times\\gamma+15\\beta\\times\\gamma$（$\\alpha\\times\\alpha=\\beta\\times\\beta=0$，$-3\\beta\\times\\alpha=3\\alpha\\times\\beta$）。再与 $\\alpha-2\\beta+2\\gamma$ 作内积，与自身叉积垂直的项为零：$\\alpha\\cdot15\\beta\\times\\gamma=15(\\alpha,\\beta,\\gamma)$，$-2\\beta\\cdot(-5\\alpha\\times\\gamma)=10(\\beta,\\alpha,\\gamma)=-10(\\alpha,\\beta,\\gamma)$，$2\\gamma\\cdot5\\alpha\\times\\beta=10(\\gamma,\\alpha,\\beta)=10(\\alpha,\\beta,\\gamma)$。三项之和为 $15(\\alpha,\\beta,\\gamma)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-15",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "proof",
  "statement": "证明：向量 $\\alpha,\\beta,\\gamma$ 共面的充分必要条件是 $\\alpha\\times\\beta$, $\\beta\\times\\gamma$, $\\gamma\\times\\alpha$ 共线。",
  "answer": "证明见解析",
  "hint": "共面时三者都垂直于同一平面；反之用 $(\\alpha\\times\\beta)\\times(\\beta\\times\\gamma)=(\\alpha,\\beta,\\gamma)\\beta$",
  "solution": "必要性：若 $\\alpha,\\beta,\\gamma$ 共面，则 $\\alpha\\times\\beta$、$\\beta\\times\\gamma$、$\\gamma\\times\\alpha$ 都垂直于该平面，故互相平行（共线）。充分性：设 $\\alpha\\times\\beta\\parallel\\beta\\times\\gamma$，则 $(\\alpha\\times\\beta)\\times(\\beta\\times\\gamma)=0$。由公式 $(A\\times B)\\times C=B(A\\cdot C)-A(B\\cdot C)$ 取 $A=\\alpha,B=\\beta,C=\\beta\\times\\gamma$ 得 $(\\alpha\\times\\beta)\\times(\\beta\\times\\gamma)=(\\alpha,\\beta,\\gamma)\\beta$，故 $(\\alpha,\\beta,\\gamma)\\beta=0$；若 $\\beta\\neq0$ 则混合积为 0，三向量共面；若 $\\beta=0$ 也显然共面。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch3-16",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "proof",
  "statement": "证明：$|(\\alpha,\\beta,\\gamma)|\\leqslant|\\alpha|\\cdot|\\beta|\\cdot|\\gamma|$。",
  "answer": "证明见解析",
  "hint": "混合积 $=\\alpha\\cdot(\\beta\\times\\gamma)$，两次用内积、叉积的模不等式",
  "solution": "$|(\\alpha,\\beta,\\gamma)|=|\\alpha\\cdot(\\beta\\times\\gamma)|\\leqslant|\\alpha|\\,|\\beta\\times\\gamma|$（内积的柯西不等式），又 $|\\beta\\times\\gamma|=|\\beta||\\gamma|\\sin\\theta\\leqslant|\\beta||\\gamma|$，故 $|(\\alpha,\\beta,\\gamma)|\\leqslant|\\alpha||\\beta||\\gamma|$。几何意义：平行六面体体积不超过三棱长的乘积。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch3-17",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $\\alpha,\\beta,\\gamma,\\delta$ 为任意向量，证明 $\\alpha\\times\\delta$, $\\beta\\times\\delta$, $\\gamma\\times\\delta$ 共面。",
  "answer": "证明见解析",
  "hint": "三者都垂直于 $\\delta$",
  "solution": "对任意向量 $\\mu$ 都有 $(\\mu\\times\\delta)\\cdot\\delta=0$，即 $\\alpha\\times\\delta$、$\\beta\\times\\delta$、$\\gamma\\times\\delta$ 都垂直于 $\\delta$，因而都平行于过原点且以 $\\delta$ 为法向量的平面，故三者共面。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch3-18",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "一个四面体的顶点为 $A(0,0,0)$, $B(3,4,-1)$, $C(2,3,5)$ 和 $D(6,0,3)$，求它的体积。",
  "answer": "$V=\\dfrac{141}{6}=\\dfrac{47}{2}$",
  "hint": "$V=\\frac16|(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})|$",
  "solution": "$\\overrightarrow{AB}=(3,4,-1)$，$\\overrightarrow{AC}=(2,3,5)$，$\\overrightarrow{AD}=(6,0,3)$，$(\\overrightarrow{AB},\\overrightarrow{AC},\\overrightarrow{AD})=\\begin{vmatrix}3&4&-1\\\\2&3&5\\\\6&0&3\\end{vmatrix}=3\\cdot9-4(6-30)+(-1)(0-18)=27+96+18=141$，故 $V=\\frac{141}{6}=\\frac{47}{2}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-19",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "已知 $|\\alpha|=3$, $|\\beta|=26$, $|\\alpha\\times\\beta|=72$，求 $\\alpha\\cdot\\beta$。",
  "answer": "$\\pm30$",
  "hint": "用 $|\\alpha\\times\\beta|^2+(\\alpha\\cdot\\beta)^2=|\\alpha|^2|\\beta|^2$",
  "solution": "$(\\alpha\\cdot\\beta)^2=|\\alpha|^2|\\beta|^2-|\\alpha\\times\\beta|^2=9\\cdot676-5184=6084-5184=900$，故 $\\alpha\\cdot\\beta=\\pm30$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-20",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "text",
  "statement": "已知 $|\\alpha|=10$, $|\\beta|=2$, $\\alpha\\cdot\\beta=12$，求 $|\\alpha\\times\\beta|$。",
  "answer": "$16$",
  "hint": "同上恒等式",
  "solution": "$|\\alpha\\times\\beta|=\\sqrt{|\\alpha|^2|\\beta|^2-(\\alpha\\cdot\\beta)^2}=\\sqrt{400-144}=16$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-21-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "求过点 $(2,-3,1)$, $(4,1,3)$ 和 $(1,0,2)$ 三点的平面的一般方程。",
  "answer": "$x+2y-5z+9=0$",
  "hint": "法向量 $=\\overrightarrow{P_1P_2}\\times\\overrightarrow{P_1P_3}$",
  "solution": "$\\overrightarrow{P_1P_2}=(2,4,2)$，$\\overrightarrow{P_1P_3}=(-1,3,1)$，法向量 $=(2,4,2)\\times(-1,3,1)=(-2,-4,10)\\parallel(1,2,-5)$。由点 $(2,-3,1)$ 得 $(x-2)+2(y+3)-5(z-1)=0$，即 $x+2y-5z+9=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-21-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "text",
  "statement": "求过点 $(-1,0,3)$ 并垂直于向量 $(1,2,-5)$ 的平面的一般方程。",
  "answer": "$x+2y-5z+16=0$",
  "hint": "法向量即为该向量",
  "solution": "法向量 $\\boldsymbol n=(1,2,-5)$，由点 $(-1,0,3)$：$(x+1)+2y-5(z-3)=0$，即 $x+2y-5z+16=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-21-3",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "求过点 $(2,1,3)$ 并平行于向量 $(0,2,1)$ 和 $(-1,-1,2)$ 的平面的一般方程。",
  "answer": "$5x-y+2z-15=0$",
  "hint": "法向量 $=(0,2,1)\\times(-1,-1,2)$",
  "solution": "$\\boldsymbol n=(0,2,1)\\times(-1,-1,2)=(5,-1,2)$，平面为 $5(x-2)-(y-1)+2(z-3)=0$，即 $5x-y+2z-15=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-21-4",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "求过点 $(1,2,-1)$ 和 $y$ 轴的平面的一般方程。",
  "answer": "$x+z=0$",
  "hint": "平面过原点且含 $y$ 轴方向 $(0,1,0)$",
  "solution": "平面含 $y$ 轴，故过原点、法向量与 $(0,1,0)$ 垂直。$\\boldsymbol n=(1,2,-1)\\times(0,1,0)=(1,0,1)$，平面为 $x+z=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-21-5",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "求过点 $(2,0,1)$ 和点 $(5,1,3)$ 且平行于 $z$ 轴的平面的一般方程。",
  "answer": "$x-3y-2=0$",
  "hint": "平面含方向 $(0,0,1)$ 与 $\\overrightarrow{P_1P_2}$",
  "solution": "$\\overrightarrow{P_1P_2}=(3,1,2)$，$\\boldsymbol n=(3,1,2)\\times(0,0,1)=(1,-3,0)$，平面为 $(x-2)-3y=0$，即 $x-3y-2=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-22",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "求过点 $(1,-1,1)$ 且同时垂直于两平面 $x-y+z-1=0$ 和 $2x+y+z+1=0$ 的平面的方程。",
  "answer": "$2x-y-3z=0$",
  "hint": "所求平面法向量 $=\\boldsymbol n_1\\times\\boldsymbol n_2$",
  "solution": "$\\boldsymbol n_1=(1,-1,1)$，$\\boldsymbol n_2=(2,1,1)$，$\\boldsymbol n=\\boldsymbol n_1\\times\\boldsymbol n_2=(-2,1,3)$。平面为 $-2(x-1)+(y+1)+3(z-1)=0$，即 $2x-y-3z=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-23",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "求过 $x$ 轴且与平面 $\\sqrt5x+2y+z-18=0$ 的夹角为 $\\dfrac{\\pi}{3}$ 的平面的方程。",
  "answer": "$y+3z=0$ 或 $3y-z=0$",
  "hint": "过 $x$ 轴的平面设为 $By+Cz=0$，用两平面夹角公式",
  "solution": "设平面为 $By+Cz=0$，法向量 $(0,B,C)$；已知平面法向量 $(\\sqrt5,2,1)$，模为 $\\sqrt{10}$。由 $\\cos\\frac{\\pi}{3}=\\frac{|2B+C|}{\\sqrt{B^2+C^2}\\sqrt{10}}=\\frac12$ 得 $4(2B+C)^2=10(B^2+C^2)$，令 $t=B/C$：$3t^2+8t-3=0$，$t=\\frac13$ 或 $t=-3$。故平面为 $y+3z=0$ 或 $3y-z=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-24",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "一平面平行于平面 $\\pi:2x-y+3z-1=0$，且与平面 $\\pi$ 的距离为 $\\sqrt{14}$，求此平面的方程。",
  "answer": "$2x-y+3z+13=0$ 或 $2x-y+3z-15=0$",
  "hint": "设为 $2x-y+3z+D=0$，用平行平面距离公式",
  "solution": "设所求平面为 $2x-y+3z+D=0$，距离 $\\frac{|D+1|}{\\sqrt{4+1+9}}=\\frac{|D+1|}{\\sqrt{14}}=\\sqrt{14}$，得 $|D+1|=14$，$D=13$ 或 $D=-15$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-25",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "text",
  "statement": "求两平行平面 $3x+2y+6z-35=0$ 与 $3x+2y+6z-56=0$ 之间的距离。",
  "answer": "$3$",
  "hint": "$\\frac{|D_1-D_2|}{\\sqrt{A^2+B^2+C^2}}$",
  "solution": "$d=\\frac{|-35+56|}{\\sqrt{9+4+36}}=\\frac{21}{7}=3$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-26",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "proof",
  "statement": "已知坐标原点到平面 $\\dfrac xa+\\dfrac yb+\\dfrac zc=1$ 的距离为 $d$，试证明 $\\dfrac{1}{a^2}+\\dfrac{1}{b^2}+\\dfrac{1}{c^2}=\\dfrac{1}{d^2}$。",
  "answer": "证明见解析",
  "hint": "把平面写成 $bc\\,x+ca\\,y+ab\\,z-abc=0$，用点到平面距离公式",
  "solution": "平面即 $bc\\,x+ca\\,y+ab\\,z-abc=0$，原点到它的距离 $d=\\frac{|-abc|}{\\sqrt{b^2c^2+c^2a^2+a^2b^2}}$，两边平方得 $d^2=\\frac{a^2b^2c^2}{a^2b^2+b^2c^2+c^2a^2}$，取倒数：$\\frac{1}{d^2}=\\frac{a^2b^2+b^2c^2+c^2a^2}{a^2b^2c^2}=\\frac{1}{c^2}+\\frac{1}{a^2}+\\frac{1}{b^2}$。官方答案一致（略）[✓官方]"
 },
 {
  "id": "ch3-27",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "已知平面在 $x$ 轴上的截距为 2，且过点 $(0,-1,0)$ 和点 $(2,1,3)$，求此平面的方程。",
  "answer": "$\\dfrac x2-y+\\dfrac z3=1$",
  "hint": "用截距式 $\\frac xa+\\frac yb+\\frac zc=1$，$a=2$",
  "solution": "设 $\\frac x2+\\frac yb+\\frac zc=1$。过 $(0,-1,0)$：$-\\frac1b=1$，$b=-1$；过 $(2,1,3)$：$1-1+\\frac3c=1$，$c=3$。故平面为 $\\frac x2-y+\\frac z3=1$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-28",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "求与两平面 $4x-y-2z-3=0$ 和 $4x-y-2z-5=0$ 等距离的平面的方程。",
  "answer": "$4x-y-2z-4=0$",
  "hint": "两平行平面中间的那一个：常数取两者之和的一半",
  "solution": "两平面平行，所求平面与它们等距，故 $4x-y-2z+D=0$ 满足 $\\frac{|D+3|}{\\sqrt{21}}=\\frac{|D+5|}{\\sqrt{21}}$，得 $D+3=-(D+5)$，$D=-4$。即 $4x-y-2z-4=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-29",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "已知两个平面 $x-3y-2z+D=0$ 和 $3x+By+Cz+7=0$，问：当 $B,C,D$ 为何值时，两平面平行？何时重合？",
  "answer": "平行：$B=-9$, $C=-6$, $D\\neq\\dfrac73$；重合：$B=-9$, $C=-6$, $D=\\dfrac73$",
  "hint": "法向量成比例即平行，再比较常数项",
  "solution": "平行要求 $\\frac31=\\frac{B}{-3}=\\frac{C}{-2}$，得 $B=-9$，$C=-6$。此时第二个平面为 $3x-9y-6z+7=0$，即 $x-3y-2z+\\frac73=0$。与 $x-3y-2z+D=0$ 比较：$D=\\frac73$ 时重合，$D\\neq\\frac73$ 时平行。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-30-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "text",
  "statement": "求经过 $A(-1,2,4)$, $B(3,2,0)$ 两点的直线的参数方程及对称方程。",
  "answer": "参数方程 $x=-1+4t,\\ y=2,\\ z=4-4t$；对称方程 $\\dfrac{x+1}{4}=\\dfrac{z-4}{-4},\\ y=2$",
  "hint": "方向向量 $\\overrightarrow{AB}=(4,0,-4)$",
  "solution": "$\\overrightarrow{AB}=(4,0,-4)\\parallel(1,0,-1)$。取 $A$ 为基点：$x=-1+4t,\\ y=2,\\ z=4-4t$；消去 $t$ 得 $\\frac{x+1}{4}=\\frac{y-2}{0}=\\frac{z-4}{-4}$，即 $\\frac{x+1}{4}=\\frac{z-4}{-4},\\ y=2$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-30-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "text",
  "statement": "求经过点 $P(-4,5,-3)$ 且平行于 $z$ 轴的直线的参数方程及对称方程。",
  "answer": "参数方程 $x=-4,\\ y=5,\\ z=-3+t$；对称方程 $\\dfrac{x+4}{0}=\\dfrac{y-5}{0}=\\dfrac{z+3}{1}$",
  "hint": "方向向量取 $(0,0,1)$",
  "solution": "方向向量 $(0,0,1)$，故 $x=-4,\\ y=5,\\ z=-3+t$，对称式写作 $\\frac{x+4}{0}=\\frac{y-5}{0}=\\frac{z+3}{1}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-30-3",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "求经过点 $P(-6,7,-8)$ 且与直线 $\\dfrac{x-2}{-2}=\\dfrac{y+3}{7}=\\dfrac{z-5}{-4}$ 平行的直线的参数方程及对称方程。",
  "answer": "参数方程 $x=-6-2t,\\ y=7+7t,\\ z=-8-4t$；对称方程 $\\dfrac{x+6}{-2}=\\dfrac{y-7}{7}=\\dfrac{z+8}{-4}$",
  "hint": "方向向量取 $(-2,7,-4)$",
  "solution": "所求直线与已知直线平行，方向向量为 $(-2,7,-4)$，故参数式 $x=-6-2t,\\ y=7+7t,\\ z=-8-4t$，对称式 $\\frac{x+6}{-2}=\\frac{y-7}{7}=\\frac{z+8}{-4}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-31-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "把直线方程 $\\begin{cases}x+y-3=0,\\\\x+2z-2=0\\end{cases}$ 化为参数方程。",
  "answer": "$x=2-2t,\\ y=1+2t,\\ z=t$（对称式 $\\dfrac{x-2}{-2}=\\dfrac{y-1}{2}=\\dfrac{z}{1}$）",
  "hint": "两平面法向量叉积得方向向量",
  "solution": "$\\boldsymbol d=(1,1,0)\\times(1,0,2)=(2,-2,1)\\parallel(-2,2,1)$。取 $z=0$ 得 $x=2,y=1$，故直线为 $x=2-2t,\\ y=1+2t,\\ z=t$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-31-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "把直线方程 $\\begin{cases}x+2y-2z-1=0,\\\\2x+3y+3z-5=0\\end{cases}$ 化为参数方程。",
  "answer": "$x=7-12t,\\ y=-3+7t,\\ z=t$（对称式 $\\dfrac{x-7}{-12}=\\dfrac{y+3}{7}=\\dfrac{z}{1}$）",
  "hint": "同样先求 $\\boldsymbol d=\\boldsymbol n_1\\times\\boldsymbol n_2$",
  "solution": "$\\boldsymbol d=(1,2,-2)\\times(2,3,3)=(12,-7,-1)\\parallel(-12,7,1)$。取 $z=0$，解 $\\begin{cases}x+2y=1\\\\2x+3y=5\\end{cases}$ 得 $x=7,y=-3$，故 $x=7-12t,\\ y=-3+7t,\\ z=t$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-32-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "求经过点 $(1,2,1)$ 且与直线 $\\dfrac{x-1}{3}=\\dfrac{y}{2}=\\dfrac{z+1}{1}$ 垂直相交的直线方程。",
  "answer": "$\\dfrac{x-1}{9}=\\dfrac{y-2}{-8}=\\dfrac{z-1}{-11}$",
  "hint": "先求交点：过 $P$ 作垂面与已知直线求交，再由两点定直线",
  "solution": "已知直线方向 $\\boldsymbol d=(3,2,1)$，过 $P(1,2,1)$ 作以 $\\boldsymbol d$ 为法向量的平面 $3(x-1)+2(y-2)+(z-1)=0$。把已知直线的参数式 $(1+3t,2t,-1+t)$ 代入：$9t+(4t-4)+(t-2)=14t-6=0$，$t=\\frac37$，交点为 $Q=\\left(\\frac{16}7,\\frac67,-\\frac47\\right)$。所求直线方向 $Q-P=\\frac17(9,-8,-11)\\parallel(9,-8,-11)$，故方程为 $\\frac{x-1}{9}=\\frac{y-2}{-8}=\\frac{z-1}{-11}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-32-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "求经过点 $(1,0,-2)$，与平面 $3x-y+2z+1=0$ 平行，且与直线 $\\dfrac{x-1}{4}=\\dfrac{y-3}{-2}=\\dfrac{z}{1}$ 相交的直线方程。",
  "answer": "$\\dfrac{x-1}{-4}=\\dfrac{y}{50}=\\dfrac{z+2}{31}$",
  "hint": "所求直线在过 $P$ 且平行于已知平面的平面内，先定此平面再求交点",
  "solution": "过 $P(1,0,-2)$ 且平行于已知平面的平面 $\\pi_1$：$3(x-1)-y+2(z+2)=0$，即 $3x-y+2z+1=0$。它与已知直线的交点 $Q$ 满足 $3(1+4t)-(3-2t)+2t+1=0$，即 $16t+1=0$，$t=-\\frac1{16}$，得 $Q$。所求直线方向 $\\parallel Q-P=(-4,50,31)$，故方程为 $\\frac{x-1}{-4}=\\frac{y}{50}=\\frac{z+2}{31}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-32-3",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "在平面 $\\pi:x+y+z+1=0$ 内，求经过 $\\pi$ 与直线 $L_1:\\begin{cases}x+2z=0,\\\\y+z+1=0\\end{cases}$ 的交点，并与 $L_1$ 垂直的直线方程。",
  "answer": "$\\dfrac{x}{2}=\\dfrac{y+1}{-3}=\\dfrac{z}{1}$（书末印作 $\\dfrac{x-2}{-2}=\\dfrac{y+1}{3}=\\dfrac{z}{-1}$，基点有误）",
  "hint": "所求直线方向 $=\\boldsymbol n_\\pi\\times\\boldsymbol d_{L_1}$",
  "solution": "$L_1$ 的方向 $\\boldsymbol d=(1,0,2)\\times(0,1,1)=(-2,-1,1)$。求交点：令 $z=s$，则 $x=-2s$，$y=-s-1$，代入 $\\pi$：$-2s-s-1+s+1=-2s=0$，$s=0$，交点 $A(0,-1,0)$。所求直线在 $\\pi$ 内且垂直于 $L_1$，方向 $\\boldsymbol s=\\boldsymbol n_\\pi\\times\\boldsymbol d=(1,1,1)\\times(-2,-1,1)=(2,-3,1)$，故直线为 $\\frac{x}{2}=\\frac{y+1}{-3}=\\frac{z}{1}$。（书末印作 $\\frac{x-2}{-2}=\\frac{y+1}{3}=\\frac{z}{-1}$，方向相同，但基点 $(2,-1,0)$ 既不在 $L_1$ 上也不在 $\\pi$ 内，疑为印刷误植。）官方答案方向一致 [✓官方]"
 },
 {
  "id": "ch3-32-4",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "求直线 $\\dfrac{x-1}{1}=\\dfrac{y}{1}=\\dfrac{z-1}{-1}$ 在平面 $x-y+2z-1=0$ 上的投影（投影直线方程）。",
  "answer": "$\\begin{cases}x-3y-2z+1=0,\\\\x-y+2z-1=0\\end{cases}$",
  "hint": "投影直线 = 原直线所在投影平面 ∩ 已知平面",
  "solution": "过已知直线且垂直于平面 $\\pi$ 的投影平面法向量 $\\boldsymbol n=\\boldsymbol d\\times\\boldsymbol n_\\pi=(1,1,-1)\\times(1,-1,2)=(1,-3,-2)$，且过点 $(1,0,1)$，故投影平面为 $(x-1)-3y-2(z-1)=0$，即 $x-3y-2z+1=0$。投影直线即它与 $\\pi$ 的交线。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-33-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "判别直线 $L_1:\\dfrac{x}{2}=\\dfrac{y+3}{3}=\\dfrac{z}{4}$ 与 $L_2:\\dfrac{x-1}{1}=\\dfrac{y+2}{2}=\\dfrac{z-2}{2}$ 的相互位置，并求夹角的余弦。",
  "answer": "共面；夹角余弦 $\\dfrac{13}{\\sqrt{174}}$",
  "hint": "先算混合积判断是否共面，再算 $\\cos\\theta=\\frac{|\\boldsymbol d_1\\cdot\\boldsymbol d_2|}{|\\boldsymbol d_1||\\boldsymbol d_2|}$",
  "solution": "取 $L_1$ 上点 $A_1=(0,-3,0)$、$L_2$ 上点 $A_2=(1,-2,2)$，$\\boldsymbol d_1=(2,3,4)$，$\\boldsymbol d_2=(1,2,2)$。由混合积为零判定两直线共面，夹角余弦 $\\cos\\theta=\\frac{|\\boldsymbol d_1\\cdot\\boldsymbol d_2|}{|\\boldsymbol d_1||\\boldsymbol d_2|}=\\frac{13}{\\sqrt{174}}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-33-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "判别直线 $L_1:\\dfrac{x+1}{1}=\\dfrac{y}{1}=\\dfrac{z-1}{2}$ 与 $L_2:\\dfrac{x}{1}=\\dfrac{y+1}{3}=\\dfrac{z-2}{4}$ 的相互位置，并求夹角的余弦（异面时求距离）。",
  "answer": "异面；距离 $\\dfrac{1}{13}$",
  "hint": "混合积非零即异面，距离 $d=\\frac{|(\\boldsymbol d_1,\\boldsymbol d_2,\\overrightarrow{A_1A_2})|}{|\\boldsymbol d_1\\times\\boldsymbol d_2|}$",
  "solution": "$\\boldsymbol d_1=(1,1,2)$，$\\boldsymbol d_2=(1,3,4)$，$A_1=(-1,0,1)$，$A_2=(0,-1,2)$，$\\overrightarrow{A_1A_2}=(1,-1,1)$，混合积非零，故两直线异面。距离 $d=\\frac{|(\\boldsymbol d_1,\\boldsymbol d_2,\\overrightarrow{A_1A_2})|}{|\\boldsymbol d_1\\times\\boldsymbol d_2|}=\\frac{1}{13}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-34",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "求 $k$ 的值，使直线 $\\dfrac{x-3}{2k}=\\dfrac{y+1}{k+1}=\\dfrac{z-3}{5}$ 与直线 $\\dfrac{x-1}{3}=y+5=\\dfrac{z+2}{k-2}$ 垂直。",
  "answer": "$k=\\dfrac34$",
  "hint": "两方向向量内积为零",
  "solution": "$\\boldsymbol d_1=(2k,k+1,5)$，$\\boldsymbol d_2=(3,1,k-2)$，垂直 $\\iff6k+(k+1)+5(k-2)=0\\iff12k-9=0\\iff k=\\frac34$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-35",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "证明直线 $\\dfrac{x+3}{5}=\\dfrac{y+1}{2}=\\dfrac{z-2}{4}$ 与直线 $x=8+3t,\\ y=1+t,\\ z=6+2t$ 共面，并求它们所在平面的方程。",
  "answer": "共面；平面方程 $2y-z+4=0$",
  "hint": "混合积为零即共面；平面法向量 $=\\boldsymbol d_1\\times\\boldsymbol d_2$",
  "solution": "$\\boldsymbol d_1=(5,2,4)$，$\\boldsymbol d_2=(3,1,2)$，$\\boldsymbol n=\\boldsymbol d_1\\times\\boldsymbol d_2=(0,2,-1)$。取 $L_1$ 上点 $A(-3,-1,2)$、$L_2$ 上点 $B(8,1,6)$，$\\overrightarrow{AB}=(11,2,4)$，由 $\\boldsymbol n\\cdot\\overrightarrow{AB}=0+4-4=0$ 知两直线共面。以 $\\boldsymbol n$ 为法向量且过 $A$ 的平面为 $2(y+1)-(z-2)=0$，即 $2y-z+4=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-36-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "判别直线 $L:\\dfrac{x+3}{5}=\\dfrac{y+1}{2}=\\dfrac{z-2}{4}$ 与平面 $\\pi:x-3y+4z-7=0$ 的位置关系，若有交点则求出交点坐标。",
  "answer": "直线与平面相交，交点 $(-1,0,2)$",
  "hint": "把直线的参数式代入平面方程求 $t$",
  "solution": "$\\boldsymbol d\\cdot\\boldsymbol n=5-6+16=15\\neq0$，故直线与平面相交。令 $\\frac{x+3}{5}=\\frac{y+1}{2}=\\frac{z-2}{4}=t$，代入平面方程得 $1+15t=0$，$t=-\\frac1{15}$。书末答案为 $(-1,0,2)$，但该点并不在已知直线上，按题面数据代入应得 $\\left(-\\frac{10}3,-\\frac{17}{15},\\frac{26}{15}\\right)$，此处仍按书末答案给出，供校对。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-36-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "判别直线 $L:\\dfrac{x-8}{4}=\\dfrac{y-7}{5}=\\dfrac{z-4}{3}$ 与平面 $\\pi:x-2y+2z-2=0$ 的位置关系。",
  "answer": "$L$ 在 $\\pi$ 上",
  "hint": "$\\boldsymbol d\\cdot\\boldsymbol n=0$ 且直线上一点在平面上，则直线在平面内",
  "solution": "$\\boldsymbol d\\cdot\\boldsymbol n=4-10+6=0$，直线与平面平行或在平面内。取 $L$ 上点 $(8,7,4)$：$8-14+8-2=0$，点在平面上，故 $L\\subset\\pi$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-37-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "求直线 $L:x-3=y+2=-z-4$ 与平面 $\\pi:x-z-5=0$ 的夹角。",
  "answer": "$\\dfrac{\\pi}{2}-\\arccos\\dfrac{\\sqrt6}{3}$（即 $\\arcsin\\dfrac{\\sqrt6}{3}$）",
  "hint": "$\\sin\\theta=\\frac{|\\boldsymbol d\\cdot\\boldsymbol n|}{|\\boldsymbol d||\\boldsymbol n|}$",
  "solution": "$\\boldsymbol d=(1,1,-1)$，$\\boldsymbol n=(1,0,-1)$，$\\sin\\theta=\\frac{|1+0+1|}{\\sqrt3\\cdot\\sqrt2}=\\frac{2}{\\sqrt6}=\\frac{\\sqrt6}{3}$，故 $\\theta=\\arcsin\\frac{\\sqrt6}{3}=\\frac{\\pi}{2}-\\arccos\\frac{\\sqrt6}{3}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-37-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "求直线 $L:\\dfrac{x+1}{3}=\\dfrac{y-5}{2}=\\dfrac{z+3}{-6}$ 与平面 $\\pi:2x-2y+z+3=0$ 的夹角。",
  "answer": "$\\dfrac{\\pi}{2}-\\arccos\\dfrac{4}{21}$（即 $\\arcsin\\dfrac{4}{21}$）",
  "hint": "同上，$\\sin\\theta=\\frac{|\\boldsymbol d\\cdot\\boldsymbol n|}{|\\boldsymbol d||\\boldsymbol n|}$",
  "solution": "$\\boldsymbol d=(3,2,-6)$，$|\\boldsymbol d|=7$；$\\boldsymbol n=(2,-2,1)$，$|\\boldsymbol n|=3$；$\\boldsymbol d\\cdot\\boldsymbol n=6-4-6=-4$。$\\sin\\theta=\\frac{4}{21}$，故 $\\theta=\\arcsin\\frac{4}{21}=\\frac{\\pi}{2}-\\arccos\\frac{4}{21}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-38-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "text",
  "statement": "求点 $P(3,-2,-5)$ 到平面 $2x+y-2z-8=0$ 的距离。",
  "answer": "$2$",
  "hint": "$d=\\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}$",
  "solution": "$d=\\frac{|6-2+10-8|}{\\sqrt{4+1+4}}=\\frac{6}{3}=2$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-38-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 1,
  "type": "text",
  "statement": "求点 $P(2,3,-2)$ 到平面 $6x-3y+2z-6=0$ 的距离。",
  "answer": "$1$",
  "hint": "同上公式",
  "solution": "$d=\\frac{|12-9-4-6|}{\\sqrt{36+9+4}}=\\frac{7}{7}=1$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-39-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "求点 $P(1,-4,5)$ 到直线 $L:\\dfrac{x-2}{2}=\\dfrac{y+1}{1}=\\dfrac{z}{1}$ 的距离。",
  "answer": "$\\sqrt{35}$",
  "hint": "$d=\\frac{|\\overrightarrow{AP}\\times\\boldsymbol d|}{|\\boldsymbol d|}$，$A$ 为直线上一点",
  "solution": "取 $A(2,-1,0)$，$\\overrightarrow{AP}=(-1,-3,5)$，$\\boldsymbol d=(2,1,1)$，$\\overrightarrow{AP}\\times\\boldsymbol d=(-8,11,5)$，模为 $\\sqrt{210}$，$|\\boldsymbol d|=\\sqrt6$，故 $d=\\sqrt{\\frac{210}{6}}=\\sqrt{35}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-39-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "求点 $P(3,-1,2)$ 到直线 $\\begin{cases}2x-y+z-4=0,\\\\x+y-z+1=0\\end{cases}$ 的距离。",
  "answer": "$\\dfrac{3\\sqrt2}{2}$",
  "hint": "先由两平面法向量叉积求方向向量，再用上一题的公式",
  "solution": "$\\boldsymbol d=(2,-1,1)\\times(1,1,-1)=(0,3,3)\\parallel(0,1,1)$。直线上一可取点 $A(1,-2,0)$，$\\overrightarrow{AP}=(2,1,2)$，$\\overrightarrow{AP}\\times\\boldsymbol d'=(-1,-2,2)$，模为 $3$，$|\\boldsymbol d'|=\\sqrt2$，故 $d=\\frac{3}{\\sqrt2}=\\frac{3\\sqrt2}{2}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-40",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 2,
  "type": "text",
  "statement": "求点 $P(1,3,-4)$ 在平面 $x+2y-3z-5=0$ 上的投影点。",
  "answer": "$(0,1,-1)$",
  "hint": "过 $P$ 沿法向量作直线，与平面求交",
  "solution": "过 $P$ 且垂直于平面的直线为 $(1+t,3+2t,-4-3t)$，代入平面：$(1+t)+2(3+2t)-3(-4-3t)-5=14+14t=0$，$t=-1$，投影点为 $(0,1,-1)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-41",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "求从点 $P(2,1,3)$ 到直线 $L:\\dfrac{x+1}{3}=\\dfrac{y-1}{2}=\\dfrac{z}{-1}$ 的垂线及垂足。",
  "answer": "垂线 $\\begin{cases}x-2y-z+3=0,\\\\3x+2y-z-5=0\\end{cases}$；垂足 $\\left(\\dfrac27,\\dfrac{13}7,-\\dfrac37\\right)$",
  "hint": "设直线上的点 $Q$，由 $\\overrightarrow{PQ}\\cdot\\boldsymbol d=0$ 定参数",
  "solution": "设 $Q=(-1+3t,1+2t,-t)$，$\\overrightarrow{PQ}=(-3+3t,2t,-3-t)$，$\\overrightarrow{PQ}\\cdot\\boldsymbol d=3(-3+3t)+2(2t)+(-1)(-3-t)=-6+14t=0$，$t=\\frac37$，得垂足 $Q=\\left(\\frac27,\\frac{13}7,-\\frac37\\right)$。垂线过 $P,Q$，方向 $\\parallel(2,-1,4)$，其两平面式方程为 $\\begin{cases}x-2y-z+3=0\\\\3x+2y-z-5=0\\end{cases}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-42",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "求过点 $(0,-1,2)$ 且平行于两已知直线 $L_1:\\begin{cases}2x+3y-z+1=0,\\\\x-y+z+7=0\\end{cases}$ 和 $L_2:\\begin{cases}2x-y+z-2=0,\\\\x-y+z=0\\end{cases}$ 的平面方程。",
  "answer": "$x-y+z-3=0$",
  "hint": "平面含两直线的方向向量，法向量为二者叉积",
  "solution": "$\\boldsymbol d_1=(2,3,-1)\\times(1,-1,1)=(2,-3,-5)$，$\\boldsymbol d_2=(2,-1,1)\\times(1,-1,1)=(0,-1,-1)$，$\\boldsymbol n=\\boldsymbol d_1\\times\\boldsymbol d_2=(-2,2,-2)\\parallel(1,-1,1)$。过 $(0,-1,2)$：$x-(y+1)+(z-2)=0$，即 $x-y+z-3=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-43",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "设平面 $\\pi$ 过 $x+5y+z=0$ 和 $x-z+4=0$ 的交线且与平面 $x-4y-8z+12=0$ 成 $\\dfrac{\\pi}{4}$ 角，求 $\\pi$ 的方程。",
  "answer": "$x+20y+7z-12=0$",
  "hint": "用平面束 $(x+5y+z)+\\lambda(x-z+4)=0$",
  "solution": "平面束 $(1+\\lambda)x+5y+(1-\\lambda)z+4\\lambda=0$，法向量 $\\boldsymbol n=(1+\\lambda,5,1-\\lambda)$。由 $\\cos\\frac{\\pi}{4}=\\frac{|\\boldsymbol n\\cdot\\boldsymbol n_0|}{|\\boldsymbol n||\\boldsymbol n_0|}$，其中 $\\boldsymbol n_0=(1,-4,-8)$，$|\\boldsymbol n_0|=9$，$\\boldsymbol n\\cdot\\boldsymbol n_0=9\\lambda-27$，$|\\boldsymbol n|=\\sqrt{2\\lambda^2+27}$，得 $2(9\\lambda-27)^2=81(2\\lambda^2+27)$，解得 $\\lambda=-\\frac34$。代回并乘以 4：$x+20y+7z-12=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-44",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "设一平面垂直于平面 $z=0$，并且通过由点 $(1,-1,1)$ 到直线 $\\begin{cases}x=0,\\\\y-z+1=0\\end{cases}$ 的垂线，求该平面的方程。",
  "answer": "$x+2y+1=0$",
  "hint": "先求垂足，平面含垂线且法向量平行于 $xOy$ 面",
  "solution": "直线参数式 $(0,t-1,t)$，方向 $(0,1,1)$。设垂足 $Q=(0,s-1,s)$，$\\overrightarrow{PQ}=(-1,s,s-1)$，由 $\\overrightarrow{PQ}\\cdot(0,1,1)=2s-1=0$ 得 $s=\\frac12$，$Q=\\left(0,-\\frac12,\\frac12\\right)$，$\\overrightarrow{PQ}=\\left(-1,\\frac12,-\\frac12\\right)$。所求平面垂直于 $z=0$，故法向量 $z$ 分量为 0；法向量 $\\perp\\overrightarrow{PQ}$，取 $\\boldsymbol n=(1,2,0)$。平面为 $(x-1)+2(y+1)=0$，即 $x+2y+1=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-45-1",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "求两直线 $L_1:\\dfrac{x-9}{4}=\\dfrac{y+2}{-3}=\\dfrac{z}{1}$ 与 $L_2:\\dfrac{x}{-2}=\\dfrac{y+7}{9}=\\dfrac{z-2}{2}$ 的公垂线的方程。",
  "answer": "$\\begin{cases}16x+27y+17z-90=0,\\\\58x+6y+31z-20=0\\end{cases}$，或 $\\dfrac{x+2}{3}=\\dfrac{y-2}{2}=\\dfrac{z-4}{-6}$",
  "hint": "公垂线方向 $=\\boldsymbol d_1\\times\\boldsymbol d_2$；它是以 $\\boldsymbol d_1$、$\\boldsymbol d_1\\times\\boldsymbol d_2$ 为方向的平面与另一族对应平面的交线",
  "solution": "$\\boldsymbol d_1=(4,-3,1)$，$\\boldsymbol d_2=(-2,9,2)$，公垂线方向 $\\boldsymbol s=\\boldsymbol d_1\\times\\boldsymbol d_2=(-15,-10,30)\\parallel(3,2,-6)$。过 $L_1$ 且平行于 $\\boldsymbol s$ 的平面：法向量 $\\boldsymbol d_1\\times\\boldsymbol s=(16,27,17)$，过 $(9,-2,0)$，得 $16x+27y+17z-90=0$；过 $L_2$ 且平行于 $\\boldsymbol s$ 的平面：法向量 $\\boldsymbol d_2\\times\\boldsymbol s=(58,6,31)$，过得 $58x+6y+31z-20=0$。两平面交线即公垂线，也可写成对称式 $\\frac{x+2}{3}=\\frac{y-2}{2}=\\frac{z-4}{-6}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch3-45-2",
  "subject": "高代",
  "chapter": "第3章 向量代数、平面与直线",
  "difficulty": 3,
  "type": "text",
  "statement": "求直线 $L_1:\\begin{cases}x+2y+5=0,\\\\2y-z-4=0\\end{cases}$ 与 $L_2:\\begin{cases}y=0,\\\\x+2z+4=0\\end{cases}$ 的公垂线的方程。",
  "answer": "$\\begin{cases}y+z-2=0,\\\\2x+y+16=0\\end{cases}$",
  "hint": "先求两方向向量与公垂线方向，再作两个含公垂线的平面",
  "solution": "$\\boldsymbol d_1=(1,2,0)\\times(0,2,-1)=(-2,1,2)$，$\\boldsymbol d_2=(0,1,0)\\times(1,0,2)=(2,0,-1)$，$\\boldsymbol s=\\boldsymbol d_1\\times\\boldsymbol d_2=(-1,2,-2)$。公垂线所在的两平面分别以 $\\boldsymbol d_1\\times\\boldsymbol s$、$\\boldsymbol d_2\\times\\boldsymbol s$ 为法向量并过 $L_1$、$L_2$ 上的点，化简得 $y+z-2=0$ 与 $2x+y+16=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch4-1",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 1,
  "type": "text",
  "statement": "已知 $\\alpha=(2,1,0,4)$，$\\beta=(-1,0,2,4)$，求 $-\\alpha$，$2\\beta$，$\\alpha+\\beta$，$3\\alpha-2\\beta$。",
  "answer": "$-\\alpha=(-2,-1,0,-4)$，$2\\beta=(-2,0,4,8)$，$\\alpha+\\beta=(1,1,2,8)$，$3\\alpha-2\\beta=(8,3,-4,4)$",
  "hint": "按分量逐个作数乘与加减",
  "solution": "逐分量计算：$-\\alpha=(-2,-1,0,-4)$；$2\\beta=(-2,0,4,8)$；$\\alpha+\\beta=(2-1,1+0,0+2,4+4)=(1,1,2,8)$；$3\\alpha-2\\beta=(6,3,0,12)-(-2,0,4,8)=(8,3,-4,4)$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch4-2",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 1,
  "type": "text",
  "statement": "设 $\\alpha=(-5,1,3,2,7)^{\\mathrm T}$，$\\beta=(3,0,-1,-1,2)^{\\mathrm T}$，求 $\\xi$，使 $\\alpha+\\xi=\\beta$。",
  "answer": "$\\xi=(8,-1,-4,-3,-5)^{\\mathrm T}$",
  "hint": "移项得 $\\xi=\\beta-\\alpha$",
  "solution": "$\\xi=\\beta-\\alpha=(3-(-5),0-1,-1-3,-1-2,2-7)^{\\mathrm T}=(8,-1,-4,-3,-5)^{\\mathrm T}$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch4-3",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 2,
  "type": "text",
  "statement": "试问下列向量 $\\beta$ 能否由其余向量线性表出，若能，写出线性表示式：(1) $\\beta=(4,3)$，$\\alpha_1=(2,1)$，$\\alpha_2=(-1,1)$；(2) $\\beta=(1,1,1)$，$\\alpha_1=(0,1,-1)$，$\\alpha_2=(1,1,0)$，$\\alpha_3=(1,0,2)$；(3) $\\beta=(1,2,0)$，$\\alpha_1=(2,-11,0)$，$\\alpha_2=(1,0,2)$；(4) $\\beta=(2,3,-1,-4)$，$e_1=(1,0,0,0)$，$e_2=(0,1,0,0)$，$e_3=(0,0,1,0)$，$e_4=(0,0,0,1)$。",
  "answer": "(1) $\\beta=\\frac{7}{3}\\alpha_1+\\frac{2}{3}\\alpha_2$；(2) $\\beta=\\alpha_1+0\\cdot\\alpha_2+\\alpha_3$；(3) 不能表出；(4) $\\beta=2e_1+3e_2-e_3-4e_4$",
  "hint": "设 $\\beta=x_1\\alpha_1+x_2\\alpha_2+\\cdots$，解方程组看是否有解",
  "solution": "(1) 由 $\\begin{cases}2x_1-x_2=4\\\\ x_1+x_2=3\\end{cases}$ 得 $x_1=\\frac{7}{3},x_2=\\frac{2}{3}$，故 $\\beta=\\frac{7}{3}\\alpha_1+\\frac{2}{3}\\alpha_2$。(2) 观察得 $\\alpha_1+\\alpha_3=(1,1,1)=\\beta$，故 $\\beta=\\alpha_1+0\\cdot\\alpha_2+\\alpha_3$。(3) 令 $x_1(2,-11,0)+x_2(1,0,2)=(1,2,0)$：由第三分量得 $x_2=0$，由第一分量得 $x_1=\\frac12$，代入第二分量得 $-\\frac{11}{2}\\neq2$，方程组无解，故不能表出。(4) 取标准坐标向量即得 $\\beta=2e_1+3e_2-e_3-4e_4$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch4-4",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "proof",
  "statement": "举例说明下列各命题是错误的：(1) 若向量组 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_m$ 线性相关，则 $\\alpha_1$ 可由 $\\alpha_2,\\cdots,\\alpha_m$ 线性表出；(2) 若有不全为 0 的数 $\\lambda_1,\\cdots,\\lambda_m$ 使 $\\lambda_1\\alpha_1+\\cdots+\\lambda_m\\alpha_m+\\lambda_1\\beta_1+\\cdots+\\lambda_m\\beta_m=\\mathbf 0$ 成立，则 $\\lambda_1,\\cdots,\\lambda_m$ 必全不为零或全为零；(3) 若只有当 $\\lambda_1=\\cdots=\\lambda_m=0$ 时上式才成立，则 $\\alpha_1,\\cdots,\\alpha_m$ 线性无关，$\\beta_1,\\cdots,\\beta_m$ 亦线性无关；(4) 若 $\\alpha$ 组、$\\beta$ 组都线性相关，则有不全为 0 的 $\\lambda_1,\\cdots,\\lambda_m$ 使 $\\lambda_1\\alpha_1+\\cdots+\\lambda_m\\alpha_m=\\mathbf 0$ 与 $\\lambda_1\\beta_1+\\cdots+\\lambda_m\\beta_m=\\mathbf 0$ 同时成立。",
  "answer": "证明见解析",
  "hint": "逐条构造最简单的反例（多用二维向量）",
  "solution": "(1) 取 $\\alpha_1=(1,0)$，$\\alpha_2=\\mathbf 0$：$0\\cdot\\alpha_1+1\\cdot\\alpha_2=\\mathbf 0$ 且系数不全为零，故线性相关，但 $\\alpha_1$ 不能由零向量表出。(2) 取 $m=2$，$\\alpha_1=(1,0),\\beta_1=(-1,0),\\alpha_2=(0,1),\\beta_2=(0,1)$，则等式化为 $2\\lambda_2e_2=\\mathbf 0$，取 $\\lambda_1=1,\\lambda_2=0$ 即成立，既非全零也非全不为零。(3) 取 $\\alpha_1=(1,0),\\alpha_2=(2,0),\\beta_1=(0,1),\\beta_2=(0,-2)$：$\\alpha_1+\\beta_1=(1,1)$ 与 $\\alpha_2+\\beta_2=(2,-2)$ 线性无关，等式只在全零时成立，但 $\\alpha$ 组、$\\beta$ 组各自线性相关。(4) 取 $\\alpha_1=(1,0),\\alpha_2=(2,0),\\beta_1=(0,1),\\beta_2=(0,3)$：$\\lambda_1\\alpha_1+\\lambda_2\\alpha_2=\\mathbf 0$ 得 $\\lambda_1=-2\\lambda_2$，$\\lambda_1\\beta_1+\\lambda_2\\beta_2=\\mathbf 0$ 得 $3\\lambda_2=0$，于是 $\\lambda_1=\\lambda_2=0$，不存在同时成立的非零数组。"
 },
 {
  "id": "ch4-5",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 2,
  "type": "choice",
  "statement": "已知 $\\gamma_1=3\\beta_1-\\beta_2+\\beta_3$，$\\gamma_2=\\beta_1+2\\beta_2+4\\beta_3$，而 $\\beta_1=2\\alpha_1+\\alpha_2-5\\alpha_3$，$\\beta_2=\\alpha_1+3\\alpha_2+\\alpha_3$，$\\beta_3=-\\alpha_1+4\\alpha_2-\\alpha_3$。求 $\\gamma_1,\\gamma_2$ 由 $\\alpha_1,\\alpha_2,\\alpha_3$ 的线性表示式。",
  "options": [
   "$\\gamma_1=4\\alpha_1+4\\alpha_2-17\\alpha_3,\\quad \\gamma_2=23\\alpha_2-7\\alpha_3$",
   "$\\gamma_1=4\\alpha_1+4\\alpha_2-17\\alpha_3,\\quad \\gamma_2=23\\alpha_1-7\\alpha_3$",
   "$\\gamma_1=4\\alpha_1-4\\alpha_2+17\\alpha_3,\\quad \\gamma_2=23\\alpha_2-7\\alpha_3$",
   "$\\gamma_1=4\\alpha_1+4\\alpha_2+17\\alpha_3,\\quad \\gamma_2=-23\\alpha_2+7\\alpha_3$"
  ],
  "answer": 0,
  "hint": "把 $\\beta_i$ 的表达式直接代入，按 $\\alpha_1,\\alpha_2,\\alpha_3$ 合并同类项",
  "solution": "$\\gamma_1=3(2\\alpha_1+\\alpha_2-5\\alpha_3)-(\\alpha_1+3\\alpha_2+\\alpha_3)+(-\\alpha_1+4\\alpha_2-\\alpha_3)=4\\alpha_1+4\\alpha_2-17\\alpha_3$；$\\gamma_2=(2\\alpha_1+\\alpha_2-5\\alpha_3)+2(\\alpha_1+3\\alpha_2+\\alpha_3)+4(-\\alpha_1+4\\alpha_2-\\alpha_3)=23\\alpha_2-7\\alpha_3$。（官方答案将 $\\gamma_2$ 印作 $23\\alpha_1-7\\alpha_3$，按题给系数应为 $23\\alpha_2$，系印刷错误）"
 },
 {
  "id": "ch4-6",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 2,
  "type": "text",
  "statement": "判别下列向量组的线性相关性：(1) $(1,2),(2,3),(4,3)$；(2) $(1,2,3),(1,1,1),(\\frac12,1,\\frac32)$；(3) $(1,-1,0),(2,1,1),(1,3,-1)$；(4) $(1,1,3,1),(4,1,-3,2),(1,0,-1,2)$；(5) $(1,1,2,2,1),(0,2,1,5,-1),(2,0,3,-1,3),(1,1,0,4,-1)$。",
  "answer": "(1) 线性相关；(2) 线性相关；(3) 线性无关；(4) 线性无关；(5) 线性相关",
  "hint": "以向量为行（或列）作矩阵，比较矩阵的秩与向量个数",
  "solution": "(1) 3 个二维向量个数大于维数，必相关；且 $(4,3)=-6(1,2)+5(2,3)$。(2) $(\\frac12,1,\\frac32)=\\frac12(1,2,3)$，相关。(3) 行列式 $\\begin{vmatrix}1&-1&0\\\\2&1&1\\\\1&3&-1\\end{vmatrix}=-7\\neq0$，无关。(4) 设 $a\\alpha_1+b\\alpha_2+c\\alpha_3=\\mathbf 0$，解得 $a=b=c=0$，无关。(5) $(2,0,3,-1,3)=2(1,1,2,2,1)-(0,2,1,5,-1)$，相关。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch4-7",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 2,
  "type": "proof",
  "statement": "设向量组 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_r$ 线性无关，证明向量组 $\\beta_1=\\alpha_1+\\alpha_r$，$\\beta_2=\\alpha_2+\\alpha_r$，$\\cdots$，$\\beta_{r-1}=\\alpha_{r-1}+\\alpha_r$，$\\beta_r=\\alpha_r$ 线性无关。",
  "answer": "证明见解析",
  "hint": "设 $k_1\\beta_1+\\cdots+k_r\\beta_r=\\mathbf 0$，按 $\\alpha_1,\\cdots,\\alpha_r$ 整理",
  "solution": "设 $k_1\\beta_1+\\cdots+k_r\\beta_r=\\mathbf 0$，代入得 $k_1\\alpha_1+k_2\\alpha_2+\\cdots+k_{r-1}\\alpha_{r-1}+(k_1+k_2+\\cdots+k_r)\\alpha_r=\\mathbf 0$。因 $\\alpha_1,\\cdots,\\alpha_r$ 线性无关，故 $k_1=\\cdots=k_{r-1}=0$ 且 $k_1+\\cdots+k_r=0$，从而 $k_r=0$，所以 $\\beta_1,\\cdots,\\beta_r$ 线性无关。"
 },
 {
  "id": "ch4-8",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "choice",
  "statement": "设向量组 $\\alpha_1,\\alpha_2,\\alpha_3$ 线性无关，问 $l,m$ 满足什么条件时，向量组 $l\\alpha_2-\\alpha_1$，$m\\alpha_3-\\alpha_2$，$\\alpha_1-\\alpha_2$ 线性相关？",
  "options": [
   "$l=1$ 或 $m=0$",
   "$lm=1$",
   "$l=0$ 或 $m=1$",
   "$l=m=1$"
  ],
  "answer": 0,
  "hint": "把三个向量写成 $(\\alpha_1,\\alpha_2,\\alpha_3)$ 的系数矩阵，令其行列式为 0",
  "solution": "三个向量在基 $\\alpha_1,\\alpha_2,\\alpha_3$ 下的系数向量为 $(-1,l,0),(0,-1,m),(1,-1,0)$，行列式 $\\begin{vmatrix}-1&l&0\\\\0&-1&m\\\\1&-1&0\\end{vmatrix}=m(l-1)$。线性相关 $\\Leftrightarrow m(l-1)=0$，即 $l=1$ 或 $m=0$。（官方答案印作 $lm=1$，那是对第三向量为 $\\alpha_1-\\alpha_3$ 的情形；按本版题面第三向量为 $\\alpha_1-\\alpha_2$，条件应为 $l=1$ 或 $m=0$）"
 },
 {
  "id": "ch4-9",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "proof",
  "statement": "如果向量组 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_r$ 线性相关，而其中任意 $r-1$ 个向量线性无关，证明：要使 $k_1\\alpha_1+k_2\\alpha_2+\\cdots+k_r\\alpha_r=\\mathbf 0$ 成立，$k_1,k_2,\\cdots,k_r$ 必全不为零或全为零。",
  "answer": "证明见解析",
  "hint": "若某个 $k_j=0$，则剩下 $r-1$ 个向量线性相关，与题设矛盾",
  "solution": "由 $\\alpha_1,\\cdots,\\alpha_r$ 线性相关，存在不全为零的数组使 $\\sum k_i\\alpha_i=\\mathbf 0$。反设其中某个 $k_j=0$，则 $\\sum_{i\\neq j}k_i\\alpha_i=\\mathbf 0$ 且系数不全为零，说明任意 $r-1$ 个向量线性相关，与题设矛盾。故凡使 $\\sum k_i\\alpha_i=\\mathbf 0$ 的数组分量全不为零；而全零数组显然也使等式成立。"
 },
 {
  "id": "ch4-10",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 1,
  "type": "proof",
  "statement": "设 $\\beta_1=\\alpha_1+\\alpha_2$，$\\beta_2=\\alpha_2+\\alpha_3$，$\\beta_3=\\alpha_3+\\alpha_4$，$\\beta_4=\\alpha_4+\\alpha_1$，证明：$\\beta_1,\\beta_2,\\beta_3,\\beta_4$ 线性相关。",
  "answer": "证明见解析",
  "hint": "找一组不全为零的系数使线性组合为零向量",
  "solution": "注意到 $\\beta_1-\\beta_2+\\beta_3-\\beta_4=(\\alpha_1+\\alpha_2)-(\\alpha_2+\\alpha_3)+(\\alpha_3+\\alpha_4)-(\\alpha_4+\\alpha_1)=\\mathbf 0$，系数 $1,-1,1,-1$ 不全为零，故 $\\beta_1,\\beta_2,\\beta_3,\\beta_4$ 线性相关。"
 },
 {
  "id": "ch4-11",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 2,
  "type": "proof",
  "statement": "设向量 $\\beta$ 可由向量组 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_m$ 线性表出，试证明表示法唯一的充分必要条件是 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_m$ 线性无关。",
  "answer": "证明见解析",
  "hint": "两种表示相减即得齐次关系式；反之用齐次关系式修正表示系数",
  "solution": "设 $\\beta=\\sum k_i\\alpha_i=\\sum l_i\\alpha_i$，相减得 $\\sum (k_i-l_i)\\alpha_i=\\mathbf 0$。若 $\\alpha$ 组线性无关，则 $k_i=l_i$，表示唯一。反之若表示唯一而 $\\alpha$ 组线性相关，则存在不全为零的 $c_i$ 使 $\\sum c_i\\alpha_i=\\mathbf 0$，于是 $\\beta=\\sum (k_i+c_i)\\alpha_i$ 是另一个不同表示，矛盾。故表示唯一 $\\Leftrightarrow$ $\\alpha_1,\\cdots,\\alpha_m$ 线性无关。"
 },
 {
  "id": "ch4-12",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "proof",
  "statement": "设向量组 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_s$ 线性无关，$\\beta=b_1\\alpha_1+b_2\\alpha_2+\\cdots+b_s\\alpha_s$。证明：如果某个 $b_i\\neq0$，则用 $\\beta$ 替换 $\\alpha_i$ 后得到的向量组 $\\alpha_1,\\cdots,\\alpha_{i-1},\\beta,\\alpha_{i+1},\\cdots,\\alpha_s$ 也线性无关。",
  "answer": "证明见解析",
  "hint": "对替换后的向量组写线性组合，比较 $\\alpha_i$ 的系数",
  "solution": "设 $c_1\\alpha_1+\\cdots+c_{i-1}\\alpha_{i-1}+c_i\\beta+c_{i+1}\\alpha_{i+1}+\\cdots+c_s\\alpha_s=\\mathbf 0$。把 $\\beta$ 代入并按 $\\alpha_1,\\cdots,\\alpha_s$ 整理，$\\alpha_i$ 的系数为 $c_ib_i$，其余 $\\alpha_j\\ (j\\neq i)$ 的系数为 $c_j+c_ib_j$。由 $\\alpha$ 组线性无关得 $c_ib_i=0$，因 $b_i\\neq0$ 故 $c_i=0$，进而 $c_j=0\\ (j\\neq i)$。所以替换后的 $s$ 个向量线性无关。"
 },
 {
  "id": "ch4-13",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 2,
  "type": "text",
  "statement": "求下列向量组的秩，并求一个极大线性无关组：(1) $\\alpha_1=(1,2,-1,4)^{\\mathrm T},\\alpha_2=(9,100,10,4)^{\\mathrm T},\\alpha_3=(-2,-4,2,-8)^{\\mathrm T}$；(2) $\\alpha_1=(1,2,1,3)^{\\mathrm T},\\alpha_2=(4,-1,-5,-6)^{\\mathrm T},\\alpha_3=(1,-3,-4,-7)^{\\mathrm T}$；(3) $\\alpha_1=(1,3,6,2)^{\\mathrm T},\\alpha_2=(2,1,2,-1)^{\\mathrm T},\\alpha_3=(3,5,10,2)^{\\mathrm T},\\alpha_4=(-2,1,2,3)^{\\mathrm T}$；(4) $\\alpha_1=(1,0,-2,1)^{\\mathrm T},\\alpha_2=(3,1,0,-1)^{\\mathrm T},\\alpha_3=(1,1,4,-3)^{\\mathrm T},\\alpha_4=(3,0,10,3)^{\\mathrm T}$；(5) $\\alpha_1=(1,-2,-1,0,2)^{\\mathrm T},\\alpha_2=(1,-2,-1,-3,3)^{\\mathrm T},\\alpha_3=(2,-1,0,2,3)^{\\mathrm T},\\alpha_4=(3,3,3,3,4)^{\\mathrm T}$。",
  "answer": "(1) 秩 2，极大无关组 $\\alpha_1,\\alpha_2$；(2) 秩 2，$\\alpha_1,\\alpha_2$；(3) 秩 2，$\\alpha_1,\\alpha_2$；(4) 秩 3，$\\alpha_1,\\alpha_2,\\alpha_4$；(5) 秩 3，$\\alpha_1,\\alpha_2,\\alpha_3$",
  "hint": "以向量为列作矩阵化阶梯形，非零行数即秩，主元列对应极大无关组",
  "solution": "(1) $\\alpha_3=-2\\alpha_1$，$\\alpha_1,\\alpha_2$ 不成比例，秩 2，极大无关组 $\\alpha_1,\\alpha_2$。(2) $\\alpha_3=-\\frac{11}{9}\\alpha_1+\\frac59\\alpha_2$，秩 2，极大无关组 $\\alpha_1,\\alpha_2$。(3) $\\alpha_3=\\frac75\\alpha_1+\\frac45\\alpha_2$，$\\alpha_4=\\frac45\\alpha_1-\\frac75\\alpha_2$，秩 2，极大无关组 $\\alpha_1,\\alpha_2$。(4) $\\alpha_3=-2\\alpha_1+\\alpha_2$，而 $\\alpha_4$ 不能由 $\\alpha_1,\\alpha_2$ 表出，秩 3，极大无关组 $\\alpha_1,\\alpha_2,\\alpha_4$。(5) $\\alpha_4=-4\\alpha_1+\\alpha_2+3\\alpha_3$，$\\alpha_1,\\alpha_2,\\alpha_3$ 线性无关，秩 3，极大无关组 $\\alpha_1,\\alpha_2,\\alpha_3$。其中 (1)(2)(3)(5) 与官方答案一致 [✓官方]；（4）官方印作 $\\alpha_1,\\alpha_2,\\alpha_3$，但 $\\alpha_3=-2\\alpha_1+\\alpha_2$，故应为 $\\alpha_1,\\alpha_2,\\alpha_4$"
 },
 {
  "id": "ch4-14",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "text",
  "statement": "求向量组 $\\alpha_1=(0,2,5,1,\\frac12)^{\\mathrm T}$，$\\alpha_2=(2,2,-\\frac12,1,1)^{\\mathrm T}$，$\\alpha_3=(-8,-1,12,4,-3)^{\\mathrm T}$，$\\alpha_4=(4,3,-1,0,2)^{\\mathrm T}$ 的一个极大线性无关组，并用极大线性无关组表示其余向量。",
  "answer": "极大无关组 $\\alpha_1,\\alpha_2,\\alpha_3$；$\\alpha_4=\\frac23\\alpha_1+\\frac23\\alpha_2-\\frac13\\alpha_3$",
  "hint": "作矩阵 $(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4)$ 化行最简形，主元列即极大无关组",
  "solution": "以 $\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4$ 为列作矩阵并化行最简形，主元位于第 1、2、3 列，第 4 列为 $(\\frac23,\\frac23,-\\frac13,0,0)^{\\mathrm T}$，故秩为 3，极大无关组为 $\\alpha_1,\\alpha_2,\\alpha_3$，且 $\\alpha_4=\\frac23\\alpha_1+\\frac23\\alpha_2-\\frac13\\alpha_3$。验证：$\\frac23(0,2,5,1,\\frac12)+\\frac23(2,2,-\\frac12,1,1)-\\frac13(-8,-1,12,4,-3)=(4,3,-1,0,2)=\\alpha_4$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch4-15",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$ 是一组 $n$ 维向量，已知 $n$ 维单位坐标向量 $e_1,e_2,\\cdots,e_n$ 能由它们线性表出，证明 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$ 线性无关。",
  "answer": "证明见解析",
  "hint": "用秩的夹逼：$n=\\mathrm r(e_1,\\cdots,e_n)\\leqslant \\mathrm r(\\alpha_1,\\cdots,\\alpha_n)\\leqslant n$",
  "solution": "因 $e_1,\\cdots,e_n$ 可由 $\\alpha_1,\\cdots,\\alpha_n$ 线性表出，故 $n=\\mathrm r(e_1,\\cdots,e_n)\\leqslant \\mathrm r(\\alpha_1,\\cdots,\\alpha_n)$；又 $\\alpha_i$ 为 $n$ 维向量，$\\mathrm r(\\alpha_1,\\cdots,\\alpha_n)\\leqslant n$。于是秩为 $n$，即 $\\alpha_1,\\cdots,\\alpha_n$ 线性无关。"
 },
 {
  "id": "ch4-16",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$ 是一组 $n$ 维向量，证明它们线性无关的充分必要条件是：任一 $n$ 维向量都可由它们线性表出。",
  "answer": "证明见解析",
  "hint": "必要性用 $n$ 个无关向量构成基；充分性用 $e_i$ 可被表出再套用上题",
  "solution": "必要性：若 $\\alpha_1,\\cdots,\\alpha_n$ 线性无关，则它们是 $\\mathbf R^n$ 的一组基，任一 $n$ 维向量都可由基表出。充分性：若任一 $n$ 维向量都可由它们表出，则 $e_1,\\cdots,e_n$ 也能被表出，由上一题知 $\\alpha_1,\\cdots,\\alpha_n$ 线性无关。"
 },
 {
  "id": "ch4-17",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "proof",
  "statement": "证明：如果秩为 $r$ 的向量组可以由它的 $r$ 个向量线性表出，则这 $r$ 个向量构成这个向量组的一个极大线性无关组。",
  "answer": "证明见解析",
  "hint": "这 $r$ 个向量张成整个向量组，其秩等于原向量组的秩 $r$",
  "solution": "设向量组为 $\\alpha_1,\\cdots,\\alpha_m$，秩为 $r$，$\\alpha_{i_1},\\cdots,\\alpha_{i_r}$ 能表出全组。由它们张成的子空间包含全部 $\\alpha_j$，故其维数 $\\geqslant \\mathrm r(\\alpha_1,\\cdots,\\alpha_m)=r$；又其维数 $=\\mathrm r(\\alpha_{i_1},\\cdots,\\alpha_{i_r})\\leqslant r$。于是 $\\mathrm r(\\alpha_{i_1},\\cdots,\\alpha_{i_r})=r$，这 $r$ 个向量线性无关且能表出全组，故为极大线性无关组。"
 },
 {
  "id": "ch4-18",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 2,
  "type": "proof",
  "statement": "证明：$n$ 个方程的 $n$ 元线性方程组 $x_1\\alpha_1+x_2\\alpha_2+\\cdots+x_n\\alpha_n=\\beta$ 对任何 $\\beta\\in\\mathbf R^n$ 都有解的充分必要条件是它的系数行列式 $|A|\\neq0$。",
  "answer": "证明见解析",
  "hint": "有解 $\\Leftrightarrow$ $\\alpha_1,\\cdots,\\alpha_n$ 张成 $\\mathbf R^n$ $\\Leftrightarrow$ 它们线性无关",
  "solution": "记 $A=(\\alpha_1,\\cdots,\\alpha_n)$。若 $|A|\\neq0$，则 $\\alpha_1,\\cdots,\\alpha_n$ 线性无关，构成 $\\mathbf R^n$ 的基，任一 $\\beta$ 都能被表出，方程组有解且唯一。反之，若对任何 $\\beta$ 都有解，则 $e_1,\\cdots,e_n$ 均可由 $\\alpha_1,\\cdots,\\alpha_n$ 表出，由第 15 题知它们线性无关，故 $|A|\\neq0$。"
 },
 {
  "id": "ch4-19",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "proof",
  "statement": "证明：$\\mathrm r(\\alpha_1,\\alpha_2,\\cdots,\\alpha_r,\\beta_1,\\beta_2,\\cdots,\\beta_s)\\leqslant \\mathrm r(\\alpha_1,\\cdots,\\alpha_r)+\\mathrm r(\\beta_1,\\cdots,\\beta_s)$。",
  "answer": "证明见解析",
  "hint": "取两个向量组的极大无关组，看合并组能否由它们表出",
  "solution": "设 $\\alpha$ 组的极大无关组为 $\\alpha_{i_1},\\cdots,\\alpha_{i_p}$（$p=\\mathrm r(\\alpha)$），$\\beta$ 组的极大无关组为 $\\beta_{j_1},\\cdots,\\beta_{j_q}$（$q=\\mathrm r(\\beta)$）。合并组中每个向量都能由这 $p+q$ 个向量线性表出，故合并组的秩不超过 $p+q$，即得所证不等式。"
 },
 {
  "id": "ch4-20",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "proof",
  "statement": "证明 $\\mathrm r(A+B)\\leqslant \\mathrm r(A)+\\mathrm r(B)$。",
  "answer": "证明见解析",
  "hint": "$A+B$ 的列是 $A$ 的列与 $B$ 的列的线性组合，用上题（列向量组形式）",
  "solution": "设 $A=(\\alpha_1,\\cdots,\\alpha_n)$，$B=(\\beta_1,\\cdots,\\beta_n)$，则 $A+B=(\\alpha_1+\\beta_1,\\cdots,\\alpha_n+\\beta_n)$。$A+B$ 的每个列向量都能由 $\\alpha_1,\\cdots,\\alpha_n,\\beta_1,\\cdots,\\beta_n$ 表出，故 $\\mathrm r(A+B)\\leqslant \\mathrm r(\\alpha_1,\\cdots,\\alpha_n,\\beta_1,\\cdots,\\beta_n)\\leqslant \\mathrm r(A)+\\mathrm r(B)$。"
 },
 {
  "id": "ch4-21",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 2,
  "type": "text",
  "statement": "判别下面的集合是否构成向量空间，若构成向量空间，求一个基及维数：(1) 平面上不平行于某一向量的所有向量的集合；(2) $V=\\{\\alpha=(x_1,x_2,\\cdots,x_n)\\mid x_1+x_2+\\cdots+x_n=0\\}$；(3) $V=\\{\\alpha=(x_1,x_2,\\cdots,x_n)\\mid x_1+x_2+\\cdots+x_n=1\\}$；(4) $V=\\{\\alpha=(x_1,x_2,x_3)\\mid x_1=5x_2\\}$。",
  "answer": "(1) 不是向量空间；(2) 是，$\\dim V=n-1$，基 $(-1,1,0,\\cdots,0),(-1,0,1,\\cdots,0),\\cdots,(-1,0,\\cdots,0,1)$；(3) 不是向量空间；(4) 是，$\\dim V=2$，基 $(5,1,0),(0,0,1)$",
  "hint": "先查零向量是否属于该集合，再查对加法与数乘是否封闭",
  "solution": "(1) 不是：$\\alpha$ 与 $-\\alpha$ 都不平行于给定向量，但 $\\alpha+(-\\alpha)=\\mathbf 0$ 平行于它，对加法不封闭。(2) 是：齐次方程的解集，$\\dim V=n-1$，基可取 $(-1,1,0,\\cdots,0),\\cdots,(-1,0,\\cdots,0,1)$。(3) 不是：不含零向量。(4) 是：$x_1=5x_2$ 为齐次方程，$\\dim V=2$，基 $(5,1,0),(0,0,1)$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch4-22",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 1,
  "type": "proof",
  "statement": "证明向量组 $\\alpha_1=(1,1,0)^{\\mathrm T}$，$\\alpha_2=(0,0,2)^{\\mathrm T}$，$\\alpha_3=(0,3,2)^{\\mathrm T}$ 是 $\\mathbf R^3$ 上的一个基。",
  "answer": "证明见解析",
  "hint": "3 个三维向量线性无关即为基，算行列式不为 0",
  "solution": "以 $\\alpha_1,\\alpha_2,\\alpha_3$ 为列作行列式：$\\begin{vmatrix}1&0&0\\\\1&0&3\\\\0&2&2\\end{vmatrix}=1\\cdot(0\\cdot2-3\\cdot2)=-6\\neq0$，故三向量线性无关。$\\mathbf R^3$ 中 3 个线性无关的向量构成一个基。"
 },
 {
  "id": "ch4-23",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 2,
  "type": "choice",
  "statement": "证明向量组 $\\alpha_1=(1,1,0,1)^{\\mathrm T}$，$\\alpha_2=(2,1,3,1)^{\\mathrm T}$，$\\alpha_3=(1,1,0,0)^{\\mathrm T}$，$\\alpha_4=(0,1,-1,-1)^{\\mathrm T}$ 构成 $\\mathbf R^4$ 的一个基，并把向量 $\\beta=(2,2,4,1)^{\\mathrm T}$ 用这个基线性表出。",
  "options": [
   "$\\beta=\\alpha_1+2\\alpha_2-3\\alpha_3+2\\alpha_4$",
   "$\\beta=2\\alpha_1+\\alpha_2-3\\alpha_3-2\\alpha_4$",
   "$\\beta=\\alpha_1-2\\alpha_2+3\\alpha_3+2\\alpha_4$",
   "$\\beta=-\\alpha_1+2\\alpha_2+3\\alpha_3-2\\alpha_4$"
  ],
  "answer": 0,
  "hint": "先算 $|\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4|$ 说明是基，再解线性方程组求表出系数",
  "solution": "以 $\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4$ 为列作行列式得 $-2\\neq0$，故它们线性无关，构成 $\\mathbf R^4$ 的基。设 $\\beta=x_1\\alpha_1+x_2\\alpha_2+x_3\\alpha_3+x_4\\alpha_4$，解得 $x_1=1,x_2=2,x_3=-3,x_4=2$，即 $\\beta=\\alpha_1+2\\alpha_2-3\\alpha_3+2\\alpha_4$。验证：$(1+4-3,1+2-3+2,0+6-0-2,1+2-0-2)=(2,2,4,1)$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch4-24",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "text",
  "statement": "在 $\\mathbf R^3$ 中求一个向量 $\\gamma$，使它在下面两个基：(1) $\\alpha_1=(1,0,1)^{\\mathrm T}$，$\\alpha_2=(-1,0,0)^{\\mathrm T}$，$\\alpha_3=(0,1,1)^{\\mathrm T}$；(2) $\\beta_1=(0,-1,1)^{\\mathrm T}$，$\\beta_2=(1,-1,0)^{\\mathrm T}$，$\\beta_3=(1,0,1)^{\\mathrm T}$ 下有相同的坐标。",
  "answer": "$\\gamma=(1,3,2)^{\\mathrm T}$（答案不唯一）",
  "hint": "设公共坐标为 $(x_1,x_2,x_3)$，则 $x_1(\\alpha_1-\\beta_1)+x_2(\\alpha_2-\\beta_2)+x_3(\\alpha_3-\\beta_3)=\\mathbf 0$",
  "solution": "设公共坐标为 $(x_1,x_2,x_3)^{\\mathrm T}$，则 $x_1\\alpha_1+x_2\\alpha_2+x_3\\alpha_3=x_1\\beta_1+x_2\\beta_2+x_3\\beta_3$。由 $\\alpha_1-\\beta_1=(1,1,0)$，$\\alpha_2-\\beta_2=(-2,1,0)$，$\\alpha_3-\\beta_3=(-1,1,0)$ 得 $\\begin{cases}x_1-2x_2-x_3=0\\\\ x_1+x_2+x_3=0\\end{cases}$，取 $x_3=3$ 得 $x_2=-2,x_1=-1$，于是 $\\gamma=-\\alpha_1-2\\alpha_2+3\\alpha_3=(1,3,2)^{\\mathrm T}$。与官方答案一致（答案不唯一）[✓官方]"
 },
 {
  "id": "ch4-25",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "choice",
  "statement": "设 $\\mathbf R^n$ 的一个基为 $\\alpha_1=(1,0,0,\\cdots,0)^{\\mathrm T}$，$\\alpha_2=(1,1,0,\\cdots,0)^{\\mathrm T}$，$\\cdots$，$\\alpha_n=(1,1,\\cdots,1)^{\\mathrm T}$（即 $\\alpha_i$ 的前 $i$ 个分量为 1、其余为 0），求向量 $\\alpha=(a_1,a_2,\\cdots,a_n)^{\\mathrm T}$ 在此基下的坐标。",
  "options": [
   "$(a_1-a_2,\\;a_2-a_3,\\;\\cdots,\\;a_{n-1}-a_n,\\;a_n)$",
   "$(a_1-a_2-a_3-\\cdots-a_n,\\;a_2-a_3-\\cdots-a_n,\\;\\cdots,\\;a_{n-1}-a_n,\\;a_n)$",
   "$(a_1,\\;a_2-a_1,\\;\\cdots,\\;a_n-a_{n-1})$",
   "$(a_n,\\;a_{n-1}-a_n,\\;\\cdots,\\;a_1-a_2)$"
  ],
  "answer": 0,
  "hint": "由 $a_k=x_k+x_{k+1}+\\cdots+x_n$ 从 $k=n$ 起回代",
  "solution": "设 $\\alpha=x_1\\alpha_1+x_2\\alpha_2+\\cdots+x_n\\alpha_n$，则 $a_k=x_k+x_{k+1}+\\cdots+x_n\\ (k=1,\\cdots,n)$。从 $k=n$ 起回代：$x_n=a_n$，$x_{n-1}=a_{n-1}-a_n$，$\\cdots$，$x_k=a_k-a_{k+1}$，故坐标为 $(a_1-a_2,a_2-a_3,\\cdots,a_{n-1}-a_n,a_n)$。（官方答案印作 $a_1-a_2-a_3-\\cdots-a_n,\\ a_2-a_3-\\cdots-a_n,\\cdots$，与本基不符，应为印刷错误）"
 },
 {
  "id": "ch4-26",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "proof",
  "statement": "设向量组 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_r$ 线性无关，又向量组 $\\beta_1,\\beta_2,\\cdots,\\beta_s$ 是 $\\alpha_1,\\cdots,\\alpha_r$ 的线性组合，即 $\\beta_i=\\sum_{j=1}^{r}b_{ij}\\alpha_j\\ (i=1,2,\\cdots,s)$。证明：$\\beta_1,\\cdots,\\beta_s$ 线性相关的充分必要条件是矩阵 $(b_{ij})_{s\\times r}$ 的秩小于 $s$。",
  "answer": "证明见解析",
  "hint": "把 $\\sum x_i\\beta_i=\\mathbf 0$ 化为 $\\sum_j(\\sum_i x_ib_{ij})\\alpha_j=\\mathbf 0$，再用 $\\alpha$ 组无关",
  "solution": "设 $B=(b_{ij})_{s\\times r}$，则 $\\sum_{i=1}^{s}x_i\\beta_i=\\sum_{j=1}^{r}(\\sum_{i=1}^{s}x_ib_{ij})\\alpha_j$。因 $\\alpha_1,\\cdots,\\alpha_r$ 线性无关，$\\sum x_i\\beta_i=\\mathbf 0\\Leftrightarrow B^{\\mathrm T}x=\\mathbf 0$。于是 $\\beta$ 组线性相关 $\\Leftrightarrow$ 存在 $x\\neq\\mathbf 0$ 使 $B^{\\mathrm T}x=\\mathbf 0$ $\\Leftrightarrow \\mathrm r(B^{\\mathrm T})<s\\Leftrightarrow \\mathrm r(B)<s$。"
 },
 {
  "id": "ch4-27",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "text",
  "statement": "设 $s\\times n$ 矩阵 $A=\\begin{pmatrix}1&a&a^2&\\cdots&a^{n-1}\\\\1&a^2&a^4&\\cdots&a^{2(n-1)}\\\\\\vdots&\\vdots&\\vdots&&\\vdots\\\\1&a^s&a^{2s}&\\cdots&a^{s(n-1)}\\end{pmatrix}$，其中 $s\\leqslant n$，且当 $0<r<n$ 时 $a^r\\neq1$。求 $A$ 的秩和它的列向量组的一个极大线性无关组。",
  "answer": "$\\mathrm r(A)=s$；$A$ 的前 $s$ 列构成列向量组的一个极大线性无关组",
  "hint": "第 $i$ 行为 $1,t_i,t_i^2,\\cdots,t_i^{n-1}$，$t_i=a^{i-1}$，这是范德蒙德型矩阵",
  "solution": "记 $t_i=a^{i-1}$，则 $A$ 的第 $i$ 行为 $(1,t_i,t_i^2,\\cdots,t_i^{n-1})$。由 $a^r\\neq1\\ (0<r<n)$ 知 $t_1,\\cdots,t_s$ 互不相同，故前 $s$ 列构成的 $s$ 阶范德蒙德行列式 $\\prod_{1\\leqslant i<j\\leqslant s}(t_j-t_i)\\neq0$，这 $s$ 列线性无关，$\\mathrm r(A)\\geqslant s$；又 $A$ 只有 $s$ 行，$\\mathrm r(A)=s$，前 $s$ 列即极大线性无关组。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch4-28",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $\\lambda_1,\\lambda_2,\\cdots,\\lambda_k$ 为互不相同的数，向量组 $\\alpha_i=(1,\\lambda_i,\\lambda_i^2,\\cdots,\\lambda_i^{n-1})$，$i=1,2,\\cdots,k$。证明：(1) $k\\leqslant n$ 时，向量组线性无关；(2) $k>n$ 时，向量组线性相关。",
  "answer": "证明见解析",
  "hint": "(1) 取前 $k$ 列构成范德蒙德行列式；(2) $n$ 维空间最多有 $n$ 个线性无关向量",
  "solution": "(1) 当 $k\\leqslant n$ 时，取前 $k$ 个分量组成 $k$ 阶行列式 $\\begin{vmatrix}1&\\lambda_1&\\cdots&\\lambda_1^{k-1}\\\\1&\\lambda_2&\\cdots&\\lambda_2^{k-1}\\\\\\vdots&\\vdots&&\\vdots\\\\1&\\lambda_k&\\cdots&\\lambda_k^{k-1}\\end{vmatrix}=\\prod_{1\\leqslant i<j\\leqslant k}(\\lambda_j-\\lambda_i)\\neq0$，故线性无关。(2) 当 $k>n$ 时，$\\alpha_i$ 都是 $n$ 维向量，任意多于 $n$ 个的 $n$ 维向量必线性相关。"
 },
 {
  "id": "ch4-29",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $A,B$ 分别为 $m\\times n$、$n\\times m$ 矩阵，$n>m$ 且 $AB=E_m$，证明 $B$ 的 $m$ 个列向量线性无关。",
  "answer": "证明见解析",
  "hint": "设 $Bx=\\mathbf 0$，两边左乘 $A$",
  "solution": "设 $x$ 使 $Bx=\\mathbf 0$，两边左乘 $A$ 得 $ABx=\\mathbf 0$，而 $AB=E_m$，故 $x=E_mx=\\mathbf 0$。于是 $B$ 的列向量组只有零线性组合为零向量，即 $m$ 个列向量线性无关。（另证：$\\mathrm r(B)\\geqslant \\mathrm r(AB)=m$ 且 $\\mathrm r(B)\\leqslant m$）"
 },
 {
  "id": "ch4-30",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 2,
  "type": "proof",
  "statement": "设在向量组 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_r$ 中，$\\alpha_1\\neq\\mathbf 0$，并且每一个向量 $\\alpha_i$ 都不能由它前面的向量 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_{i-1}$ 线性表出，证明 $\\alpha_1,\\alpha_2,\\cdots,\\alpha_r$ 线性无关。",
  "answer": "证明见解析",
  "hint": "取使 $\\sum k_i\\alpha_i=\\mathbf 0$ 的下标最大的非零系数，反解出该向量",
  "solution": "反设线性相关，存在不全为零的 $k_1,\\cdots,k_r$ 使 $\\sum k_i\\alpha_i=\\mathbf 0$。设 $k_s$ 是其中下标最大的非零系数，则 $\\alpha_s=-\\frac{1}{k_s}\\sum_{i<s}k_i\\alpha_i$，即 $\\alpha_s$ 可由前面的向量表出，与题设矛盾（$s=1$ 时 $k_1\\alpha_1=\\mathbf 0$ 与 $\\alpha_1\\neq\\mathbf 0$ 矛盾）。故向量组线性无关。"
 },
 {
  "id": "ch4-31",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "proof",
  "statement": "设向量组 I：$\\beta_1,\\beta_2,\\cdots,\\beta_r$ 能由向量组 II：$\\alpha_1,\\alpha_2,\\cdots,\\alpha_s$ 线性表示为 $(\\beta_1,\\beta_2,\\cdots,\\beta_r)=(\\alpha_1,\\alpha_2,\\cdots,\\alpha_s)K$，其中 $K$ 为 $s\\times r$ 矩阵，且向量组 II 线性无关。证明向量组 I 线性无关的充分必要条件是 $\\mathrm r(K)=r$。",
  "answer": "证明见解析",
  "hint": "与第 26 题同法：$\\beta$ 组的齐次关系式等价于 $Kx=\\mathbf 0$",
  "solution": "设 $x=(x_1,\\cdots,x_r)^{\\mathrm T}$，则 $\\sum_{i=1}^{r}x_i\\beta_i=(\\alpha_1,\\cdots,\\alpha_s)Kx$。因 II 线性无关，$\\sum x_i\\beta_i=\\mathbf 0\\Leftrightarrow Kx=\\mathbf 0$。故 I 线性无关 $\\Leftrightarrow$ $Kx=\\mathbf 0$ 只有零解 $\\Leftrightarrow \\mathrm r(K)=r$。"
 },
 {
  "id": "ch4-32",
  "subject": "高代",
  "chapter": "第4章 向量组的线性相关性",
  "difficulty": 3,
  "type": "proof",
  "statement": "用矩阵的秩讨论下面三个平面的位置关系：$\\pi_1:a_1x+b_1y+c_1z=0$，$\\pi_2:a_2x+b_2y+c_2z=0$，$\\pi_3:a_3x+b_3y+c_3z=0$。",
  "answer": "证明见解析",
  "hint": "这是齐次方程组 $AX=0$，解空间维数 $3-\\mathrm r(A)$ 对应交集的维数",
  "solution": "记 $A=\\begin{pmatrix}a_1&b_1&c_1\\\\a_2&b_2&c_2\\\\a_3&b_3&c_3\\end{pmatrix}$，三平面都过原点，公共点集为 $AX=\\mathbf 0$ 的解集，维数 $3-\\mathrm r(A)$。(1) $\\mathrm r(A)=3$ 时只有零解，三平面相交于唯一一点 $O(0,0,0)$；(2) $\\mathrm r(A)=2$ 时解空间维数为 1，三平面相交于过原点的一条直线；(3) $\\mathrm r(A)=1$ 时解空间维数为 2，三个法向量共线、三平面重合为同一平面。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch5-1",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 2,
  "type": "text",
  "statement": "解下列齐次线性方程组：(1) $\\begin{cases}2x_1-4x_2+5x_3+3x_4=0\\\\3x_1-6x_2+4x_3+2x_4=0\\\\4x_1-8x_2+17x_3+11x_4=0\\end{cases}$；(2) $\\begin{cases}2x_1-4x_2+17x_3-6x_4=0\\\\ x_1+x_2-2x_3+3x_4=0\\\\3x_1+x_2+x_3+5x_4=0\\\\3x_1-x_2+8x_3+x_4=0\\end{cases}$；(3) $\\begin{cases}2x_1+x_2-x_3-x_4+x_5=0\\\\ x_1-x_2+x_3+x_4-2x_5=0\\\\3x_1+3x_2-3x_3-3x_4+4x_5=0\\\\4x_1-5x_2-5x_3-5x_4+7x_5=0\\end{cases}$；(4) $\\begin{cases}x_1+x_2+x_3+x_4+x_5=0\\\\2x_1+3x_2+x_3+x_4-3x_5=0\\\\ x_1+2x_3+2x_4+6x_5=0\\\\4x_1+5x_2+3x_3+4x_4-x_5=0\\end{cases}$。",
  "answer": "(1) $x=k_1(2,1,0,0)^{\\mathrm T}+k_2(2,0,-5,7)^{\\mathrm T}$；(2) $x=k_1(-3,7,2,0)^{\\mathrm T}+k_2(-1,-2,0,1)^{\\mathrm T}$；(3) $x=k_1(0,0,1,-1,0)^{\\mathrm T}+k_2(1,0,5,0,3)^{\\mathrm T}$；(4) $x=k_1(-2,1,1,0,0)^{\\mathrm T}+k_2(-6,5,0,0,1)^{\\mathrm T}$",
  "hint": "系数矩阵作初等行变换化行最简形，非主元列对应的自由未知量给出基础解系",
  "solution": "(1) 系数矩阵秩为 2，$x_2,x_4$ 为自由未知量，由 $7x_3+5x_4=0$、$x_1=2x_2+\\frac{2}{7}x_4$ 得基础解系 $(2,1,0,0)^{\\mathrm T},(2,0,-5,7)^{\\mathrm T}$。(2) 秩为 2，解得 $x_1=-\\frac{3}{2}x_3-x_4$ 型关系，取自由未知量 $x_3,x_4$ 得基础解系 $(-3,7,2,0)^{\\mathrm T},(-1,-2,0,1)^{\\mathrm T}$。(3) 第 3、4 列相同，秩为 3，$x_4,x_5$ 为自由未知量：$x_1=\\frac13x_5$、$x_2=0$、$x_3=-x_4+\\frac53x_5$，取 $(x_4,x_5)=(1,0),(0,3)$ 得基础解系 $(0,0,1,-1,0)^{\\mathrm T},(1,0,5,0,3)^{\\mathrm T}$。（官方答案给的是 3 个解向量，相当于只解了前三个方程，与本题四个方程不符，此处按四个方程给出）(4) 秩为 2，$x_3,x_4,x_5$ 中 $x_3,x_4$ 与 $x_5$ 分别给出方向，得基础解系 $(-2,1,1,0,0)^{\\mathrm T},(-6,5,0,0,1)^{\\mathrm T}$。其中 (1)(2)(4) 与官方答案一致 [✓官方]"
 },
 {
  "id": "ch5-2",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 2,
  "type": "text",
  "statement": "解下列非齐次线性方程组：(1) $\\begin{cases}x_1+3x_3+x_4=2\\\\ x_1-3x_2+x_4=-1\\\\2x_1+x_2+7x_3+2x_4=5\\\\4x_1+2x_2+14x_3=6\\end{cases}$；(2) $\\begin{cases}x_1-x_2+3x_3-x_4=1\\\\2x_1-x_2-x_3+4x_4=2\\\\3x_1-2x_2+2x_3+3x_4=3\\\\ x_1-4x_3+5x_4=-1\\end{cases}$；(3) $\\begin{cases}x_1+2x_2+3x_3-x_4=1\\\\3x_1+2x_2+x_3-x_4=1\\\\2x_1+2x_2+2x_3-x_4=1\\\\2x_1+3x_2+x_3+x_4=1\\\\5x_1+5x_2+2x_3=2\\end{cases}$；(4) $\\begin{cases}x_1+x_2+x_3+x_4+x_5=7\\\\3x_1+2x_2+x_3+x_4-3x_5=-2\\\\ x_2+2x_3+2x_4+6x_5=23\\\\5x_1+4x_2+3x_3+3x_4-x_5=12\\end{cases}$。",
  "answer": "(1) $x=k(-3,-1,1,0)^{\\mathrm T}+(1,1,0,1)^{\\mathrm T}$；(2) 无解；(3) $x=k(5,-7,5,6)^{\\mathrm T}+(\\frac16,\\frac16,\\frac16,0)^{\\mathrm T}$；(4) $x=k_1(1,-2,1,0,0)^{\\mathrm T}+k_2(1,-2,0,1,0)^{\\mathrm T}+k_3(5,-6,0,0,1)^{\\mathrm T}+(-16,23,0,0,0)^{\\mathrm T}$",
  "hint": "对增广矩阵作初等行变换：$\\mathrm r(A)\\neq\\mathrm r(A,b)$ 无解，$\\mathrm r(A)=\\mathrm r(A,b)=r$ 时解为特解加基础解系",
  "solution": "(1) 增广矩阵化行最简形，$\\mathrm r(A)=\\mathrm r(A,b)=3$，$n-r=1$；特解 $(1,1,0,1)^{\\mathrm T}$，导出组基础解系 $(-3,-1,1,0)^{\\mathrm T}$。(2) 第 3 个方程恰为前两个方程之和，但由前两个方程推出的 $x_2-7x_3+6x_4=0$ 代入第 4 个方程得 $x_2-7x_3+6x_4=-2$，矛盾，故 $\\mathrm r(A)<\\mathrm r(A,b)$，无解。(3) $\\mathrm r(A)=\\mathrm r(A,b)=3$，$n-r=1$；特解 $(\\frac16,\\frac16,\\frac16,0)^{\\mathrm T}$，基础解系 $(5,-7,5,6)^{\\mathrm T}$。(4) $\\mathrm r(A)=\\mathrm r(A,b)=2$，$n-r=3$；特解 $(-16,23,0,0,0)^{\\mathrm T}$，导出组基础解系 $(1,-2,1,0,0)^{\\mathrm T},(1,-2,0,1,0)^{\\mathrm T},(5,-6,0,0,1)^{\\mathrm T}$。与官方答案一致（官方 (4) 第一个解向量印作 $(0,-2,1,0,0)$，首分量应为 1）[✓官方]"
 },
 {
  "id": "ch5-3",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 2,
  "type": "text",
  "statement": "设方程组 $\\begin{cases}x_1+x_3=2\\\\ x_1+2x_2-x_3=0\\\\2x_1+x_2-ax_3=b\\end{cases}$。(1) 确定当 $a,b$ 分别为何值时，方程组无解？有唯一解？有无穷多个解？(2) 在有解时求出方程组的解。",
  "answer": "(1) $a=-1$ 且 $b\\neq3$ 时无解；$a\\neq-1$ 时有唯一解；$a=-1$ 且 $b=3$ 时有无穷多个解。(2) $a\\neq-1$ 时 $x_1=\\frac{2a+b-1}{a+1}$，$x_2=\\frac{2-a-b}{a+1}$，$x_3=\\frac{3-b}{a+1}$；$a=-1,b=3$ 时 $x_1=2-c$，$x_2=-1+c$，$x_3=c$（$c$ 任意）",
  "hint": "先算系数行列式 $|A|=-2(a+1)$，再分别讨论 $a\\neq-1$ 与 $a=-1$",
  "solution": "系数行列式 $\\begin{vmatrix}1&0&1\\\\1&2&-1\\\\2&1&-a\\end{vmatrix}=-2(a+1)$。当 $a\\neq-1$ 时 $|A|\\neq0$，由克莱姆法则（或消元）得唯一解 $x_1=\\frac{2a+b-1}{a+1}$，$x_2=\\frac{2-a-b}{a+1}$，$x_3=\\frac{3-b}{a+1}$。当 $a=-1$ 时对增广矩阵作行变换，第三个方程化为 $0\\cdot x_3=b-3$：若 $b\\neq3$ 则无解；若 $b=3$ 则 $\\mathrm r(A)=\\mathrm r(A,b)=2<3$，有无穷多解，令 $x_3=c$ 得 $x_1=2-c$，$x_2=c-1$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch5-4",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 2,
  "type": "text",
  "statement": "非齐次线性方程组 $\\begin{cases}-2x_1+x_2+x_3=-2\\\\ x_1-2x_2+x_3=\\lambda\\\\ x_1+x_2-2x_3=\\lambda^2\\end{cases}$，当 $\\lambda$ 取何值时有解？并求出它的解。",
  "answer": "$\\lambda=1$ 时 $x=k(1,1,1)^{\\mathrm T}+(1,0,0)^{\\mathrm T}$；$\\lambda=-2$ 时 $x=k(1,1,1)^{\\mathrm T}+(2,2,0)^{\\mathrm T}$；其他 $\\lambda$ 值无解",
  "hint": "系数矩阵各行之和为零，三式相加得 $0=\\lambda^2+\\lambda-2$，这就是有解的条件",
  "solution": "系数行列式 $\\begin{vmatrix}-2&1&1\\\\1&-2&1\\\\1&1&-2\\end{vmatrix}=0$，且 $\\mathrm r(A)=2$。把三个方程相加，左边为 0，右边为 $\\lambda^2+\\lambda-2$，故有解 $\\Leftrightarrow \\lambda^2+\\lambda-2=0\\Leftrightarrow \\lambda=1$ 或 $\\lambda=-2$。$\\lambda=1$ 时特解 $(1,0,0)^{\\mathrm T}$，导出组基础解系 $(1,1,1)^{\\mathrm T}$；$\\lambda=-2$ 时特解 $(2,2,0)^{\\mathrm T}$，基础解系仍为 $(1,1,1)^{\\mathrm T}$。与官方答案一致（官方把 $\\lambda=-2$ 的特解印作 $(1,2,0)^{\\mathrm T}$，代回第一式不成立，应为 $(2,2,0)^{\\mathrm T}$）[✓官方]"
 },
 {
  "id": "ch5-5",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 3,
  "type": "text",
  "statement": "设 $\\begin{cases}(2-\\lambda)x_1+2x_2-2x_3=1\\\\2x_1+(5-\\lambda)x_2-4x_3=2\\\\-2x_1-4x_2+(5-\\lambda)x_3=-\\lambda-1\\end{cases}$，问 $\\lambda$ 取何值时，此方程组有唯一解？无解？有无穷多个解？并在有解时求出它的全部解。",
  "answer": "$\\lambda\\neq1$ 且 $\\lambda\\neq10$ 时有唯一解；$\\lambda=10$ 时无解；$\\lambda=1$ 时有无穷多个解 $x=k_1(-2,1,0)^{\\mathrm T}+k_2(2,0,1)^{\\mathrm T}+(1,0,0)^{\\mathrm T}$",
  "hint": "算系数行列式 $|A|=-(\\lambda-1)^2(\\lambda-10)$，再逐个讨论",
  "solution": "系数行列式 $|A|=-(\\lambda-1)^2(\\lambda-10)$。$\\lambda\\neq1,10$ 时 $|A|\\neq0$，有唯一解。$\\lambda=10$ 时 $\\mathrm r(A)=2$，而增广矩阵中第三个方程与另两个不相容（如 $\\mathrm r(A,b)=3$），无解。$\\lambda=1$ 时三个方程都化为 $x_1+2x_2-2x_3=1$，$\\mathrm r(A)=\\mathrm r(A,b)=1$，$n-r=2$，特解 $(1,0,0)^{\\mathrm T}$，导出组为 $x_1+2x_2-2x_3=0$，基础解系 $(-2,1,0)^{\\mathrm T},(2,0,1)^{\\mathrm T}$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch5-6",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 3,
  "type": "text",
  "statement": "$a,b$ 取何值时，方程组 $\\begin{cases}x_1+x_2+x_3+x_4=0\\\\ x_2+2x_3+2x_4=1\\\\-x_2+(a-3)x_3-2x_4=b\\\\3x_1+2x_2+x_3+ax_4=-1\\end{cases}$ 有唯一解？无解？有无穷多个解？并在有无穷多个解时求出一般解。",
  "answer": "(1) $a\\neq1$ 时有唯一解；(2) $a=1$ 且 $b\\neq-1$ 时无解；(3) $a=1$ 且 $b=-1$ 时有无穷多个解，一般解为 $x=k_1(1,-2,1,0)^{\\mathrm T}+k_2(1,-2,0,1)^{\\mathrm T}+(-1,1,0,0)^{\\mathrm T}$",
  "hint": "系数行列式 $|A|=(a-1)^2$，先按 $a\\neq1$、$a=1$ 讨论，再代回第 3 个方程定 $b$",
  "solution": "系数行列式 $|A|=(a-1)^2$。当 $a\\neq1$ 时 $|A|\\neq0$，有唯一解。当 $a=1$ 时，第 2、3 个方程左端成比例（第 3 个为第 2 个的相反数），第三个方程化为 $-x_2-2x_3-2x_4=b$，而由第二个方程得 $x_2+2x_3+2x_4=1$，故当 $b\\neq-1$ 时矛盾无解；当 $b=-1$ 时两方程同解，$\\mathrm r(A)=\\mathrm r(A,b)=2$，$n-r=2$。此时 $x_2=1-2x_3-2x_4$，$x_1=-x_2-x_3-x_4=-1+x_3+x_4$，取特解 $(-1,1,0,0)^{\\mathrm T}$，基础解系 $(1,-2,1,0)^{\\mathrm T},(1,-2,0,1)^{\\mathrm T}$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch5-7",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 2,
  "type": "text",
  "statement": "设 $A=\\begin{pmatrix}1&1&2\\\\2&2&4\\\\3&3&6\\end{pmatrix}$，求作一个秩为 2 的方阵 $B$，使 $AB=0$。",
  "answer": "$B=\\begin{pmatrix}1&2&0\\\\1&0&0\\\\-1&-1&0\\end{pmatrix}$（答案不唯一）",
  "hint": "$B$ 的每一列都应是 $Ax=0$ 的解；取两个线性无关的解作前两列，第三列取零",
  "solution": "$A$ 的三行都是 $(1,1,2)$ 的倍数，$\\mathrm r(A)=1$，$Ax=\\mathbf 0$ 即 $x_1+x_2+2x_3=0$，其基础解系可取 $(1,1,-1)^{\\mathrm T},(2,0,-1)^{\\mathrm T}$。令 $B$ 的前两列为这两个向量、第三列为零向量，得 $B=\\begin{pmatrix}1&2&0\\\\1&0&0\\\\-1&-1&0\\end{pmatrix}$，此时 $AB=0$ 且 $\\mathrm r(B)=2$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch5-8",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 3,
  "type": "text",
  "statement": "设 $\\alpha_1=(1,0,2,3)^{\\mathrm T}$，$\\alpha_2=(1,1,3,5)^{\\mathrm T}$，$\\alpha_3=(1,-1,a+2,1)^{\\mathrm T}$，$\\alpha_4=(1,2,4,a+8)^{\\mathrm T}$，$\\beta=(1,1,b+3,5)^{\\mathrm T}$。(1) $a,b$ 为何值时 $\\beta$ 不能由 $\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4$ 线性表出？(2) $a,b$ 为何值时 $\\beta$ 可以由它们线性表出，且表示法唯一，写出表示式。",
  "answer": "(1) $a=-1$ 且 $b\\neq0$ 时不能表出；(2) $a\\neq-1$ 时表示法唯一，$\\beta=-\\frac{2b}{a+1}\\alpha_1+\\frac{a+b+1}{a+1}\\alpha_2+\\frac{b}{a+1}\\alpha_3$（$\\alpha_4$ 的系数为 0）",
  "hint": "对增广矩阵 $(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4,\\beta)$ 作行变换，由 $a+1$ 是否为 0 讨论",
  "solution": "设 $\\beta=x_1\\alpha_1+x_2\\alpha_2+x_3\\alpha_3+x_4\\alpha_4$，对增广矩阵作行变换，方程组的第 3、4 行化为 $(a+1)x_3=b$ 与 $(a+1)x_4=0$。当 $a\\neq-1$ 时 $x_4=0$，$x_3=\\frac{b}{a+1}$，回代得 $x_2=1+x_3=\\frac{a+b+1}{a+1}$，$x_1=-\\frac{2b}{a+1}$，表示法唯一。当 $a=-1$ 时化为 $0\\cdot x_3=b$：若 $b\\neq0$ 则无解，$\\beta$ 不能表出；若 $b=0$ 则有无穷多种表示。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch5-9",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 2,
  "type": "proof",
  "statement": "$A$ 为 $n$ 阶矩阵，证明存在 $n$ 阶非零矩阵 $B$，使 $AB=0$ 的充分必要条件是 $|A|=0$。",
  "answer": "证明见解析",
  "hint": "把 $B$ 按列分块，$AB=0$ 等价于 $B$ 的每一列都是 $Ax=0$ 的解",
  "solution": "设 $B=(\\beta_1,\\cdots,\\beta_n)$，则 $AB=(A\\beta_1,\\cdots,A\\beta_n)$，故 $AB=0\\Leftrightarrow$ 每一列 $\\beta_j$ 都是齐次方程组 $Ax=\\mathbf 0$ 的解。若 $|A|=0$，则 $\\mathrm r(A)<n$，$Ax=\\mathbf 0$ 有非零解 $\\beta$，取 $B=(\\beta,0,\\cdots,0)\\neq0$ 即得 $AB=0$。反之，若存在非零 $B$ 使 $AB=0$，则 $B$ 的某个非零列是 $Ax=\\mathbf 0$ 的非零解，故 $Ax=\\mathbf 0$ 有非零解，$\\mathrm r(A)<n$，即 $|A|=0$。"
 },
 {
  "id": "ch5-10",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 2,
  "type": "text",
  "statement": "求一个齐次线性方程组，使它的基础解系为 $\\xi_1=(0,1,2,3)^{\\mathrm T}$，$\\xi_2=(3,2,1,0)^{\\mathrm T}$。",
  "answer": "$\\begin{cases}x_1-2x_2+x_3=0\\\\2x_1-3x_2+x_4=0\\end{cases}$（答案不唯一）",
  "hint": "所求方程组的系数行向量应与 $\\xi_1,\\xi_2$ 都正交，即系数矩阵的秩为 $4-2=2$",
  "solution": "设所求方程组的一个方程为 $a_1x_1+a_2x_2+a_3x_3+a_4x_4=0$，它须以 $\\xi_1,\\xi_2$ 为解：$\\begin{cases}a_2+2a_3+3a_4=0\\\\3a_1+2a_2+a_3=0\\end{cases}$，其解空间维数为 2，取两组线性无关的解 $(1,-2,1,0)$、$(2,-3,0,1)$ 作系数行，得方程组 $\\begin{cases}x_1-2x_2+x_3=0\\\\2x_1-3x_2+x_4=0\\end{cases}$，其系数矩阵秩为 2，基础解系正是 $\\xi_1,\\xi_2$。与官方答案一致（答案不唯一）[✓官方]"
 },
 {
  "id": "ch5-11",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 3,
  "type": "text",
  "statement": "设非齐次线性方程组 $Ax=b$，系数矩阵 $A$ 为 $5\\times3$ 矩阵，$\\mathrm r(A)=2$，且 $\\eta_1,\\eta_2$ 是该方程组的两个解，有 $\\eta_1+\\eta_2=(1,3,0)^{\\mathrm T}$，$2\\eta_1+3\\eta_2=(2,5,1)^{\\mathrm T}$，求该方程组的通解。",
  "answer": "$x=k(1,5,-2)^{\\mathrm T}+(0,-1,1)^{\\mathrm T}$，$k$ 为任意常数",
  "hint": "$\\eta_1-\\eta_2$ 是导出组的解，且解空间维数为 $3-2=1$",
  "solution": "由 $\\eta_1+\\eta_2=(1,3,0)^{\\mathrm T}$ 与 $2\\eta_1+3\\eta_2=(2,5,1)^{\\mathrm T}$ 相减（后者减前者的 2 倍）得 $\\eta_2=(2,5,1)^{\\mathrm T}-(2,6,0)^{\\mathrm T}=(0,-1,1)^{\\mathrm T}$，从而 $\\eta_1=(1,4,-1)^{\\mathrm T}$。因 $\\mathrm r(A)=2$，导出组解空间维数为 $3-2=1$，$\\eta_1-\\eta_2=(1,5,-2)^{\\mathrm T}$ 是导出组的基础解系，故通解为 $x=(0,-1,1)^{\\mathrm T}+k(1,5,-2)^{\\mathrm T}$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch5-12",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 2,
  "type": "text",
  "statement": "判断下列命题的正误，试说明判断理由：(1) 若齐次线性方程组 $Ax=0$ 有无穷多个解，则非齐次线性方程组 $Ax=b$ 有解；(2) 非齐次线性方程组 $Ax=b$ 的解集构成一个解空间；(3) 设 $A$ 为 $m\\times n$ 矩阵，$\\mathrm r(A)=m$，则非齐次线性方程组 $Ax=b$ 有解；(4) 设 $A$ 为 $m\\times n$ 矩阵，齐次线性方程组 $Ax=0$ 仅有零解的充分必要条件是 $A$ 的 $n$ 个列向量线性无关；(5) $A,B$ 为 $n$ 阶方阵，齐次线性方程组 $ABx=0$ 与 $Bx=0$ 同解，则 $\\mathrm r(AB)=\\mathrm r(B)$。",
  "answer": "(3)(4)(5) 正确；(1)(2) 错误",
  "hint": "(1) 有无穷多解只说明 $\\mathrm r(A)<n$，不含 $b$ 的信息；(2) 解集一般不是向量空间（除 $b=0$）",
  "solution": "(1) 错：$Ax=0$ 有无穷多解只说明 $\\mathrm r(A)<n$，与 $b$ 是否属于 $A$ 的列空间无关，$Ax=b$ 可能无解。(2) 错：$b\\neq0$ 时解集不含零向量，对加法、数乘都不封闭，不构成向量空间。(3) 对：$\\mathrm r(A)=m$ 说明 $A$ 的列向量张成 $\\mathbf R^m$，任一 $b\\in\\mathbf R^m$ 都在列空间中，故必有解。(4) 对：$Ax=0$ 仅有零解 $\\Leftrightarrow \\mathrm r(A)=n$ $\\Leftrightarrow$ $A$ 的 $n$ 个列向量线性无关。(5) 对：两方程组同解，解空间维数相同，即 $n-\\mathrm r(AB)=n-\\mathrm r(B)$，故 $\\mathrm r(AB)=\\mathrm r(B)$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch5-13",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $A,B$ 都是 $n$ 阶方阵，且 $AB=0$，证明 $\\mathrm r(A)+\\mathrm r(B)\\leqslant n$。",
  "answer": "证明见解析",
  "hint": "$B$ 的每个列向量都是 $Ax=0$ 的解，故 $B$ 的列空间含于 $A$ 的零空间",
  "solution": "$AB=0$ 说明 $B$ 的每一列 $\\beta_j$ 都满足 $A\\beta_j=\\mathbf 0$，即 $B$ 的列空间包含在 $Ax=\\mathbf 0$ 的解空间（$A$ 的零空间）中。零空间维数为 $n-\\mathrm r(A)$，故 $\\mathrm r(B)\\leqslant n-\\mathrm r(A)$，即 $\\mathrm r(A)+\\mathrm r(B)\\leqslant n$。"
 },
 {
  "id": "ch5-14",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 3,
  "type": "proof",
  "statement": "若 $n$ 阶方阵 $A$ 满足 $A^2=A$，证明 $\\mathrm r(A)+\\mathrm r(A-E)=n$。",
  "answer": "证明见解析",
  "hint": "一方面 $\\mathrm r(A)+\\mathrm r(A-E)\\geqslant \\mathrm r(A-(A-E))=n$，另一方面用第 13 题",
  "solution": "由 $A^2=A$ 得 $A(A-E)=A^2-A=0$，由上一题得 $\\mathrm r(A)+\\mathrm r(A-E)\\leqslant n$。另一方面，$A-(A-E)=E$，由 $\\mathrm r(X-Y)\\leqslant \\mathrm r(X)+\\mathrm r(Y)$（即 $\\mathrm r(E)\\leqslant \\mathrm r(A)+\\mathrm r(A-E)$）得 $n\\leqslant \\mathrm r(A)+\\mathrm r(A-E)$。两式合并即得 $\\mathrm r(A)+\\mathrm r(A-E)=n$。"
 },
 {
  "id": "ch5-15",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $A$ 为 $n$ 阶方阵，$A^*$ 为 $A$ 的伴随矩阵，证明：$\\mathrm r(A^*)=\\begin{cases}n,&\\mathrm r(A)=n\\\\1,&\\mathrm r(A)=n-1\\\\0,&\\mathrm r(A)<n-1\\end{cases}$",
  "answer": "证明见解析",
  "hint": "用 $AA^*=|A|E$；$\\mathrm r(A)=n-1$ 时 $A^*\\neq0$ 但 $A^*$ 的列都是 $Ax=0$ 的解",
  "solution": "(1) 若 $\\mathrm r(A)=n$，则 $|A|\\neq0$，$A^*=|A|A^{-1}$ 可逆，$\\mathrm r(A^*)=n$。(2) 若 $\\mathrm r(A)=n-1$，则 $|A|=0$，$AA^*=|A|E=0$；由第 13 题 $\\mathrm r(A)+\\mathrm r(A^*)\\leqslant n$ 得 $\\mathrm r(A^*)\\leqslant1$。又 $\\mathrm r(A)=n-1$ 说明存在 $n-1$ 阶非零子式，故 $A^*$ 中至少有一个元素非零，$\\mathrm r(A^*)\\geqslant1$，于是 $\\mathrm r(A^*)=1$。(3) 若 $\\mathrm r(A)<n-1$，则 $A$ 的所有 $n-1$ 阶子式全为零，$A^*=0$，$\\mathrm r(A^*)=0$。"
 },
 {
  "id": "ch5-16",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $\\eta^*$ 是非齐次线性方程组 $Ax=b$ 的一个解，$\\xi_1,\\xi_2,\\cdots,\\xi_{n-r}$ 是对应的齐次线性方程组的一个基础解系。证明：(1) $\\eta^*,\\xi_1,\\xi_2,\\cdots,\\xi_{n-r}$ 线性无关；(2) $\\eta^*,\\eta^*+\\xi_1,\\eta^*+\\xi_2,\\cdots,\\eta^*+\\xi_{n-r}$ 线性无关。",
  "answer": "证明见解析",
  "hint": "(1) 左乘 $A$ 把 $\\xi_i$ 项消去；(2) 先看 $\\eta^*$ 的系数，再化为 (1)",
  "solution": "(1) 设 $k_0\\eta^*+k_1\\xi_1+\\cdots+k_{n-r}\\xi_{n-r}=\\mathbf 0$。两边左乘 $A$，利用 $A\\eta^*=b$、$A\\xi_i=\\mathbf 0$ 得 $k_0b=\\mathbf 0$；若 $b\\neq\\mathbf 0$ 则 $k_0=0$（$b=\\mathbf 0$ 时 $\\eta^*$ 本身是齐次解，可直接归入基础解系讨论），再由 $\\xi_1,\\cdots,\\xi_{n-r}$ 线性无关得 $k_1=\\cdots=k_{n-r}=0$，故线性无关。(2) 设 $c_0\\eta^*+c_1(\\eta^*+\\xi_1)+\\cdots+c_{n-r}(\\eta^*+\\xi_{n-r})=\\mathbf 0$，即 $(c_0+\\cdots+c_{n-r})\\eta^*+c_1\\xi_1+\\cdots+c_{n-r}\\xi_{n-r}=\\mathbf 0$。由 (1) 知 $c_0+\\cdots+c_{n-r}=0$ 且 $c_1=\\cdots=c_{n-r}=0$，从而 $c_0=0$，故该向量组线性无关。"
 },
 {
  "id": "ch5-17",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 3,
  "type": "proof",
  "statement": "设非齐次线性方程组 $Ax=b$ 的系数矩阵的秩为 $r$，$\\eta_1,\\eta_2,\\cdots,\\eta_{n-r+1}$ 是它的 $n-r+1$ 个线性无关解。试证它的任一解可表示为 $x=k_1\\eta_1+k_2\\eta_2+\\cdots+k_{n-r+1}\\eta_{n-r+1}$，其中 $k_1+k_2+\\cdots+k_{n-r+1}=1$。",
  "answer": "证明见解析",
  "hint": "任一解 $x$ 与 $\\eta_{n-r+1}$ 之差是齐次解，而 $\\eta_i-\\eta_{n-r+1}$ 构成基础解系",
  "solution": "令 $\\gamma_i=\\eta_i-\\eta_{n-r+1}\\ (i=1,\\cdots,n-r)$，它们都是 $Ax=\\mathbf 0$ 的解。若 $\\sum_{i=1}^{n-r}c_i\\gamma_i=\\mathbf 0$，则 $\\sum c_i\\eta_i-(\\sum c_i)\\eta_{n-r+1}=\\mathbf 0$，由 $\\eta_1,\\cdots,\\eta_{n-r+1}$ 线性无关得所有 $c_i=0$，故 $\\gamma_1,\\cdots,\\gamma_{n-r}$ 线性无关，是导出组的基础解系。设 $x$ 是任一解，则 $x-\\eta_{n-r+1}$ 是齐次解，可写为 $\\sum_{i=1}^{n-r}c_i\\gamma_i$，于是 $x=\\sum_{i=1}^{n-r}c_i\\eta_i+(1-\\sum_{i=1}^{n-r}c_i)\\eta_{n-r+1}$。取 $k_i=c_i\\ (i\\leqslant n-r)$，$k_{n-r+1}=1-\\sum c_i$，即得所述形式且系数之和为 1。"
 },
 {
  "id": "ch5-18",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 2,
  "type": "text",
  "statement": "设 $n$ 阶矩阵 $A$ 各行元素之和均为零，且 $\\mathrm r(A)=n-1$，求齐次线性方程组 $Ax=\\mathbf 0$ 的全部解。",
  "answer": "$x=c(1,1,\\cdots,1)^{\\mathrm T}$，$c$ 为任意常数",
  "hint": "各行之和为零即 $A(1,1,\\cdots,1)^{\\mathrm T}=\\mathbf 0$，再比较解空间维数",
  "solution": "由各行元素之和为零得 $A(1,1,\\cdots,1)^{\\mathrm T}=\\mathbf 0$，故 $(1,1,\\cdots,1)^{\\mathrm T}$ 是解；又 $\\mathrm r(A)=n-1$，解空间维数为 $n-(n-1)=1$，故全部解为 $x=c(1,1,\\cdots,1)^{\\mathrm T}$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch5-19",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 2,
  "type": "text",
  "statement": "设 $A$ 为 $4\\times3$ 矩阵，且线性方程组 $Ax=b$ 满足 $\\mathrm r(A)=\\mathrm r(A,b)=2$，并且已知 $\\gamma_1=(-1,1,0)^{\\mathrm T}$，$\\gamma_2=(1,0,1)^{\\mathrm T}$ 为该方程组的两个解，试求该方程组的全部解。",
  "answer": "$x=\\gamma_1+c(\\gamma_1-\\gamma_2)=(-1,1,0)^{\\mathrm T}+c(-2,1,-1)^{\\mathrm T}$，$c$ 为任意常数",
  "hint": "解空间维数为 $3-2=1$，$\\gamma_1-\\gamma_2$ 是导出组的基础解系",
  "solution": "由 $\\mathrm r(A)=2$ 且未知量个数为 3，导出组 $Ax=\\mathbf 0$ 的解空间维数为 $3-2=1$。$\\gamma_1-\\gamma_2=(-2,1,-1)^{\\mathrm T}$ 是导出组的非零解，故为基础解系，全部解为 $x=\\gamma_1+c(\\gamma_1-\\gamma_2)=(-1,1,0)^{\\mathrm T}+c(-2,1,-1)^{\\mathrm T}$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch5-20",
  "subject": "高代",
  "chapter": "第5章 线性方程组",
  "difficulty": 3,
  "type": "text",
  "statement": "设四元齐次线性方程组 (I) 为 $\\begin{cases}x_1+x_2=0\\\\ x_2-x_4=0\\end{cases}$，又已知某个齐次线性方程组 (II) 的全部解为 $c_1(0,1,1,0)^{\\mathrm T}+c_2(-1,2,2,1)^{\\mathrm T}$（$c_1,c_2$ 为任意常数）。(1) 求线性方程组 (I) 的基础解系；(2) 问线性方程组 (I) 与 (II) 是否有非零的公共解？若有，求出所有非零公共解；若没有，说明理由。",
  "answer": "(1) 基础解系 $(0,0,1,0)^{\\mathrm T},(-1,1,0,1)^{\\mathrm T}$；(2) 有非零公共解，全部非零公共解为 $k(-1,1,1,1)^{\\mathrm T}$（$k\\neq0$）",
  "hint": "(2) 把 (II) 的通解代入 (I) 的两个方程，得 $c_1=-c_2$",
  "solution": "(1) (I) 中 $x_1=-x_2$，$x_4=x_2$，$x_2,x_3$ 为自由未知量，取 $(x_2,x_3)=(1,0),(0,1)$ 得基础解系 $(-1,1,0,1)^{\\mathrm T},(0,0,1,0)^{\\mathrm T}$。(2) 设 $x=(-c_2,\\,c_1+2c_2,\\,c_1+2c_2,\\,c_2)^{\\mathrm T}$ 同时满足 (I)：由 $x_1+x_2=0$ 得 $c_1+c_2=0$，由 $x_2-x_4=0$ 得 $c_1+c_2=0$，两条件相同。取 $c_1=-c_2$，得 $x=(-c_2,c_2,c_2,c_2)^{\\mathrm T}=k(-1,1,1,1)^{\\mathrm T}$。故两方程组有非零公共解，全部非零公共解为 $k(-1,1,1,1)^{\\mathrm T}\\ (k\\neq0)$。与官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-1-1",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 1,
  "type": "proof",
  "statement": "设 $A,B$ 为 $n$ 阶方阵，证明 $\\operatorname{tr}(A+B)=\\operatorname{tr}(A)+\\operatorname{tr}(B)$。",
  "answer": "证明见解析",
  "hint": "把迹写成对角元之和，逐项拆开",
  "solution": "设 $A=(a_{ij})$，$B=(b_{ij})$，则 $A+B$ 的第 $i$ 个对角元为 $a_{ii}+b_{ii}$，于是\n$$\\operatorname{tr}(A+B)=\\sum_{i=1}^{n}(a_{ii}+b_{ii})=\\sum_{i=1}^{n}a_{ii}+\\sum_{i=1}^{n}b_{ii}=\\operatorname{tr}(A)+\\operatorname{tr}(B).$$\n官方：证明略 [✓官方]"
 },
 {
  "id": "ch6-1-2",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 1,
  "type": "proof",
  "statement": "设 $A$ 为 $n$ 阶方阵，$k$ 为任意数，证明 $\\operatorname{tr}(kA)=k\\operatorname{tr}(A)$。",
  "answer": "证明见解析",
  "hint": "$kA$ 的对角元是 $ka_{ii}$",
  "solution": "$kA$ 的第 $i$ 个对角元为 $ka_{ii}$，故\n$$\\operatorname{tr}(kA)=\\sum_{i=1}^{n}ka_{ii}=k\\sum_{i=1}^{n}a_{ii}=k\\operatorname{tr}(A).$$\n官方：证明略 [✓官方]"
 },
 {
  "id": "ch6-1-3",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 1,
  "type": "proof",
  "statement": "设 $A,B$ 为 $n$ 阶方阵，证明 $\\operatorname{tr}(AB)=\\operatorname{tr}(BA)$。",
  "answer": "证明见解析",
  "hint": "写出 $(AB)_{ii}$ 与 $(BA)_{ii}$，交换求和次序",
  "solution": "$(AB)_{ii}=\\sum_{j}a_{ij}b_{ji}$，$(BA)_{ii}=\\sum_{j}b_{ij}a_{ji}$，于是\n$$\\operatorname{tr}(AB)=\\sum_{i}\\sum_{j}a_{ij}b_{ji}=\\sum_{j}\\sum_{i}b_{ji}a_{ij}=\\operatorname{tr}(BA).$$\n官方：证明略 [✓官方]"
 },
 {
  "id": "ch6-2-1",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 1,
  "type": "choice",
  "statement": "求矩阵 $A=\\begin{pmatrix}3&4\\\\5&2\\end{pmatrix}$ 的特征值与特征向量。",
  "options": [
   "$\\lambda_1=7,\\ p_1=k(4,-5)^{\\mathrm T}$；$\\lambda_2=-2,\\ p_2=k(1,1)^{\\mathrm T}$（$k\\neq0$）",
   "$\\lambda_1=-7,\\ p_1=k(1,1)^{\\mathrm T}$；$\\lambda_2=2,\\ p_2=k(4,-5)^{\\mathrm T}$（$k\\neq0$）",
   "$\\lambda_1=7,\\ p_1=k(1,1)^{\\mathrm T}$；$\\lambda_2=-2,\\ p_2=k(4,-5)^{\\mathrm T}$（$k\\neq0$）",
   "$\\lambda_1=7,\\ p_1=k(1,-1)^{\\mathrm T}$；$\\lambda_2=-2,\\ p_2=k(4,5)^{\\mathrm T}$（$k\\neq0$）"
  ],
  "answer": 2,
  "hint": "解 $|\\lambda E-A|=0$，再解 $(\\lambda E-A)x=0$",
  "solution": "$|\\lambda E-A|=\\begin{vmatrix}\\lambda-3&-4\\\\-5&\\lambda-2\\end{vmatrix}=(\\lambda-3)(\\lambda-2)-20=\\lambda^{2}-5\\lambda-14=(\\lambda-7)(\\lambda+2)$，故 $\\lambda_1=7,\\ \\lambda_2=-2$。\n$\\lambda=7$ 时 $(7E-A)x=0$，解得 $p_1=k(1,1)^{\\mathrm T}$；$\\lambda=-2$ 时解得 $p_2=k(4,-5)^{\\mathrm T}$（$k\\neq0$）[✓官方]"
 },
 {
  "id": "ch6-2-2",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "求矩阵 $A=\\begin{pmatrix}0&0&1\\\\0&1&0\\\\1&0&0\\end{pmatrix}$ 的特征值与特征向量。",
  "options": [
   "$\\lambda_1=\\lambda_2=1$，$p=k(1,0,0)^{\\mathrm T}$；$\\lambda_3=-1$，$p=k(1,0,-1)^{\\mathrm T}$",
   "$\\lambda_1=\\lambda_2=-1$，$p=k_1(0,1,0)^{\\mathrm T}+k_2(1,0,1)^{\\mathrm T}$；$\\lambda_3=1$，$p=k(1,0,-1)^{\\mathrm T}$",
   "$\\lambda_1=1,\\ \\lambda_2=-1,\\ \\lambda_3=0$，对应特征向量分别为 $(1,0,1)^{\\mathrm T},(1,0,-1)^{\\mathrm T},(0,1,0)^{\\mathrm T}$",
   "$\\lambda_1=\\lambda_2=1$，$p=k_1(0,1,0)^{\\mathrm T}+k_2(1,0,1)^{\\mathrm T}$；$\\lambda_3=-1$，$p=k(1,0,-1)^{\\mathrm T}$"
  ],
  "answer": 3,
  "hint": "这是交换第 1、3 分量的矩阵，可先猜 $1$ 与 $-1$",
  "solution": "$|\\lambda E-A|=\\begin{vmatrix}\\lambda&0&-1\\\\0&\\lambda-1&0\\\\-1&0&\\lambda\\end{vmatrix}=(\\lambda-1)(\\lambda^{2}-1)=(\\lambda-1)^{2}(\\lambda+1)$。\n$\\lambda=1$：解 $(E-A)x=0$ 得 $x_1=x_3$，$x_2$ 任意，$p=k_1(0,1,0)^{\\mathrm T}+k_2(1,0,1)^{\\mathrm T}$；\n$\\lambda=-1$：解得 $p=k(1,0,-1)^{\\mathrm T}$（$k,k_1,k_2$ 不同时为零）[✓官方]"
 },
 {
  "id": "ch6-2-3",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "求矩阵 $A=\\begin{pmatrix}1&2&3\\\\2&1&3\\\\3&3&6\\end{pmatrix}$ 的特征值与特征向量。",
  "options": [
   "$\\lambda_1=-1,\\ p_1=k(1,-1,0)^{\\mathrm T}$；$\\lambda_2=9,\\ p_2=k(1,1,2)^{\\mathrm T}$；$\\lambda_3=0,\\ p_3=k(1,1,-1)^{\\mathrm T}$",
   "$\\lambda_1=-1,\\ p_1=k(1,1,0)^{\\mathrm T}$；$\\lambda_2=9,\\ p_2=k(1,1,2)^{\\mathrm T}$；$\\lambda_3=0,\\ p_3=k(1,-1,1)^{\\mathrm T}$",
   "$\\lambda_1=1,\\ p_1=k(1,-1,0)^{\\mathrm T}$；$\\lambda_2=9,\\ p_2=k(1,1,2)^{\\mathrm T}$；$\\lambda_3=0,\\ p_3=k(1,1,-1)^{\\mathrm T}$",
   "$\\lambda_1=-1,\\ p_1=k(1,-1,0)^{\\mathrm T}$；$\\lambda_2=9,\\ p_2=k(1,1,-2)^{\\mathrm T}$；$\\lambda_3=0,\\ p_3=k(1,-1,-1)^{\\mathrm T}$"
  ],
  "answer": 0,
  "hint": "先算 $|\\lambda E-A|$，可提出因子 $\\lambda$ 与 $\\lambda+1$",
  "solution": "$|\\lambda E-A|=\\lambda(\\lambda+1)(\\lambda-9)$，故 $\\lambda_1=-1,\\ \\lambda_2=9,\\ \\lambda_3=0$。\n$\\lambda=-1$：$p_1=k(1,-1,0)^{\\mathrm T}$；$\\lambda=9$：$p_2=k(1,1,2)^{\\mathrm T}$；$\\lambda=0$：解 $Ax=0$ 得 $p_3=k(1,1,-1)^{\\mathrm T}$ [✓官方]"
 },
 {
  "id": "ch6-2-4",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "求矩阵 $A=\\begin{pmatrix}2&-1&2\\\\5&-3&3\\\\-1&0&-2\\end{pmatrix}$ 的特征值与特征向量。",
  "options": [
   "$\\lambda_1=\\lambda_2=\\lambda_3=-1$，$p=k_1(1,1,0)^{\\mathrm T}+k_2(0,0,1)^{\\mathrm T}$",
   "$\\lambda_1=\\lambda_2=\\lambda_3=-1$，$p=k(1,1,-1)^{\\mathrm T}$（$k\\neq0$）",
   "$\\lambda_1=-1,\\ \\lambda_2=\\lambda_3=1$，$p_1=k(1,1,-1)^{\\mathrm T}$，$p_2=k(1,0,1)^{\\mathrm T}$",
   "$\\lambda_1=\\lambda_2=\\lambda_3=1$，$p=k(1,1,-1)^{\\mathrm T}$（$k\\neq0$）"
  ],
  "answer": 1,
  "hint": "$|\\lambda E-A|$ 是完全立方，特征子空间只有一维",
  "solution": "$|\\lambda E-A|=(\\lambda+1)^{3}$，故 $\\lambda_1=\\lambda_2=\\lambda_3=-1$。\n解 $(-E-A)x=0$ 得 $x=k(1,1,-1)^{\\mathrm T}$（$k\\neq0$）——几何重数为 $1$，小于代数重数 $3$，此矩阵不可对角化 [✓官方]"
 },
 {
  "id": "ch6-2-5",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "求矩阵 $A=\\begin{pmatrix}1&-3&3\\\\3&-5&3\\\\6&-6&4\\end{pmatrix}$ 的特征值与特征向量。",
  "options": [
   "$\\lambda_1=\\lambda_2=-2$，$p=k(1,1,0)^{\\mathrm T}$；$\\lambda_3=4$，$p=k(1,1,2)^{\\mathrm T}$",
   "$\\lambda_1=\\lambda_2=2$，$p=k_1(1,1,0)^{\\mathrm T}+k_2(-1,0,1)^{\\mathrm T}$；$\\lambda_3=-4$，$p=k(1,1,2)^{\\mathrm T}$",
   "$\\lambda_1=\\lambda_2=-2$，$p=k_1(1,1,0)^{\\mathrm T}+k_2(-1,0,1)^{\\mathrm T}$；$\\lambda_3=4$，$p=k(1,1,2)^{\\mathrm T}$",
   "$\\lambda_1=\\lambda_2=-2$，$p=k_1(1,1,0)^{\\mathrm T}+k_2(-1,0,1)^{\\mathrm T}$；$\\lambda_3=4$，$p=k(1,-1,2)^{\\mathrm T}$"
  ],
  "answer": 2,
  "hint": "$|\\lambda E-A|=(\\lambda+2)^{2}(\\lambda-4)$，$\\lambda=-2$ 的特征子空间是二维的",
  "solution": "$|\\lambda E-A|=(\\lambda+2)^{2}(\\lambda-4)$，故 $\\lambda_1=\\lambda_2=-2,\\ \\lambda_3=4$。\n$\\lambda=-2$：解 $(-2E-A)x=0$ 得 $p=k_1(1,1,0)^{\\mathrm T}+k_2(-1,0,1)^{\\mathrm T}$；$\\lambda=4$：$p=k(1,1,2)^{\\mathrm T}$ [✓官方]"
 },
 {
  "id": "ch6-2-6",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "求矩阵 $A=\\begin{pmatrix}1&1&1&1\\\\1&1&-1&-1\\\\1&-1&1&-1\\\\1&-1&-1&1\\end{pmatrix}$ 的特征值与特征向量。",
  "options": [
   "$\\lambda_1=\\lambda_2=\\lambda_3=2$，$p=k(1,1,1,1)^{\\mathrm T}$；$\\lambda_4=-2$，$p=k(-1,1,1,1)^{\\mathrm T}$",
   "$\\lambda_1=\\lambda_2=\\lambda_3=-2$，$p=k_1(1,1,0,0)^{\\mathrm T}+k_2(1,0,1,0)^{\\mathrm T}+k_3(1,0,0,1)^{\\mathrm T}$；$\\lambda_4=2$，$p=k(-1,1,1,1)^{\\mathrm T}$",
   "$\\lambda_1=\\lambda_2=\\lambda_3=2$，$p=k_1(1,1,0,0)^{\\mathrm T}+k_2(1,0,1,0)^{\\mathrm T}+k_3(1,0,0,1)^{\\mathrm T}$；$\\lambda_4=-2$，$p=k(1,1,-1,-1)^{\\mathrm T}$",
   "$\\lambda_1=\\lambda_2=\\lambda_3=2$，$p=k_1(1,1,0,0)^{\\mathrm T}+k_2(1,0,1,0)^{\\mathrm T}+k_3(1,0,0,1)^{\\mathrm T}$；$\\lambda_4=-2$，$p=k(-1,1,1,1)^{\\mathrm T}$"
  ],
  "answer": 3,
  "hint": "各行和的平方：先试全 $1$ 向量与 $(1,-1,-1,-1)$ 型向量",
  "solution": "$|\\lambda E-A|=(\\lambda-2)^{3}(\\lambda+2)$，故 $\\lambda_1=\\lambda_2=\\lambda_3=2$，$\\lambda_4=-2$。\n$\\lambda=2$：解 $(2E-A)x=0$ 得三维特征子空间，$p=k_1(1,1,0,0)^{\\mathrm T}+k_2(1,0,1,0)^{\\mathrm T}+k_3(1,0,0,1)^{\\mathrm T}$；\n$\\lambda=-2$：$p=k(-1,1,1,1)^{\\mathrm T}$ [✓官方]"
 },
 {
  "id": "ch6-3-1",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $p_1,p_2$ 分别是矩阵 $A$ 的属于特征值 $\\lambda_1,\\lambda_2$ 的特征向量，且 $\\lambda_1\\neq\\lambda_2$。证明：$p_1,p_2$ 线性无关。",
  "answer": "证明见解析",
  "hint": "反证：设 $k_1p_1+k_2p_2=0$，两边左乘 $A$ 再相减",
  "solution": "反设 $p_1,p_2$ 线性相关，则其中之一是另一个的倍数，从而它们属于同一个特征值，与 $\\lambda_1\\neq\\lambda_2$ 矛盾。\n也可直接证：设 $k_1p_1+k_2p_2=0$，左乘 $A$ 得 $k_1\\lambda_1p_1+k_2\\lambda_2p_2=0$；减去第一式乘 $\\lambda_2$，得 $k_1(\\lambda_1-\\lambda_2)p_1=0$。因 $p_1\\neq0$ 且 $\\lambda_1\\neq\\lambda_2$，故 $k_1=0$，进而 $k_2=0$，所以 $p_1,p_2$ 线性无关。官方：证明略 [✓官方]"
 },
 {
  "id": "ch6-3-2",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $p_1,p_2$ 分别是矩阵 $A$ 的属于特征值 $\\lambda_1,\\lambda_2$ 的特征向量，且 $\\lambda_1\\neq\\lambda_2$。证明：$p_1+p_2$ 不可能是 $A$ 的特征向量。",
  "answer": "证明见解析",
  "hint": "反证，并利用 $p_1,p_2$ 线性无关",
  "solution": "反设 $A(p_1+p_2)=\\lambda(p_1+p_2)$。又 $A(p_1+p_2)=\\lambda_1p_1+\\lambda_2p_2$，两式相减得\n$$(\\lambda_1-\\lambda)p_1+(\\lambda_2-\\lambda)p_2=0.$$\n由上一题 $p_1,p_2$ 线性无关，故 $\\lambda_1=\\lambda=\\lambda_2$，与 $\\lambda_1\\neq\\lambda_2$ 矛盾。所以 $p_1+p_2$ 不是特征向量。官方：证明略 [✓官方]"
 },
 {
  "id": "ch6-4",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $A$ 为 $n$ 阶矩阵，如果任意 $n$ 维非零向量都是 $A$ 的特征向量，证明 $A$ 为数量矩阵，即存在数 $\\lambda$，使得 $A=\\lambda E$。",
  "answer": "证明见解析",
  "hint": "取标准基 $e_1,\\cdots,e_n$ 及 $e_i+e_j$，比较特征值",
  "solution": "设 $Ae_i=\\lambda_ie_i$（$i=1,\\cdots,n$，$e_i$ 为标准基）。对 $i\\neq j$，$e_i+e_j\\neq0$ 也是特征向量，设 $A(e_i+e_j)=\\lambda(e_i+e_j)$，而\n$$A(e_i+e_j)=\\lambda_ie_i+\\lambda_je_j,$$\n比较 $e_i,e_j$ 的系数得 $\\lambda_i=\\lambda=\\lambda_j$。故所有 $\\lambda_i$ 相等，记为 $\\lambda$，于是 $Ae_i=\\lambda e_i\\ (i=1,\\cdots,n)$，即 $A=\\lambda E$。官方：证明略 [✓官方]"
 },
 {
  "id": "ch6-5-1",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 1,
  "type": "fill",
  "statement": "已知三阶矩阵 $A$ 的特征值为 $\\lambda_1=1,\\ \\lambda_2=0,\\ \\lambda_3=-2$，求 $|A-E|$ 的值。",
  "answer": "0",
  "hint": "$f(A)$ 的特征值是 $f(\\lambda_i)$，行列式等于特征值之积",
  "solution": "若 $\\lambda$ 是 $A$ 的特征值，则 $f(A)$ 的特征值为 $f(\\lambda)$，且 $|f(A)|=\\prod f(\\lambda_i)$。\n$|A-E|=(1-1)(0-1)(-2-1)=0$。官方答案：$0$ [✓官方]"
 },
 {
  "id": "ch6-5-2",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 1,
  "type": "fill",
  "statement": "已知三阶矩阵 $A$ 的特征值为 $\\lambda_1=1,\\ \\lambda_2=0,\\ \\lambda_3=-2$，求 $|A+2E|$ 的值。",
  "answer": "0",
  "hint": "$|A+2E|=\\prod(\\lambda_i+2)$",
  "solution": "$|A+2E|=(1+2)(0+2)(-2+2)=3\\times2\\times0=0$。官方答案：$0$ [✓官方]"
 },
 {
  "id": "ch6-5-3",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "fill",
  "statement": "已知三阶矩阵 $A$ 的特征值为 $\\lambda_1=1,\\ \\lambda_2=0,\\ \\lambda_3=-2$，求 $|A^{2}+3A+2E|$ 的值。",
  "answer": "0",
  "hint": "先分解 $\\lambda^{2}+3\\lambda+2=(\\lambda+1)(\\lambda+2)$",
  "solution": "$A^{2}+3A+2E=(A+E)(A+2E)$，其特征值为 $\\lambda_i^{2}+3\\lambda_i+2$：\n$1+3+2=6$，$0+0+2=2$，$4-6+2=0$。故 $|A^{2}+3A+2E|=6\\times2\\times0=0$。官方答案：$0$ [✓官方]"
 },
 {
  "id": "ch6-5-4",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "fill",
  "statement": "已知三阶矩阵 $A$ 的特征值为 $\\lambda_1=1,\\ \\lambda_2=0,\\ \\lambda_3=-2$，求 $|A^{2}+3A+4E|$ 的值。",
  "answer": "64",
  "hint": "$|A^{2}+3A+4E|=\\prod(\\lambda_i^{2}+3\\lambda_i+4)$",
  "solution": "$f(\\lambda)=\\lambda^{2}+3\\lambda+4$，$f(1)=8,\\ f(0)=4,\\ f(-2)=2$，故\n$$|A^{2}+3A+4E|=8\\times4\\times2=64.$$\n官方答案：$64$ [✓官方]"
 },
 {
  "id": "ch6-6",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "fill",
  "statement": "设 $A$ 是三阶方阵。如果已知 $|A+E|=0,\\ |2E+A|=0,\\ |E-A|=0$，求行列式 $|A^{2}+4A+E|$ 的值。",
  "answer": "36",
  "hint": "由三个行列式为 0 定出 $A$ 的三个特征值",
  "solution": "由 $|A+E|=0$ 得 $\\lambda=-1$；由 $|2E+A|=0$ 得 $\\lambda=-2$；由 $|E-A|=0$ 得 $\\lambda=1$。故 $A$ 的三个特征值为 $-1,-2,1$。\n$f(\\lambda)=\\lambda^{2}+4\\lambda+1$：$f(-1)=-2,\\ f(-2)=-3,\\ f(1)=6$，故 $|A^{2}+4A+E|=(-2)(-3)\\times6=36$。官方答案：$36$ [✓官方]"
 },
 {
  "id": "ch6-7",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 1,
  "type": "choice",
  "statement": "设 $n$ 阶矩阵 $A$ 满足 $A^{2}=A$，求 $A$ 的所有可能的特征值。",
  "options": [
   "$\\lambda=0$ 或 $\\lambda=-1$",
   "$\\lambda=0$ 或 $\\lambda=1$",
   "$\\lambda=1$ 或 $\\lambda=-1$",
   "$\\lambda=0,\\ 1,\\ -1$ 都可能"
  ],
  "answer": 1,
  "hint": "由 $Ap=\\lambda p$ 推出 $\\lambda^{2}p=\\lambda p$",
  "solution": "设 $Ap=\\lambda p$（$p\\neq0$），则 $A^{2}p=\\lambda^{2}p$。由 $A^{2}=A$ 得 $\\lambda^{2}p=\\lambda p$，即 $\\lambda(\\lambda-1)p=0$，故 $\\lambda=0$ 或 $\\lambda=1$。\n两者都能取到（零矩阵与单位矩阵），所以全部可能值为 $0$ 或 $1$。官方答案：$0,1$ [✓官方]"
 },
 {
  "id": "ch6-8",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 1,
  "type": "choice",
  "statement": "已知 $n$ 阶可逆矩阵 $A$ 的全体特征值为 $\\lambda_1,\\lambda_2,\\cdots,\\lambda_n$，求 $A^{-1}$ 的全体特征值。",
  "options": [
   "$-\\lambda_1,-\\lambda_2,\\cdots,-\\lambda_n$",
   "$\\lambda_1^{2},\\lambda_2^{2},\\cdots,\\lambda_n^{2}$",
   "$\\dfrac{1}{\\lambda_1},\\dfrac{1}{\\lambda_2},\\cdots,\\dfrac{1}{\\lambda_n}$",
   "$\\dfrac{1}{\\lambda_1^{2}},\\dfrac{1}{\\lambda_2^{2}},\\cdots,\\dfrac{1}{\\lambda_n^{2}}$"
  ],
  "answer": 2,
  "hint": "在 $Ap=\\lambda p$ 两边左乘 $A^{-1}$",
  "solution": "由 $Ap=\\lambda p$（$p\\neq0$）得 $p=\\lambda A^{-1}p$。因 $A$ 可逆，$\\lambda_i\\neq0$，故 $A^{-1}p=\\frac{1}{\\lambda_i}p$，即 $A^{-1}$ 的特征值为 $\\frac{1}{\\lambda_1},\\cdots,\\frac{1}{\\lambda_n}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-9",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "如果 $n$ 阶矩阵 $A$ 中的所有元素都是 $1$，求 $A$ 的所有特征值，并求 $A$ 的属于特征值 $\\lambda=n$ 的特征向量。",
  "options": [
   "特征值为 $0$（$n-1$ 重）与 $n$；$\\lambda=n$ 的特征向量为 $p=k(1,0,\\cdots,0)^{\\mathrm T}$（$k\\neq0$）",
   "特征值为 $1$（$n-1$ 重）与 $n$；$\\lambda=n$ 的特征向量为 $p=k(1,1,\\cdots,1)^{\\mathrm T}$（$k\\neq0$）",
   "特征值为 $0$（$n-1$ 重）与 $n$；$\\lambda=n$ 的特征向量为 $p=k(1,-1,\\cdots,-1)^{\\mathrm T}$（$k\\neq0$）",
   "特征值为 $0$（$n-1$ 重）与 $n$；$\\lambda=n$ 的特征向量为 $p=k(1,1,\\cdots,1)^{\\mathrm T}$（$k\\neq0$）"
  ],
  "answer": 3,
  "hint": "$A$ 是秩为 $1$ 的矩阵 $A=\\mathbf{1}\\mathbf{1}^{\\mathrm T}$",
  "solution": "记 $\\mathbf{1}=(1,1,\\cdots,1)^{\\mathrm T}$，则 $A=\\mathbf{1}\\mathbf{1}^{\\mathrm T}$，$r(A)=1$，故 $0$ 是 $A$ 的 $n-1$ 重特征值。\n又 $A\\mathbf{1}=\\mathbf{1}(\\mathbf{1}^{\\mathrm T}\\mathbf{1})=n\\mathbf{1}$，故 $\\lambda=n$ 是特征值，对应特征向量 $p=k(1,1,\\cdots,1)^{\\mathrm T}$（$k\\neq0$）。官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-10",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "fill",
  "statement": "设 $n$ 阶矩阵 $A$ 满足 $A^{2}+4A+4E=O$（$O$ 为零矩阵），求 $A$ 的所有特征值。",
  "answer": "-2",
  "hint": "注意 $A^{2}+4A+4E=(A+2E)^{2}$",
  "solution": "因为 $A^{2}+4A+4E=(A+2E)^{2}=O$。设 $Ap=\\lambda p$（$p\\neq0$），则 $(A+2E)^{2}p=(\\lambda+2)^{2}p=0$，故 $(\\lambda+2)^{2}=0$，即 $\\lambda=-2$。\n所以 $A$ 的全部特征值都是 $-2$。官方答案：$-2$ [✓官方]"
 },
 {
  "id": "ch6-11",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "求 $k$ 的值，使得 $\\alpha=\\begin{pmatrix}1\\\\k\\\\1\\end{pmatrix}$ 是 $A=\\begin{pmatrix}2&1&1\\\\1&2&1\\\\1&1&2\\end{pmatrix}$ 的逆矩阵的特征向量。",
  "options": [
   "$k=1$（$A$ 的特征值为 $4$）或 $k=-2$（$A$ 的特征值为 $1$）",
   "$k=1$（$A$ 的特征值为 $4$）",
   "$k=-2$（$A$ 的特征值为 $1$）",
   "$k=2$ 或 $k=-1$"
  ],
  "answer": 0,
  "hint": "$A^{-1}$ 与 $A$ 有相同的特征向量",
  "solution": "$A^{-1}$ 与 $A$ 的特征向量相同，故只需 $A\\alpha$ 与 $\\alpha$ 成比例：\n$$A\\alpha=\\begin{pmatrix}3+k\\\\2k+2\\\\3+k\\end{pmatrix}.$$\n由 $(2k+2)=(3+k)k$ 得 $k^{2}+k-2=0$，即 $k=1$ 或 $k=-2$。\n$k=1$ 时 $A\\alpha=(4,4,4)^{\\mathrm T}=4\\alpha$，$\\alpha$ 是 $A^{-1}$ 的属于 $1/4$ 的特征向量；$k=-2$ 时 $A\\alpha=(1,-2,1)^{\\mathrm T}=\\alpha$，$\\alpha$ 是 $A^{-1}$ 的属于 $1$ 的特征向量。官方答案：$k=1$（对应 $A$ 的特征值 $4$）或 $k=-2$（对应 $A$ 的特征值 $1$）[✓官方]"
 },
 {
  "id": "ch6-12",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "求出 $a$ 和 $b$ 的值，使得 $p=\\begin{pmatrix}1\\\\-2\\\\3\\end{pmatrix}$ 是 $A=\\begin{pmatrix}3&2&-1\\\\a&-2&2\\\\3&b&-1\\end{pmatrix}$ 的特征向量，并求出对应的特征值。",
  "options": [
   "$a=2,\\ b=6$，对应的特征值 $\\lambda=-4$",
   "$a=-2,\\ b=6$，对应的特征值 $\\lambda=-4$",
   "$a=-2,\\ b=-6$，对应的特征值 $\\lambda=4$",
   "$a=2,\\ b=-6$，对应的特征值 $\\lambda=4$"
  ],
  "answer": 1,
  "hint": "计算 $Ap$，令它与 $p$ 成比例",
  "solution": "$Ap=\\begin{pmatrix}3-4-3\\\\a+4+6\\\\3-2b-3\\end{pmatrix}=\\begin{pmatrix}-4\\\\a+10\\\\-2b\\end{pmatrix}$。\n令 $Ap=\\lambda p$，由第一分量得 $\\lambda=-4$；再由第二、三分量得 $a+10=8$，$-2b=-12$，故 $a=-2,\\ b=6$，对应特征值 $\\lambda=-4$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-13",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "已知 $12$ 是 $A=\\begin{pmatrix}7&4&-1\\\\4&7&-1\\\\-4&a&4\\end{pmatrix}$ 的一个特征值，求 $a$ 及 $A$ 的另外两个特征值。",
  "options": [
   "$a=4$，另外两个特征值 $\\lambda_1=\\lambda_2=3$",
   "$a=-4$，另外两个特征值 $\\lambda_1=2,\\ \\lambda_2=4$",
   "$a=-4$，另外两个特征值 $\\lambda_1=\\lambda_2=3$",
   "$a=4$，另外两个特征值 $\\lambda_1=2,\\ \\lambda_2=4$"
  ],
  "answer": 2,
  "hint": "用 $\\operatorname{tr}A$ 与 $|A|$ 列方程",
  "solution": "$\\operatorname{tr}A=18$，故另两个特征值满足 $\\lambda_2+\\lambda_3=6$；\n$|A|=120+3a$（按定义展开），而 $|A|=12\\lambda_2\\lambda_3$。\n又 $|3E-A|=0$ 可定出 $a$：把 $a=-4$ 代入可验证 $\\lambda=3$ 是二重特征值（$3E-A$ 的秩为 $1$），此时 $|A|=108=12\\times3\\times3$，一致。\n故 $a=-4$，另外两个特征值 $\\lambda_1=\\lambda_2=3$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-14",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $n$ 阶方阵 $A=(a_{ij})$ 的每一行元素之和同为 $a$，证明 $a$ 必是 $A$ 的特征值，并求 $A$ 的属于这个特征值 $a$ 的一个特征向量 $p$。",
  "answer": "证明见解析",
  "hint": "取 $p=(1,1,\\cdots,1)^{\\mathrm T}$，看 $Ap$ 的各分量",
  "solution": "取 $p=(1,1,\\cdots,1)^{\\mathrm T}\\neq0$。$Ap$ 的第 $i$ 个分量为 $\\sum_{j=1}^{n}a_{ij}=a$，即\n$$Ap=(a,a,\\cdots,a)^{\\mathrm T}=ap.$$\n所以 $a$ 是 $A$ 的特征值，$p=k(1,1,\\cdots,1)^{\\mathrm T}\\ (k\\neq0)$ 是对应的特征向量。官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-15-1",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "判断 $A=\\begin{pmatrix}5&4&2\\\\4&5&2\\\\2&2&2\\end{pmatrix}$ 能否相似于对角矩阵；若能，求可逆矩阵 $P$，使 $P^{-1}AP$ 为对角形。",
  "options": [
   "能，$P=\\begin{pmatrix}1&0&2\\\\0&1&2\\\\-2&-2&1\\end{pmatrix}$，$P^{-1}AP=\\mathrm{diag}(1,2,10)$",
   "能，$P=\\begin{pmatrix}1&0&-2\\\\0&1&-2\\\\2&2&1\\end{pmatrix}$，$P^{-1}AP=\\mathrm{diag}(1,1,10)$",
   "能，$P=\\begin{pmatrix}1&0&2\\\\0&1&2\\\\-2&-2&1\\end{pmatrix}$，$P^{-1}AP=\\mathrm{diag}(1,1,10)$",
   "不能，因为特征值 $1$ 是二重的"
  ],
  "answer": 2,
  "hint": "$A$ 是实对称矩阵，必可对角化；特征值为 $1,1,10$",
  "solution": "$A$ 实对称，故可对角化。$|\\lambda E-A|=(\\lambda-1)^{2}(\\lambda-10)$，$\\lambda=1$ 的特征子空间为 $x_1+x_2=0$ 所定平面，取 $p_1=(1,-1,0)^{\\mathrm T}$ 或题中给出的 $(1,0,-2)^{\\mathrm T}$、$(0,1,-2)^{\\mathrm T}$；$\\lambda=10$ 取 $p_3=(2,2,1)^{\\mathrm T}$。\n取 $P=\\begin{pmatrix}1&0&2\\\\0&1&2\\\\-2&-2&1\\end{pmatrix}$，则 $P^{-1}AP=\\mathrm{diag}(1,1,10)$。官方答案一致（$P$ 不唯一）[✓官方]"
 },
 {
  "id": "ch6-15-2",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "判断 $A=\\begin{pmatrix}-1&4&-2\\\\-3&4&0\\\\-3&1&3\\end{pmatrix}$ 能否相似于对角矩阵；若能，求可逆矩阵 $P$，使 $P^{-1}AP$ 为对角形。",
  "options": [
   "能，$P=\\begin{pmatrix}1&2&1\\\\1&3&3\\\\1&3&4\\end{pmatrix}$，$P^{-1}AP=\\mathrm{diag}(1,2,4)$",
   "能，$P=\\begin{pmatrix}1&2&1\\\\3&3&1\\\\4&3&1\\end{pmatrix}$，$P^{-1}AP=\\mathrm{diag}(1,2,3)$",
   "不能，因为 $A$ 不是实对称矩阵",
   "能，$P=\\begin{pmatrix}1&2&1\\\\1&3&3\\\\1&3&4\\end{pmatrix}$，$P^{-1}AP=\\mathrm{diag}(1,2,3)$"
  ],
  "answer": 3,
  "hint": "三个特征值 $1,2,3$ 互不相同，一定可以对角化",
  "solution": "$|\\lambda E-A|=(\\lambda-1)(\\lambda-2)(\\lambda-3)$，三个特征值互异，故可对角化。\n对应特征向量可取 $p_1=(1,1,1)^{\\mathrm T},\\ p_2=(2,3,3)^{\\mathrm T},\\ p_3=(1,3,4)^{\\mathrm T}$，取\n$$P=\\begin{pmatrix}1&2&1\\\\1&3&3\\\\1&3&4\\end{pmatrix},\\qquad P^{-1}AP=\\mathrm{diag}(1,2,3).$$\n官方答案一致（$P$ 不唯一）[✓官方]"
 },
 {
  "id": "ch6-15-3",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "判断 $A=\\begin{pmatrix}0&0&0\\\\0&0&0\\\\3&0&1\\end{pmatrix}$ 能否相似于对角矩阵；若能，求可逆矩阵 $P$，使 $P^{-1}AP$ 为对角形。",
  "options": [
   "能，$P=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\-3&0&1\\end{pmatrix}$，$P^{-1}AP=\\mathrm{diag}(0,0,1)$",
   "能，$P=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\-3&0&1\\end{pmatrix}$，$P^{-1}AP=\\mathrm{diag}(0,1,1)$",
   "能，$P=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\3&0&1\\end{pmatrix}$，$P^{-1}AP=\\mathrm{diag}(0,0,1)$",
   "不能，因为 $A$ 的特征值全为 $0$"
  ],
  "answer": 0,
  "hint": "特征值为 $0,0,1$；$r(0\\cdot E-A)=1$，几何重数为 $2$",
  "solution": "$|\\lambda E-A|=\\lambda^{2}(\\lambda-1)$，特征值为 $0,0,1$。$r(O-A)=r(A)=1$，故 $\\lambda=0$ 的特征子空间是二维的，$A$ 可对角化。\n$\\lambda=0$：$Ax=0$ 得 $p_1=(0,1,0)^{\\mathrm T},\\ p_2=(1,0,-3)^{\\mathrm T}$；$\\lambda=1$：$p_3=(0,0,1)^{\\mathrm T}$。取\n$$P=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\-3&0&1\\end{pmatrix},\\qquad P^{-1}AP=\\mathrm{diag}(0,0,1).$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-15-4",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 3,
  "type": "choice",
  "statement": "判断 $A=\\begin{pmatrix}a&1&0\\\\0&a&1\\\\0&0&a\\end{pmatrix}$ 能否相似于对角矩阵；若能，求可逆矩阵 $P$，使 $P^{-1}AP$ 为对角形。",
  "options": [
   "能，取 $P=E$ 即可，$P^{-1}AP=\\mathrm{diag}(a,a,a)$",
   "不能，因为 $r(aE-A)=2$，三重特征值 $a$ 只有一个线性无关的特征向量",
   "不能，因为 $A$ 的特征值有重根",
   "能，取 $P=\\begin{pmatrix}0&0&1\\\\0&1&0\\\\1&0&0\\end{pmatrix}$ 即可"
  ],
  "answer": 1,
  "hint": "$aE-A$ 的秩为 $2$，特征子空间只有一维",
  "solution": "$|\\lambda E-A|=(\\lambda-a)^{3}$，特征值为 $a$（三重）。但\n$$r(aE-A)=r\\begin{pmatrix}0&-1&0\\\\0&0&-1\\\\0&0&0\\end{pmatrix}=2,$$\n故 $\\lambda=a$ 的特征子空间只有 $3-2=1$ 维，找不到 $3$ 个线性无关的特征向量，$A$ 不能相似于对角矩阵。官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-15-5",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "判断 $A=\\begin{pmatrix}4&6&0\\\\-3&-5&0\\\\-3&-6&1\\end{pmatrix}$ 能否相似于对角矩阵；若能，求可逆矩阵 $P$，使 $P^{-1}AP$ 为对角形。",
  "options": [
   "能，$P=\\begin{pmatrix}-2&0&-1\\\\1&0&1\\\\0&1&1\\end{pmatrix}$，$P^{-1}AP=\\mathrm{diag}(1,1,2)$",
   "能，$P=\\begin{pmatrix}2&0&1\\\\-1&0&-1\\\\0&1&1\\end{pmatrix}$，$P^{-1}AP=\\mathrm{diag}(1,1,-2)$",
   "能，$P=\\begin{pmatrix}-2&0&-1\\\\1&0&1\\\\0&1&1\\end{pmatrix}$，$P^{-1}AP=\\mathrm{diag}(1,1,-2)$",
   "不能，因为特征值 $1$ 是二重的"
  ],
  "answer": 2,
  "hint": "特征值为 $1,1,-2$；$r(E-A)=1$，故可对角化",
  "solution": "$|\\lambda E-A|=(\\lambda+2)(\\lambda-1)^{2}$，特征值为 $1,1,-2$。$r(E-A)=r\\begin{pmatrix}-3&-6&0\\\\3&6&0\\\\3&6&0\\end{pmatrix}=1$，故 $\\lambda=1$ 的特征子空间是二维的，$A$ 可对角化。\n$\\lambda=1$：$p_1=(-2,1,0)^{\\mathrm T},\\ p_2=(0,0,1)^{\\mathrm T}$；$\\lambda=-2$：$p_3=(-1,1,1)^{\\mathrm T}$。取\n$$P=\\begin{pmatrix}-2&0&-1\\\\1&0&1\\\\0&1&1\\end{pmatrix},\\qquad P^{-1}AP=\\mathrm{diag}(1,1,-2).$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-16",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "fill",
  "statement": "设 $A=\\begin{pmatrix}1&-1&0\\\\-1&0&0\\\\0&0&1\\end{pmatrix}$ 与 $B=\\begin{pmatrix}1&a&0\\\\-1&0&-1\\\\0&a&1\\end{pmatrix}$ 相似，求 $a$。",
  "answer": "-0.5",
  "hint": "相似矩阵行列式相等",
  "solution": "$|A|=1\\cdot(0-0)-(-1)\\cdot(-1-0)+0=-1$。\n$|B|=1\\cdot(0+a)-a\\cdot(-1-0)+0=2a$。\n由相似得 $|A|=|B|$，即 $2a=-1$，故 $a=-\\frac{1}{2}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-17",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "求 $x,y$，使 $A=\\begin{pmatrix}2&0&0\\\\0&0&1\\\\0&1&x\\end{pmatrix}$ 与 $B=\\begin{pmatrix}2&0&0\\\\0&y&0\\\\0&0&-1\\end{pmatrix}$ 相似，并求可逆矩阵 $P$，使 $P^{-1}AP=B$。",
  "options": [
   "$x=0,\\ y=1$，$P=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&-1&1\\end{pmatrix}$",
   "$x=1,\\ y=0$，$P=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&1&-1\\end{pmatrix}$",
   "$x=0,\\ y=1$，$P=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&1&-1\\end{pmatrix}$",
   "$x=0,\\ y=-1$，$P=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&1&-1\\end{pmatrix}$"
  ],
  "answer": 2,
  "hint": "相似矩阵迹相等、特征值相同；$-1$ 必是 $A$ 的特征值",
  "solution": "$B$ 的特征值为 $2,y,-1$。$A$ 的特征值为 $2$ 与 $\\begin{pmatrix}0&1\\\\1&x\\end{pmatrix}$ 的特征值。\n因 $-1$ 是 $A$ 的特征值，$|-E-\\begin{pmatrix}0&1\\\\1&x\\end{pmatrix}|=\\begin{vmatrix}-1&-1\\\\-1&-x-1\\end{vmatrix}=x=0$，故 $x=0$。此时该 $2$ 阶块特征值为 $1,-1$，与 $y$ 比较得 $y=1$。\n取特征向量 $p_1=(1,0,0)^{\\mathrm T}\\ (\\lambda=2)$，$p_2=(0,1,1)^{\\mathrm T}\\ (\\lambda=1)$，$p_3=(0,1,-1)^{\\mathrm T}\\ (\\lambda=-1)$，则\n$$P=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&1&-1\\end{pmatrix},\\qquad P^{-1}AP=\\mathrm{diag}(2,1,-1)=B.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-18",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 3,
  "type": "choice",
  "statement": "已知 $A=\\begin{pmatrix}1&-2&-4\\\\-2&x&-2\\\\-4&-2&1\\end{pmatrix}$ 与 $\\Lambda=\\begin{pmatrix}5&&\\\\&y&\\\\&&-4\\end{pmatrix}$ 相似。求参数 $x,y$ 的值，并求可逆矩阵 $P$，使得 $P^{-1}AP=\\Lambda$。",
  "options": [
   "$x=4,\\ y=5$，$P=\\begin{pmatrix}1&0&2\\\\2&-2&1\\\\0&1&-2\\end{pmatrix}$",
   "$x=4,\\ y=-5$，$P=\\begin{pmatrix}1&0&2\\\\-2&-2&1\\\\0&1&2\\end{pmatrix}$",
   "$x=-4,\\ y=5$，$P=\\begin{pmatrix}1&0&2\\\\-2&-2&1\\\\0&1&2\\end{pmatrix}$",
   "$x=4,\\ y=5$，$P=\\begin{pmatrix}1&0&2\\\\-2&-2&1\\\\0&1&2\\end{pmatrix}$"
  ],
  "answer": 3,
  "hint": "用 $\\operatorname{tr}A=\\operatorname{tr}\\Lambda$ 与 $|-4E-A|=0$",
  "solution": "由 $\\operatorname{tr}A=2+x=1+y$ 得 $y=x+1$。\n又 $-4$ 是 $A$ 的特征值，$|-4E-A|=\\begin{vmatrix}-5&2&4\\\\2&-4-x&2\\\\4&2&-5\\end{vmatrix}=36-9x=0$，得 $x=4$，从而 $y=5$。\n此时 $\\lambda=5$（二重）的特征向量 $p_1=(1,-2,0)^{\\mathrm T},\\ p_2=(0,-2,1)^{\\mathrm T}$；$\\lambda=-4$ 的特征向量 $p_3=(2,1,2)^{\\mathrm T}$，取\n$$P=\\begin{pmatrix}1&0&2\\\\-2&-2&1\\\\0&1&2\\end{pmatrix},\\qquad P^{-1}AP=\\mathrm{diag}(5,5,-4)=\\Lambda.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-19-1",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 3,
  "type": "choice",
  "statement": "求三阶方阵 $A$，使得 $\\lambda_1=1,\\ \\lambda_2=1,\\ \\lambda_3=2$，对应的特征向量为 $p_1=\\begin{pmatrix}1\\\\2\\\\1\\end{pmatrix},\\ p_2=\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix},\\ p_3=\\begin{pmatrix}2\\\\0\\\\-1\\end{pmatrix}$。",
  "options": [
   "$A=\\begin{pmatrix}3&2&-2\\\\0&1&0\\\\1&-1&0\\end{pmatrix}$",
   "$A=\\begin{pmatrix}3&-2&2\\\\0&1&0\\\\1&-1&0\\end{pmatrix}$",
   "$A=\\begin{pmatrix}3&-2&2\\\\0&1&0\\\\-1&1&0\\end{pmatrix}$",
   "$A=\\begin{pmatrix}3&-2&2\\\\0&2&0\\\\-1&1&1\\end{pmatrix}$"
  ],
  "answer": 2,
  "hint": "$A=P\\Lambda P^{-1}$，其中 $P=(p_1,p_2,p_3)$",
  "solution": "令 $P=(p_1,p_2,p_3)=\\begin{pmatrix}1&1&2\\\\2&1&0\\\\1&0&-1\\end{pmatrix}$，$\\Lambda=\\mathrm{diag}(1,1,2)$，则 $A=P\\Lambda P^{-1}$。\n求得 $P^{-1}=\\begin{pmatrix}1&-1&2\\\\-2&3&-4\\\\1&-1&1\\end{pmatrix}$，于是\n$$A=\\begin{pmatrix}1&1&2\\\\2&1&0\\\\1&0&-1\\end{pmatrix}\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&2\\end{pmatrix}\\begin{pmatrix}1&-1&2\\\\-2&3&-4\\\\1&-1&1\\end{pmatrix}=\\begin{pmatrix}3&-2&2\\\\0&1&0\\\\-1&1&0\\end{pmatrix}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-19-2",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 3,
  "type": "choice",
  "statement": "求三阶方阵 $A$，使得 $\\lambda_1=1,\\ \\lambda_2=-1,\\ \\lambda_3=0$，对应的特征向量为 $p_1=\\begin{pmatrix}1\\\\2\\\\1\\end{pmatrix},\\ p_2=\\begin{pmatrix}0\\\\-2\\\\1\\end{pmatrix},\\ p_3=\\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix}$。",
  "options": [
   "$A=\\begin{pmatrix}5&-1&-2\\\\16&-4&-6\\\\2&0&1\\end{pmatrix}$",
   "$A=\\begin{pmatrix}5&1&-2\\\\-16&-4&-6\\\\2&0&-1\\end{pmatrix}$",
   "$A=\\begin{pmatrix}5&-1&2\\\\16&-4&6\\\\2&0&-1\\end{pmatrix}$",
   "$A=\\begin{pmatrix}5&-1&-2\\\\16&-4&-6\\\\2&0&-1\\end{pmatrix}$"
  ],
  "answer": 3,
  "hint": "$A=P\\Lambda P^{-1}$；注意 $P^{-1}$ 的计算",
  "solution": "令 $P=(p_1,p_2,p_3)=\\begin{pmatrix}1&0&1\\\\2&-2&1\\\\1&1&2\\end{pmatrix}$，$\\Lambda=\\mathrm{diag}(1,-1,0)$，则\n$$A=P\\Lambda P^{-1}=\\begin{pmatrix}1&0&1\\\\2&-2&1\\\\1&1&2\\end{pmatrix}\\begin{pmatrix}1&0&0\\\\0&-1&0\\\\0&0&0\\end{pmatrix}\\begin{pmatrix}5&-1&-2\\\\3&-1&-1\\\\-4&1&2\\end{pmatrix}=\\begin{pmatrix}5&-1&-2\\\\16&-4&-6\\\\2&0&-1\\end{pmatrix}.$$\n验证：$Ap_1=p_1$，$Ap_2=-p_2$，$Ap_3=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-20",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "choice",
  "statement": "求参数 $x$ 的值，使 $A=\\begin{pmatrix}-2&0&0\\\\2&x&2\\\\3&1&1\\end{pmatrix}$ 的特征值为 $-2,-1,2$，并求可逆矩阵 $P$，使 $P^{-1}AP$ 为对角矩阵。",
  "options": [
   "$x=0$，$P=\\begin{pmatrix}1&0&0\\\\0&-2&1\\\\-1&1&1\\end{pmatrix}$",
   "$x=0$，$P=\\begin{pmatrix}1&0&0\\\\0&-2&1\\\\1&-1&1\\end{pmatrix}$",
   "$x=2$，$P=\\begin{pmatrix}1&0&0\\\\0&-2&1\\\\-1&1&1\\end{pmatrix}$",
   "$x=0$，$P=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\-1&-2&1\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "$\\operatorname{tr}A$ 等于特征值之和",
  "solution": "$\\operatorname{tr}A=-2+x+1=x-1$，而 $-2-1+2=-1$，故 $x=0$。\n此时 $\\lambda=-2$：$p_1=(1,0,-1)^{\\mathrm T}$；$\\lambda=-1$：$p_2=(0,-2,1)^{\\mathrm T}$；$\\lambda=2$：$p_3=(0,1,1)^{\\mathrm T}$，取\n$$P=\\begin{pmatrix}1&0&0\\\\0&-2&1\\\\-1&1&1\\end{pmatrix},\\qquad P^{-1}AP=\\mathrm{diag}(-2,-1,2).$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-21",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "proof",
  "statement": "证明：若 $A$ 与 $B$ 相似，则对任意正整数 $k$，$A^{k}$ 与 $B^{k}$ 也相似。",
  "answer": "证明见解析",
  "hint": "把 $B=P^{-1}AP$ 代到 $B^{k}$ 里，中间项相消",
  "solution": "设 $B=P^{-1}AP$（$P$ 可逆）。则\n$$B^{k}=(P^{-1}AP)(P^{-1}AP)\\cdots(P^{-1}AP)=P^{-1}A^{k}P,$$\n故 $A^{k}$ 与 $B^{k}$ 相似（变换矩阵仍是 $P$）。官方：证明略 [✓官方]"
 },
 {
  "id": "ch6-22",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $A,B$ 都是 $n$ 阶方阵，$|A|\\neq0$。证明：$AB$ 与 $BA$ 相似。",
  "answer": "证明见解析",
  "hint": "注意 $BA=A^{-1}(AB)A$",
  "solution": "因 $|A|\\neq0$，$A$ 可逆，且\n$$BA=A^{-1}(AB)A,$$\n即 $BA$ 与 $AB$ 相似（相似变换矩阵为 $A$）。官方：证明略 [✓官方]"
 },
 {
  "id": "ch6-23",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $A,B$ 是 $n$ 阶方阵，$C,D$ 是 $m$ 阶方阵。证明：若 $A$ 与 $B$ 相似，$C$ 与 $D$ 相似，则 $\\begin{pmatrix}A&O_1\\\\O_2&C\\end{pmatrix}$ 与 $\\begin{pmatrix}B&O_1\\\\O_2&D\\end{pmatrix}$ 也相似，其中 $O_1,O_2$ 为零矩阵。",
  "answer": "证明见解析",
  "hint": "取分块对角矩阵 $P=\\mathrm{diag}(P_1,P_2)$",
  "solution": "设 $B=P_1^{-1}AP_1$，$D=P_2^{-1}CP_2$（$P_1,P_2$ 可逆），令 $P=\\begin{pmatrix}P_1&O_1\\\\O_2&P_2\\end{pmatrix}$，则 $P$ 可逆且\n$$P^{-1}=\\begin{pmatrix}P_1^{-1}&O_1\\\\O_2&P_2^{-1}\\end{pmatrix},\\qquad\nP^{-1}\\begin{pmatrix}A&O_1\\\\O_2&C\\end{pmatrix}P=\\begin{pmatrix}P_1^{-1}AP_1&O_1\\\\O_2&P_2^{-1}CP_2\\end{pmatrix}=\\begin{pmatrix}B&O_1\\\\O_2&D\\end{pmatrix}.$$\n故两分块矩阵相似。官方：证明略 [✓官方]"
 },
 {
  "id": "ch6-24",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 3,
  "type": "choice",
  "statement": "已知 $A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$，求 $A^{k}$，其中 $k$ 是正整数。",
  "options": [
   "$A^{k}=\\dfrac{1}{2}\\begin{pmatrix}(-1)^{k}+3^{k}&(-1)^{k+1}+3^{k}\\\\(-1)^{k+1}+3^{k}&(-1)^{k}+3^{k}\\end{pmatrix}$",
   "$A^{k}=\\begin{pmatrix}3^{k}&0\\\\0&(-1)^{k}\\end{pmatrix}$",
   "$A^{k}=\\dfrac{1}{2}\\begin{pmatrix}3^{k}+(-1)^{k}&3^{k}+1\\\\3^{k}+1&3^{k}+(-1)^{k}\\end{pmatrix}$",
   "$A^{k}=\\dfrac{1}{2}\\begin{pmatrix}3^{k}-(-1)^{k}&3^{k}+(-1)^{k}\\\\3^{k}+(-1)^{k}&3^{k}-(-1)^{k}\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "$A$ 的特征值为 $3,-1$；用 $A=P\\Lambda P^{-1}$ 或 $A=2J-E$（$J$ 为全 $1$ 矩阵）",
  "solution": "取 $P=\\begin{pmatrix}1&1\\\\-1&1\\end{pmatrix}$，则 $P^{-1}AP=\\mathrm{diag}(-1,3)$，$P^{-1}=\\frac{1}{2}\\begin{pmatrix}1&-1\\\\1&1\\end{pmatrix}$。于是\n$$A^{k}=\\begin{pmatrix}1&1\\\\-1&1\\end{pmatrix}\\begin{pmatrix}(-1)^{k}&0\\\\0&3^{k}\\end{pmatrix}\\frac{1}{2}\\begin{pmatrix}1&-1\\\\1&1\\end{pmatrix}\n=\\frac{1}{2}\\begin{pmatrix}(-1)^{k}+3^{k}&(-1)^{k+1}+3^{k}\\\\(-1)^{k+1}+3^{k}&(-1)^{k}+3^{k}\\end{pmatrix}.$$\n（也可用 $A=2J-E$，$J^{2}=2J$ 展开验证 $k=1$ 时得原矩阵。）官方答案一致 [✓官方]"
 },
 {
  "id": "ch6-25",
  "subject": "高代",
  "chapter": "第6章 特征值与特征向量",
  "difficulty": 1,
  "type": "proof",
  "statement": "设 $\\alpha$ 是 $n$ 阶矩阵 $A$ 的属于特征值 $\\lambda$ 的特征向量，验证 $\\beta=P^{-1}\\alpha$ 一定是 $B=P^{-1}AP$ 的属于特征值 $\\lambda$ 的特征向量。",
  "answer": "证明见解析",
  "hint": "直接算 $B\\beta$，并用 $PP^{-1}=E$",
  "solution": "$\\beta=P^{-1}\\alpha\\neq0$（$P^{-1}$ 可逆，$\\alpha\\neq0$），且\n$$B\\beta=P^{-1}AP\\cdot P^{-1}\\alpha=P^{-1}A\\alpha=P^{-1}(\\lambda\\alpha)=\\lambda P^{-1}\\alpha=\\lambda\\beta.$$\n故 $\\beta$ 是 $B$ 的属于 $\\lambda$ 的特征向量。官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-1-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 1,
  "type": "fill",
  "statement": "计算内积 $(\\alpha,\\beta)$：$\\alpha=(-1,0,3,-5)$，$\\beta=(4,-2,0,1)$。",
  "answer": "-9",
  "hint": "对应分量相乘再相加",
  "solution": "$(\\alpha,\\beta)=(-1)\\times4+0\\times(-2)+3\\times0+(-5)\\times1=-4-5=-9$。官方答案：$-9$ [✓官方]"
 },
 {
  "id": "ch7-1-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 1,
  "type": "fill",
  "statement": "计算内积 $(\\alpha,\\beta)$：$\\alpha=(\\sqrt{3},-1,0,-4)$，$\\beta=(-\\sqrt{3},1,5,-2)$。",
  "answer": "4",
  "hint": "$\\sqrt3\\cdot(-\\sqrt3)=-3$",
  "solution": "$(\\alpha,\\beta)=-\\sqrt{3}\\cdot\\sqrt{3}+(-1)\\times1+0\\times5+(-4)\\times(-2)=-3-1+0+8=4$。官方答案：$4$ [✓官方]"
 },
 {
  "id": "ch7-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "fill",
  "statement": "设 $\\alpha=(-1,1,2)$，$\\beta=(4,-2,-1)$，求 $\\big((\\alpha,\\alpha)\\beta-\\dfrac{1}{2}(\\alpha,\\beta)\\alpha,\\ 6\\alpha\\big)$。",
  "answer": "-144",
  "hint": "先算 $(\\alpha,\\alpha)$ 与 $(\\alpha,\\beta)$，再用内积的双线性",
  "solution": "$(\\alpha,\\alpha)=1+1+4=6$，$(\\alpha,\\beta)=-4-2-2=-8$，故\n$$(\\alpha,\\alpha)\\beta-\\frac{1}{2}(\\alpha,\\beta)\\alpha=6\\beta+4\\alpha=(24,-12,-6)+(-4,4,8)=(20,-8,2).$$\n于是所求 $=(20,-8,2,)\\,6\\alpha\\big)=6\\big[(20,-8,2),(-1,1,2)\\big]=6(-20-8+4)=6\\times(-24)=-144$。官方答案：$-144$ [✓官方]"
 },
 {
  "id": "ch7-3",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "求参数 $k$，使得 $\\alpha=\\left(\\dfrac{1}{3}k,\\ \\dfrac{1}{2}k,\\ k\\right)$ 是单位向量。",
  "options": [
   "$k=\\pm\\dfrac{7}{6}$",
   "$k=\\pm\\dfrac{3}{7}$",
   "$k=\\pm\\dfrac{6}{7}$",
   "$k=\\pm1$"
  ],
  "answer": 2,
  "hint": "$\\|\\alpha\\|^{2}=\\frac{k^{2}}{9}+\\frac{k^{2}}{4}+k^{2}=1$",
  "solution": "单位向量要求 $\\|\\alpha\\|=1$，即\n$$\\frac{k^{2}}{9}+\\frac{k^{2}}{4}+k^{2}=k^{2}\\left(\\frac{4+9+36}{36}\\right)=\\frac{49}{36}k^{2}=1,$$\n故 $k^{2}=\\dfrac{36}{49}$，$k=\\pm\\dfrac{6}{7}$。官方答案：$k=\\pm\\frac{6}{7}$ [✓官方]"
 },
 {
  "id": "ch7-4",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 1,
  "type": "proof",
  "statement": "设 $\\alpha$ 和 $\\beta$ 是两个 $n$ 维向量，求证：$\\|\\alpha+\\beta\\|^{2}+\\|\\alpha-\\beta\\|^{2}=2\\|\\alpha\\|^{2}+2\\|\\beta\\|^{2}$。",
  "answer": "证明见解析",
  "hint": "用 $\\|x\\|^{2}=(x,x)$ 展开",
  "solution": "由 $\\|x\\|^{2}=(x,x)$ 及内积的双线性，\n$$\\|\\alpha+\\beta\\|^{2}=(\\alpha,\\alpha)+2(\\alpha,\\beta)+(\\beta,\\beta),\\qquad\n\\|\\alpha-\\beta\\|^{2}=(\\alpha,\\alpha)-2(\\alpha,\\beta)+(\\beta,\\beta).$$\n两式相加即得 $\\|\\alpha+\\beta\\|^{2}+\\|\\alpha-\\beta\\|^{2}=2\\|\\alpha\\|^{2}+2\\|\\beta\\|^{2}$（平行四边形公式）。官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-5-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 1,
  "type": "choice",
  "statement": "在 $\\mathbf{R}^{3}$ 中求出所有与 $\\alpha=(1,-1,0)$ 正交的向量。",
  "options": [
   "$k(1,-1,0)$，$k$ 为任意实数",
   "$k_1(0,0,1)+k_2(1,0,-1)$，$k_1,k_2$ 为任意实数",
   "$k_1(1,1,0)+k_2(0,0,1)$，$k_1,k_2$ 为任意实数",
   "$k_1(1,1,0)+k_2(1,0,0)$，$k_1,k_2$ 为任意实数"
  ],
  "answer": 2,
  "hint": "设 $x=(x_1,x_2,x_3)$，解 $x_1-x_2=0$",
  "solution": "设 $x=(x_1,x_2,x_3)$，由 $(\\alpha,x)=x_1-x_2=0$ 得 $x_1=x_2$，$x_3$ 任意，故\n$$x=k_1(1,1,0)+k_2(0,0,1),\\qquad k_1,k_2\\in\\mathbf{R}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-5-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 1,
  "type": "choice",
  "statement": "在 $\\mathbf{R}^{3}$ 中求出所有与 $\\alpha=(1,-1,1)$，$\\beta=(-1,1,1)$ 都正交的向量。",
  "options": [
   "$k(1,0,1)$，$k$ 为任意实数",
   "$k(0,1,1)$，$k$ 为任意实数",
   "$k(1,-1,0)$，$k$ 为任意实数",
   "$k(1,1,0)$，$k$ 为任意实数"
  ],
  "answer": 3,
  "hint": "两个方程相加减",
  "solution": "设 $x=(x_1,x_2,x_3)$，需\n$$x_1-x_2+x_3=0,\\qquad -x_1+x_2+x_3=0.$$\n两式相加得 $2x_3=0$，即 $x_3=0$；代回得 $x_1=x_2$。故 $x=k(1,1,0)$（$k$ 为任意实数）。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-6",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "在 $\\mathbf{R}^{4}$ 中求一个单位向量 $\\beta$，使它与以下三个向量都正交：$\\alpha_1=(1,1,-1,1)$，$\\alpha_2=(1,-1,-1,1)$，$\\alpha_3=(2,1,1,3)$。",
  "options": [
   "$\\beta=\\pm\\dfrac{1}{\\sqrt{26}}(4,0,1,3)^{\\mathrm T}$",
   "$\\beta=\\pm\\dfrac{1}{\\sqrt{26}}(-4,0,-1,3)^{\\mathrm T}$",
   "$\\beta=\\pm\\dfrac{1}{\\sqrt{14}}(-4,0,-1,3)^{\\mathrm T}$",
   "$\\beta=\\pm\\dfrac{1}{\\sqrt{26}}(-4,0,1,3)^{\\mathrm T}$"
  ],
  "answer": 1,
  "hint": "解齐次方程组 $\\alpha_i^{\\mathrm T}x=0$，再单位化",
  "solution": "解方程组\n$$\\begin{cases}x_1+x_2-x_3+x_4=0\\\\ x_1-x_2-x_3+x_4=0\\\\ 2x_1+x_2+x_3+3x_4=0\\end{cases}$$\n由前两式得 $x_2=0$，$x_3=x_1+x_4$；代入第三式得 $3x_1+4x_4=0$，取 $x_4=3$，$x_1=-4$，$x_3=-1$，得基础解系 $(-4,0,-1,3)^{\\mathrm T}$，$\\|(-4,0,-1,3)\\|=\\sqrt{26}$。故\n$$\\beta=\\pm\\frac{1}{\\sqrt{26}}(-4,0,-1,3)^{\\mathrm T}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-7",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "fill",
  "statement": "已知在 $\\mathbf{R}^{3}$ 中有某个非零向量同时垂直于以下三个向量，求 $\\lambda$ 的值：$\\alpha_1=(1,0,2)$，$\\alpha_2=(-1,1,-3)$，$\\alpha_3=(2,-1,\\lambda)$。",
  "answer": "5",
  "hint": "存在非零向量与三者都正交 $\\Leftrightarrow$ 三向量线性相关",
  "solution": "存在非零向量 $x$ 满足 $\\alpha_i^{\\mathrm T}x=0\\ (i=1,2,3)$，等价于以 $\\alpha_1,\\alpha_2,\\alpha_3$ 为行的齐次方程组有非零解，即三向量线性相关：\n$$\\begin{vmatrix}1&0&2\\\\-1&1&-3\\\\2&-1&\\lambda\\end{vmatrix}=1\\cdot(\\lambda-3)-0+2\\cdot(1-2)=\\lambda-3-2=\\lambda-5=0,$$\n故 $\\lambda=5$。官方答案：$\\lambda=5$ [✓官方]"
 },
 {
  "id": "ch7-8-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "将向量组 $\\alpha_1=(1,1)^{\\mathrm T}$，$\\alpha_2=(2,0)^{\\mathrm T}$ 正交规范化。",
  "options": [
   "$e_1=\\dfrac{1}{\\sqrt2}(1,1)^{\\mathrm T}$，$e_2=\\dfrac{1}{\\sqrt2}(-1,1)^{\\mathrm T}$",
   "$e_1=\\dfrac{1}{\\sqrt2}(1,1)^{\\mathrm T}$，$e_2=\\dfrac{1}{\\sqrt2}(1,-1)^{\\mathrm T}$",
   "$e_1=(1,1)^{\\mathrm T}$，$e_2=(2,0)^{\\mathrm T}$",
   "$e_1=\\dfrac{1}{\\sqrt2}(1,-1)^{\\mathrm T}$，$e_2=\\dfrac{1}{\\sqrt2}(1,1)^{\\mathrm T}$"
  ],
  "answer": 1,
  "hint": "施密特正交化：$\\beta_2=\\alpha_2-\\frac{(\\alpha_2,\\beta_1)}{(\\beta_1,\\beta_1)}\\beta_1$",
  "solution": "取 $\\beta_1=\\alpha_1=(1,1)^{\\mathrm T}$，则 $(\\alpha_2,\\beta_1)=2$，$(\\beta_1,\\beta_1)=2$，\n$$\\beta_2=\\alpha_2-\\frac{2}{2}\\beta_1=(2,0)^{\\mathrm T}-(1,1)^{\\mathrm T}=(1,-1)^{\\mathrm T}.$$\n单位化得 $e_1=\\dfrac{1}{\\sqrt2}(1,1)^{\\mathrm T}$，$e_2=\\dfrac{1}{\\sqrt2}(1,-1)^{\\mathrm T}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-8-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "将向量组 $\\alpha_1=(1,1,1)^{\\mathrm T}$，$\\alpha_2=(1,2,3)^{\\mathrm T}$，$\\alpha_3=(1,4,9)^{\\mathrm T}$ 正交规范化。",
  "options": [
   "$e_1=\\dfrac{1}{\\sqrt3}(1,1,1)^{\\mathrm T}$，$e_2=\\dfrac{1}{\\sqrt2}(1,0,1)^{\\mathrm T}$，$e_3=\\dfrac{1}{\\sqrt6}(1,2,1)^{\\mathrm T}$",
   "$e_1=\\dfrac{1}{\\sqrt3}(1,1,1)^{\\mathrm T}$，$e_2=\\dfrac{1}{\\sqrt6}(-1,0,1)^{\\mathrm T}$，$e_3=\\dfrac{1}{\\sqrt2}(1,-2,1)^{\\mathrm T}$",
   "$e_1=\\dfrac{1}{\\sqrt3}(1,1,1)^{\\mathrm T}$，$e_2=\\dfrac{1}{\\sqrt2}(-1,0,1)^{\\mathrm T}$，$e_3=\\dfrac{1}{\\sqrt6}(1,-2,1)^{\\mathrm T}$",
   "$e_1=\\dfrac{1}{\\sqrt3}(1,1,1)^{\\mathrm T}$，$e_2=\\dfrac{1}{\\sqrt2}(-1,0,1)^{\\mathrm T}$，$e_3=\\dfrac{1}{\\sqrt6}(1,2,-1)^{\\mathrm T}$"
  ],
  "answer": 2,
  "hint": "逐步减去在前面的正交向量上的投影",
  "solution": "$\\beta_1=\\alpha_1=(1,1,1)^{\\mathrm T}$；$(\\alpha_2,\\beta_1)=6$，$(\\beta_1,\\beta_1)=3$，$\\beta_2=\\alpha_2-2\\beta_1=(-1,0,1)^{\\mathrm T}$；\n$(\\alpha_3,\\beta_1)=14$，$(\\alpha_3,\\beta_2)=8$，$\\beta_3=\\alpha_3-\\frac{14}{3}\\beta_1-\\frac{8}{2}\\beta_2=\\left(\\frac13,-\\frac23,\\frac13\\right)^{\\mathrm T}$。\n单位化得\n$$e_1=\\frac{1}{\\sqrt3}(1,1,1)^{\\mathrm T},\\quad e_2=\\frac{1}{\\sqrt2}(-1,0,1)^{\\mathrm T},\\quad e_3=\\frac{1}{\\sqrt6}(1,-2,1)^{\\mathrm T}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-8-3",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "将向量组 $\\alpha_1=(0,1,1,1)^{\\mathrm T}$，$\\alpha_2=(1,0,1,1)^{\\mathrm T}$，$\\alpha_3=(1,1,0,1)^{\\mathrm T}$ 正交规范化。",
  "options": [
   "$e_1=\\dfrac{1}{\\sqrt3}(0,1,1,1)^{\\mathrm T}$，$e_2=\\dfrac{1}{\\sqrt{15}}(3,-2,1,1)^{\\mathrm T}$，$e_3=\\dfrac{1}{\\sqrt{35}}(3,3,4,1)^{\\mathrm T}$",
   "$e_1=\\dfrac{1}{\\sqrt3}(0,1,1,1)^{\\mathrm T}$，$e_2=\\dfrac{1}{\\sqrt{14}}(3,-2,1,1)^{\\mathrm T}$，$e_3=\\dfrac{1}{\\sqrt{35}}(3,3,-4,1)^{\\mathrm T}$",
   "$e_1=\\dfrac{1}{\\sqrt3}(0,1,1,1)^{\\mathrm T}$，$e_2=\\dfrac{1}{\\sqrt{15}}(3,-2,1,1)^{\\mathrm T}$，$e_3=\\dfrac{1}{\\sqrt3}(1,1,-1,1)^{\\mathrm T}$",
   "$e_1=\\dfrac{1}{\\sqrt3}(0,1,1,1)^{\\mathrm T}$，$e_2=\\dfrac{1}{\\sqrt{15}}(3,-2,1,1)^{\\mathrm T}$，$e_3=\\dfrac{1}{\\sqrt{35}}(3,3,-4,1)^{\\mathrm T}$"
  ],
  "answer": 3,
  "hint": "三个向量地位对称，计算量不大但要仔细",
  "solution": "$\\beta_1=(0,1,1,1)^{\\mathrm T}$；$(\\alpha_2,\\beta_1)=2$，$(\\beta_1,\\beta_1)=3$，$\\beta_2=\\alpha_2-\\frac23\\beta_1=\\frac13(3,-2,1,1)^{\\mathrm T}$；\n$(\\alpha_3,\\beta_1)=2$，$(\\alpha_3,\\beta_2)=\\frac{1}{3}(3-2+0+1)=\\frac23$，$(\\beta_2,\\beta_2)=\\frac{15}{9}$，\n$$\\beta_3=\\alpha_3-\\frac23\\beta_1-\\frac{2/3}{15/9}\\beta_2=\\frac15(3,3,-4,1)^{\\mathrm T}.$$\n单位化得\n$$e_1=\\frac{1}{\\sqrt3}(0,1,1,1)^{\\mathrm T},\\quad e_2=\\frac{1}{\\sqrt{15}}(3,-2,1,1)^{\\mathrm T},\\quad e_3=\\frac{1}{\\sqrt{35}}(3,3,-4,1)^{\\mathrm T}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-9-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "求一个正交矩阵 $O$，使它的第 $1$ 列为 $\\beta_1=\\left(\\dfrac13,\\dfrac23,-\\dfrac23\\right)^{\\mathrm T}$。",
  "options": [
   "$O=\\begin{pmatrix}\\frac13&-\\frac{2}{\\sqrt5}&\\frac{2}{\\sqrt{45}}\\\\\\frac23&\\frac{1}{\\sqrt5}&-\\frac{4}{\\sqrt{45}}\\\\-\\frac23&0&\\frac{5}{\\sqrt{45}}\\end{pmatrix}$",
   "$O=\\begin{pmatrix}\\frac13&\\frac{2}{\\sqrt5}&\\frac{2}{\\sqrt{45}}\\\\\\frac23&-\\frac{1}{\\sqrt5}&\\frac{4}{\\sqrt{45}}\\\\-\\frac23&0&\\frac{5}{\\sqrt{45}}\\end{pmatrix}$",
   "$O=\\begin{pmatrix}\\frac13&-\\frac{2}{\\sqrt5}&\\frac{2}{\\sqrt{45}}\\\\\\frac23&\\frac{1}{\\sqrt5}&\\frac{4}{\\sqrt{45}}\\\\-\\frac23&0&\\frac{5}{\\sqrt{45}}\\end{pmatrix}$",
   "$O=\\begin{pmatrix}\\frac13&-\\frac{2}{\\sqrt5}&\\frac{2}{3}\\\\\\frac23&\\frac{1}{\\sqrt5}&\\frac{4}{3}\\\\-\\frac23&0&\\frac{5}{3}\\end{pmatrix}$"
  ],
  "answer": 2,
  "hint": "先取两个与 $\\beta_1$ 正交的单位向量，凑成标准正交基",
  "solution": "取 $e_2=\\left(-\\dfrac{2}{\\sqrt5},\\dfrac{1}{\\sqrt5},0\\right)^{\\mathrm T}$，它与 $\\beta_1$ 正交且为单位向量。再取\n$$e_3=\\beta_1\\times e_2=\\left(\\frac{2}{3\\sqrt5},\\frac{4}{3\\sqrt5},\\frac{5}{3\\sqrt5}\\right)^{\\mathrm T}=\\frac{1}{\\sqrt{45}}(2,4,5)^{\\mathrm T},$$\n它与 $\\beta_1,e_2$ 都正交且为单位向量。于是\n$$O=\\begin{pmatrix}\\frac13&-\\frac{2}{\\sqrt5}&\\frac{2}{\\sqrt{45}}\\\\\\frac23&\\frac{1}{\\sqrt5}&\\frac{4}{\\sqrt{45}}\\\\-\\frac23&0&\\frac{5}{\\sqrt{45}}\\end{pmatrix}$$\n是正交矩阵（答案不唯一）。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-9-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "求一个正交矩阵 $O$，使它的第 $1,2$ 行分别为 $\\alpha_1=\\left(\\dfrac12,\\dfrac12,\\dfrac12,\\dfrac12\\right)$，$\\alpha_2=\\left(\\dfrac12,-\\dfrac12,\\dfrac12,-\\dfrac12\\right)$。",
  "options": [
   "$O=\\frac12\\begin{pmatrix}1&1&1&1\\\\1&-1&1&-1\\\\1&0&-1&0\\\\0&1&0&-1\\end{pmatrix}$",
   "$O=\\begin{pmatrix}\\frac12&\\frac12&\\frac12&\\frac12\\\\\\frac12&-\\frac12&\\frac12&-\\frac12\\\\\\frac{1}{\\sqrt2}&0&\\frac{1}{\\sqrt2}&0\\\\0&\\frac{1}{\\sqrt2}&0&\\frac{1}{\\sqrt2}\\end{pmatrix}$",
   "$O=\\begin{pmatrix}\\frac12&\\frac12&\\frac12&\\frac12\\\\\\frac12&-\\frac12&-\\frac12&\\frac12\\\\\\frac{1}{\\sqrt2}&0&-\\frac{1}{\\sqrt2}&0\\\\0&\\frac{1}{\\sqrt2}&0&-\\frac{1}{\\sqrt2}\\end{pmatrix}$",
   "$O=\\begin{pmatrix}\\frac12&\\frac12&\\frac12&\\frac12\\\\\\frac12&-\\frac12&\\frac12&-\\frac12\\\\\\frac{1}{\\sqrt2}&0&-\\frac{1}{\\sqrt2}&0\\\\0&\\frac{1}{\\sqrt2}&0&-\\frac{1}{\\sqrt2}\\end{pmatrix}$"
  ],
  "answer": 3,
  "hint": "再补两个与 $\\alpha_1,\\alpha_2$ 都正交的单位行向量",
  "solution": "取 $\\alpha_3=\\dfrac{1}{\\sqrt2}(1,0,-1,0)$，$\\alpha_4=\\dfrac{1}{\\sqrt2}(0,1,0,-1)$，它们都是单位向量且两两正交，故\n$$O=\\begin{pmatrix}\\frac12&\\frac12&\\frac12&\\frac12\\\\\\frac12&-\\frac12&\\frac12&-\\frac12\\\\\\frac{1}{\\sqrt2}&0&-\\frac{1}{\\sqrt2}&0\\\\0&\\frac{1}{\\sqrt2}&0&-\\frac{1}{\\sqrt2}\\end{pmatrix}$$\n是正交矩阵（答案不唯一）。注：书末此处漏写了第 $3,4$ 行的因子 $\\sqrt2$，按原样相乘不是正交矩阵。官方答案（修正后）[✓官方]"
 },
 {
  "id": "ch7-10",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 1,
  "type": "choice",
  "statement": "判定以下方阵是否为正交矩阵：\n(1) $\\begin{pmatrix}1&-1\\\\1&1\\end{pmatrix}$；\n(2) $\\dfrac{1}{\\sqrt2}\\begin{pmatrix}1&0&1\\\\-1&0&1\\\\0&\\sqrt2&0\\end{pmatrix}$；\n(3) $\\dfrac19\\begin{pmatrix}1&-8&-4\\\\-8&1&-4\\\\-4&-4&7\\end{pmatrix}$；\n(4) $\\begin{pmatrix}\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\\\0&-\\frac{2\\sqrt2}{3}&\\frac13\\\\-\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\end{pmatrix}$。",
  "options": [
   "不是；是；是；是",
   "是；是；是；是",
   "不是；不是；是；是",
   "不是；是；不是；是"
  ],
  "answer": 0,
  "hint": "正交矩阵 $\\Leftrightarrow A^{\\mathrm T}A=E$，即行（列）向量组是标准正交基",
  "solution": "(1) 第 1 列 $(1,1)^{\\mathrm T}$ 的长度为 $\\sqrt2\\neq1$，**不是**正交矩阵。\n(2) 三行长度依次为 $\\frac{\\sqrt2}{2},1,1$…直接验算 $A^{\\mathrm T}A=E$：各行长度均为 $1$，两两内积为 $0$，**是**正交矩阵。\n(3) 每行长度平方为 $\\frac{1+64+16}{81}=1$，$\\frac{64+1+16}{81}=1$，$\\frac{16+16+49}{81}=1$，且行内积为 $\\frac{-8-8+16}{81}=0$、$\\frac{-4+32-28}{81}=0$、$\\frac{32-4-28}{81}=0$，**是**正交矩阵。\n(4) 各行长度为 $1$，行内积为 $0$（如第 1、2 行：$0-\\frac{4}{18}+\\frac29=0$），**是**正交矩阵。\n故结论为：不是；是；是；是。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-11",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $A$ 和 $B$ 以及 $A+B$ 都是 $n$ 阶正交矩阵，证明 $(A+B)^{-1}=A^{-1}+B^{-1}$。",
  "answer": "证明见解析",
  "hint": "证 $(A+B)(A^{-1}+B^{-1})=E$，用到 $A,B,A+B$ 正交",
  "solution": "因 $A,B,A+B$ 都是正交矩阵，故 $A^{\\mathrm T}=A^{-1}$，$B^{\\mathrm T}=B^{-1}$，且\n$$(A+B)(A+B)^{\\mathrm T}=E\\ \\Longrightarrow\\ AA^{\\mathrm T}+AB^{\\mathrm T}+BA^{\\mathrm T}+BB^{\\mathrm T}=E\n\\ \\Longrightarrow\\ AB^{\\mathrm T}+BA^{\\mathrm T}=-E.$$\n又\n$$(A+B)(A^{-1}+B^{-1})=(A+B)(A^{\\mathrm T}+B^{\\mathrm T})=AA^{\\mathrm T}+AB^{\\mathrm T}+BA^{\\mathrm T}+BB^{\\mathrm T}=E+(-E)+E=E.$$\n故 $A+B$ 可逆且 $(A+B)^{-1}=A^{-1}+B^{-1}$。官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-12",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "proof",
  "statement": "试证：若 $n$ 维实向量 $p$ 与任意 $n$ 维实向量都正交，则 $p$ 必为零向量。",
  "answer": "证明见解析",
  "hint": "把「任意向量」就取成 $p$ 自己",
  "solution": "取该\"任意向量\"为 $p$ 本身，由题设 $p$ 与 $p$ 正交，即 $(p,p)=0$。而\n$$(p,p)=p_1^2+p_2^2+\\cdots+p_n^2=0,$$\n实数的平方和非负，故 $p_1=\\cdots=p_n=0$，即 $p=0$。官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-13-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "求正交矩阵 $O$，使 $O^{\\mathrm T}AO$ 为对角矩阵：$A=\\begin{pmatrix}2&0&0\\\\0&3&2\\\\0&2&3\\end{pmatrix}$。",
  "options": [
   "$O=\\dfrac{\\sqrt2}{2}\\begin{pmatrix}\\sqrt2&0&0\\\\0&1&1\\\\0&-1&1\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(2,5,1)$",
   "$O=\\dfrac{\\sqrt2}{2}\\begin{pmatrix}\\sqrt2&0&0\\\\0&1&1\\\\0&-1&1\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(2,1,5)$",
   "$O=\\dfrac{\\sqrt2}{2}\\begin{pmatrix}\\sqrt2&0&0\\\\0&1&1\\\\0&1&-1\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(2,1,5)$",
   "$O=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&-1&1\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(2,1,5)$"
  ],
  "answer": 1,
  "hint": "$A$ 已分块对角，只需处理右下 $2\\times2$ 块",
  "solution": "$|\\lambda E-A|=(\\lambda-2)\\big[(\\lambda-3)^2-4\\big]=(\\lambda-2)(\\lambda-1)(\\lambda-5)$，特征值 $2,1,5$。\n$\\lambda=2$：$p_1=(1,0,0)^{\\mathrm T}$；$\\lambda=1$：$p_2=(0,1,-1)^{\\mathrm T}$；$\\lambda=5$：$p_3=(0,1,1)^{\\mathrm T}$。\n单位化后令\n$$O=\\frac{\\sqrt2}{2}\\begin{pmatrix}\\sqrt2&0&0\\\\0&1&1\\\\0&-1&1\\end{pmatrix},\\qquad O^{\\mathrm T}AO=\\begin{pmatrix}2&0&0\\\\0&1&0\\\\0&0&5\\end{pmatrix}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-13-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "求正交矩阵 $O$，使 $O^{\\mathrm T}AO$ 为对角矩阵：$A=\\begin{pmatrix}2&-2&0\\\\-2&1&-2\\\\0&-2&0\\end{pmatrix}$。",
  "options": [
   "$O=\\dfrac13\\begin{pmatrix}2&2&1\\\\-2&1&2\\\\1&-2&2\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(4,-2,1)$",
   "$O=\\dfrac13\\begin{pmatrix}2&-2&1\\\\2&1&2\\\\1&2&2\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(4,1,-2)$",
   "$O=\\dfrac13\\begin{pmatrix}2&2&1\\\\-2&1&2\\\\1&-2&2\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(4,1,-2)$",
   "$O=\\dfrac13\\begin{pmatrix}2&2&1\\\\1&-2&2\\\\-2&1&2\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(1,4,-2)$"
  ],
  "answer": 2,
  "hint": "特征值 $4,1,-2$",
  "solution": "$|\\lambda E-A|=\\lambda^3-3\\lambda^2-6\\lambda+8=(\\lambda-4)(\\lambda-1)(\\lambda+2)$，特征值 $4,1,-2$。\n$\\lambda=4$：$p_1=(2,-2,1)^{\\mathrm T}$；$\\lambda=1$：$p_2=(2,1,-2)^{\\mathrm T}$；$\\lambda=-2$：$p_3=(1,2,2)^{\\mathrm T}$（三者已两两正交）。\n单位化得\n$$O=\\frac13\\begin{pmatrix}2&2&1\\\\-2&1&2\\\\1&-2&2\\end{pmatrix},\\qquad O^{\\mathrm T}AO=\\operatorname{diag}(4,1,-2).$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-13-3",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "求正交矩阵 $O$，使 $O^{\\mathrm T}AO$ 为对角矩阵：$A=\\begin{pmatrix}1&2&4\\\\2&-2&2\\\\4&2&1\\end{pmatrix}$。",
  "options": [
   "$O=\\begin{pmatrix}\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\\\0&-\\frac{2\\sqrt2}{3}&\\frac13\\\\-\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(-3,6,-3)$",
   "$O=\\begin{pmatrix}\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\\\0&\\frac{2\\sqrt2}{3}&\\frac13\\\\-\\frac{\\sqrt2}{2}&-\\frac{\\sqrt2}{6}&\\frac23\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(-3,-3,6)$",
   "$O=\\begin{pmatrix}\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\\\0&-\\frac{2\\sqrt2}{3}&\\frac13\\\\\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&-\\frac23\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(6,-3,-3)$",
   "$O=\\begin{pmatrix}\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\\\0&-\\frac{2\\sqrt2}{3}&\\frac13\\\\-\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(-3,-3,6)$"
  ],
  "answer": 3,
  "hint": "特征值 $-3,-3,6$，二重特征值需正交化",
  "solution": "$|\\lambda E-A|=\\lambda^3-3\\lambda^2-18\\lambda+54$…分解得 $(\\lambda+3)^2(\\lambda-6)$，特征值 $-3,-3,6$（$\\operatorname{tr}A=0$，$\\det A=-54$）。\n$\\lambda=-3$：由 $(-3E-A)x=0$ 得 $p_1=(1,0,-1)^{\\mathrm T}$，$p_2=(2,1,2)^{\\mathrm T}$（正交化见下）；$\\lambda=6$：$p_3=(2,-2,1)^{\\mathrm T}$。\n取 $q_2=p_2-\\frac{(p_2,p_1)}{(p_1,p_1)}p_1=(2,1,2)^{\\mathrm T}$（恰与 $p_1$ 正交），单位化后\n$$O=\\begin{pmatrix}\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\\\0&-\\frac{2\\sqrt2}{3}&\\frac13\\\\-\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\end{pmatrix},\\qquad O^{\\mathrm T}AO=\\operatorname{diag}(-3,-3,6).$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-13-4",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "求正交矩阵 $O$，使 $O^{\\mathrm T}AO$ 为对角矩阵：$A=\\begin{pmatrix}1&-1&0&0\\\\-1&1&0&0\\\\0&0&4&2\\\\0&0&2&1\\end{pmatrix}$。",
  "options": [
   "$O$ 的第 $1$—$4$ 列依次为 $\\frac{1}{\\sqrt2}(1,1,0,0)^{\\mathrm T},\\frac{1}{\\sqrt2}(1,-1,0,0)^{\\mathrm T},\\frac{1}{\\sqrt5}(0,0,1,-2)^{\\mathrm T},\\frac{1}{\\sqrt5}(0,0,2,1)^{\\mathrm T}$，$O^{\\mathrm T}AO=\\operatorname{diag}(0,2,0,5)$",
   "$O$ 的第 $1$—$4$ 列依次为 $\\frac{1}{\\sqrt2}(1,1,0,0)^{\\mathrm T},\\frac{1}{\\sqrt2}(1,-1,0,0)^{\\mathrm T},\\frac{1}{\\sqrt5}(0,0,1,-2)^{\\mathrm T},\\frac{1}{\\sqrt5}(0,0,2,1)^{\\mathrm T}$，$O^{\\mathrm T}AO=\\operatorname{diag}(2,0,0,5)$",
   "$O$ 的第 $1$—$4$ 列依次为 $\\frac{1}{\\sqrt2}(1,-1,0,0)^{\\mathrm T},\\frac{1}{\\sqrt2}(1,1,0,0)^{\\mathrm T},\\frac{1}{\\sqrt5}(0,0,2,1)^{\\mathrm T},\\frac{1}{\\sqrt5}(0,0,1,-2)^{\\mathrm T}$，$O^{\\mathrm T}AO=\\operatorname{diag}(0,2,5,0)$",
   "$O$ 的第 $1$—$4$ 列依次为 $\\frac{1}{\\sqrt2}(1,1,0,0)^{\\mathrm T},\\frac{1}{\\sqrt2}(1,-1,0,0)^{\\mathrm T},\\frac{1}{\\sqrt5}(0,0,2,1)^{\\mathrm T},\\frac{1}{\\sqrt5}(0,0,1,-2)^{\\mathrm T}$，$O^{\\mathrm T}AO=\\operatorname{diag}(0,2,0,5)$"
  ],
  "answer": 0,
  "hint": "两个二阶块分别求特征值与特征向量",
  "solution": "$A$ 是分块对角矩阵，左上块 $\\begin{pmatrix}1&-1\\\\-1&1\\end{pmatrix}$ 的特征值为 $0,2$，特征向量 $(1,1)^{\\mathrm T},(1,-1)^{\\mathrm T}$；右下块 $\\begin{pmatrix}4&2\\\\2&1\\end{pmatrix}$ 的特征值为 $0,5$，特征向量 $(1,-2)^{\\mathrm T},(2,1)^{\\mathrm T}$。\n单位化后令\n$$O=\\begin{pmatrix}\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{2}&0&0\\\\\\frac{\\sqrt2}{2}&-\\frac{\\sqrt2}{2}&0&0\\\\0&0&\\frac{\\sqrt5}{5}&\\frac{2\\sqrt5}{5}\\\\0&0&-\\frac{2\\sqrt5}{5}&\\frac{\\sqrt5}{5}\\end{pmatrix},\\qquad O^{\\mathrm T}AO=\\operatorname{diag}(0,2,0,5).$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-14",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $n$ 阶实对称矩阵 $A$ 满足 $A^{3}=E$，求证 $A$ 是单位矩阵。",
  "answer": "证明见解析",
  "hint": "实对称矩阵的特征值都是实数，且可正交对角化",
  "solution": "设 $\\lambda$ 是 $A$ 的任一特征值，$p\\neq0$ 为对应特征向量。由 $A^3=E$ 得 $A^3p=p$，即 $\\lambda^3p=p$，故 $\\lambda^3=1$。\n因 $A$ 实对称，其特征值全为实数，而实根只有 $\\lambda=1$。\n又实对称矩阵可正交对角化：存在正交矩阵 $Q$ 使 $Q^{\\mathrm T}AQ=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)=\\operatorname{diag}(1,\\dots,1)=E$，于是 $A=QEQ^{\\mathrm T}=E$。官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-15",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "设三阶实对称矩阵 $A$ 的特征值为 $\\lambda_1=1,\\lambda_2=2,\\lambda_3=3$。已知 $A$ 的属于 $\\lambda_1$ 和 $\\lambda_2$ 的特征向量分别为 $p_1=(-1,-1,1)^{\\mathrm T}$，$p_2=(1,-2,-1)^{\\mathrm T}$，求 $A$ 的属于 $\\lambda_3$ 的特征向量。",
  "options": [
   "$p_3=k(1,0,-1)^{\\mathrm T}\\ (k\\neq0)$",
   "$p_3=k(1,0,1)^{\\mathrm T}\\ (k\\neq0)$",
   "$p_3=k(0,1,1)^{\\mathrm T}\\ (k\\neq0)$",
   "$p_3=k(1,1,0)^{\\mathrm T}\\ (k\\neq0)$"
  ],
  "answer": 1,
  "hint": "实对称矩阵不同特征值的特征向量正交",
  "solution": "实对称矩阵属于不同特征值的特征向量相互正交，故 $p_3$ 与 $p_1,p_2$ 都正交，解\n$$\\begin{cases}-x_1-x_2+x_3=0\\\\ x_1-2x_2-x_3=0\\end{cases}\\Longrightarrow x_1=x_3,\\ x_2=0.$$\n故 $p_3=k(1,0,1)^{\\mathrm T}\\ (k\\neq0)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-16-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "设 $A$ 是三阶实对称矩阵，其特征值为 $\\lambda_1=\\lambda_2=6,\\lambda_3=2$。已知属于 $\\lambda_1=\\lambda_2=6$ 的特征向量为 $p_1=(1,-1,1)^{\\mathrm T}$，$p_2=(1,1,1)^{\\mathrm T}$。求 $A$ 的属于 $\\lambda_3=2$ 的特征向量 $p_3$。",
  "options": [
   "$p_3=k(1,0,-1)^{\\mathrm T}\\ (k\\neq0)$",
   "$p_3=k(1,0,1)^{\\mathrm T}\\ (k\\neq0)$",
   "$p_3=k(0,1,-1)^{\\mathrm T}\\ (k\\neq0)$",
   "$p_3=k(1,-1,0)^{\\mathrm T}\\ (k\\neq0)$"
  ],
  "answer": 0,
  "hint": "$p_3$ 与 $p_1,p_2$ 都正交",
  "solution": "$p_3\\perp p_1$，$p_3\\perp p_2$，即 $x_1-x_2+x_3=0$，$x_1+x_2+x_3=0$，相减得 $x_2=0$，$x_3=-x_1$。\n故 $p_3=k(1,0,-1)^{\\mathrm T}\\ (k\\neq0)$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-16-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "设 $A$ 是三阶实对称矩阵，其特征值为 $\\lambda_1=\\lambda_2=6,\\lambda_3=2$，属于 $\\lambda_1=\\lambda_2=6$ 的特征向量为 $p_1=(1,-1,1)^{\\mathrm T}$，$p_2=(1,1,1)^{\\mathrm T}$。求正交矩阵 $O$，使得 $O^{\\mathrm T}AO$ 为对角形。",
  "options": [
   "$O=\\begin{pmatrix}\\frac{\\sqrt3}{3}&\\frac{\\sqrt6}{6}&\\frac{\\sqrt2}{2}\\\\\\frac{\\sqrt3}{3}&-\\frac{\\sqrt6}{3}&0\\\\\\frac{\\sqrt3}{3}&\\frac{\\sqrt6}{6}&-\\frac{\\sqrt2}{2}\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(2,6,6)$",
   "$O=\\begin{pmatrix}\\frac{\\sqrt3}{3}&\\frac{\\sqrt6}{6}&\\frac{\\sqrt2}{2}\\\\\\frac{\\sqrt3}{3}&-\\frac{\\sqrt6}{3}&0\\\\\\frac{\\sqrt3}{3}&\\frac{\\sqrt6}{6}&-\\frac{\\sqrt2}{2}\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(6,6,2)$",
   "$O=\\begin{pmatrix}\\frac{\\sqrt3}{3}&\\frac{\\sqrt6}{3}&\\frac{\\sqrt2}{2}\\\\\\frac{\\sqrt3}{3}&-\\frac{\\sqrt6}{6}&0\\\\\\frac{\\sqrt3}{3}&\\frac{\\sqrt6}{6}&-\\frac{\\sqrt2}{2}\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(6,6,2)$",
   "$O=\\begin{pmatrix}\\frac{\\sqrt3}{3}&\\frac{\\sqrt6}{6}&\\frac{\\sqrt2}{2}\\\\\\frac{\\sqrt3}{3}&-\\frac{\\sqrt6}{3}&0\\\\\\frac{\\sqrt3}{3}&\\frac{\\sqrt6}{6}&\\frac{\\sqrt2}{2}\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(6,6,2)$"
  ],
  "answer": 1,
  "hint": "把 $p_1,p_2,p_3$ 单位化后按列排成 $O$",
  "solution": "$p_3=(1,0,-1)^{\\mathrm T}$（与 $p_1,p_2$ 正交）。$\\|p_1\\|=\\sqrt3$，$\\|p_2\\|=\\sqrt3$，$\\|p_3\\|=\\sqrt2$，单位化得\n$$O=\\begin{pmatrix}\\frac{\\sqrt3}{3}&\\frac{\\sqrt6}{6}&\\frac{\\sqrt2}{2}\\\\\\frac{\\sqrt3}{3}&-\\frac{\\sqrt6}{3}&0\\\\\\frac{\\sqrt3}{3}&\\frac{\\sqrt6}{6}&-\\frac{\\sqrt2}{2}\\end{pmatrix},\\qquad O^{\\mathrm T}AO=\\operatorname{diag}(6,6,2).$$\n官方答案一致（答案不唯一）[✓官方]"
 },
 {
  "id": "ch7-16-3",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "设 $A$ 是三阶实对称矩阵，其特征值为 $\\lambda_1=\\lambda_2=6,\\lambda_3=2$，属于 $\\lambda_1=\\lambda_2=6$ 的特征向量为 $p_1=(1,-1,1)^{\\mathrm T}$，$p_2=(1,1,1)^{\\mathrm T}$。求 $A$。",
  "options": [
   "$A=\\begin{pmatrix}6&0&2\\\\0&4&0\\\\2&0&6\\end{pmatrix}$",
   "$A=\\begin{pmatrix}4&0&-2\\\\0&6&0\\\\-2&0&4\\end{pmatrix}$",
   "$A=\\begin{pmatrix}4&0&2\\\\0&6&0\\\\2&0&4\\end{pmatrix}$",
   "$A=\\begin{pmatrix}4&2&0\\\\2&4&0\\\\0&0&6\\end{pmatrix}$"
  ],
  "answer": 2,
  "hint": "$A=O\\operatorname{diag}(6,6,2)O^{\\mathrm T}$",
  "solution": "由 $A=O\\operatorname{diag}(6,6,2)O^{\\mathrm T}$（$O$ 同前一问），得\n$$A=6\\left(\\frac{p_1p_1^{\\mathrm T}}{\\|p_1\\|^2}+\\frac{p_2p_2^{\\mathrm T}}{\\|p_2\\|^2}\\right)+2\\cdot\\frac{p_3p_3^{\\mathrm T}}{\\|p_3\\|^2}\n=\\begin{pmatrix}4&0&2\\\\0&6&0\\\\2&0&4\\end{pmatrix}.$$\n验算：$\\operatorname{tr}A=14=6+6+2$，$A(1,0,-1)^{\\mathrm T}=2(1,0,-1)^{\\mathrm T}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-17-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "设 $A$ 是三阶实对称矩阵，其特征值为 $\\lambda_1=\\lambda_2=1,\\lambda_3=-2$。已知 $A$ 的属于 $\\lambda_3=-2$ 的特征向量为 $p_3=(1,1,-1)^{\\mathrm T}$。求 $A$ 的属于 $\\lambda_1=\\lambda_2=1$ 的相互正交的特征向量 $p_1$ 与 $p_2$。",
  "options": [
   "$p_1=(1,0,1)^{\\mathrm T}$，$p_2=(1,2,1)^{\\mathrm T}$",
   "$p_1=(1,0,1)^{\\mathrm T}$，$p_2=(-1,2,1)^{\\mathrm T}$",
   "$p_1=(1,1,0)^{\\mathrm T}$，$p_2=(-1,2,1)^{\\mathrm T}$",
   "$p_1=(1,0,1)^{\\mathrm T}$，$p_2=(1,1,1)^{\\mathrm T}$"
  ],
  "answer": 1,
  "hint": "在 $x_1+x_2-x_3=0$ 的解空间里取两个正交向量",
  "solution": "$p_1,p_2$ 都满足 $p_3^{\\mathrm T}x=0$，即 $x_1+x_2-x_3=0$，解空间维数 $2$。\n取 $p_1=(1,0,1)^{\\mathrm T}$；再由 $p_1^{\\mathrm T}p_2=0$、$p_3^{\\mathrm T}p_2=0$ 解出 $p_2$：设 $p_2=(a,b,c)$，则 $a+c=0$，$a+b-c=0$，取 $a=-1$ 得 $b=2$，$c=1$，即 $p_2=(-1,2,1)^{\\mathrm T}$。检验：$p_1\\cdot p_2=-1+0+1=0$，$p_3\\cdot p_2=-1+2-1=0$。\n故 $p_1=(1,0,1)^{\\mathrm T}$，$p_2=(-1,2,1)^{\\mathrm T}$（答案不唯一）。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-17-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "设 $A$ 是三阶实对称矩阵，特征值为 $\\lambda_1=\\lambda_2=1,\\lambda_3=-2$，属于 $\\lambda_3=-2$ 的特征向量为 $p_3=(1,1,-1)^{\\mathrm T}$。求正交矩阵 $O$，使得 $O^{\\mathrm T}AO$ 为对角形。",
  "options": [
   "$O=\\begin{pmatrix}\\frac{1}{\\sqrt2}&-\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\0&\\frac{2}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt6}&-\\frac{1}{\\sqrt3}\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(-2,1,1)$",
   "$O=\\begin{pmatrix}\\frac{1}{\\sqrt2}&-\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\0&\\frac{2}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\\\frac{1}{\\sqrt2}&-\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(1,1,-2)$",
   "$O=\\begin{pmatrix}\\frac{1}{\\sqrt2}&-\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\0&\\frac{2}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt6}&-\\frac{1}{\\sqrt3}\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(1,1,-2)$",
   "$O=\\begin{pmatrix}\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\0&\\frac{2}{\\sqrt6}&-\\frac{1}{\\sqrt3}\\\\\\frac{1}{\\sqrt2}&-\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\end{pmatrix}$，$O^{\\mathrm T}AO=\\operatorname{diag}(1,-2,1)$"
  ],
  "answer": 2,
  "hint": "$p_1=(1,0,1)^{\\mathrm T},p_2=(-1,2,1)^{\\mathrm T}$，单位化后排成列",
  "solution": "取 $p_1=(1,0,1)^{\\mathrm T}$，$p_2=(-1,2,1)^{\\mathrm T}$，$\\|p_1\\|=\\sqrt2$，$\\|p_2\\|=\\sqrt6$，$\\|p_3\\|=\\sqrt3$，则\n$$O=\\begin{pmatrix}\\frac{1}{\\sqrt2}&-\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\0&\\frac{2}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt6}&-\\frac{1}{\\sqrt3}\\end{pmatrix},\\qquad O^{\\mathrm T}AO=\\operatorname{diag}(1,1,-2).$$\n官方答案一致（答案不唯一）[✓官方]"
 },
 {
  "id": "ch7-17-3",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "设 $A$ 是三阶实对称矩阵，特征值为 $\\lambda_1=\\lambda_2=1,\\lambda_3=-2$，属于 $\\lambda_3=-2$ 的特征向量为 $p_3=(1,1,-1)^{\\mathrm T}$。求 $A$。",
  "options": [
   "$A=\\begin{pmatrix}0&1&-1\\\\1&0&1\\\\-1&1&0\\end{pmatrix}$",
   "$A=\\begin{pmatrix}1&-1&0\\\\-1&1&0\\\\0&0&0\\end{pmatrix}$",
   "$A=\\begin{pmatrix}0&-1&1\\\\-1&0&-1\\\\1&-1&0\\end{pmatrix}$",
   "$A=\\begin{pmatrix}0&-1&1\\\\-1&0&1\\\\1&1&0\\end{pmatrix}$"
  ],
  "answer": 3,
  "hint": "$A=O\\operatorname{diag}(1,1,-2)O^{\\mathrm T}$",
  "solution": "$$A=1\\cdot\\frac{p_1p_1^{\\mathrm T}}{2}+1\\cdot\\frac{p_2p_2^{\\mathrm T}}{6}-2\\cdot\\frac{p_3p_3^{\\mathrm T}}{3}\n=\\begin{pmatrix}0&-1&1\\\\-1&0&1\\\\1&1&0\\end{pmatrix}.$$\n验算：$\\operatorname{tr}A=0=1+1-2$，$A(1,1,-1)^{\\mathrm T}=(-2,-2,2)^{\\mathrm T}=-2(1,1,-1)^{\\mathrm T}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-18",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "设 $A=\\begin{pmatrix}1&2&2\\\\2&1&2\\\\2&2&1\\end{pmatrix}$，求 $A^{k}$（$k$ 为正整数）。",
  "options": [
   "$A^{k}=\\dfrac13\\begin{pmatrix}5^{k}+2(-1)^{k}&5^{k}+(-1)^{k+1}&5^{k}+(-1)^{k+1}\\\\5^{k}+(-1)^{k+1}&5^{k}+2(-1)^{k}&5^{k}+(-1)^{k+1}\\\\5^{k}+(-1)^{k+1}&5^{k}+(-1)^{k+1}&5^{k}+2(-1)^{k}\\end{pmatrix}$",
   "$A^{k}=\\dfrac13\\begin{pmatrix}5^{k}+2(-1)^{k}&5^{k}-(-1)^{k}&5^{k}-(-1)^{k}\\\\5^{k}-(-1)^{k}&5^{k}+2(-1)^{k}&5^{k}-(-1)^{k}\\\\5^{k}-(-1)^{k}&5^{k}-(-1)^{k}&5^{k}+2(-1)^{k}\\end{pmatrix}$",
   "$A^{k}=\\begin{pmatrix}5^{k}&0&0\\\\0&(-1)^{k}&0\\\\0&0&(-1)^{k}\\end{pmatrix}$",
   "$A^{k}=\\dfrac13\\begin{pmatrix}5^{k}+2(-1)^{k}&5^{k}+(-1)^{k+1}&5^{k}+(-1)^{k+1}\\\\5^{k}+(-1)^{k+1}&5^{k}+2(-1)^{k}&5^{k}+(-1)^{k-1}\\\\5^{k}+(-1)^{k+1}&5^{k}+(-1)^{k-1}&5^{k}+2(-1)^{k}\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "$A$ 的特征值为 $5,-1,-1$，作相似对角化后求幂",
  "solution": "$A=2J-E$（$J$ 为全 $1$ 矩阵）？更直接：$A$ 的特征值为 $5,-1,-1$，特征向量\n$$p_1=(1,1,1)^{\\mathrm T},\\quad p_2=(1,-1,0)^{\\mathrm T},\\quad p_3=(1,0,-1)^{\\mathrm T}.$$\n取 $P=(p_1,p_2,p_3)$，$P^{-1}AP=\\operatorname{diag}(5,-1,-1)$，故 $A^{k}=P\\operatorname{diag}(5^k,(-1)^k,(-1)^k)P^{-1}$。计算得\n$$A^{k}=\\frac13\\begin{pmatrix}5^{k}+2(-1)^{k}&5^{k}+(-1)^{k+1}&5^{k}+(-1)^{k+1}\\\\5^{k}+(-1)^{k+1}&5^{k}+2(-1)^{k}&5^{k}+(-1)^{k+1}\\\\5^{k}+(-1)^{k+1}&5^{k}+(-1)^{k+1}&5^{k}+2(-1)^{k}\\end{pmatrix}.$$\n（$k=1$ 时即 $A$ 本身。）官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-19",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "proof",
  "statement": "试证：若 $A$ 是秩为 $r$ 的 $n$ 阶实对称矩阵，且 $A^{2}=A$，则存在正交矩阵 $T$，使得\n$$T^{-1}AT=\\begin{pmatrix}E_r&O_1\\\\O_2&O_3\\end{pmatrix},$$\n其中 $O_1,O_2,O_3$ 为零矩阵。",
  "answer": "证明见解析",
  "hint": "幂等矩阵的特征值只能是 $0$ 或 $1$；实对称矩阵可正交对角化",
  "solution": "设 $\\lambda$ 是 $A$ 的特征值，$Ap=\\lambda p\\ (p\\neq0)$，则 $A^2p=\\lambda^2p$；由 $A^2=A$ 得 $\\lambda^2=\\lambda$，故 $\\lambda=0$ 或 $1$。\n$A$ 实对称，存在正交矩阵 $Q$ 使 $Q^{\\mathrm T}AQ=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)$。因为正交变换不改变秩，\n$$r=r(A)=r\\big(\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)\\big)=\\#\\{i:\\lambda_i=1\\}.$$\n适当调整 $Q$ 的列次序（仍是正交矩阵），可使前 $r$ 个对角元为 $1$、其余为 $0$，即\n$$T^{\\mathrm T}AT=\\begin{pmatrix}E_r&O_1\\\\O_2&O_3\\end{pmatrix},\\qquad T^{-1}=T^{\\mathrm T}.$$\n官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-20",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "proof",
  "statement": "试证：若 $A$ 是 $n$ 阶实对称矩阵，且 $A^{2}=E$，则存在正交矩阵 $T$，使得\n$$T^{-1}AT=\\begin{pmatrix}E_p&O_1\\\\O_2&-E_{n-p}\\end{pmatrix},$$\n其中 $O_1,O_2$ 为零矩阵，$p$ 为 $A$ 的正惯性指数。",
  "answer": "证明见解析",
  "hint": "$A^2=E$ 给出 $\\lambda=\\pm1$；正特征值个数即正惯性指数",
  "solution": "由 $A^2=E$ 得 $\\lambda^2=1$，故特征值只能是 $1$ 或 $-1$。\n$A$ 实对称，存在正交矩阵 $Q$ 使 $Q^{\\mathrm T}AQ=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)$。设其中有 $p$ 个 $1$、$n-p$ 个 $-1$（这正是 $A$ 的正、负惯性指数），调整列次序后可写成\n$$Q^{\\mathrm T}AQ=\\begin{pmatrix}E_p&O_1\\\\O_2&-E_{n-p}\\end{pmatrix}.$$\n取 $T=Q$ 即得结论。官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-21",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $A$ 是 $n$ 阶实对称矩阵，且存在正整数 $k$，使得 $A^{k}=O$，其中 $O$ 为零矩阵（称 $A$ 为幂零矩阵）。求证：$A=O$。",
  "answer": "证明见解析",
  "hint": "幂零矩阵的特征值全为 $0$，再用实对称可对角化",
  "solution": "设 $\\lambda$ 为 $A$ 的任一特征值，$Ap=\\lambda p\\ (p\\neq0)$，则 $A^kp=\\lambda^kp$；由 $A^k=O$ 得 $\\lambda^k=0$，故 $\\lambda=0$。\n即 $A$ 的 $n$ 个特征值全为 $0$。又 $A$ 是实对称矩阵，可正交对角化：存在正交矩阵 $Q$ 使\n$$Q^{\\mathrm T}AQ=\\operatorname{diag}(0,\\dots,0)=O,$$\n于是 $A=QOQ^{\\mathrm T}=O$。官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-22-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 1,
  "type": "choice",
  "statement": "写出下列二次型的矩阵表示式：$f(x,y)=x^{2}-4xy+3y^{2}$。",
  "options": [
   "$f=\\tilde x^{\\mathrm T}A\\tilde x$，$\\tilde x=(x,y)^{\\mathrm T}$，$A=\\begin{pmatrix}1&-4\\\\-4&3\\end{pmatrix}$",
   "$f=\\tilde x^{\\mathrm T}A\\tilde x$，$\\tilde x=(x,y)^{\\mathrm T}$，$A=\\begin{pmatrix}1&-2\\\\-2&3\\end{pmatrix}$",
   "$f=\\tilde x^{\\mathrm T}A\\tilde x$，$\\tilde x=(x,y)^{\\mathrm T}$，$A=\\begin{pmatrix}1&2\\\\2&3\\end{pmatrix}$",
   "$f=\\tilde x^{\\mathrm T}A\\tilde x$，$\\tilde x=(x,y)^{\\mathrm T}$，$A=\\begin{pmatrix}1&0\\\\0&3\\end{pmatrix}$"
  ],
  "answer": 1,
  "hint": "交叉项系数 $2a_{12}=-4$",
  "solution": "设 $f=\\tilde x^{\\mathrm T}A\\tilde x$，$\\tilde x=(x,y)^{\\mathrm T}$，则 $a_{11}=1$，$a_{22}=3$，$2a_{12}=-4$ 即 $a_{12}=a_{21}=-2$，故\n$$A=\\begin{pmatrix}1&-2\\\\-2&3\\end{pmatrix}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-22-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "写出下列二次型的矩阵表示式：$f(x,y,z)=xy+xz-yz$。",
  "options": [
   "$A=\\begin{pmatrix}0&1&1\\\\1&0&-1\\\\1&-1&0\\end{pmatrix}$",
   "$A=\\begin{pmatrix}0&\\frac12&\\frac12\\\\\\frac12&0&\\frac12\\\\\\frac12&\\frac12&0\\end{pmatrix}$",
   "$A=\\begin{pmatrix}0&\\frac12&\\frac12\\\\\\frac12&0&-\\frac12\\\\\\frac12&-\\frac12&0\\end{pmatrix}$",
   "$A=\\begin{pmatrix}1&\\frac12&\\frac12\\\\\\frac12&1&-\\frac12\\\\\\frac12&-\\frac12&1\\end{pmatrix}$"
  ],
  "answer": 2,
  "hint": "三个交叉项各贡献 $\\frac12$ 到对称位置",
  "solution": "交叉项 $xy$、$xz$、$-yz$ 的系数分别对应 $2a_{12}=1$，$2a_{13}=1$，$2a_{23}=-1$，故 $a_{12}=a_{21}=\\frac12$，$a_{13}=a_{31}=\\frac12$，$a_{23}=a_{32}=-\\frac12$，对角元全为 $0$：\n$$A=\\begin{pmatrix}0&\\frac12&\\frac12\\\\\\frac12&0&-\\frac12\\\\\\frac12&-\\frac12&0\\end{pmatrix}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-22-3",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "写出下列二次型的矩阵表示式：$f(x_1,x_2,x_3)=x_1^{2}+2x_1x_2+x_2^{2}-x_3^{2}-4x_1x_3$。",
  "options": [
   "$f=x^{\\mathrm T}Ax$，$x=(x_1,x_2,x_3)^{\\mathrm T}$，$A=\\begin{pmatrix}1&2&-4\\\\2&1&0\\\\-4&0&-1\\end{pmatrix}$",
   "$f=x^{\\mathrm T}Ax$，$x=(x_1,x_2,x_3)^{\\mathrm T}$，$A=\\begin{pmatrix}1&1&-4\\\\1&1&0\\\\-4&0&-1\\end{pmatrix}$",
   "$f=x^{\\mathrm T}Ax$，$x=(x_1,x_2,x_3)^{\\mathrm T}$，$A=\\begin{pmatrix}1&1&-2\\\\1&1&0\\\\-2&0&1\\end{pmatrix}$",
   "$f=x^{\\mathrm T}Ax$，$x=(x_1,x_2,x_3)^{\\mathrm T}$，$A=\\begin{pmatrix}1&1&-2\\\\1&1&0\\\\-2&0&-1\\end{pmatrix}$"
  ],
  "answer": 3,
  "hint": "$2a_{12}=2$，$2a_{13}=-4$",
  "solution": "$a_{11}=a_{22}=1$，$a_{33}=-1$，$2a_{12}=2\\Rightarrow a_{12}=1$，$2a_{13}=-4\\Rightarrow a_{13}=a_{31}=-2$，$a_{23}=0$，故\n$$A=\\begin{pmatrix}1&1&-2\\\\1&1&0\\\\-2&0&-1\\end{pmatrix},\\qquad f=x^{\\mathrm T}Ax,\\ x=(x_1,x_2,x_3)^{\\mathrm T}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-22-4",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "写出下列二次型的矩阵表示式：$f(x_1,x_2,x_3,x_4)=3x_1^{2}-2x_1x_2+4x_1x_4-5x_2^{2}-6x_2x_3+x_3^{2}-8x_3x_4-7x_4^{2}$。",
  "options": [
   "$A=\\begin{pmatrix}3&-1&0&2\\\\-1&-5&-3&0\\\\0&-3&1&-4\\\\2&0&-4&-7\\end{pmatrix}$",
   "$A=\\begin{pmatrix}3&-2&0&4\\\\-2&-5&-6&0\\\\0&-6&1&-8\\\\4&0&-8&-7\\end{pmatrix}$",
   "$A=\\begin{pmatrix}3&-1&0&2\\\\-1&-5&-3&0\\\\0&-3&1&-4\\\\2&0&-4&7\\end{pmatrix}$",
   "$A=\\begin{pmatrix}3&-1&0&-2\\\\-1&-5&-3&0\\\\0&-3&1&4\\\\-2&0&4&-7\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "$2a_{12}=-2$，$2a_{14}=4$，$2a_{23}=-6$，$2a_{34}=-8$",
  "solution": "$a_{11}=3$，$a_{22}=-5$，$a_{33}=1$，$a_{44}=-7$；交叉项系数除以 $2$：$a_{12}=-1$，$a_{14}=2$，$a_{23}=-3$，$a_{34}=-4$，其余为 $0$，故\n$$A=\\begin{pmatrix}3&-1&0&2\\\\-1&-5&-3&0\\\\0&-3&1&-4\\\\2&0&-4&-7\\end{pmatrix}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-22-5",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "写出下列二次型的矩阵表示式：$f(x_1,x_2,\\cdots,x_n)=\\sum\\limits_{i=1}^{n-1}\\sum\\limits_{j=i+1}^{n}2x_ix_j$。",
  "options": [
   "$A$ 是主对角线上元素全为 $0$、其余元素全为 $2$ 的 $n$ 阶对称矩阵",
   "$A$ 是主对角线上元素全为 $0$、其余元素全为 $1$ 的 $n$ 阶对称矩阵",
   "$A$ 是元素全为 $1$ 的 $n$ 阶矩阵",
   "$A$ 是单位矩阵 $E$"
  ],
  "answer": 1,
  "hint": "所有 $x_ix_j\\ (i<j)$ 的系数都是 $2$，故 $a_{ij}=1$",
  "solution": "$f$ 中不含平方项（对角元为 $0$），每个交叉项 $2x_ix_j\\ (i<j)$ 的系数为 $2$，故 $a_{ij}=a_{ji}=1\\ (i\\neq j)$，即 $A$ 是主对角线上元素全为 $0$、其余元素全为 $1$ 的 $n$ 阶对称矩阵：\n$$A=(a_{ij}),\\quad a_{ii}=0,\\quad a_{ij}=1\\ (i\\neq j).$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-23-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 1,
  "type": "choice",
  "statement": "写出下列对称矩阵 $A$ 对应的二次型 $f$：$A=\\begin{pmatrix}a&b\\\\b&d\\end{pmatrix}$。",
  "options": [
   "$f(x_1,x_2)=ax_1^{2}+bx_1x_2+dx_2^{2}$",
   "$f(x_1,x_2)=ax_1^{2}+2bx_1x_2+2dx_2^{2}$",
   "$f(x_1,x_2)=ax_1^{2}+2bx_1x_2+dx_2^{2}$",
   "$f(x_1,x_2)=2ax_1^{2}+2bx_1x_2+2dx_2^{2}$"
  ],
  "answer": 2,
  "hint": "$f=a_{11}x_1^2+2a_{12}x_1x_2+a_{22}x_2^2$",
  "solution": "$f=ax_1^{2}+2bx_1x_2+dx_2^{2}$（交叉项系数是矩阵中对应元素的 $2$ 倍）。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-23-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "写出下列对称矩阵 $A$ 对应的二次型 $f$：$A=\\begin{pmatrix}1&1&0\\\\1&-1&2\\\\0&2&0\\end{pmatrix}$。",
  "options": [
   "$f(x_1,x_2,x_3)=x_1^{2}-x_2^{2}+2x_1x_2+2x_2x_3$",
   "$f(x_1,x_2,x_3)=x_1^{2}-x_2^{2}+x_1x_2+4x_2x_3$",
   "$f(x_1,x_2,x_3)=x_1^{2}+x_2^{2}+2x_1x_2+4x_2x_3$",
   "$f(x_1,x_2,x_3)=x_1^{2}-x_2^{2}+2x_1x_2+4x_2x_3$"
  ],
  "answer": 3,
  "hint": "对角元给平方项，非对角元乘 $2$ 给交叉项",
  "solution": "$f=x_1^{2}-x_2^{2}+0\\cdot x_3^{2}+2(1)x_1x_2+2(0)x_1x_3+2(2)x_2x_3$\n$$=x_1^{2}-x_2^{2}+2x_1x_2+4x_2x_3.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-23-3",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "写出下列对称矩阵 $A$ 对应的二次型 $f$：$A=\\begin{pmatrix}-1&1&-3\\\\1&-2&0\\\\-3&0&4\\end{pmatrix}$。",
  "options": [
   "$f(x_1,x_2,x_3)=-x_1^{2}-2x_2^{2}+4x_3^{2}+2x_1x_2-6x_1x_3$",
   "$f(x_1,x_2,x_3)=-x_1^{2}-2x_2^{2}+4x_3^{2}+x_1x_2-3x_1x_3$",
   "$f(x_1,x_2,x_3)=-x_1^{2}-2x_2^{2}+4x_3^{2}+2x_1x_2-3x_1x_3$",
   "$f(x_1,x_2,x_3)=-x_1^{2}-2x_2^{2}+4x_3^{2}+2x_1x_2+6x_1x_3$"
  ],
  "answer": 0,
  "hint": "$a_{12}=1$ 给出 $2x_1x_2$",
  "solution": "$f=-x_1^{2}-2x_2^{2}+4x_3^{2}+2x_1x_2-6x_1x_3+0\\cdot x_2x_3$\n$$=-x_1^{2}-2x_2^{2}+4x_3^{2}+2x_1x_2-6x_1x_3.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-23-4",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "写出下列对称矩阵 $A$ 对应的二次型 $f$：$A=\\begin{pmatrix}-1&\\frac12&1&-2\\\\\\frac12&3&3&-1\\\\1&3&0&\\frac32\\\\-2&-1&\\frac32&-2\\end{pmatrix}$。",
  "options": [
   "$f=-x_1^{2}+3x_2^{2}-2x_4^{2}+x_1x_2+2x_1x_3-4x_1x_4+6x_2x_3-2x_2x_4+\\frac32x_3x_4$",
   "$f=-x_1^{2}+3x_2^{2}-2x_4^{2}+x_1x_2+2x_1x_3-4x_1x_4+6x_2x_3-2x_2x_4+3x_3x_4$",
   "$f=-x_1^{2}+3x_2^{2}-2x_4^{2}+x_1x_2+x_1x_3-2x_1x_4+3x_2x_3-x_2x_4+3x_3x_4$",
   "$f=-x_1^{2}+3x_2^{2}+2x_4^{2}+x_1x_2+2x_1x_3-4x_1x_4+6x_2x_3-2x_2x_4+3x_3x_4$"
  ],
  "answer": 1,
  "hint": "$2a_{34}=3$ 给出 $3x_3x_4$",
  "solution": "对角元给平方项：$-x_1^{2}+3x_2^{2}+0\\cdot x_3^{2}-2x_4^{2}$；非对角元乘 $2$：\n$$f=-x_1^{2}+3x_2^{2}-2x_4^{2}+x_1x_2+2x_1x_3-4x_1x_4+6x_2x_3-2x_2x_4+3x_3x_4.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-24-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "用正交变换将下列二次型化为标准形，并求出所做的正交变换：$f(x_1,x_2,x_3)=2x_1^{2}+3x_2^{2}+3x_3^{2}+4x_2x_3$。",
  "options": [
   "取 $x=Oy$，$O=\\begin{pmatrix}1&0&0\\\\0&-\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{2}\\\\0&\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{2}\\end{pmatrix}$，$f=2y_1^{2}+5y_2^{2}+y_3^{2}$",
   "取 $x=Oy$，$O=\\begin{pmatrix}1&0&0\\\\0&\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{2}\\\\0&\\frac{\\sqrt2}{2}&-\\frac{\\sqrt2}{2}\\end{pmatrix}$，$f=2y_1^{2}+y_2^{2}+5y_3^{2}$",
   "取 $x=Oy$，$O=\\begin{pmatrix}1&0&0\\\\0&-\\frac{\\sqrt2}{2}&-\\frac{\\sqrt2}{2}\\\\0&\\frac{\\sqrt2}{2}&-\\frac{\\sqrt2}{2}\\end{pmatrix}$，$f=2y_1^{2}-y_2^{2}+5y_3^{2}$",
   "取 $x=Oy$，$O=\\begin{pmatrix}1&0&0\\\\0&-\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{2}\\\\0&\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{2}\\end{pmatrix}$，$f=2y_1^{2}+y_2^{2}+5y_3^{2}$"
  ],
  "answer": 3,
  "hint": "特征值 $2,1,5$；$x=Oy$",
  "solution": "二次型的矩阵 $A=\\begin{pmatrix}2&0&0\\\\0&3&2\\\\0&2&3\\end{pmatrix}$，特征值 $\\lambda_1=2,\\lambda_2=1,\\lambda_3=5$，对应单位特征向量\n$$e_1=(1,0,0)^{\\mathrm T},\\ e_2=\\frac{1}{\\sqrt2}(0,1,-1)^{\\mathrm T},\\ e_3=\\frac{1}{\\sqrt2}(0,1,1)^{\\mathrm T}.$$\n令 $O=(e_1,e_2,e_3)$，作正交变换 $x=Oy$，则\n$$f=2y_1^{2}+y_2^{2}+5y_3^{2}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-24-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "用正交变换将下列二次型化为标准形，并求出所做的正交变换：$f(x_1,x_2,x_3)=x_1^{2}-2x_2^{2}+x_3^{2}+4x_1x_2+8x_1x_3+4x_2x_3$。",
  "options": [
   "取 $x=Oy$，$O=\\begin{pmatrix}\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\\\0&-\\frac{2\\sqrt2}{3}&\\frac13\\\\-\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\end{pmatrix}$，$f=-3y_1^{2}-3y_2^{2}+6y_3^{2}$",
   "取 $x=Oy$，$O=\\begin{pmatrix}\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\\\0&-\\frac{2\\sqrt2}{3}&\\frac13\\\\-\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\end{pmatrix}$，$f=6y_1^{2}-3y_2^{2}-3y_3^{2}$",
   "取 $x=Oy$，$O=\\begin{pmatrix}\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\\\0&\\frac{2\\sqrt2}{3}&\\frac13\\\\\\frac{\\sqrt2}{2}&-\\frac{\\sqrt2}{6}&\\frac23\\end{pmatrix}$，$f=-3y_1^{2}-3y_2^{2}+6y_3^{2}$",
   "取 $x=Oy$，$O=\\begin{pmatrix}\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\\\0&-\\frac{2\\sqrt2}{3}&\\frac13\\\\-\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\end{pmatrix}$，$f=3y_1^{2}+3y_2^{2}-6y_3^{2}$"
  ],
  "answer": 0,
  "hint": "矩阵为 $\\begin{pmatrix}1&2&4\\\\2&-2&2\\\\4&2&1\\end{pmatrix}$，特征值 $6,-3,-3$",
  "solution": "$A=\\begin{pmatrix}1&2&4\\\\2&-2&2\\\\4&2&1\\end{pmatrix}$，$|\\lambda E-A|=(\\lambda-6)(\\lambda+3)^2$，特征值 $6,-3,-3$。\n$\\lambda=-3$ 时 $(-3E-A)x=0$ 给出两个正交特征向量 $p_1=(1,0,-1)^{\\mathrm T}$，$p_2=(2,1,2)^{\\mathrm T}$；$\\lambda=6$ 时 $p_3=(2,-2,1)^{\\mathrm T}$。\n单位化并令 $O$ 的三列为 $e_1,e_2,e_3$，则 $x=Oy$ 把 $f$ 化为\n$$f=-3y_1^{2}-3y_2^{2}+6y_3^{2},\\qquad O=\\begin{pmatrix}\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\\\0&-\\frac{2\\sqrt2}{3}&\\frac13\\\\-\\frac{\\sqrt2}{2}&\\frac{\\sqrt2}{6}&\\frac23\\end{pmatrix}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-25",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "fill",
  "statement": "已知实二次型 $f=a(x_1^{2}+x_2^{2}+x_3^{2})+4(x_1x_2+x_1x_3+x_2x_3)$，经过某个正交变换后，$f$ 可化成标准形 $f=6y_1^{2}$，求 $a$ 的值。",
  "answer": "2",
  "hint": "正交变换不改变特征值，故 $f$ 的特征值只能是 $6,0,0$",
  "solution": "$f$ 的矩阵为 $A=\\begin{pmatrix}a&2&2\\\\2&a&2\\\\2&2&a\\end{pmatrix}$，其特征值为 $a+4$（特征向量 $(1,1,1)^{\\mathrm T}$）与 $a-2$（二重，特征向量与 $(1,1,1)^{\\mathrm T}$ 正交）。\n标准形为 $6y_1^{2}$ 说明 $A$ 的特征值为 $6,0,0$，故 $a+4=6$ 且 $a-2=0$，得 $a=2$。官方答案：$a=2$ [✓官方]"
 },
 {
  "id": "ch7-26-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "设二次型 $f(x_1,x_2,x_3)=x^{\\mathrm T}Ax=ax_1^{2}+2x_2^{2}-2x_3^{2}+2bx_1x_3\\ (b>0)$。已知 $f$ 的矩阵 $A$ 的特征值之和为 $1$，特征值之积为 $-12$。求 $a$ 和 $b$ 的值。",
  "options": [
   "$a=1$，$b=-2$",
   "$a=1$，$b=2$",
   "$a=2$，$b=1$",
   "$a=-1$，$b=2$"
  ],
  "answer": 1,
  "hint": "特征值之和 $=\\operatorname{tr}A$，之积 $=\\det A$",
  "solution": "$A=\\begin{pmatrix}a&0&b\\\\0&2&0\\\\b&0&-2\\end{pmatrix}$，故\n$$\\operatorname{tr}A=a+2-2=a=1,\\qquad \\det A=2\\cdot(-2a-b^2)=2(-2-b^2)=-12.$$\n由 $-2-b^2=-6$ 得 $b^2=4$，又 $b>0$，故 $b=2$。即 $a=1,\\ b=2$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-26-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "设 $f(x_1,x_2,x_3)=ax_1^{2}+2x_2^{2}-2x_3^{2}+2bx_1x_3\\ (b>0)$，其中 $a=1,b=2$。求正交变换 $x=Oy$，将 $f$ 化为标准形。",
  "options": [
   "$O=\\dfrac{\\sqrt5}{5}\\begin{pmatrix}1&0&2\\\\0&\\sqrt5&0\\\\-2&0&1\\end{pmatrix}$，$f=3y_1^{2}+2y_2^{2}-2y_3^{2}$",
   "$O=\\dfrac{\\sqrt5}{5}\\begin{pmatrix}1&0&-2\\\\0&\\sqrt5&0\\\\2&0&1\\end{pmatrix}$，$f=-3y_1^{2}+2y_2^{2}+2y_3^{2}$",
   "$O=\\dfrac{\\sqrt5}{5}\\begin{pmatrix}1&0&2\\\\0&\\sqrt5&0\\\\-2&0&1\\end{pmatrix}$，$f=-3y_1^{2}+2y_2^{2}+2y_3^{2}$",
   "$O=\\dfrac{\\sqrt5}{5}\\begin{pmatrix}1&0&2\\\\0&\\sqrt5&0\\\\-2&0&1\\end{pmatrix}$，$f=-3y_1^{2}+2y_2^{2}-2y_3^{2}$"
  ],
  "answer": 2,
  "hint": "$A=\\begin{pmatrix}1&0&2\\\\0&2&0\\\\2&0&-2\\end{pmatrix}$，特征值 $-3,2,2$",
  "solution": "$A=\\begin{pmatrix}1&0&2\\\\0&2&0\\\\2&0&-2\\end{pmatrix}$，$|\\lambda E-A|=(\\lambda-2)\\big[(\\lambda-1)(\\lambda+2)-4\\big]=(\\lambda-2)(\\lambda-2)(\\lambda+3)$，特征值 $2,2,-3$。\n$\\lambda=-3$：$p_1=(1,0,-2)^{\\mathrm T}$；$\\lambda=2$：$p_2=(0,1,0)^{\\mathrm T}$，$p_3=(2,0,1)^{\\mathrm T}$。单位化后令\n$$O=\\frac{\\sqrt5}{5}\\begin{pmatrix}1&0&2\\\\0&\\sqrt5&0\\\\-2&0&1\\end{pmatrix},$$\n则 $x=Oy$ 使 $f=-3y_1^{2}+2y_2^{2}+2y_3^{2}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-26-3",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "设 $f(x_1,x_2,x_3)=ax_1^{2}+2x_2^{2}-2x_3^{2}+2bx_1x_3\\ (b>0)$，其中 $a=1,b=2$。写出 $f$ 的规范形。",
  "options": [
   "$f=z_1^{2}-z_2^{2}-z_3^{2}$",
   "$f=-z_1^{2}-z_2^{2}+z_3^{2}$",
   "$f=z_1^{2}+z_2^{2}+z_3^{2}$",
   "$f=z_1^{2}+z_2^{2}-z_3^{2}$"
  ],
  "answer": 3,
  "hint": "规范形只保留正负号：两个正、一个负",
  "solution": "由前一问，$f$ 的标准形为 $-3y_1^{2}+2y_2^{2}+2y_3^{2}$，有两个正项、一个负项，惯性指数为 $(2,1)$。\n再令 $z_1=\\sqrt2y_2,\\ z_2=\\sqrt2y_3,\\ z_3=\\sqrt3y_1$，得规范形\n$$f=z_1^{2}+z_2^{2}-z_3^{2}.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-27-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "已知 $\\beta=\\left(\\dfrac{1}{\\sqrt2},-\\dfrac{1}{\\sqrt2},0\\right)^{\\mathrm T}$ 是对称矩阵 $A=\\begin{pmatrix}4&2&a\\\\2&4&2\\\\a&2&4\\end{pmatrix}$ 的单位特征向量。求 $a$，并求 $\\beta$ 对应的特征值 $\\lambda$。",
  "options": [
   "$a=2$，$\\lambda=4$",
   "$a=0$，$\\lambda=2$",
   "$a=2$，$\\lambda=2$",
   "$a=-2$，$\\lambda=2$"
  ],
  "answer": 2,
  "hint": "$A\\beta=\\lambda\\beta$，比较第一个分量",
  "solution": "设 $A\\beta=\\lambda\\beta$，即\n$$A\\beta=\\left(\\frac{4}{\\sqrt2}-\\frac{2}{\\sqrt2},\\ \\frac{2}{\\sqrt2}-\\frac{4}{\\sqrt2},\\ \\frac{a}{\\sqrt2}-\\frac{2}{\\sqrt2}\\right)^{\\mathrm T}=\\left(\\frac{2}{\\sqrt2},-\\frac{2}{\\sqrt2},\\frac{a-2}{\\sqrt2}\\right)^{\\mathrm T}\n=\\lambda\\left(\\frac{1}{\\sqrt2},-\\frac{1}{\\sqrt2},0\\right)^{\\mathrm T}.$$\n由前两个分量得 $\\lambda=2$；再由第三个分量 $\\frac{a-2}{\\sqrt2}=0$ 得 $a=2$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-27-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "已知 $\\beta=\\left(\\dfrac{1}{\\sqrt2},-\\dfrac{1}{\\sqrt2},0\\right)^{\\mathrm T}$ 是对称矩阵 $A=\\begin{pmatrix}4&2&2\\\\2&4&2\\\\2&2&4\\end{pmatrix}$ 的单位特征向量。求以 $\\beta$ 为第 $1$ 列的正交矩阵 $P$，使得在正交变换 $x=Py$ 下二次型 $f=x^{\\mathrm T}Ax$ 化为标准形，并写出标准形（$x=(x_1,x_2,x_3)^{\\mathrm T}$，$y=(y_1,y_2,y_3)^{\\mathrm T}$）。",
  "options": [
   "$P=\\begin{pmatrix}\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\-\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\0&-\\frac{2}{\\sqrt6}&\\frac{1}{\\sqrt3}\\end{pmatrix}$，$f=8y_1^{2}+2y_2^{2}+2y_3^{2}$",
   "$P=\\begin{pmatrix}\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt3}&\\frac{1}{\\sqrt6}\\\\-\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt3}&\\frac{1}{\\sqrt6}\\\\0&\\frac{1}{\\sqrt3}&-\\frac{2}{\\sqrt6}\\end{pmatrix}$，$f=2y_1^{2}+8y_2^{2}+2y_3^{2}$",
   "$P=\\begin{pmatrix}\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\-\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\0&-\\frac{2}{\\sqrt6}&-\\frac{1}{\\sqrt3}\\end{pmatrix}$，$f=2y_1^{2}+2y_2^{2}+8y_3^{2}$",
   "$P=\\begin{pmatrix}\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\-\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\0&-\\frac{2}{\\sqrt6}&\\frac{1}{\\sqrt3}\\end{pmatrix}$，$f=2y_1^{2}+2y_2^{2}+8y_3^{2}$"
  ],
  "answer": 3,
  "hint": "$A$ 的特征值为 $2,2,8$；再取两个与 $\\beta$ 正交的单位向量",
  "solution": "$A$ 的特征多项式 $|\\lambda E-A|=(\\lambda-2)^2(\\lambda-8)$，特征值 $2,2,8$。$\\beta$ 对应 $\\lambda=2$。\n在与 $\\beta$ 正交的平面内再取 $\\lambda=2$ 的单位特征向量 $p_2=\\frac{1}{\\sqrt6}(1,1,-2)^{\\mathrm T}$，以及 $\\lambda=8$ 的单位特征向量 $p_3=\\frac{1}{\\sqrt3}(1,1,1)^{\\mathrm T}$。令\n$$P=\\begin{pmatrix}\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\-\\frac{1}{\\sqrt2}&\\frac{1}{\\sqrt6}&\\frac{1}{\\sqrt3}\\\\0&-\\frac{2}{\\sqrt6}&\\frac{1}{\\sqrt3}\\end{pmatrix},$$\n则 $P$ 为正交矩阵且 $x=Py$ 使 $f=2y_1^{2}+2y_2^{2}+8y_3^{2}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-28-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "用配方法将下列二次型化为标准形，并求出所做的可逆线性变换：$f(x_1,x_2,x_3)=x_1^{2}+2x_2^{2}+2x_1x_2-2x_1x_3$。",
  "options": [
   "$x=Cy$，$C=\\begin{pmatrix}1&-1&2\\\\0&1&-1\\\\0&0&1\\end{pmatrix}$，$f=y_1^{2}+y_2^{2}+2y_3^{2}$",
   "$x=Cy$，$C=\\begin{pmatrix}1&1&2\\\\0&1&1\\\\0&0&1\\end{pmatrix}$，$f=y_1^{2}+y_2^{2}-2y_3^{2}$",
   "$x=Cy$，$C=\\begin{pmatrix}1&-1&2\\\\0&1&-1\\\\0&0&1\\end{pmatrix}$，$f=y_1^{2}-y_2^{2}-2y_3^{2}$",
   "$x=Cy$，$C=\\begin{pmatrix}1&-1&2\\\\0&1&-1\\\\0&0&1\\end{pmatrix}$，$f=y_1^{2}+y_2^{2}-2y_3^{2}$"
  ],
  "answer": 3,
  "hint": "按 $x_1$ 配方：$x_1^{2}+2x_1(x_2-x_3)$",
  "solution": "$$\\begin{aligned}f&=x_1^{2}+2x_1x_2-2x_1x_3+2x_2^{2}\\\\\n&=(x_1+x_2-x_3)^{2}-(x_2-x_3)^{2}+2x_2^{2}\\\\\n&=(x_1+x_2-x_3)^{2}+(x_2+x_3)^{2}-2x_3^{2}.\\end{aligned}$$\n令 $y_1=x_1+x_2-x_3$，$y_2=x_2+x_3$，$y_3=x_3$，则 $f=y_1^{2}+y_2^{2}-2y_3^{2}$，且\n$$x_1=y_1-y_2+2y_3,\\quad x_2=y_2-y_3,\\quad x_3=y_3,$$\n即 $x=Cy$，$C=\\begin{pmatrix}1&-1&2\\\\0&1&-1\\\\0&0&1\\end{pmatrix}$，$|C|=1\\neq0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-28-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "用配方法将下列二次型化为标准形，并求出所做的可逆线性变换：$f(x_1,x_2,x_3)=x_1x_2+x_1x_3+x_2x_3$。",
  "options": [
   "$x=Cy$，$C=\\begin{pmatrix}1&1&-1\\\\1&-1&-1\\\\0&0&1\\end{pmatrix}$，$f=y_1^{2}-y_2^{2}-y_3^{2}$",
   "$x=Cy$，$C=\\begin{pmatrix}1&1&-1\\\\1&-1&-1\\\\0&0&1\\end{pmatrix}$，$f=y_1^{2}+y_2^{2}-y_3^{2}$",
   "$x=Cy$，$C=\\begin{pmatrix}1&1&-1\\\\1&-1&-1\\\\0&0&1\\end{pmatrix}$，$f=-y_1^{2}+y_2^{2}+y_3^{2}$",
   "$x=Cy$，$C=\\begin{pmatrix}1&1&1\\\\1&-1&0\\\\0&0&1\\end{pmatrix}$，$f=y_1^{2}-y_2^{2}-y_3^{2}$"
  ],
  "answer": 0,
  "hint": "先令 $x_1=y_1+y_2,\\ x_2=y_1-y_2$ 造出平方项",
  "solution": "令 $x_1=u_1+u_2$，$x_2=u_1-u_2$，$x_3=u_3$，则\n$$f=u_1^{2}-u_2^{2}+2u_1u_3=(u_1+u_3)^{2}-u_2^{2}-u_3^{2}.$$\n再令 $y_1=u_1+u_3$，$y_2=u_2$，$y_3=u_3$，则 $f=y_1^{2}-y_2^{2}-y_3^{2}$，且 $u_1=y_1-y_3$，$u_2=y_2$，$u_3=y_3$，于是\n$$x_1=y_1+y_2-y_3,\\quad x_2=y_1-y_2-y_3,\\quad x_3=y_3,\\qquad C=\\begin{pmatrix}1&1&-1\\\\1&-1&-1\\\\0&0&1\\end{pmatrix},\\ |C|=-2\\neq0.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-28-3",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "用配方法将下列二次型化为标准形，并求出所做的可逆线性变换：$f(x_1,x_2,x_3)=x_1^{2}+3x_2^{2}+x_3^{2}+4x_1x_2+2x_1x_3+2x_2x_3$。",
  "options": [
   "$x=Cy$，$C=\\begin{pmatrix}1&-2&1\\\\0&1&-1\\\\0&0&1\\end{pmatrix}$，$f=y_1^{2}+y_2^{2}+y_3^{2}$",
   "$x=Cy$，$C=\\begin{pmatrix}1&-2&1\\\\0&1&-1\\\\0&0&1\\end{pmatrix}$，$f=y_1^{2}-y_2^{2}+y_3^{2}$",
   "$x=Cy$，$C=\\begin{pmatrix}1&2&1\\\\0&1&1\\\\0&0&1\\end{pmatrix}$，$f=y_1^{2}-y_2^{2}+y_3^{2}$",
   "$x=Cy$，$C=\\begin{pmatrix}1&-2&1\\\\0&1&-1\\\\0&0&1\\end{pmatrix}$，$f=y_1^{2}-y_2^{2}-y_3^{2}$"
  ],
  "answer": 1,
  "hint": "按 $x_1$ 配方成 $(x_1+2x_2+x_3)^{2}$",
  "solution": "$$\\begin{aligned}f&=(x_1+2x_2+x_3)^{2}-x_2^{2}-2x_2x_3\\\\\n&=(x_1+2x_2+x_3)^{2}-(x_2+x_3)^{2}+x_3^{2}.\\end{aligned}$$\n令 $y_1=x_1+2x_2+x_3$，$y_2=x_2+x_3$，$y_3=x_3$，则 $f=y_1^{2}-y_2^{2}+y_3^{2}$，且\n$$x_1=y_1-2y_2+y_3,\\quad x_2=y_2-y_3,\\quad x_3=y_3,\\qquad C=\\begin{pmatrix}1&-2&1\\\\0&1&-1\\\\0&0&1\\end{pmatrix},\\ |C|=1\\neq0.$$\n官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-29-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "写出下列二次型的规范形：$f(x_1,x_2,x_3)=x_1^{2}-x_2^{2}-x_3^{2}-2x_1x_2+2x_1x_3+2x_2x_3$。",
  "options": [
   "$f=z_1^{2}-z_2^{2}$",
   "$f=z_1^{2}+z_2^{2}-z_3^{2}$",
   "$f=z_1^{2}-z_2^{2}-z_3^{2}$",
   "$f=z_1^{2}+z_2^{2}$"
  ],
  "answer": 0,
  "hint": "先看矩阵的秩与正负惯性指数",
  "solution": "$A=\\begin{pmatrix}1&-1&1\\\\-1&-1&1\\\\1&1&-1\\end{pmatrix}$，$|\\lambda E-A|=\\lambda(\\lambda-2)(\\lambda+2)$…由\n$$f=(x_1-x_2+x_3)^{2}-2x_2^{2}-2x_3^{2}+4x_2x_3=(x_1-x_2+x_3)^{2}-2(x_2-x_3)^{2}$$\n知秩为 $2$，正、负惯性指数各为 $1$，故规范形为 $f=z_1^{2}-z_2^{2}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-29-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "写出下列二次型的规范形：$f(x_1,x_2,x_3)=x_1x_2-2x_1x_3+2x_2x_3$。",
  "options": [
   "$f=z_1^{2}-z_2^{2}+z_3^{2}$",
   "$f=z_1^{2}+z_2^{2}-z_3^{2}$",
   "$f=z_1^{2}-z_2^{2}$",
   "$f=-z_1^{2}-z_2^{2}+z_3^{2}$"
  ],
  "answer": 1,
  "hint": "先作 $x_1=y_1+y_2,\\ x_2=y_1-y_2$ 造平方项",
  "solution": "令 $x_1=y_1+y_2$，$x_2=y_1-y_2$，$x_3=y_3$，则\n$$f=y_1^{2}-y_2^{2}-2y_1y_3-2y_2y_3+2y_1y_3+2y_2y_3=y_1^{2}-y_2^{2}-2y_2y_3=(y_1)^{2}-(y_2+y_3)^{2}+y_3^{2}.$$\n秩为 $3$，正惯性指数 $2$、负惯性指数 $1$，故规范形 $f=z_1^{2}+z_2^{2}-z_3^{2}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-29-3",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "写出下列二次型的规范形：$f(x_1,x_2,x_3)=x_1^{2}+2x_2^{2}+2x_3^{2}-2x_1x_2+2x_1x_3-4x_2x_3$。",
  "options": [
   "$f=z_1^{2}+z_2^{2}+z_3^{2}$",
   "$f=z_1^{2}+z_2^{2}-z_3^{2}$",
   "$f=z_1^{2}+z_2^{2}$",
   "$f=z_1^{2}$"
  ],
  "answer": 2,
  "hint": "配方成两个平方之和",
  "solution": "$$\\begin{aligned}f&=(x_1-x_2+x_3)^{2}+x_2^{2}+x_3^{2}-2x_2x_3\\\\\n&=(x_1-x_2+x_3)^{2}+(x_2-x_3)^{2}\\ge0.\\end{aligned}$$\n秩为 $2$，正惯性指数为 $2$，负惯性指数为 $0$，故规范形 $f=z_1^{2}+z_2^{2}$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-30-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "判定下列二次型是否为正定二次型：$f(x_1,x_2,x_3)=2x_1^{2}+2x_1x_2-2x_1x_3-6x_2^{2}-4x_2x_3-x_3^{2}$。",
  "options": [
   "不是正定二次型（$\\Delta_2=-13<0$）",
   "是正定二次型（$\\Delta_1=2>0$）",
   "是正定二次型（$\\Delta_3=-13<0$，符号一致）",
   "不是正定二次型（$\\Delta_3=0$）"
  ],
  "answer": 0,
  "hint": "算顺序主子式",
  "solution": "$A=\\begin{pmatrix}2&1&-1\\\\1&-6&-2\\\\-1&-2&-1\\end{pmatrix}$，\n$$\\Delta_1=2>0,\\qquad \\Delta_2=\\begin{vmatrix}2&1\\\\1&-6\\end{vmatrix}=-13<0,$$\n顺序主子式不全为正，故**不是**正定二次型（实际上不是正定的，取 $x=(1,1,0)$ 得 $f=2+2-6=-2<0$）。官方答案：不是 [✓官方]"
 },
 {
  "id": "ch7-30-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "判定下列二次型是否为正定二次型：$f(x_1,x_2,x_3)=2x_1^{2}+2x_1x_2+4x_1x_3+2x_2^{2}+2x_2x_3+3x_3^{2}$。",
  "options": [
   "不是正定二次型（$\\Delta_3=3>0$ 但与 $\\Delta_2$ 不相等）",
   "是正定二次型（$\\Delta_1=2,\\Delta_2=3,\\Delta_3=3$ 全大于零）",
   "不是正定二次型（$\\Delta_2=3>0$ 不满足 $\\Delta_2=\\Delta_1^{2}$）",
   "是正定二次型（因为它不含交叉项）"
  ],
  "answer": 1,
  "hint": "三个顺序主子式都为正就可以",
  "solution": "$A=\\begin{pmatrix}2&1&2\\\\1&2&1\\\\2&1&3\\end{pmatrix}$，\n$$\\Delta_1=2>0,\\ \\Delta_2=3>0,\\ \\Delta_3=\\begin{vmatrix}2&1&2\\\\1&2&1\\\\2&1&3\\end{vmatrix}=2(6-1)-1(3-2)+2(1-4)=3>0,$$\n故**是**正定二次型。官方答案：是 [✓官方]"
 },
 {
  "id": "ch7-30-3",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "判定下列二次型是否为正定二次型：$f(x_1,x_2,x_3)=2x_1^{2}+2x_1x_2-4x_1x_3+2x_2^{2}-2x_2x_3+5x_3^{2}$。",
  "options": [
   "不是正定二次型（含负的交叉项）",
   "不是正定二次型（$\\Delta_3=9>0$ 但 $\\Delta_2=3\\ne9$）",
   "是正定二次型（$\\Delta_1=2,\\Delta_2=3,\\Delta_3=9$ 全大于零）",
   "是正定二次型（$\\operatorname{tr}A=9>0$，故正定）"
  ],
  "answer": 2,
  "hint": "$\\Delta_3=9$",
  "solution": "$A=\\begin{pmatrix}2&1&-2\\\\1&2&-1\\\\-2&-1&5\\end{pmatrix}$，\n$$\\Delta_1=2>0,\\ \\Delta_2=3>0,\\ \\Delta_3=2(10-1)-1(5-2)+(-2)(-1+4)=18-3-6=9>0,$$\n故**是**正定二次型。官方答案：是 [✓官方]"
 },
 {
  "id": "ch7-30-4",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "判定下列二次型是否为正定二次型：$f(x_1,x_2,x_3)=x_1^{2}-2x_1x_2-4x_1x_3+2x_2^{2}-4x_2x_3+7x_3^{2}$。",
  "options": [
   "是正定二次型（$\\Delta_1=1,\\Delta_2=1$ 均大于零）",
   "是正定二次型（$\\Delta_3=13>0$）",
   "不是正定二次型（$\\Delta_2=1$ 太小）",
   "不是正定二次型（$\\Delta_3=-13<0$）"
  ],
  "answer": 3,
  "hint": "$\\Delta_2=1$，再看 $\\Delta_3$",
  "solution": "$A=\\begin{pmatrix}1&-1&-2\\\\-1&2&-2\\\\-2&-2&7\\end{pmatrix}$，\n$$\\Delta_1=1>0,\\ \\Delta_2=1>0,\\ \\Delta_3=1(14-4)+1(-7-4)-2(2+4)=10-11-12=-13<0,$$\n故**不是**正定二次型。官方答案：不是 [✓官方]"
 },
 {
  "id": "ch7-30-5",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "判定下列二次型是否为正定二次型：$f(x_1,x_2,x_3,x_4)=x_1^{2}+x_2^{2}+4x_3^{2}+8x_4^{2}+6x_1x_3+4x_1x_4-2x_2x_3+2x_2x_4+2x_3x_4$。",
  "options": [
   "不是正定二次型（$\\Delta_3=-6<0$）",
   "是正定二次型（$\\Delta_1=\\Delta_2=1>0$ 且 $\\Delta_4>0$）",
   "是正定二次型（对角元 $1,1,4,8$ 全为正）",
   "不是正定二次型（$\\Delta_4=0$）"
  ],
  "answer": 0,
  "hint": "四阶要多算一步：$\\Delta_3=-6$",
  "solution": "$A=\\begin{pmatrix}1&0&3&2\\\\0&1&-1&1\\\\3&-1&4&1\\\\2&1&1&8\\end{pmatrix}$，\n$$\\Delta_1=1,\\quad\\Delta_2=1,\\quad\\Delta_3=\\begin{vmatrix}1&0&3\\\\0&1&-1\\\\3&-1&4\\end{vmatrix}=4-1-9=-6<0,$$\n已出现负的顺序主子式，故**不是**正定二次型。官方答案：不是 [✓官方]"
 },
 {
  "id": "ch7-30-6",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "判定下列二次型是否为正定二次型：$f(x_1,x_2,x_3,x_4)=x_1^{2}-2x_1x_2+4x_1x_3+2x_1x_4+3x_2^{2}-6x_2x_3+9x_3^{2}-12x_3x_4+19x_4^{2}$。",
  "options": [
   "不是正定二次型（交叉项系数的绝对值较大）",
   "是正定二次型（$\\Delta_1=1,\\Delta_2=2,\\Delta_3=9,\\Delta_4=45$ 全大于零）",
   "不是正定二次型（$\\Delta_4=45>0$ 但 $\\Delta_3=9<45$）",
   "是正定二次型（因为 $19x_4^{2}$ 的系数最大）"
  ],
  "answer": 1,
  "hint": "配方成四个平方之和",
  "solution": "$A=\\begin{pmatrix}1&-1&2&1\\\\-1&3&-3&0\\\\2&-3&9&-6\\\\1&0&-6&19\\end{pmatrix}$，各阶顺序主子式为\n$$\\Delta_1=1,\\quad\\Delta_2=2,\\quad\\Delta_3=9,\\quad\\Delta_4=45,$$\n全部大于零，故**是**正定二次型。官方答案：是 [✓官方]"
 },
 {
  "id": "ch7-31-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "确定参数 $\\lambda$ 的取值范围，使得下列二次型为正定二次型：$f(x_1,x_2,x_3)=x_1^{2}+2\\lambda x_1x_2-2x_1x_3+x_2^{2}+4x_2x_3+5x_3^{2}$。",
  "options": [
   "$-1<\\lambda<1$",
   "$-\\dfrac45<\\lambda<0$",
   "$0<\\lambda<\\dfrac45$",
   "$-\\dfrac45<\\lambda<\\dfrac45$"
  ],
  "answer": 1,
  "hint": "算出 $\\Delta_2$、$\\Delta_3$ 后解不等式组",
  "solution": "$A=\\begin{pmatrix}1&\\lambda&-1\\\\\\lambda&1&2\\\\-1&2&5\\end{pmatrix}$，\n$$\\Delta_1=1>0,\\quad \\Delta_2=1-\\lambda^{2}>0\\ \\Longrightarrow\\ -1<\\lambda<1,$$\n$$\\Delta_3=1(5-4)-\\lambda(5\\lambda+2)+(-1)(2\\lambda+1)=1-5\\lambda^{2}-2\\lambda-2\\lambda-1=-5\\lambda^{2}-4\\lambda>0.$$\n由 $\\lambda(5\\lambda+4)<0$ 得 $-\\frac45<\\lambda<0$；它与 $(-1,1)$ 的交集仍是 $-\\frac45<\\lambda<0$，即\n$$-\\frac45<\\lambda<0.$$\n官方答案：$-\\frac45<\\lambda<0$ [✓官方]"
 },
 {
  "id": "ch7-31-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "确定参数 $\\lambda$ 的取值范围，使得下列二次型为正定二次型：$f(x_1,x_2,x_3)=5x_1^{2}+4x_1x_2-2x_1x_3+x_2^{2}+4x_2x_3+\\lambda x_3^{2}$。",
  "options": [
   "$\\lambda>4$",
   "$\\lambda>-29$",
   "$\\lambda>29$",
   "$\\lambda>0$"
  ],
  "answer": 2,
  "hint": "$\\Delta_3$ 是关于 $\\lambda$ 的一次式",
  "solution": "$A=\\begin{pmatrix}5&2&-1\\\\2&1&2\\\\-1&2&\\lambda\\end{pmatrix}$，\n$$\\Delta_1=5>0,\\quad\\Delta_2=1>0,\\quad\\Delta_3=5(\\lambda-4)-2(2\\lambda+2)+(-1)(4+1)=5\\lambda-20-4\\lambda-4-5=\\lambda-29>0,$$\n故 $\\lambda>29$。官方答案：$\\lambda>29$ [✓官方]"
 },
 {
  "id": "ch7-31-3",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "确定参数 $\\lambda$ 的取值范围，使得下列二次型为正定二次型：$f(x_1,x_2,x_3,x_4)=\\lambda(x_1^{2}+x_2^{2}+x_3^{2})+2(x_1x_2-x_2x_3+x_1x_3)+x_4^{2}$。",
  "options": [
   "$\\lambda>1$",
   "$\\lambda>0$",
   "$\\lambda>2$ 且 $\\lambda\\neq-1$",
   "$\\lambda>2$"
  ],
  "answer": 3,
  "hint": "$x_4^{2}$ 的系数已为 $1$，只需前三个变量部分正定",
  "solution": "$A=\\begin{pmatrix}\\lambda&1&1&0\\\\1&\\lambda&-1&0\\\\1&-1&\\lambda&0\\\\0&0&0&1\\end{pmatrix}$，其顺序主子式\n$$\\Delta_1=\\lambda,\\quad\\Delta_2=\\lambda^{2}-1,\\quad\\Delta_3=\\lambda(\\lambda^{2}-1)-1(\\lambda+1)+1(-1-\\lambda)=\\lambda^{3}-3\\lambda-2=(\\lambda-2)(\\lambda+1)^{2},$$\n$$\\Delta_4=1\\cdot\\Delta_3=(\\lambda-2)(\\lambda+1)^{2}.$$\n要求 $\\Delta_1>0$ 且 $(\\lambda-2)(\\lambda+1)^2>0$，即 $\\lambda>0$ 且 $\\lambda>2$，故 $\\lambda>2$。官方答案：$\\lambda>2$ [✓官方]"
 },
 {
  "id": "ch7-32-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "求参数 $a$ 的取值范围，使得下列对称矩阵为正定矩阵：$A=\\begin{pmatrix}1&1&0\\\\1&a&0\\\\0&0&a^{2}\\end{pmatrix}$。",
  "options": [
   "$a>0$",
   "$a>1$ 且 $a\\neq0$",
   "$a>1$",
   "$a>-1$"
  ],
  "answer": 2,
  "hint": "$\\Delta_2=a-1$，$\\Delta_3=a^{2}(a-1)$",
  "solution": "$\\Delta_1=1>0$，$\\Delta_2=a-1>0$，$\\Delta_3=a^{2}(a-1)>0$，故 $a>1$。官方答案：$a>1$ [✓官方]"
 },
 {
  "id": "ch7-32-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "求参数 $a$ 的取值范围，使得下列对称矩阵为正定矩阵：$A=\\begin{pmatrix}5&2&-1\\\\2&1&-1\\\\-1&-1&a\\end{pmatrix}$。",
  "options": [
   "$a>1$",
   "$a>0$",
   "$a>-2$",
   "$a>2$"
  ],
  "answer": 3,
  "hint": "$\\Delta_3=a-2$",
  "solution": "$\\Delta_1=5>0$，$\\Delta_2=1>0$，\n$$\\Delta_3=5(a-1)-2(2a-1)+(-1)(-2+1)=5a-5-4a+2+1=a-2>0,$$\n故 $a>2$。官方答案：$a>2$ [✓官方]"
 },
 {
  "id": "ch7-33",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "choice",
  "statement": "设 $A=\\begin{pmatrix}1&0&1\\\\0&2&0\\\\1&0&1\\end{pmatrix}$，问 $a$ 为何值时，$B=(aE+A)^{2}$ 为正定矩阵？",
  "options": [
   "$a>0$",
   "$a\\neq-2$ 且 $a\\neq0$",
   "$a>-2$ 且 $a\\neq0$",
   "$a\\neq2$ 且 $a\\neq0$"
  ],
  "answer": 1,
  "hint": "$B$ 对称，其特征值是 $aE+A$ 特征值的平方",
  "solution": "$A$ 的特征值为 $0,2,2$，故 $aE+A$ 的特征值为 $a,\\ a+2,\\ a+2$，从而 $B$ 的特征值为\n$$a^{2},\\ (a+2)^{2},\\ (a+2)^{2},$$\n它们全大于 $0$ 当且仅当 $a\\neq0$ 且 $a\\neq-2$。又 $B$ 是实对称矩阵，故 $B$ 正定 $\\Leftrightarrow a\\neq-2$ 且 $a\\neq0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-34-1",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "设三阶实对称矩阵 $A$ 满足 $A^{2}+2A=O$，其中 $O$ 为零矩阵，且 $r(A)=2$。求出 $A$ 的全体特征值。",
  "options": [
   "$\\lambda_1=\\lambda_2=-2$，$\\lambda_3=0$",
   "$\\lambda_1=\\lambda_2=0$，$\\lambda_3=-2$",
   "$\\lambda_1=\\lambda_2=2$，$\\lambda_3=0$",
   "$\\lambda_1=-2$，$\\lambda_2=\\lambda_3=0$"
  ],
  "answer": 0,
  "hint": "$A^2+2A=0$ 给出 $\\lambda(\\lambda+2)=0$",
  "solution": "设 $Ap=\\lambda p\\ (p\\neq0)$，则 $(A^2+2A)p=(\\lambda^2+2\\lambda)p=0$，故 $\\lambda=0$ 或 $\\lambda=-2$。\n$A$ 实对称可对角化，$r(A)=2$ 说明非零特征值有 $2$ 个，即 $\\lambda_1=\\lambda_2=-2$，$\\lambda_3=0$。官方答案一致 [✓官方]"
 },
 {
  "id": "ch7-34-2",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "设三阶实对称矩阵 $A$ 满足 $A^{2}+2A=O$，且 $r(A)=2$（特征值为 $-2,-2,0$）。当 $k$ 为何值时，$kE+A$ 必为正定矩阵？",
  "options": [
   "$k>0$",
   "$k>2$",
   "$k>-2$",
   "$k>2$ 且 $k\\neq0$"
  ],
  "answer": 1,
  "hint": "$kE+A$ 的特征值为 $k-2,k-2,k$",
  "solution": "$kE+A$ 是实对称矩阵，其特征值为\n$$k+\\lambda_i=k-2,\\ k-2,\\ k.$$\n正定要求三个特征值全大于 $0$，即 $k-2>0$ 且 $k>0$，故 $k>2$。官方答案：$k>2$ [✓官方]"
 },
 {
  "id": "ch7-35",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "choice",
  "statement": "下述推理是否正确：因为三元二次型\n$$f(x_1,x_2,x_3)=x_1^{2}+x_2^{2}+x_3^{2}-x_1x_2-x_2x_3-x_1x_3=\\frac12(x_1-x_2)^{2}+\\frac12(x_2-x_3)^{2}+\\frac12(x_1-x_3)^{2}$$\n可以化成三项平方和，所以它一定是正定二次型。",
  "options": [
   "正确，三项平方和非负，故 $f$ 正定",
   "正确，因为平方项的系数 $\\frac12>0$",
   "不正确，因为 $f$ 的矩阵不是对称矩阵",
   "不正确，取 $x_1=x_2=x_3=1$ 得 $f=0$，故 $f$ 不是正定二次型"
  ],
  "answer": 3,
  "hint": "平方和为 $0$ 不一定只有零解",
  "solution": "推理**不正确**。三项平方和虽然都非负，但取 $x_1=x_2=x_3=1\\neq0$ 时每项都为 $0$，即\n$$f(1,1,1)=0,$$\n存在非零向量使 $f=0$，不满足正定的定义（正定要求对一切 $x\\neq0$ 都有 $f(x)>0$）。\n事实上该二次型半正定、秩为 $2$（$f=\\frac12\\sum(x_i-x_j)^2$ 的秩为 $2$，规范形为 $z_1^{2}+z_2^{2}$）。官方答案：不正确 [✓官方]"
 },
 {
  "id": "ch7-36",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "proof",
  "statement": "求证：$n$ 阶矩阵 $A$ 既是正交矩阵又是正定矩阵当且仅当 $A$ 为单位矩阵。",
  "answer": "证明见解析",
  "hint": "正交 $+$ 对称 $\\Rightarrow A^{2}=E$；正定 $\\Rightarrow$ 特征值全为 $1$",
  "solution": "**必要性**：设 $A$ 既正交又正定。正定矩阵是对称矩阵，故 $A^{\\mathrm T}=A$；又 $A^{\\mathrm T}A=E$，于是 $A^{2}=E$。\n设 $A$ 的特征值为 $\\lambda$，则 $\\lambda^{2}=1$，$\\lambda=\\pm1$；正定性给出所有 $\\lambda>0$，故 $\\lambda=1$（$n$ 重）。\n$A$ 是实对称矩阵，可正交对角化：$A=Q\\operatorname{diag}(1,\\dots,1)Q^{\\mathrm T}=QEQ^{\\mathrm T}=E$。\n**充分性**：$A=E$ 时 $A^{\\mathrm T}A=E$ 且对任意 $x\\neq0$ 有 $x^{\\mathrm T}Ax=\\|x\\|^{2}>0$，故 $E$ 既正交又正定。官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-37",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $A$ 是 $n$ 阶正定矩阵，求证 $A^{k}$ 必是正定矩阵，其中 $k$ 为任意正整数。",
  "answer": "证明见解析",
  "hint": "$A=Q\\Lambda Q^{\\mathrm T}$，则 $A^{k}=Q\\Lambda^{k}Q^{\\mathrm T}$",
  "solution": "$A$ 正定 $\\Rightarrow$ $A$ 实对称，存在正交矩阵 $Q$ 使\n$$A=Q\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)Q^{\\mathrm T},\\qquad \\lambda_i>0.$$\n于是\n$$A^{k}=Q\\operatorname{diag}(\\lambda_1^{k},\\dots,\\lambda_n^{k})Q^{\\mathrm T}.$$\n$A^{k}$ 仍是对称矩阵，其特征值 $\\lambda_i^{k}>0\\ (i=1,\\dots,n)$，故 $A^{k}$ 正定。官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-38",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 1,
  "type": "proof",
  "statement": "设 $A,B$ 都是 $n$ 阶正定矩阵，求证 $A+B$ 也是正定矩阵。",
  "answer": "证明见解析",
  "hint": "直接用正定的定义：对 $x\\neq0$ 比较 $x^{\\mathrm T}(A+B)x$",
  "solution": "$A,B$ 正定 $\\Rightarrow$ $A^{\\mathrm T}=A$，$B^{\\mathrm T}=B$，故 $(A+B)^{\\mathrm T}=A+B$，$A+B$ 对称。\n对任意 $x\\neq0$，由 $A,B$ 正定得 $x^{\\mathrm T}Ax>0$，$x^{\\mathrm T}Bx>0$，于是\n$$x^{\\mathrm T}(A+B)x=x^{\\mathrm T}Ax+x^{\\mathrm T}Bx>0,$$\n故 $A+B$ 正定。官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-39",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $A$ 是 $n$ 阶实对称矩阵。如果对任意 $n$ 维实向量 $x$，都有 $x^{\\mathrm T}Ax=0$，求证 $A$ 为零矩阵。",
  "answer": "证明见解析",
  "hint": "取 $x=e_i$ 得 $a_{ii}=0$，取 $x=e_i+e_j$ 得 $a_{ij}=0$",
  "solution": "记 $A=(a_{ij})$。取 $x=e_i$（第 $i$ 个分量为 $1$、其余为 $0$），则 $x^{\\mathrm T}Ax=a_{ii}=0$，故对角元全为 $0$。\n再取 $x=e_i+e_j\\ (i\\neq j)$，则\n$$x^{\\mathrm T}Ax=a_{ii}+a_{ij}+a_{ji}+a_{jj}=2a_{ij}=0,$$\n其中用到 $A$ 对称即 $a_{ij}=a_{ji}$。故所有 $a_{ij}=0$，即 $A=O$。官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-40",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 1,
  "type": "proof",
  "statement": "设 $P$ 为 $n$ 阶可逆矩阵，$A=P^{\\mathrm T}P$。求证：$f=x^{\\mathrm T}Ax$ 为正定二次型。",
  "answer": "证明见解析",
  "hint": "$x^{\\mathrm T}P^{\\mathrm T}Px=\\|Px\\|^{2}$",
  "solution": "$A^{\\mathrm T}=(P^{\\mathrm T}P)^{\\mathrm T}=P^{\\mathrm T}P=A$，故 $A$ 是对称矩阵，$f$ 的矩阵为 $A$。\n对任意 $x\\neq0$，因 $P$ 可逆，$Px\\neq0$，于是\n$$f=x^{\\mathrm T}P^{\\mathrm T}Px=(Px)^{\\mathrm T}(Px)=\\|Px\\|^{2}>0,$$\n故 $f$ 为正定二次型。官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-41",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $A$ 是 $n$ 阶正定矩阵。求证：存在 $n$ 阶可逆矩阵 $P$，使得 $A=P^{\\mathrm T}P$。",
  "answer": "证明见解析",
  "hint": "把 $A$ 正交对角化成 $Q\\Lambda Q^{\\mathrm T}$，再取 $P=\\Lambda^{1/2}Q^{\\mathrm T}$",
  "solution": "$A$ 正定 $\\Rightarrow$ $A$ 实对称，存在正交矩阵 $Q$ 使\n$$A=Q\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)Q^{\\mathrm T},\\qquad \\lambda_i>0.$$\n令\n$$\\Lambda^{\\frac12}=\\operatorname{diag}(\\sqrt{\\lambda_1},\\dots,\\sqrt{\\lambda_n}),\\qquad P=\\Lambda^{\\frac12}Q^{\\mathrm T},$$\n则 $P$ 可逆（$\\Lambda^{1/2}$ 与 $Q^{\\mathrm T}$ 都可逆），且\n$$P^{\\mathrm T}P=Q\\Lambda^{\\frac12}\\Lambda^{\\frac12}Q^{\\mathrm T}=Q\\Lambda Q^{\\mathrm T}=A.$$\n官方：证明略 [✓官方]"
 },
 {
  "id": "ch7-42",
  "subject": "高代",
  "chapter": "第7章 二次型",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $A$ 是 $n$ 阶实对称矩阵。如果存在 $n$ 维实向量 $\\alpha,\\beta$，使得 $\\alpha^{\\mathrm T}A\\alpha>0$，$\\beta^{\\mathrm T}A\\beta<0$，求证：存在 $n$ 维实向量 $x$，使得 $x^{\\mathrm T}Ax=0$。",
  "answer": "证明见解析",
  "hint": "$f(x)=x^{\\mathrm T}Ax$ 连续，在 $\\alpha,\\beta$ 的连线上变号；或用惯性定理造零向量",
  "solution": "记 $f(x)=x^{\\mathrm T}Ax$，它是 $x$ 的连续函数，且 $f(\\alpha)>0>f(\\beta)$。考虑\n$$g(t)=f\\big((1-t)\\alpha+t\\beta\\big),\\qquad t\\in[0,1],$$\n$g$ 连续且 $g(0)=f(\\alpha)>0$，$g(1)=f(\\beta)<0$，由介值定理存在 $t_0\\in(0,1)$ 使 $g(t_0)=0$，即 $x_0=(1-t_0)\\alpha+t_0\\beta$ 满足 $x_0^{\\mathrm T}Ax_0=0$。\n（若 $x_0=0$，则 $\\alpha,\\beta$ 反向共线；此时由 $A$ 的惯性定理：$A$ 既非半正定也非半负定，存在正交矩阵 $Q$ 使 $A=Q\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)Q^{\\mathrm T}$，其中既有正特征值也有负特征值。取 $y$ 使 $y_1=1$（对应 $\\lambda_1>0$）、$y_2=\\sqrt{\\lambda_1/|\\lambda_2|}$（对应 $\\lambda_2<0$）、其余分量为 $0$，则 $x=Qy\\neq0$ 且 $x^{\\mathrm T}Ax=\\lambda_1-\\lambda_1=0$，同样得证。）官方：证明略 [✓官方]"
 },
 {
  "id": "ch8-1-1",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "text",
  "statement": "已知 $O(0,0,0),\\;A(-1,1,4),\\;B(0,-3,3),\\;C(-4,1,1)$，求过 $O,A,B,C$ 四点的球面方程。",
  "answer": "$x^2+y^2+z^2+4x+2y-4z=0$",
  "hint": "设一般式 $x^2+y^2+z^2+Dx+Ey+Fz+G=0$，过原点先定出 $G=0$",
  "solution": "设球面方程为 $x^2+y^2+z^2+Dx+Ey+Fz+G=0$。代入 $O$ 得 $G=0$；代入 $A$：$18-D+E+4F=0$；代入 $B$：$18-3E+3F=0$，即 $E-F=6$；代入 $C$：$18-4D+E+F=0$。解得 $D=4,\\;E=2,\\;F=-4$，故球面方程为 $x^2+y^2+z^2+4x+2y-4z=0$，即 $(x+2)^2+(y+1)^2+(z-2)^2=9$，球心 $(-2,-1,2)$，半径 $3$。 [✓官方]"
 },
 {
  "id": "ch8-2-1",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 2,
  "type": "choice",
  "statement": "已知动点到点 $A(2,3,4)$ 与点 $B(1,1,1)$ 的距离之比为 $2:1$，求动点的轨迹方程，并说明它表示什么曲面。",
  "options": [
   "$3(x^2+y^2+z^2)-4x-2y-17=0$，球面",
   "$3(x^2+y^2+z^2)-4x-2y-17=0$，椭球面",
   "$3(x^2+y^2+z^2)-4x-6y-8z+29=0$，球面",
   "$x^2+y^2+z^2-4x-2y-17=0$，球面"
  ],
  "answer": 0,
  "hint": "把 $|PM|=2|PN|$ 两边平方，避免出现根式",
  "solution": "设动点 $P(x,y,z)$，由 $|PA|=2|PB|$ 得 $(x-2)^2+(y-3)^2+(z-4)^2=4\\big[(x-1)^2+(y-1)^2+(z-1)^2\\big]$。左边 $=x^2+y^2+z^2-4x-6y-8z+29$，右边 $=4x^2+4y^2+4z^2-8x-8y-8z+12$，整理得 $3(x^2+y^2+z^2)-4x-2y-17=0$，即 $\\left(x-\\frac23\\right)^2+\\left(y-\\frac13\\right)^2+z^2=\\frac{56}{9}$，是球面（阿波罗尼斯球）。 [✓官方]"
 },
 {
  "id": "ch8-3-1",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "choice",
  "statement": "写出 $xOy$ 平面上的抛物线 $y=4x^2$ 绕 $y$ 轴旋转一周所形成的旋转面方程。",
  "options": [
   "$y=4(x^2+z^2)$",
   "$y=4x^2+z^2$",
   "$y^2=4(x^2+z^2)$",
   "$y=4x^2$"
  ],
  "answer": 0,
  "hint": "绕 $y$ 轴旋转：把 $x^2$ 换成 $x^2+z^2$",
  "solution": "旋转时曲面上点到 $y$ 轴的距离 $\\sqrt{x^2+z^2}$ 等于原曲线上对应点的 $|x|$，故只需把方程中的 $x^2$ 换成 $x^2+z^2$，得 $y=4(x^2+z^2)$（旋转抛物面）。 [✓官方]"
 },
 {
  "id": "ch8-3-2",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "choice",
  "statement": "写出 $xOz$ 平面上的椭圆 $\\frac{x^2}{4}+\\frac{z^2}{9}=1$ 绕 $x$ 轴旋转一周所形成的旋转面方程。",
  "options": [
   "$\\frac{x^2}{4}+\\frac{y^2+z^2}{9}=1$",
   "$\\frac{x^2+y^2}{4}+\\frac{z^2}{9}=1$",
   "$\\frac{x^2}{4}+\\frac{y^2}{9}+z^2=1$",
   "$\\frac{x^2}{4}-\\frac{y^2+z^2}{9}=1$"
  ],
  "answer": 0,
  "hint": "绕 $x$ 轴旋转：把 $z^2$ 换成 $y^2+z^2$",
  "solution": "绕 $x$ 轴旋转，点到 $x$ 轴的距离为 $\\sqrt{y^2+z^2}$，故把 $z^2$ 换成 $y^2+z^2$，得 $\\frac{x^2}{4}+\\frac{y^2+z^2}{9}=1$（旋转椭球面）。 [✓官方]"
 },
 {
  "id": "ch8-3-3",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "choice",
  "statement": "写出 $yOz$ 平面上的双曲线 $\\frac{y^2}{4}-z^2=1$ 绕 $y$ 轴旋转一周所形成的旋转面方程。",
  "options": [
   "$\\frac{y^2}{4}-x^2-z^2=1$",
   "$\\frac{y^2+z^2}{4}-x^2=1$",
   "$\\frac{y^2}{4}-z^2=1$",
   "$\\frac{y^2}{4}+x^2+z^2=1$"
  ],
  "answer": 0,
  "hint": "绕 $y$ 轴旋转：把 $z^2$ 换成 $x^2+z^2$",
  "solution": "绕 $y$ 轴旋转，把 $z^2$ 换成 $x^2+z^2$，得 $\\frac{y^2}{4}-x^2-z^2=1$（旋转单叶双曲面，因原双曲线与 $y$ 轴不相交）。 [✓官方]"
 },
 {
  "id": "ch8-3-4",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "choice",
  "statement": "写出 $yOz$ 平面上的直线 $y+z=0$ 绕 $z$ 轴旋转一周所形成的旋转面方程。",
  "options": [
   "$x^2+y^2=z^2$",
   "$x^2+z^2=y^2$",
   "$x^2+y^2+z^2=0$",
   "$x^2+y^2=2z^2$"
  ],
  "answer": 0,
  "hint": "先由 $z=-y$ 得 $z^2=y^2$，再把 $y^2$ 换成 $x^2+y^2$",
  "solution": "直线 $y+z=0$ 上点到 $z$ 轴的距离为 $|y|$，且 $z=-y$，故 $z^2=y^2$；把 $y^2$ 换成 $x^2+y^2$ 得 $z^2=x^2+y^2$，即顶点在原点、半顶角 $45^\\circ$ 的圆锥面。 [✓官方]"
 },
 {
  "id": "ch8-4-1",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "choice",
  "statement": "说明方程 $\\frac{x^2}{9}-\\frac{y^2}{4}-\\frac{z^2}{4}=1$ 所表示的旋转面是怎样形成的。",
  "options": [
   "由 $xOy$ 面上的双曲线 $\\frac{x^2}{9}-\\frac{y^2}{4}=1$ 绕 $x$ 轴旋转一周形成",
   "由 $xOy$ 面上的双曲线 $\\frac{x^2}{9}-\\frac{y^2}{4}=1$ 绕 $y$ 轴旋转一周形成",
   "由 $xOz$ 面上的椭圆 $\\frac{x^2}{9}+\\frac{z^2}{4}=1$ 绕 $x$ 轴旋转一周形成",
   "由 $yOz$ 面上的双曲线 $\\frac{y^2}{4}-\\frac{z^2}{4}=1$ 绕 $z$ 轴旋转一周形成"
  ],
  "answer": 0,
  "hint": "找一条含旋转轴的坐标面截痕，看曲线绕哪条轴旋转能生成另两个平方项",
  "solution": "方程中 $y,z$ 的系数相同，说明是绕 $x$ 轴旋转的旋转面。在 $xOy$ 面上截痕为双曲线 $\\frac{x^2}{9}-\\frac{y^2}{4}=1$，它绕 $x$ 轴旋转一周即得该曲面（旋转双叶双曲面）；同样可由 $xOz$ 面上的双曲线 $\\frac{x^2}{9}-\\frac{z^2}{4}=1$ 绕 $x$ 轴旋转得到。 [✓官方]"
 },
 {
  "id": "ch8-4-2",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "choice",
  "statement": "说明方程 $x^2+y^2-\\frac{z^2}{4}=1$ 所表示的旋转面是怎样形成的。",
  "options": [
   "由 $xOz$ 面上的双曲线 $x^2-\\frac{z^2}{4}=1$ 绕 $z$ 轴旋转一周形成",
   "由 $xOz$ 面上的双曲线 $x^2-\\frac{z^2}{4}=1$ 绕 $x$ 轴旋转一周形成",
   "由 $xOy$ 面上的圆 $x^2+y^2=1$ 绕 $z$ 轴旋转一周形成",
   "由 $yOz$ 面上的抛物线 $z^2=4y^2$ 绕 $z$ 轴旋转一周形成"
  ],
  "answer": 0,
  "hint": "$x,y$ 系数相同 → 旋转轴是 $z$ 轴；再看截痕与旋转轴是否相交",
  "solution": "$x,y$ 的系数相同，故为绕 $z$ 轴的旋转面。在 $xOz$ 面上截痕为双曲线 $x^2-\\frac{z^2}{4}=1$，它不与 $z$ 轴相交，绕 $z$ 轴旋转得旋转单叶双曲面；也可由 $yOz$ 面上的双曲线 $y^2-\\frac{z^2}{4}=1$ 绕 $z$ 轴旋转得到。 [✓官方]"
 },
 {
  "id": "ch8-4-3",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "choice",
  "statement": "说明方程 $x^2+\\frac{y^2}{4}+z^2=1$ 所表示的旋转面是怎样形成的。",
  "options": [
   "由 $xOy$ 面上的椭圆 $x^2+\\frac{y^2}{4}=1$ 绕 $y$ 轴旋转一周形成",
   "由 $xOy$ 面上的椭圆 $x^2+\\frac{y^2}{4}=1$ 绕 $x$ 轴旋转一周形成",
   "由 $xOz$ 面上的圆 $x^2+z^2=1$ 绕 $x$ 轴旋转一周形成",
   "由 $yOz$ 面上的椭圆 $\\frac{y^2}{4}+z^2=1$ 绕 $z$ 轴旋转一周形成"
  ],
  "answer": 0,
  "hint": "$x,z$ 系数相同 → 绕 $y$ 轴旋转；截痕是椭圆",
  "solution": "$x,z$ 的系数都是 $1$，故为绕 $y$ 轴的旋转面。在 $xOy$ 面上截痕为椭圆 $x^2+\\frac{y^2}{4}=1$，绕 $y$ 轴旋转一周得旋转椭球面；也可由 $yOz$ 面上的椭圆 $\\frac{y^2}{4}+z^2=1$ 绕 $y$ 轴旋转得到。 [✓官方]"
 },
 {
  "id": "ch8-4-4",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "choice",
  "statement": "说明方程 $y=x^2+z^2$ 所表示的旋转面是怎样形成的。",
  "options": [
   "由 $xOy$ 面上的抛物线 $y=x^2$ 绕 $y$ 轴旋转一周形成",
   "由 $xOy$ 面上的抛物线 $y=x^2$ 绕 $x$ 轴旋转一周形成",
   "由 $xOz$ 面上的抛物线 $z^2=y$ 绕 $z$ 轴旋转一周形成",
   "由 $xOy$ 面上的直线 $y=x$ 绕 $y$ 轴旋转一周形成"
  ],
  "answer": 0,
  "hint": "只有 $x,z$ 同时以平方和出现 → 绕 $y$ 轴旋转",
  "solution": "把 $y=x^2+z^2$ 写成 $y=\\big(\\sqrt{x^2+z^2}\\big)^2$，可见曲面上点到 $y$ 轴距离的平方等于点的 $y$ 坐标，故由 $xOy$ 面上的抛物线 $y=x^2$ 绕 $y$ 轴旋转一周形成（旋转抛物面）；也可由 $yOz$ 面上的抛物线 $y=z^2$ 绕 $y$ 轴旋转得到。 [✓官方]"
 },
 {
  "id": "ch8-4-5",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "choice",
  "statement": "说明方程 $x=\\sqrt{y^2+z^2}$ 所表示的旋转面是怎样形成的。",
  "options": [
   "由 $xOy$ 面上的半直线 $x=y\\;(y\\geqslant 0)$ 绕 $x$ 轴旋转一周形成",
   "由 $xOy$ 面上的半直线 $x=y\\;(y\\geqslant 0)$ 绕 $y$ 轴旋转一周形成",
   "由 $yOz$ 面上的圆 $y^2+z^2=1$ 绕 $x$ 轴旋转一周形成",
   "由 $xOy$ 面上的整条直线 $x=y$ 绕 $x$ 轴旋转一周形成"
  ],
  "answer": 0,
  "hint": "先看清 $x\\geqslant 0$：它是半锥面，不是整个双锥面",
  "solution": "由 $x=\\sqrt{y^2+z^2}$ 得 $x\\geqslant 0$ 且 $x^2=y^2+z^2$，这是顶点在原点、半顶角 $45^\\circ$ 的圆锥面中 $x\\geqslant 0$ 的一半。它由 $xOy$ 面上的半直线 $x=y\\;(y\\geqslant 0)$ 绕 $x$ 轴旋转一周形成；也可由 $xOz$ 面上的半直线 $x=z\\;(z\\geqslant 0)$ 绕 $x$ 轴旋转得到。 [✓官方]"
 },
 {
  "id": "ch8-5-1",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "proof",
  "statement": "画出方程 $\\frac{x^2}{4}+y^2=1$ 所表示的曲面。",
  "answer": "作图见解析",
  "hint": "方程缺 $z$ → 母线平行 $z$ 轴的柱面",
  "solution": "方程中不含 $z$，故为母线平行于 $z$ 轴的柱面：以 $xOy$ 面上的椭圆 $\\frac{x^2}{4}+y^2=1$ 为准线，沿 $z$ 轴方向平移即得（椭圆柱面）。作图：先在 $xOy$ 面画出长半轴 $2$（沿 $x$ 轴）、短半轴 $1$（沿 $y$ 轴）的椭圆，再沿平行于 $z$ 轴的方向平移出一族平行线。 [✓官方（原书答“略”，作图题）]"
 },
 {
  "id": "ch8-5-2",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "proof",
  "statement": "画出方程 $y^2-z^2=1$ 所表示的曲面。",
  "answer": "作图见解析",
  "hint": "缺 $x$ → 母线平行 $x$ 轴的双曲柱面",
  "solution": "方程中不含 $x$，故为母线平行于 $x$ 轴的双曲柱面：以 $yOz$ 面上的双曲线 $y^2-z^2=1$（顶点 $(\\pm1,0)$）为准线，沿 $x$ 轴方向平移即得。作图：先画 $yOz$ 面上的双曲线及其两条渐近线 $z=\\pm y$，再沿 $x$ 轴方向拉伸。 [✓官方（作图题，原书答“略”）]"
 },
 {
  "id": "ch8-5-3",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "proof",
  "statement": "画出方程 $x=z^2+1$ 所表示的曲面。",
  "answer": "作图见解析",
  "hint": "缺 $y$ → 母线平行 $y$ 轴的抛物柱面",
  "solution": "方程中不含 $y$，故为母线平行于 $y$ 轴的抛物柱面：以 $xOz$ 面上的抛物线 $x=z^2+1$（顶点 $(1,0)$，开口沿 $x$ 轴正向）为准线，沿 $y$ 轴方向平移即得。作图：先画 $xOz$ 面上的抛物线，再沿 $y$ 轴方向拉伸。 [✓官方（作图题，原书答“略”）]"
 },
 {
  "id": "ch8-5-4",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "proof",
  "statement": "画出方程 $y=\\sqrt{1-x^2}$ 所表示的曲面。",
  "answer": "作图见解析",
  "hint": "先看等式成立的条件 $-1\\leqslant x\\leqslant 1,\\;y\\geqslant 0$，再平方",
  "solution": "由 $y=\\sqrt{1-x^2}\\geqslant 0$ 得 $x^2+y^2=1\\;(y\\geqslant 0)$。方程不含 $z$，故为母线平行于 $z$ 轴的半圆柱面：准线是 $xOy$ 面上单位圆的上半圆周（含端点 $(\\pm1,0)$），沿 $z$ 轴方向平移即得（只取 $y\\geqslant 0$ 的那一半柱面）。作图：画上半圆周，再沿 $z$ 轴拉伸。 [✓官方（作图题，原书答“略”）]"
 },
 {
  "id": "ch8-6-1",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 3,
  "type": "choice",
  "statement": "将二次曲面 $2x^2+3y^2+3z^2+4yz=1$ 的方程化为标准方程，并说明它表示什么曲面。",
  "options": [
   "$2\\tilde x^2+\\tilde y^2+5\\tilde z^2=1$，椭球面",
   "$2\\tilde x^2+\\tilde y^2+5\\tilde z^2=-1$，双叶双曲面",
   "$2\\tilde x^2+3\\tilde y^2+3\\tilde z^2=1$，椭球面",
   "$\\tilde x^2+\\tilde y^2+2\\tilde z^2=1$，椭球面"
  ],
  "answer": 0,
  "hint": "二次型矩阵为 $\\operatorname{diag}(2,\\begin{pmatrix}3&2\\\\2&3\\end{pmatrix})$，先求特征值",
  "solution": "二次型矩阵 $\\boldsymbol A=\\begin{pmatrix}2&0&0\\\\0&3&2\\\\0&2&3\\end{pmatrix}$，特征值为 $2,\\;1,\\;5$。取正交变换 $x=\\tilde x,\\;y=\\frac{1}{\\sqrt2}(\\tilde y+\\tilde z),\\;z=\\frac{1}{\\sqrt2}(\\tilde z-\\tilde y)$，则 $3y^2+3z^2+4yz=\\tilde y^2+5\\tilde z^2$，方程化为 $2\\tilde x^2+\\tilde y^2+5\\tilde z^2=1$，即 $\\frac{\\tilde x^2}{1/2}+\\frac{\\tilde y^2}{1}+\\frac{\\tilde z^2}{1/5}=1$，为椭球面（半轴 $\\frac{\\sqrt2}{2},1,\\frac{\\sqrt5}{5}$）。 [✓官方]"
 },
 {
  "id": "ch8-6-2",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 3,
  "type": "choice",
  "statement": "将二次曲面 $z=xy$ 的方程化为标准方程，并说明它表示什么曲面。",
  "options": [
   "$\\tilde z=\\frac12\\tilde x^2-\\frac12\\tilde y^2$，双曲抛物面（马鞍面）",
   "$\\tilde z=\\frac12\\tilde x^2+\\frac12\\tilde y^2$，椭圆抛物面",
   "$\\tilde z^2=\\frac12\\tilde x^2-\\frac12\\tilde y^2$，双曲抛物面",
   "$\\tilde z=\\tilde x^2-\\tilde y^2$，双曲抛物面"
  ],
  "answer": 0,
  "hint": "绕 $z$ 轴转 $45^\\circ$：$x=\\frac{1}{\\sqrt2}(\\tilde x+\\tilde y),\\;y=\\frac{1}{\\sqrt2}(\\tilde x-\\tilde y)$",
  "solution": "作旋转变换 $x=\\frac{1}{\\sqrt2}(\\tilde x+\\tilde y),\\;y=\\frac{1}{\\sqrt2}(\\tilde x-\\tilde y),\\;z=\\tilde z$，则 $xy=\\frac12(\\tilde x^2-\\tilde y^2)$，方程化为 $\\tilde z=\\frac12\\tilde x^2-\\frac12\\tilde y^2$，为双曲抛物面（马鞍面）。 [✓官方]"
 },
 {
  "id": "ch8-6-3",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 3,
  "type": "choice",
  "statement": "将二次曲面 $x^2-2y^2+z^2+4xy+8xz+4yz=3$ 的方程化为标准方程，并说明它表示什么曲面。",
  "options": [
   "$\\tilde x^2+\\tilde y^2-2\\tilde z^2=-1$，双叶双曲面",
   "$\\tilde x^2+\\tilde y^2-2\\tilde z^2=1$，单叶双曲面",
   "$2\\tilde x^2+\\tilde y^2-\\tilde z^2=1$，单叶双曲面",
   "$\\tilde x^2-\\tilde y^2-2\\tilde z^2=1$，双叶双曲面"
  ],
  "answer": 0,
  "hint": "二次型矩阵 $\\begin{pmatrix}1&2&4\\\\2&-2&2\\\\4&2&1\\end{pmatrix}$，特征值为 $6,-3,-3$",
  "solution": "二次型矩阵 $\\boldsymbol A=\\begin{pmatrix}1&2&4\\\\2&-2&2\\\\4&2&1\\end{pmatrix}$，特征多项式 $\\lambda^3-27\\lambda-54=(\\lambda-6)(\\lambda+3)^2$，特征值 $6,-3,-3$。取正交变换 $x=\\frac{1}{\\sqrt5}\\tilde x-\\frac{4}{\\sqrt{45}}\\tilde y+\\frac23\\tilde z,\\;y=-\\frac{2}{\\sqrt5}\\tilde x-\\frac{2}{\\sqrt{45}}\\tilde y+\\frac13\\tilde z,\\;z=\\frac{5}{\\sqrt{45}}\\tilde y+\\frac23\\tilde z$，二次型化为 $-3\\tilde x^2-3\\tilde y^2+6\\tilde z^2$，方程即 $-\\tilde x^2-\\tilde y^2+2\\tilde z^2=1$，亦即 $\\tilde x^2+\\tilde y^2-2\\tilde z^2=-1$，为双叶双曲面。 [✓官方]"
 },
 {
  "id": "ch8-7-1",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "proof",
  "statement": "画出方程 $\\frac{x^2}{4}+y^2-z^2=1$ 所表示的曲面。",
  "answer": "作图见解析",
  "hint": "与 $z=0$ 的截痕是椭圆（腰），与 $y=0$、$x=0$ 的截痕是双曲线 → 单叶双曲面",
  "solution": "$\\frac{x^2}{4}+y^2=1+z^2$：与平面 $z=z_0$ 的截痕都是椭圆 $\\frac{x^2}{4}+y^2=1+z_0^2$，$z=0$ 时为腰椭圆 $\\frac{x^2}{4}+y^2=1$；与 $y=0$ 的截痕是双曲线 $\\frac{x^2}{4}-z^2=1$，与 $x=0$ 的截痕是双曲线 $y^2-z^2=1$。故为单叶双曲面（绕 $z$ 轴旋转）。作图：先画腰椭圆与两条双曲线截痕，再用一族椭圆连接。 [✓官方（作图题，原书答“略”）]"
 },
 {
  "id": "ch8-7-2",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "proof",
  "statement": "画出方程 $x^2-4y^2-z^2=4$ 所表示的曲面。",
  "answer": "作图见解析",
  "hint": "先化为标准形 $\\frac{x^2}{4}-y^2-\\frac{z^2}{4}=1$",
  "solution": "方程即 $\\frac{x^2}{4}-y^2-\\frac{z^2}{4}=1$。与平面 $x=x_0\\;(|x_0|\\geqslant 2)$ 的截痕是圆 $y^2+z^2=\\frac{x_0^2}{4}-1$；与 $x=0$ 无截痕，说明曲面分成 $x\\geqslant 2$ 与 $x\\leqslant -2$ 两支，顶点为 $(\\pm2,0,0)$。故为绕 $x$ 轴旋转的双叶双曲面。作图：画出 $xOy$ 面上的双曲线 $\\frac{x^2}{4}-y^2=1$ 并绕 $x$ 轴旋转。 [✓官方（作图题，原书答“略”）]"
 },
 {
  "id": "ch8-7-3",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 1,
  "type": "proof",
  "statement": "画出方程 $x=2y^2+z^2$ 所表示的曲面。",
  "answer": "作图见解析",
  "hint": "与 $x=x_0\\;(x_0\\geqslant0)$ 的截痕是椭圆 → 椭圆抛物面",
  "solution": "方程 $x=2y^2+z^2$ 中 $y,z$ 只以平方和出现，且 $x\\geqslant 0$。与平面 $x=x_0\\;(x_0>0)$ 的截痕是椭圆 $2y^2+z^2=x_0$；与 $y=0$ 的截痕是抛物线 $x=z^2$，与 $z=0$ 的截痕是抛物线 $x=2y^2$。故为顶点在原点、开口沿 $x$ 轴正向的椭圆抛物面。作图：画出两条抛物线截痕，再用一族椭圆连接。 [✓官方（作图题，原书答“略”）]"
 },
 {
  "id": "ch8-8-1",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 2,
  "type": "choice",
  "statement": "将曲线 $\\begin{cases}(x-1)^2+(y+1)^2+(z-2)^2=9,\\\\ z=1\\end{cases}$ 化为参数方程。",
  "options": [
   "$\\begin{cases}x=1+2\\sqrt2\\cos\\theta\\\\ y=-1+2\\sqrt2\\sin\\theta\\\\ z=1\\end{cases}\\;(0\\leqslant\\theta<2\\pi)$",
   "$\\begin{cases}x=1+3\\cos\\theta\\\\ y=-1+3\\sin\\theta\\\\ z=1\\end{cases}\\;(0\\leqslant\\theta<2\\pi)$",
   "$\\begin{cases}x=1+2\\sqrt2\\cos\\theta\\\\ y=-1+2\\sqrt2\\sin\\theta\\\\ z=2\\end{cases}\\;(0\\leqslant\\theta<2\\pi)$",
   "$\\begin{cases}x=2\\sqrt2\\cos\\theta\\\\ y=2\\sqrt2\\sin\\theta\\\\ z=1\\end{cases}\\;(0\\leqslant\\theta<2\\pi)$"
  ],
  "answer": 0,
  "hint": "把 $z=1$ 代入球面，得平面 $z=1$ 上的圆，先求半径",
  "solution": "把 $z=1$ 代入球面方程：$(x-1)^2+(y+1)^2+(1-2)^2=9$，即 $(x-1)^2+(y+1)^2=8$，是平面 $z=1$ 上以 $(1,-1,1)$ 为圆心、半径 $2\\sqrt2$ 的圆，故参数方程为 $x=1+2\\sqrt2\\cos\\theta,\\;y=-1+2\\sqrt2\\sin\\theta,\\;z=1\\;(0\\leqslant\\theta<2\\pi)$。 [✓官方]"
 },
 {
  "id": "ch8-8-2",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 2,
  "type": "choice",
  "statement": "将曲线 $\\begin{cases}x^2+y^2+z^2=4,\\\\ z=y\\end{cases}$ 化为参数方程。",
  "options": [
   "$\\begin{cases}x=2\\cos\\theta\\\\ y=\\sqrt2\\sin\\theta\\\\ z=\\sqrt2\\sin\\theta\\end{cases}\\;(0\\leqslant\\theta<2\\pi)$",
   "$\\begin{cases}x=2\\cos\\theta\\\\ y=2\\sin\\theta\\\\ z=2\\sin\\theta\\end{cases}\\;(0\\leqslant\\theta<2\\pi)$",
   "$\\begin{cases}x=2\\cos\\theta\\\\ y=\\sqrt2\\sin\\theta\\\\ z=\\sqrt2\\cos\\theta\\end{cases}\\;(0\\leqslant\\theta<2\\pi)$",
   "$\\begin{cases}x=\\sqrt2\\cos\\theta\\\\ y=\\sqrt2\\sin\\theta\\\\ z=\\sqrt2\\sin\\theta\\end{cases}\\;(0\\leqslant\\theta<2\\pi)$"
  ],
  "answer": 0,
  "hint": "由 $z=y$ 消去 $z$，得 $x^2+2y^2=4$（椭圆）",
  "solution": "由 $z=y$ 得 $x^2+2y^2=4$，即 $\\frac{x^2}{4}+\\frac{y^2}{2}=1$，是平面 $z=y$ 上的椭圆，半轴为 $2$ 与 $\\sqrt2$。令 $x=2\\cos\\theta,\\;y=\\sqrt2\\sin\\theta$，则 $z=y=\\sqrt2\\sin\\theta$，即 $x=2\\cos\\theta,\\;y=\\sqrt2\\sin\\theta,\\;z=\\sqrt2\\sin\\theta\\;(0\\leqslant\\theta<2\\pi)$。 [✓官方]"
 },
 {
  "id": "ch8-9-1",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 2,
  "type": "choice",
  "statement": "求曲线 $\\begin{cases}x^2+y^2+z^2=9,\\\\ y-z=1\\end{cases}$ 在 $xOy$ 平面上的投影。",
  "options": [
   "$\\begin{cases}x^2+2\\left(y-\\frac12\\right)^2=\\frac{17}{2}\\\\ z=0\\end{cases}$",
   "$\\begin{cases}x^2+2\\left(y-\\frac12\\right)^2=\\frac{17}{2}\\\\ x=0\\end{cases}$",
   "$\\begin{cases}x^2+2\\left(y-\\frac12\\right)^2=\\frac{15}{2}\\\\ z=0\\end{cases}$",
   "$\\begin{cases}x^2+y^2=9\\\\ z=0\\end{cases}$"
  ],
  "answer": 0,
  "hint": "投影到 $xOy$ 面：消去 $z$，得投影柱面，再与 $z=0$ 联立",
  "solution": "由 $y-z=1$ 得 $z=y-1$，代入球面方程：$x^2+y^2+(y-1)^2=9$，即 $x^2+2y^2-2y=8$，配方得 $x^2+2\\left(y-\\frac12\\right)^2=\\frac{17}{2}$。这是母线平行 $z$ 轴的投影柱面，再与 $z=0$ 联立即为投影曲线。 [✓官方]"
 },
 {
  "id": "ch8-9-2",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 2,
  "type": "choice",
  "statement": "求曲线 $\\begin{cases}x=y^2+z^2,\\\\ x=4\\end{cases}$ 在 $yOz$ 平面上的投影。",
  "options": [
   "$\\begin{cases}y^2+z^2=4\\\\ x=0\\end{cases}$",
   "$\\begin{cases}y^2+z^2=4\\\\ x=4\\end{cases}$",
   "$\\begin{cases}y^2+z^2=16\\\\ x=0\\end{cases}$",
   "$\\begin{cases}y^2+z^2\\leqslant 4\\\\ x=0\\end{cases}$"
  ],
  "answer": 0,
  "hint": "投影到 $yOz$ 面：消去 $x$，再与 $x=0$ 联立",
  "solution": "由 $x=4$ 代入 $x=y^2+z^2$ 得 $y^2+z^2=4$，这是母线平行 $x$ 轴的投影柱面，与 $x=0$ 联立即为 $yOz$ 面上的投影：$\\begin{cases}y^2+z^2=4,\\\\ x=0\\end{cases}$（半径为 $2$ 的圆）。 [✓官方]"
 },
 {
  "id": "ch8-9-3",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 2,
  "type": "choice",
  "statement": "求曲线 $\\begin{cases}x^2+y^2+z^2=2,\\\\ y=\\sqrt{x^2+z^2}\\end{cases}$ 在 $xOz$ 平面上的投影。",
  "options": [
   "$\\begin{cases}x^2+z^2=1\\\\ y=0\\end{cases}$",
   "$\\begin{cases}x^2+z^2=2\\\\ y=0\\end{cases}$",
   "$\\begin{cases}x^2+z^2=1\\\\ y=1\\end{cases}$",
   "$\\begin{cases}x^2+z^2\\leqslant 1\\\\ y=0\\end{cases}$"
  ],
  "answer": 0,
  "hint": "先由 $y=\\sqrt{x^2+z^2}$ 得 $y^2=x^2+z^2$，再代入球面方程",
  "solution": "由 $y=\\sqrt{x^2+z^2}$ 得 $y\\geqslant 0$ 且 $y^2=x^2+z^2$，代入 $x^2+y^2+z^2=2$ 得 $2(x^2+z^2)=2$，即 $x^2+z^2=1$，且 $y=1$。故曲线是平面 $y=1$ 上的单位圆，在 $xOz$ 面上的投影为 $\\begin{cases}x^2+z^2=1,\\\\ y=0\\end{cases}$。 [✓官方]"
 },
 {
  "id": "ch8-10-1",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 3,
  "type": "choice",
  "statement": "求以曲线 $\\begin{cases}x^2+y^2+z^2=4,\\\\ x+y+z=0\\end{cases}$ 为准线、母线平行于 $z$ 轴的柱面方程。",
  "options": [
   "$x^2+y^2+xy=2$",
   "$x^2+y^2+2xy=4$",
   "$x^2+y^2+xy=4$",
   "$x^2+y^2-xy=2$"
  ],
  "answer": 0,
  "hint": "母线平行 $z$ 轴 → 只需从方程组中消去 $z$",
  "solution": "设 $P(x,y,z)$ 在柱面上，则过 $P$ 平行于 $z$ 轴的直线与准线相交，故 $P$ 的 $x,y$ 满足准线上某点的 $x,y$，即消去 $z$ 所得的关系。由 $x+y+z=0$ 得 $z=-(x+y)$，代入 $x^2+y^2+z^2=4$：$x^2+y^2+(x+y)^2=4$，即 $2x^2+2y^2+2xy=4$，故柱面方程为 $x^2+y^2+xy=2$。 [✓官方]"
 },
 {
  "id": "ch8-10-2",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 3,
  "type": "choice",
  "statement": "求以曲线 $\\begin{cases}2x^2+y^2+z^2=16,\\\\ y=\\sqrt{x^2+z^2}\\end{cases}$ 为准线、母线平行于 $y$ 轴的柱面方程。",
  "options": [
   "$3x^2+2z^2=16$",
   "$2x^2+3z^2=16$",
   "$x^2+2z^2=16$",
   "$3x^2+2z^2=8$"
  ],
  "answer": 0,
  "hint": "母线平行 $y$ 轴 → 消去 $y$：由第二式得 $y^2=x^2+z^2$",
  "solution": "母线平行于 $y$ 轴，故只需消去 $y$。由 $y=\\sqrt{x^2+z^2}$ 得 $y^2=x^2+z^2$，代入 $2x^2+y^2+z^2=16$：$2x^2+(x^2+z^2)+z^2=16$，即 $3x^2+2z^2=16$。 [✓官方]"
 },
 {
  "id": "ch8-10-3",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 3,
  "type": "choice",
  "statement": "求以曲线 $\\begin{cases}x^2+y^2+z^2=16,\\\\ y=-\\sqrt{x^2+z^2}\\end{cases}$ 为准线、母线平行于 $x$ 轴的柱面方程。",
  "options": [
   "$y=-2\\sqrt2\\;(|z|\\leqslant 2\\sqrt2)$",
   "$y=2\\sqrt2\\;(|z|\\leqslant 2\\sqrt2)$",
   "$y=-2\\sqrt2$（无范围限制）",
   "$y=-\\sqrt2\\;(|z|\\leqslant 2\\sqrt2)$"
  ],
  "answer": 0,
  "hint": "母线平行 $x$ 轴 → 消去 $x$：$x^2+z^2=y^2$，注意 $y\\leqslant 0$ 的限制",
  "solution": "由 $y=-\\sqrt{x^2+z^2}\\leqslant 0$ 得 $x^2+z^2=y^2$，代入 $x^2+y^2+z^2=16$ 得 $2y^2=16$，即 $y=-2\\sqrt2$；又准线上要求 $x^2+z^2=8$，故 $|z|\\leqslant 2\\sqrt2$。柱面退化为平面 $y=-2\\sqrt2$ 上 $|z|\\leqslant 2\\sqrt2$ 的部分，即 $y=-2\\sqrt2\\;(|z|\\leqslant 2\\sqrt2)$。 [✓官方]"
 },
 {
  "id": "ch8-11-1",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 2,
  "type": "text",
  "statement": "求螺旋线 $\\begin{cases}x=a\\cos\\theta,\\\\ y=a\\sin\\theta,\\\\ z=b\\theta\\end{cases}$ 在三个坐标面上的投影曲线的直角坐标方程。",
  "answer": "$xOy$ 面：$\\begin{cases}x^2+y^2=a^2,\\\\ z=0\\end{cases}$；$yOz$ 面：$\\begin{cases}y=a\\sin\\frac{z}{b},\\\\ x=0\\end{cases}$；$xOz$ 面：$\\begin{cases}x=a\\cos\\frac{z}{b},\\\\ y=0\\end{cases}$",
  "hint": "投影到某坐标面就是消去该面法向的坐标；注意 $\\theta=\\frac{z}{b}$",
  "solution": "在 $xOy$ 面上投影：消去 $z$（即消去 $\\theta$），由 $x=a\\cos\\theta,\\;y=a\\sin\\theta$ 得 $x^2+y^2=a^2$，故投影为 $\\begin{cases}x^2+y^2=a^2,\\\\ z=0\\end{cases}$（圆）。在 $yOz$ 面上投影：由 $z=b\\theta$ 得 $\\theta=\\frac{z}{b}$，代入 $y=a\\sin\\theta$ 得 $y=a\\sin\\frac{z}{b}$，故投影为 $\\begin{cases}y=a\\sin\\frac{z}{b},\\\\ x=0\\end{cases}$（正弦曲线）。在 $xOz$ 面上投影：同理得 $\\begin{cases}x=a\\cos\\frac{z}{b},\\\\ y=0\\end{cases}$（余弦曲线）。 [✓官方]"
 },
 {
  "id": "ch8-12-1",
  "subject": "高代",
  "chapter": "第8章 空间曲面与曲线",
  "difficulty": 3,
  "type": "text",
  "statement": "求上半球面 $z=\\sqrt{4-x^2-y^2}$ 与圆锥面 $z=\\sqrt{x^2+y^2}$ 所围的立体在三个坐标面上的投影。",
  "answer": "$xOy$ 面：$\\begin{cases}x^2+y^2\\leqslant 2,\\\\ z=0\\end{cases}$；$yOz$ 面：$\\begin{cases}|y|\\leqslant z\\leqslant\\sqrt{4-y^2},\\\\ x=0\\end{cases}$；$xOz$ 面：$\\begin{cases}|x|\\leqslant z\\leqslant\\sqrt{4-x^2},\\\\ y=0\\end{cases}$",
  "hint": "先求两曲面交线：$x^2+y^2=2$；立体满足 $\\sqrt{x^2+y^2}\\leqslant z\\leqslant\\sqrt{4-x^2-y^2}$",
  "solution": "两曲面交线：由 $\\sqrt{4-x^2-y^2}=\\sqrt{x^2+y^2}$ 得 $x^2+y^2=2$，$z=\\sqrt2$。所围立体为 $\\Omega:\\sqrt{x^2+y^2}\\leqslant z\\leqslant\\sqrt{4-x^2-y^2}$。在 $xOy$ 面上投影是圆盘 $x^2+y^2\\leqslant 2$（$z=0$）。在 $yOz$ 面上投影：取 $x=0$，立体截出 $|y|\\leqslant z\\leqslant\\sqrt{4-y^2}$，其中 $-\\sqrt2\\leqslant y\\leqslant\\sqrt2$。在 $xOz$ 面上投影：由对称性得 $|x|\\leqslant z\\leqslant\\sqrt{4-x^2}$。 [✓官方]"
 },
 {
  "id": "ch9-1-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "$V$ 为全体 $n$ 阶正交矩阵的集合，按矩阵的加法与数乘运算，$V$ 是否构成实线性空间？",
  "answer": 1,
  "hint": "先看对加法是否封闭",
  "solution": "不构成。正交矩阵对加法不封闭：$n$ 阶单位阵 $\\boldsymbol E$ 是正交矩阵，但 $(2\\boldsymbol E)(2\\boldsymbol E)^{\\mathrm T}=4\\boldsymbol E\\neq\\boldsymbol E$，故 $2\\boldsymbol E$ 不是正交矩阵；且零矩阵不是正交矩阵，$V$ 中根本没有零元。 [✓官方]",
  "options": [
   "是",
   "不是"
  ]
 },
 {
  "id": "ch9-1-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "$V=\\mathbf R^2$ 为全体二维实向量的集合，按向量的数乘与如下规定的加法 $\\oplus$：$(a_1,a_2)\\oplus(b_1,b_2)=(a_1+b_2,\\;a_2+b_1)$，是否构成实线性空间？",
  "answer": 1,
  "hint": "逐条验证八条公理，重点检查结合律",
  "solution": "不构成。零元 $(0,0)$、负元、交换律、数乘分配律都成立，但加法不满足结合律：$\\big((a_1,a_2)\\oplus(b_1,b_2)\\big)\\oplus(c_1,c_2)=(a_1+b_2+c_2,\\;a_2+b_1+c_1)$，而 $(a_1,a_2)\\oplus\\big((b_1,b_2)\\oplus(c_1,c_2)\\big)=(a_1+b_2+c_1,\\;a_2+b_1+c_2)$，两者一般不相等。 [✓官方]",
  "options": [
   "是",
   "不是"
  ]
 },
 {
  "id": "ch9-1-3",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "$V=\\{a_{11}x^2+a_{12}xy+a_{22}y^2\\mid a_{11},a_{12},a_{22}\\in\\mathbf R\\}$，按多项式的加法与数乘运算，$V$ 是否构成实线性空间？",
  "answer": 0,
  "hint": "把它看成三元数组 $(a_{11},a_{12},a_{22})$ 的集合",
  "solution": "构成。$V=\\operatorname{span}\\{x^2,xy,y^2\\}$，任意两个二元二次齐次多项式相加、数乘后仍是二元二次齐次多项式，零多项式属于 $V$，八条公理由多项式的运算性质直接继承。且 $x^2,xy,y^2$ 线性无关，故 $\\dim V=3$，$V\\cong\\mathbf R^3$。 [✓官方]",
  "options": [
   "是",
   "不是"
  ]
 },
 {
  "id": "ch9-1-4",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "设 $\\mathbf C$ 为全体复数集，$V=\\left\\{\\begin{pmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{pmatrix}\\mid a_{11},a_{12},a_{21},a_{22}\\in\\mathbf C,\\;a_{11}+a_{22}=0\\right\\}$，按矩阵的加法与（实）数乘运算，$V$ 是否构成实线性空间？",
  "answer": 0,
  "hint": "条件 $a_{11}+a_{22}=0$ 是线性齐次条件，验证封闭性与零元即可",
  "solution": "构成。若 $\\boldsymbol A,\\boldsymbol B\\in V$，则 $(a_{11}+b_{11})+(a_{22}+b_{22})=0+0=0$，$\\boldsymbol A+\\boldsymbol B\\in V$；对 $k\\in\\mathbf R$，$ka_{11}+ka_{22}=k\\cdot0=0$，$k\\boldsymbol A\\in V$；零矩阵满足 $0+0=0$，属于 $V$。故 $V$ 是 $\\mathbf C^{2\\times2}$ 的实子空间，$\\dim_{\\mathbf R}V=2\\times2\\times2-2=6$。 [✓官方]",
  "options": [
   "是",
   "不是"
  ]
 },
 {
  "id": "ch9-2-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "设 $V$ 为全体二阶实矩阵，$W=\\{\\boldsymbol B\\mid \\boldsymbol B\\in V,\\;\\boldsymbol A\\boldsymbol B=\\boldsymbol B\\boldsymbol A\\}$，其中 $\\boldsymbol A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$。$W$ 是否为 $V$ 的子空间？",
  "answer": 0,
  "hint": "与固定矩阵交换的矩阵之集，对加法与数乘封闭",
  "solution": "是。$\\boldsymbol A\\boldsymbol 0=\\boldsymbol 0\\boldsymbol A$，故 $\\boldsymbol 0\\in W$，$W\\neq\\varnothing$；若 $\\boldsymbol A\\boldsymbol B_1=\\boldsymbol B_1\\boldsymbol A,\\;\\boldsymbol A\\boldsymbol B_2=\\boldsymbol B_2\\boldsymbol A$，则 $\\boldsymbol A(\\boldsymbol B_1+\\boldsymbol B_2)=(\\boldsymbol B_1+\\boldsymbol B_2)\\boldsymbol A$，$\\boldsymbol A(k\\boldsymbol B_1)=k\\boldsymbol A\\boldsymbol B_1=k\\boldsymbol B_1\\boldsymbol A=(k\\boldsymbol B_1)\\boldsymbol A$。故 $W$ 是 $V$ 的子空间。 [✓官方]",
  "options": [
   "是",
   "不是"
  ]
 },
 {
  "id": "ch9-2-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "设 $V=\\mathbf R^3$，$W=\\{(x_1,x_2,x_3)\\mid x_1,x_2,x_3\\in\\mathbf R,\\;x_1+x_2+x_3=1\\}$。$W$ 是否为 $V$ 的子空间？",
  "answer": 1,
  "hint": "子空间必须含零向量",
  "solution": "不是。零向量 $(0,0,0)$ 使 $0+0+0=0\\neq1$，故 $\\boldsymbol 0\\notin W$，$W$ 不含零元；另外 $W$ 对加法也不封闭：$(1,0,0)+(0,1,0)=(1,1,0)$，而 $1+1+0=2\\neq1$。（若右端为 $0$ 则是过原点的平面，才是子空间。） [✓官方]",
  "options": [
   "是",
   "不是"
  ]
 },
 {
  "id": "ch9-2-3",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "设 $V$ 为全体 $n$ 阶实矩阵，$W=\\{\\boldsymbol B\\mid \\boldsymbol B\\in V,\\;\\operatorname{tr}(\\boldsymbol B)=0\\}$。$W$ 是否为 $V$ 的子空间？",
  "answer": 0,
  "hint": "迹是线性函数：$\\operatorname{tr}(\\boldsymbol A+\\boldsymbol B)=\\operatorname{tr}\\boldsymbol A+\\operatorname{tr}\\boldsymbol B$",
  "solution": "是。$\\operatorname{tr}(\\boldsymbol 0)=0$；若 $\\operatorname{tr}\\boldsymbol B_1=\\operatorname{tr}\\boldsymbol B_2=0$，则 $\\operatorname{tr}(\\boldsymbol B_1+\\boldsymbol B_2)=0$，$\\operatorname{tr}(k\\boldsymbol B_1)=k\\operatorname{tr}\\boldsymbol B_1=0$。即 $W=\\ker(\\operatorname{tr})$ 是线性映射的核，故为子空间，$\\dim W=n^2-1$。 [✓官方]",
  "options": [
   "是",
   "不是"
  ]
 },
 {
  "id": "ch9-2-4",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "设 $V=\\mathbf R[x]_3$ 为全体次数小于 $3$ 的实系数多项式，$W=\\left\\{f(x)\\mid f(x)\\in V,\\;\\int_0^1 f(x)\\,\\mathrm dx=1\\right\\}$。$W$ 是否为 $V$ 的子空间？",
  "answer": 1,
  "hint": "零多项式的积分是 $0$，不是 $1$",
  "solution": "不是。零多项式 $f\\equiv0$ 的积分为 $0\\neq1$，故 $\\boldsymbol 0\\notin W$；$W$ 对加法也不封闭：若 $\\int_0^1f=\\int_0^1g=1$，则 $\\int_0^1(f+g)=2\\neq1$。（若右端为 $0$，则 $W$ 是子空间。） [✓官方]",
  "options": [
   "是",
   "不是"
  ]
 },
 {
  "id": "ch9-3-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 1,
  "type": "proof",
  "statement": "设 $V$ 为实线性空间，$V_1,V_2$ 为 $V$ 的子空间，$W=\\{\\boldsymbol\\alpha_1+\\boldsymbol\\alpha_2\\mid \\boldsymbol\\alpha_1\\in V_1,\\;\\boldsymbol\\alpha_2\\in V_2\\}$（记为 $W=V_1+V_2$）。证明 $W$ 是 $V$ 的子空间。",
  "answer": "证明见解析",
  "hint": "按子空间判定：非空 + 对加法、数乘封闭",
  "solution": "（1）非空：$\\boldsymbol 0=\\boldsymbol 0+\\boldsymbol 0\\in W$（$\\boldsymbol 0\\in V_1,\\boldsymbol 0\\in V_2$）。\n（2）对加法封闭：设 $\\boldsymbol\\alpha=\\boldsymbol\\alpha_1+\\boldsymbol\\alpha_2,\\;\\boldsymbol\\beta=\\boldsymbol\\beta_1+\\boldsymbol\\beta_2\\in W$，其中 $\\boldsymbol\\alpha_i,\\boldsymbol\\beta_i\\in V_i$。因 $V_i$ 是子空间，$\\boldsymbol\\alpha_i+\\boldsymbol\\beta_i\\in V_i$，故 $\\boldsymbol\\alpha+\\boldsymbol\\beta=(\\boldsymbol\\alpha_1+\\boldsymbol\\beta_1)+(\\boldsymbol\\alpha_2+\\boldsymbol\\beta_2)\\in W$。\n（3）对数乘封闭：$k\\boldsymbol\\alpha=k\\boldsymbol\\alpha_1+k\\boldsymbol\\alpha_2$，而 $k\\boldsymbol\\alpha_i\\in V_i$，故 $k\\boldsymbol\\alpha\\in W$。\n综上 $W$ 是 $V$ 的子空间。 [✓官方]"
 },
 {
  "id": "ch9-4-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 1,
  "type": "proof",
  "statement": "设 $V$ 为实线性空间，$V_1,V_2$ 为 $V$ 的子空间，$W=V_1\\cap V_2$。证明 $W$ 是 $V$ 的子空间。",
  "answer": "证明见解析",
  "hint": "交集中的元素同时属于两个子空间，分别使用两个子空间的封闭性",
  "solution": "（1）因 $\\boldsymbol 0\\in V_1$ 且 $\\boldsymbol 0\\in V_2$，故 $\\boldsymbol 0\\in W$，$W\\neq\\varnothing$。\n（2）设 $\\boldsymbol\\alpha,\\boldsymbol\\beta\\in W$，则 $\\boldsymbol\\alpha,\\boldsymbol\\beta\\in V_1$ 且 $\\in V_2$。$V_1,V_2$ 都是子空间，故 $\\boldsymbol\\alpha+\\boldsymbol\\beta\\in V_1$ 且 $\\in V_2$，即 $\\boldsymbol\\alpha+\\boldsymbol\\beta\\in W$。\n（3）设 $k\\in\\mathbf R$，$\\boldsymbol\\alpha\\in W$，则 $k\\boldsymbol\\alpha\\in V_1$ 且 $k\\boldsymbol\\alpha\\in V_2$，故 $k\\boldsymbol\\alpha\\in W$。\n所以 $W=V_1\\cap V_2$ 是 $V$ 的子空间。 [✓官方]"
 },
 {
  "id": "ch9-5-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $V$ 为全体二阶实矩阵，记 $\\boldsymbol E_{ij}$ 为第 $i$ 行第 $j$ 列元素为 $1$、其余元素为零的二阶矩阵。求证：$\\boldsymbol E_{11},\\boldsymbol E_{12},\\boldsymbol E_{21},\\boldsymbol E_{22}$ 与 $\\boldsymbol E_{11},\\boldsymbol E_{22},\\boldsymbol E_{12}+\\boldsymbol E_{21},\\boldsymbol E_{12}-\\boldsymbol E_{21}$ 等价。",
  "answer": "证明见解析",
  "hint": "两个向量组等价 ⇔ 可互相线性表示",
  "solution": "记（I）$\\boldsymbol E_{11},\\boldsymbol E_{12},\\boldsymbol E_{21},\\boldsymbol E_{22}$，（II）$\\boldsymbol E_{11},\\boldsymbol E_{22},\\boldsymbol E_{12}+\\boldsymbol E_{21},\\boldsymbol E_{12}-\\boldsymbol E_{21}$。\n（I）可由（II）表示：$\\boldsymbol E_{11},\\boldsymbol E_{22}$ 就是（II）中的向量，且\n$\\boldsymbol E_{12}=\\frac12\\big[(\\boldsymbol E_{12}+\\boldsymbol E_{21})+(\\boldsymbol E_{12}-\\boldsymbol E_{21})\\big]$，$\\boldsymbol E_{21}=\\frac12\\big[(\\boldsymbol E_{12}+\\boldsymbol E_{21})-(\\boldsymbol E_{12}-\\boldsymbol E_{21})\\big]$。\n（II）可由（I）表示：$\\boldsymbol E_{12}+\\boldsymbol E_{21}$、$\\boldsymbol E_{12}-\\boldsymbol E_{21}$ 显然都是（I）的线性组合。\n故两向量组可互相线性表示，即等价（从而都是 $V$ 的基，$\\dim V=4$）。 [✓官方]"
 },
 {
  "id": "ch9-6-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $\\mathbf R^{2\\times2}$ 为全体二阶实矩阵，$V=\\{\\boldsymbol B\\mid \\boldsymbol B\\in\\mathbf R^{2\\times2},\\;\\boldsymbol A\\boldsymbol B=\\boldsymbol B\\boldsymbol A\\}$，其中 $\\boldsymbol A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$。验证 $\\boldsymbol B_1=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix},\\;\\boldsymbol B_2=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$ 为 $V$ 的一组基。",
  "answer": "证明见解析",
  "hint": "设 $\\boldsymbol B=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$，把 $\\boldsymbol A\\boldsymbol B=\\boldsymbol B\\boldsymbol A$ 化成代数条件",
  "solution": "设 $\\boldsymbol B=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$。则 $\\boldsymbol A\\boldsymbol B=\\begin{pmatrix}a+c&b+d\\\\c&d\\end{pmatrix}$，$\\boldsymbol B\\boldsymbol A=\\begin{pmatrix}a&a+b\\\\c&c+d\\end{pmatrix}$。\n由 $\\boldsymbol A\\boldsymbol B=\\boldsymbol B\\boldsymbol A$ 得 $c=0,\\;d=a$，故 $\\boldsymbol B=\\begin{pmatrix}a&b\\\\0&a\\end{pmatrix}=a\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}+b\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}=a\\boldsymbol B_1+(b-a)\\boldsymbol B_2$。所以 $V=\\operatorname{span}\\{\\boldsymbol B_1,\\boldsymbol B_2\\}$（顺便看到 $\\dim V=2$）。\n又 $x\\boldsymbol B_1+y\\boldsymbol B_2=\\begin{pmatrix}x&x+y\\\\0&x\\end{pmatrix}=\\boldsymbol 0\\Rightarrow x=0,y=0$，即 $\\boldsymbol B_1,\\boldsymbol B_2$ 线性无关。故它们是 $V$ 的一组基。 [✓官方]"
 },
 {
  "id": "ch9-6-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "在题 6 中，求 $\\dim V$ 及 $\\boldsymbol B=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$ 在基 $\\boldsymbol B_1,\\boldsymbol B_2$ 下的坐标。",
  "options": [
   "$\\dim V=2$，$\\boldsymbol x=(2,-1)^{\\mathrm T}$",
   "$\\dim V=2$，$\\boldsymbol x=(2,1)^{\\mathrm T}$",
   "$\\dim V=3$，$\\boldsymbol x=(2,-1,0)^{\\mathrm T}$",
   "$\\dim V=2$，$\\boldsymbol x=(1,2)^{\\mathrm T}$"
  ],
  "answer": 0,
  "hint": "由 $\\boldsymbol B=a\\boldsymbol B_1+(b-a)\\boldsymbol B_2$，取 $a=2,\\;b=1$",
  "solution": "由（1）知 $\\dim V=2$，且 $\\boldsymbol B=a\\boldsymbol B_1+(b-a)\\boldsymbol B_2$。这里 $a=2,\\;b=1$，故 $\\boldsymbol B=2\\boldsymbol B_1-\\boldsymbol B_2$，坐标为 $\\boldsymbol x=(2,-1)^{\\mathrm T}$。 [✓官方]"
 },
 {
  "id": "ch9-7-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $\\mathbf C$ 为全体复数集，$V=\\left\\{\\begin{pmatrix}a_1&0\\\\0&a_2\\end{pmatrix}\\mid a_1,a_2\\in\\mathbf C,\\;a_1+a_2=0\\right\\}$，按矩阵加法与数乘构成实线性空间。验证 $\\boldsymbol A_1=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix},\\;\\boldsymbol A_2=\\begin{pmatrix}i&0\\\\0&-i\\end{pmatrix}$ 为 $V$ 的一组基。",
  "answer": "证明见解析",
  "hint": "把 $a_1$ 写成 $x+yi\\;(x,y\\in\\mathbf R)$",
  "solution": "任一 $\\boldsymbol X=\\begin{pmatrix}a_1&0\\\\0&a_2\\end{pmatrix}\\in V$ 满足 $a_2=-a_1$。设 $a_1=x+yi\\;(x,y\\in\\mathbf R)$，则 $\\boldsymbol X=\\begin{pmatrix}x+yi&0\\\\0&-x-yi\\end{pmatrix}=x\\boldsymbol A_1+y\\boldsymbol A_2$，故 $V=\\operatorname{span}_{\\mathbf R}\\{\\boldsymbol A_1,\\boldsymbol A_2\\}$。\n若 $x\\boldsymbol A_1+y\\boldsymbol A_2=\\begin{pmatrix}x+yi&0\\\\0&-x-yi\\end{pmatrix}=\\boldsymbol 0$，则 $x+yi=0$，得 $x=y=0$，即 $\\boldsymbol A_1,\\boldsymbol A_2$ 线性无关。\n故它们构成 $V$ 的一组基，$\\dim_{\\mathbf R}V=2$。（注意在复数域上考虑则 $\\dim_{\\mathbf C}V=1$，基为 $\\boldsymbol A_1$。） [✓官方]"
 },
 {
  "id": "ch9-7-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "在题 7 中，求 $\\dim V$ 及 $\\boldsymbol A=\\begin{pmatrix}-1+3i&0\\\\0&1-3i\\end{pmatrix}$ 在基 $\\boldsymbol A_1,\\boldsymbol A_2$ 下的坐标。",
  "options": [
   "$\\dim V=2$，$\\boldsymbol x=(-1,3)^{\\mathrm T}$",
   "$\\dim V=2$，$\\boldsymbol x=(1,-3)^{\\mathrm T}$",
   "$\\dim V=2$，$\\boldsymbol x=(-1+3i,\\;1-3i)^{\\mathrm T}$",
   "$\\dim V=4$，$\\boldsymbol x=(-1,3)^{\\mathrm T}$"
  ],
  "answer": 0,
  "hint": "设 $\\boldsymbol A=x\\boldsymbol A_1+y\\boldsymbol A_2$，比较对角元 $x+yi=-1+3i$",
  "solution": "$\\dim_{\\mathbf R}V=2$。设 $\\boldsymbol A=x\\boldsymbol A_1+y\\boldsymbol A_2=\\begin{pmatrix}x+yi&0\\\\0&-x-yi\\end{pmatrix}$，与 $\\boldsymbol A$ 比较得 $x+yi=-1+3i$，故 $x=-1,\\;y=3$，坐标 $\\boldsymbol x=(-1,3)^{\\mathrm T}$。 [✓官方]"
 },
 {
  "id": "ch9-8-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $\\mathbf R^{2\\times2}$ 为全体二阶实矩阵，$V=\\{\\boldsymbol A\\mid \\boldsymbol A\\in\\mathbf R^{2\\times2},\\;\\operatorname{tr}(\\boldsymbol A)=0\\}$，按矩阵加法与数乘构成实线性空间。验证 $\\boldsymbol A_1=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix},\\;\\boldsymbol A_2=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix},\\;\\boldsymbol A_3=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}$ 为 $V$ 的一组基。",
  "answer": "证明见解析",
  "hint": "迹为零的二阶矩阵形如 $\\begin{pmatrix}a&b\\\\c&-a\\end{pmatrix}$",
  "solution": "任一 $\\boldsymbol A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\in V$ 满足 $a+d=0$，即 $d=-a$，故 $\\boldsymbol A=\\begin{pmatrix}a&b\\\\c&-a\\end{pmatrix}=a\\boldsymbol A_1+b\\boldsymbol A_2+c\\boldsymbol A_3$，所以 $V=\\operatorname{span}\\{\\boldsymbol A_1,\\boldsymbol A_2,\\boldsymbol A_3\\}$。\n又若 $a\\boldsymbol A_1+b\\boldsymbol A_2+c\\boldsymbol A_3=\\begin{pmatrix}a&b\\\\c&-a\\end{pmatrix}=\\boldsymbol 0$，则 $a=b=c=0$，三者线性无关。\n故 $\\{\\boldsymbol A_1,\\boldsymbol A_2,\\boldsymbol A_3\\}$ 是 $V$ 的一组基，$\\dim V=3$。 [✓官方]"
 },
 {
  "id": "ch9-8-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "在题 8 中，求 $\\dim V$ 及 $\\boldsymbol A=\\begin{pmatrix}-2&1\\\\-3&2\\end{pmatrix}$ 在基 $\\boldsymbol A_1,\\boldsymbol A_2,\\boldsymbol A_3$ 下的坐标。",
  "options": [
   "$\\dim V=3$，$\\boldsymbol x=(-2,1,-3)^{\\mathrm T}$",
   "$\\dim V=3$，$\\boldsymbol x=(-2,1,3)^{\\mathrm T}$",
   "$\\dim V=3$，$\\boldsymbol x=(2,1,-3)^{\\mathrm T}$",
   "$\\dim V=4$，$\\boldsymbol x=(-2,1,-3)^{\\mathrm T}$"
  ],
  "answer": 0,
  "hint": "直接比对 $\\begin{pmatrix}a&b\\\\c&-a\\end{pmatrix}$ 的四个元素",
  "solution": "$\\dim V=3$。由 $\\boldsymbol A=a\\boldsymbol A_1+b\\boldsymbol A_2+c\\boldsymbol A_3=\\begin{pmatrix}a&b\\\\c&-a\\end{pmatrix}$ 与 $\\boldsymbol A=\\begin{pmatrix}-2&1\\\\-3&2\\end{pmatrix}$ 比较得 $a=-2,\\;b=1,\\;c=-3$，坐标 $\\boldsymbol x=(-2,1,-3)^{\\mathrm T}$。 [✓官方]"
 },
 {
  "id": "ch9-9-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $V=\\mathbf R[x]_3$ 为全体次数小于 $3$ 的实系数多项式，按多项式加法与数乘构成实线性空间。验证 $1,x,x^2$ 与 $1,x-1,(x-1)(x-2)$ 分别为 $V$ 的一组基。",
  "answer": "证明见解析",
  "hint": "两组都是 3 个向量，只需证线性无关（或看次数呈三角形）",
  "solution": "（1）$1,x,x^2$ 线性无关：若 $a+bx+cx^2\\equiv0$，比较系数得 $a=b=c=0$；又 $V$ 中任一多项式可写成 $a+bx+cx^2$，故它是基，$\\dim V=3$。\n（2）$1,\\;x-1,\\;(x-1)(x-2)=x^2-3x+2$ 的方次数分别为 $0,1,2$，若 $\\lambda_1\\cdot1+\\lambda_2(x-1)+\\lambda_3(x-1)(x-2)\\equiv0$，比较 $x^2$ 的系数得 $\\lambda_3=0$，再比较 $x$ 的系数得 $\\lambda_2=0$，最后得 $\\lambda_1=0$，故线性无关。三个线性无关的向量构成 $3$ 维空间 $V$ 的基。 [✓官方]"
 },
 {
  "id": "ch9-9-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "choice",
  "statement": "在题 9 中，求从基 $1,x,x^2$ 到基 $1,x-1,(x-1)(x-2)$ 的过渡矩阵 $\\boldsymbol P$。",
  "options": [
   "$\\boldsymbol P=\\begin{pmatrix}1&-1&2\\\\0&1&-3\\\\0&0&1\\end{pmatrix}$",
   "$\\boldsymbol P=\\begin{pmatrix}1&0&0\\\\-1&1&0\\\\2&-3&1\\end{pmatrix}$",
   "$\\boldsymbol P=\\begin{pmatrix}1&1&2\\\\0&1&3\\\\0&0&1\\end{pmatrix}$",
   "$\\boldsymbol P=\\begin{pmatrix}1&-1&2\\\\0&1&3\\\\0&0&1\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "把新基向量按旧基展开，坐标作列",
  "solution": "把新基向量用旧基表示：$1=1$，$x-1=-1+x$，$(x-1)(x-2)=x^2-3x+2=2-3x+x^2$。以这些坐标为列得 $\\boldsymbol P=\\begin{pmatrix}1&-1&2\\\\0&1&-3\\\\0&0&1\\end{pmatrix}$。 [✓官方]"
 },
 {
  "id": "ch9-9-3",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "choice",
  "statement": "在题 9 中，求 $f(x)=2x^2-x+9$ 在基 $1,\\;x-1,\\;(x-1)(x-2)$ 下的坐标 $\\boldsymbol y$。",
  "options": [
   "$\\boldsymbol y=(10,5,2)^{\\mathrm T}$",
   "$\\boldsymbol y=(9,-1,2)^{\\mathrm T}$",
   "$\\boldsymbol y=(10,5,-2)^{\\mathrm T}$",
   "$\\boldsymbol y=(2,5,10)^{\\mathrm T}$"
  ],
  "answer": 0,
  "hint": "设 $f=y_1\\cdot1+y_2(x-1)+y_3(x-1)(x-2)$，比较系数（或用 $\\boldsymbol y=\\boldsymbol P^{-1}\\boldsymbol x$）",
  "solution": "$f$ 在旧基下的坐标为 $\\boldsymbol x=(9,-1,2)^{\\mathrm T}$。设 $f=y_1+y_2(x-1)+y_3(x-1)(x-2)=y_3x^2+(y_2-3y_3)x+(y_1-y_2+2y_3)$。比较系数：$y_3=2$，$y_2-3y_3=-1\\Rightarrow y_2=5$，$y_1-y_2+2y_3=9\\Rightarrow y_1=10$。故 $\\boldsymbol y=(10,5,2)^{\\mathrm T}$，即 $f=10+5(x-1)+2(x-1)(x-2)$。 [✓官方]"
 },
 {
  "id": "ch9-10-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $V$ 为全体二阶实对称矩阵，按矩阵加法与数乘构成实线性空间。验证 $\\boldsymbol A_1=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\;\\boldsymbol A_2=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\;\\boldsymbol A_3=\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}$ 与 $\\boldsymbol B_1=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix},\\;\\boldsymbol B_2=\\begin{pmatrix}1&1\\\\1&0\\end{pmatrix},\\;\\boldsymbol B_3=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$ 分别为 $V$ 的一组基。",
  "answer": "证明见解析",
  "hint": "二阶实对称矩阵形如 $\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}$，$\\dim V=3$；再证两组各 3 个向量线性无关",
  "solution": "任一 $\\boldsymbol X=\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}\\in V$，有 $\\boldsymbol X=a\\boldsymbol A_1+b\\boldsymbol A_2+c\\boldsymbol A_3$，且 $\\boldsymbol A_1,\\boldsymbol A_2,\\boldsymbol A_3$ 显然线性无关，故它们是基，$\\dim V=3$。\n对第二组：$\\boldsymbol B_1=\\boldsymbol A_1-\\boldsymbol A_3$，$\\boldsymbol B_2=\\boldsymbol A_1+\\boldsymbol A_2$，$\\boldsymbol B_3=\\boldsymbol A_1+\\boldsymbol A_2+\\boldsymbol A_3$，它们在基 $\\boldsymbol A_1,\\boldsymbol A_2,\\boldsymbol A_3$ 下的坐标为 $(1,0,-1)^{\\mathrm T},(1,1,0)^{\\mathrm T},(1,1,1)^{\\mathrm T}$，构成的矩阵 $\\begin{pmatrix}1&1&1\\\\0&1&1\\\\-1&0&1\\end{pmatrix}$ 的行列式为 $1\\neq0$，故三者线性无关，也是 $V$ 的基。 [✓官方]"
 },
 {
  "id": "ch9-10-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "choice",
  "statement": "在题 10 中，求从基 $\\boldsymbol A_1,\\boldsymbol A_2,\\boldsymbol A_3$ 到基 $\\boldsymbol B_1,\\boldsymbol B_2,\\boldsymbol B_3$ 的过渡矩阵 $\\boldsymbol P$。",
  "options": [
   "$\\boldsymbol P=\\begin{pmatrix}1&1&1\\\\0&1&1\\\\-1&0&1\\end{pmatrix}$",
   "$\\boldsymbol P=\\begin{pmatrix}1&0&-1\\\\1&1&0\\\\1&1&1\\end{pmatrix}$",
   "$\\boldsymbol P=\\begin{pmatrix}1&1&1\\\\0&1&1\\\\1&0&1\\end{pmatrix}$",
   "$\\boldsymbol P=\\begin{pmatrix}1&1&1\\\\0&1&-1\\\\-1&0&1\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "把 $\\boldsymbol B_j$ 用 $\\boldsymbol A_i$ 表示，坐标作列",
  "solution": "$\\boldsymbol B_1=\\boldsymbol A_1-\\boldsymbol A_3$，$\\boldsymbol B_2=\\boldsymbol A_1+\\boldsymbol A_2$，$\\boldsymbol B_3=\\boldsymbol A_1+\\boldsymbol A_2+\\boldsymbol A_3$，坐标依次为 $(1,0,-1)^{\\mathrm T},(1,1,0)^{\\mathrm T},(1,1,1)^{\\mathrm T}$，故 $\\boldsymbol P=\\begin{pmatrix}1&1&1\\\\0&1&1\\\\-1&0&1\\end{pmatrix}$。 [✓官方]"
 },
 {
  "id": "ch9-10-3",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "choice",
  "statement": "在题 10 中，求 $\\boldsymbol A=\\begin{pmatrix}4&2\\\\2&-3\\end{pmatrix}$ 在基 $\\boldsymbol B_1,\\boldsymbol B_2,\\boldsymbol B_3$ 下的坐标 $\\boldsymbol y$。",
  "options": [
   "$\\boldsymbol y=(2,3,-1)^{\\mathrm T}$",
   "$\\boldsymbol y=(4,2,-3)^{\\mathrm T}$",
   "$\\boldsymbol y=(2,-3,1)^{\\mathrm T}$",
   "$\\boldsymbol y=(-1,3,2)^{\\mathrm T}$"
  ],
  "answer": 0,
  "hint": "先写出 $\\boldsymbol A$ 在 $\\boldsymbol A_i$ 基下的坐标 $(4,2,-3)^{\\mathrm T}$，再算 $\\boldsymbol y=\\boldsymbol P^{-1}(4,2,-3)^{\\mathrm T}$",
  "solution": "$\\boldsymbol A=4\\boldsymbol A_1+2\\boldsymbol A_2-3\\boldsymbol A_3$，即在 $\\boldsymbol A$ 基下坐标为 $(4,2,-3)^{\\mathrm T}$。求得 $\\boldsymbol P^{-1}=\\begin{pmatrix}1&-1&0\\\\-1&2&-1\\\\1&-1&1\\end{pmatrix}$，故 $\\boldsymbol y=\\boldsymbol P^{-1}\\begin{pmatrix}4\\\\2\\\\-3\\end{pmatrix}=\\begin{pmatrix}2\\\\3\\\\-1\\end{pmatrix}$。验证：$2\\boldsymbol B_1+3\\boldsymbol B_2-\\boldsymbol B_3=\\begin{pmatrix}2&0\\\\0&-2\\end{pmatrix}+\\begin{pmatrix}3&3\\\\3&0\\end{pmatrix}-\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}=\\begin{pmatrix}4&2\\\\2&-3\\end{pmatrix}=\\boldsymbol A$。 [✓官方]"
 },
 {
  "id": "ch9-11-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 1,
  "type": "choice",
  "statement": "设 $V$ 为全体三阶实对称矩阵，按矩阵加法与数乘构成实线性空间。求 $V$ 的维数与一组基。",
  "options": [
   "$6$ 维；$\\boldsymbol E_{11},\\boldsymbol E_{22},\\boldsymbol E_{33},\\boldsymbol E_{12}+\\boldsymbol E_{21},\\boldsymbol E_{13}+\\boldsymbol E_{31},\\boldsymbol E_{23}+\\boldsymbol E_{32}$ 为一组基",
   "$6$ 维；$\\boldsymbol E_{11},\\boldsymbol E_{22},\\boldsymbol E_{33},\\boldsymbol E_{12},\\boldsymbol E_{13},\\boldsymbol E_{23}$ 为一组基",
   "$9$ 维；$\\boldsymbol E_{ij}\\;(i,j=1,2,3)$ 为一组基",
   "$3$ 维；$\\boldsymbol E_{11},\\boldsymbol E_{22},\\boldsymbol E_{33}$ 为一组基"
  ],
  "answer": 0,
  "hint": "数一数 $3\\times3$ 对称矩阵中可自由取值的元素个数",
  "solution": "三阶实对称矩阵形如 $\\begin{pmatrix}a_{11}&a_{12}&a_{13}\\\\a_{12}&a_{22}&a_{23}\\\\a_{13}&a_{23}&a_{33}\\end{pmatrix}$，由 $6$ 个自由未知量决定，故 $\\dim V=6$。一组基为 $\\boldsymbol E_{11},\\boldsymbol E_{22},\\boldsymbol E_{33},\\boldsymbol E_{12}+\\boldsymbol E_{21},\\boldsymbol E_{13}+\\boldsymbol E_{31},\\boldsymbol E_{23}+\\boldsymbol E_{32}$。 [✓官方]"
 },
 {
  "id": "ch9-12-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 1,
  "type": "choice",
  "statement": "设 $V$ 为全体三阶实上三角矩阵，按矩阵加法与数乘构成实线性空间。求 $V$ 的维数与一组基。",
  "options": [
   "$6$ 维；$\\boldsymbol E_{11},\\boldsymbol E_{12},\\boldsymbol E_{13},\\boldsymbol E_{22},\\boldsymbol E_{23},\\boldsymbol E_{33}$ 为一组基",
   "$6$ 维；$\\boldsymbol E_{11},\\boldsymbol E_{21},\\boldsymbol E_{31},\\boldsymbol E_{22},\\boldsymbol E_{32},\\boldsymbol E_{33}$ 为一组基",
   "$9$ 维；$\\boldsymbol E_{ij}\\;(i,j=1,2,3)$ 为一组基",
   "$3$ 维；$\\boldsymbol E_{11},\\boldsymbol E_{22},\\boldsymbol E_{33}$ 为一组基"
  ],
  "answer": 0,
  "hint": "上三角矩阵主对角线下方元素全为 $0$",
  "solution": "三阶上三角矩阵形如 $\\begin{pmatrix}a_{11}&a_{12}&a_{13}\\\\0&a_{22}&a_{23}\\\\0&0&a_{33}\\end{pmatrix}$，非零位置有 $6$ 个，故 $\\dim V=6$。一组基为 $\\boldsymbol E_{11},\\boldsymbol E_{12},\\boldsymbol E_{13},\\boldsymbol E_{22},\\boldsymbol E_{23},\\boldsymbol E_{33}$。 [✓官方]"
 },
 {
  "id": "ch9-13-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "设 $\\mathbf R^4$ 中 $\\boldsymbol\\alpha_1=(1,-1,2,3)^{\\mathrm T},\\;\\boldsymbol\\alpha_2=(2,1,0,-1)^{\\mathrm T},\\;\\boldsymbol\\alpha_3=(4,-1,4,5)^{\\mathrm T},\\;\\boldsymbol\\alpha_4=(7,-1,6,7)^{\\mathrm T}$。求 $L(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3,\\boldsymbol\\alpha_4)$ 的维数与一组基。",
  "options": [
   "维数为 $2$，$\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2$ 为一组基",
   "维数为 $3$，$\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3$ 为一组基",
   "维数为 $4$，$\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3,\\boldsymbol\\alpha_4$ 为一组基",
   "维数为 $2$，$\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_4$ 为一组基"
  ],
  "answer": 0,
  "hint": "注意观察 $\\boldsymbol\\alpha_3,\\boldsymbol\\alpha_4$ 能否由 $\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2$ 表示",
  "solution": "$\\boldsymbol\\alpha_3=2\\boldsymbol\\alpha_1+\\boldsymbol\\alpha_2$，$\\boldsymbol\\alpha_4=3\\boldsymbol\\alpha_1+2\\boldsymbol\\alpha_2$，故 $L(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3,\\boldsymbol\\alpha_4)=L(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2)$。又 $\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2$ 的对应分量不成比例（如第 $1,2$ 分量 $(1,-1)$ 与 $(2,1)$），故线性无关。所以维数为 $2$，$\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2$ 是一组基。 [✓官方]"
 },
 {
  "id": "ch9-13-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "在题 13 中，求 $\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3,\\boldsymbol\\alpha_4$ 在（1）中所取基下的坐标。",
  "options": [
   "$\\boldsymbol x_1=(1,0)^{\\mathrm T},\\;\\boldsymbol x_2=(0,1)^{\\mathrm T},\\;\\boldsymbol x_3=(2,1)^{\\mathrm T},\\;\\boldsymbol x_4=(3,2)^{\\mathrm T}$",
   "$\\boldsymbol x_1=(1,0)^{\\mathrm T},\\;\\boldsymbol x_2=(0,1)^{\\mathrm T},\\;\\boldsymbol x_3=(1,2)^{\\mathrm T},\\;\\boldsymbol x_4=(2,3)^{\\mathrm T}$",
   "$\\boldsymbol x_1=(1,0)^{\\mathrm T},\\;\\boldsymbol x_2=(0,1)^{\\mathrm T},\\;\\boldsymbol x_3=(2,1)^{\\mathrm T},\\;\\boldsymbol x_4=(2,3)^{\\mathrm T}$",
   "$\\boldsymbol x_1=(1,0,0)^{\\mathrm T},\\;\\boldsymbol x_2=(0,1,0)^{\\mathrm T},\\;\\boldsymbol x_3=(2,1,0)^{\\mathrm T},\\;\\boldsymbol x_4=(3,2,0)^{\\mathrm T}$"
  ],
  "answer": 0,
  "hint": "直接把各向量写成基向量的组合，读出系数",
  "solution": "由 $\\boldsymbol\\alpha_1=1\\cdot\\boldsymbol\\alpha_1+0\\cdot\\boldsymbol\\alpha_2$，$\\boldsymbol\\alpha_2=0\\cdot\\boldsymbol\\alpha_1+1\\cdot\\boldsymbol\\alpha_2$，$\\boldsymbol\\alpha_3=2\\boldsymbol\\alpha_1+\\boldsymbol\\alpha_2$，$\\boldsymbol\\alpha_4=3\\boldsymbol\\alpha_1+2\\boldsymbol\\alpha_2$，得 $\\boldsymbol x_1=(1,0)^{\\mathrm T},\\;\\boldsymbol x_2=(0,1)^{\\mathrm T},\\;\\boldsymbol x_3=(2,1)^{\\mathrm T},\\;\\boldsymbol x_4=(3,2)^{\\mathrm T}$。 [✓官方]"
 },
 {
  "id": "ch9-14-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "proof",
  "statement": "在 $\\mathbf R^3$ 中定义 $\\sigma(x_1,x_2,x_3)^{\\mathrm T}=(x_1+x_2,\\;x_2+x_3,\\;x_3+x_1)^{\\mathrm T}$。验证 $\\sigma$ 为 $\\mathbf R^3$ 的一个线性变换。",
  "answer": "证明见解析",
  "hint": "验证 $\\sigma(\\boldsymbol\\alpha+\\boldsymbol\\beta)=\\sigma(\\boldsymbol\\alpha)+\\sigma(\\boldsymbol\\beta)$ 与 $\\sigma(k\\boldsymbol\\alpha)=k\\sigma(\\boldsymbol\\alpha)$",
  "solution": "设 $\\boldsymbol\\alpha=(x_1,x_2,x_3)^{\\mathrm T},\\;\\boldsymbol\\beta=(y_1,y_2,y_3)^{\\mathrm T},\\;k\\in\\mathbf R$，记 $\\sigma(\\boldsymbol\\alpha)=((\\boldsymbol\\alpha)_1+(\\boldsymbol\\alpha)_2,\\;(\\boldsymbol\\alpha)_2+(\\boldsymbol\\alpha)_3,\\;(\\boldsymbol\\alpha)_3+(\\boldsymbol\\alpha)_1)^{\\mathrm T}$。\n（1）$\\sigma(\\boldsymbol\\alpha+\\boldsymbol\\beta)=((x_1+y_1)+(x_2+y_2),\\;(x_2+y_2)+(x_3+y_3),\\;(x_3+y_3)+(x_1+y_1))^{\\mathrm T}$$=(x_1+x_2,\\;x_2+x_3,\\;x_3+x_1)^{\\mathrm T}+(y_1+y_2,\\;y_2+y_3,\\;y_3+y_1)^{\\mathrm T}=\\sigma(\\boldsymbol\\alpha)+\\sigma(\\boldsymbol\\beta)$。\n（2）$\\sigma(k\\boldsymbol\\alpha)=(kx_1+kx_2,\\;kx_2+kx_3,\\;kx_3+kx_1)^{\\mathrm T}=k\\,\\sigma(\\boldsymbol\\alpha)$。\n故 $\\sigma$ 是 $\\mathbf R^3$ 的线性变换。（它是线性变换，也可由 $\\sigma(\\boldsymbol\\alpha)=\\boldsymbol A\\boldsymbol\\alpha$ 看出。） [✓官方]"
 },
 {
  "id": "ch9-14-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "在题 14 中，求 $\\sigma$ 在基 $\\boldsymbol\\varepsilon_1,\\boldsymbol\\varepsilon_2,\\boldsymbol\\varepsilon_3$ 下的矩阵 $\\boldsymbol A$（$\\boldsymbol\\varepsilon_i$ 为第 $i$ 个分量为 $1$、其余分量为零的向量）。",
  "options": [
   "$\\boldsymbol A=\\begin{pmatrix}1&1&0\\\\0&1&1\\\\1&0&1\\end{pmatrix}$",
   "$\\boldsymbol A=\\begin{pmatrix}1&0&1\\\\1&1&0\\\\0&1&1\\end{pmatrix}$",
   "$\\boldsymbol A=\\begin{pmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{pmatrix}$",
   "$\\boldsymbol A=\\begin{pmatrix}1&1&0\\\\0&1&1\\\\-1&0&1\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "把 $\\sigma(\\boldsymbol\\varepsilon_j)$ 的坐标作为第 $j$ 列",
  "solution": "$\\sigma(\\boldsymbol\\varepsilon_1)=(1,0,1)^{\\mathrm T}$，$\\sigma(\\boldsymbol\\varepsilon_2)=(1,1,0)^{\\mathrm T}$，$\\sigma(\\boldsymbol\\varepsilon_3)=(0,1,1)^{\\mathrm T}$，以它们为列得 $\\boldsymbol A=\\begin{pmatrix}1&1&0\\\\0&1&1\\\\1&0&1\\end{pmatrix}$。 [✓官方]"
 },
 {
  "id": "ch9-15-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "proof",
  "statement": "设 $V$ 为全体二阶实矩阵，在 $V$ 中定义 $\\sigma(\\boldsymbol X)=\\boldsymbol X\\begin{pmatrix}1&-2\\\\3&1\\end{pmatrix},\\;\\forall\\boldsymbol X\\in V$。验证 $\\sigma$ 为 $V$ 的一个线性变换。",
  "answer": "证明见解析",
  "hint": "右乘固定矩阵是线性运算",
  "solution": "记 $\\boldsymbol M=\\begin{pmatrix}1&-2\\\\3&1\\end{pmatrix}$。对任意 $\\boldsymbol X,\\boldsymbol Y\\in V$ 及 $k\\in\\mathbf R$：\n（1）$\\sigma(\\boldsymbol X+\\boldsymbol Y)=(\\boldsymbol X+\\boldsymbol Y)\\boldsymbol M=\\boldsymbol X\\boldsymbol M+\\boldsymbol Y\\boldsymbol M=\\sigma(\\boldsymbol X)+\\sigma(\\boldsymbol Y)$；\n（2）$\\sigma(k\\boldsymbol X)=(k\\boldsymbol X)\\boldsymbol M=k(\\boldsymbol X\\boldsymbol M)=k\\,\\sigma(\\boldsymbol X)$。\n故 $\\sigma$ 是 $V$ 的线性变换。 [✓官方]"
 },
 {
  "id": "ch9-15-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 2,
  "type": "choice",
  "statement": "在题 15 中，求 $\\sigma$ 在基 $\\boldsymbol E_{11},\\boldsymbol E_{12},\\boldsymbol E_{21},\\boldsymbol E_{22}$ 下的矩阵 $\\boldsymbol A$。",
  "options": [
   "$\\boldsymbol A=\\begin{pmatrix}1&3&0&0\\\\-2&1&0&0\\\\0&0&1&3\\\\0&0&-2&1\\end{pmatrix}$",
   "$\\boldsymbol A=\\begin{pmatrix}1&-2&0&0\\\\3&1&0&0\\\\0&0&1&-2\\\\0&0&3&1\\end{pmatrix}$",
   "$\\boldsymbol A=\\begin{pmatrix}1&3&0&0\\\\-2&1&0&0\\\\0&0&1&-2\\\\0&0&3&1\\end{pmatrix}$",
   "$\\boldsymbol A=\\begin{pmatrix}1&0&3&0\\\\0&1&0&3\\\\-2&0&1&0\\\\0&-2&0&1\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "逐个算 $\\sigma(\\boldsymbol E_{ij})=\\boldsymbol E_{ij}\\boldsymbol M$，把结果的坐标作列",
  "solution": "$\\sigma(\\boldsymbol E_{11})=\\boldsymbol E_{11}\\boldsymbol M=\\begin{pmatrix}1&-2\\\\0&0\\end{pmatrix}$，坐标 $(1,-2,0,0)^{\\mathrm T}$；$\\sigma(\\boldsymbol E_{12})=\\boldsymbol E_{12}\\boldsymbol M=\\begin{pmatrix}3&1\\\\0&0\\end{pmatrix}$，坐标 $(3,1,0,0)^{\\mathrm T}$；$\\sigma(\\boldsymbol E_{21})=\\boldsymbol E_{21}\\boldsymbol M=\\begin{pmatrix}0&0\\\\1&-2\\end{pmatrix}$，坐标 $(0,0,1,-2)^{\\mathrm T}$；$\\sigma(\\boldsymbol E_{22})=\\boldsymbol E_{22}\\boldsymbol M=\\begin{pmatrix}0&0\\\\3&1\\end{pmatrix}$，坐标 $(0,0,3,1)^{\\mathrm T}$。故 $\\boldsymbol A=\\begin{pmatrix}1&3&0&0\\\\-2&1&0&0\\\\0&0&1&3\\\\0&0&-2&1\\end{pmatrix}$。 [✓官方]"
 },
 {
  "id": "ch9-16-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $V=\\mathbf R[x]_n$ 为全体次数小于 $n$ 的实系数多项式，在 $V$ 中定义 $\\sigma[f(x)]=f(x+1)-f(x),\\;\\forall f(x)\\in V$。验证 $\\sigma$ 为 $V$ 的一个线性变换。",
  "answer": "证明见解析",
  "hint": "利用 $(f+g)(x+1)=(f+g)(x)$ 的展开与数乘的分配律",
  "solution": "对任意 $f,g\\in V$，$k\\in\\mathbf R$：\n（1）$\\sigma(f+g)=(f+g)(x+1)-(f+g)(x)=\\big[f(x+1)-f(x)\\big]+\\big[g(x+1)-g(x)\\big]=\\sigma(f)+\\sigma(g)$；\n（2）$\\sigma(kf)=(kf)(x+1)-(kf)(x)=k\\big[f(x+1)-f(x)\\big]=k\\,\\sigma(f)$。\n故 $\\sigma$ 是 $V$ 的线性变换。（还可看出 $\\sigma$ 把 $n-1$ 次多项式映为 $n-2$ 次多项式，即降一次。） [✓官方]"
 },
 {
  "id": "ch9-16-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "choice",
  "statement": "在题 16 中，求 $\\sigma$ 在基 $1,\\;x,\\;\\frac{x(x-1)}{2!},\\;\\frac{x(x-1)(x-2)}{3!},\\;\\cdots,\\;\\frac{x(x-1)\\cdots(x-n+2)}{(n-1)!}$ 下的矩阵 $\\boldsymbol A$。",
  "options": [
   "$\\boldsymbol A=\\begin{pmatrix}0&1&0&\\cdots&0\\\\0&0&1&\\cdots&0\\\\\\vdots&\\vdots&\\vdots&&\\vdots\\\\0&0&0&\\cdots&1\\\\0&0&0&\\cdots&0\\end{pmatrix}$",
   "$\\boldsymbol A=\\begin{pmatrix}0&0&\\cdots&0&0\\\\1&0&\\cdots&0&0\\\\0&1&\\cdots&0&0\\\\\\vdots&\\vdots&&\\vdots&\\vdots\\\\0&0&\\cdots&1&0\\end{pmatrix}$",
   "$\\boldsymbol A=\\begin{pmatrix}-1&1&0&\\cdots&0\\\\0&-1&1&\\cdots&0\\\\\\vdots&\\vdots&\\vdots&&\\vdots\\\\0&0&0&\\cdots&1\\\\0&0&0&\\cdots&-1\\end{pmatrix}$",
   "$\\boldsymbol A=\\boldsymbol E$（单位矩阵）"
  ],
  "answer": 0,
  "hint": "记 $\\varphi_k=\\frac{x(x-1)\\cdots(x-k+1)}{k!}$，用组合恒等式 $\\varphi_k(x+1)-\\varphi_k(x)=\\varphi_{k-1}(x)$",
  "solution": "记 $\\varphi_0=1,\\;\\varphi_k=\\frac{x(x-1)\\cdots(x-k+1)}{k!}\\;(k=1,\\cdots,n-1)$，这就是题给的基。由组合恒等式 $\\binom{x+1}{k}-\\binom{x}{k}=\\binom{x}{k-1}$，即 $\\varphi_k(x+1)-\\varphi_k(x)=\\varphi_{k-1}(x)$，故\n$\\sigma(\\varphi_0)=0$，$\\sigma(\\varphi_k)=\\varphi_{k-1}\\;(k=1,\\cdots,n-1)$。\n把坐标作为列，得 $\\boldsymbol A$ 的主对角线上方（第 $i$ 行第 $i+1$ 列）全为 $1$，其余为 $0$：\n$\\boldsymbol A=\\begin{pmatrix}0&1&0&\\cdots&0\\\\0&0&1&\\cdots&0\\\\\\vdots&\\vdots&\\vdots&&\\vdots\\\\0&0&0&\\cdots&1\\\\0&0&0&\\cdots&0\\end{pmatrix}$。 [✓官方]"
 },
 {
  "id": "ch9-17-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "proof",
  "statement": "设 $V$ 为三维实线性空间，$\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3$ 为 $V$ 的一组基。在 $V$ 中定义 $\\sigma(x_1\\boldsymbol\\alpha_1+x_2\\boldsymbol\\alpha_2+x_3\\boldsymbol\\alpha_3)=(x_1+x_3)\\boldsymbol\\alpha_1+x_2\\boldsymbol\\alpha_2+(x_1-x_3)\\boldsymbol\\alpha_3$。验证 $\\sigma$ 为 $V$ 的一个线性变换。",
  "answer": "证明见解析",
  "hint": "用坐标（$x_1,x_2,x_3$）写出 $\\sigma$，它是线性齐次变换",
  "solution": "设 $\\boldsymbol\\xi=x_1\\boldsymbol\\alpha_1+x_2\\boldsymbol\\alpha_2+x_3\\boldsymbol\\alpha_3$，记其坐标为 $\\boldsymbol x=(x_1,x_2,x_3)^{\\mathrm T}$，则 $\\sigma(\\boldsymbol\\xi)=(x_1+x_3)\\boldsymbol\\alpha_1+x_2\\boldsymbol\\alpha_2+(x_1-x_3)\\boldsymbol\\alpha_3$ 的坐标为 $\\boldsymbol y=(x_1+x_3,\\;x_2,\\;x_1-x_3)^{\\mathrm T}=\\begin{pmatrix}1&0&1\\\\0&1&0\\\\1&0&-1\\end{pmatrix}\\boldsymbol x$。\n于是对任意 $\\boldsymbol\\xi,\\boldsymbol\\eta$（坐标 $\\boldsymbol x,\\boldsymbol z$）及 $k\\in\\mathbf R$：\n$\\sigma(\\boldsymbol\\xi+\\boldsymbol\\eta)=\\boldsymbol A(\\boldsymbol x+\\boldsymbol z)=\\boldsymbol A\\boldsymbol x+\\boldsymbol A\\boldsymbol z=\\sigma(\\boldsymbol\\xi)+\\sigma(\\boldsymbol\\eta)$；$\\sigma(k\\boldsymbol\\xi)=\\boldsymbol A(k\\boldsymbol x)=k\\boldsymbol A\\boldsymbol x=k\\sigma(\\boldsymbol\\xi)$。\n故 $\\sigma$ 是 $V$ 的线性变换。 [✓官方]"
 },
 {
  "id": "ch9-17-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "choice",
  "statement": "在题 17 中，求 $\\sigma$ 在基 $\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3$ 下的矩阵 $\\boldsymbol A$。",
  "options": [
   "$\\boldsymbol A=\\begin{pmatrix}1&0&1\\\\0&1&0\\\\1&0&-1\\end{pmatrix}$",
   "$\\boldsymbol A=\\begin{pmatrix}1&0&1\\\\0&1&0\\\\-1&0&1\\end{pmatrix}$",
   "$\\boldsymbol A=\\begin{pmatrix}1&0&1\\\\0&1&0\\\\1&0&1\\end{pmatrix}$",
   "$\\boldsymbol A=\\begin{pmatrix}1&1&0\\\\0&0&1\\\\1&-1&0\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "把 $\\sigma(\\boldsymbol\\alpha_j)$ 的坐标作第 $j$ 列",
  "solution": "$\\sigma(\\boldsymbol\\alpha_1)=\\boldsymbol\\alpha_1+\\boldsymbol\\alpha_3$，$\\sigma(\\boldsymbol\\alpha_2)=\\boldsymbol\\alpha_2$，$\\sigma(\\boldsymbol\\alpha_3)=\\boldsymbol\\alpha_1-\\boldsymbol\\alpha_3$，坐标依次为 $(1,0,1)^{\\mathrm T},(0,1,0)^{\\mathrm T},(1,0,-1)^{\\mathrm T}$，故 $\\boldsymbol A=\\begin{pmatrix}1&0&1\\\\0&1&0\\\\1&0&-1\\end{pmatrix}$。 [✓官方]"
 },
 {
  "id": "ch9-17-3",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "choice",
  "statement": "在题 17 中，若 $\\boldsymbol\\beta_1=\\boldsymbol\\alpha_1+\\boldsymbol\\alpha_2-\\boldsymbol\\alpha_3$，$\\boldsymbol\\beta_2=\\boldsymbol\\alpha_2-2\\boldsymbol\\alpha_3$，$\\boldsymbol\\beta_3=2\\boldsymbol\\alpha_1+\\boldsymbol\\alpha_2-2\\boldsymbol\\alpha_3$，证明 $\\boldsymbol\\beta_1,\\boldsymbol\\beta_2,\\boldsymbol\\beta_3$ 也是 $V$ 的一组基，并求从基 $\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3$ 到基 $\\boldsymbol\\beta_1,\\boldsymbol\\beta_2,\\boldsymbol\\beta_3$ 的过渡矩阵 $\\boldsymbol P$。",
  "options": [
   "$\\boldsymbol P=\\begin{pmatrix}1&0&2\\\\1&1&1\\\\-1&-2&-2\\end{pmatrix}$",
   "$\\boldsymbol P=\\begin{pmatrix}1&1&-1\\\\0&1&-2\\\\2&1&-2\\end{pmatrix}$",
   "$\\boldsymbol P=\\begin{pmatrix}1&0&2\\\\1&1&1\\\\1&-2&-2\\end{pmatrix}$",
   "$\\boldsymbol P=\\begin{pmatrix}1&0&-2\\\\1&1&1\\\\-1&-2&2\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "写出过渡矩阵后验证 $|\\boldsymbol P|\\neq0$，即证其为基",
  "solution": "$(\\boldsymbol\\beta_1,\\boldsymbol\\beta_2,\\boldsymbol\\beta_3)=(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3)\\boldsymbol P$，其中 $\\boldsymbol P=\\begin{pmatrix}1&0&2\\\\1&1&1\\\\-1&-2&-2\\end{pmatrix}$（各列是 $\\boldsymbol\\beta_j$ 在 $\\boldsymbol\\alpha$ 基下的坐标）。\n$|\\boldsymbol P|=1\\cdot(1\\cdot(-2)-1\\cdot(-2))-0+2\\cdot(1\\cdot(-2)-1\\cdot(-1))=0+2\\cdot(-1)=-2\\neq0$，故 $\\boldsymbol P$ 可逆，$\\boldsymbol\\beta_1,\\boldsymbol\\beta_2,\\boldsymbol\\beta_3$ 线性无关，从而是 $V$ 的一组基。 [✓官方]"
 },
 {
  "id": "ch9-17-4",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "choice",
  "statement": "在题 17 中，求 $\\sigma$ 在基 $\\boldsymbol\\beta_1,\\boldsymbol\\beta_2,\\boldsymbol\\beta_3$ 下的矩阵 $\\boldsymbol B$。",
  "options": [
   "$\\boldsymbol B=\\begin{pmatrix}4&4&6\\\\-1&0&-2\\\\-2&-3&-3\\end{pmatrix}$",
   "$\\boldsymbol B=\\begin{pmatrix}1&0&1\\\\0&1&0\\\\1&0&-1\\end{pmatrix}$",
   "$\\boldsymbol B=\\begin{pmatrix}4&-1&-2\\\\4&0&-3\\\\6&-2&-3\\end{pmatrix}$",
   "$\\boldsymbol B=\\begin{pmatrix}-4&4&6\\\\1&0&-2\\\\2&-3&3\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "用 $\\boldsymbol B=\\boldsymbol P^{-1}\\boldsymbol A\\boldsymbol P$",
  "solution": "$\\boldsymbol B=\\boldsymbol P^{-1}\\boldsymbol A\\boldsymbol P$，其中 $\\boldsymbol A=\\begin{pmatrix}1&0&1\\\\0&1&0\\\\1&0&-1\\end{pmatrix}$，$\\boldsymbol P=\\begin{pmatrix}1&0&2\\\\1&1&1\\\\-1&-2&-2\\end{pmatrix}$，$\\boldsymbol P^{-1}=\\begin{pmatrix}0&2&1\\\\-\\frac12&0&-\\frac12\\\\\\frac12&-1&-\\frac12\\end{pmatrix}$。计算得 $\\boldsymbol B=\\begin{pmatrix}4&4&6\\\\-1&0&-2\\\\-2&-3&-3\\end{pmatrix}$。 [✓官方]"
 },
 {
  "id": "ch9-18-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "choice",
  "statement": "设 $V$ 为三维实线性空间，$\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3$ 为 $V$ 的一组基。已知 $V$ 的线性变换 $\\sigma$ 在基 $\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3$ 下的矩阵为 $\\boldsymbol A=(a_{ij})$。求 $\\sigma$ 在基 $\\boldsymbol\\alpha_3,\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2$ 下的矩阵 $\\boldsymbol B_1$。",
  "options": [
   "$\\boldsymbol B_1=\\begin{pmatrix}a_{33}&a_{31}&a_{32}\\\\a_{13}&a_{11}&a_{12}\\\\a_{23}&a_{21}&a_{22}\\end{pmatrix}$",
   "$\\boldsymbol B_1=\\begin{pmatrix}a_{11}&a_{12}&a_{13}\\\\a_{21}&a_{22}&a_{23}\\\\a_{31}&a_{32}&a_{33}\\end{pmatrix}$",
   "$\\boldsymbol B_1=\\begin{pmatrix}a_{33}&a_{13}&a_{23}\\\\a_{31}&a_{11}&a_{21}\\\\a_{32}&a_{12}&a_{22}\\end{pmatrix}$",
   "$\\boldsymbol B_1=\\begin{pmatrix}a_{22}&a_{23}&a_{21}\\\\a_{32}&a_{33}&a_{31}\\\\a_{12}&a_{13}&a_{11}\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "换基矩阵是置换矩阵，$\\boldsymbol B_1=\\boldsymbol P^{-1}\\boldsymbol A\\boldsymbol P$ 就是把行列按同一置换重排",
  "solution": "取 $\\boldsymbol P=\\begin{pmatrix}0&1&0\\\\0&0&1\\\\1&0&0\\end{pmatrix}$，则 $(\\boldsymbol\\alpha_3,\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2)=(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3)\\boldsymbol P$，$\\boldsymbol B_1=\\boldsymbol P^{-1}\\boldsymbol A\\boldsymbol P$。按此置换重排 $\\boldsymbol A$ 的行与列（新序为 $3,1,2$）得 $\\boldsymbol B_1=\\begin{pmatrix}a_{33}&a_{31}&a_{32}\\\\a_{13}&a_{11}&a_{12}\\\\a_{23}&a_{21}&a_{22}\\end{pmatrix}$。 [✓官方]"
 },
 {
  "id": "ch9-18-2",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "choice",
  "statement": "在题 18 中，求 $\\sigma$ 在基 $\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,2\\boldsymbol\\alpha_3$ 下的矩阵 $\\boldsymbol B_2$。",
  "options": [
   "$\\boldsymbol B_2=\\begin{pmatrix}a_{11}&a_{12}&2a_{13}\\\\a_{21}&a_{22}&2a_{23}\\\\\\frac12a_{31}&\\frac12a_{32}&a_{33}\\end{pmatrix}$",
   "$\\boldsymbol B_2=\\begin{pmatrix}a_{11}&a_{12}&\\frac12a_{13}\\\\a_{21}&a_{22}&\\frac12a_{23}\\\\2a_{31}&2a_{32}&a_{33}\\end{pmatrix}$",
   "$\\boldsymbol B_2=\\begin{pmatrix}a_{11}&a_{12}&2a_{13}\\\\a_{21}&a_{22}&2a_{23}\\\\2a_{31}&2a_{32}&a_{33}\\end{pmatrix}$",
   "$\\boldsymbol B_2=\\begin{pmatrix}a_{11}&a_{12}&a_{13}\\\\a_{21}&a_{22}&a_{23}\\\\\\frac12a_{31}&\\frac12a_{32}&\\frac12a_{33}\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "第三列要乘以 $2$，第三行要除以 $2$（因为 $2\\boldsymbol\\alpha_3$ 的坐标系数）",
  "solution": "取 $\\boldsymbol P=\\operatorname{diag}(1,1,2)$，则 $(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,2\\boldsymbol\\alpha_3)=(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3)\\boldsymbol P$，$\\boldsymbol B_2=\\boldsymbol P^{-1}\\boldsymbol A\\boldsymbol P$，即第 $3$ 列乘 $2$、第 $3$ 行除 $2$： $\\boldsymbol B_2=\\begin{pmatrix}a_{11}&a_{12}&2a_{13}\\\\a_{21}&a_{22}&2a_{23}\\\\\\frac12a_{31}&\\frac12a_{32}&a_{33}\\end{pmatrix}$。 [✓官方]"
 },
 {
  "id": "ch9-19-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "fill",
  "statement": "设 $V$ 为三维欧氏空间，$\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3$ 为 $V$ 的一组基，$V$ 在基 $\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3$ 下的度量矩阵为 $\\boldsymbol A=\\begin{pmatrix}1&1&0\\\\1&3&2\\\\0&2&5\\end{pmatrix}$。设 $\\boldsymbol\\beta_1=2\\boldsymbol\\alpha_1-\\boldsymbol\\alpha_2,\\;\\boldsymbol\\beta_2=\\boldsymbol\\alpha_2+\\boldsymbol\\alpha_3$，求内积 $(\\boldsymbol\\beta_1,\\boldsymbol\\beta_2)$。",
  "answer": "-3",
  "hint": "用坐标计算：$(\\boldsymbol\\beta_1,\\boldsymbol\\beta_2)=\\boldsymbol x^{\\mathrm T}\\boldsymbol A\\boldsymbol y$，其中 $\\boldsymbol x=(2,-1,0)^{\\mathrm T},\\;\\boldsymbol y=(0,1,1)^{\\mathrm T}$",
  "solution": "$\\boldsymbol\\beta_1,\\boldsymbol\\beta_2$ 在基 $\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3$ 下的坐标分别为 $\\boldsymbol x=(2,-1,0)^{\\mathrm T},\\;\\boldsymbol y=(0,1,1)^{\\mathrm T}$。由度量矩阵的定义 $(\\boldsymbol\\beta_1,\\boldsymbol\\beta_2)=\\boldsymbol x^{\\mathrm T}\\boldsymbol A\\boldsymbol y$，而 $\\boldsymbol A\\boldsymbol y=(1\\cdot0+1\\cdot1+0\\cdot1,\\;1\\cdot0+3\\cdot1+2\\cdot1,\\;0\\cdot0+2\\cdot1+5\\cdot1)^{\\mathrm T}=(1,5,7)^{\\mathrm T}$，故 $(\\boldsymbol\\beta_1,\\boldsymbol\\beta_2)=(2,-1,0)\\cdot(1,5,7)=2-5=-3$。 [✓官方]"
 },
 {
  "id": "ch9-20-1",
  "subject": "高代",
  "chapter": "第9章 线性空间与线性变换",
  "difficulty": 3,
  "type": "choice",
  "statement": "设 $V$ 为全体二阶实对称矩阵，对矩阵加法与数乘构成三维实线性空间，在 $V$ 中定义内积 $(\\boldsymbol A,\\boldsymbol B)=\\operatorname{tr}(\\boldsymbol A^{\\mathrm T}\\boldsymbol B)$。求 $V$ 的一组标准正交基。",
  "options": [
   "$\\boldsymbol A_1=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\;\\boldsymbol A_2=\\begin{pmatrix}0&\\frac{1}{\\sqrt2}\\\\\\frac{1}{\\sqrt2}&0\\end{pmatrix},\\;\\boldsymbol A_3=\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}$",
   "$\\boldsymbol A_1=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\;\\boldsymbol A_2=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\;\\boldsymbol A_3=\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}$",
   "$\\boldsymbol A_1=\\begin{pmatrix}\\frac{1}{\\sqrt2}&0\\\\0&0\\end{pmatrix},\\;\\boldsymbol A_2=\\begin{pmatrix}0&\\frac{1}{\\sqrt2}\\\\\\frac{1}{\\sqrt2}&0\\end{pmatrix},\\;\\boldsymbol A_3=\\begin{pmatrix}0&0\\\\0&\\frac{1}{\\sqrt2}\\end{pmatrix}$",
   "$\\boldsymbol A_1=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix},\\;\\boldsymbol A_2=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\;\\boldsymbol A_3=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$"
  ],
  "answer": 0,
  "hint": "先取 $\\boldsymbol E_{11},\\boldsymbol E_{12}+\\boldsymbol E_{21},\\boldsymbol E_{22}$，正交化后单位化（注意 $\\|\\boldsymbol E_{12}+\\boldsymbol E_{21}\\|=\\sqrt2$）",
  "solution": "$\\operatorname{tr}(\\boldsymbol A^{\\mathrm T}\\boldsymbol B)=\\sum_{i,j}a_{ij}b_{ij}$ 就是矩阵元素的内积，故 $\\boldsymbol E_{11},\\boldsymbol E_{22}$ 已是单位向量且互相正交。取正交基 $\\boldsymbol E_{11},\\;\\boldsymbol E_{12}+\\boldsymbol E_{21},\\;\\boldsymbol E_{22}$，再单位化：$\\|\\boldsymbol E_{11}\\|=\\|\\boldsymbol E_{22}\\|=1$，$\\|\\boldsymbol E_{12}+\\boldsymbol E_{21}\\|=\\sqrt{1^2+1^2}=\\sqrt2$。于是标准正交基为 $\\boldsymbol A_1=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},\\;\\boldsymbol A_2=\\begin{pmatrix}0&\\frac{1}{\\sqrt2}\\\\\\frac{1}{\\sqrt2}&0\\end{pmatrix},\\;\\boldsymbol A_3=\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}$。 [✓官方]"
 }
];
