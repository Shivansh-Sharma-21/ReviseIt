export const questions = [
    {
        id: 1,
        text: "Which of the following is a fundamental SI unit?",
        options: ["Joule", "Newton", "Kelvin", "Watt"],
        correctAnswer: "Kelvin",
        shortExplanation: "Kelvin is one of the seven base SI units for temperature.",
        tag: "F"
    },
    {
        id: 2,
        text: "The dimensions of force are:",
        options: ["[MLT⁻¹]", "[MLT⁻²]", "[ML²T⁻²]", "[ML⁻¹T⁻²]"],
        correctAnswer: "[MLT⁻²]",
        shortExplanation: "Force = mass × acceleration = [M] × [LT⁻²] = [MLT⁻²].",
        tag: "F"
    },
    {
        id: 3,
        text: "A person travels 3 km East and then 4 km North. The magnitude of displacement is:",
        options: ["7 km", "1 km", "5 km", "12 km"],
        correctAnswer: "5 km",
        shortExplanation: "Using Pythagoras theorem: √(3² + 4²) = √25 = 5 km.",
        tag: "F"
    },
    {
        id: 4,
        text: "Which of the following is a vector quantity?",
        options: ["Speed", "Distance", "Mass", "Acceleration"],
        correctAnswer: "Acceleration",
        shortExplanation: "Acceleration has both magnitude and direction.",
        tag: "F"
    },
    {
        id: 5,
        text: "If a body is at rest, its velocity is:",
        options: ["Increasing", "Decreasing", "Zero", "Constant but non-zero"],
        correctAnswer: "Zero",
        shortExplanation: "Rest means there is no change in position, so velocity is zero.",
        tag: "F"
    },
    {
        id: 6,
        text: "If a body is at rest, its acceleration is:",
        options: ["Increasing", "Decreasing", "Zero", "Constant but non-zero"],
        correctAnswer: "Zero",
        shortExplanation: "Acceleration is the rate of change of velocity. If velocity is zero and constant, acceleration is zero.",
        tag: "F"
    },
    {
        id: 7,
        text: "If a body is at rest, its speed is:",
        options: ["Increasing", "Decreasing", "Zero", "Constant but non-zero"],
        correctAnswer: "Zero",
        shortExplanation: "Speed is the magnitude of velocity. If the body is at rest, speed is zero.",
        tag: "F"
    },
    {
        id: 8,
        text: "The displacement of a body in a circular path of radius R after half a revolution is:",
        options: ["2πR", "πR", "2R", "Zero"],
        correctAnswer: "2R",
        shortExplanation: "Displacement is the shortest distance between initial and final points, which is the diameter 2R.",
        tag: "F"
    },
    {
        id: 9,
        text: "Slope of distance-time graph represents:",
        options: ["Distance", "Displacement", "Acceleration", "Speed"],
        correctAnswer: "Speed",
        shortExplanation: "The rate of change of distance with respect to time is speed.",
        tag: "C"
    },
    {
        id: 10,
        text: "A car accelerates from 18 km/h to 36 km/h in 5 seconds. Its acceleration is:",
        options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"],
        correctAnswer: "1 m/s²",
        shortExplanation: "Change in velocity = 36-18 = 18 km/h = 5 m/s. a = Δv/t = 5/5 = 1 m/s².",
        tag: "C"
    },
    {
        id: 11,
        text: "Area under velocity-time graph represents:",
        options: ["Acceleration", "Force", "Displacement", "Speed"],
        correctAnswer: "Displacement",
        shortExplanation: "The integral of velocity over time gives the change in position (displacement).",
        tag: "C"
    },
    {
        id: 12,
        text: "Which of the following is true for a body moving with uniform velocity?",
        options: ["Acceleration is zero", "Speed is changing", "Direction is changing", "Displacement is zero"],
        correctAnswer: "Acceleration is zero",
        shortExplanation: "Uniform velocity means constant magnitude and direction, so acceleration must be zero.",
        tag: "C"
    },
    {
        id: 13,
        text: "A ball is thrown vertically upwards. At the highest point, its:",
        options: ["Velocity and acceleration are both zero", "Velocity is zero but acceleration is g", "Acceleration is zero but velocity is g", "Both are non-zero"],
        correctAnswer: "Velocity is zero but acceleration is g",
        shortExplanation: "At the peak, velocity momentarily becomes zero, but gravity (g) still acts on it.",
        tag: "C"
    },
    {
        id: 14,
        text: "The ratio of displacement to distance for a moving object is:",
        options: ["Always equal to 1", "Always less than 1", "Always more than 1", "Less than or equal to 1"],
        correctAnswer: "Less than or equal to 1",
        shortExplanation: "Displacement is the shortest path, so it's always less than or equal to the actual distance covered.",
        tag: "C"
    },
    {
        id: 15,
        text: "Newton's first law of motion defines:",
        options: ["Force", "Inertia", "Momentum", "Both Force and Inertia"],
        correctAnswer: "Inertia",
        shortExplanation: "The first law is also called the Law of Inertia.",
        tag: "C"
    },
    {
        id: 16,
        text: "A bullet of mass 10g is fired with velocity 400 m/s. The momentum is:",
        options: ["4 kg m/s", "40 kg m/s", "400 kg m/s", "0.4 kg m/s"],
        correctAnswer: "4 kg m/s",
        shortExplanation: "p = mv = (0.01 kg) * (400 m/s) = 4 kg m/s.",
        tag: "S"
    },
    {
        id: 17,
        text: "A machine gun fires 20 bullets per second into a target. If each bullet is 10g and moves with 500 m/s, the force required to hold the gun is:",
        options: ["100 N", "200 N", "50 N", "25 N"],
        correctAnswer: "100 N",
        shortExplanation: "F = Δp/Δt = n * m * v = 20 * 0.01 * 500 = 100 N.",
        tag: "S"
    },
    {
        id: 18,
        text: "Two bodies of masses m and 4m have equal kinetic energies. The ratio of their linear momenta is:",
        options: ["1:1", "1:2", "1:4", "4:1"],
        correctAnswer: "1:2",
        shortExplanation: "p = √(2mKE). p1/p2 = √(m1/m2) = √(m/4m) = 1/2.",
        tag: "S"
    },
    {
        id: 19,
        text: "An object is subjected to a constant force. The ratio of its displacement in successive seconds is:",
        options: ["1:2:3:4", "1:3:5:7", "1:4:9:16", "1:1:1:1"],
        correctAnswer: "1:3:5:7",
        shortExplanation: "Ratio of distance in nth second is (2n-1). So 1:3:5:7.",
        tag: "S"
    },
    {
        id: 20,
        text: "A rocket works on the principle of conservation of:",
        options: ["Mass", "Energy", "Linear momentum", "Angular momentum"],
        correctAnswer: "Linear momentum",
        shortExplanation: "Rocket propulsion is based on Newton's third law and conservation of linear momentum.",
        tag: "S"
    },
    {
        id: 21,
        text: "The stopping distance of a car is proportional to:",
        options: ["Velocity", "Square of velocity", "Mass", "Square root of velocity"],
        correctAnswer: "Square of velocity",
        shortExplanation: "Work-energy theorem: F*d = 1/2*m*v^2. So d is proportional to v^2.",
        tag: "S"
    },
    {
        id: 22,
        text: "If the momentum of a body is increased by 50%, then its kinetic energy will increase by:",
        options: ["50%", "100%", "125%", "150%"],
        correctAnswer: "125%",
        shortExplanation: "KE ∝ p^2. If p becomes 1.5p, KE becomes (1.5)^2 KE = 2.25 KE. Increase is 125%.",
        tag: "S"
    },
    {
        id: 23,
        text: "A body moves from rest with constant acceleration. The ratio of displacement in first 2s to that in next 2s is:",
        options: ["1:1", "1:2", "1:3", "1:4"],
        correctAnswer: "1:3",
        shortExplanation: "S(2s) = 0.5*a*4 = 2a. S(4s) = 0.5*a*16 = 8a. S(next 2s) = 8a - 2a = 6a. Ratio 2a:6a = 1:3.",
        tag: "S"
    }
];
