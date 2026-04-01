import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';

const Hero = ({ onGetStarted }) => {
    const { scrollYProgress } = useScroll();
    const isMobile = useIsMobile();
    
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

    const words = "Precision Revision for".split(" ");

    const parentVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: isMobile ? 0.001 : 0.05,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 12 } },
    };

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Orbs */}
            <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${isMobile ? 'opacity-50' : ''}`}>
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={isMobile ? {} : {
                            x: [0, 50, -50, 0],
                            y: [0, -40, 40, 0],
                        }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-600/20 blur-[100px] transform-gpu"
                        style={{
                            top: `${10 + (i * 30)}%`,
                            left: `${5 + (i * 30)}%`,
                        }}
                    />
                ))}
            </div>

            <motion.div 
                className="z-10 text-center max-w-5xl px-4 flex flex-col items-center"
                style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="inline-block relative rounded-full px-4 py-1.5 text-[10px] sm:text-sm leading-6 text-slate-600 dark:text-slate-400 ring-1 ring-slate-900/10 dark:ring-white/10 hover:ring-slate-900/20 dark:hover:ring-white/20 transition-all cursor-default font-bold uppercase tracking-widest bg-white/5 backdrop-blur-sm">
                        Announcing Revise-it v1.0.{' '}
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                            Built for JEE Aspirants
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    variants={parentVariants}
                    initial="hidden"
                    animate="show"
                    className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1] flex flex-wrap justify-center gap-x-[0.25em]"
                >
                    {words.map((word, wIdx) => (
                        <span key={wIdx} className="inline-block whitespace-nowrap">
                            {word.split("").map((char, cIdx) => (
                                <motion.span key={cIdx} variants={childVariants} className="inline-block">
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                    {' '}
                    <div className="w-full sm:w-auto">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: isMobile ? 0.2 : 1.5, duration: 0.5, type: "spring" }}
                            className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300"
                        >
                            IIT-JEE
                        </motion.span>
                    </div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: isMobile ? 0.1 : 2.2, duration: isMobile ? 0.05 : 0.4 }}
                    className="text-lg md:text-xl leading-relaxed md:leading-8 text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto mb-12 text-balance"
                >
                    Eliminate decision fatigue and expose false confidence across <span className="text-indigo-600 dark:text-indigo-400 font-bold">Physics, Chemistry, and Maths</span>. Our adaptive system ensures you master the basics before tackling the complex.
                </motion.p>

                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: isMobile ? 0.15 : 2.8, duration: isMobile ? 0.1 : 0.4 }}
                    className="flex flex-col items-center space-y-4"
                >
                    <button
                        onClick={onGetStarted}
                        className="group relative inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 text-base md:px-8 md:py-4 md:text-lg font-bold text-white shadow-xl shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:-translate-y-1 active:scale-95"
                    >
                        Begin Your First Session
                    </button>
                    
                    <motion.div 
                        animate={{ y: [0, 10, 0] }} 
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="mt-8 text-slate-400 flex flex-col items-center hidden sm:flex"
                    >
                        <span className="text-[10px] uppercase tracking-widest font-black mb-2 opacity-60">Scroll to begin</span>
                        <ArrowDown className="w-4 h-4 opacity-60" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
