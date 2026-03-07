export const questions = [
    {
        id: 1,
        text: "A rider on horse back falls when horse starts running all of a sudden because:",
        options: ["Rider is taken back", "Rider is suddenly afraid of falling", "Inertia of rest keeps the upper part of body at rest whereas lower part of the body moves forward with the horse", "None of the above"],
        correctAnswer: "Inertia of rest keeps the upper part of body at rest whereas lower part of the body moves forward with the horse",
        shortExplanation: "Based on Newton's First Law, the upper body maintains its state of rest due to inertia.",
        tag: "F"
    },
    {
        id: 2,
        text: "A force of 100 dynes acts on a mass of 5 gm for 10 sec. The velocity produced is:",
        options: ["2 cm/sec", "20 cm/sec", "200 cm/sec", "2000 cm/sec"],
        correctAnswer: "200 cm/sec",
        shortExplanation: "a = F/m = 100/5 = 20 cm/s². v = u + at = 0 + (20)(10) = 200 cm/sec.",
        tag: "F"
    },
    {
        id: 3,
        text: "A force vector applied on a mass is represented as F = 6i - 8j + 10k and accelerates with 1 m/s². What will be the mass of the body?",
        options: ["10√2 kg", "2√10 kg", "10 kg", "20 kg"],
        correctAnswer: "10√2 kg",
        shortExplanation: "|F| = √(6² + 8² + 10²) = √200 = 10√2. m = F/a = 10√2 kg.",
        tag: "F"
    },
    {
        id: 4,
        text: "In a rocket of mass 1000 kg fuel is consumed at a rate of 40 kg/s. The velocity of the gases ejected from the rocket is 5 × 10⁴ m/s. The thrust on the rocket is:",
        options: ["2 × 10³ N", "5 × 10⁴ N", "2 × 10⁶ N", "2 × 10⁹ N"],
        correctAnswer: "2 × 10⁶ N",
        shortExplanation: "Thrust F = v(dm/dt) = (5 × 10⁴)(40) = 2 × 10⁶ N.",
        tag: "F"
    },
    {
        id: 5,
        text: "If a force of 250 N acts on a body, the momentum acquired is 125 kg-m/s. What is the period for which force acts on the body?",
        options: ["0.5 sec", "0.2 sec", "0.4 sec", "0.25 sec"],
        correctAnswer: "0.5 sec",
        shortExplanation: "F = Δp/Δt. Δt = 125/250 = 0.5 sec.",
        tag: "F"
    },
    {
        id: 6,
        text: "Three equal weights A, B and C of mass 2 kg each are hanging on a string passing over a fixed frictionless pulley. The tension in the string connecting weights B and C is:",
        options: ["Zero", "13.06 N", "3.3 N", "19.6 N"],
        correctAnswer: "13.06 N",
        shortExplanation: "System acceleration a = g/3. For block C: mg - T = ma. T = 2(g - g/3) = 4g/3 ≈ 13.06 N.",
        tag: "F"
    },
    {
        id: 7,
        text: "A monkey of mass 40 kg climbs on a rope which can stand a maximum tension of 600 N. In which of the following cases will the rope break?",
        options: ["Climbs up with an acceleration of 6 m/s²", "Climbs down with an acceleration of 4 m/s²", "Climbs up with an uniform speed of 5 m/s²", "Falls down the rope nearly freely under gravity"],
        correctAnswer: "Climbs up with an acceleration of 6 m/s²",
        shortExplanation: "T = m(g+a) = 40(10+6) = 640 N, exceeding the 600 N limit.",
        tag: "F"
    },
    {
        id: 8,
        text: "A block of mass M is placed on a fixed smooth inclined plane of inclination θ with the horizontal. The force exerted by the plane on the block has a magnitude:",
        options: ["Mg", "Mg/cos θ", "Mg cos θ", "Mg tan θ"],
        correctAnswer: "Mg cos θ",
        shortExplanation: "The normal reaction force on an inclined plane is N = Mg cos θ.",
        tag: "F"
    },
    {
        id: 9,
        text: "A balloon of gross weight W Newton is falling vertically downward with a constant acceleration a (< g). The magnitude of the air resistance is:",
        options: ["W", "W(1 + a/g)", "W(1 - a/g)", "W(a/g)"],
        correctAnswer: "W(1 - a/g)",
        shortExplanation: "W - R = (W/g)a. R = W(1 - a/g).",
        tag: "F"
    },
    {
        id: 10,
        text: "A man is standing at a spring platform. Reading of spring balance is 60 kg wt. If man jumps outside platform, then reading of spring balance:",
        options: ["First increases then decreases to zero", "Decreases", "Increases", "Remains same"],
        correctAnswer: "First increases then decreases to zero",
        shortExplanation: "To jump, the man exerts downward force (increasing reading), then leaves (zero reading).",
        tag: "F"
    },
    {
        id: 11,
        text: "A bird is sitting in a large closed cage which is placed on a spring balance. It records a weight of 25 N. The bird (mass = 0.5 kg) flies upward in the cage with an acceleration of 2 m/s². The spring balance will now record a weight of:",
        options: ["24 N", "25 N", "26 N", "27 N"],
        correctAnswer: "26 N",
        shortExplanation: "Apparent weight increases by ma: 25 + (0.5 * 2) = 26 N.",
        tag: "F"
    },
    {
        id: 12,
        text: "In the figure shown, the pulley is moving with velocity u. Calculate the velocity of the block attached with string.",
        options: ["u", "2u", "3u", "2.5 u"],
        correctAnswer: "2u",
        shortExplanation: "By constraint relation, if the pulley moves by x, the free end of the string moves by 2x.",
        tag: "F"
    },
    {
        id: 13,
        text: "If velocity of block B in the given arrangement is 300 mm/sec towards right, then velocity of A will be:",
        options: ["200 mm/sec", "100 mm/sec", "450 mm/sec", "150 mm/sec"],
        answer: "150 mm/sec",
        shortExplanation: "Based on the pulley constraint, the velocity of block A is half that of block B.",
        tag: "F"
    },
    {
        id: 14,
        text: "Two masses of 10 kg and 20 kg respectively are connected by a massless spring. A force of 200 N acts on the 20 kg mass. If the 10 kg mass has an acceleration of 12 m/s², the acceleration of the 20 kg mass is:",
        options: ["2 m/s²", "4 m/s²", "10 m/s²", "20 m/s²"],
        correctAnswer: "4 m/s²",
        shortExplanation: "F_ext = m1a1 + m2a2. 200 = 10(12) + 20(a2). a2 = 4 m/s².",
        tag: "F"
    },
    {
        id: 15,
        text: "A person is standing in an elevator. In which situation he finds his weight less than actual?",
        options: ["The elevator moves upward with constant acceleration", "The elevator moves downward with constant acceleration", "The elevator moves upward with uniform velocity", "The elevator moves downward with uniform velocity"],
        correctAnswer: "The elevator moves downward with constant acceleration",
        shortExplanation: "Apparent weight R = m(g - a) is less than mg when accelerating downwards.",
        tag: "F"
    },
    {
        id: 16,
        text: "The mass of a lift is 500 kg. When it ascends with an acceleration of 2 m/s², the tension in the cable will be (g = 10 m/s²):",
        options: ["6000 N", "5000 N", "4000 N", "50 N"],
        correctAnswer: "6000 N",
        shortExplanation: "T = m(g + a) = 500(10 + 2) = 6000 N.",
        tag: "F"
    },
    {
        id: 17,
        text: "A plumb line is suspended from a ceiling of a car moving with horizontal acceleration a. What will be the angle of inclination with vertical?",
        options: ["tan⁻¹(a/g)", "tan⁻¹(g/a)", "cos⁻¹(a/g)", "cos⁻¹(g/a)"],
        correctAnswer: "tan⁻¹(a/g)",
        shortExplanation: "The effective gravity vector tilts by an angle θ where tan θ = a/g.",
        tag: "F"
    },
    {
        id: 18,
        text: "The coefficient of friction μ and the angle of friction λ are related as:",
        options: ["sin λ = μ", "cos λ = μ", "tan λ = μ", "tan μ = λ"],
        correctAnswer: "tan λ = μ",
        shortExplanation: "The tangent of the angle of friction equals the coefficient of static friction.",
        tag: "F"
    },
    {
        id: 19,
        text: "A force of 98 N is required to just slide a body of mass 100 kg over ice. The coefficient of static friction is:",
        options: ["0.6", "0.4", "0.2", "0.1"],
        correctAnswer: "0.1",
        shortExplanation: "μ = F/mg = 98/(100 * 9.8) = 0.1.",
        tag: "F"
    },
    {
        id: 20,
        text: "Maximum value of static friction is called:",
        options: ["Limiting friction", "Rolling friction", "Normal reaction", "Coefficient of friction"],
        correctAnswer: "Limiting friction",
        shortExplanation: "Limiting friction is the maximum resistive force before relative motion starts.",
        tag: "F"
    },
    {
        id: 21,
        text: "A car is moving along a straight horizontal road with a speed v₀. If the coefficient of friction is μ, the shortest distance in which the car can be stopped is:",
        options: ["v₀²/2μg", "v₀/μg", "(v₀/μg)²", "v₀/2μg"],
        correctAnswer: "v₀²/2μg",
        shortExplanation: "Stopping distance s = v₀² / (2 * deceleration) = v₀²/2μg.",
        tag: "F"
    },
    {
        id: 22,
        text: "If μₛ, μₖ, and μᵣ are coefficients of static friction, sliding friction and rolling friction, then:",
        options: ["μₛ < μₖ < μᵣ", "μₖ < μᵣ < μₛ", "μᵣ < μₖ < μₛ", "μᵣ = μₖ = μₛ"],
        correctAnswer: "μᵣ < μₖ < μₛ",
        shortExplanation: "Static friction > Kinetic (sliding) friction > Rolling friction.",
        tag: "F"
    },
    {
        id: 23,
        text: "The coefficient of static friction between the two blocks is 0.363. What is the minimum acceleration of block 1 so that block 2 does not fall?",
        options: ["6 m/s²", "12 m/s²", "18 m/s²", "27 m/s²"],
        correctAnswer: "27 m/s²",
        shortExplanation: "Friction μma must equal mg, so a = g/μ = 9.8/0.363 ≈ 27 m/s².",
        tag: "F"
    },
    {
        id: 24,
        text: "The time taken by a body to slide down a rough 45° inclined plane is twice that required to slide down a smooth 45° inclined plane. The coefficient of kinetic friction is:",
        options: ["1/4", "3/4", "3/2", "1/2"],
        correctAnswer: "3/4",
        shortExplanation: "Using t_rough = 2 * t_smooth, μ = tan θ (1 - 1/n²) = 1(1 - 1/4) = 3/4.",
        tag: "F"
    },
    {
        id: 25,
        text: "The force required to just move a body up an inclined plane is double the force required to just prevent the body from sliding down. If the coefficient of friction is μ, the inclination θ is:",
        options: ["tan⁻¹(μ)", "tan⁻¹(μ/2)", "tan⁻¹(2μ)", "tan⁻¹(3μ)"],
        correctAnswer: "tan⁻¹(3μ)",
        shortExplanation: "F_up = 2 * F_down leads to tan θ = 3μ.",
        tag: "F"
    }
];