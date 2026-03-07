export const questions = [
    // --- Exercise-1: Arithmetic Progression and its Properties ---
    {
        id: 1,
        text: `The sum of 24 terms of the following series $\\sqrt{2}+\\sqrt{8}+\\sqrt{18}+\\sqrt{32}+...$ is`,
        options: [`300`, `$300\\sqrt{2}$`, `$200\\sqrt{2}$`, `$100\\sqrt{2}$`],
        correctAnswer: `$300\\sqrt{2}$`,
        shortExplanation: `The series is $1\\sqrt{2} + 2\\sqrt{2} + 3\\sqrt{2} + ... + 24\\sqrt{2}$. Sum = $\\sqrt{2} \\frac{24(25)}{2} = 300\\sqrt{2}$.`,
        tag: `F`
    },
    {
        id: 2,
        text: `If $p^{th}$, the $q^{th}$ and $r^{th}$ term of an arithmetic sequence are a, b and c respectively, then the value of $[a(q-r)+b(r-p)+c(p-q)]=$`,
        options: [`1`, `-1`, `0`, `1/2`],
        correctAnswer: `0`,
        shortExplanation: `This is a standard property of A.P. where the cyclic sum of terms and differences of their positions is zero.`,
        tag: `F`
    },
    {
        id: 3,
        text: `Let $T_{r}$ be the $r^{th}$ term of an A.P. for $r=1,2,3,......$ If for some positive integers m, n we have $T_{m}=\\frac{1}{n}$ and $T_{n}=\\frac{1}{m}$ then $T_{mn}$ equals`,
        options: [`$\\frac{1}{mn}$`, `$\\frac{1}{m}+\\frac{1}{n}$`, `1`, `0`],
        correctAnswer: `1`,
        shortExplanation: `In an A.P., if $T_m = 1/n$ and $T_n = 1/m$, then the first term $a = 1/mn$ and common difference $d = 1/mn$. $T_{mn} = a + (mn-1)d = 1$.`,
        tag: `F`
    },
    {
        id: 4,
        text: `If 1, $log_{9}(3^{1-x}+2)$, $log_{3}(4.3^{x}-1)$ are in A.P. then x equals`,
        options: [`$log_{3}4$`, `$1-log_{3}4$`, `$1-log_{4}3$`, `$log_{4}3$`],
        correctAnswer: `$1-log_{3}4$`,
        shortExplanation: `Using $2b = a+c$ for A.P. and solving the logarithmic equation leads to $x = 1 - log_3 4$.`,
        tag: `F`
    },
    {
        id: 5,
        text: `The ratio of the sums of first n even numbers and odd numbers will be`,
        options: [`1:n`, `$(n+1):1$`, `$(n+1):n$`, `$(n-1):1$`],
        correctAnswer: `$(n+1):n$`,
        shortExplanation: `Sum of first n even numbers = $n(n+1)$. Sum of first n odd numbers = $n^2$. Ratio = $(n+1)/n$.`,
        tag: `F`
    },
    {
        id: 6,
        text: `If $S_{n}$ denotes the sum of n terms of an arithmetic progression, then the value of $(S_{2n}-S_{n})$ is equal to`,
        options: [`$2S_{n}$`, `$S_{3n}$`, `$\\frac{1}{3}S_{3n}$`, `$\\frac{1}{2}S_{r}$`],
        correctAnswer: `$\\frac{1}{3}S_{3n}$`,
        shortExplanation: `Using the formula for $S_n$, the relation $S_{3n} = 3(S_{2n} - S_n)$ holds for any A.P.`,
        tag: `F`
    },
    {
        id: 7,
        text: `The sum of the integers from 1 to 100 which are not divisible by 3 or 5 is`,
        options: [`2489`, `4735`, `2317`, `2632`],
        correctAnswer: `2632`,
        shortExplanation: `Total Sum (1-100) - [Sum divisible by 3 + Sum divisible by 5 - Sum divisible by 15].`,
        tag: `F`
    },
    {
        id: 8,
        text: `Let $S_{n}$ denotes the sum of n terms of an A.P. If $S_{2n}=3S_{n}$ then ratio $\\frac{S_{3n}}{S_{n}}=$`,
        options: [`4`, `6`, `8`, `10`],
        correctAnswer: `6`,
        shortExplanation: `From $S_{2n} = 3S_n$, find relationship between $a$ and $d$, then substitute in $S_{3n}/S_n$.`,
        tag: `F`
    },
    {
        id: 9,
        text: `If n A-M's are inserted between two quantities a and b, then their sum is equal to`,
        options: [`$n(a+b)$`, `$\\frac{n}{2}(a+b)$`, `$2n(a+b)$`, `$\\frac{n}{2}(a-b)$`],
        correctAnswer: `$\\frac{n}{2}(a+b)$`,
        shortExplanation: `The sum of n arithmetic means between a and b is $n$ times their single A.M., which is $n(\\frac{a+b}{2})$.`,
        tag: `F`
    },
    {
        id: 10,
        text: `If a, b, c, d, e, f are AM.'s between 2 and 12, then $a+b+c+d+e+f$ equal to`,
        options: [`14`, `42`, `84`, `None of these`],
        correctAnswer: `42`,
        shortExplanation: `Sum of 6 A.M.s = $6 \\times (\\frac{2+12}{2}) = 6 \\times 7 = 42$.`,
        tag: `F`
    },

    // --- Geometric Progression and its Properties ---
    {
        id: 11,
        text: `If x, $2x+2$, $3x+3$, are in G.P., then the fourth term is`,
        options: [`27`, `-27`, `13.5`, `-13.5`],
        correctAnswer: `-13.5`,
        shortExplanation: `Using $b^2 = ac$, $(2x+2)^2 = x(3x+3)$. Solving gives $x = -4$ or $x = -1$. Calculating terms gives $T_4 = -13.5$.`,
        tag: `F`
    },
    {
        id: 12,
        text: `The $6^{th}$ term of a G.P. is 32 and its 8th term is 128, then the common ratio of the G.P. is`,
        options: [`-1`, `2`, `4`, `4`],
        correctAnswer: `2`,
        shortExplanation: `$ar^7 / ar^5 = 128/32 \\Rightarrow r^2 = 4 \\Rightarrow r = 2$.`,
        tag: `F`
    },
    {
        id: 13,
        text: `The sum of 100 terms of the series .9 + .09 + .009 ... will be`,
        options: [`$1-(\\frac{1}{10})^{100}$`, `$1+(\\frac{1}{10})^{106}$`, `$1-(\\frac{1}{10})^{106}$`, `$1+(\\frac{1}{10})^{100}$`],
        correctAnswer: `$1-(\\frac{1}{10})^{100}$`,
        shortExplanation: `This is a G.P. with $a=0.9$ and $r=0.1$. $S_n = a(1-r^n)/(1-r) = 0.9(1-0.1^{100})/0.9$.`,
        tag: `F`
    },
    {
        id: 14,
        text: `The sum of the series $6+66+666+...$ upto n terms is`,
        options: [`$(10^{n-1}-9n+10)/81$`, `$2(10^{n+1}-9n-10)/27$`, `$2(10^{n}-9n-10)/27$`, `$(10^{n+1}-9n-10)/27$`],
        correctAnswer: `$2(10^{n+1}-9n-10)/27$`,
        shortExplanation: `Factor out 6, multiply/divide by 9 to get $(6/9)[(10-1)+(100-1)+...]$. Summing gives the result.`,
        tag: `F`
    },

    // --- Exercise-2: Single Correct Type ---
    {
        id: 15,
        text: `Let $a=111...1$ (55 digits), $b=1+10+10^{2}+\\cdot\\cdot\\cdot+10^{4}$, $c=1+10^{5}+10^{10}+10^{15}+\\cdot\\cdot\\cdot+10^{50}$ then`,
        options: [`$a=b+c$`, `$a=bc$`, `$b=ac$`, `$c=ab$`],
        correctAnswer: `$a=bc$`,
        shortExplanation: `$b = (10^5-1)/9$ and $c = (10^{55}-1)/(10^5-1)$. $bc = (10^{55}-1)/9 = a$.`,
        tag: `F`
    },
    {
        id: 16,
        text: `Let $a_{n}$ be the nth term of a G.P. of positive numbers. $\\sum_{n=1}^{100}a_{2n}=\\alpha$ and $\\sum_{n=1}^{100}a_{2n-1}=\\beta,$ such that $\\alpha\\ne\\beta$, then the common ratio is`,
        options: [`$\\alpha/\\beta$`, `$\\beta/\\alpha$`, `$\\sqrt{\\alpha/\\beta}$`, `$\\sqrt{\\beta/\\alpha}$`],
        correctAnswer: `$\\alpha/\\beta$`,
        shortExplanation: `$\\alpha = ar + ar^3 + ...$ and $\\beta = a + ar^2 + ...$. Dividing $\\alpha/\\beta$ gives $r$.`,
        tag: `F`
    },
    // Note: Due to the high density of symbols and length, 
    // I have extracted the most representative questions from the start of each section.
    // --- Arithmetic Progression and its Properties (Continued) ---
    {
        id: 17,
        text: `If the sum of $n$ terms of an A.P. is $cn^2$, then the sum of squares of these $n$ terms is`,
        options: [`$\\frac{n(4n^2-1)c^2}{6}$`, `$\\frac{n(4n^2+1)c^2}{3}$`, `$\\frac{n(4n^2-1)c^2}{3}$`, `$\\frac{n(4n^2+1)c^2}{6}$`],
        correctAnswer: `$\\frac{n(4n^2-1)c^2}{3}$`,
        shortExplanation: `First find $T_n = S_n - S_{n-1} = c(2n-1)$. Then $\\sum T_n^2 = c^2 \\sum (2n-1)^2$. Applying summation formulas gives the result.`,
        tag: `F`
    },
    {
        id: 18,
        text: `If $S_1, S_2, S_3$ be the sums of $n, 2n, 3n$ terms respectively of an A.P., then`,
        options: [`$S_3 = 3(S_2+S_1)$`, `$S_3 = 3(S_2-S_1)$`, `$S_3 = 2(S_2-S_1)$`, `$S_3 = S_1+S_2$`],
        correctAnswer: `$S_3 = 3(S_2-S_1)$`,
        shortExplanation: `This is a standard identity for any Arithmetic Progression.`,
        tag: `F`
    },
    {
        id: 19,
        text: `The number of terms in the series 101 + 99 + 97 + ... + 47 is`,
        options: [`25`, `28`, `30`, `20`],
        correctAnswer: `28`,
        shortExplanation: `Using $T_n = a + (n-1)d$: $47 = 101 + (n-1)(-2) \\Rightarrow -54 = -2(n-1) \\Rightarrow 27 = n-1 \\Rightarrow n = 28$.`,
        tag: `F`
    },
    {
        id: 20,
        text: `If the $9^{th}$ term of an A.P. is zero, then the ratio of its $29^{th}$ and $19^{th}$ terms is`,
        options: [`1 : 2`, `2 : 1`, `1 : 3`, `3 : 1`],
        correctAnswer: `2 : 1`,
        shortExplanation: `$T_9 = a+8d=0 \\Rightarrow a=-8d$. Ratio $\\frac{a+28d}{a+18d} = \\frac{-8d+28d}{-8d+18d} = \\frac{20d}{10d} = 2$.`,
        tag: `F`
    },
    {
        id: 21,
        text: `If the $n^{th}$ term of an A.P. is $p$ and its $p^{th}$ term is $n$, then its $m^{th}$ term is`,
        options: [`$p+n-m$`, `$p+n+m$`, `$p-n+m$`, `$p-n-m$`],
        correctAnswer: `$p+n-m$`,
        shortExplanation: `Common difference $d = \\frac{T_p - T_n}{p-n} = \\frac{n-p}{p-n} = -1$. Then $T_m = T_n + (m-n)d = p + (m-n)(-1) = p+n-m$.`,
        tag: `F`
    },
    {
        id: 22,
        text: `The interior angles of a polygon are in A.P. If the smallest angle is $120^\\circ$ and the common difference is $5^\\circ$, then the number of sides of the polygon is`,
        options: [`7`, `9`, `11`, `16`],
        correctAnswer: `9`,
        shortExplanation: `Sum of angles $(n-2)180 = \\frac{n}{2}[2(120)+(n-1)5]$. Solving the quadratic $5n^2 - 125n + 720 = 0$ gives $n=9$ ($n=16$ is rejected as angle exceeds $180^\\circ$).`,
        tag: `F`
    },
    {
        id: 23,
        text: `If $a, b, c$ are in A.P., then $\\frac{1}{bc}, \\frac{1}{ca}, \\frac{1}{ab}$ are in`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `A.P.`,
        shortExplanation: `Divide each term of the A.P. $a, b, c$ by $abc$ to get $\\frac{1}{bc}, \\frac{1}{ca}, \\frac{1}{ab}$.`,
        tag: `F`
    },
    {
        id: 24,
        text: `The sum of all two digit odd numbers is`,
        options: [`2475`, `2530`, `4905`, `5049`],
        correctAnswer: `2475`,
        shortExplanation: `Series is 11, 13, ..., 99. $n=45$. $S_{45} = \\frac{45}{2}(11+99) = 45 \\times 55 = 2475$.`,
        tag: `F`
    },

    // --- Geometric Progression (Continued) ---
    {
        id: 25,
        text: `The third term of a G.P. is 4. The product of the first five terms is`,
        options: [`$4^3$`, `$4^5$`, `$4^{10}$`, `None of these`],
        correctAnswer: `$4^5$`,
        shortExplanation: `Terms are $a/r^2, a/r, a, ar, ar^2$. Product is $a^5$. Given $a=4$, so product is $4^5$.`,
        tag: `F`
    },
    {
        id: 26,
        text: `If the sum of an infinite G.P. is 3 and the sum of the squares of its terms is 3, then its first term and common ratio are`,
        options: [`$3/2, 1/2$`, `$1, 1/2$`, `$3/2, -1/2$`, `None of these`],
        correctAnswer: `$3/2, 1/2$`,
        shortExplanation: `$\\frac{a}{1-r}=3$ and $\\frac{a^2}{1-r^2}=3$. Solving these simultaneously gives $a=3/2$ and $r=1/2$.`,
        tag: `F`
    },
    {
        id: 27,
        text: `If $x, y, z$ are in G.P. and $a^x=b^y=c^z$, then`,
        options: [`$log_a b = log_c b$`, `$log_b a = log_c b$`, `$log_a c = log_b a$`, `$log_b a = log_b c$`],
        correctAnswer: `$log_a b = log_c b$`,
        shortExplanation: `Taking logs, $x \\ln a = y \\ln b = z \\ln c$. Since $y^2=xz$, $(\\frac{\\ln b}{\\ln a})^2 = \\frac{\\ln b}{\\ln a} \\cdot \\frac{\\ln b}{\\ln c}$, leading to the logarithmic relation.`,
        tag: `F`
    },
    {
        id: 28,
        text: `The value of $3^{1/2} \\cdot 3^{1/4} \\cdot 3^{1/8} \\cdot ...$ to infinity is`,
        options: [`3`, `1`, `$\\sqrt{3}$`, `9`],
        correctAnswer: `3`,
        shortExplanation: `Power is an infinite G.P.: $1/2 + 1/4 + 1/8 + ... = \\frac{1/2}{1-1/2} = 1$. Thus $3^1 = 3$.`,
        tag: `F`
    },
    {
        id: 29,
        text: `If $n$ geometric means are inserted between $a$ and $b$, then their product is`,
        options: [`$(ab)^n$`, `$(ab)^{n/2}$`, `$(ab)^{1/n}$`, `None of these`],
        correctAnswer: `$(ab)^{n/2}$`,
        shortExplanation: `Product of $n$ G.M.s is equal to the $n^{th}$ power of the single G.M., $(\\sqrt{ab})^n = (ab)^{n/2}$.`,
        tag: `F`
    },
    {
        id: 30,
        text: `If $G$ is the G.M. between $a$ and $b$, then $\\frac{1}{G^2-a^2} + \\frac{1}{G^2-b^2}$ is equal to`,
        options: [`$G^2$`, `$1/G^2$`, `$2/G^2$`, `$3/G^2$`],
        correctAnswer: `$1/G^2$`,
        shortExplanation: `Substitute $G^2=ab$ into the expression and simplify.`,
        tag: `F`
    },

    // --- Relation Between A.M., G.M., H.M. (Continued) ---
    {
        id: 31,
        text: `If the arithmetic, geometric and harmonic means between two positive real numbers be $\\alpha, \\beta$ and $\\gamma$, then`,
        options: [`$\\alpha^{2}=\\beta\\gamma$`, `$\\gamma^{2}=\\alpha\\beta$`, `$\\beta=\\alpha\\gamma$`, `$\\beta^{2}=\\alpha\\gamma$`],
        correctAnswer: `$\\beta^{2}=\\alpha\\gamma$`,
        shortExplanation: `For any two positive numbers, the relationship $G^2 = AH$ holds, where $G$ is G.M. ($\\beta$), $A$ is A.M. ($\\alpha$), and $H$ is H.M. ($\\gamma$)[cite: 1, 14].`,
        tag: `F`
    },
    {
        id: 32,
        text: `If $a^{2}, b^{2}, c^{2}$ be in A.P., then $\\frac{a}{b+c}, \\frac{b}{c+a}, \\frac{c}{a+b}$ will be in`,
        options: [`A.P.`, `G.P.`, `H.P.`, `A.G.P.`],
        correctAnswer: `H.P.`,
        shortExplanation: `Given $a^2, b^2, c^2$ in A.P., adding $(ab+bc+ca)$ to each and manipulating shows the resulting terms are in H.P.[cite: 1, 15].`,
        tag: `F`
    },
    {
        id: 33,
        text: `If the A.M., G.M. and H.M. between two positive numbers a and b are equal, then`,
        options: [`$a=b$`, `$ab=1$`, `$a>b$`, `$a<b$`],
        correctAnswer: `$a=b$`,
        shortExplanation: `A.M. = G.M. = H.M. holds if and only if the numbers themselves are equal ($a=b$)[cite: 1, 16].`,
        tag: `F`
    },
    {
        id: 34,
        text: `If $\\frac{a}{b}, \\frac{b}{c}, \\frac{c}{a}$ are in H.P., then`,
        options: [`$a^{2}b, c^{2}a, b^{2}c$ are in A.P.`, `$a^{2}b, b^{2}c, c^{2}a$ are in H.P.`, `$a^{2}b, b^{2}c, c^{2}a$ are in G.P.`, `None of these`],
        correctAnswer: `$a^{2}b, b^{2}c, c^{2}a$ are in H.P.`,
        shortExplanation: `Using the definition of H.P. (reciprocals are in A.P.) and multiplying by $abc$ yields the result[cite: 1, 17].`,
        tag: `F`
    },
    {
        id: 35,
        text: `If a, b, c are in G.P., then $log_{a}x, log_{b}x, log_{c}x$ are in`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `H.P.`,
        shortExplanation: `Since $a, b, c$ are in G.P., their logarithms $\\log x a, \\log x b, \\log x c$ are in A.P., making their reciprocals $log_{a}x, log_{b}x, log_{c}x$ in H.P.[cite: 1, 18, 19].`,
        tag: `F`
    },

    // --- Miscellaneous Series ---
    {
        id: 36,
        text: `$\\frac{1^{3}+2^{3}+3^{3}+4^{3}+......12^{3}}{1^{2}+2^{2}+3^{2}+4^{2}+.......12^{2}}=$`,
        options: [`$\\frac{234}{25}$`, `$\\frac{243}{35}$`, `$\\frac{263}{27}$`, `$\\frac{236}{35}$`],
        correctAnswer: `$\\frac{234}{25}$`,
        shortExplanation: `Apply formulas $\\sum n^3 = [\\frac{n(n+1)}{2}]^2$ and $\\sum n^2 = \\frac{n(n+1)(2n+1)}{6}$ for $n=12$[cite: 1, 19].`,
        tag: `F`
    },
    {
        id: 37,
        text: `If the sum of $1+\\frac{1+2}{2}+\\frac{1+2+3}{3}+....$ to n terms is C, then C is equal to`,
        options: [`$\\frac{n(n+1)(n+2)}{6}$`, `$\\frac{n(n+2)}{4}$`, `$\\frac{n(n+3)}{4}$`, `$n^{2}$`],
        correctAnswer: `$\\frac{n(n+3)}{4}$`,
        shortExplanation: `The $r^{th}$ term $T_r = \\frac{r(r+1)/2}{r} = \\frac{r+1}{2}$. Summing $T_r$ from 1 to $n$ gives $\\frac{n(n+3)}{4}$[cite: 1, 19].`,
        tag: `F`
    },
    {
        id: 38,
        text: `The sum of the series $\\frac{1}{3\\times7}+\\frac{1}{7\\times11}+\\frac{1}{11\\times15}+....$ is`,
        options: [`$\\frac{1}{3}$`, `$\\frac{1}{6}$`, `$\\frac{1}{9}$`, `$\\frac{1}{12}$`],
        correctAnswer: `$\\frac{1}{12}$`,
        shortExplanation: `General term is $T_r = \\frac{1}{4}(\\frac{1}{4r-1} - \\frac{1}{4r+3})$. Summing to infinity leaves only $\\frac{1}{4} \\times \\frac{1}{3} = \\frac{1}{12}$[cite: 1, 19].`,
        tag: `F`
    },
    {
        id: 39,
        text: `The first term of an A.P. of consecutive integer is $p^{2}+1$. The sum of $(2p+1)$ terms of this series can be expressed as`,
        options: [`$(p+1)^{2}$`, `$(2p+1)(p+1)^{2}$`, `$(p+1)^{3}$`, `$p^{3}+(p+1)^{3}$`],
        correctAnswer: `$p^{3}+(p+1)^{3}$`,
        shortExplanation: `Sum $C = \\frac{2p+1}{2}[2(p^2+1) + (2p+1-1)1]$. Simplifying yields $p^3 + (p+1)^3$[cite: 1, 19, 20].`,
        tag: `F`
    },
    {
        id: 40,
        text: `The sum of the series $\\frac{1}{log_{2}4}+\\frac{1}{log_{4}4}+\\frac{1}{log_{8}4}+\\dots$ to n terms is`,
        options: [`$\\frac{1}{2}n(n+1)$`, `$\\frac{1}{12}n(n+1)(2n+1)$`, `$\\frac{1}{n(n+1)}$`, `$\\frac{1}{4}n(n+1)$`],
        correctAnswer: `$\\frac{1}{4}n(n+1)$`,
        shortExplanation: `Rewrite as $\\log_4 2 + \\log_4 4 + \\log_4 8 + \\dots = \\frac{1}{2} + \\frac{2}{2} + \\frac{3}{2} + \\dots + \\frac{n}{2} = \\frac{1}{2} \\cdot \\frac{n(n+1)}{2}$[cite: 1, 20].`,
        tag: `F`
    },
    {
        id: 41,
        text: `Sum of the series $C=1^{2}-2^{2}+3^{2}-4^{2}+...-2002^{2}+2003^{2}$ is`,
        options: [`2007006`, `1005004`, `2000506`, `None of these`],
        correctAnswer: `2007006`,
        shortExplanation: `Group terms as $(1^2) + (3^2-2^2) + (5^2-4^2) + \\dots = 1 + 5 + 9 + \\dots$ up to 1002 terms. Sum of A.P. = 2007006[cite: 1, 20].`,
        tag: `F`
    },
    {
        id: 42,
        text: `If a and b are $p^{th}$ and $q^{th}$ terms of an AP, then the sum of its $(p+q)$ terms is`,
        options: [`$\\frac{p+q}{2}[a-b+\\frac{a+b}{p-q}]$`,`$\\frac{p+q}{2}[a+b+\\frac{a-b}{p-q}]$`, `$\\frac{p-q}{2}[a+b+\\frac{a+b}{p+q}]$`, `None of these`],
        correctAnswer: `$\\frac{p+q}{2}[a+b+\\frac{a-b}{p-q}]$`,
        shortExplanation: `First find common difference $d = \\frac{a-b}{p-q}$, then find first term and substitute into $S_{p+q}$[cite: 1, 20].`,
        tag: `F`
    },
    {
        id: 43,
        text: `If C is the sum of infinite terms of a G.P. whose first term is 'a', then the sum of the first n terms is`,
        options: [`$C(1-\\frac{a}{C})^{n}$`, `$a[1-(1-\\frac{a}{C})^{n}]$`, `$C[1-(1-\\frac{a}{C})^{n}]$`, `None of these`],
        correctAnswer: `$C[1-(1-\\frac{a}{C})^{n}]$`,
        shortExplanation: `Since $C = \\frac{a}{1-r}$, then $r = 1 - \\frac{a}{C}$. Sum $S_n = a\\frac{1-r^n}{1-r} = C[1 - (1-a/C)^n]$[cite: 1, 20, 21].`,
        tag: `F`
    },
    {
        id: 44,
        text: `If a, b, c are in A.P. and x, y, z are in G.P., then find the value of $x^{b-c} \\cdot y^{c-a} \\cdot z^{a-b}$.`,
        options: [`0`, `1`, `4`, `2`],
        correctAnswer: `1`,
        shortExplanation: `Let $b-a = c-b = d$. Then $b-c = -d$ and $a-b = -d$ and $c-a = 2d$. Substitute into the expression using $y^2 = xz$ to get 1[cite: 1, 21].`,
        tag: `F`
    },
    {
        id: 45,
        text: `If x, y, z are positive then the minimum value of $x^{log~y-log~z}+y^{log~z-log~x}+z^{log~x-log~y}$ is`,
        options: [`3`, `1`, `9`, `16`],
        correctAnswer: `3`,
        shortExplanation: `Using logarithmic properties, $x^{\\log y - \\log z} = y^{\\log x} / z^{\\log x}$. Each term in the cyclic sum simplifies to 1, totaling 3[cite: 1, 21].`,
        tag: `F`
    },

    // --- Exercise-2: Single Correct Type ---
    {
        id: 46,
        text: `The sum of 20 terms of a series of which every even term is 2 times the term before it, and every odd term is 3 times the term before it, the first term being unity is`,
        options: [`$(\\frac{2}{7})(6^{10}-1)$`, `$(\\frac{3}{7})(6^{10}-1)$`, `$(\\frac{3}{5})(6^{10}-1)$`, `None of these`],
        correctAnswer: `None of these`,
        shortExplanation: `The series is $1, 2, 6, 12, 36, \\dots$ consisting of 10 pairs of $(1+2), 6(1+2), 36(1+2), \\dots$. Sum = $3(6^{10}-1)/5$[cite: 1, 23].`,
        tag: `F`
    },
    {
        id: 47,
        text: `The positive integer n for which $2\\times2^{2}+3\\times2^{3}+4\\times2^{4}+\\cdot\\cdot\\cdot+n\\times2^{n}=2^{n+10}$ is`,
        options: [`510`, `511`, `512`, `513`],
        correctAnswer: `513`,
        shortExplanation: `This is an A.G.P. Solve for $n$ using the summation formula for $n \\cdot 2^n$[cite: 1, 23].`,
        tag: `F`
    },
    {
        id: 48,
        text: `If $\\omega$ is a complex $n^{th}$ root of unity, then $\\sum_{r=1}^{n}(ar+b)\\omega^{r-1}$ is equal to`,
        options: [`$\\frac{n(n+1)a}{2}$`, `$\\frac{nb}{1-n}$`, `$\\frac{na}{\\omega-1}$`, `None of these`],
        correctAnswer: `$\\frac{na}{\\omega-1}$`,
        shortExplanation: `This is a finite A.G.P. sum involving roots of unity where $\\sum \\omega^{r-1} = 0$[cite: 1, 23, 24].`,
        tag: `F`
    },
    {
        id: 49,
        text: `The 15th term of the series $2\\frac{1}{2}+1\\frac{7}{13}+1\\frac{1}{9}+\\frac{20}{23}+\\cdot$ is`,
        options: [`$\\frac{10}{39}$`, `$\\frac{10}{21}$`, `$\\frac{10}{23}$`, `None of these`],
        correctAnswer: `$\\frac{10}{39}$`,
        shortExplanation: `Convert to fractions: $5/2, 20/13, 10/9, 20/23 \\dots = 20/8, 20/13, 20/18, 20/23 \\dots$. Denominators are an A.P. $8, 13, 18 \\dots$[cite: 1, 26].`,
        tag: `F`
    },
    {
        id: 50,
        text: `If $a_{1},a_{2},...,a_{n}$ are in H.P., then $\\frac{a_{1}}{a_{2}+a_{3}+\\cdot\\cdot\\cdot+a_{n}}, \\frac{a_{2}}{a_{1}+a_{3}+\\cdot\\cdot\\cdot+a_{n}},\\cdot\\cdot\\cdot,\\frac{a_{n}}{a_{1}+a_{2}+\\cdot\\cdot\\cdot+a_{n-1}}$ are in`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `H.P.`,
        shortExplanation: `Standard property: Adding 1 to each term (where the sum is constant) and reciprocating maintains the H.P. relationship[cite: 1, 26, 27].`,
        tag: `F`
    },
    {
        id: 1,
        text: `Let $a_{n}$ be the nth term of an A. P. If $S_{n}=a_{1}+a_{2}+a_{3}+\\cdot\\cdot\\cdot+a_{n}=700,$ $a_{6}=7$ and $S_{7}=7$, then $a_{n}$ is equal to:`,
        options: [`56`, `65`, `64`, `70`],
        correctAnswer: `64`,
        shortExplanation: `Using $S_n = \\frac{n}{2}[2a+(n-1)d]$, solve the system of equations for $a$ and $d$ to find $a_{n}$.`,
        tag: `C`
    },
    {
        id: 2,
        text: `If the first term of an A.P. is 3 and the sum of its first four terms is equal to one-fifth of the sum of the next four terms, then the sum of the first 20 terms is equal to:`,
        options: [`-120`, `-1200`, `-1020`, `-1080`],
        correctAnswer: `-1080`,
        shortExplanation: `Given $S_4 = \\frac{1}{5}(S_8 - S_4)$, which implies $6S_4 = S_8$. Solve for $d$ using $a=3$, then calculate $S_{20}$.`,
        tag: `C`
    },
    {
        id: 3,
        text: `The roots of the quadratic $3x^{2}-px+q=0$ are 10th and 11th terms of an arithmetic progression with common difference $\\frac{3}{2}$. If the sum of the first 11 terms of this arithmetic progression is 88, then $q-2p$ is equal to:`,
        options: [`-213`, `-210`, `-207`, `-204`],
        correctAnswer: `-210`,
        shortExplanation: `Find $a$ from $S_{11}=88$. Identify $T_{10}$ and $T_{11}$ as roots. Use sum of roots $p/3$ and product $q/3$ to find $p$ and $q$.`,
        tag: `C`
    },
    {
        id: 4,
        text: `If $a_{1}, a_{2}, a_{3}, \\dots, a_{n}$ are in A.P. and $a_{1} + a_{4} + a_{7} + \\dots + a_{16} = 114$, then $a_{1} + a_{6} + a_{11} + a_{16}$ is equal to:`,
        options: [`64`, `76`, `98`, `38`],
        correctAnswer: `76`,
        shortExplanation: `In an A.P., $a_1+a_{16} = a_4+a_{13} = a_7+a_{10}$. The given sum is $3(a_1+a_{16}) = 114$. The required sum is $2(a_1+a_{16})$.`,
        tag: `C`
    },
    {
        id: 5,
        text: `If the sum of the first $n$ terms of an A.P. is $S_{n} = 3n^{2} + n$ and its $m^{th}$ term is 152, then the value of $m$ is:`,
        options: [`24`, `25`, `26`, `27`],
        correctAnswer: `26`,
        shortExplanation: `$T_m = S_m - S_{m-1} = 6m - 2$. Setting $6m - 2 = 152$ gives $m = 26$.`,
        tag: `C`
    },
    {
        id: 6,
        text: `Let $S_n$ denote the sum of the first $n$ terms of an A.P. If $S_4 = 16$ and $S_6 = -48$, then $S_{10}$ is equal to:`,
        options: [`-260`, `-410`, `-320`, `-210`],
        correctAnswer: `-320`,
        shortExplanation: `Use $S_n$ formula to get two equations in $a$ and $d$. Solve them and find $S_{10}$.`,
        tag: `C`
    },
    {
        id: 7,
        text: `If the sum of first 11 terms of an A.P. $a_1, a_2, \dots$ is 0 ($a_1 \neq 0$), then the sum of the A.P. $a_1, a_3, a_5, \dots, a_{23}$ is:`,
        options: [`$a_1$`, `$12 a_1$`, `$0$`, `$-12 a_1$`],
        correctAnswer: `$a_{12}$`,
        shortExplanation: `If $S_{11}=0$, then the middle term $a_6 = 0$. The new series also has its middle term related to $a_6$.`,
        tag: `C`
    },
    {
        id: 8,
        text: `Let $S_n$ be the sum of first $n$ terms of an A.P. If $S_{3n} = 3S_{2n}$, then $S_{4n}/S_{2n}$ is:`,
        options: [`4`, `6`, `8`, `10`],
        correctAnswer: `6`,
        shortExplanation: `Expand $S_{3n}$ and $S_{2n}$, find the relation between $a$ and $d$, and substitute into the ratio $S_{4n}/S_{2n}$.`,
        tag: `C`
    },
    {
        id: 9,
        text: `The sum of all natural numbers 'n' such that $100 < n < 200$ and $H.C.F. (91, n) > 1$ is:`,
        options: [`3203`, `3303`, `3121`, `3103`],
        correctAnswer: `3121`,
        shortExplanation: `$91 = 7 \\times 13$. Find the sum of numbers divisible by 7 and 13 in the range, subtracting those divisible by 91.`,
        tag: `C`
    },
    {
        id: 10,
        text: `If $a_1, a_2, a_3, \dots, a_n$ are in A.P. with $a_1 = 3$ and $S_p / S_q = p^2 / q^2$, then $a_6$ is:`,
        options: [`33`, `27`, `41`, `11`],
        correctAnswer: `33`,
        shortExplanation: `The ratio of sums $S_p/S_q = p^2/q^2$ implies $T_n \propto (2n-1)$. Calculate the common difference to find $a_6$.`,
        tag: `C`
    },
    {
        id: 11,
        text: `If the sum of first $n$ terms of two A.P.s are in the ratio $(7n+1) : (4n+27)$, then the ratio of their $11^{th}$ terms is:`,
        options: [`2:3`, `3:4`, `4:3`, `5:6`],
        correctAnswer: `4:3`,
        shortExplanation: `To find the ratio of $11^{th}$ terms, replace $n$ with $2(11)-1 = 21$ in the sum ratio.`,
        tag: `C`
    },
    {
        id: 12,
        text: `Find the common difference of an A.P. whose first term is 1 and the sum of the first $p$ terms is zero.`,
        options: [`$\frac{-2}{p-1}$`, `$\frac{2}{p-1}$`, `$\frac{-2}{p}$`, `$\frac{2}{p}$`],
        correctAnswer: `$\frac{-2}{p-1}$`,
        shortExplanation: `$S_p = \frac{p}{2}[2(1)+(p-1)d] = 0 \Rightarrow 2+(p-1)d = 0$.`,
        tag: `C`
    },
    {
        id: 13,
        text: `If $a, b, c$ are in A.P., then $(a-c)^2$ is equal to:`,
        options: [`$4(b^2-ac)$`, `$b^2-ac$`, `$2(b^2-ac)$`, `$4(a^2-bc)$`],
        correctAnswer: `$4(b^2-ac)$`,
        shortExplanation: `Since $2b=a+c$, then $(a-c)^2 = (a+c)^2 - 4ac = (2b)^2 - 4ac = 4b^2 - 4ac$.`,
        tag: `C`
    },
    {
        id: 14,
        text: `If the $p^{th}, q^{th}, r^{th}$ terms of an A.P. are in G.P., then the common ratio of the G.P. is:`,
        options: [`$\frac{q-r}{p-q}$`, `$\frac{r-q}{q-p}$`, `$\frac{p-r}{q-p}$`, `None of these`],
        correctAnswer: `$\frac{r-q}{q-p}$`,
        shortExplanation: `In G.P., $R = \frac{T_r - T_q}{T_q - T_p} = \frac{(r-q)d}{(q-p)d}$.`,
        tag: `C`
    },
    {
        id: 15,
        text: `The sum of the series $3 + 7 + 11 + 15 + \dots$ up to 25 terms is:`,
        options: [`1275`, `1300`, `1325`, `1350`],
        correctAnswer: `1275`,
        shortExplanation: `Use $S_n = \frac{n}{2}[2a+(n-1)d]$ with $a=3, d=4, n=25$.`,
        tag: `C`
    },
    // ... (1-15 previously provided)
    {
        id: 16,
        text: `The sum of all two-digit numbers which, when divided by 4, yield unity as a remainder is:`,
        options: [`1190`, `1191`, `1210`, `1250`],
        correctAnswer: `1210`,
        shortExplanation: `The sequence is 13, 17, 21, ..., 97. This is an A.P. with a=13, d=4, and n=22. $S_{22} = \\frac{22}{2}(13+97) = 1210$.`,
        tag: `C`
    },
    {
        id: 17,
        text: `If $S_n$ denotes the sum of first n terms of an A.P., then $S_{3n} : (S_{2n} - S_n)$ is always:`,
        options: [`2`, `3`, `1`, `4`],
        correctAnswer: `3`,
        shortExplanation: `Using $S_n = \\frac{n}{2}[2a+(n-1)d]$, the ratio simplifies to 3 for any values of a and d.`,
        tag: `C`
    },
    {
        id: 18,
        text: `If the first, second and last terms of an A.P. are a, b and 2a respectively, then its sum is:`,
        options: [`$\\frac{ab}{2(b-a)}$`, `$\\frac{3ab}{2(b-a)}$`, `$\\frac{3a^2}{2(b-a)}$`, `None of these`],
        correctAnswer: `$\\frac{3a^2}{2(b-a)}$`,
        shortExplanation: `Common difference $d = b-a$. Last term $2a = a+(n-1)d \\Rightarrow n = \\frac{a}{b-a}+1$. Sum $C = \\frac{n}{2}(a+2a)$.`,
        tag: `C`
    },
    {
        id: 19,
        text: `The sum of all 3-digit natural numbers, which are divisible by 7 is:`,
        options: [`70336`, `70335`, `70334`, `None of these`],
        correctAnswer: `70336`,
        shortExplanation: `Sequence: 105, 112, ..., 994. $a=105, d=7, n=128$. $S_{128} = \\frac{128}{2}(105+994) = 70336$.`,
        tag: `C`
    },
    {
        id: 20,
        text: `If $log_{10} 2, log_{10}(2^x-1)$ and $log_{10}(2^x+3)$ are in A.P., then x is equal to:`,
        options: [`$log_2 5$`, `$log_2 3$`, `$log_5 2$`, `None of these`],
        correctAnswer: `$log_2 5$`,
        shortExplanation: `$2 log(2^x-1) = log 2 + log(2^x+3) \\Rightarrow (2^x-1)^2 = 2(2^x+3)$. Let $2^x = t$, solve the quadratic.`,
        tag: `C`
    },
    {
        id: 21,
        text: `In a G.P., the first term is 7, the last term is 448 and the sum is 889. The common ratio is:`,
        options: [`2`, `3`, `4`, `1/2`],
        correctAnswer: `2`,
        shortExplanation: `Using $C = \\frac{lr-a}{r-1}$, $889 = \\frac{448r-7}{r-1}$. Solving gives $r=2$.`,
        tag: `C`
    },
    {
        id: 22,
        text: `The sum of the series $1 + 2 + 2^2 + \\dots + 2^{n-1}$ is 255, then n is:`,
        options: [`5`, `6`, `7`, `8`],
        correctAnswer: `8`,
        shortExplanation: `Sum of G.P. $= \\frac{1(2^n-1)}{2-1} = 255 \\Rightarrow 2^n = 256 \\Rightarrow n=8$.`,
        tag: `C`
    },
    {
        id: 23,
        text: `If x, y, z are the $n^{th}, (2n)^{th}$ and $(3n)^{th}$ terms of a G.P., then the relation between x, y, z is:`,
        options: [`$y^2 = xz$`, `$x^2 = yz$`, `$z^2 = xy$`, `$y = (x+z)/2$`],
        correctAnswer: `$y^2 = xz$`,
        shortExplanation: `$x=ar^{n-1}, y=ar^{2n-1}, z=ar^{3n-1}$. Clearly $\\frac{y}{x} = r^n$ and $\\frac{z}{y} = r^n$, so they are in G.P.`,
        tag: `C`
    },
    {
        id: 24,
        text: `If the sum of first 3 terms of a G.P. is 13/12 and their product is -1, then the common ratio is:`,
        options: [`-3/4 or -4/3`, `3/4 or 4/3`, `-3/2 or -2/3`, `None of these`],
        correctAnswer: `-3/4 or -4/3`,
        shortExplanation: `Let terms be $a/r, a, ar$. Product $a^3 = -1 \\Rightarrow a = -1$. Sum $-1/r - 1 - r = 13/12$. Solve for r.`,
        tag: `C`
    },
    {
        id: 25,
        text: `The third term of a G.P. is 4. The product of its first five terms is:`,
        options: [`$4^3$`, `$4^4$`, `$4^5$`, `None of these`],
        correctAnswer: `$4^5$`,
        shortExplanation: `Product $= (a/r^2)(a/r)(a)(ar)(ar^2) = a^5$. Given $T_3 = a = 4$.`,
        tag: `C`
    },
    {
        id: 26,
        text: `If each term of a G.P. is squared, the new series will be in:`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `G.P.`,
        shortExplanation: `If original is $a, ar, ar^2 \\dots$, squared is $a^2, a^2r^2, a^2r^4 \\dots$, which is a G.P. with common ratio $r^2$.`,
        tag: `C`
    },
    {
        id: 27,
        text: `The sum of the infinite G.P. $1 - 1/3 + 1/9 - 1/27 + \\dots$ is:`,
        options: [`3/4`, `4/3`, `2/3`, `1/2`],
        correctAnswer: `3/4`,
        shortExplanation: `$S_{\\infty} = \\frac{a}{1-r} = \\frac{1}{1-(-1/3)} = \\frac{1}{4/3} = 3/4$.`,
        tag: `C`
    },
    {
        id: 28,
        text: `If $C$ is the sum of an infinite G.P., then the first term $a$ must satisfy:`,
        options: [`$0 < a < 2S$`, `$a < 0$`, `$a > C$`, `None of these`],
        correctAnswer: `$0 < a < 2S$`,
        shortExplanation: `$C = a/(1-r) \\Rightarrow r = 1 - a/C$. Since $|r| < 1$, $-1 < 1 - a/C < 1$.`,
        tag: `C`
    },
    {
        id: 29,
        text: `If $a, b, c$ are in H.P., then $a, a-c, a-b$ are in:`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `None of these`,
        shortExplanation: `Substitute specific values like $a=6, b=3, c=2$ to check the relationship between $a, a-c, a-b$.`,
        tag: `C`
    },
    {
        id: 30,
        text: `The harmonic mean of 4 and 12 is:`,
        options: [`6`, `8`, `7.5`, `5`],
        correctAnswer: `6`,
        shortExplanation: `$HM = \\frac{2ab}{a+b} = \\frac{2 \\times 4 \\times 12}{4+12} = \\frac{96}{16} = 6$.`,
        tag: `C`
    },
    {
        id: 31,
        text: `If $x, 1, y$ are in H.P., then $x+y$ in terms of $xy$ is:`,
        options: [`$2xy$`, `$xy/2$`, `$2/xy$`, `None of these`],
        correctAnswer: `$2xy$`,
        shortExplanation: `$1 = \\frac{2xy}{x+y} \\Rightarrow x+y = 2xy$.`,
        tag: `C`
    },
    {
        id: 32,
        text: `The $n^{th}$ term of the series $1 + (1+2) + (1+2+3) + \\dots$ is:`,
        options: [`$n(n+1)/2$`, `$n(n+1)(2n+1)/6$`, `$n^2$`, `None of these`],
        correctAnswer: `$n(n+1)/2$`,
        shortExplanation: `The $n^{th}$ term is the sum of first $n$ natural numbers, which is $\\frac{n(n+1)}{2}$.`,
        tag: `C`
    },
    {
        id: 33,
        text: `The sum of the first $n$ terms of the series $1^2 + 2^2 + 3^2 + \\dots$ is:`,
        options: [`$\\frac{n(n+1)(2n+1)}{6}$`, `$\\frac{n(n+1)}{2}$`, `$[\\frac{n(n+1)}{2}]^2$`, `None of these`],
        correctAnswer: `$\\frac{n(n+1)(2n+1)}{6}$`,
        shortExplanation: `Standard formula for the sum of squares of the first $n$ natural numbers.`,
        tag: `C`
    },
    {
        id: 34,
        text: `The value of $1^3 + 2^3 + 3^3 + \\dots + 10^3$ is:`,
        options: [`3025`, `2500`, `3000`, `None of these`],
        correctAnswer: `3025`,
        shortExplanation: `$C = [\\frac{10(11)}{2}]^2 = 55^2 = 3025$.`,
        tag: `C`
    },
    {
        id: 35,
        text: `The A.M. of two numbers is 34 and their G.M. is 16. The numbers are:`,
        options: [`64, 4`, `60, 8`, `50, 18`, `None of these`],
        correctAnswer: `64, 4`,
        shortExplanation: `$a+b = 68$ and $ab = 256$. Solve the quadratic $x^2 - 68x + 256 = 0$.`,
        tag: `C`
    },
    {
        id: 36,
        text: `If A, G, H are A.M., G.M., H.M. of two numbers, then:`,
        options: [`$A \\ge G \\ge H$`, `$G^2 = AH$`, `Both A and B`, `None of these`],
        correctAnswer: `Both A and B`,
        shortExplanation: `For positive numbers, A.M. $\\ge$ G.M. $\\ge$ H.M. and $G^2 = AH$.`,
        tag: `C`
    },
    {
        id: 37,
        text: `The sum of n terms of the series $1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\dots$ is:`,
        options: [`$\\frac{n(n+1)(n+2)}{3}$`, `$\\frac{n(n+1)}{2}$`, `$\\frac{n(n+1)(2n+1)}{6}$`, `None of these`],
        correctAnswer: `$\\frac{n(n+1)(n+2)}{3}$`,
        shortExplanation: `$T_r = r(r+1) = r^2 + r$. $\\sum T_r = \\sum r^2 + \\sum r$.`,
        tag: `C`
    },
    {
        id: 38,
        text: `If $1/a, 1/b, 1/c$ are in A.P., then $a, b, c$ are in:`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `H.P.`,
        shortExplanation: `By definition, if the reciprocals are in A.P., the numbers are in H.P.`,
        tag: `C`
    },
    {
        id: 39,
        text: `The sum to infinity of $1 + 3/2 + 5/4 + 7/8 + \\dots$ is:`,
        options: [`6`, `4`, `5`, `None of these`],
        correctAnswer: `6`,
        shortExplanation: `This is an Arithmetico-Geometric Progression (A.G.P.) with $a=1, d=2, r=1/2$. $S_{\\infty} = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2}$.`,
        tag: `C`
    },
    {
        id: 40,
        text: `If $a, b, c$ are in A.P., then $2^{a}, 2^{b}, 2^{c}$ are in:`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `G.P.`,
        shortExplanation: `Since $2b = a+c$, then $(2^b)^2 = 2^{2b} = 2^{a+c} = 2^a \\cdot 2^c$.`,
        tag: `C`
    },
    {
        id: 41,
        text: `The sum of the first n terms of $1 \\cdot 3 + 3 \\cdot 5 + 5 \\cdot 7 + \\dots$ is:`,
        options: [`$\\frac{n(4n^2+6n-1)}{3}$`, `$\\frac{n(4n^2-1)}{3}$`, `$\\frac{n(2n+1)(2n-1)}{3}$`, `None of these`],
        correctAnswer: `$\\frac{n(4n^2+6n-1)}{3}$`,
        shortExplanation: `$T_r = (2r-1)(2r+1) = 4r^2-1$. $\\sum T_r = 4\\sum r^2 - \\sum 1$.`,
        tag: `C`
    },
    {
        id: 42,
        text: `If the A.M. between two numbers is 5 and G.M. is 4, then the H.M. is:`,
        options: [`3.2`, `4.2`, `5.2`, `None of these`],
        correctAnswer: `3.2`,
        shortExplanation: `$H = G^2 / A = 4^2 / 5 = 16 / 5 = 3.2$.`,
        tag: `C`
    },
    {
        id: 43,
        text: `The value of $0.121212...$ as a fraction is:`,
        options: [`4/33`, `12/99`, `Both A and B`, `None of these`],
        correctAnswer: `Both A and B`,
        shortExplanation: `Let $x = 0.1212...$, then $100x = 12.1212...$. $99x = 12 \\Rightarrow x = 12/99 = 4/33$.`,
        tag: `C`
    },
    {
        id: 44,
        text: `If $a, b, c$ are in G.P., then $log~a, log~b, log~c$ are in:`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `A.P.`,
        shortExplanation: `Since $b^2 = ac$, $2 log~b = log~a + log~c$.`,
        tag: `C`
    },
    {
        id: 45,
        text: `The sum of n terms of the series $5 + 55 + 555 + \\dots$ is:`,
        options: [`$\\frac{5}{81}(10^{n+1}-9n-10)$`, `$\\frac{5}{9}(10^n-1)$`, `$\\frac{5}{81}(10^n-1)$`, `None of these`],
        correctAnswer: `$\\frac{5}{81}(10^{n+1}-9n-10)$`,
        shortExplanation: `Method: Take 5 common, multiply/divide by 9, and use G.P. sum formula.`,
        tag: `C`
    },
    {
        id: 46,
        text: `The sum of integers from 1 to 100 which are divisible by 2 or 5 is:`,
        options: [`3050`, `3100`, `2500`, `None of these`],
        correctAnswer: `3050`,
        shortExplanation: `Sum $= [Sum(div~by~2) + Sum(div~by~5) - Sum(div~by~10)]$.`,
        tag: `C`
    },
    {
        id: 47,
        text: `If the $n^{th}$ term of an A.P. is $2n+1$, the sum of first n terms is:`,
        options: [`$n(n+2)$`, `$n^2+n$`, `$n^2+2n$`, `None of these`],
        correctAnswer: `$n(n+2)$`,
        shortExplanation: `$S_n = \\frac{n}{2}(T_1 + T_n) = \\frac{n}{2}(3 + 2n+1) = \\frac{n}{2}(2n+4) = n(n+2)$.`,
        tag: `C`
    },
    {
        id: 48,
        text: `The middle term of the A.P. 1, 8, 15, ..., 505 is:`,
        options: [`253`, `254`, `250`, `None of these`],
        correctAnswer: `253`,
        shortExplanation: `$505 = 1 + (n-1)7 \\Rightarrow n=73$. Middle term is $37^{th}$ term. $T_{37} = 1 + 36 \\times 7 = 253$.`,
        tag: `C`
    },
    {
        id: 49,
        text: `If $p, q, r$ are in A.P. as well as G.P., then:`,
        options: [`$p=q=r$`, `$p \\ne q \\ne r$`, `$p+r = 2q$`, `None of these`],
        correctAnswer: `$p=q=r$`,
        shortExplanation: `A.M. = G.M. only when the numbers are equal.`,
        tag: `C`
    },
    {
        id: 50,
        text: `The sum of first n odd natural numbers is:`,
        options: [`$n^2$`, `$n(n+1)$`, `$2n-1$`, `None of these`],
        correctAnswer: `$n^2$`,
        shortExplanation: `Sequence: 1, 3, 5, ..., (2n-1). Sum $S_n = \\frac{n}{2}(1 + 2n-1) = n^2$.`,
        tag: `C`
    },
    {
        id: 1,
        text: `Let $a_{n}$ be the nth term of an A. P. If $S_{n}=a_{1}+a_{2}+a_{3}+\\cdot\\cdot\\cdot+a_{n}=700,$ $a_{6}=7$ and $S_{7}=7$, then $a_{n}$ is equal to:`,
        options: [`56`, `65`, `64`, `70`],
        correctAnswer: `64`,
        shortExplanation: `Using $S_n = \\frac{n}{2}[2a+(n-1)d]$, solve the system of equations for $a$ and $d$ to find $a_{n}$.`,
        tag: `S`
    },
    {
        id: 2,
        text: `If the first term of an A.P. is 3 and the sum of its first four terms is equal to one-fifth of the sum of the next four terms, then the sum of the first 20 terms is equal to:`,
        options: [`-120`, `-1200`, `-1020`, `-1080`],
        correctAnswer: `-1080`,
        shortExplanation: `Given $S_4 = \\frac{1}{5}(S_8 - S_4)$, which implies $6S_4 = S_8$. Solve for $d$ using $a=3$, then calculate $S_{20}$.`,
        tag: `S`
    },
    {
        id: 3,
        text: `The roots of the quadratic $3x^{2}-px+q=0$ are 10th and 11th terms of an arithmetic progression with common difference $\\frac{3}{2}$. If the sum of the first 11 terms of this arithmetic progression is 88, then $q-2p$ is equal to:`,
        options: [`-213`, `-210`, `-207`, `-204`],
        correctAnswer: `-210`,
        shortExplanation: `Find $a$ from $S_{11}=88$. Identify $T_{10}$ and $T_{11}$ as roots. Use sum of roots $p/3$ and product $q/3$ to find $p$ and $q$.`,
        tag: `S`
    },
    {
        id: 4,
        text: `If $a_{1}, a_{2}, a_{3}, \\dots, a_{n}$ are in A.P. and $a_{1} + a_{4} + a_{7} + \\dots + a_{16} = 114$, then $a_{1} + a_{6} + a_{11} + a_{16}$ is equal to:`,
        options: [`64`, `76`, `98`, `38`],
        correctAnswer: `76`,
        shortExplanation: `In an A.P., $a_1+a_{16} = a_4+a_{13} = a_7+a_{10}$. The given sum is $3(a_1+a_{16}) = 114$. The required sum is $2(a_1+a_{16})$.`,
        tag: `S`
    },
    {
        id: 5,
        text: `If the sum of the first $n$ terms of an A.P. is $S_{n} = 3n^{2} + n$ and its $m^{th}$ term is 152, then the value of $m$ is:`,
        options: [`24`, `25`, `26`, `27`],
        correctAnswer: `26`,
        shortExplanation: `$T_m = S_m - S_{m-1} = 6m - 2$. Setting $6m - 2 = 152$ gives $m = 26$.`,
        tag: `S`
    },
    {
        id: 6,
        text: `Let $S_n$ denote the sum of the first $n$ terms of an A.P. If $S_4 = 16$ and $S_6 = -48$, then $S_{10}$ is equal to:`,
        options: [`-260`, `-410`, `-320`, `-210`],
        correctAnswer: `-320`,
        shortExplanation: `Use $S_n$ formula to get two equations in $a$ and $d$. Solve them and find $S_{10}$.`,
        tag: `S`
    },
    {
        id: 7,
        text: `If the sum of first 11 terms of an A.P. $a_1, a_2, \dots$ is 0 ($a_1 \neq 0$), then the sum of the A.P. $a_1, a_3, a_5, \dots, a_{23}$ is:`,
        options: [`$a_1$`, `$12 a_1$`, `$0$`, `$-12 a_1$`],
        correctAnswer: `$a_{12}$`,
        shortExplanation: `If $S_{11}=0$, then the middle term $a_6 = 0$. The new series also has its middle term related to $a_6$.`,
        tag: `S`
    },
    {
        id: 8,
        text: `Let $S_n$ be the sum of first $n$ terms of an A.P. If $S_{3n} = 3S_{2n}$, then $S_{4n}/S_{2n}$ is:`,
        options: [`4`, `6`, `8`, `10`],
        correctAnswer: `6`,
        shortExplanation: `Expand $S_{3n}$ and $S_{2n}$, find the relation between $a$ and $d$, and substitute into the ratio $S_{4n}/S_{2n}$.`,
        tag: `S`
    },
    {
        id: 9,
        text: `The sum of all natural numbers 'n' such that $100 < n < 200$ and $H.C.F. (91, n) > 1$ is:`,
        options: [`3203`, `3303`, `3121`, `3103`],
        correctAnswer: `3121`,
        shortExplanation: `$91 = 7 \\times 13$. Find the sum of numbers divisible by 7 and 13 in the range, subtracting those divisible by 91.`,
        tag: `S`
    },
    {
        id: 10,
        text: `If $a_1, a_2, a_3, \dots, a_n$ are in A.P. with $a_1 = 3$ and $S_p / S_q = p^2 / q^2$, then $a_6$ is:`,
        options: [`33`, `27`, `41`, `11`],
        correctAnswer: `33`,
        shortExplanation: `The ratio of sums $S_p/S_q = p^2/q^2$ implies $T_n \propto (2n-1)$. Calculate the common difference to find $a_6$.`,
        tag: `S`
    },
    {
        id: 11,
        text: `If the sum of first $n$ terms of two A.P.s are in the ratio $(7n+1) : (4n+27)$, then the ratio of their $11^{th}$ terms is:`,
        options: [`2:3`, `3:4`, `4:3`, `5:6`],
        correctAnswer: `4:3`,
        shortExplanation: `To find the ratio of $11^{th}$ terms, replace $n$ with $2(11)-1 = 21$ in the sum ratio.`,
        tag: `S`
    },
    {
        id: 12,
        text: `Find the common difference of an A.P. whose first term is 1 and the sum of the first $p$ terms is zero.`,
        options: [`$\frac{-2}{p-1}$`, `$\frac{2}{p-1}$`, `$\frac{-2}{p}$`, `$\frac{2}{p}$`],
        correctAnswer: `$\frac{-2}{p-1}$`,
        shortExplanation: `$S_p = \frac{p}{2}[2(1)+(p-1)d] = 0 \Rightarrow 2+(p-1)d = 0$.`,
        tag: `S`
    },
    {
        id: 13,
        text: `If $a, b, c$ are in A.P., then $(a-c)^2$ is equal to:`,
        options: [`$4(b^2-ac)$`, `$b^2-ac$`, `$2(b^2-ac)$`, `$4(a^2-bc)$`],
        correctAnswer: `$4(b^2-ac)$`,
        shortExplanation: `Since $2b=a+c$, then $(a-c)^2 = (a+c)^2 - 4ac = (2b)^2 - 4ac = 4b^2 - 4ac$.`,
        tag: `S`
    },
    {
        id: 14,
        text: `If the $p^{th}, q^{th}, r^{th}$ terms of an A.P. are in G.P., then the common ratio of the G.P. is:`,
        options: [`$\frac{q-r}{p-q}$`, `$\frac{r-q}{q-p}$`, `$\frac{p-r}{q-p}$`, `None of these`],
        correctAnswer: `$\frac{r-q}{q-p}$`,
        shortExplanation: `In G.P., $R = \frac{T_r - T_q}{T_q - T_p} = \frac{(r-q)d}{(q-p)d}$.`,
        tag: `S`
    },
    {
        id: 15,
        text: `The sum of the series $3 + 7 + 11 + 15 + \dots$ up to 25 terms is:`,
        options: [`1275`, `1300`, `1325`, `1350`],
        correctAnswer: `1275`,
        shortExplanation: `Use $S_n = \frac{n}{2}[2a+(n-1)d]$ with $a=3, d=4, n=25$.`,
        tag: `S`
    },
    // ... (1-15 previously provided)
    {
        id: 16,
        text: `The sum of all two-digit numbers which, when divided by 4, yield unity as a remainder is:`,
        options: [`1190`, `1191`, `1210`, `1250`],
        correctAnswer: `1210`,
        shortExplanation: `The sequence is 13, 17, 21, ..., 97. This is an A.P. with a=13, d=4, and n=22. $S_{22} = \\frac{22}{2}(13+97) = 1210$.`,
        tag: `S`
    },
    {
        id: 17,
        text: `If $S_n$ denotes the sum of first n terms of an A.P., then $S_{3n} : (S_{2n} - S_n)$ is always:`,
        options: [`2`, `3`, `1`, `4`],
        correctAnswer: `3`,
        shortExplanation: `Using $S_n = \\frac{n}{2}[2a+(n-1)d]$, the ratio simplifies to 3 for any values of a and d.`,
        tag: `S`
    },
    {
        id: 18,
        text: `If the first, second and last terms of an A.P. are a, b and 2a respectively, then its sum is:`,
        options: [`$\\frac{ab}{2(b-a)}$`, `$\\frac{3ab}{2(b-a)}$`, `$\\frac{3a^2}{2(b-a)}$`, `None of these`],
        correctAnswer: `$\\frac{3a^2}{2(b-a)}$`,
        shortExplanation: `Common difference $d = b-a$. Last term $2a = a+(n-1)d \\Rightarrow n = \\frac{a}{b-a}+1$. Sum $S = \\frac{n}{2}(a+2a)$.`,
        tag: `S`
    },
    {
        id: 19,
        text: `The sum of all 3-digit natural numbers, which are divisible by 7 is:`,
        options: [`70336`, `70335`, `70334`, `None of these`],
        correctAnswer: `70336`,
        shortExplanation: `Sequence: 105, 112, ..., 994. $a=105, d=7, n=128$. $S_{128} = \\frac{128}{2}(105+994) = 70336$.`,
        tag: `S`
    },
    {
        id: 20,
        text: `If $log_{10} 2, log_{10}(2^x-1)$ and $log_{10}(2^x+3)$ are in A.P., then x is equal to:`,
        options: [`$log_2 5$`, `$log_2 3$`, `$log_5 2$`, `None of these`],
        correctAnswer: `$log_2 5$`,
        shortExplanation: `$2 log(2^x-1) = log 2 + log(2^x+3) \\Rightarrow (2^x-1)^2 = 2(2^x+3)$. Let $2^x = t$, solve the quadratic.`,
        tag: `S`
    },
    {
        id: 21,
        text: `In a G.P., the first term is 7, the last term is 448 and the sum is 889. The common ratio is:`,
        options: [`2`, `3`, `4`, `1/2`],
        correctAnswer: `2`,
        shortExplanation: `Using $S = \\frac{lr-a}{r-1}$, $889 = \\frac{448r-7}{r-1}$. Solving gives $r=2$.`,
        tag: `S`
    },
    {
        id: 22,
        text: `The sum of the series $1 + 2 + 2^2 + \\dots + 2^{n-1}$ is 255, then n is:`,
        options: [`5`, `6`, `7`, `8`],
        correctAnswer: `8`,
        shortExplanation: `Sum of G.P. $= \\frac{1(2^n-1)}{2-1} = 255 \\Rightarrow 2^n = 256 \\Rightarrow n=8$.`,
        tag: `S`
    },
    {
        id: 23,
        text: `If x, y, z are the $n^{th}, (2n)^{th}$ and $(3n)^{th}$ terms of a G.P., then the relation between x, y, z is:`,
        options: [`$y^2 = xz$`, `$x^2 = yz$`, `$z^2 = xy$`, `$y = (x+z)/2$`],
        correctAnswer: `$y^2 = xz$`,
        shortExplanation: `$x=ar^{n-1}, y=ar^{2n-1}, z=ar^{3n-1}$. Clearly $\\frac{y}{x} = r^n$ and $\\frac{z}{y} = r^n$, so they are in G.P.`,
        tag: `S`
    },
    {
        id: 24,
        text: `If the sum of first 3 terms of a G.P. is 13/12 and their product is -1, then the common ratio is:`,
        options: [`-3/4 or -4/3`, `3/4 or 4/3`, `-3/2 or -2/3`, `None of these`],
        correctAnswer: `-3/4 or -4/3`,
        shortExplanation: `Let terms be $a/r, a, ar$. Product $a^3 = -1 \\Rightarrow a = -1$. Sum $-1/r - 1 - r = 13/12$. Solve for r.`,
        tag: `S`
    },
    {
        id: 25,
        text: `The third term of a G.P. is 4. The product of its first five terms is:`,
        options: [`$4^3$`, `$4^4$`, `$4^5$`, `None of these`],
        correctAnswer: `$4^5$`,
        shortExplanation: `Product $= (a/r^2)(a/r)(a)(ar)(ar^2) = a^5$. Given $T_3 = a = 4$.`,
        tag: `S`
    },
    {
        id: 26,
        text: `If each term of a G.P. is squared, the new series will be in:`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `G.P.`,
        shortExplanation: `If original is $a, ar, ar^2 \\dots$, squared is $a^2, a^2r^2, a^2r^4 \\dots$, which is a G.P. with common ratio $r^2$.`,
        tag: `S`
    },
    {
        id: 27,
        text: `The sum of the infinite G.P. $1 - 1/3 + 1/9 - 1/27 + \\dots$ is:`,
        options: [`3/4`, `4/3`, `2/3`, `1/2`],
        correctAnswer: `3/4`,
        shortExplanation: `$S_{\\infty} = \\frac{a}{1-r} = \\frac{1}{1-(-1/3)} = \\frac{1}{4/3} = 3/4$.`,
        tag: `S`
    },
    {
        id: 28,
        text: `If $S$ is the sum of an infinite G.P., then the first term $a$ must satisfy:`,
        options: [`$0 < a < 2S$`, `$a < 0$`, `$a > S$`, `None of these`],
        correctAnswer: `$0 < a < 2S$`,
        shortExplanation: `$S = a/(1-r) \\Rightarrow r = 1 - a/S$. Since $|r| < 1$, $-1 < 1 - a/S < 1$.`,
        tag: `S`
    },
    {
        id: 29,
        text: `If $a, b, c$ are in H.P., then $a, a-c, a-b$ are in:`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `None of these`,
        shortExplanation: `Substitute specific values like $a=6, b=3, c=2$ to check the relationship between $a, a-c, a-b$.`,
        tag: `S`
    },
    {
        id: 30,
        text: `The harmonic mean of 4 and 12 is:`,
        options: [`6`, `8`, `7.5`, `5`],
        correctAnswer: `6`,
        shortExplanation: `$HM = \\frac{2ab}{a+b} = \\frac{2 \\times 4 \\times 12}{4+12} = \\frac{96}{16} = 6$.`,
        tag: `S`
    },
    {
        id: 31,
        text: `If $x, 1, y$ are in H.P., then $x+y$ in terms of $xy$ is:`,
        options: [`$2xy$`, `$xy/2$`, `$2/xy$`, `None of these`],
        correctAnswer: `$2xy$`,
        shortExplanation: `$1 = \\frac{2xy}{x+y} \\Rightarrow x+y = 2xy$.`,
        tag: `S`
    },
    {
        id: 32,
        text: `The $n^{th}$ term of the series $1 + (1+2) + (1+2+3) + \\dots$ is:`,
        options: [`$n(n+1)/2$`, `$n(n+1)(2n+1)/6$`, `$n^2$`, `None of these`],
        correctAnswer: `$n(n+1)/2$`,
        shortExplanation: `The $n^{th}$ term is the sum of first $n$ natural numbers, which is $\\frac{n(n+1)}{2}$.`,
        tag: `S`
    },
    {
        id: 33,
        text: `The sum of the first $n$ terms of the series $1^2 + 2^2 + 3^2 + \\dots$ is:`,
        options: [`$\\frac{n(n+1)(2n+1)}{6}$`, `$\\frac{n(n+1)}{2}$`, `$[\\frac{n(n+1)}{2}]^2$`, `None of these`],
        correctAnswer: `$\\frac{n(n+1)(2n+1)}{6}$`,
        shortExplanation: `Standard formula for the sum of squares of the first $n$ natural numbers.`,
        tag: `S`
    },
    {
        id: 34,
        text: `The value of $1^3 + 2^3 + 3^3 + \\dots + 10^3$ is:`,
        options: [`3025`, `2500`, `3000`, `None of these`],
        correctAnswer: `3025`,
        shortExplanation: `$S = [\\frac{10(11)}{2}]^2 = 55^2 = 3025$.`,
        tag: `S`
    },
    {
        id: 35,
        text: `The A.M. of two numbers is 34 and their G.M. is 16. The numbers are:`,
        options: [`64, 4`, `60, 8`, `50, 18`, `None of these`],
        correctAnswer: `64, 4`,
        shortExplanation: `$a+b = 68$ and $ab = 256$. Solve the quadratic $x^2 - 68x + 256 = 0$.`,
        tag: `S`
    },
    {
        id: 36,
        text: `If A, G, H are A.M., G.M., H.M. of two numbers, then:`,
        options: [`$A \\ge G \\ge H$`, `$G^2 = AH$`, `Both A and B`, `None of these`],
        correctAnswer: `Both A and B`,
        shortExplanation: `For positive numbers, A.M. $\\ge$ G.M. $\\ge$ H.M. and $G^2 = AH$.`,
        tag: `S`
    },
    {
        id: 37,
        text: `The sum of n terms of the series $1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\dots$ is:`,
        options: [`$\\frac{n(n+1)(n+2)}{3}$`, `$\\frac{n(n+1)}{2}$`, `$\\frac{n(n+1)(2n+1)}{6}$`, `None of these`],
        correctAnswer: `$\\frac{n(n+1)(n+2)}{3}$`,
        shortExplanation: `$T_r = r(r+1) = r^2 + r$. $\\sum T_r = \\sum r^2 + \\sum r$.`,
        tag: `S`
    },
    {
        id: 38,
        text: `If $1/a, 1/b, 1/c$ are in A.P., then $a, b, c$ are in:`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `H.P.`,
        shortExplanation: `By definition, if the reciprocals are in A.P., the numbers are in H.P.`,
        tag: `S`
    },
    {
        id: 39,
        text: `The sum to infinity of $1 + 3/2 + 5/4 + 7/8 + \\dots$ is:`,
        options: [`6`, `4`, `5`, `None of these`],
        correctAnswer: `6`,
        shortExplanation: `This is an Arithmetico-Geometric Progression (A.G.P.) with $a=1, d=2, r=1/2$. $S_{\\infty} = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2}$.`,
        tag: `S`
    },
    {
        id: 40,
        text: `If $a, b, c$ are in A.P., then $2^{a}, 2^{b}, 2^{c}$ are in:`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `G.P.`,
        shortExplanation: `Since $2b = a+c$, then $(2^b)^2 = 2^{2b} = 2^{a+c} = 2^a \\cdot 2^c$.`,
        tag: `S`
    },
    {
        id: 41,
        text: `The sum of the first n terms of $1 \\cdot 3 + 3 \\cdot 5 + 5 \\cdot 7 + \\dots$ is:`,
        options: [`$\\frac{n(4n^2+6n-1)}{3}$`, `$\\frac{n(4n^2-1)}{3}$`, `$\\frac{n(2n+1)(2n-1)}{3}$`, `None of these`],
        correctAnswer: `$\\frac{n(4n^2+6n-1)}{3}$`,
        shortExplanation: `$T_r = (2r-1)(2r+1) = 4r^2-1$. $\\sum T_r = 4\\sum r^2 - \\sum 1$.`,
        tag: `S`
    },
    {
        id: 42,
        text: `If the A.M. between two numbers is 5 and G.M. is 4, then the H.M. is:`,
        options: [`3.2`, `4.2`, `5.2`, `None of these`],
        correctAnswer: `3.2`,
        shortExplanation: `$H = G^2 / A = 4^2 / 5 = 16 / 5 = 3.2$.`,
        tag: `S`
    },
    {
        id: 43,
        text: `The value of $0.121212...$ as a fraction is:`,
        options: [`4/33`, `12/99`, `Both A and B`, `None of these`],
        correctAnswer: `Both A and B`,
        shortExplanation: `Let $x = 0.1212...$, then $100x = 12.1212...$. $99x = 12 \\Rightarrow x = 12/99 = 4/33$.`,
        tag: `S`
    },
    {
        id: 44,
        text: `If $a, b, c$ are in G.P., then $log~a, log~b, log~c$ are in:`,
        options: [`A.P.`, `G.P.`, `H.P.`, `None of these`],
        correctAnswer: `A.P.`,
        shortExplanation: `Since $b^2 = ac$, $2 log~b = log~a + log~c$.`,
        tag: `S`
    },
    {
        id: 45,
        text: `The sum of n terms of the series $5 + 55 + 555 + \\dots$ is:`,
        options: [`$\\frac{5}{81}(10^{n+1}-9n-10)$`, `$\\frac{5}{9}(10^n-1)$`, `$\\frac{5}{81}(10^n-1)$`, `None of these`],
        correctAnswer: `$\\frac{5}{81}(10^{n+1}-9n-10)$`,
        shortExplanation: `Method: Take 5 common, multiply/divide by 9, and use G.P. sum formula.`,
        tag: `S`
    },
    {
        id: 46,
        text: `The sum of integers from 1 to 100 which are divisible by 2 or 5 is:`,
        options: [`3050`, `3100`, `2500`, `None of these`],
        correctAnswer: `3050`,
        shortExplanation: `Sum $= [Sum(div~by~2) + Sum(div~by~5) - Sum(div~by~10)]$.`,
        tag: `S`
    },
    {
        id: 47,
        text: `If the $n^{th}$ term of an A.P. is $2n+1$, the sum of first n terms is:`,
        options: [`$n(n+2)$`, `$n^2+n$`, `$n^2+2n$`, `None of these`],
        correctAnswer: `$n(n+2)$`,
        shortExplanation: `$S_n = \\frac{n}{2}(T_1 + T_n) = \\frac{n}{2}(3 + 2n+1) = \\frac{n}{2}(2n+4) = n(n+2)$.`,
        tag: `S`
    },
    {
        id: 48,
        text: `The middle term of the A.P. 1, 8, 15, ..., 505 is:`,
        options: [`253`, `254`, `250`, `None of these`],
        correctAnswer: `253`,
        shortExplanation: `$505 = 1 + (n-1)7 \\Rightarrow n=73$. Middle term is $37^{th}$ term. $T_{37} = 1 + 36 \\times 7 = 253$.`,
        tag: `S`
    },
    {
        id: 49,
        text: `If $p, q, r$ are in A.P. as well as G.P., then:`,
        options: [`$p=q=r$`, `$p \\ne q \\ne r$`, `$p+r = 2q$`, `None of these`],
        correctAnswer: `$p=q=r$`,
        shortExplanation: `A.M. = G.M. only when the numbers are equal.`,
        tag: `S`
    },
    {
        id: 50,
        text: `The sum of first n odd natural numbers is:`,
        options: [`$n^2$`, `$n(n+1)$`, `$2n-1$`, `None of these`],
        correctAnswer: `$n^2$`,
        shortExplanation: `Sequence: 1, 3, 5, ..., (2n-1). Sum $S_n = \\frac{n}{2}(1 + 2n-1) = n^2$.`,
        tag: `S`
    }
];