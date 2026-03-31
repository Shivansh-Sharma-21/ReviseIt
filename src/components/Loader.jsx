import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingTexts = [
    "Integrating Area...",
    "Balancing Chemical Equations...",
    "Calculating Coefficient of Friction...",
    "Resolving Vectors...",
    "Finding Roots...",
];

const Loader = ({ onComplete, duration = 3000 }) => {
    const [textIndex, setTextIndex] = useState(0);

    // Cycle through loading texts
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 600);
        return () => clearInterval(interval);
    }, []);

    // The loader is now controlled entirely by the parent component's rendering state.
    // Use the duration prop only for the visual progress bar animation.

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* The Animated Orbs Container */}
            <div className="relative w-40 h-40 mb-12 flex items-center justify-center">
                {/* Central Core */}
                <motion.div
                    className="absolute w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] z-10"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Orb 1: Indigo (Physics) */}
                <motion.div
                    className="absolute w-6 h-6 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]"
                    animate={{
                        rotate: 360,
                        x: [40, 0, -40, 0, 40],
                        y: [0, 40, 0, -40, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Orb 2: Cyan (Maths) */}
                <motion.div
                    className="absolute w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                    animate={{
                        rotate: -360,
                        x: [-50, 0, 50, 0, -50],
                        y: [0, -50, 0, 50, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Orb 3: Emerald (Chemistry) */}
                <motion.div
                    className="absolute w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                    animate={{
                        rotate: 180,
                        x: [0, 60, 0, -60, 0],
                        y: [60, 0, -60, 0, 60],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Quirky Loading Text */}
            <div className="relative h-8 w-full max-w-sm text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={textIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-x-0 text-sm md:text-base font-bold text-slate-600 dark:text-slate-400 font-mono tracking-tight"
                    >
                        {loadingTexts[textIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Progress Bar */}
            <div className="w-48 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mt-6 overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: duration / 1000, ease: "linear" }}
                />
            </div>
        </motion.div>
    );
};

export default Loader;
