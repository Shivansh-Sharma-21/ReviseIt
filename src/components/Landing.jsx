import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Brain, BookOpen, MousePointer2, MonitorOff, Activity, Sparkles, ChevronRight, Mail, Twitter, Github, Linkedin, Heart } from 'lucide-react';

const Landing = ({ onGetStarted }) => {
    return (
        <div className="relative isolate pt-14 dark:bg-slate-950 min-h-screen overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div 
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-600 dark:text-slate-400 ring-1 ring-slate-900/10 dark:ring-white/10 hover:ring-slate-900/20 dark:hover:ring-white/20 transition-all">
                            Announcing Revise-it v1.0.{' '}
                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                Built for JEE Aspirants
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl xs:text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl"
                    >
                        Precision Revision for{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300">
                            IIT-JEE
                        </span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 md:mt-8 text-lg md:text-xl leading-relaxed md:leading-8 text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto"
                    >
                        Eliminate decision fatigue and expose false confidence across <span className="text-indigo-600 dark:text-indigo-400 font-bold">Physics, Chemistry, and Maths</span>. Our adaptive system ensures you master the basics before tackling the complex.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-12 flex items-center justify-center gap-x-6"
                    >
                        <button
                            onClick={onGetStarted}
                            className="group relative inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:-translate-y-1 active:scale-95"
                        >
                            Begin Your First Session
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                {/* Subject Neutral Icons/Features Preview */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
                >
                    {[
                        { icon: <Target className="w-8 h-8" />, title: "Pattern Recognition", desc: "Identify traps across all three PCM subjects." },
                        { icon: <Brain className="w-8 h-8" />, title: "Adaptive Flow", desc: "Difficulty adjusts in real-time to your confidence." },
                        { icon: <Zap className="w-8 h-8" />, title: "Zero Friction", desc: "No signup, no distractions. Just pure revision." }
                    ].map((feature, idx) => (
                        <div key={idx} className="glass rounded-3xl p-8 border border-white/10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold dark:text-white mb-2">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* The Revision Gap Section */}
            <section className="py-24 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">The Revision Gap</h2>
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6 md:mb-8">
                                Why "Normal" Practice Fails
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                Standard DPPs and modules often mix easy and hard questions randomly. 
                                Master a complex problem using a formula you don't fully understand, 
                                and you've created <span className="text-slate-900 dark:text-white font-bold">false confidence</span>. 
                            </p>
                            <div className="space-y-3 md:space-y-4">
                                {[
                                    "Hidden gaps in fundamental concepts",
                                    "Over-reliance on rote formula memory",
                                    "Decision fatigue: What should I solve next?",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 md:gap-4 text-slate-700 dark:text-slate-300 font-medium text-sm md:text-base">
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative mt-8 lg:mt-0"
                        >
                            <div className="relative glass rounded-3xl p-6 md:p-10 border-slate-200 dark:border-white/10 aspect-[4/5] sm:aspect-square flex flex-col justify-center overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
                                <div className="space-y-6 md:space-y-8 relative">
                                    <div className="p-3 md:p-4 rounded-2xl bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-white/5 opacity-30 blur-[1px]">
                                        <div className="h-1.5 md:h-2 w-20 md:w-24 bg-slate-400 dark:bg-slate-700 rounded mb-2" />
                                        <div className="h-3 md:h-4 w-full bg-slate-400 dark:bg-slate-700 rounded" />
                                    </div>
                                    <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white dark:bg-slate-900 border border-indigo-500/30 scale-100 sm:scale-105 shadow-[0_20px_50px_-20px_rgba(99,102,241,0.4)]">
                                        <div className="flex justify-between items-center mb-4 md:mb-6">
                                            <span className="text-indigo-600 dark:text-indigo-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">Mandatory Checkpoint</span>
                                            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[8px] md:text-[9px] font-bold">
                                                <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                                                REVEALING GAPS
                                            </span>
                                        </div>
                                        <p className="text-slate-900 dark:text-white font-bold text-sm md:text-lg mb-4 md:mb-6 leading-snug">
                                            "If the system is released from rest, is the work done by friction path-independent?"
                                        </p>
                                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                                            <div className="p-3 md:p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-500 text-[10px] md:text-sm font-bold">Yes, always</div>
                                            <div className="p-3 md:p-4 rounded-xl bg-indigo-600 border border-indigo-400 text-white text-[10px] md:text-sm font-bold shadow-lg shadow-indigo-500/20 ring-2 ring-indigo-500/20">Only for conservative</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The 4-Step Philosophy Sections */}
            <section className="py-32 space-y-80 md:space-y-96">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-32 md:mb-48">
                        <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">Inside the System</h2>
                        <h3 className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter">The PCM Revise Flow</h3>
                    </div>

                    {/* Step 01: Visualize + Flashcards */}
                    <div className="grid lg:grid-cols-2 gap-24 md:gap-32 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-indigo-500 font-black text-7xl md:text-8xl opacity-10 block mb-6">01</span>
                            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-8 text-balance">
                                Visualize & Recall <br />
                                <span className="text-indigo-600 dark:text-indigo-400 text-2xl sm:text-4xl">Mindmaps + Instant Flashcards</span>
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
                                Navigate the entire chapter through our high-fidelity visual roadmap. Click any subtopic to instantly reveal <span className="text-indigo-600 dark:text-indigo-400 font-bold underline decoration-2 underline-offset-4">Fast Recall Flashcards</span>—designed to bridge the gap between theory and execution.
                            </p>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-5 text-slate-900 dark:text-white text-lg font-bold">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                        <Brain className="w-6 h-6 text-indigo-500" />
                                    </div>
                                    Hierarchical Concept Mapping
                                </div>
                                <div className="flex items-center gap-5 text-slate-900 dark:text-white text-lg font-bold">
                                    <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center border border-violet-500/20">
                                        <BookOpen className="w-6 h-6 text-violet-500" />
                                    </div>
                                    Instant Semantic Recall
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="relative glass rounded-[2.5rem] md:rounded-[3rem] p-4 sm:p-10 border-slate-200 dark:border-white/10 aspect-[4/3] sm:aspect-video flex items-center justify-center overflow-hidden shadow-[0_50px_100px_-20px_rgba(79,70,229,0.2)]">
                                <div className="absolute inset-0 bg-dot-pattern opacity-[0.15]" />
                                
                                {/* Mindmap Mock UI */}
                                <div className="relative w-full h-full flex flex-col items-center justify-center scale-75 xs:scale-90 sm:scale-100">
                                    {/* Root Node */}
                                    <div className="px-10 py-5 rounded-[2rem] bg-gradient-to-br from-indigo-600 to-indigo-900 text-white shadow-2xl border-4 border-white/20 z-20 mb-16 transform transition-transform group-hover:scale-105 duration-500">
                                        <div className="font-black text-[10px] uppercase tracking-[0.3em] mb-1 opacity-60">Physics</div>
                                        <div className="font-bold text-xl leading-tight uppercase">Rotational Dynamics</div>
                                    </div>

                                    <div className="flex gap-16 sm:gap-32 relative">
                                        {/* Topic Nodes */}
                                        <div className="px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-400 dark:border-indigo-400/50 shadow-xl z-20 transition-all duration-500 group-hover:-translate-y-2">
                                            <div className="font-bold text-sm dark:text-white leading-tight uppercase italic">Moment of Inertia</div>
                                        </div>
                                        <div className="px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-400 dark:border-indigo-400/50 shadow-xl z-20 transition-all duration-500 group-hover:-translate-y-2 delay-75">
                                            <div className="font-bold text-sm dark:text-white leading-tight uppercase italic">Torque & Acc.</div>
                                        </div>

                                        {/* Curved Connection Lines */}
                                        <svg className="absolute top-[-60px] left-0 w-full h-[60px] pointer-events-none opacity-40">
                                            <path d="M 50% 0 L 50% 20 Q 50% 60, 20% 60" stroke="#6366f1" strokeWidth="4" fill="none" strokeDasharray="8 8" />
                                            <path d="M 50% 0 L 50% 20 Q 50% 60, 80% 60" stroke="#6366f1" strokeWidth="4" fill="none" strokeDasharray="8 8" />
                                        </svg>
                                    </div>

                                    {/* Flashcard Overlay */}
                                    <motion.div 
                                        animate={{ 
                                            y: [5, -5, 5],
                                            opacity: [0.95, 1, 0.95]
                                        }}
                                        transition={{ 
                                            duration: 4, 
                                            repeat: Infinity, 
                                            ease: "easeInOut" 
                                        }}
                                        className="absolute bottom-4 right-4 md:bottom-12 md:right-12 w-48 xs:w-56 md:w-72 bg-white dark:bg-slate-900 rounded-3xl p-4 md:p-6 border-2 border-indigo-500 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-30"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                                                    <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[6px] md:text-[8px] font-black uppercase tracking-[0.2em] text-slate-400">Quick Recall</span>
                                                    <span className="text-[10px] md:text-xs font-black dark:text-white tracking-tight">MOI Basics</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[10px] md:text-sm font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                                            Parallel Axis Theorem axis requirements?
                                        </p>
                                        <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50 text-[8px] md:text-xs text-indigo-700 dark:text-indigo-300 italic font-bold leading-tight">
                                            "One axis must pass through the Center of Mass."
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div><br></br>

                    {/* Step 02: Expose */}
                    <div className="grid lg:grid-cols-2 gap-24 md:gap-32 items-center lg:flex-row-reverse">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-2"
                        >
                            <span className="text-cyan-500 font-black text-7xl md:text-8xl opacity-10 block mb-6">02</span>
                            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-8">
                                Expose <br />
                                <span className="text-cyan-600 dark:text-cyan-400">Conceptual Traps</span>
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
                                Every session begins with a mandatory foundation check. We don't care if you can solve JEE Advanced problems; we want to know if you understand <span className="text-cyan-500 font-bold">why</span> a normal force actually exists.
                            </p>
                            <div className="flex items-center gap-5 text-slate-900 dark:text-white text-lg font-bold">
                                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                                    <Target className="w-6 h-6 text-cyan-500" />
                                </div>
                                Anti-Rote Filter Engaged
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-1"
                        >
                            <div className="relative glass rounded-[2.5rem] md:rounded-[3rem] p-6 lg:p-16 border-slate-200 dark:border-white/10 aspect-video flex items-center justify-center overflow-hidden shadow-[0_50px_100px_-20px_rgba(6,182,212,0.15)]">
                                <div className="w-full max-w-sm p-6 sm:p-8 md:p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-cyan-500/30 shadow-2xl scale-75 xs:scale-90 sm:scale-100 md:scale-110">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="h-2 w-16 bg-cyan-500 rounded-full" />
                                        <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">Foundation Check</span>
                                    </div>
                                    <p className="text-base md:text-lg font-black dark:text-white mb-8 leading-tight italic">"Does net torque = 0 always imply full equilibrium?"</p>
                                    <div className="space-y-4">
                                        <div 
                                            className="p-4 rounded-2xl bg-cyan-500/10 border-2 border-cyan-500/60 text-cyan-600 dark:text-cyan-400 text-xs font-black uppercase text-center tracking-widest shadow-lg shadow-cyan-500/10"
                                        >
                                            No, need Net Force = 0
                                        </div>
                                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 text-slate-400 text-xs uppercase text-center tracking-widest">
                                            Yes, rotational eq.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div><br></br>

                    {/* Step 03: Calibrate */}
                    <div className="grid lg:grid-cols-2 gap-24 md:gap-32 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-emerald-500 font-black text-7xl md:text-8xl opacity-10 block mb-6">03</span>
                            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-8">
                                Calibrate <br />
                                <span className="text-emerald-600 dark:text-emerald-400">The Adapation Engine</span>
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-10 text-balance">
                                Your confidence level isn't just a number. We combine it with your diagnostic score to build a specialized pool of <span className="text-emerald-500 font-bold">F / C / S</span> questions exactly tailored for that single session.
                            </p>
                            <div className="flex items-center gap-5 text-slate-900 dark:text-white text-lg font-bold">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                    <Zap className="w-6 h-6 text-emerald-500" />
                                </div>
                                Real-time Difficulty Calibration
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="glass rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-12 border-slate-200 dark:border-white/10 flex flex-col items-center justify-center shadow-[0_50px_100px_-20px_rgba(16,185,129,0.15)] min-h-[350px] sm:min-h-[450px]">
                                <div className="w-full max-w-sm space-y-8 sm:space-y-12">
                                    {/* Confidence Slider Mockup */}
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black uppercase text-emerald-500 tracking-[0.3em] mb-1">Confidence Scale</span>
                                                <div className="text-2xl sm:text-4xl font-black dark:text-white italic tracking-tighter text-indigo-400">Level 4/5</div>
                                            </div>
                                            <div className="flex gap-2 sm:gap-3">
                                                {[1, 2, 3, 4, 5].map(b => (
                                                    <motion.div 
                                                        key={b} 
                                                        initial={{ opacity: 0.5 }}
                                                        whileInView={{ opacity: 1 }}
                                                        transition={{ delay: b * 0.1 }}
                                                        className={`w-8 h-10 sm:w-12 sm:h-14 rounded-xl sm:rounded-2xl shadow-xl border-b-4 ${b <= 4 ? 'bg-emerald-500 border-emerald-700' : 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-950 opacity-40'}`} 
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ratio Result Mockup */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                                        {[
                                            { label: 'Found.', val: '20%', active: false },
                                            { label: 'Core', val: '50%', active: true },
                                            { label: 'Stretch', val: '30%', active: false }
                                        ].map((item, i) => (
                                            <div 
                                                key={i} 
                                                className={`p-5 sm:p-6 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 shadow-2xl ${item.active ? 'bg-white dark:bg-slate-900 border-2 border-emerald-500 scale-105 sm:scale-110 z-10 ring-4 ring-emerald-500/10' : 'bg-slate-50 dark:bg-slate-800/20 border border-slate-200 dark:border-white/5 opacity-60'}`}
                                            >
                                                <span className={`text-[10px] font-black uppercase tracking-widest mb-2 ${item.active ? 'text-emerald-600' : 'text-slate-400'}`}>{item.label}</span>
                                                <span className={`text-xl sm:text-2xl font-black ${item.active ? 'dark:text-white' : 'text-slate-300 dark:text-slate-600'}`}>{item.val}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Logic Prompt Mockup */}
                                    <div className="hidden sm:block pt-6 border-t border-slate-200 dark:border-white/5">
                                        <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest italic">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            Optimal Pool Generated
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div><br></br>

                    {/* Step 04: Master */}
                    <div className="grid lg:grid-cols-2 gap-24 md:gap-32 items-center lg:flex-row-reverse">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-2"
                        >
                            <span className="text-slate-500 font-black text-7xl md:text-8xl opacity-10 block mb-6">04</span>
                            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-8">
                                Master <br />
                                <span className="text-slate-600 dark:text-slate-400">The Revision Cycle</span>
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
                                Complete your 15-question sprint. No distractions, no exits. Close the cycle with a depth-first diagnostic that points exactly to <span className="text-indigo-400 font-bold">what</span> you missed and <span className="text-indigo-400 font-bold">why</span>.
                            </p>
                            <div className="flex items-center gap-5 text-slate-900 dark:text-white text-lg font-bold">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                    <ArrowRight className="w-6 h-6 text-indigo-500" />
                                </div>
                                Session Diagnostic Complete
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-1"
                        >
                            <div className="relative glass rounded-[3rem] p-6 md:p-16 border-slate-200 dark:border-white/10 aspect-video flex items-center justify-center overflow-hidden shadow-2xl">
                                <div className="w-full max-w-sm p-10 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-slate-100 dark:border-white/10 shadow-3xl scale-90 sm:scale-100 md:scale-110">
                                    <div className="flex justify-between items-center mb-10">
                                        <div className="text-[10px] font-black dark:text-slate-500 tracking-[0.3em] uppercase">Diagnostic Report</div>
                                        <div className="px-4 py-1.5 rounded-full bg-indigo-600 text-white text-[9px] font-black italic tracking-widest shadow-lg shadow-indigo-600/20">PASSED</div>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-xs font-black dark:text-white px-1">
                                                <span>CONCEPT ACCURACY</span>
                                                <span className="text-indigo-500">87%</span>
                                            </div>
                                            <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-white/5">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '87%' }}
                                                    transition={{ duration: 1.5, delay: 0.5 }}
                                                    className="h-full bg-indigo-600 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)]" 
                                                />
                                            </div>
                                        </div>
                                        <div className="pt-8 border-t-2 border-slate-100 dark:border-white/5">
                                            <p className="text-[10px] font-black dark:text-slate-400 uppercase tracking-[0.2em] mb-3">AI Diagnostic Summary:</p>
                                            <p className="text-sm font-bold dark:text-white leading-relaxed italic border-l-4 border-indigo-600 pl-4 py-1">
                                                "Exceptional grasp of variable mass systems, but slight hesitation in multi-axis rotation."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Pillars Section - Dual Layout (Mobile List / Desktop Zig-Zag) */}
            <section className="py-24 md:py-48 relative overflow-hidden bg-slate-50 dark:bg-slate-950/20">
                {/* Section Header */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 md:mb-32 text-center">
                    <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.2em] uppercase text-[10px] sm:text-sm mb-4">Core Principles</h2>
                    <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tighter text-balance">The Revise-It Foundation</h3>
                </div>

                <div className="mx-auto max-w-5xl px-6 lg:px-8 relative">
                    {/* SVG Zig-Zag Path - Desktop Only */}
                    <svg 
                        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[400px] pointer-events-none stroke-indigo-500/20 dark:stroke-white/10 fill-none hidden sm:block"
                        viewBox="0 0 200 800"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d="M 100 0 C 100 100, 20 150, 20 250 C 20 350, 180 400, 180 500 C 180 600, 100 650, 100 800"
                            strokeWidth="4"
                            strokeDasharray="12 12"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>

                    {/* Desktop Content (Zig-Zag) */}
                    <div className="hidden sm:block space-y-48 relative">
                        {[
                            {
                                title: "Zero Decision Fatigue",
                                desc: "No more wasting time deciding what to revise next. Our system pre-plans your flow based on your session goals.",
                                icon: MousePointer2,
                                color: "indigo",
                                align: "left"
                            },
                            {
                                title: "Anti-Distraction UI",
                                desc: "No leaderboards, no streaks, no fluff. Just PCM concepts visualized clearly to help you focus on what matters.",
                                icon: MonitorOff,
                                color: "cyan",
                                align: "right"
                            },
                            {
                                title: "Adaptive Intelligence",
                                desc: "Questions tagged by Foundation, Core, and Stretch tags. The mix changes instantly based on your checkpoint performance.",
                                icon: Activity,
                                color: "emerald",
                                align: "left"
                            }
                        ].map((pillar, idx) => {
                            const Icon = pillar.icon;
                            return (
                                <div key={idx} className={`flex sm:flex-row items-center justify-center gap-8 ${pillar.align === 'right' ? 'sm:flex-row-reverse' : ''}`}>
                                    {/* Milestone Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: pillar.align === 'left' ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="w-1/2 group"
                                    >
                                        <div className="relative glass p-10 rounded-[3rem] border-slate-200 dark:border-white/5 transition-all duration-500 group-hover:scale-[1.02] shadow-xl group-hover:shadow-2xl">
                                            <div className={`w-14 h-14 rounded-2xl bg-${pillar.color}-500/10 flex items-center justify-center border border-${pillar.color}-500/20 mb-6`}>
                                                <Icon className={`w-7 h-7 text-${pillar.color}-500`} />
                                            </div>
                                            <h4 className="text-2xl font-black dark:text-white mb-4 uppercase tracking-tight">{pillar.title}</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{pillar.desc}</p>
                                        </div>
                                    </motion.div>

                                    {/* Path Node Indicator */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center">
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                                            className={`w-6 h-6 rounded-full bg-${pillar.color}-500 ring-4 ring-${pillar.color}-500/20 z-10 shadow-lg`}
                                        />
                                    </div>

                                    <div className="w-1/2" />
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile Content (Premium Card Stack) */}
                    <div className="sm:hidden flex flex-col gap-10">
                        {[
                            {
                                title: "Zero Decision Fatigue",
                                desc: "Our system pre-plans your flow based on your session goals.",
                                icon: MousePointer2,
                                color: "indigo"
                            },
                            {
                                title: "Anti-Distraction UI",
                                desc: "No leaderboards, no streaks, no fluff. Just PCM concepts visualized clearly.",
                                icon: MonitorOff,
                                color: "cyan"
                            },
                            {
                                title: "Adaptive Intelligence",
                                desc: "Question mix changes instantly based on your checkpoint performance.",
                                icon: Activity,
                                color: "emerald"
                            }
                        ].map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative overflow-hidden glass p-8 rounded-[2.5rem] border-slate-200 dark:border-white/10"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${pillar.color}-500/5 -mr-16 -mt-16 blur-3xl rounded-full`} />
                                
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-2xl bg-${pillar.color}-500/10 flex items-center justify-center border border-${pillar.color}-500/20`}>
                                        <pillar.icon className={`w-6 h-6 text-${pillar.color}-500`} />
                                    </div>
                                    <div className={`text-[10px] font-black uppercase text-${pillar.color}-500 tracking-[0.2em]`}>
                                        Pillar 0{idx + 1}
                                    </div>
                                </div>
                                <h4 className="text-xl font-black dark:text-white mb-3 uppercase tracking-tight">{pillar.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                    {pillar.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Final CTA Section */}
            <section className="py-16 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-900/20 -z-10" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-20" />
                
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 md:mb-8 italic uppercase">
                            Ready to Bridge <br className="hidden sm:block" />the Gap?
                        </h3>
                        <p className="text-indigo-100/70 text-base md:text-lg mb-8 md:mb-12 max-w-xl mx-auto font-medium">
                            Join thousands of aspirants who have stopped guessing and started mastering the core of PCM.
                        </p>
                        <button
                            onClick={onGetStarted}
                            className="bg-white text-indigo-600 hover:bg-slate-50 px-8 md:px-12 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black shadow-2xl shadow-black/20 transition-all hover:-translate-y-1 active:scale-95 group flex items-center gap-3 mx-auto"
                        >
                            Begin Your First Session
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Premium Footer */}
            <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                        {/* Brand Column */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white shadow-xl rotate-3">
                                    <Brain className="w-7 h-7" />
                                </div>
                                <span className="text-3xl font-black tracking-tighter dark:text-white italic uppercase">Revise-It</span>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-10 font-medium">
                                The ultimate high-fidelity revision engine for PCM aspirants. Visualizing complexity, simplifying success.
                            </p>
                            <div className="flex gap-6">
                                {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                                    <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all border border-white/5">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8">Platform</h4>
                            <ul className="space-y-4">
                                {['Mindmaps', 'Flashcards', 'Adaptive Quiz', 'Beta Access'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors font-bold text-sm">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8">Resources</h4>
                            <ul className="space-y-4">
                                {['Physics', 'Chemistry', 'Mathematics', 'Study Guide'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors font-bold text-sm">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Footer Bar */}
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-slate-500 text-sm font-bold tracking-tight">
                            © {new Date().getFullYear()} Revise-It System. All rights reserved.
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                            Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for PCM Aspirants.
                        </div>
                    </div>
                </div>
            </footer>

            {/* Bottom Decorative Element */}
            <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-400 to-indigo-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                />
            </div>
        </div>
    );
};

export default Landing;
