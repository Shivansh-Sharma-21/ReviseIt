import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Brain, BookOpen, MousePointer2, MonitorOff, Activity, Heart } from 'lucide-react';

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
                        { icon: <Target className="w-8 h-8" />, title: "Pattern Recognition", desc: "Identify traps across all three JEE subjects." },
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
            <section className="py-40 md:py-56">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-40 md:space-y-64">
                    <div className="text-center mb-32 md:mb-48">
                        <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">Inside the System</h2>
                        <h3 className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter">The JEE Revise Flow</h3>
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
                            {/* Exact replica of Mindmap.jsx canvas */}
                            <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(79,70,229,0.2)] aspect-[3/4] sm:aspect-[4/3] bg-indigo-100/80 dark:bg-[#020617] border border-slate-200 dark:border-white/10">
                                {/* Dark mode radial bg from Mindmap.jsx */}
                                <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />

                                <div className="relative w-full h-full flex flex-col items-center justify-center scale-[0.55] xs:scale-[0.65] sm:scale-75 md:scale-[0.85]">
                                    {/* RootNode - exact match from Mindmap.jsx */}
                                    <div className="px-10 py-7 rounded-[3rem] bg-gradient-to-br from-indigo-600 via-indigo-800 to-violet-950 text-white shadow-[0_40px_100px_rgba(79,70,229,0.5)] border-[6px] border-white/40 min-w-[250px] text-center relative overflow-hidden z-20 mb-14 transition-transform duration-700 group-hover:scale-[1.03]">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]" />
                                        <div className="font-black text-xs tracking-[0.6em] uppercase text-indigo-300 mb-2">Core Curriculum</div>
                                        <div className="font-black text-2xl tracking-[-0.05em] leading-[0.9] uppercase drop-shadow-2xl">Rotational Dynamics</div>
                                    </div>

                                    {/* Animated edges */}
                                    <svg className="absolute top-[48%] left-0 w-full h-[100px] pointer-events-none -translate-y-full z-10" preserveAspectRatio="none">
                                        <line x1="50%" y1="0" x2="28%" y2="100%" stroke="#4f46e5" strokeWidth="5" opacity="0.8" />
                                        <line x1="50%" y1="0" x2="72%" y2="100%" stroke="#4f46e5" strokeWidth="5" opacity="0.8" />
                                    </svg>

                                    <div className="flex gap-10 sm:gap-20 relative z-20">
                                        {/* TopicNode - exact match from Mindmap.jsx */}
                                        <div className="px-8 py-5 rounded-[2rem] bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl border-[3px] border-slate-400/50 dark:border-indigo-400/20 shadow-[0_40px_80px_rgba(15,23,42,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-center transition-all duration-500 group-hover:border-indigo-600 dark:group-hover:border-indigo-400 group-hover:scale-[1.05]">
                                            <div className="font-extrabold text-slate-950 dark:text-white text-base tracking-tight leading-tight">Moment of Inertia</div>
                                        </div>
                                        <div className="px-8 py-5 rounded-[2rem] bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl border-[3px] border-slate-400/50 dark:border-indigo-400/20 shadow-[0_40px_80px_rgba(15,23,42,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-center transition-all duration-500 group-hover:border-indigo-600 dark:group-hover:border-indigo-400 group-hover:scale-[1.05]">
                                            <div className="font-extrabold text-slate-950 dark:text-white text-base tracking-tight leading-tight">Torque & Acc.</div>
                                        </div>
                                    </div>
                                </div>

                                {/* FlashcardModal overlay - exact match from Mindmap.jsx */}
                                <motion.div 
                                    animate={{ y: [5, -5, 5], opacity: [0.95, 1, 0.95] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-52 xs:w-60 md:w-72 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 z-30 overflow-hidden"
                                >
                                    {/* Modal Header - exact match */}
                                    <div className="px-4 py-3 md:px-5 md:py-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                                            <BookOpen className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-300">Quick Revision</h4>
                                            <h2 className="text-[10px] md:text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">MOI Basics</h2>
                                        </div>
                                    </div>
                                    {/* Modal Content */}
                                    <div className="p-4 md:p-5 space-y-3">
                                        {/* Core Concept */}
                                        <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-300">
                                            <BookOpen className="w-3 h-3" strokeWidth={3} />
                                            <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest">Core Concept & Formulas</span>
                                        </div>
                                        <div className="flex gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                                            <div className="mt-1 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                                            <p className="text-[9px] md:text-xs text-slate-700 dark:text-slate-100 font-semibold leading-relaxed">Parallel Axis Theorem: one axis must pass through the Center of Mass.</p>
                                        </div>
                                        {/* Flash Card */}
                                        <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
                                            <div className="text-[7px] font-black text-indigo-600 dark:text-indigo-300 mb-1 uppercase tracking-[0.15em]">Flash Question</div>
                                            <div className="text-[9px] md:text-xs text-slate-900 dark:text-white font-bold mb-1.5">What are the axis requirements?</div>
                                            <div className="text-[8px] md:text-[10px] text-slate-600 dark:text-slate-200 font-medium p-2 rounded-lg bg-white/50 dark:bg-slate-950">"One axis through CoM, other parallel."</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

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
                            {/* Exact replica of QuizView.jsx */}
                            <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(6,182,212,0.15)] bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 p-5 sm:p-8 md:p-10">
                                {/* Header - from QuizView.jsx */}
                                <div className="flex justify-between items-center mb-4 sm:mb-6">
                                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[8px] sm:text-[10px] font-black tracking-[0.2em] uppercase">
                                        <ArrowRight className="w-3 h-3 rotate-180" /> Back
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[7px] sm:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Foundational Quiz</span>
                                        <span className="text-[9px] sm:text-xs font-black text-indigo-600 dark:text-indigo-400">Question 3 of 5</span>
                                    </div>
                                </div>

                                {/* Progress bar - from QuizView.jsx */}
                                <div className="w-full h-1 sm:h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-5 sm:mb-8 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-indigo-500"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '60%' }}
                                        transition={{ duration: 1 }}
                                    />
                                </div>

                                {/* Question Card - from QuizView.jsx */}
                                <div className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-xl mb-4 sm:mb-6">
                                    {/* F Tag pill - from RevisionQuizView.jsx */}
                                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                                        <div className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-100 text-emerald-600 text-[7px] sm:text-[9px] font-black uppercase tracking-widest">FOUNDATIONAL</div>
                                    </div>

                                    <h2 className="text-sm sm:text-xl font-black text-slate-900 dark:text-white leading-tight mb-5 sm:mb-8">
                                        "Does net torque = 0 always imply full equilibrium?"
                                    </h2>

                                    {/* 2x2 Option Grid - from QuizView.jsx */}
                                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                        {/* Correct answer - emerald state */}
                                        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-500 border-2 border-emerald-500 text-white shadow-lg shadow-emerald-500/30 text-[9px] sm:text-sm font-bold flex items-center justify-between">
                                            <span>No, need Net Force = 0</span>
                                        </div>
                                        {/* Wrong selected - rose state */}
                                        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-500 border-2 border-rose-500 text-white shadow-lg shadow-rose-500/30 text-[9px] sm:text-sm font-bold flex items-center justify-between">
                                            <span>Yes, rotational eq.</span>
                                        </div>
                                        {/* Dimmed options */}
                                        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl opacity-40 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-800 text-slate-400 text-[9px] sm:text-sm font-bold">
                                            Depends on frame
                                        </div>
                                        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl opacity-40 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-800 text-slate-400 text-[9px] sm:text-sm font-bold">
                                            Only for rigid bodies
                                        </div>
                                    </div>
                                </div>

                                {/* Result bar - from RevisionQuizView.jsx solution node */}
                                <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-[1.5rem] sm:rounded-[2rem] border-2 border-slate-200 dark:border-slate-800 shadow-lg flex items-center gap-3 sm:gap-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                                        <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <div className="font-black text-[7px] sm:text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">Concept Node</div>
                                        <p className="text-[8px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold leading-relaxed truncate">Equilibrium requires both ΣF = 0 and Στ = 0.</p>
                                    </div>
                                    <div className="bg-indigo-600 text-white px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[7px] sm:text-[10px] font-black uppercase tracking-widest flex-shrink-0 shadow-lg shadow-indigo-600/30">
                                        Next
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

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
                            {/* Exact replica of QuizView.jsx result screen */}
                            <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(16,185,129,0.15)] bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-10">
                                {/* Trophy header - from QuizView.jsx */}
                                <div className="text-center mb-6 sm:mb-8">
                                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                        <Target className="w-7 h-7 sm:w-10 sm:h-10 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-1 sm:mb-2">Foundation Built!</h2>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[7px] sm:text-[10px]">How confident are you with this unit?</p>
                                </div>

                                {/* 5-column confidence grid - exact match from QuizView.jsx */}
                                <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-3 sm:mb-4">
                                    {[1, 2, 3, 4, 5].map((level) => (
                                        <div
                                            key={level}
                                            className={`aspect-square rounded-xl sm:rounded-2xl flex flex-col items-center justify-center gap-1 border-2 transition-all duration-300 ${level === 4
                                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-600/30 -translate-y-2'
                                                : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-400'
                                            }`}
                                        >
                                            <span className="text-base sm:text-2xl font-black">{level}</span>
                                            <span className={`text-[6px] sm:text-[8px] font-black uppercase tracking-tighter ${level === 4 ? 'opacity-100' : 'opacity-0'}`}>Level</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Scale labels - from QuizView.jsx */}
                                <div className="flex justify-between px-1 sm:px-2 text-[7px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-6 sm:mb-8">
                                    <span>Basic Grip</span>
                                    <span>Absolute Mastery</span>
                                </div>

                                {/* Action buttons - from QuizView.jsx */}
                                <div className="flex gap-3 sm:gap-4">
                                    <div className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-[8px] sm:text-xs font-black uppercase tracking-widest">
                                        Retake
                                    </div>
                                    <div className="flex-1 flex items-center justify-center gap-1.5 bg-indigo-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-[8px] sm:text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-600/20">
                                        Complete Review
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

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
                            {/* Exact replica of SessionAnalysisView.jsx */}
                            <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-2xl p-5 sm:p-8 md:p-10">
                                {/* Decorative background - from SessionAnalysisView.jsx */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 blur-3xl rounded-full -mr-24 -mt-24" />

                                {/* Header - from SessionAnalysisView.jsx */}
                                <div className="text-center mb-6 sm:mb-8">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-1">Session Analysis</h2>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.3em] text-[7px] sm:text-[10px]">Competency Mapping Result</p>
                                </div>

                                {/* Confidence vs Reality - from SessionAnalysisView.jsx */}
                                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 mb-4 sm:mb-6 border border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center justify-center gap-6 sm:gap-12">
                                        <div className="text-center">
                                            <p className="text-[7px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">You Chose</p>
                                            <div className="relative inline-block">
                                                <span className="text-4xl sm:text-5xl font-black text-slate-300 dark:text-slate-700">4</span>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-full h-1 bg-rose-500 rounded-full rotate-45 opacity-60" />
                                                </div>
                                            </div>
                                            <p className="text-[7px] sm:text-[10px] font-black text-slate-400 uppercase mt-1">Level</p>
                                        </div>

                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                            className="text-slate-300 dark:text-slate-700"
                                        >
                                            <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={3} />
                                        </motion.div>

                                        <div className="text-center">
                                            <p className="text-[7px] sm:text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2 sm:mb-3">Actual Index</p>
                                            <span className="text-4xl sm:text-5xl font-black text-indigo-600">2</span>
                                            <p className="text-[7px] sm:text-[10px] font-black text-indigo-500 uppercase mt-1">Level</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 sm:mt-6 text-center">
                                        <p className="text-[9px] sm:text-sm text-slate-600 dark:text-slate-300 font-bold leading-relaxed max-w-sm mx-auto">
                                            Significant gaps detected. Your actual competency fits 2 levels below your assessment.
                                        </p>
                                    </div>
                                </div>

                                {/* Stats grid - from SessionAnalysisView.jsx */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                                    <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-slate-100 dark:border-slate-800 flex items-center gap-2 sm:gap-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                                            <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[6px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">Scored</p>
                                            <p className="text-sm sm:text-xl font-black text-slate-900 dark:text-white">7 <span className="text-[9px] sm:text-sm text-slate-400">/ 15</span></p>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-slate-100 dark:border-slate-800 flex items-center gap-2 sm:gap-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
                                            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[6px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">Gaps</p>
                                            <p className="text-sm sm:text-xl font-black text-slate-900 dark:text-white">8</p>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 border-slate-100 dark:border-slate-800 flex items-center gap-2 sm:gap-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-50 text-rose-500 flex items-center justify-center flex-shrink-0">
                                            <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[6px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">Verdict</p>
                                            <p className="text-[9px] sm:text-sm font-black uppercase tracking-tight text-rose-500">RE-CALIBRATE</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action buttons - from SessionAnalysisView.jsx */}
                                <div className="flex gap-3 sm:gap-4">
                                    <div className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-3 sm:py-4 rounded-xl sm:rounded-[1.5rem] text-[7px] sm:text-xs font-black uppercase tracking-[0.2em]">
                                        Re-Calibrate
                                    </div>
                                    <div className="flex-1 flex items-center justify-center gap-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 sm:py-4 rounded-xl sm:rounded-[1.5rem] text-[7px] sm:text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                                        Return Home
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
                                desc: "No leaderboards, no streaks, no fluff. Just JEE concepts visualized clearly to help you focus on what matters.",
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
                                desc: "No leaderboards, no streaks, no fluff. Just JEE concepts visualized clearly.",
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
            {/* Final CTA Section - Refined Adaptive Expansion */}
            <section className="py-32 md:py-48 relative overflow-hidden flex items-center justify-center border-t border-slate-200 dark:border-white/5">
                {/* Fixed Background Layering */}
                <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 -z-20" />
                
                <div className="absolute inset-0 -z-10">
                    {/* Linear Moving Grid - Smooth and Constant (No Pulse) */}
                    <motion.div 
                        animate={{ 
                            backgroundPosition: ['0px 0px', '40px 40px'],
                        }}
                        transition={{ 
                            duration: 20, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        className="absolute inset-0 opacity-30 dark:opacity-10"
                        style={{
                            backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent_1px)`,
                            backgroundSize: '40px 40px',
                            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                        }}
                    />
                    
                    {/* Slow Drift Orbs - Constant motion, no blinking */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                x: [0, 50, -50, 0],
                                y: [0, -40, 40, 0],
                            }}
                            transition={{
                                duration: 20 + i * 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-600/20 blur-[100px]"
                            style={{
                                top: `${10 + (i * 30)}%`,
                                left: `${5 + (i * 30)}%`,
                            }}
                        />
                    ))}
                </div>

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-50" />
                
                {/* Static Aura - No Pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-600/20 blur-[150px] rounded-full -z-10" />
                               <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 italic uppercase leading-none">
                            Bridge <br className="hidden sm:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">The Gap.</span>
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-10 md:mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
                            Stop guessing. Start mastering. Join the elite aspirants using high-fidelity revision to conquer JEE once and for all.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onGetStarted}
                            className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 md:px-14 py-4 md:py-6 rounded-2xl text-lg md:text-xl font-black shadow-2xl shadow-indigo-600/20 transition-all group flex items-center gap-4 mx-auto border-2 border-indigo-400/20"
                        >
                            Start Your Session
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Minimal Footer */}
            <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-slate-600 dark:text-slate-400 text-sm font-bold tracking-tight">
                            © {new Date().getFullYear()} Revise-It System. All rights reserved.
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm font-bold">
                            Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for JEE Aspirants.
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
