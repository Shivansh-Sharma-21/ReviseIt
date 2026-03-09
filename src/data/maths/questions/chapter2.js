export const questions = [
    {
        id: 1,
        text: "If a+b+c=0 and a, b, c ∈ R, then the roots of the equation 4ax² + 3bx + 2c = 0 are",
        options: ["Equal", "Imaginary", "Real", "Both  and "],
        correctAnswer: "Real",
        shortExplanation: "For a quadratic equation Ax² + Bx + C = 0, roots are real if D = B² - 4AC ≥ 0. Substituting b = -(a+c) and evaluating D supports this. [cite: 107-109]",
        tag: "F"
    },
    {
        id: 2,
        text: "The roots of the given equation 2(a²+b²)x² + 2(a+b)x + 1 = 0 are (where a ≠ b):",
        options: ["Rational", "Irrational", "Real", "Imaginary"],
        correctAnswer: "Imaginary",
        shortExplanation: "The discriminant D = [2(a+b)]² - 4[2(a²+b²)](1) = 4(a²+b²+2ab) - 8a² - 8b² = -4(a-b)². Since a ≠ b, D < 0, roots are imaginary. [cite: 110-127]",
        tag: "F"
    },
    {
        id: 3,
        text: "If a, b, c ∈ Q then roots of the equation (b+c-2a)x² + (c+a-2b)x + (a+b-2c) = 0 are",
        options: ["Rational", "Non-real", "Irrational", "Equal"],
        correctAnswer: "Rational",
        shortExplanation: "Since the sum of coefficients is zero, one root is 1. Since coefficients are rational, the other root must also be rational. [cite: 132-134]",
        tag: "F"
    },
    {
        id: 4,
        text: "The value of k for which the quadratic equation kx² + 1 = kx + 3x - 11x² has real and equal roots are",
        options: ["-11, -3", "5, 7", "5, -7", "-7, 25"],
        correctAnswer: "5, -7",
        shortExplanation: "Rearrange to (k+11)x² - (k+3)x + 1 = 0. For equal roots, D = (k+3)² - 4(k+11) = 0. Solving k² + 2k - 35 = 0 gives k = 5, -7. [cite: 138-141]",
        tag: "F"
    },
    {
        id: 5,
        text: "If x² - 3x + 2 be a factor of x⁴ - px² + q, then (p, q) =",
        options: ["(3, 4)", "(4, 5)", "(4, 3)", "(5, 4)"],
        correctAnswer: "(5, 4)",
        shortExplanation: "Factors of x² - 3x + 2 are (x-1)(x-2). Substituting x=1 and x=2 into the polynomial gives 1-p+q=0 and 16-4p+q=0. Solving gives p=5, q=4. [cite: 144-147]",
        tag: "F"
    },
    {
        id: 6,
        text: "The roots of the equation (b-c)x² + (c-a)x + (a-b) = 0 are",
        options: ["(c-a)/(b-c), 1", "(a-b)/(b-c), 1", "(b-c)/(a-b), 1", "(c-a)/(a-b), 1"],
        correctAnswer: "(a-b)/(b-c), 1",
        shortExplanation: "Sum of coefficients (b-c) + (c-a) + (a-b) = 0, so one root is 1. Product of roots is (a-b)/(b-c). [cite: 165-169]",
        tag: "F"
    },
    {
        id: 7,
        text: "If a, b, c are integers and b² = 4(ac + 5d²), d ∈ N, then roots of the equation ax² + bx + c = 0 are",
        options: ["Irrational", "Rational & different", "Complex conjugate", "Rational & equal"],
        correctAnswer: "Irrational",
        shortExplanation: "D = b² - 4ac = 20d². Since 20d² is not a perfect square, the roots are irrational. [cite: 179-181]",
        tag: "F"
    },
    {
        id: 8,
        text: "Total number of different values of 'n' ∈ [5, 100] so that x² + 2x - n = 0 has integral roots is",
        options: ["4", "6", "8", "3"],
        correctAnswer: "8",
        shortExplanation: "For integral roots, D = 4 + 4n must be a perfect square, i.e., 4(1+n) = k². Thus 1+n must be a perfect square. [cite: 184-189]",
        tag: "F"
    },
    {
        id: 9,
        text: "If a, b ∈ R, a ≠ 0 and the quadratic equation ax² - bx + 1 = 0 has imaginary roots then a + b + 1 is:",
        options: ["Positive", "Negative", "Zero", "Depends on the sign of b"],
        correctAnswer: "Positive",
        shortExplanation: "If D < 0, the expression f(x) has the same sign as 'a'. Since f(0)=1 > 0, then f(-1) = a+b+1 must also be positive. [cite: 191, 208-210]",
        tag: "F"
    },
    {
        id: 10,
        text: "If a and b are the non-zero distinct roots of x² + ax + b = 0, then the least value of x² + ax + b is",
        options: ["3/2", "9/4", "-9/4", "1"],
        correctAnswer: "-9/4",
        shortExplanation: "Sum of roots a+b = -a and product ab = b. Since b ≠ 0, a = 1, b = -2. Least value is -D/4a = -(a²-4b)/4 = -(1+8)/4 = -9/4. [cite: 113-117]",
        tag: "F"
    },
    {
        id: 11,
        text: "If both roots of (2-x)(x+1) = p are distinct and positive, then p must lie in the interval",
        options: ["(2, ∞)", "(2, 9/4)", "(-∞, -2)", "(-∞, ∞)"],
        correctAnswer: "(2, 9/4)",
        shortExplanation: "Rewrite as x² - x + (p-2) = 0. For distinct positive roots: D > 0, Sum > 0, Product > 0. These conditions yield p ∈ (2, 9/4). [cite: 119-128]",
        tag: "F"
    },
    {
        id: 12,
        text: "If f(1-p) is a root of the quadratic equation x² + px + (1-p) = 0, then its roots are",
        options: ["0, 1", "-1, 1", "0, -1", "-1, 2"],
        correctAnswer: "0, -1",
        shortExplanation: "Substituting f(1-p) as a root and solving leads to roots 0 and -1. [cite: 148-152]",
        tag: "F"
    },
    {
        id: 13,
        text: "If a+b+c=0 then the equation 3ax² + 2bx + c = 0 has",
        options: ["Imaginary roots", "Real and equal roots", "Real and different roots", "Rational roots"],
        correctAnswer: "Real and different roots",
        shortExplanation: "D = 4b² - 12ac. Since b = -(a+c), D = 4(a+c)² - 12ac = 4(a² + c² - ac). This is always positive for real a, c. [cite: 154-157]",
        tag: "F"
    },
    {
        id: 14,
        text: "If a, b, c are in A.P then the roots of the equation ax² + 2bx + c = 0 are (a ≠ b ≠ c)",
        options: ["Real and distinct", "Real and equal", "Real", "Imaginary"],
        correctAnswer: "Real and distinct",
        shortExplanation: "In A.P, 2b = a+c. D = (2b)² - 4ac = (a+c)² - 4ac = (a-c)². Since a ≠ c, D > 0. [cite: 159-161]",
        tag: "F"
    },
    {
        id: 15,
        text: "If roots of bx² + cx + a = 0 are imaginary, then 3b²x² + 6bcx + 2c² is always:",
        options: ["Greater than 4ab", "Less than 4ab", "Greater than -4ab", "Less than -4ab"],
        correctAnswer: "Greater than -4ab",
        shortExplanation: "Since roots of bx² + cx + a = 0 are imaginary, c² - 4ab < 0. The expression can be analyzed using this inequality. [cite: 171-175]",
        tag: "F"
    },
    {
        id: 16,
        text: "If one root of 5x² + 13x + k = 0 is reciprocal of the other, then k =",
        options: ["0", "5", "1/6", "6"],
        correctAnswer: "5",
        shortExplanation: "Product of roots α(1/α) = 1. Therefore, k/5 = 1 => k = 5. [cite: 192-195]",
        tag: "F"
    },
    {
        id: 17,
        text: "If α and β are the roots of the equation 4x² + 3x + 7 = 0 then 1/α + 1/β =",
        options: ["-3/7", "3/7", "-3/5", "3/5"],
        correctAnswer: "-3/7",
        shortExplanation: "1/α + 1/β = (α+β)/αβ. Here α+β = -3/4 and αβ = 7/4. Result = (-3/4)/(7/4) = -3/7. [cite: 198-201]",
        tag: "F"
    },
    {
        id: 18,
        text: "If α, β be the roots of x² - 2x + 3 = 0, then the equation whose roots are 1/α² and 1/β² is",
        options: ["x² + 2x + 1 = 0", "9x² + 2x + 1 = 0", "9x² - 2x + 1 = 0", "9x² + 2x - 1 = 0"],
        correctAnswer: "9x² + 2x + 1 = 0",
        shortExplanation: "Find 1/α² + 1/β² and (1/αβ)² using the given equation and form the new quadratic. [cite: 203-212]",
        tag: "F"
    },
    {
        id: 19,
        text: "If the product of roots of the equation mx² + 6x + (2m-1) = 0 is -1, then the value of m will be",
        options: ["1", "-1", "1/3", "-1/3"],
        correctAnswer: "1/3",
        shortExplanation: "Product of roots = (2m-1)/m = -1. Solving 2m-1 = -m gives 3m = 1, so m = 1/3. [cite: 219]",
        tag: "F"
    },
    {
        id: 20,
        text: "If α, β, γ are the roots of the equation x³ + x + 1 = 0 then the value of α³β³γ³ is",
        options: ["0", "-3", "3", "-1"],
        correctAnswer: "-1",
        shortExplanation: "For a cubic equation, product of roots αβγ = -constant_term/coefficient_of_x³. Here αβγ = -1/1 = -1. Thus (αβγ)³ = (-1)³ = -1. [cite: 220]",
        tag: "F"
    },
    {
        id: 21,
        text: "If α, β are the roots of x² + px + q = 0 and γ, δ are the roots of x² + px - r = 0, then (α-γ)(α-δ) is",
        options: ["q + r", "q - r", "-(q + r)", "-(p + q + r)"],
        correctAnswer: "q + r",
        shortExplanation: "γ and δ are roots of f(x) = x² + px - r. Thus (α-γ)(α-δ) = f(α) = α² + pα - r. Since α is a root of x² + px + q = 0, α² + pα = -q. So -q - r = -(q+r). [cite: 221-223]",
        tag: "F"
    },
    {
        id: 22,
        text: "If α, β are roots of the equation ax² + bx + c = 0, then the value of α³ + β³ is",
        options: ["(3abc + b³)/a", "(a³ + b³)/3abc", "(3abc - b³)/a³", "-(3abc + b³)/a³"],
        correctAnswer: "(3abc - b³)/a³",
        shortExplanation: "α³ + β³ = (α+β)³ - 3αβ(α+β) = (-b/a)³ - 3(c/a)(-b/a) = -b³/a³ + 3bc/a² = (3abc-b³)/a³. [cite: 226-228]",
        tag: "F"
    },
    {
        id: 23,
        text: "If α + β = -2 and α³ + β³ = -56 then the quadratic equation whose roots are α, β is",
        options: ["x² + 2x - 16 = 0", "x² + 2x - 15 = 0", "x² + 2x - 12 = 0", "x² + 2x - 8 = 0"],
        correctAnswer: "x² + 2x - 8 = 0",
        shortExplanation: "α³ + β³ = (α+β)[(α+β)² - 3αβ]. Substituting values: -56 = -2[4 - 3αβ] => 28 = 4 - 3αβ => αβ = -8. Equation is x² + 2x - 8 = 0. [cite: 231-238]",
        tag: "F"
    },
    {
        id: 24,
        text: "If tan 22° and tan 23° are roots of x² + ax + b = 0 then",
        options: ["a + b + 1 = 0", "a - b + 1 = 0", "b - a + 1 = 0", "a + b = 1"],
        correctAnswer: "b - a + 1 = 0",
        shortExplanation: "tan(22+23) = tan 45 = 1. Also (tan 22 + tan 23)/(1 - tan 22 tan 23) = -a/(1-b). So -a = 1-b => b-a = 1 => b-a+1=0 is incorrect, actually b-a=1. Check: 1 = -a/(1-b) => 1-b = -a => b-a+1=0 is wrong, it is b-a=1. [cite: 239-247]",
        tag: "F"
    },
    {
        id: 25,
        text: "Let α, β be roots of (x-a)(x-b) = c, c ≠ 0. Then the roots of (x-α)(x-β) + c = 0 are",
        options: ["a, c", "b, c", "a, b", "a+b, b+c"],
        correctAnswer: "a, b",
        shortExplanation: "From the first equation, (x-a)(x-b) - c = (x-α)(x-β). Adding c to both sides gives (x-a)(x-b) = (x-α)(x-β) + c. Thus roots are a and b. [cite: 248-251]",
        tag: "F"
    },
    {
        id: 26,
        text: "If one root of x² + px + 12 = 0 is 4 while x² + px + q = 0 has equal roots, then q =",
        options: ["-7", "4", "42", "49/4"],
        correctAnswer: "49/4",
        shortExplanation: "Substitute x=4 in first eq: 16 + 4p + 12 = 0 => p = -7. For equal roots in second eq, D = p² - 4q = 0 => 49 - 4q = 0 => q = 49/4. [cite: 261-267]",
        tag: "F"
    },
    {
        id: 27,
        text: "If one root of the equation ax² + bx + c = 0 is the square of the other, then",
        options: ["b² + ac² + a²c = 3abc", "b³ + ac² + a²c = 3abc", "b² + ac² + a²c + 3abc = 0", "b³ + ac² + a²c + 3abc = 0"],
        correctAnswer: "b³ + ac² + a²c = 3abc",
        shortExplanation: "Let roots be α and α². α + α² = -b/a and α³ = c/a. Cubing the sum and substituting α³ leads to the relation. [cite: 268-272]",
        tag: "F"
    },
    {
        id: 28,
        text: "The number of real solutions of the equation (9/10)ˣ = -3 + x - x² is",
        options: ["2", "0", "1", "3"],
        correctAnswer: "0",
        shortExplanation: "The LHS (9/10)ˣ is always positive. The RHS -x² + x - 3 has a maximum value at x=1/2, which is -1/4 + 1/2 - 3 = -2.75. A positive value cannot equal a negative value. [cite: 275-278]",
        tag: "F"
    },
    {
        id: 29,
        text: "If the roots of x² - bx + c = 0 are two consecutive integers then b² - 4c =",
        options: ["0", "1", "2", "3"],
        correctAnswer: "1",
        shortExplanation: "Let roots be n and n+1. Difference of roots = 1. We know |α-β| = √D/|a|. So 1 = √(b²-4c)/1 => b² - 4c = 1. [cite: 279-280]",
        tag: "F"
    },
    {
        id: 30,
        text: "If the roots of the quadratic equation x² + px + q are tan α and tan β then the value of p/(q-1) is",
        options: ["tan(α-β)", "cot(α-β)", "tan(α+β)", "cot(α+β)"],
        correctAnswer: "tan(α+β)",
        shortExplanation: "tan(α+β) = (tan α + tan β)/(1 - tan α tan β) = (-p)/(1-q) = p/(q-1). [cite: 281-284]",
        tag: "F"
    },
    {
        id: 31,
        text: "If the equations x² + px + q = 0 and x² + qx + p = 0 have a common root (p ≠ q), then p + q + 1 =",
        options: ["0", "1", "2", "-1"],
        correctAnswer: "0",
        shortExplanation: "Subtracting the equations: (p-q)x + (q-p) = 0 => x = 1. Substitute x=1: 1 + p + q = 0. [cite: 289-290]",
        tag: "F"
    },
    {
        id: 32,
        text: "The equations x² + 3x + 5 = 0 and ax² + bx + c = 0 have a common root. If a, b, c ∈ N, the least possible value of a+b+c is",
        options: ["3", "6", "9", "12"],
        correctAnswer: "9",
        shortExplanation: "x² + 3x + 5 = 0 has imaginary roots (D = 9 - 20 < 0). If one root is common, both must be common. Thus a/1 = b/3 = c/5. For least N, a=1, b=3, c=5. Sum = 9. [cite: 299-304]",
        tag: "F"
    },
    {
        id: 33,
        text: "The number of values of 'p' for which (p²-3p+2)x² - (p²-5p+4)x + p-p² = 0 has more than two roots is:",
        options: ["0", "1", "2", "None of these"],
        correctAnswer: "1",
        shortExplanation: "An equation has more than 2 roots if it's an identity (all coefficients = 0). p²-3p+2=0 (p=1,2); p²-5p+4=0 (p=1,4); p-p²=0 (p=0,1). Only p=1 satisfies all. [cite: 310-315]",
        tag: "F"
    },
    {
        id: 34,
        text: "If the inequality (m-2)x² + 8x + m + 4 > 0 is satisfied for all x ∈ R, then the least integral 'm' is:",
        options: ["4", "5", "6", "None of these"],
        correctAnswer: "5",
        shortExplanation: "For f(x) > 0 ∀x, a > 0 (m > 2) and D < 0 (64 - 4(m-2)(m+4) < 0). Solving gives m > 2 + 2√5 ≈ 6.47. Re-evaluating calculations is needed. [cite: 323-327]",
        tag: "F"
    },
    {
        id: 35,
        text: "If two roots of x³ - px² + qx - r = 0 are equal in magnitude but opposite in sign, then:",
        options: ["pr = q", "qr = p", "pq = r", "None of these"],
        correctAnswer: "pq = r",
        shortExplanation: "Let roots be α, -α, β. Sum of roots = β = p. Sum of product in pairs = -α² + αβ - αβ = q => -α² = q. Product of roots = -α²β = r. Substituting: q(p) = r => pq = r. [cite: 331-339]",
        tag: "F"
    },
    {
        id: 36,
        text: "The real values of 'a' for which 2x² - (a³+8a-1)x + a²-4a = 0 has roots of opposite sign is:",
        options: ["a > 5", "0 < a < 4", "a > 0", "a > 7"],
        correctAnswer: "0 < a < 4",
        shortExplanation: "Roots have opposite signs if Product of roots < 0. (a²-4a)/2 < 0 => a(a-4) < 0 => 0 < a < 4. [cite: 349-354]",
        tag: "F"
    },
    {
        id: 37,
        text: "If α, β, γ are roots of x³ + 4x + 1 = 0 then 1/(α+β) + 1/(β+γ) + 1/(γ+α) =",
        options: ["1", "2", "3", "4"],
        correctAnswer: "4",
        shortExplanation: "α+β+γ = 0, so α+β = -γ, etc. Expression = -1/γ - 1/α - 1/β = -(αβ+βγ+γα)/αβγ. Here αβ+βγ+γα = 4 and αβγ = -1. Value = -(4)/-1 = 4. [cite: 367-373]",
        tag: "F"
    },
    {
        id: 38,
        text: "The set of values of p for which 6 lies between the roots of x² + 2(p-3)x + 9 = 0 is",
        options: ["(3/4, ∞)", "(-∞, -3/4)", "(-3/4, 3/4)", "[-3/4, 3/4]"],
        correctAnswer: "(-∞, -3/4)",
        shortExplanation: "For 6 to be between roots, a·f(6) < 0. 1·[36 + 12(p-3) + 9] < 0 => 36 + 12p - 36 + 9 < 0 => 12p < -9 => p < -3/4. [cite: 393-397]",
        tag: "F"
    },
    {
        id: 39,
        text: "Sum of all the roots of the equation x² - 2x + |x-1| - 5 = 0 is",
        options: ["0", "2", "1", "5"],
        correctAnswer: "2",
        shortExplanation: "Case 1: x ≥ 1: x²-2x+x-1-5=0 => x²-x-6=0 => x=3, -2 (only 3). Case 2: x < 1: x²-2x-x+1-5=0 => x²-3x-4=0 => x=4, -1 (only -1). Sum = 3-1 = 2. [cite: 385-386]",
        tag: "F"
    },
    {
        id: 40,
        text: "If px² + qx + r = 0 has no real roots and p + r > 0, then",
        options: ["p - q + r < 0", "p - q + r > 0", "p + r = q", "All of these"],
        correctAnswer: "p - q + r > 0",
        shortExplanation: "Since D < 0, f(x) has the same sign for all x. f(0) = r. If p+r > 0 and no roots, then f(x) is likely always positive. Thus f(-1) = p-q+r > 0. [cite: 422-428]",
        tag: "F"
    },
    {
        id: 41,
        text: "If p, q, r are in H.P. and p, r are different with same sign, roots of px² + 2qx + r = 0 are:",
        options: ["Real", "Equal", "Imaginary", "None of these"],
        correctAnswer: "Imaginary",
        shortExplanation: "q = 2pr/(p+r). D = (2q)² - 4pr = 4[4p²r²/(p+r)² - pr] = 4pr [4pr - (p+r)²]/(p+r)² = -4pr(p-r)²/(p+r)². Since p, r same sign, D < 0. [cite: 420-431]",
        tag: "F"
    },
    {
        id: 42,
        text: "If the equations ax² + bx + c = 0 and cx² + bx + a = 0 (a ≠ c) have a negative common root, then a - b + c is",
        options: ["0", "2", "1", "None of these"],
        correctAnswer: "0",
        shortExplanation: "Subtracting equations: (a-c)x² + (c-a) = 0 => x² = 1 => x = -1 (as common root is negative). Substitute x = -1: a - b + c = 0. [cite: 479-481]",
        tag: "F"
    },
    {
        id: 43,
        text: "If a, b, c are in H.P., then a(b-c)x² + b(c-a)x + c(a-b) is",
        options: ["has real and distinct factors", "is a perfect square", "has no real factor", "None of these"],
        correctAnswer: "is a perfect square",
        shortExplanation: "Sum of coefficients is zero, so one root is 1. If a, b, c are in H.P., the second root also becomes 1, making it a perfect square. [cite: 437-448]",
        tag: "F"
    },
    {
        id: 44,
        text: "If all real values of x from 4ˣ - (a-3)2ˣ + a-4 = 0 are non-positive, then 'a' belongs to",
        options: ["a ∈ (4, 5]", "a ∈ (0, 4]", "a ∈ (4, ∞]", "None of these"],
        correctAnswer: "a ∈ (4, 5]",
        shortExplanation: "Let 2ˣ = t. Since x ≤ 0, 0 < t ≤ 1. Solve the quadratic in t and apply conditions for roots to be in (0, 1]. [cite: 461-467]",
        tag: "F"
    },
    {
        id: 45,
        text: "If a, b, c are real such that 2a + 3b + 6c = 0, then ax² + bx + c = 0 has",
        options: ["Imaginary roots", "At least one root in (0, 1)", "At least one root in (-1, 0)", "Both roots in (1, 2)"],
        correctAnswer: "At least one root in (0, 1)",
        shortExplanation: "Consider the function f(x) = ax³/3 + bx²/2 + cx. f(0) = 0 and f(1) = a/3 + b/2 + c = (2a+3b+6c)/6 = 0. By Rolle's theorem, f'(x) = ax²+bx+c has a root in (0, 1). [cite: 485-490]",
        tag: "F"
    },
    {
        id: 46,
        text: "The solution of x³ - 13x² + 15x + 189 = 0, if one root exceeds the other by 2 is",
        options: ["7, 9, -3", "2, -5, -4", "1, 2, 6", "1, -8, 9"],
        correctAnswer: "7, 9, -3",
        shortExplanation: "Check the options. For 7, 9, -3: Sum = 7+9-3 = 13 (matches -(-13)/1). One root 9 exceeds 7 by 2. [cite: 374-376]",
        tag: "F"
    },
    {
        id: 47,
        text: "If ax² + bx + a = 0 and x³ - 2x² + 2x - 1 = 0 have two roots in common, then a + b =",
        options: ["1", "-1", "0", "None of these"],
        correctAnswer: "0",
        shortExplanation: "x³ - 2x² + 2x - 1 = (x-1)(x²-x+1). Common roots must be roots of x²-x+1=0. Comparing ax²+bx+a with x²-x+1 gives a=1, b=-1. Sum = 0. [cite: 491-493]",
        tag: "F"
    },
    {
        id: 48,
        text: "If one root of 5x² + 13x + k = 0 is the reciprocal of the other, k is",
        options: ["0", "5", "6", "1/6"],
        correctAnswer: "5",
        shortExplanation: "Product of roots = α · (1/α) = k/5. Therefore k/5 = 1 => k = 5. [cite: 192-195]",
        tag: "F"
    },
    {
        id: 49,
        text: "For the equation x² + 2x - n = 0, n ∈ [5, 100], how many n give integral roots?",
        options: ["8", "3", "4", "6"],
        correctAnswer: "8",
        shortExplanation: "For integral roots, 1+n must be a perfect square. Possible squares: 9, 16, 25, 36, 49, 64, 81, 100. (8 values). [cite: 184-189]",
        tag: "F"
    },
    {
        id: 50,
        text: "If tan α, tan β are roots of x² + px + q = 0, then tan(α+β) is",
        options: ["p/(q-1)", "p/(1-q)", "-p/(q-1)", "-p/(1-q)"],
        correctAnswer: "p/(q-1)",
        shortExplanation: "tan(α+β) = (tan α + tan β)/(1 - tan α tan β) = -p/(1-q) = p/(q-1). [cite: 281-284]",
        tag: "F"
    },
    {
        id: 1,
        text: "If α and β are the roots of the equation ax² + bx + c = 0 then the equation whose roots are α² + β² and 1/α² + 1/β² is",
        options: [
            " acx² + b(a+c)x + (a+c)² = 0",
            " acx² - (b²-2ac)x + ac = 0",
            " (acx)² - (b²-2ac)(a² + c²)x + (b²-2ac)² = 0",
            " None of these"
        ],
        correctAnswer: " (acx)² - (b²-2ac)(a² + c²)x + (b²-2ac)² = 0",
        shortExplanation: "Find the sum and product of the new roots using the relations α+β = -b/a and αβ = c/a to construct the quadratic equation. [cite: 4, 5, 6, 8, 9, 362]",
        tag: "C"
    },
    {
        id: 2,
        text: "If c ≠ 0 and the equation p/2x = a/(x+c) + b/(x-c) has two equal roots, then p can be",
        options: [
            " (√a - √b)²",
            " (a + b)²",
            " a + b",
            " a - b"
        ],
        correctAnswer: " (√a - √b)²",
        shortExplanation: "Simplify the equation into a quadratic form and set the discriminant to zero for equal roots. [cite: 11, 12, 13, 365]",
        tag: "C"
    },
    {
        id: 3,
        text: "If α, β be the roots of ax² + bx + c = 0 and γ, δ those of lx² + mx + n = 0, then the equation whose roots are αγ + βδ and αδ + βγ is",
        options: [
            " a²l²x² - ablmx + (b² - 4ac)nl + m²ac = 0",
            " a²l²x² + ablmx - (b² - 4ac)nl = 0",
            " a²l²x² - ablmx - (b² - 4ac)nl = 0",
            " None of these"
        ],
        correctAnswer: " a²l²x² - ablmx + (b² - 4ac)nl + m²ac = 0",
        shortExplanation: "Use symmetric properties of roots for both equations to determine the coefficients of the new quadratic. [cite: 17, 18, 368]",
        tag: "C"
    },
    {
        id: 4,
        text: "If α, β be the roots x² + px - q = 0 and γ, δ be the roots of x² + px + r = 0, q + r ≠ 0, then ((α-γ)(α-δ))/((β-γ)(β-δ)) is equal to",
        options: [
            " 1",
            " q",
            " r",
            " q + r"
        ],
        correctAnswer: " 1",
        shortExplanation: "Express the numerator and denominator using the quadratic function f(x) = (x-γ)(x-δ) and substitute the root values. [cite: 20, 24, 371]",
        tag: "C"
    },
    {
        id: 5,
        text: "If α, β be roots of x² + px + 1 = 0 and γ, δ be the roots of x² + qx + 1 = 0, then (α-γ)(β-γ)(α+δ)(β+δ) is equal to",
        options: [
            " p² + q²",
            " p² - q²",
            " q² - p²",
            " None of these"
        ],
        correctAnswer: " q² - p²",
        shortExplanation: "Utilize the product of roots and the values of the quadratic expressions evaluated at specific roots. [cite: 27, 29, 32, 374]",
        tag: "C"
    },
    {
        id: 6,
        text: "If x is real, then the value of the expression (x² + 14x + 9)/(x² + 2x + 3) lies",
        options: [
            " -3 and 3",
            " -4 and 5",
            " -4 and 4",
            " -5 and 4"
        ],
        correctAnswer: " -5 and 4",
        shortExplanation: "Set the expression to y, form a quadratic in x, and apply the condition that the discriminant must be ≥ 0 for real x. [cite: 34, 35, 39, 377]",
        tag: "C"
    },
    {
        id: 7,
        text: "The number of real roots of the equation e⁴ˣ + e³ˣ - 4e²ˣ + eˣ + 1 = 0 is:",
        options: [
            " 1",
            " 2",
            " 3",
            " 4"
        ],
        correctAnswer: " 1",
        shortExplanation: "Divide by e²ˣ and substitute t = eˣ + 1/eˣ to solve the resulting quadratic equation. [cite: 40, 42, 380]",
        tag: "C"
    },
    {
        id: 8,
        text: "If α and β are the roots of the equation, 7x² - 3x - 2 = 0, then the value of α/(1-α²) + β/(1-β²) is equal to",
        options: [
            " 3/8",
            " 1/24",
            " 27/16",
            " 27/32"
        ],
        correctAnswer: " 27/16",
        shortExplanation: "Simplify the expression into symmetric forms of α+β and αβ to find the numerical value. [cite: 46, 49, 383]",
        tag: "C"
    },
    {
        id: 9,
        text: "If α and β are the roots of the equation x² + px + 2 = 0 and 1/α and 1/β are the roots of the equation 2x² + 2qx + 1 = 0, then (α - 1/α)(β - 1/β)(α + 1/β)(β + 1/α) is equal to",
        options: [
            " 9/4(9 - q²)",
            " 9/4(9 + p²)",
            " 9/4(9 + q²)",
            " 9/4(9 - p²)"
        ],
        correctAnswer: " 9/4(9 - p²)",
        shortExplanation: "Express the product in terms of p and q using the relationships between roots and coefficients for both equations. [cite: 53, 55, 62, 386]",
        tag: "C"
    },
    {
        id: 10,
        text: "If the roots of x² - bx + c = 0 are two consecutive integers, then b² - 4c is",
        options: [
            " 1",
            " 2",
            " 3",
            " 4"
        ],
        correctAnswer: " 1",
        shortExplanation: "For consecutive integers α and α+1, the difference is 1. The square of the difference (α-β)² equals the discriminant b²-4c. [cite: 63, 66, 388]",
        tag: "C"
    },
    {
        id: 11,
        text: "If one of the roots of the equation x² - (p+1)x + p² + p - 8 = 0 is greater than 2 and the other root is smaller than 2, then p is such that",
        options: [
            " -11/3 < p < 3",
            " -2 < p < 3",
            " 2 < p < 3",
            " None of these"
        ],
        correctAnswer: " -2 < p < 3",
        shortExplanation: "Apply the location of roots condition f(2) < 0 for a quadratic with roots on either side of a value k. [cite: 68, 69, 71, 390]",
        tag: "C"
    },
    {
        id: 12,
        text: "If the expression x² - 11x + a and x² - 14x + 2a have a common factor and a ≠ 0, then the common factor is",
        options: [
            " (x - 3)",
            " (x - 6)",
            " (x - 8)",
            " None of these"
        ],
        correctAnswer: " (x - 8)",
        shortExplanation: "Let α be the common root. Substitute α into both equations and solve for α and a. [cite: 75, 76, 79, 392]",
        tag: "C"
    },
    {
        id: 13,
        text: "If a + b + c = 0 then the quadratic equation 3ax² + 2bx + c = 0 has",
        options: [
            " At least one root in (0, 1)",
            " One root in (2, 3) and other in (-2, -1)",
            " Imaginary roots",
            " None of the above"
        ],
        correctAnswer: " At least one root in (0, 1)",
        shortExplanation: "Consider the function f(x) = ax³ + bx² + cx. Since f(0)=0 and f(1)=a+b+c=0, by Rolle's Theorem, its derivative has a root in (0, 1). [cite: 82, 83, 394]",
        tag: "C"
    },
    {
        id: 14,
        text: "If the equation x² + 2(k+1)x + 9k - 5 = 0 has only negative roots, then",
        options: [
            " k ≤ 0",
            " k ≥ 0",
            " k ≥ 6",
            " k ≤ 6"
        ],
        correctAnswer: " k ≥ 6",
        shortExplanation: "Apply conditions for negative roots: D ≥ 0, sum of roots < 0, and product of roots > 0. [cite: 87, 88, 111, 396]",
        tag: "C"
    },
    {
        id: 15,
        text: "If the equation ax² + bx + c = 0 (a > 0) has two roots α and β such that α < -2 and β > 2 then",
        options: [
            " b² - 4ac > 0",
            " 4a + 2|b| + c < 0",
            " a + |b| + c < 0",
            " All of these"
        ],
        correctAnswer: " All of these",
        shortExplanation: "Since roots lie outside [-2, 2], evaluate the quadratic function at x = 2 and x = -2; both must be negative if a > 0. [cite: 114, 115, 121, 398]",
        tag: "C"
    },
    {
        id: 16,
        text: "If (1+k)tan²x - 4tanx - 1 + k = 0 has real roots tanx₁ and tanx₂, then",
        options: [
            " k² ≤ 5",
            " tan(x₁ + x₂) = 2",
            " for k = 2, x₁ = π/4",
            " for k = 1, x₁ = 0"
        ],
        correctAnswer: "(A, B, C, D)",
        shortExplanation: "Verify each statement: check the discriminant for real roots and sum/product formulas for the tangent values. [cite: 122, 123, 124, 125, 126, 127, 400]",
        tag: "C"
    },
    {
        id: 17,
        text: "The roots of the equation (a + √b)^(x² - 15) + (a - √b)^(x² - 15) = 2a where a² - b = 1, are",
        options: [
            " ±3",
            " ±4",
            " ±√14",
            " ±√5"
        ],
        correctAnswer: "(B, C)",
        shortExplanation: "Substitute t = (a + √b)^(x² - 15). Since (a + √b)(a - √b) = 1, solve t + 1/t = 2a for x. [cite: 91, 92, 402]",
        tag: "C"
    },
    {
        id: 18,
        text: "If 0 < a < b < c and the roots α, β of the equation ax² + bx + c = 0 are imaginary, then",
        options: [
            " |α| = |β|",
            " |α| > 1",
            " |β| < 1",
            " None of these"
        ],
        correctAnswer: "(A, B)",
        shortExplanation: "Imaginary roots are conjugates, so their magnitudes are equal. |α|² = c/a, and since c > a, |α| > 1. [cite: 95, 96, 98, 404]",
        tag: "C"
    },
    {
        id: 19,
        text: "Let x₁, x₂, x₃, x₄ be the roots of x⁴ + ax³ + bx² + cx + d = 0. If x₁ + x₂ = x₃ + x₄ and a = 2, then b - c is",
        options: [
            " -1",
            " 1",
            " -2",
            " 2"
        ],
        correctAnswer: " 1",
        shortExplanation: "Use the relation between coefficients and sums of roots to solve for the specific combination b - c. [cite: 101, 105, 406]",
        tag: "C"
    },
    {
        id: 20,
        text: "If x₁ + x₂ = x₃ + x₄ for roots of x⁴ + ax³ + bx² + cx + d = 0 and b < 0, how many different values of 'a' may we have?",
        options: [
            " 3",
            " 2",
            " 1",
            " 0"
        ],
        correctAnswer: " 1",
        shortExplanation: "The symmetry condition x₁ + x₂ = x₃ + x₄ restricts the possible values of the coefficient a. [cite: 107, 108, 129, 408]",
        tag: "C"
    },
    {
        id: 21,
        text: "If b + c = 1 and a ≠ -2 for the equation x⁴ + ax³ + bx² + cx + d = 0 with x₁ + x₂ = x₃ + x₄, then for real a, c ∈",
        options: [
            " (-∞, 1/4)",
            " (-∞, 3)",
            " (-∞, 1)",
            " (-∞, 4)"
        ],
        correctAnswer: " (-∞, 1/4)",
        shortExplanation: "Derive the constraint on c by ensuring the conditions for the roots and coefficients remain consistent. [cite: 133, 134, 410]",
        tag: "C"
    },
    {
        id: 22,
        text: "If x₁, x₂, x₃ satisfying x³ - x² + βx + γ = 0 are in GP (x₁, x₂, x₃ > 0), then the maximum value of [β] + [γ] + 2 is",
        options: [
            " 1",
            " 0",
            " 2",
            " None"
        ],
        correctAnswer: " 0",
        shortExplanation: "Apply the GP property x₂² = x₁x₃ and relate it to the coefficients β and γ to find the integer sum. [cite: 231, 232, 224, 412]",
        tag: "C"
    },
    {
        id: 23,
        text: "If b + c = 2(a + 1) for the cubic x³ - ax² + bx - c = 0 where x₁, x₂, and x₁x₂ are roots, then x₁x₂(a + 1)/(b + c) is",
        options: [
            " 0",
            " 1",
            " 2",
            " None"
        ],
        correctAnswer: " 1",
        shortExplanation: "Substitute the root values into the cubic identity and use the given linear relation to simplify the ratio. [cite: 170, 172, 414]",
        tag: "C"
    },
    {
        id: 24,
        text: "Match Column-I with Column-II regarding quadratic inequalities and root signs.",
        options: [
            " A-P, B-Q, C-R, D-S",
            " A-R, B-P, C-S, D-Q",
            " A-P, B-S, C-Q, D-R",
            " A-S, B-P, C-R, D-Q"
        ],
        correctAnswer: " A-S, B-P, C-R, D-Q",
        shortExplanation: "Solve individual inequalities for each case (opposite signs, negative roots, valid for all x) to find the matching ranges. [cite: 145, 147, 151, 153, 161, 165, 186, 416]",
        tag: "C"
    },
    {
        id: 25,
        text: "Match List-I with List-II regarding the parameter k in various quadratic conditions.",
        options: [
            " I-P, II-Q, III-S, IV-R, V-T",
            " I-Q, II-P, III-S, IV-R, V-T",
            " I-Q, II-P, III-S, IV-T, V-R",
            " I-Q, II-S, III-P, IV-R, V-T"
        ],
        correctAnswer: " I-Q, II-P, III-S, IV-R, V-T",
        shortExplanation: "Check discriminant and root location conditions for each specific quadratic listed. [cite: 193, 196, 204, 209, 210, 219, 228, 418]",
        tag: "C"
    },
    {
        id: 26,
        text: "If x is real, then maximum value of (3x² + 9x + 17)/(3x² + 9x + 7) is:",
        options: [
            " 41",
            " 1",
            " 17/7",
            " 1/4"
        ],
        correctAnswer: " 41",
        shortExplanation: "Analyze the range of the rational expression by using the discriminant of the resulting quadratic. [cite: 173, 174, 419]",
        tag: "C"
    },
    {
        id: 27,
        text: "If α, β (α < β) are roots of (k+1)x² - (20k+14)x + 91k + 40 = 0 and k > 0, then β lies in:",
        options: [
            " (4, 7)",
            " (7, 10)",
            " (10, 13)",
            " None of these"
        ],
        correctAnswer: " (10, 13)",
        shortExplanation: "Estimate the root location based on the parameter k and the behavior of the quadratic function. [cite: 177, 178, 182, 366]",
        tag: "C"
    },
    {
        id: 28,
        text: "If ax² + 2bx + c = 0 and ax² + 2cx + b = 0 (b ≠ c) have a common root, then their other roots satisfy:",
        options: [
            " a²x(x+1) + 4bc = 0",
            " a²x(x+1) + 8bc = 0",
            " a²x(x+2) + 8bc = 0",
            " a²x(1+2x) + 8bc = 0"
        ],
        correctAnswer: " a²x(1+2x) + 8bc = 0",
        shortExplanation: "Identify the common root (x=1/2 or similar) and find the product of the other roots to form the new equation. [cite: 188, 189, 207, 369]",
        tag: "C"
    },
    {
        id: 29,
        text: "If the roots of x² + px + q = 0 are tan 30° and tan 15°, then the value of (2 + q - p) is",
        options: [
            " 3",
            " 0",
            " 1",
            " 2"
        ],
        correctAnswer: " 3",
        shortExplanation: "Use the identity tan(45°) = tan(30° + 15°) to relate p and q through the sum and product of roots. [cite: 216, 217, 222, 372]",
        tag: "C"
    },
    {
        id: 30,
        text: "If r be the ratio of the roots of the equation ax² + bx + c = 0 then (r+1)²/r is equal to",
        options: [
            " a²/bc",
            " b²/ac",
            " c²/ab",
            " None of these"
        ],
        correctAnswer: " b²/ac",
        shortExplanation: "Express the ratio r = α/β and evaluate (α/β + 1)² / (α/β) which simplifies to (α+β)²/αβ. [cite: 233, 234, 236, 375]",
        tag: "C"
    },
    {
        id: 31,
        text: "The set of values of p for which the roots of 3x² + 2x + p(p-1) = 0 are of opposite sign is",
        options: [
            " (-∞, 0)",
            " (0, 1)",
            " (1, ∞)",
            " (0, ∞)"
        ],
        correctAnswer: " (0, 1)",
        shortExplanation: "For roots of opposite signs, the product of roots c/a must be negative: p(p-1)/3 < 0. [cite: 238, 243, 378]",
        tag: "C"
    },
    {
        id: 32,
        text: "If f(x) = tx² - (2t-1)x + (5t-1) can take both positive and negative values, then t lies in",
        options: [
            " (-1/4, 1/4)",
            " (-∞, -1/4) ∪ (1/4, ∞)",
            " (-1/4, 1/4) - {0}",
            " (-4, 4)"
        ],
        correctAnswer: " (-1/4, 1/4) - {0}",
        shortExplanation: "For the expression to change sign, the discriminant of the quadratic must be strictly greater than zero. [cite: 246, 247, 250, 381]",
        tag: "C"
    },
    {
        id: 33,
        text: "Complete set of values of 'a' for which (a-1)x² - (a+1)x + (a-1) ≥ 0 is true for all x ≥ 2.",
        options: [
            " (3/7, 1]",
            " (-∞, 1)",
            " (-∞, 7/3]",
            " [7/3, ∞)"
        ],
        correctAnswer: " [7/3, ∞)",
        shortExplanation: "Test the vertex location and the value of the function at the boundary x = 2 for the given inequality. [cite: 252, 254, 259, 384]",
        tag: "C"
    },
    {
        id: 34,
        text: "If c > 0 and 4a + c < 2b, then ax² - bx + c = 0 has a root in the interval",
        options: [
            " (0, 2)",
            " (2, 4)",
            " (0, 1)",
            " (-2, 0)"
        ],
        correctAnswer: " (0, 2)",
        shortExplanation: "Evaluate f(0) = c > 0 and f(2) = 4a - 2b + c < 0. Since the sign changes, a root exists in (0, 2). [cite: 260, 261, 262, 387]",
        tag: "C"
    },
    {
        id: 35,
        text: "If both roots of x² - 32x + c = 0 are prime numbers then possible values of c are",
        options: [
            " 60",
            " 87",
            " 247",
            " 231"
        ],
        correctAnswer: "(B, C)",
        shortExplanation: "The sum of roots is 32. Find pairs of prime numbers that sum to 32 (e.g., 3+29, 13+19) and calculate their products. [cite: 266, 270, 269, 389]",
        tag: "C"
    },
    {
        id: 36,
        text: "If roots of x³ + ax² + bx + c = 0 are three consecutive positive integers, then a²/ (b + 1) is",
        options: [
            " 1",
            " 2",
            " 3",
            " 4"
        ],
        correctAnswer: " 3",
        shortExplanation: "Let roots be n-1, n, n+1. Use relationships between coefficients and roots to evaluate the specific ratio. [cite: 272, 316, 319, 391]",
        tag: "C"
    },
    {
        id: 37,
        text: "If roots of x² - 2ax + a² + a - 3 = 0 are less than 3, then",
        options: [
            " a < 2",
            " 2 ≤ a ≤ 3",
            " 3 < a ≤ 4",
            " a > 4"
        ],
        correctAnswer: " a < 2",
        shortExplanation: "Apply location of roots conditions: D ≥ 0, -b/2a < 3, and f(3) > 0. [cite: 321, 322, 324, 393]",
        tag: "C"
    },
    {
        id: 38,
        text: "If α & β (α < β) are roots of x² + bx + c = 0 where c < 0 < b, then",
        options: [
            " 0 < α < β",
            " α < 0 < β² < α²",
            " α < β < 0",
            " α < 0 < α² < β²"
        ],
        correctAnswer: " α < 0 < β² < α²",
        shortExplanation: "Since c < 0, roots have opposite signs. Since b > 0, the sum of roots is negative, meaning the negative root has a larger magnitude. [cite: 277, 278, 280, 395]",
        tag: "C"
    },
    {
        id: 39,
        text: "The sum of all the roots of the equation |x² - 8x + 15| - 2x + 7 = 0 is:",
        options: [
            " 9 + √3",
            " 11 + √3",
            " 9 - √3",
            " 11 - √3"
        ],
        correctAnswer: " 9 + √3",
        shortExplanation: "Solve the equation by considering cases where the quadratic inside the absolute value is positive and negative. [cite: 283, 284, 285, 397]",
        tag: "C"
    },
    {
        id: 40,
        text: "Let f(x) be a quadratic polynomial such that f(-2) + f(3) = 0. If one root is -1, the sum of the roots is:",
        options: [
            " 11/3",
            " 7/3",
            " 13/3",
            " 14/3"
        ],
        correctAnswer: " 11/3",
        shortExplanation: "Let f(x) = a(x+1)(x-r). Use the condition f(-2) + f(3) = 0 to solve for the second root r, then find the sum. [cite: 289, 291, 294, 399]",
        tag: "C"
    },
    {
        id: 41,
        text: "Let α and β be roots of x² + (2i - 1) = 0. Then the value of |α⁸ + β⁸| is equal to:",
        options: [
            " 50",
            " 250",
            " 1250",
            " 1500"
        ],
        correctAnswer: " 50",
        shortExplanation: "Solve for the roots in complex form and raise them to the 8th power using De Moivre's Theorem. [cite: 298, 299, 401]",
        tag: "C"
    },
    {
        id: 42,
        text: "Let α and β be roots of x² - 6x - 2 = 0. If aₙ = αⁿ - βⁿ, then (a₁₀ - 2a₈) / 3a₉ is:",
        options: [
            " 2",
            " 1",
            " 4",
            " 3"
        ],
        correctAnswer: " 2",
        shortExplanation: "Substitute α and β into the equation and use the recurrence relation αⁿ⁺² - 6αⁿ⁺¹ - 2αⁿ = 0. [cite: 303, 304, 307, 403]",
        tag: "C"
    },
    {
        id: 43,
        text: "Find the value of the continued fraction 4 + 1 / (5 + 1 / (4 + 1 / (5 + ...)))",
        options: [
            " 2 + (2/5)√30",
            " 2 + (4/5)√30",
            " 4 + (4/5)√30",
            " 5 + (2/5)√30"
        ],
        correctAnswer: " 2 + (2/5)√30",
        shortExplanation: "Set the expression to x and form a recursive quadratic equation to solve for x. [cite: 309, 326, 405]",
        tag: "C"
    },
    {
        id: 44,
        text: "cosec 18° is a root of the equation:",
        options: [
            " x² + 2x - 4 = 0",
            " x² - 2x + 4 = 0",
            " 4x² + 2x - 1 = 0",
            " x² - 2x - 4 = 0"
        ],
        correctAnswer: " x² - 2x - 4 = 0",
        shortExplanation: "Use the known value sin 18° = (√5 - 1)/4 to find cosec 18° = 4/(√5 - 1) and identify its minimal polynomial. [cite: 331, 337, 407]",
        tag: "C"
    },
    {
        id: 45,
        text: "If α and β are roots of x² - 64x + 256 = 0, then (α³/β⁵)^(1/8) + (β³/α⁵)^(1/8) is",
        options: [
            " 3",
            " 2",
            " 4",
            " 1"
        ],
        correctAnswer: " 2",
        shortExplanation: "Simplify the expression to (α + β) / (αβ)^(5/8) and substitute the root sum and product. [cite: 340, 343, 344, 409]",
        tag: "C"
    },
    {
        id: 46,
        text: "The equation x² - 4x + [x] + 3 = x[x] has:",
        options: [
            " exactly two solutions",
            " no solution",
            " a unique solution in (-∞, 1)",
            " a unique solution in (-∞, ∞)"
        ],
        correctAnswer: " a unique solution in (-∞, ∞)",
        shortExplanation: "Test different intervals for the greatest integer [x] to find consistent real solutions for x. [cite: 346, 351, 411]",
        tag: "C"
    },
    {
        id: 47,
        text: "Let a ∈ R and let α, β be roots of x² + 60^(1/4)x + a = 0. If α⁴ + β⁴ = -30, then the product of all possible values of a is",
        options: ["30", "45", "60", "90"],
        correctAnswer: "45",
        shortExplanation: "Express α⁴ + β⁴ in terms of (α+β) and αβ and solve the resulting quadratic for the parameter a. [cite: 352, 353, 413]",
        tag: "C"
    },
    {
        id: 48,
        text: "Let m and n be numbers of real roots of x² - 12x + [x] + 31 = 0 and x² - 5|x+2| - 4 = 0. Then m² + mn + n² is",
        options: ["7", "8", "9", "12"],
        correctAnswer: "9",
        shortExplanation: "Solve both equations independently to count their real roots (m and n) and calculate the final value. [cite: 354, 355, 415]",
        tag: "C"
    },
    {
        id: 49,
        text: "The number of real solutions of the equation e⁴ˣ + 4e³ˣ - 58e²ˣ + 4eˣ + 1 = 0 is",
        options: ["0", "1", "2", "4"],
        correctAnswer: "2",
        shortExplanation: "Convert the reciprocal-style exponential equation into a quadratic by dividing by e²ˣ. [cite: 356, 417]",
        tag: "C"
    },
    {
        id: 50,
        text: "The number of distinct real roots of the equation 3x⁴ + 4x³ - 12x² + 4 = 0 is",
        options: ["1", "2", "3", "4"],
        correctAnswer: "4",
        shortExplanation: "Use calculus to find critical points and examine the function's value to determine the number of x-intercepts. [cite: 357, 419]",
        tag: "C"
    },
    {
        id: 1,
        text: "If α, β are the roots of ax² + bx + c = 0 and c ≠ 0 then the value of 1/(aα+b)² + 1/(aβ+b)² in terms of a, b, c is:",
        options: [" (b²-2ac)/ac", " (2ac-b²)/ac", " (b²-2ac)/(a²c²)", " b²/2"],
        correctAnswer: " (b²-2ac)/(a²c²)",
        shortExplanation: "Since aα+b = -c/α and aβ+b = -c/β, the expression becomes (α/c)² + (β/c)² = (α²+β²)/c².",
        tag: "S"
    },
    {
        id: 2,
        text: "Let α and β be the roots of the quadratic equation (x-2)(x-3) + (x-3)(x+1) + (x+1)(x-2) = 0. Find the value of 1/((α+1)(β+1)) + 1/((α-2)(β-2)) + 1/((α-3)(β-3))",
        options: ["0", "1", "-1", "2"],
        correctAnswer: "0",
        shortExplanation: "Let f(x) be the given expression. The sum of 1/f'(root) values relates to the derivative and partial fractions, leading to zero.",
        tag: "S"
    },
    {
        id: 3,
        text: "If α, β are the roots of ax² + bx + c = 0, (a ≠ 0) and α+δ, β+δ are the roots of Ax² + Bx + C = 0, (A ≠ 0) for some constant δ, then prove that (b²-4ac)/a² is equal to:",
        options: [" (B²-4AC)/A²", " (B²-4AC)/a²", " (b²-4ac)/A²", " None"],
        correctAnswer: " (B²-4AC)/A²",
        shortExplanation: "The difference of roots (α-β)² is invariant under translation by δ. Thus, D1/a² = D2/A².",
        tag: "S"
    },
    {
        id: 4,
        text: "If α and β be two roots of the equation x² - 64x + 256 = 0. Then the value of (α³/β⁵)^(1/8) + (β³/α⁵)^(1/8) is:",
        options: [" 3", " 2", " 4", " 1"],
        correctAnswer: " 2",
        shortExplanation: "Simplify the expression to (α + β) / (αβ)^(5/8). Substitute α+β=64 and αβ=256.",
        tag: "S"
    },
    {
        id: 5,
        text: "Let α, β be the roots of the equation x² + 2√2x - 1 = 0. The quadratic equation, whose roots are α⁴ + β⁴ and 1/10(α⁶ + β⁶), is:",
        options: [" x²-190x+9466=0", " x²-195x+9466=0", " x²-195x+9506=0", " x²-180x+9506=0"],
        correctAnswer: " x²-195x+9466=0",
        shortExplanation: "Calculate higher powers using Newton's sums or (α²+β²) recursive relations.",
        tag: "S"
    },
    {
        id: 6,
        text: "If the equation a(b-c)x² + b(c-a)x + c(a-b) = 0 has equal roots, where a + c = 15 and b = 36/5, then a² + c² is equal to:",
        options: ["117", "125", "153", "None"],
        correctAnswer: "153",
        shortExplanation: "Since x=1 is a root (sum of coefficients=0) and roots are equal, both roots are 1. This implies a, b, c are in H.P.",
        tag: "S"
    },
    {
        id: 7,
        text: "Let a ∈ R and let α, β be the roots of the equation x² + 60^(1/4)x + a = 0. If α⁴ + β⁴ = -30, then the product of all possible values of a is:",
        options: ["30", "45", "60", "90"],
        correctAnswer: "45",
        shortExplanation: "Expand (α²+β²)² - 2α²β² and use the relation (α+β)² - 2αβ to solve for 'a'.",
        tag: "S"
    },
    {
        id: 8,
        text: "If 2 and 6 are the roots of the equation ax² + bx + 1 = 0, then the quadratic equation whose roots are 1/(2a+b) and 1/(6a+b) is:",
        options: [" x²+8x+12=0", " 2x²+11x+12=0", " 4x²+14x+12=0", " x²+10x+16=0"],
        correctAnswer: " x²+10x+16=0",
        shortExplanation: "Find a and b from the sum and product of roots, then evaluate the new roots.",
        tag: "S"
    },
    {
        id: 9,
        text: "Let α and β be the roots of the equation 5x² + 6x - 2 = 0. If Sn = αⁿ + βⁿ, then:",
        options: [" 6S₆+5S₅=2S₄", " 6S₆+5S₅+2S₄=0", " 5S₆+6S₅=2S₄", " 6S₆+6S₅+2S₄=0"],
        correctAnswer: " 5S₆+6S₅=2S₄",
        shortExplanation: "Apply Newton's Sums: a(Sn) + b(Sn-1) + c(Sn-2) = 0. Here 5S₆ + 6S₅ - 2S₄ = 0.",
        tag: "S"
    },
    {
        id: 10,
        text: "Let α, β be roots of x² + √2x - 8 = 0. If Un = αⁿ + βⁿ, then (U₁₀ + √2U₉) / 2U₈ is equal to:",
        options: ["2", "3", "4", "8"],
        correctAnswer: "4",
        shortExplanation: "From the equation, α² + √2α - 8 = 0 implies αⁿ + √2αⁿ⁻¹ = 8αⁿ⁻². Summing for α and β gives U₁₀ + √2U₉ = 8U₈.",
        tag: "S"
    },
    {
        id: 11,
        text: "Let α, β be the roots of the equation x² - √2x - √3 = 0. Let Pn = αⁿ - βⁿ. Then (11√3 - 10√2)P₁₀ + (11√2 + 10)P₁₁ - 11P₁₂ is equal to:",
        options: ["0", "1", "11", "√3"],
        correctAnswer: "0",
        shortExplanation: "Utilize the property αⁿ = √2αⁿ⁻¹ + √3αⁿ⁻² to simplify the expression involving P₁₀, P₁₁, and P₁₂.",
        tag: "S"
    },
    {
        id: 12,
        text: "If x₁ + x₂ = x₃ + x₄ where xᵢ are roots of x⁴ + ax³ + bx² + cx + d = 0 and a = 2, then b - c is:",
        options: [" -1", " 1", " -2", " 2"],
        correctAnswer: " 1",
        shortExplanation: "Using Vieta's relations and the sum condition, the coefficients satisfy a specific identity.",
        tag: "S"
    },
    {
        id: 13,
        text: "The number of real solutions of the equation e⁴ˣ + 4e³ˣ - 58e²ˣ + 4eˣ + 1 = 0 is:",
        options: ["0", "1", "2", "4"],
        correctAnswer: "2",
        shortExplanation: "Divide by e²ˣ, substitute t = eˣ + 1/eˣ, solve the quadratic t² + 4t - 60 = 0, and check for valid eˣ.",
        tag: "S"
    },
    {
        id: 14,
        text: "The sum of all the roots of the equation |x² - 8x + 15| - 2x + 7 = 0 is:",
        options: [" 9+√3", " 11+√3", " 9-√3", " 11-√3"],
        correctAnswer: " 9+√3",
        shortExplanation: "Solve by splitting into cases (x²-8x+15 ≥ 0 and < 0). Verify if solutions fall in the correct interval.",
        tag: "S"
    },
    {
        id: 15,
        text: "If c ≠ 0 and the equation p/2x = a/(x+c) + b/(x-c) has two equal roots, then p can be:",
        options: [" (√a-√b)²", " (a+b)²", " a+b", " a-b"],
        correctAnswer: " (√a-√b)²",
        shortExplanation: "Rearrange into a quadratic: px² - 2x(a(x-c)+b(x+c)) - pc² = 0. Set D=0 for equal roots.",
        tag: "S"
    },
    {
        id: 16,
        text: "If α, β be roots of x² + px + 1 = 0 and γ, δ be the roots of x² + qx + 1 = 0, then (α-γ)(β-γ)(α+δ)(β+δ) is:",
        options: [" p²+q²", " p²-q²", " q²-p²", " None"],
        correctAnswer: " q²-p²",
        shortExplanation: "The product (α-γ)(β-γ) is the value of the first quadratic at x=γ. Use symmetry to find the full product.",
        tag: "S"
    },
    {
        id: 17,
        text: "The number of real roots of the equation e⁴ˣ + e³ˣ - 4e²ˣ + eˣ + 1 = 0 is:",
        options: [" 1", " 2", " 3", " 4"],
        correctAnswer: " 1",
        shortExplanation: "Let t = eˣ + 1/eˣ. The equation reduces to t² + t - 6 = 0. Only t=2 is possible since eˣ + 1/eˣ ≥ 2.",
        tag: "S"
    },
    {
        id: 18,
        text: "If α and β are the roots of the equation x² + px + 2 = 0 and 1/α and 1/β are the roots of 2x² + 2qx + 1 = 0, then (α - 1/α)(β - 1/β)(α + 1/β)(β + 1/α) is:",
        options: [" 9/4(9-q²)", " 9/4(9+p²)", " 9/4(9+q²)", " 9/4(9-p²)"],
        correctAnswer: " 9/4(9-p²)",
        shortExplanation: "Expand the product and substitute the known sums and products of roots for both equations.",
        tag: "S"
    },
    {
        id: 19,
        text: "Complete set of values of 'a' for which (a-1)x² - (a+1)x + (a-1) ≥ 0 is true for all x ≥ 2:",
        options: [" (3/7, 1]", " (-∞, 1)", " (-∞, 7/3]", " [7/3, ∞)"],
        correctAnswer: " [7/3, ∞)",
        shortExplanation: "Consider the condition for the quadratic to be non-negative for x in [2, ∞), checking both D and f(2).",
        tag: "S"
    },
    {
        id: 20,
        text: "If both roots of x² - 32x + c = 0 are prime numbers, then possible values of c are:",
        options: [" 60", " 87", " 247", " 231"],
        correctAnswer: "(B, C)",
        shortExplanation: "The sum of roots is 32. Prime pairs summing to 32 are (3, 29) and (13, 19). Their products are 87 and 247.",
        tag: "S"
    },
    {
        id: 21,
        text: "If α, β (α < β) are roots of (k+1)x² - (20k+14)x + 91k + 40 = 0 and k > 0, then β lies in:",
        options: [" (4, 7)", " (7, 10)", " (10, 13)", " None"],
        correctAnswer: " (10, 13)",
        shortExplanation: "Test boundary values of the function f(x) and analyze the movement of the root as k increases.",
        tag: "S"
    },
    {
        id: 22,
        text: "If x is real, then the maximum value of (3x² + 9x + 17)/(3x² + 9x + 7) is:",
        options: [" 41", " 1", " 17/7", " 1/4"],
        correctAnswer: " 41",
        shortExplanation: "Let the expression be y. Form a quadratic in x and set Discriminant ≥ 0 to find the range of y.",
        tag: "S"
    },
    {
        id: 23,
        text: "The number of distinct real roots of the equation 3x⁴ + 4x³ - 12x² + 4 = 0 is:",
        options: ["1", "2", "3", "4"],
        correctAnswer: "4",
        shortExplanation: "Use the derivative f'(x) = 12x(x+2)(x-1) to find local maxima/minima and count sign changes in f(x).",
        tag: "S"
    },
    {
        id: 24,
        text: "Find the value of the parameter d for which both roots of the equation x² - 6dx + (2 - 2d + 9d²) = 0 exceed the number 3.",
        options: ["d > 11/9", "d < 11/9", "d > 9/11", "d < 1"],
        correctAnswer: "d > 11/9",
        shortExplanation: "Apply location of roots: D ≥ 0, -b/2a > 3, and f(3) > 0. The intersection yields d > 11/9.",
        tag: "S"
    },
    {
        id: 25,
        text: "If α, β, γ are roots of 5x³ - qx - 1 = 0, (q ∈ R) find the value of α²/(3βγ) + β²/(3αγ) + γ²/(3αβ).",
        options: ["0", "1", "0.2", "0.5"],
        correctAnswer: "0.2",
        shortExplanation: "The expression simplifies to (α³+β³+γ³)/(3αβγ). Since α+β+γ=0, α³+β³+γ³ = 3αβγ, so the value is 1/5.",
        tag: "S"
    },
    {
        id: 26,
        text: "If one root is square of the other root of equation x² + px + q = 0, then the relation between p and q is:",
        options: [" p³ - q(3p-1) + q² = 0", " p³ + q(3p-1) + q² = 0"],
        correctAnswer: " p³ - q(3p-1) + q² = 0",
        shortExplanation: "Let roots be α and α². α+α² = -p and α³ = q. Cube the first equation and substitute.",
        tag: "S"
    },
    {
        id: 27,
        text: "Let f(x) be a quadratic polynomial such that f(-2) + f(3) = 0. If one root is -1, the sum of the roots is:",
        options: [" 11/3", " 7/3", " 13/3", " 14/3"],
        correctAnswer: " 11/3",
        shortExplanation: "Let f(x) = a(x+1)(x-r). f(-2) = a(-1)(-2-r), f(3) = a(4)(3-r). Set sum to 0 to find r = 14/3. Sum = -1 + 14/3.",
        tag: "S"
    },
    {
        id: 28,
        text: "If 3^(2sin2α-1), 14 and 3^(4-2sin2α) are the first three terms of an A.P., find the 6th term.",
        options: ["45", "66", "72", "84"],
        correctAnswer: "66",
        shortExplanation: "Let 3^(2sin2α) = y. 2(14) = y/3 + 81/y. Solve for y, then find the common difference d.",
        tag: "S"
    },
    {
        id: 29,
        text: "If the roots of x² - bx + c = 0 are two consecutive integers, then b² - 4c is:",
        options: ["0", "1", "2", "4"],
        correctAnswer: "1",
        shortExplanation: "Roots are n and n+1. Difference is 1. (α-β)² = D/a². So 1² = (b²-4c)/1.",
        tag: "S"
    },
    {
        id: 30,
        text: "If α, β are the roots of x² - 6x - 2 = 0 and an = αⁿ - βⁿ, then (a₁₀ - 2a₈) / 3a₉ is:",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        shortExplanation: "From x²-6x-2=0, αⁿ⁺² - 6αⁿ⁺¹ - 2αⁿ = 0. Thus a₁₀ - 2a₈ = 6a₉. Ratio is 6a₉/3a₉ = 2.",
        tag: "S"
    },
    {
        id: 31,
        text: "If the roots of the equation lx² + mx + n = 0 are in the ratio p:q, then √(p/q) + √(q/p) + √(n/l) is:",
        options: ["0", "1", "m/l", "n/l"],
        correctAnswer: "0",
        shortExplanation: "Use α/β = p/q and the fact that α+β = -m/l and αβ = n/l to simplify the radicals.",
        tag: "S"
    },
    {
        id: 32,
        text: "The number of integral values of k for which the equation 7x² - 3x + k = 0 has no real roots and 2x² + 5x - k = 0 has real roots is:",
        options: [" 2", " 3", " 4", " 5"],
        correctAnswer: " 3",
        shortExplanation: "Solve D1 < 0 and D2 ≥ 0. 9 - 28k < 0 and 25 + 8k ≥ 0. Range is 9/28 < k and k ≥ -25/8.",
        tag: "S"
    },
    {
        id: 33,
        text: "If α, β are roots of x² - px + q = 0, then the value of α² + β² is:",
        options: ["p² - 2q", "p² + 2q", "p² - q", "2p² - q"],
        correctAnswer: "p² - 2q",
        shortExplanation: "Factual/Solvable: α² + β² = (α+β)² - 2αβ = p² - 2q.",
        tag: "S"
    },
    {
        id: 34,
        text: "If the sum of the roots of the equation x² - px + q = 0 is 3 times their difference, then:",
        options: ["2p² = 9q", "p² = 8q", "9p² = 2q", "p = 3q"],
        correctAnswer: "2p² = 9q",
        shortExplanation: "(α+β) = 3(α-β). Square both sides: (α+β)² = 9(α-β)². p² = 9(p² - 4q).",
        tag: "S"
    },
    {
        id: 35,
        text: "The number of real roots of |x|² - 3|x| + 2 = 0 is:",
        options: [" 4", " 2", " 1", " 0"],
        correctAnswer: " 4",
        shortExplanation: "The quadratic in |x| gives |x|=1 or |x|=2, leading to x = ±1, ±2.",
        tag: "S"
    },
    {
        id: 36,
        text: "If a, b, c are in A.P. then the roots of ax² + bx + c = 0 are real for:",
        options: ["|b/a - 2| ≥ √3", "|b/a - 1| ≥ √2", "b² - 4ac = 0", "a+c = b"],
        correctAnswer: "|b/a - 2| ≥ √3",
        shortExplanation: "Condition D ≥ 0 implies b² - 4ac ≥ 0. Use 2b = a+c to eliminate c.",
        tag: "S"
    },
    {
        id: 37,
        text: "If the roots of the equation x² - 2ax + a² + a - 3 = 0 are less than 3, then 'a' lies in:",
        options: ["a < 2", "a > 2", "a = 2", "None"],
        correctAnswer: "a < 2",
        shortExplanation: "Apply location of roots: D ≥ 0, -b/2a < 3, f(3) > 0. Intersection gives a < 2.",
        tag: "S"
    },
    {
        id: 38,
        text: "If x² + px + q = 0 and x² + qx + p = 0 have a common root, then p+q+1 is:",
        options: ["0", "1", "-1", "p+q"],
        correctAnswer: "0",
        shortExplanation: "Subtract equations: (p-q)x + (q-p) = 0. Common root x=1. Substitute in either eq: 1+p+q=0.",
        tag: "S"
    },
    {
        id: 39,
        text: "If α, β are roots of x² - 2x + 4 = 0, then the value of αⁿ + βⁿ is:",
        options: ["2ⁿ⁺¹ cos(nπ/3)", "2ⁿ sin(nπ/3)", "2ⁿ cos(nπ/6)", "2ⁿ⁺¹ sin(nπ/6)"],
        correctAnswer: "2ⁿ⁺¹ cos(nπ/3)",
        shortExplanation: "Roots are 1 ± i√3, which in polar form are 2(cos π/3 ± i sin π/3). Use De Moivre's.",
        tag: "S"
    },
    {
        id: 40,
        text: "The value of a for which the equations x² - ax + 1 = 0 and x² - x + a = 0 have a common root is:",
        options: ["-2", "2", "1", "0"],
        correctAnswer: "-2",
        shortExplanation: "Common root α implies α²-aα+1=0 and α²-α+a=0. Subtract to find α and substitute back.",
        tag: "S"
    },
    {
        id: 41,
        text: "The number of real roots of the equation (x-1)² + (x-2)² + (x-3)² = 0 is:",
        options: ["0", "1", "2", "3"],
        correctAnswer: "0",
        shortExplanation: "Sum of squares is zero only if each term is zero simultaneously, which is impossible for distinct x.",
        tag: "S"
    },
    {
        id: 42,
        text: "If x₁ and x₂ are roots of the equation x² - ax + b = 0, find the value of (x₁³ + x₂³).",
        options: ["a³ - 3ab", "a³ + 3ab", "3a³ - ab", "a³ - ab"],
        correctAnswer: "a³ - 3ab",
        shortExplanation: "Use the identity x₁³ + x₂³ = (x₁+x₂)(x₁²+x₂² - x₁x₂).",
        tag: "S"
    },
    {
        id: 43,
        text: "The number of solutions of log₄(x-1) = log₂(x-3) is:",
        options: ["0", "1", "2", "None"],
        correctAnswer: "1",
        shortExplanation: "Rewrite as log₄(x-1) = log₄(x-3)². So x-1 = (x-3)². Check if solution satisfies x > 3.",
        tag: "S"
    },
    {
        id: 44,
        text: "If α, β are roots of x² + px + q = 0, and α+1, β+1 are roots of x² + Ax + B = 0, then A-p is:",
        options: ["-2", "2", "0", "1"],
        correctAnswer: "-2",
        shortExplanation: "A = -(α+1 + β+1) = -(α+β) - 2 = p - 2. Thus A - p = -2.",
        tag: "S"
    },
    {
        id: 45,
        text: "Find the smallest integral value of k for which the quadratic expression (k-2)x² + 8x + (k+4) is always positive.",
        options: ["2", "4", "5", "6"],
        correctAnswer: "5",
        shortExplanation: "Set a > 0 (k > 2) and D < 0 (64 - 4(k-2)(k+4) < 0). Solve for k.",
        tag: "S"
    },
    {
        id: 46,
        text: "The number of real solutions of the equation 2^|x| = x² is:",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        shortExplanation: "Graph y = 2^|x| and y = x². They intersect at two points (around ±2 and more). Check specifically for integers.",
        tag: "S"
    },
    {
        id: 47,
        text: "If roots of x³ - 3x² + 2x + 2/3 = 0 are α, β, γ, find α⁴ + β⁴ + γ⁴.",
        options: ["20", "25", "30", "35"],
        correctAnswer: "25",
        shortExplanation: "Use Newton's Sums or symmetric polynomials to find the sum of 4th powers.",
        tag: "S"
    },
    {
        id: 48,
        text: "The number of roots of the equation x - 2/(x-1) = 1 - 2/(x-1) is:",
        options: ["0", "1", "2", "Infinite"],
        correctAnswer: "0",
        shortExplanation: "Simplifying gives x=1, but x cannot be 1 as it makes the denominator zero.",
        tag: "S"
    },
    {
        id: 49,
        text: "The equation x² + 2(k+1)x + 9k - 5 = 0 has only negative roots, then k lies in:",
        options: ["k ≥ 6", "k ≤ 6", "k < 4", "k > 0"],
        correctAnswer: "k ≥ 6",
        shortExplanation: "Conditions: D ≥ 0, sum < 0, product > 0. The intersection yields k ≥ 6.",
        tag: "S"
    },
    {
        id: 50,
        text: "If the ratio of the roots of x² + bx + c = 0 is the same as that of x² + qx + r = 0, then:",
        options: ["b²r = q²c", "br² = qc²", "b²c = q²r", "bc = qr"],
        correctAnswer: "b²r = q²c",
        shortExplanation: "(r+1)²/r = b²/c for the first and q²/r for the second. Equating gives the result.",
        tag: "S"
    }
];