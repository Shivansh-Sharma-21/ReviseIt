export const flashcards = [
    {
        subtopic: "Fundamental Principles of Counting",
        content: "Multiplication Principle (AND): $m \\times n$ (Both tasks must be done); Addition Principle (OR): $m + n$ (Either task is sufficient); Application: Used when 'and' vs 'or' logic regulates the counting process.",
        importantQuestions: [
            "A letter lock has 3 rings with 10 letters each. How many unsuccessful attempts are possible?",
            "7 people meet in a hall; find the total number of handshakes."
        ],
        diagram: "",
        cards: [
            {
                question: "If a work $A$ can be done in $m$ ways and $B$ in $n$ ways, in how many ways can '$A$ and $B$' be done concurrently?",
                answer: "$m \\times n$ ways."
            },
            {
                question: "What is the result of $10^3 - 1$ in the context of a 3-ring letter lock?",
                answer: "The number of unsuccessful attempts to open the lock (999)."
            }
        ]
    },
    {
        subtopic: "Factorial Notation",
        content: "Basic Definition: $n! = n(n-1)(n-2) \\cdots 1$; Standard Value: $0! = 1$; Extended form: $(2n)! = 2^n \\cdot n! \\cdot [1 \\cdot 3 \\cdot 5 \\cdots (2n-1)]$.",
        importantQuestions: [
            "Find $n$ if $(n+1)! = 12 \\times (n-1)!$.",
            "Evaluate $\\frac{n!}{(n-r)!}$ for $n=6, r=2$."
        ],
        diagram: "",
        cards: [
            {
                question: "What is the mathematical value of $0!$?",
                answer: "1"
            },
            {
                question: "Is the factorial of a negative integer defined?",
                answer: "No, it is undefined for negative integers."
            }
        ]
    },
    {
        subtopic: "Permutations (Arrangements)",
        content: "Main Formula: ${}^nP_r = \\frac{n!}{(n-r)!}$; Identical Items: Arrangement of $n$ objects with $p$ identical items is $\\frac{n!}{p!}$; Order Dependence: Permutations are used when the order of selection matters.",
        importantQuestions: [
            "How many 4-digit numbers can be formed using digits 1-9 if repetition is not allowed?",
            "In how many ways can the letters of the word 'APPLE' be arranged?"
        ],
        diagram: "",
        cards: [
            {
                question: "What does ${}^nP_r$ represent?",
                answer: "The number of ways to arrange $r$ objects taken from $n$ distinct objects."
            },
            {
                question: "How many ways can $n$ people be arranged in a straight row?",
                answer: "$n!$ ways."
            }
        ]
    },
    {
        subtopic: "Combinations (Selections)",
        content: "Main Formula: ${}^nC_r = \\frac{n!}{r!(n-r)!}$; Symmetric Property: ${}^nC_r = {}^nC_{n-r}$; Pascal's Rule: ${}^nC_r + {}^nC_{r-1} = {}^{n+1}C_r$.",
        importantQuestions: [
            "If ${}^nC_{10} = {}^nC_{12}$, find ${}^nC_{21}$.",
            "A committee of 3 is to be chosen from 10 people. Find the number of ways."
        ],
        diagram: "",
        cards: [
            {
                question: "When is ${}^nC_r$ used instead of ${}^nP_r$?",
                answer: "When selection is required and the order of selected objects does not matter."
            },
            {
                question: "What is the value of ${}^nC_r$ when $r=0$ or $r=n$?",
                answer: "1"
            }
        ]
    },
    {
        subtopic: "Circular Permutations",
        content: "Seating around a fixed table: $(n-1)!$; Necklaces/Garlands (Clockwise = Anti-clockwise): $\\frac{(n-1)!}{2}$; Logic: One position is fixed to break the circular symmetry.",
        importantQuestions: [
            "In how many ways can 6 people sit around a circular table?",
            "How many ways can 10 different beads be strung into a necklace?"
        ],
        diagram: "",
        cards: [
            {
                question: "Why is the formula $(n-1)!$ for circular arrangements?",
                answer: "Because fixing one object's position transforms the circular arrangement into a linear one."
            },
            {
                question: "What is the formula for the arrangement of $n$ flowers in a garland?",
                answer: "$\\frac{(n-1)!}{2}$"
            }
        ]
    },
    {
        subtopic: "Restricted Arrangements",
        content: "Vowels/Objects Together (String Method): Treat the group as one single unit; No two Objects Together (Gap Method): Arrange unrestricted items first, then use the gaps; Logic: Use sub-arrangements effectively.",
        importantQuestions: [
            "How many ways can 'DAUGHTER' be arranged so vowels are always together?",
            "How many ways can 5 boys and 5 girls sit so no two girls are together?"
        ],
        diagram: "",
        cards: [
            {
                question: "Briefly explain the 'Gap Method'.",
                answer: "First arrange the $n$ items with no restriction, creating $n+1$ gaps. Then place the restricted items within these gaps."
            },
            {
                question: "In the 'String Method', do we need to arrange items inside the string?",
                answer: "Yes, the items within the 'string' or unit must be arranged among themselves ($r!$ ways)."
            }
        ]
    },
    {
        subtopic: "Selection with Repetition (Identical Objects)",
        content: "Selection (at least one) from $p, q, r$ identical objects: $(p+1)(q+1)(r+1) - 1$; Selection from $n$ distinct objects: $2^n - 1$; Mixed Selections: Multiply choices for each distinct or identical set.",
        importantQuestions: [
            "Find the number of ways to select at least one fruit from 3 apples, 4 oranges, and 5 mangoes (identical within types).",
            "How many ways to select one or more items from 10 different books?"
        ],
        diagram: "",
        cards: [
            {
                question: "What does the '+1' represent in the formula $(p+1)$?",
                answer: "It accounts for the possibility of 'zero selection' of that particular type of object."
            },
            {
                question: "What is the total number of ways to select any number of items from $n$ distinct items?",
                answer: "$2^n$ (this include the possibility of selecting zero items)."
            }
        ]
    },
    {
        subtopic: "Divisors of a Composite Number",
        content: "For $N = a^p \\cdot b^q \\cdot c^r \\cdots$:; Total Divisors: $(p+1)(q+1)(r+1) \\cdots$; Sum of Divisors: $\\prod \\frac{a^{p+1}-1}{a-1}$; Co-prime Factorization: Resolve $N$ into two co-prime factors in $2^{k-1}$ ways.",
        importantQuestions: [
            "If $N = 2^4 \\cdot 3^3 \\cdot 5^2$, find the total number of divisors.",
            "Find the number of divisors of $N = 2^7 \\cdot 3^6 \\cdot 5^2$ that are perfect squares."
        ],
        diagram: "",
        cards: [
            {
                question: "What are 'Proper Divisors'?",
                answer: "All divisors of a number excluding $1$ and the number itself."
            },
            {
                question: "How do you find the number of ways to resolve $N$ as a product of two factors?",
                answer: "$\\frac{\\text{Total Divisors}}{2}$ (if $N$ is not a perfect square)."
            }
        ]
    },
    {
        subtopic: "Distribution into Groups",
        content: "Unequal Groups: $\\frac{(m+n+p)!}{m!n!p!}$; Equal Groups (e.g., 3 groups of size $m$): $\\frac{(3m)!}{3!(m!)^3}$; Identical Items: Distributing $n$ identical items into $r$ distinct boxes is ${}^{n+r-1}C_{r-1}$.",
        importantQuestions: [
            "In how many ways can 12 students be divided into 3 equal groups?",
            "Divide 10 items into two groups of 4 and 6."
        ],
        diagram: "",
        cards: [
            {
                question: "When dividing into equal groups, why do we divide by the factorial of the number of groups?",
                answer: "To remove the internal permutations of the groups themselves, as their specific order does not matter."
            },
            {
                question: "What is the formula for distributing $n$ identical items into $r$ distinct boxes?",
                answer: "${}^{n+r-1}C_{r-1}$"
            }
        ]
    }
];