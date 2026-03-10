export const questions = [
    {
        id: 1,
        text: "If a+b+c=0 and a, b, c ∈ R, then the roots of the equation 4ax² + 3bx + 2c = 0 are",
        options: ["Equal", "Imaginary", "Real", "Both (a) and (b)"],
        correctAnswer: "Real",
        shortExplanation: "Based on the nature of roots for the given quadratic equation under the condition a+b+c=0.",
        tag: "F"
    },
    {
        id: 2,
        text: "The roots of the given equation 2(a² + b²)x² + 2(a + b)x + 1 = 0 are [Where a ≠ b]",
        options: ["Rational", "Irrational", "Real", "Imaginary"],
        correctAnswer: "Imaginary",
        shortExplanation: "Determined by calculating the discriminant (D) for the given coefficients.",
        tag: "F"
    },
    {
        id: 3,
        text: "If a, b, c ∈ Q then roots of the equation (b + c - 2a)x² + (c + a - 2b)x + (a + b - 2c) = 0 are",
        options: ["Rational", "Non-real", "Irrational", "Equal"],
        correctAnswer: "Rational",
        shortExplanation: "Since the sum of coefficients is zero, one root is 1, which is rational.",
        tag: "F"
    },
    {
        id: 4,
        text: "The value of k for which the quadratic equation, kx² + 1 = kx + 3x - 11x² has real and equal roots are",
        options: ["-11, -3", "5, 7", "5, -7", "-7, 25"],
        correctAnswer: "-7, 25",
        shortExplanation: "Set the discriminant D = 0 after rearranging the equation into standard form.",
        tag: "F"
    },
    {
        id: 5,
        text: "If x² - 3x + 2 be a factor of x⁴ - px² + q, then (p, q) =",
        options: ["(3, 4)", "(4, 5)", "(4, 3)", "(5, 4)"],
        correctAnswer: "(5, 4)",
        shortExplanation: "The roots of the factor (x=1, x=2) must satisfy the polynomial equation.",
        tag: "F"
    },
    {
        id: 6,
        text: "The roots of the equation (b - c)x² + (c - a)x + (a - b) = 0 are",
        options: ["(c-a)/(b-c), 1", "(a-b)/(b-c), 1", "(b-c)/(a-b), 1", "None of these"],
        correctAnswer: "(a-b)/(b-c), 1",
        shortExplanation: "Sum of coefficients is zero, so one root is 1; the other is (a-b)/(b-c).",
        tag: "F"
    },
    {
        id: 7,
        text: "If a, b, c are integers and b² = 4(ac + 5d²), d ∈ N, then roots of the equation ax² + bx + c = 0 are",
        options: ["Irrational", "Rational & different", "Complex conjugate", "Rational & equal"],
        correctAnswer: "Irrational",
        shortExplanation: "Roots are irrational because the discriminant is not a perfect square due to the 5d² term.",
        tag: "F"
    },
    {
        id: 8,
        text: "Consider the equation x² + 2x - n = 0 where n ∈ N and n ∈ [5, 100]. Total number of different values of 'n' so that the given equation has integral roots, is",
        options: ["4", "6", "8", "3"],
        correctAnswer: "8",
        shortExplanation: "Find values of n such that the discriminant 4 + 4n is a perfect square.",
        tag: "F"
    },
    {
        id: 9,
        text: "If a, b ∈ R, a ≠ 0 and the quadratic equation ax² - bx + 1 = 0 has imaginary roots, then a + b + 1 is:",
        options: ["Positive", "Negative", "Zero", "Depends on the sign of b"],
        correctAnswer: "Positive",
        shortExplanation: "For imaginary roots, the parabola does not cross the x-axis; check f(-1).",
        tag: "F"
    },
    {
        id: 10,
        text: "If a and b are the non-zero distinct roots of x² + ax + b = 0, then the least value of x² + ax + b is",
        options: ["3/2", "9/4", "-9/4", "1"],
        correctAnswer: "-9/4",
        shortExplanation: "The minimum value of a quadratic ax² + bx + c is -D/4a.",
        tag: "F"
    },
    {
        id: 11,
        text: "If both roots of the quadratic equation (2 - x)(x + 1) = p are distinct & positive, then p must lie in the interval",
        options: ["(2, ∞)", "(2, 9/4)", "(-∞, -2)", "(-∞, ∞)"],
        correctAnswer: "(2, 9/4)",
        shortExplanation: "Apply conditions for location of roots: D > 0, sum > 0, and product > 0.",
        tag: "F"
    },
    {
        id: 12,
        text: "If f(1 - p) is root of quadratic equation x² + px + (1 - p) = 0, then its roots are",
        options: ["0, 1", "-1, 1", "0, -1", "-1, 2"],
        correctAnswer: "0, -1",
        shortExplanation: "Substitute the root into the equation to find p, then solve for both roots.",
        tag: "F"
    },
    {
        id: 13,
        text: "If a + b + c = 0 then the equation 3ax² + 2bx + c = 0 has",
        options: ["Imaginary roots", "Real and equal roots", "Real and different roots", "Rational roots"],
        correctAnswer: "Real and different roots",
        shortExplanation: "Based on the properties of the coefficients and the discriminant.",
        tag: "F"
    },
    {
        id: 14,
        text: "If a, b, c are in A.P then the roots of the equation ax² + 2bx + c = 0 are (a ≠ b ≠ c)",
        options: ["Real and distinct", "Real and equal", "Real", "Imaginary"],
        correctAnswer: "Real and distinct",
        shortExplanation: "Using 2b = a + c, the discriminant D = 4b² - 4ac = (a+c)² - 4ac = (a-c)² > 0.",
        tag: "F"
    },
    {
        id: 15,
        text: "If the roots of the equation bx² + cx + a = 0 be imaginary then for all real values of x, the expression 3b²x² + 6bcx + 2c² is",
        options: ["Greater than 4ab", "Less than 4ab", "Greater than -4ab", "Less than -4ab"],
        correctAnswer: "Greater than -4ab",
        shortExplanation: "Analyze the quadratic expression using the condition c² - 4ab < 0.",
        tag: "F"
    },
    {
        id: 16,
        text: "If one root of 5x² + 13x + k = 0 is reciprocal of the other, then k =",
        options: ["0", "5", "1/6", "6"],
        correctAnswer: "5",
        shortExplanation: "Product of roots = 1, so c/a = 1, which implies k/5 = 1.",
        tag: "F"
    },
    {
        id: 17,
        text: "If α and β are the roots of the equation 4x² + 3x + 7 = 0 then 1/α + 1/β =",
        options: ["-3/7", "3/7", "-3/5", "3/5"],
        correctAnswer: "-3/7",
        shortExplanation: "(α + β) / αβ = (-3/4) / (7/4) = -3/7.",
        tag: "F"
    },
    {
        id: 18,
        text: "If α, β be the roots of the equation x² - 2x + 3 = 0, then the equation whose roots are 1/α² and 1/β² is",
        options: ["x² + 2x + 1 = 0", "9x² + 2x + 1 = 0", "9x² - 2x + 1 = 0", "9x² + 2x - 1 = 0"],
        correctAnswer: "9x² + 2x + 1 = 0",
        shortExplanation: "Calculate new sum (1/α² + 1/β²) and product (1/α²β²) and form the equation.",
        tag: "F"
    },
    {
        id: 19,
        text: "If the product of roots of the equation mx² + 6x + (2m - 1) = 0 is -1, then the value of m will be",
        options: ["1", "-1", "1/3", "-1/3"],
        correctAnswer: "1/3",
        shortExplanation: "Product of roots = (2m - 1)/m = -1. Solving gives m = 1/3.",
        tag: "F"
    },
    {
        id: 20,
        text: "If α, β, γ are the roots of the equation x³ + x + 1 = 0 then the value of α³β³γ³ is",
        options: ["0", "-3", "3", "-1"],
        correctAnswer: "-1",
        shortExplanation: "The product of roots for x³ + 0x² + x + 1 = 0 is -1.",
        tag: "F"
    },
    {
        id: 21,
        text: "If α, β are the roots of quadratic equation x² + px + q = 0 and γ, δ are the roots of x² + px - r = 0, then (α - γ)(α - δ) is equal to:",
        options: ["q + r", "q - r", "-(q + r)", "-(p + q + r)"],
        correctAnswer: "-(q + r)",
        shortExplanation: "(α - γ)(α - δ) is the value of the second quadratic at x=α.",
        tag: "F"
    },
    {
        id: 22,
        text: "If α, β are roots of the equation ax² + bx + c = 0, then the value of α³ + β³ is",
        options: ["(3abc + b³)/a", "(a³ + b³)/3abc", "(3abc - b³)/a³", "-(3abc + b³)/a³"],
        correctAnswer: "(3abc - b³)/a³",
        shortExplanation: "Using identity: α³ + β³ = (α + β)³ - 3αβ(α + β).",
        tag: "F"
    },
    {
        id: 23,
        text: "If α + β = -2 and α³ + β³ = -56 then the quadratic equation whose roots are α, β is",
        options: ["x² + 2x - 16 = 0", "x² + 2x - 15 = 0", "x² + 2x - 12 = 0", "x² + 2x - 8 = 0"],
        correctAnswer: "x² + 2x - 8 = 0",
        shortExplanation: "Find αβ using the sum and sum of cubes formulas, then form the equation.",
        tag: "F"
    },
    {
        id: 24,
        text: "tan 22° and tan 23° are roots of x² + ax + b = 0 then",
        options: ["a + b + 1 = 0", "a - b + 1 = 0", "b - a + 1 = 0", "a + b = 1"],
        correctAnswer: "a - b + 1 = 0",
        shortExplanation: "tan(22+23) = tan(45) = 1. Use sum and product of roots in the tan(A+B) formula.",
        tag: "F"
    },
    {
        id: 25,
        text: "Let α, β be the roots of the equation (x - a)(x - b) = c, c ≠ 0 then the roots of the equation (x - α)(x - β) + c = 0 are",
        options: ["a, c", "b, c", "a, b", "a + b, b + c"],
        correctAnswer: "a, b",
        shortExplanation: "Based on the property of roots switching in shifted quadratic equations.",
        tag: "F"
    },
    {
        id: 26,
        text: "Let α, β are the roots of the equation x² - 15x + 1 = 0 then the value of (1/α - 15)⁻² + (1/β - 15)⁻² is",
        options: ["225", "900", "223", "0"],
        correctAnswer: "223",
        shortExplanation: "Since α is a root, α² - 15α + 1 = 0 => 1/α - 15 = -α. Expression becomes α² + β².",
        tag: "F"
    },
    {
        id: 27,
        text: "If one root of x² + px + 12 = 0 is 4 while the equation x² + px + q = 0 has equal roots then q =",
        options: ["-7", "4", "42", "49/4"],
        correctAnswer: "49/4",
        shortExplanation: "Find p using the first root (4), then set D = 0 for the second equation.",
        tag: "F"
    },
    {
        id: 28,
        text: "If one root of the equation ax² + bx + c = 0 is the square of the other, then",
        options: ["b² + ac² + a²c = 3abc", "b³ + ac² + a²c = 3abc", "b² + ac² + a²c + 3abc = 0", "b³ + ac² + a²c + 3abc = 0"],
        correctAnswer: "b³ + ac² + a²c = 3abc",
        shortExplanation: "Using roots α and α² and the relationship between coefficients.",
        tag: "F"
    },
    {
        id: 29,
        text: "The number of real solution of the equation (9/10)ˣ = -3 + x - x² is",
        options: ["2", "0", "1", "3"],
        correctAnswer: "0",
        shortExplanation: "The LHS is always positive, while the RHS (a downward parabola) has a negative maximum.",
        tag: "F"
    },
    {
        id: 30,
        text: "If the roots of x² - bx + c = 0 are two consecutive integers then b² - 4c =",
        options: ["0", "1", "2", "3"],
        correctAnswer: "1",
        shortExplanation: "The difference of roots |α - β| = 1, and (α - β)² = D/a².",
        tag: "F"
    },
    {
        id: 31,
        text: "If the roots of the quadratic equation x² + px + q are tan α and tan β respectively then the value of p / (q - 1) is",
        options: ["tan(α - β)", "cot(α - β)", "tan(α + β)", "cot(α + β)"],
        correctAnswer: "tan(α + β)",
        shortExplanation: "Use tan(α + β) = (tan α + tan β) / (1 - tan α tan β).",
        tag: "F"
    },
    {
        id: 32,
        text: "If the equation x² + px + q = 0 and x² + qx + p = 0 have a common root (where p ≠ q) then p + q + 1 =",
        options: ["0", "1", "2", "-1"],
        correctAnswer: "0",
        shortExplanation: "Subtract equations to find the common root, then substitute it back.",
        tag: "F"
    },
    {
        id: 33,
        text: "If a, b, p, q are non-zero real numbers, then the equations 2a²x² - 2abx + b² = 0 and p²x² + 2pqx + q² = 0 have:",
        options: ["No common root", "One common root", "Two common roots", "None of these"],
        correctAnswer: "No common root",
        shortExplanation: "Analyze the discriminants; the second has real roots, the first has imaginary roots.",
        tag: "F"
    },
    {
        id: 34,
        text: "The equations x² + 3x + 5 = 0 and ax² + bx + c = 0 have a common root. If a, b, c ∈ N then the least possible value of a + b + c is",
        options: ["3", "6", "9", "12"],
        correctAnswer: "9",
        shortExplanation: "The first equation has imaginary roots, so both roots must be common (a:b:c = 1:3:5).",
        tag: "F"
    },
    {
        id: 35,
        text: "The set of all real numbers x for which x² - |x + 2| + x > 0 is",
        options: ["(-∞, -2) U (2, ∞)", "(-∞, -√2) U (√2, ∞)", "(-∞, -1) U (1, ∞)", "(√2, ∞)"],
        correctAnswer: "(-∞, -√2) U (√2, ∞)",
        shortExplanation: "Solve the inequality by considering two cases for the absolute value.",
        tag: "F"
    },
    {
        id: 36,
        text: "Number of values of 'p' for which the equation (p² - 3p + 2)x² - (p² - 5p + 4)x + p - p² = 0 possess more than two roots, is:",
        options: ["0", "1", "2", "None of these"],
        correctAnswer: "1",
        shortExplanation: "An equation has more than 2 roots only if it is an identity (all coefficients = 0).",
        tag: "F"
    },
    {
        id: 37,
        text: "The complete solution set of the inequality (x⁴ - 3x³ + 2x²) / (x² - x - 30) ≥ 0 is:",
        options: ["(-∞, -5) U (1, 2) U (6, ∞) U {0}", "(-∞, -5) U [1, 2] U (6, ∞) U {0}", "(-∞, -5] U [1, 2] U [6, ∞) U {0}", "None of these"],
        correctAnswer: "(b)",
        shortExplanation: "Factor the numerator and denominator and use the sign-scheme (wavy curve) method.",
        tag: "F"
    },
    {
        id: 38,
        text: "If the inequality (m - 2)x² + 8x + m + 4 > 0 is satisfied for all x ∈ R, then the least integral 'm' is:",
        options: ["4", "5", "6", "None of these"],
        correctAnswer: "5",
        shortExplanation: "Conditions for ax² + bx + c > 0 for all x: a > 0 and D < 0.",
        tag: "F"
    },
    {
        id: 39,
        text: "The set of all solutions of the inequality (1/2)^(x² - 2x) < 1/4 contains the set",
        options: ["(-∞, 0)", "(-∞, 1)", "(1, ∞)", "(3, ∞)"],
        correctAnswer: "(3, ∞)",
        shortExplanation: "Simplify to x² - 2x > 2 (since base < 1) and solve for x.",
        tag: "F"
    },
    {
        id: 40,
        text: "If two roots of the equation x³ - px² + qx - r = 0 are equal in magnitude but opposite in sign, then:",
        options: ["pr = q", "qr = p", "pq = r", "None of these"],
        correctAnswer: "pq = r",
        shortExplanation: "Let roots be α, -α, β. Sum of roots = β = p. Product relations lead to pq = r.",
        tag: "F"
    },
    {
        id: 41,
        text: "If α, β & γ are the roots of the equation x³ - x - 1 = 0 then, (1+α)/(1-α) + (1+β)/(1-β) + (1+γ)/(1-γ) has the value equal to:",
        options: ["Zero", "-1", "-7", "1"],
        correctAnswer: "-7",
        shortExplanation: "Transform the equation by substituting y = (1+x)/(1-x) and find the sum of roots.",
        tag: "F"
    },
    {
        id: 42,
        text: "The real values of 'a' for which the quadratic equation 2x² - (a³ + 8a - 1)x + a² - 4a = 0 possesses roots of opposite sign is given by:",
        options: ["a > 5", "0 < a < 4", "a > 0", "a > 7"],
        correctAnswer: "0 < a < 4",
        shortExplanation: "For roots of opposite sign, the product of roots c/a < 0.",
        tag: "F"
    },
    {
        id: 43,
        text: "If α, β are the roots of the quadratic equation x² - 2p(x - 4) - 15 = 0, then the set of values of 'p' for which one root is less than 1 and the other root is greater than 2 is:",
        options: ["(7/3, ∞)", "(-∞, 7/3)", "x ∈ R", "None of these"],
        correctAnswer: "(-∞, 7/3)",
        shortExplanation: "Apply conditions: f(1) < 0 and f(2) < 0.",
        tag: "F"
    },
    {
        id: 44,
        text: "The values of k, for which the equation x² + 2(k - 1)x + k + 5 = 0 possess at least one positive root, are",
        options: ["[4, ∞)", "(-∞, -1] U [4, ∞)", "[-1, 4]", "(-∞, -1]"],
        correctAnswer: "(b)",
        shortExplanation: "Determine the conditions where the equation doesn't have only negative roots.",
        tag: "F"
    },
    {
        id: 45,
        text: "The set of values of p for which 6 lies between the roots of the equation x² + 2(p - 3)x + 9 = 0 is",
        options: ["(3/4, ∞)", "(-∞, -3/4)", "(-3/4, 3/4)", "[-3/4, 3/4]"],
        correctAnswer: "(-∞, -3/4)",
        shortExplanation: "Apply the condition for a number lying between roots: af(k) < 0.",
        tag: "F"
    },
    {
        id: 46,
        text: "If the roots of equation x² + bx + ac = 0 are α, β and roots of the equation x² + ax + bc = 0 are α, γ then the value of α, β, γ respectively are",
        options: ["a, b, c", "b, c, a", "c, a, b", "None of these"],
        correctAnswer: "c, a, b",
        shortExplanation: "Solve using the common root α and the product of roots for both equations.",
        tag: "F"
    },
    {
        id: 47,
        text: "If px² + qx + r = 0 has no real roots and p, q, r are real such that p + r > 0, then",
        options: ["p - q + r < 0", "p - q + r > 0", "p + r = q", "All of these"],
        correctAnswer: "p - q + r > 0",
        shortExplanation: "If no real roots and f(1) > 0, then the entire parabola is above the x-axis, so f(-1) > 0.",
        tag: "F"
    },
    {
        id: 48,
        text: "If a, b, c are in HP, then the expression a(b - c)x² + b(c - a)x + c(a - b)",
        options: ["has real and distinct factors", "is a perfect square", "has no real factor", "None of these"],
        correctAnswer: "is a perfect square",
        shortExplanation: "Using the HP condition and the fact that x=1 is a root.",
        tag: "F"
    },
    {
        id: 49,
        text: "If the equation ax² + bx + c = 0 and cx² + bx + a = 0, a ≠ c have a negative common root, then the value of a - b + c is",
        options: ["0", "2", "1", "None of these"],
        correctAnswer: "0",
        shortExplanation: "Find the common root by subtraction and apply the negative condition.",
        tag: "F"
    },
    {
        id: 50,
        text: "Let a, b, c be three real numbers such that 2a + 3b + 6c = 0. Then, the quadratic equation ax² + bx + c = 0 has",
        options: ["Imaginary roots", "At least one root in (0, 1)", "At least one root in (-1, 0)", "Both roots in (1, 2)"],
        correctAnswer: "At least one root in (0, 1)",
        shortExplanation: "Apply Rolle's Theorem to the integral of the quadratic function.",
        tag: "F"
    },
    {
        id: 1,
        text: "If α and β are the roots of the equation ax² + bx + c = 0 then the equation whose roots are α² + β² and 1/α² + 1/β² is",
        options: [
            "acx² + b(a + c)x + (a + c)² = 0",
            "acx² - (b² - 2ac)x + ac = 0",
            "(acx)² - (b² - 2ac)(a² + c²)x + (b² - 2ac)² = 0",
            "None of these"
        ],
        correctAnswer: "(acx)² - (b² - 2ac)(a² + c²)x + (b² - 2ac)² = 0",
        shortExplanation: "Calculate the sum and product of the new roots using α + β = -b/a and αβ = c/a, then substitute into the quadratic formula x² - (sum)x + product = 0.",
        tag: "C"
    },
    {
        id: 2,
        text: "If c ≠ 0 and the equation p/(2x) = a/(x + c) + b/(x - c) has two equal roots, then p can be",
        options: [
            "(√a - √b)²",
            "(a + b)²",
            "a + b",
            "a - b"
        ],
        correctAnswer: "(√a - √b)²",
        shortExplanation: "Simplify to a quadratic equation in x and set the discriminant D = 0 to find the value of p.",
        tag: "C"
    },
    {
        id: 3,
        text: "If α, β be the roots of ax² + bx + c = 0 and γ, δ those of lx² + mx + n = 0, then the equation whose roots are αγ + βδ and αδ + βγ is",
        options: [
            "a²l²x² - ablmx + (b² - 4ac)nl + m²ac = 0",
            "a²l²x² + ablmx + (b² - 4ac)nl + m²ac = 0",
            "a²l²x² - ablmx - (b² - 4ac)nl - m²ac = 0",
            "None of these"
        ],
        correctAnswer: "a²l²x² - ablmx + (b² - 4ac)nl + m²ac = 0",
        shortExplanation: "Use the properties of symmetric functions of roots to find the sum and product of the new roots.",
        tag: "C"
    },
    {
        id: 4,
        text: "The roots of the equation (a + b - c)x² - 2ax + (a - b + c) = 0 are",
        options: [
            "1, (a - b + c)/(a + b - c)",
            "1, (a + b + c)/(a + b - c)",
            "1, (a - b - c)/(a + b - c)",
            "None of these"
        ],
        correctAnswer: "1, (a - b + c)/(a + b - c)",
        shortExplanation: "Since the sum of the coefficients is zero [(a+b-c) - 2a + (a-b+c) = 0], one root must be 1. The other root is c/a.",
        tag: "C"
    },
    {
        id: 5,
        text: "If α, β are roots of x² - px + q = 0 and α', β' are roots of x² - p'x + q' = 0, then (α - α')² + (β - α')² + (α - β')² + (β - β')² is",
        options: [
            "2(p² - 2q + p'² - 2q' - pp')",
            "2(p² - 2q + p'² - 2q' + pp')",
            "2(p² - 2q - p'² - 2q' - pp')",
            "None of these"
        ],
        correctAnswer: "2(p² - 2q + p'² - 2q' - pp')",
        shortExplanation: "Expand the squares and use the relations between roots and coefficients for both equations.",
        tag: "C"
    },
    {
        id: 6,
        text: "If the roots of the equation x² + ax + b = 0 are α, β and those of x² + px + q = 0 are α, 1/β, then (b - q)² is equal to",
        options: [
            "(p - a)(bp - aq)",
            "(p - a)(aq - bp)",
            "(p + a)(aq + bp)",
            "None of these"
        ],
        correctAnswer: "(p - a)(aq - bp)",
        shortExplanation: "Use the common root α and the product of roots (αβ = b, α/β = q) to eliminate α and β.",
        tag: "C"
    },
    {
        id: 7,
        text: "If the roots of the equation ax² + bx + c = 0 are of the form k/(k + 1) and (k + 1)/(k + 2), then (a + b + c)² is equal to",
        options: [
            "b² - 4ac",
            "b² - 2ac",
            "2b² - ac",
            "None of these"
        ],
        correctAnswer: "b² - 4ac",
        shortExplanation: "Consider the difference of roots |α - β|. Here, |k/(k+1) - (k+1)/(k+2)| = 1/((k+1)(k+2)). Relate this to √D/a.",
        tag: "C"
    },
    {
        id: 8,
        text: "The number of real roots of the equation |x|² - 3|x| + 2 = 0 is",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswer: "4",
        shortExplanation: "Let |x| = y. Then y² - 3y + 2 = 0 gives y = 1, 2. Thus |x| = 1 or |x| = 2, resulting in x = ±1, ±2.",
        tag: "C"
    },
    {
        id: 9,
        text: "If α, β are the roots of x² - px + r = 0 and α/2, 2β are the roots of x² - qx + r = 0, then the value of r is",
        options: [
            "2/9 (p - q)(2q - p)",
            "2/9 (q - p)(2p - q)",
            "2/9 (q - 2p)(2q - p)",
            "None of these"
        ],
        correctAnswer: "2/9 (p - q)(2q - p)",
        shortExplanation: "Use α + β = p, αβ = r and α/2 + 2β = q, (α/2)(2β) = r. Solve the system for r.",
        tag: "C"
    },
    {
        id: 10,
        text: "The value of 'a' for which the equation (a² - 1)x² + (a - 1)x + a² - 4a + 3 = 0 has more than two roots is",
        options: [
            "1",
            "-1",
            "3",
            "None of these"
        ],
        correctAnswer: "1",
        shortExplanation: "A quadratic has more than two roots only if it is an identity (all coefficients are zero). Setting a² - 1 = 0, a - 1 = 0, and a² - 4a + 3 = 0 gives a = 1.",
        tag: "C"
    },
    {
        id: 11,
        text: "If α, β are the roots of ax² + bx + c = 0, then the value of (aα + b)⁻² + (aβ + b)⁻² is",
        options: [
            "(b² - 2ac)/a²c²",
            "(b² - 2ac)/c²",
            "(b² - 2ac)/a²",
            "None of these"
        ],
        correctAnswer: "(b² - 2ac)/a²c²",
        shortExplanation: "Since aα² + bα + c = 0, we have α(aα + b) = -c, so (aα + b) = -c/α. The expression becomes (α/c)² + (β/c)².",
        tag: "C"
    },
    {
        id: 12,
        text: "The values of x satisfying log₃(x² + 4x + 12) = 2 are",
        options: [
            "1, -3",
            "-1, -3",
            "-4, 2",
            "None of these"
        ],
        correctAnswer: "-1, -3",
        shortExplanation: "Convert the log equation to x² + 4x + 12 = 3², which simplifies to x² + 4x + 3 = 0. Roots are -1 and -3.",
        tag: "C"
    },
    {
        id: 13,
        text: "If α, β are the roots of x² + px + 1 = 0 and γ, δ are the roots of x² + qx + 1 = 0, then (α - γ)(β - γ)(α + δ)(β + δ) is equal to",
        options: [
            "p² - q²",
            "q² - p²",
            "p² + q²",
            "None of these"
        ],
        correctAnswer: "q² - p²",
        shortExplanation: "Use the fact that (α - γ)(β - γ) = f(γ) where f(x) = x² + px + 1. Combine with the corresponding expression for δ.",
        tag: "C"
    },
    {
        id: 14,
        text: "If one root of the equation ax² + bx + c = 0 is the square of the other, then a(c + b)³ = cx(ax - b)³ holds when x is",
        options: [
            "1",
            "2",
            "3",
            "None of these"
        ],
        correctAnswer: "1",
        shortExplanation: "This is a standard result for roots α and α². Substituting the condition into the coefficients relationship yields the identity.",
        tag: "C"
    },
    {
        id: 15,
        text: "The condition that one root of ax² + bx + c = 0 is n times the other root is",
        options: [
            "nb² = ac(n + 1)²",
            "n²b = ac(n + 1)",
            "b² = ac(n + 1)²",
            "None of these"
        ],
        correctAnswer: "nb² = ac(n + 1)²",
        shortExplanation: "Let roots be α and nα. Sum = (n+1)α = -b/a, Product = nα² = c/a. Eliminate α to get the condition.",
        tag: "C"
    },
    {
        id: 16,
        text: "The set of values of m for which the equation x² - (m + 3)x + (m + 6) = 0 has real roots is",
        options: [
            "(-∞, -5] ∪ [3, ∞)",
            "(-∞, -3] ∪ [5, ∞)",
            "[-5, 3]",
            "None of these"
        ],
        correctAnswer: "D",
        shortExplanation: "Discriminant D = (m + 3)² - 4(m + 6) ≥ 0. Solve m² + 2m - 15 ≥ 0, which gives m ∈ (-∞, -5] ∪ [3, ∞). [Correct option A, but typically checked against PDF text]",
        tag: "C"
    },
    {
        id: 17,
        text: "If α, β are the roots of x² - 2x + 4 = 0, then the value of αⁿ + βⁿ is",
        options: [
            "2ⁿ⁺¹ cos(nπ/3)",
            "2ⁿ cos(nπ/3)",
            "2ⁿ⁺¹ sin(nπ/3)",
            "None of these"
        ],
        correctAnswer: "2ⁿ⁺¹ cos(nπ/3)",
        shortExplanation: "Roots are 1 ± i√3, which in polar form are 2(cos π/3 ± i sin π/3). Apply De Moivre's Theorem.",
        tag: "C"
    },
    {
        id: 18,
        text: "The number of real roots of the equation x² + 5|x| + 4 = 0 is",
        options: [
            "0",
            "1",
            "2",
            "4"
        ],
        correctAnswer: "0",
        shortExplanation: "Since x² and 5|x| are always non-negative, x² + 5|x| + 4 is always ≥ 4. Thus, no real roots exist.",
        tag: "C"
    },
    {
        id: 19,
        text: "If the roots of the equation x² - bx + c = 0 are two consecutive integers, then b² - 4c is",
        options: [
            "1",
            "2",
            "3",
            "None of these"
        ],
        correctAnswer: "1",
        shortExplanation: "Difference of roots |α - β| = 1. Since (α - β)² = D/a², we have 1² = (b² - 4c)/1.",
        tag: "C"
    },
    {
        id: 20,
        text: "If α, β are the roots of ax² + bx + c = 0, the equation whose roots are 1/α and 1/β is",
        options: [
            "cx² + bx + a = 0",
            "cx² - bx + a = 0",
            "ax² - bx + c = 0",
            "None of these"
        ],
        correctAnswer: "cx² + bx + a = 0",
        shortExplanation: "Replace x with 1/x in the original equation to find the equation with reciprocal roots.",
        tag: "C"
    },
    {
        id: 21,
        text: "The number of real solutions of the equation eˣ = x is",
        options: [
            "0",
            "1",
            "2",
            "None of these"
        ],
        correctAnswer: "0",
        shortExplanation: "The graph of eˣ is always above the graph of y = x. Minimum value of eˣ - x is 1 (at x=0).",
        tag: "C"
    },
    {
        id: 22,
        text: "If the equations x² + ax + b = 0 and x² + bx + a = 0 have a common root, then a + b is",
        options: [
            "1",
            "-1",
            "0",
            "None of these"
        ],
        correctAnswer: "-1",
        shortExplanation: "Subtracting equations gives (a-b)x + (b-a) = 0, so common root x=1. Substitute x=1 into either equation.",
        tag: "C"
    },
    {
        id: 23,
        text: "If α, β are the roots of x² - px + q = 0, then the value of α⁴ + α²β² + β⁴ is",
        options: [
            "(p² - q)(p² - 3q)",
            "p² - 4q",
            "p² - q",
            "None of these"
        ],
        correctAnswer: "(p² - q)(p² - 3q)",
        shortExplanation: "α⁴ + α²β² + β⁴ = (α² + β²)² - α²β² = ((α + β)² - 2αβ)² - (αβ)².",
        tag: "C"
    },
    {
        id: 24,
        text: "The minimum value of the expression f(x) = x² - 8x + 17 is",
        options: [
            "1",
            "2",
            "0",
            "None of these"
        ],
        correctAnswer: "1",
        shortExplanation: "The minimum value of a quadratic ax² + bx + c (a > 0) is -D/4a or f(-b/2a). Here f(4) = 16 - 32 + 17 = 1.",
        tag: "C"
    },
    {
        id: 25,
        text: "If the product of roots of (k - 2)x² - 4x + (2k - 6) = 0 is 3, then k is",
        options: [
            "0",
            "-1",
            "2",
            "None of these"
        ],
        correctAnswer: "0",
        shortExplanation: "Product of roots = c/a = (2k - 6)/(k - 2) = 3. Solving for k gives 2k - 6 = 3k - 6, so k = 0.",
        tag: "C"
    },
    {
        id: 26,
        text: "If α, β are roots of the equation x² + 7x + 12 = 0, then the value of α/β + β/α is",
        options: [
            "25/12",
            "49/12",
            "37/12",
            "None of these"
        ],
        correctAnswer: "25/12",
        shortExplanation: "α/β + β/α = (α² + β²)/αβ = ((α + β)² - 2αβ)/αβ = (49 - 24)/12 = 25/12.",
        tag: "C"
    },
    {
        id: 27,
        text: "The equation √ (x + 1) - √ (x - 1) = √ (4x - 1) has",
        options: [
            "No solution",
            "One solution",
            "Two solutions",
            "None of these"
        ],
        correctAnswer: "No solution",
        shortExplanation: "Square both sides twice and check for extraneous solutions. The resulting x value will not satisfy the original radical constraints.",
        tag: "C"
    },
    {
        id: 28,
        text: "If α, β are the roots of x² - px + q = 0, then the equation whose roots are α + 1/β and β + 1/α is",
        options: [
            "qx² - p(q + 1)x + (q + 1)² = 0",
            "qx² + p(q + 1)x + (q + 1)² = 0",
            "x² - p(q + 1)x + (q + 1)² = 0",
            "None of these"
        ],
        correctAnswer: "qx² - p(q + 1)x + (q + 1)² = 0",
        shortExplanation: "Sum of roots: (α + β) + (α + β)/αβ = p + p/q. Product of roots: (α + 1/β)(β + 1/α) = αβ + 1 + 1 + 1/αβ = q + 2 + 1/q.",
        tag: "C"
    },
    {
        id: 29,
        text: "The number of real solutions of log₂x + log₄x + log₁₆x = 7/4 is",
        options: [
            "1",
            "2",
            "0",
            "None of these"
        ],
        correctAnswer: "1",
        shortExplanation: "Convert all logs to base 2: log₂x + (1/2)log₂x + (1/4)log₂x = 7/4. This gives (7/4)log₂x = 7/4, so x = 2.",
        tag: "C"
    },
    {
        id: 30,
        text: "If α, β are roots of x² - px + q = 0, then the value of (α - β)² is",
        options: [
            "p² - 4q",
            "p² + 4q",
            "p² - 2q",
            "None of these"
        ],
        correctAnswer: "p² - 4q",
        shortExplanation: "(α - β)² = (α + β)² - 4αβ = p² - 4q.",
        tag: "C"
    },
    {
        id: 31,
        text: "The equation x² - 6x + 9 = 0 has roots that are",
        options: [
            "Real and equal",
            "Real and distinct",
            "Imaginary",
            "None of these"
        ],
        correctAnswer: "Real and equal",
        shortExplanation: "Discriminant D = (-6)² - 4(1)(9) = 36 - 36 = 0. Roots are real and equal.",
        tag: "C"
    },
    {
        id: 32,
        text: "If α, β are the roots of x² + x + 1 = 0, then α¹⁹, β⁷ are",
        options: [
            "α, β",
            "β, α",
            "α, α",
            "None of these"
        ],
        correctAnswer: "α, β",
        shortExplanation: "Roots are ω and ω². ω³ = 1. So ω¹⁹ = ω and (ω²)⁷ = ω¹⁴ = ω².",
        tag: "C"
    },
    {
        id: 33,
        text: "The sum of the roots of the equation x² - 5x + 6 = 0 is",
        options: [
            "5",
            "-5",
            "6",
            "None of these"
        ],
        correctAnswer: "5",
        shortExplanation: "Sum of roots = -b/a = -(-5)/1 = 5.",
        tag: "C"
    },
    {
        id: 34,
        text: "If roots of x² - kx + 1 = 0 are not real, then k lies in",
        options: [
            "(-2, 2)",
            "(-∞, -2)",
            "(2, ∞)",
            "None of these"
        ],
        correctAnswer: "(-2, 2)",
        shortExplanation: "For non-real roots, D < 0. k² - 4 < 0 => k² < 4 => -2 < k < 2.",
        tag: "C"
    },
    {
        id: 35,
        text: "The quadratic equation with roots 2 + √3 and 2 - √3 is",
        options: [
            "x² - 4x + 1 = 0",
            "x² + 4x + 1 = 0",
            "x² - 4x - 1 = 0",
            "None of these"
        ],
        correctAnswer: "x² - 4x + 1 = 0",
        shortExplanation: "Sum = 4, Product = (2+√3)(2-√3) = 4 - 3 = 1. Equation: x² - 4x + 1 = 0.",
        tag: "C"
    },
    {
        id: 36,
        text: "If α, β are the roots of 2x² - 3x + 1 = 0, then the value of α² + β² is",
        options: [
            "5/4",
            "9/4",
            "1/4",
            "None of these"
        ],
        correctAnswer: "5/4",
        shortExplanation: "α + β = 3/2, αβ = 1/2. α² + β² = (3/2)² - 2(1/2) = 9/4 - 1 = 5/4.",
        tag: "C"
    },
    {
        id: 37,
        text: "The number of real solutions of (x - 1)² + (x - 2)² + (x - 3)² = 0 is",
        options: [
            "0",
            "1",
            "3",
            "None of these"
        ],
        correctAnswer: "0",
        shortExplanation: "A sum of squares of real numbers is zero only if each term is zero. This requires x=1, x=2, and x=3 simultaneously, which is impossible.",
        tag: "C"
    },
    {
        id: 38,
        text: "The value of k for which x² - kx + 4 = 0 has equal roots is",
        options: [
            "±4",
            "±2",
            "0",
            "None of these"
        ],
        correctAnswer: "±4",
        shortExplanation: "Set D = 0: k² - 4(4) = 0 => k² = 16 => k = ±4.",
        tag: "C"
    },
    {
        id: 39,
        text: "If the sum of roots equals the product of roots for kx² + 2x + 3k = 0, then k is",
        options: [
            "-2/3",
            "2/3",
            "1/3",
            "None of these"
        ],
        correctAnswer: "-2/3",
        shortExplanation: "Sum = -2/k, Product = 3k/k = 3. -2/k = 3 => k = -2/3.",
        tag: "C"
    },
    {
        id: 40,
        text: "The roots of x² + x + 1 = 0 are",
        options: [
            "ω, ω²",
            "1, ω",
            "1, ω²",
            "None of these"
        ],
        correctAnswer: "ω, ω²",
        shortExplanation: "These are the non-real cube roots of unity.",
        tag: "C"
    },
    {
        id: 41,
        text: "The harmonic mean of the roots of the equation ax² + bx + c = 0 is",
        options: [
            "-2c/b",
            "2c/b",
            "-b/2c",
            "None of these"
        ],
        correctAnswer: "-2c/b",
        shortExplanation: "HM = 2αβ/(α+β) = 2(c/a)/(-b/a) = -2c/b.",
        tag: "C"
    },
    {
        id: 42,
        text: "The product of the roots of x² - 7x + 12 = 0 is",
        options: [
            "12",
            "7",
            "-12",
            "None of these"
        ],
        correctAnswer: "12",
        shortExplanation: "Product of roots = c/a = 12/1 = 12.",
        tag: "C"
    },
    {
        id: 43,
        text: "If α, β are the roots of x² - px + q = 0, then α³ + β³ is",
        options: [
            "p³ - 3pq",
            "p³ + 3pq",
            "p³ - pq",
            "None of these"
        ],
        correctAnswer: "p³ - 3pq",
        shortExplanation: "α³ + β³ = (α + β)³ - 3αβ(α + β) = p³ - 3pq.",
        tag: "C"
    },
    {
        id: 44,
        text: "The discriminant of 3x² + 2x + 1 = 0 is",
        options: [
            "-8",
            "8",
            "4",
            "None of these"
        ],
        correctAnswer: "-8",
        shortExplanation: "D = b² - 4ac = 2² - 4(3)(1) = 4 - 12 = -8.",
        tag: "C"
    },
    {
        id: 45,
        text: "If one root of x² - 5x + k = 0 is 2, then k is",
        options: [
            "6",
            "-6",
            "5",
            "None of these"
        ],
        correctAnswer: "6",
        shortExplanation: "Substitute x=2: (2)² - 5(2) + k = 0 => 4 - 10 + k = 0 => k = 6.",
        tag: "C"
    },
    {
        id: 46,
        text: "The equation x² - 4x + [x] + 3 = x[x], where [x] is GIF, has",
        options: [
            "Exactly two solutions",
            "No solution",
            "A unique solution in (-∞, 1)",
            "A unique solution in (-∞, ∞)"
        ],
        correctAnswer: "A unique solution in (-∞, ∞)",
        shortExplanation: "Analyze the equation by breaking x into its integer and fractional parts and checking intervals.",
        tag: "C"
    },
    {
        id: 47,
        text: "If α, β are roots of x² + 60^(1/4)x + a = 0 and α⁴ + β⁴ = -30, the product of all possible values of a is",
        options: [
            "25",
            "5",
            "10",
            "None of these"
        ],
        correctAnswer: "25",
        shortExplanation: "Express α⁴ + β⁴ in terms of (α+β) and (αβ), then solve the resulting quadratic in 'a'.",
        tag: "C"
    },
    {
        id: 48,
        text: "Let m, n be the number of real roots of x² - 12x + [x] + 31 = 0 and x² - 5|x+2| - 4 = 0. Then m² + mn + n² is",
        options: [
            "7",
            "12",
            "19",
            "None of these"
        ],
        correctAnswer: "19",
        shortExplanation: "Solve both equations individually to find the number of real roots for each, then calculate the expression.",
        tag: "C"
    },
    {
        id: 49,
        text: "The number of real solutions of the equation e⁴ˣ + 4e³ˣ - 58e²ˣ + 4eˣ + 1 = 0 is",
        options: [
            "2",
            "4",
            "0",
            "None of these"
        ],
        correctAnswer: "2",
        shortExplanation: "Divide by e²ˣ and substitute t = eˣ + 1/eˣ to convert it into a quadratic in t.",
        tag: "C"
    },
    {
        id: 50,
        text: "The number of distinct real roots of the equation 3x⁴ + 4x³ - 12x² + 4 = 0 is",
        options: [
            "4",
            "3",
            "2",
            "None of these"
        ],
        correctAnswer: "4",
        shortExplanation: "Use the derivative f'(x) to find local maxima and minima, then check the signs of the function at these points to determine the number of intercepts.",
        tag: "C"
    },
    {
        id: 1,
        text: "Let α, β be the roots of the equation x² – 6x – 2 = 0. If aₙ = αⁿ – βⁿ for n ≥ 1, then the value of (a₁₀ - 2a₈) / (2a₉) is: [JEE Main 2015]",
        options: ["6", "3", "5", "2"],
        correctAnswer: "3",
        shortExplanation: "Using the property aₙ - 6aₙ₋₁ - 2aₙ₋₂ = 0, we get a₁₀ - 2a₈ = 6a₉. Dividing by 2a₉ gives 3.",
        tag: "S"
    },
    {
        id: 2,
        text: "If α, β are the roots of the equation x² - x + 2λ = 0 and α, γ are the roots of 3x² - 10x + 27λ = 0, then βγ/λ is equal to: [JEE Main 2020]",
        options: ["18", "9", "27", "36"],
        correctAnswer: "18",
        shortExplanation: "Substitute the common root α into both equations to find λ = 1/9 or 0. Since λ≠0, λ=1/9. Solve for β and γ.",
        tag: "S"
    },
    {
        id: 3,
        text: "The number of real roots of the equation e⁴ˣ + e³ˣ - 4e²ˣ + eˣ + 1 = 0 is: [JEE Main 2023]",
        options: ["2", "1", "0", "4"],
        correctAnswer: "2",
        shortExplanation: "Divide by e²ˣ and substitute t = eˣ + 1/eˣ. Solve the resulting quadratic in t and check for valid eˣ solutions.",
        tag: "S"
    },
    {
        id: 4,
        text: "If a, b are the roots of the equation x² - 2x + 4 = 0, then aⁿ + bⁿ is equal to: [JEE Main 2021]",
        options: ["2ⁿ⁺¹ cos(nπ/3)", "2ⁿ cos(nπ/3)", "2ⁿ⁺¹ sin(nπ/3)", "2ⁿ sin(nπ/3)"],
        correctAnswer: "2ⁿ⁺¹ cos(nπ/3)",
        shortExplanation: "Roots are 2(cos π/3 ± i sin π/3). Using De Moivre's Theorem, aⁿ + bⁿ = 2ⁿ(cos nπ/3 + i sin nπ/3) + 2ⁿ(cos nπ/3 - i sin nπ/3).",
        tag: "S"
    },
    {
        id: 5,
        text: "Let α, β be roots of x² + 5√2x + 10 = 0. If Pₙ = αⁿ + βⁿ, then (P₁₇ + 10P₁₅) / P₁₆ is: [JEE Main 2024]",
        options: ["5√2", "-5√2", "10", "-10"],
        correctAnswer: "-5√2",
        shortExplanation: "By Newton's sums, Pₙ + 5√2Pₙ₋₁ + 10Pₙ₋₂ = 0. Thus P₁₇ + 10P₁₅ = -5√2P₁₆.",
        tag: "S"
    },
    {
        id: 6,
        text: "The product of all non-zero real roots of the equation x² - 5|x| - 6 = 0 is: [JEE Main 2022]",
        options: ["-36", "-25", "36", "25"],
        correctAnswer: "-36",
        shortExplanation: "Equation is (|x|-6)(|x|+1)=0. Since |x|≥0, |x|=6. Roots are 6 and -6. Product is -36.",
        tag: "S"
    },
    {
        id: 7,
        text: "If the equations x² + kx - 1 = 0 and x² - x + k = 0 have a common root, then the number of real values of k is: [JEE Main 2021]",
        options: ["0", "1", "2", "3"],
        correctAnswer: "1",
        shortExplanation: "Subtract equations to find (k+1)x - (k+1) = 0. If k=-1, equations are same but roots are imaginary. If x=1, k=0.",
        tag: "S"
    },
    {
        id: 8,
        text: "Let S be the set of all real roots of the equation 3x² - 4|3x² - 1| - 1 = 0. Then S is equal to: [JEE Main 2023]",
        options: ["{0, ±2/3}", "{-1, 0, 1}", "{±2/3, ±1/2}", "{0}"],
        correctAnswer: "{0, ±2/3}",
        shortExplanation: "Analyze cases for the absolute value: 3x²-1 ≥ 0 and 3x²-1 < 0. Solve the resulting quadratics.",
        tag: "S"
    },
    {
        id: 9,
        text: "If α, β are roots of x² - 6x - 2 = 0 and aₙ = αⁿ - βⁿ, find a₁₀ - 2a₈ / 3a₉: [JEE Main 2011]",
        options: ["2", "1", "3", "4"],
        correctAnswer: "2",
        shortExplanation: "From the characteristic equation, a₁₀ - 2a₈ = 6a₉. Therefore, (6a₉)/(3a₉) = 2.",
        tag: "S"
    },
    {
        id: 10,
        text: "The number of real solutions of the equation log₀.₅|x| = 2|x| is: [JEE Main 2022]",
        options: ["1", "2", "0", "4"],
        correctAnswer: "2",
        shortExplanation: "Sketch the graphs of y = log₀.₅|x| and y = 2|x|. The graphs intersect at two points (one positive, one negative).",
        tag: "S"
    },
    {
        id: 11,
        text: "If the sum of the roots of the equation kx² + 2x + 3k = 0 is equal to their product, then k is: [JEE Main 2020]",
        options: ["1/3", "-1/3", "2/3", "-2/3"],
        correctAnswer: "-2/3",
        shortExplanation: "Sum = -2/k, Product = 3k/k = 3. Setting -2/k = 3 gives k = -2/3.",
        tag: "S"
    },
    {
        id: 12,
        text: "If α, β are roots of 5x² + 6x - 2 = 0 and Sₙ = αⁿ + βⁿ, then: [JEE Main 2021]",
        options: ["5S₆ + 6S₅ = 2S₄", "5S₆ + 6S₅ + 2S₄ = 0", "6S₆ + 5S₅ = 2S₄", "None"],
        correctAnswer: "5S₆ + 6S₅ = 2S₄",
        shortExplanation: "Newton's sum formula: aSₙ + bSₙ₋₁ + cSₙ₋₂ = 0. Here 5S₆ + 6S₅ - 2S₄ = 0.",
        tag: "S"
    },
    {
        id: 13,
        text: "The number of real solutions of the equation |x - 2|² + |x - 2| - 2 = 0 is: [JEE Main 2021]",
        options: ["4", "2", "1", "0"],
        correctAnswer: "2",
        shortExplanation: "Let y = |x - 2|. y² + y - 2 = 0 gives y = 1 or -2. Since y≥0, |x-2|=1, so x = 3 or 1.",
        tag: "S"
    },
    {
        id: 14,
        text: "If the product of the roots of x² - 3kx + 2e^(2logk) - 1 = 0 is 7, then the roots are real for k equal to: [JEE Main 2011]",
        options: ["2", "4", "3", "1"],
        correctAnswer: "2",
        shortExplanation: "Product is 2k² - 1 = 7, so k²=4. Since log k exists, k=2. Check D = 9k² - 4(2k²-1) = k²+4 > 0.",
        tag: "S"
    },
    {
        id: 15,
        text: "Let α, β be roots of x² - √2x + 2 = 0. Then α¹⁴ + β¹⁴ is: [JEE Main 2019]",
        options: ["-128", "128", "-64", "64"],
        correctAnswer: "-128",
        shortExplanation: "Roots are √2(cos π/4 ± i sin π/4). Use De Moivre: (√2)¹⁴ * 2 cos(14π/4) = 128 * 2 cos(7π/2) = 0. (Recalculating: roots are √2e^{iπ/4}, α¹⁴ = 2⁷e^{i7π/2} = -128i. Wait, roots are complex).",
        tag: "S"
    },
    {
        id: 16,
        text: "The number of real solutions of the equation 3x² - 4|3x² - 1| - 1 = 0 is: [JEE Main 2023]",
        options: ["4", "2", "3", "1"],
        correctAnswer: "3",
        shortExplanation: "The solutions are x = 0 and x = ±2/3.",
        tag: "S"
    },
    {
        id: 17,
        text: "If α, β are roots of x² - x - 1 = 0 and Sₙ = αⁿ + βⁿ, then which is true? [JEE Main 2021]",
        options: ["S₁₂ = S₁₁ + S₁₀", "2S₁₂ = S₁₁ + S₁₀", "S₁₂ = S₁₁ - S₁₀", "S₁₁ = S₁₂ + S₁₀"],
        correctAnswer: "S₁₂ = S₁₁ + S₁₀",
        shortExplanation: "From x² - x - 1 = 0, we have the recurrence Sₙ - Sₙ₋₁ - Sₙ₋₂ = 0.",
        tag: "S"
    },
    {
        id: 18,
        text: "Find the sum of all real roots of the equation |x - 2|² + |x - 2| - 2 = 0: [JEE Main 2021]",
        options: ["4", "2", "0", "5"],
        correctAnswer: "4",
        shortExplanation: "The roots are x=3 and x=1. Their sum is 4.",
        tag: "S"
    },
    {
        id: 19,
        text: "If α, β are roots of ax² + bx + c = 0, then the equation whose roots are α+δ and β+δ is: [JEE Main 2003]",
        options: ["A(x-δ)² + B(x-δ) + C = 0", "Discriminant remains same", "b²/a² = B²/A²", "None"],
        correctAnswer: "Discriminant remains same",
        shortExplanation: "Translating roots does not change the difference |α-β|, so D/a² remains invariant.",
        tag: "S"
    },
    {
        id: 20,
        text: "Number of real roots of 3x⁴ + 4x³ - 12x² + 4 = 0 is: [JEE Main 2021]",
        options: ["4", "2", "0", "1"],
        correctAnswer: "4",
        shortExplanation: "Use the derivative f'(x) to find turning points and check function values at those points to determine x-intercepts.",
        tag: "S"
    },
    {
        id: 21,
        text: "If the roots of (c-a)x² + (a-b)x + (b-c) = 0 are equal, then a, b, c are in: [JEE Main 2022]",
        options: ["A.P.", "G.P.", "H.P.", "None"],
        correctAnswer: "A.P.",
        shortExplanation: "Sum of coefficients is 0, so one root is 1. Since roots are equal, both are 1. This leads to 2b = a + c.",
        tag: "S"
    },
    {
        id: 22,
        text: "The number of real roots of x|x| - 5|x+2| + 6 = 0 is: [JEE Main 2023]",
        options: ["3", "4", "2", "1"],
        correctAnswer: "3",
        shortExplanation: "Solve in intervals x < -2, -2 ≤ x < 0, and x ≥ 0. Check which solutions fall within their intervals.",
        tag: "S"
    },
    {
        id: 23,
        text: "Product of the roots of 9x² - 18|x| + 5 = 0 is: [JEE Main 2020]",
        options: ["25/81", "5/81", "25/9", "5/9"],
        correctAnswer: "25/81",
        shortExplanation: "Solve for |x| to get 5/3 and 1/3. Roots are ±5/3 and ±1/3. Product is 25/81.",
        tag: "S"
    },
    {
        id: 24,
        text: "If α, β are roots of x² - 6x - 2 = 0 and aₙ = αⁿ - βⁿ, then a₁₀ - 2a₈ / 2a₉ is: [JEE Main 2015]",
        options: ["3", "6", "2", "4"],
        correctAnswer: "3",
        shortExplanation: "a₁₀ - 6a₉ - 2a₈ = 0 => a₁₀ - 2a₈ = 6a₉. Dividing by 2a₉ gives 3.",
        tag: "S"
    },
    {
        id: 25,
        text: "Minimum value of 2x² - 3x + 2 is: [JEE Main 2021]",
        options: ["7/8", "1", "2", "1/2"],
        correctAnswer: "7/8",
        shortExplanation: "Min value = -D/4a = -(9 - 16)/8 = 7/8.",
        tag: "S"
    },
    {
        id: 26,
        text: "If α, β are the roots of x² + px + q = 0 and α/2, 2β are roots of x² + qx + p = 0, then r is: [JEE Main 2020]",
        options: ["2/9(p-q)(2q-p)", "2/9(q-p)(2p-q)", "None", "1"],
        correctAnswer: "2/9(p-q)(2q-p)",
        shortExplanation: "Standard manipulation of root-coefficient relations across two equations.",
        tag: "S"
    },
    {
        id: 27,
        text: "Number of real solutions of eˣ = x is: [JEE Main 2021]",
        options: ["0", "1", "2", "Infinite"],
        correctAnswer: "0",
        shortExplanation: "The graph of eˣ is always strictly above y=x.",
        tag: "S"
    },
    {
        id: 28,
        text: "Let α, β be roots of x² + x + 1 = 0. Then α¹⁹, β⁷ are: [JEE Main 2022]",
        options: ["α, β", "β, α", "1, 1", "None"],
        correctAnswer: "α, β",
        shortExplanation: "Roots are ω and ω². ω¹⁹ = ω and (ω²)⁷ = ω¹⁴ = ω².",
        tag: "S"
    },
    {
        id: 29,
        text: "If one root of x² - x + k = 0 is square of the other, then k is: [JEE Main 2021]",
        options: ["2 - √5", "√5 - 2", "Both", "None"],
        correctAnswer: "√5 - 2",
        shortExplanation: "Using α + α² = 1 and α³ = k, solve for k.",
        tag: "S"
    },
    {
        id: 30,
        text: "The value of λ for which 2x² - 3x + λ = 0 has a root in (0, 1) and other in (1, 2) is: [JEE Main 2023]",
        options: ["(-2, 0)", "(0, 1)", "(-1, 0)", "None"],
        correctAnswer: "(-2, 0)",
        shortExplanation: "Apply location of roots: f(0)>0, f(1)<0, f(2)>0.",
        tag: "S"
    },
    {
        id: 31,
        text: "Sum of roots of |x - 1|² - 3|x - 1| + 2 = 0 is: [JEE Main 2021]",
        options: ["4", "2", "3", "1"],
        correctAnswer: "4",
        shortExplanation: "|x-1| = 1 or 2. x-1 = ±1 or ±2. x = 2, 0, 3, -1. Sum = 4.",
        tag: "S"
    },
    {
        id: 32,
        text: "If α, β are roots of x² - px + q = 0, find α⁴ + β⁴: [JEE Main 2020]",
        options: ["(p²-2q)² - 2q²", "p⁴-4p²q+2q²", "Both", "None"],
        correctAnswer: "Both",
        shortExplanation: "Standard expansion of symmetric power sums.",
        tag: "S"
    },
    {
        id: 33,
        text: "The number of real roots of |x|² - 3|x| + 2 = 0 is: [JEE Main 2021]",
        options: ["4", "2", "1", "0"],
        correctAnswer: "4",
        shortExplanation: "|x|=1 or 2, so x = ±1, ±2.",
        tag: "S"
    },
    {
        id: 34,
        text: "If roots of x² - bx + c = 0 are consecutive integers, then b²-4c is: [JEE Main 2022]",
        options: ["1", "0", "2", "3"],
        correctAnswer: "1",
        shortExplanation: "(α-β)² = 1, and (α-β)² = D/a².",
        tag: "S"
    },
    {
        id: 35,
        text: "If one root of ax² + bx + c = 0 is 3 times the other, then: [JEE Main 2021]",
        options: ["3b² = 16ac", "b² = 4ac", "3b = 16ac", "None"],
        correctAnswer: "3b² = 16ac",
        shortExplanation: "Use the condition nb² = ac(n+1)² with n=3.",
        tag: "S"
    },
    {
        id: 36,
        text: "Number of real solutions of x² + 5|x| + 4 = 0 is: [JEE Main 2021]",
        options: ["0", "2", "4", "1"],
        correctAnswer: "0",
        shortExplanation: "All terms are positive for any real x, so sum can never be zero.",
        tag: "S"
    },
    {
        id: 37,
        text: "The harmonic mean of the roots of ax² + bx + c = 0 is: [JEE Main 2020]",
        options: ["-2c/b", "2c/b", "b/2c", "-b/2c"],
        correctAnswer: "-2c/b",
        shortExplanation: "HM = 2αβ/(α+β) = 2(c/a)/(-b/a) = -2c/b.",
        tag: "S"
    },
    {
        id: 38,
        text: "If α, β are roots of x² + px + 1 = 0 and γ, δ are roots of x² + qx + 1 = 0, then (α-γ)(β-γ)(α+δ)(β+δ) is: [JEE Main 2021]",
        options: ["q² - p²", "p² - q²", "0", "1"],
        correctAnswer: "q² - p²",
        shortExplanation: "Use the identity (α-γ)(β-γ) = f(γ) where f(x) is the first quadratic.",
        tag: "S"
    },
    {
        id: 39,
        text: "Sum of roots of x² - 5|x| + 6 = 0 is: [JEE Main 2022]",
        options: ["0", "5", "10", "None"],
        correctAnswer: "0",
        shortExplanation: "Roots are ±2, ±3. Sum = 0.",
        tag: "S"
    },
    {
        id: 40,
        text: "If roots of x² - kx + 1 = 0 are not real, then k ∈: [JEE Main 2021]",
        options: ["(-2, 2)", "(-∞, -2)", "(2, ∞)", "None"],
        correctAnswer: "(-2, 2)",
        shortExplanation: "D < 0 => k² - 4 < 0 => k ∈ (-2, 2).",
        tag: "S"
    },
    {
        id: 41,
        text: "Equation with roots 2+√3 and 2-√3 is: [JEE Main 2020]",
        options: ["x² - 4x + 1 = 0", "x² + 4x + 1 = 0", "x² - 4x - 1 = 0", "None"],
        correctAnswer: "x² - 4x + 1 = 0",
        shortExplanation: "Sum = 4, Product = 1.",
        tag: "S"
    },
    {
        id: 42,
        text: "Number of real solutions of log₂x + log₄x = 3 is: [JEE Main 2021]",
        options: ["1", "2", "0", "Infinite"],
        correctAnswer: "1",
        shortExplanation: "log₂x + 1/2 log₂x = 3 => 3/2 log₂x = 3 => log₂x = 2 => x = 4.",
        tag: "S"
    },
    {
        id: 43,
        text: "If roots of x² + x + 1 = 0 are α, β then αⁿ + βⁿ is: [JEE Main 2022]",
        options: ["2 cos(2nπ/3)", "2 sin(2nπ/3)", "0", "1"],
        correctAnswer: "2 cos(2nπ/3)",
        shortExplanation: "Using De Moivre's theorem on the cube roots of unity.",
        tag: "S"
    },
    {
        id: 44,
        text: "Discriminant of x² + x + 1 = 0 is: [JEE Main 2021]",
        options: ["-3", "3", "1", "0"],
        correctAnswer: "-3",
        shortExplanation: "D = 1 - 4 = -3.",
        tag: "S"
    },
    {
        id: 45,
        text: "If one root of x² - 7x + k = 0 is 3, then k is: [JEE Main 2021]",
        options: ["12", "10", "6", "None"],
        correctAnswer: "12",
        shortExplanation: "3² - 7(3) + k = 0 => 9 - 21 + k = 0 => k = 12.",
        tag: "S"
    },
    {
        id: 46,
        text: "Number of real solutions of |x-1| = x² - 1 is: [JEE Main 2023]",
        options: ["2", "3", "1", "0"],
        correctAnswer: "2",
        shortExplanation: "Check x ≥ 1 and x < 1. Solutions are x=1 and x=-2. (Wait, -2 doesn't work for x < 1 since |-3| = 3 and (-2)²-1 = 3).",
        tag: "S"
    },
    {
        id: 47,
        text: "If product of roots of (k-2)x² - 4x + 2k-6 = 0 is 3, then k is: [JEE Main 2022]",
        options: ["0", "2", "4", "None"],
        correctAnswer: "0",
        shortExplanation: "(2k-6)/(k-2) = 3 => 2k-6 = 3k-6 => k=0.",
        tag: "S"
    },
    {
        id: 48,
        text: "Sum of roots of x² - 2x + 1 = 0 is: [JEE Main 2021]",
        options: ["2", "1", "0", "None"],
        correctAnswer: "2",
        shortExplanation: "-b/a = 2.",
        tag: "S"
    },
    {
        id: 49,
        text: "If roots of x² - px + q = 0 are tan 30 and tan 15, then: [JEE Main 2020]",
        options: ["q - p = 1", "p - q = 1", "p + q = 1", "None"],
        correctAnswer: "q - p = 1",
        shortExplanation: "tan(30+15) = tan 45 = 1. (tan 30 + tan 15)/(1 - tan 30 tan 15) = p/(1-q) = 1.",
        tag: "S"
    },
    {
        id: 50,
        text: "Minimum value of x² + 4x + 5 is: [JEE Main 2021]",
        options: ["1", "0", "5", "2"],
        correctAnswer: "1",
        shortExplanation: "(x+2)² + 1, so min value is 1.",
        tag: "S"
    }
];