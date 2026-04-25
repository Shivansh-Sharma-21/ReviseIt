import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, BookOpen, Zap, ArrowRight, Activity, ArrowDown, BrainCircuit, ArrowUpRight, Sparkles } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';

const FourStepsFlow = () => {
    const isMobile = useIsMobile();
    const steps = [
        {
            num: "01",
            title: "Visualize & Scan",
            subtitle: "Map the Concept Landscape",
            desc: "See the entire chapter through our high-fidelity visual roadmap. Map out connected concepts before testing your ability to recall them under pressure—protecting you from negative marking traps.",
            color: "indigo",
            icon: Brain,
            iconColor: "indigo",
            features: [
                { icon: Brain, text: "Hierarchical Concept Mapping" },
                { icon: BookOpen, text: "Expose Hidden Connections" }
            ],
            mockup: (
                 <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(79,70,229,0.2)] bg-indigo-100/80 dark:bg-[#020617] border border-slate-200 dark:border-white/10 w-full aspect-square sm:h-[400px]">
                    <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
                    <div className={`relative w-full h-full flex flex-col items-center justify-center ${isMobile ? 'scale-[0.6] sm:scale-75' : 'scale-75'}`}>
                        <div className="px-10 py-7 rounded-[3rem] bg-gradient-to-br from-indigo-600 via-indigo-800 to-violet-950 text-white shadow-[0_40px_100px_rgba(79,70,229,0.5)] border-[6px] border-white/40 min-w-[250px] text-center relative overflow-hidden z-20 mb-14">
                            <div className="font-black text-xs tracking-[0.6em] uppercase text-indigo-300 mb-2">Core Curriculum</div>
                            <div className="font-black text-2xl tracking-[-0.05em] leading-[0.9] uppercase drop-shadow-2xl">Rotational Dynamics</div>
                        </div>
                        <svg className="absolute top-[48%] left-0 w-full h-[100px] pointer-events-none -translate-y-full z-10" preserveAspectRatio="none">
                            <line x1="50%" y1="0" x2="28%" y2="100%" stroke="#4f46e5" strokeWidth="5" opacity="0.8" />
                            <line x1="50%" y1="0" x2="72%" y2="100%" stroke="#4f46e5" strokeWidth="5" opacity="0.8" />
                        </svg>
                        <div className="flex gap-20 relative z-20">
                            <div className="px-8 py-5 rounded-[2rem] bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl border-[3px] border-slate-400/50 dark:border-indigo-400/20 shadow-[0_40px_80px_rgba(15,23,42,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-center">
                                <div className="font-extrabold text-slate-950 dark:text-white text-base tracking-tight leading-tight">Moment of Inertia</div>
                            </div>
                            <div className="px-8 py-5 rounded-[2rem] bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl border-[3px] border-slate-400/50 dark:border-indigo-400/20 shadow-[0_40px_80px_rgba(15,23,42,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-center">
                                <div className="font-extrabold text-slate-950 dark:text-white text-base tracking-tight leading-tight">Torque & Acc.</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            num: "02",
            title: "Diagnose",
            subtitle: "The Reality Check",
            desc: "Take the mandatory baseline diagnostic to test core logic. We don't just check if you solved the question; we expose if you actually understand the fundamentals or are operating on false confidence.",
            color: "cyan",
            icon: Target,
            iconColor: "cyan",
            features: [
                { icon: Target, text: "Expose Foundational Gaps" }
            ],
            mockup: (
                 <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(6,182,212,0.15)] bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 p-4 sm:p-8 w-full aspect-square sm:h-[400px] flex flex-col justify-between">
                    <div className={`flex flex-col justify-between h-full ${isMobile ? 'scale-[0.8] origin-top' : ''}`}>
                        <div>
                             <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase">
                                    <ArrowRight className="w-3 h-3 rotate-180" /> Back
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Foundational Quiz</span>
                                    <span className="text-xs font-black text-cyan-600 dark:text-cyan-400">Question 3 of 5</span>
                                </div>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-8 overflow-hidden">
                                <div className="h-full bg-cyan-500 w-[60%]" />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-xl">
                            <h2 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-8">
                                "Does net torque = 0 always imply full equilibrium?"
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-4 rounded-2xl bg-emerald-500 border-2 border-emerald-500 text-white shadow-lg text-sm font-bold flex items-center justify-between">
                                    <span>No, need Net Force = 0</span>
                                </div>
                                 <div className="p-4 rounded-2xl bg-rose-500 border-2 border-rose-500 text-white shadow-lg text-sm font-bold flex items-center justify-between">
                                    <span>Yes, rotational eq.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            num: "03",
            title: "Calibrate",
            subtitle: "The Adaptation Engine",
            desc: "Your confidence level isn't just a number. We calculate the 'Delusion Gap' by comparing your self-assessment with your diagnostic score, tailoring a specialized pool of F/C/S questions for your rank improvement.",
            color: "emerald",
            icon: Zap,
            iconColor: "emerald",
            features: [
                { icon: Zap, text: "Confidence-Score Calibration" }
            ],
            mockup: (
               <div className="rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(16,185,129,0.15)] bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-10 w-full aspect-square sm:h-[400px] flex flex-col justify-center">
                    <div className={isMobile ? 'scale-[0.8]' : ''}>
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                                <Target className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Foundation Built!</h2>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">How confident are you with this unit?</p>
                        </div>
                        <div className="grid grid-cols-5 gap-3 mb-4">
                            {[1, 2, 3, 4, 5].map((level) => (
                                <div
                                    key={level}
                                    className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 border-2 ${level === 4
                                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-xl -translate-y-2'
                                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-400'
                                    }`}
                                >
                                    <span className="text-2xl font-black">{level}</span>
                                    <span className={`text-[8px] font-black uppercase tracking-tighter ${level === 4 ? 'opacity-100' : 'opacity-0'}`}>Level</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between px-2 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            <span>Basic Grip</span>
                            <span>Absolute Mastery</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            num: "04",
            title: "Master",
            subtitle: "Protect Your Rank",
            desc: "Complete your 10-question sprint where foundation questions never truly disappear, ensuring your fundamentals lock in. Close the session with a diagnostic report mapping exactly where you stand.",
            color: "slate",
            icon: ArrowRight,
            iconColor: "indigo",
            features: [
                { icon: ArrowRight, text: "Diagnostic Report Complete" }
            ],
             mockup: (
                 <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl p-6 sm:p-8 w-full aspect-square sm:h-[400px] flex flex-col justify-center">
                    {/* Background Orbs */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 blur-[60px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full" />

                    <div className={`relative z-10 w-full flex flex-col gap-4 ${isMobile ? 'scale-[0.85] origin-center' : 'scale-[0.95]'}`}>
                        <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[8px] font-black tracking-widest uppercase mb-2">
                                    <Activity size={10} />
                                    Diagnostic Complete
                                </div>
                                <h2 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white tracking-tight leading-none">Session <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500">Analysis</span></h2>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center text-white shadow-lg">
                                    <BrainCircuit size={16} />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Index</p>
                                    <p className="text-sm font-black text-slate-900 dark:text-white leading-none">40%</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Calibration Box */}
                            <div className="bg-white dark:bg-slate-950/50 rounded-3xl p-4 border border-slate-100 dark:border-slate-800/50 flex items-center justify-around shadow-sm">
                                <div className="text-center">
                                    <div className="text-3xl font-black mb-1 text-slate-300 dark:text-slate-700 leading-none">4</div>
                                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Self Map</p>
                                </div>
                                <ArrowRight size={20} className="text-slate-300 dark:text-slate-700" />
                                <div className="text-center">
                                    <div className="text-3xl font-black mb-1 text-amber-500 leading-none">3</div>
                                    <p className="text-[8px] font-black text-amber-500 uppercase tracking-widest">Reality</p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-3 rounded-2xl border border-emerald-100/50 dark:border-emerald-800/50 flex flex-col justify-center">
                                    <p className="text-lg font-black text-slate-900 dark:text-white leading-none mb-1">4</p>
                                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Hits</p>
                                </div>
                                <div className="bg-rose-50/50 dark:bg-rose-900/10 p-3 rounded-2xl border border-rose-100/50 dark:border-rose-800/50 flex flex-col justify-center">
                                    <p className="text-lg font-black text-slate-900 dark:text-white leading-none mb-1">6</p>
                                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Misses</p>
                                </div>
                            </div>
                        </div>

                        {/* Rank Status Analysis */}
                        <div className="p-4 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-400 text-white shadow-xl relative overflow-hidden group mt-2">
                            <Sparkles className="absolute -top-2 -right-2 w-12 h-12 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
                            <h3 className="text-[8px] font-black uppercase tracking-[0.2em] mb-2 opacity-80">Rank Status Analysis</h3>
                            <div className="flex items-start gap-2 mb-3">
                                <ArrowUpRight size={18} className="shrink-0 mt-0.5" />
                                <p className="text-sm font-bold leading-snug">
                                    Continuing this path will <span className="underline decoration-2 underline-offset-2 font-black">decrease your rank by ~1000</span>.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                                <p className="text-[10px] font-bold opacity-90 italic">
                                    "High risk of negative marking."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-32 md:py-48 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-32 md:mb-48">
                    <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">Chapter II</h2>
                    <h3 className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter">The JEE Revise Flow</h3>
                </div>

                <div className="relative pl-0 md:pl-24">
                    {/* Sticky Timeline Bar Container */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-8 w-1 bg-slate-200 dark:bg-slate-800 rounded-full">
                        <motion.div 
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-cyan-500 to-emerald-500 rounded-full origin-top transform-gpu"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            style={{ height: '100%' }}
                        />
                    </div>

                    <div className="space-y-48">
                        {steps.map((step, idx) => (
                            <motion.div 
                                key={idx} 
                                className="relative flex flex-col lg:flex-row gap-16 lg:gap-24 items-center min-h-[50vh] transform-gpu"
                                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: isMobile ? "200px" : "-100px" }}
                                transition={{ duration: isMobile ? 0.05 : 0.8 }}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden md:flex absolute -left-[76px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-300 dark:border-slate-700 items-center justify-center z-10">
                                    <div className={`w-3 h-3 rounded-full bg-${step.color}-500 shadow-[0_0_10px_rgba(var(--color-${step.color}-500),0.8)]`} />
                                </div>

                                {/* Content Layer over Number */}
                                <div className="lg:w-1/2 relative z-10 flex flex-col justify-center">
                                    <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
                                        {step.title} <br />
                                        <span className={`text-${step.color}-600 dark:text-${step.color}-400 text-2xl sm:text-4xl`}>
                                            {step.subtitle}
                                        </span>
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
                                        {step.desc}
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        {step.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-4 text-slate-900 dark:text-white text-lg font-bold">
                                                <div className={`w-12 h-12 rounded-2xl bg-${step.color}-500/10 flex items-center justify-center border border-${step.color}-500/20`}>
                                                    <feature.icon className={`w-6 h-6 text-${step.iconColor}-500`} />
                                                </div>
                                                {feature.text}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mockup with 3D Tilt Reveal */}
                                <motion.div
                                    className="lg:w-1/2 w-full perspective-1000 relative transform-gpu"
                                    initial={isMobile ? { opacity: 1, rotateY: 0, scale: 1 } : { opacity: 0, rotateY: 30, scale: 0.9 }}
                                    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                                    viewport={{ once: true, margin: isMobile ? "200px" : "-100px" }}
                                    transition={{ duration: isMobile ? 0 : 1, type: "spring", bounce: 0.3 }}
                                >
                                     {/* Giant faded step number behind the mockup */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] lg:text-[20vw] font-black leading-none text-slate-900/5 dark:text-white/5 select-none pointer-events-none -z-10">
                                        {step.num}
                                    </div>
                                    <div className="transform-style-3d relative z-10 w-full flex justify-center">
                                        {step.mockup}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourStepsFlow;
