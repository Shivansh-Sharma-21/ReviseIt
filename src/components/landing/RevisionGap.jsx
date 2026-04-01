import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

const RevisionGap = () => {
    const sectionRef = useRef(null);
    const isMobile = useIsMobile();
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [-100, 100]);
    const yRight = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [150, -150]);

    return (
        <section ref={sectionRef} className="py-24 md:py-48 min-h-screen bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/5 relative overflow-hidden flex items-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        style={{ y: yLeft }}
                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: isMobile ? "200px" : "-100px" }}
                        transition={{ duration: isMobile ? 0.05 : 1 }}
                        className="relative z-10 lg:pr-12 transform-gpu"
                    >
                        <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 inline-flex items-center gap-2">
                            <span className="w-8 h-px bg-indigo-500"></span> Chapter I — The Problem
                        </h2>
                        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-8">
                            Why "Normal" Practice Fails
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-10 text-balance">
                            Standard DPPs and modules often mix easy and hard questions randomly.
                            Master a complex problem using a formula you don't fully understand,
                            and you've created <span className="text-slate-900 dark:text-white font-bold bg-indigo-500/10 px-2 py-1 rounded-md">false confidence</span>.
                        </p>
                        
                        <div className="space-y-4">
                            {[
                                "Hidden gaps in fundamental concepts",
                                "Over-reliance on rote formula memory",
                                "Decision fatigue: What should I solve next?",
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20, borderLeftColor: 'transparent' }}
                                    whileInView={{ opacity: 1, x: 0, borderLeftColor: '#0ea5e9' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: isMobile ? 0.1 : 0.5, delay: isMobile ? 0 : 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium text-base md:text-lg border-l-4 pl-4 bg-slate-50 dark:bg-slate-800/30 py-3 rounded-r-xl"
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        style={{ y: yRight }}
                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: isMobile ? "200px" : "-100px" }}
                        transition={{ duration: isMobile ? 0 : 1 }}
                        className="relative mt-8 lg:mt-0 transform-gpu"
                    >
                        <div className="relative glass rounded-3xl p-6 md:p-10 border-slate-200 dark:border-white/10 aspect-square flex flex-col justify-center overflow-hidden shadow-2xl bg-white dark:bg-slate-950/80 backdrop-blur-3xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
                            
                            <div className="space-y-8 relative z-10 w-full max-w-sm mx-auto">
                                <div className="p-4 rounded-2xl bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-white/5 opacity-50 blur-[2px] transition-all duration-1000">
                                    <div className="h-2 w-24 bg-slate-400 dark:bg-slate-700 rounded mb-3" />
                                    <div className="h-4 w-full bg-slate-400 dark:bg-slate-700 rounded" />
                                </div>
                                
                                <motion.div 
                                    className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-500/30 shadow-[0_30px_60px_-15px_rgba(99,102,241,0.5)] transform -rotate-2"
                                >
                                    <div className="flex justify-between items-center mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                                        <span className="text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-full">Checkpoint</span>
                                        <motion.span 
                                            animate={{ opacity: [1, 0.5, 1] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[9px] font-bold tracking-widest uppercase border border-red-200 dark:border-red-800"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                            Revealing Gaps
                                        </motion.span>
                                    </div>
                                    <p className="text-slate-900 dark:text-white font-bold text-lg mb-8 leading-snug">
                                        "If the system is released from rest, is the work done by friction path-independent?"
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-500 text-sm font-bold flex items-center justify-center text-center leading-tight">Yes, always</div>
                                        <div className="p-4 rounded-xl bg-indigo-600 border-2 border-indigo-500 text-white text-sm font-bold shadow-lg shadow-indigo-500/30 flex items-center justify-center text-center leading-tight">Only for conservative</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RevisionGap;
