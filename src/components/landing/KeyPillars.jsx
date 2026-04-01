import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, MonitorOff, Activity } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';

const KeyPillars = () => {
    const isMobile = useIsMobile();
    const pillars = [
        {
            title: "Zero Decision Fatigue",
            desc: "No more wasting time deciding what to revise next. Our system pre-plans your flow based on your session goals.",
            icon: MousePointer2,
            color: "indigo"
        },
        {
            title: "Anti-Distraction UI",
            desc: "No leaderboards, no streaks, no fluff. Just JEE concepts visualized clearly to help you focus on what matters.",
            icon: MonitorOff,
            color: "cyan"
        },
        {
            title: "Adaptive Intelligence",
            desc: "Questions tagged by Foundation, Core, and Stretch tags. The mix changes instantly based on your checkpoint performance.",
            icon: Activity,
            color: "emerald"
        }
    ];

    return (
        <section className="py-24 md:py-48 relative overflow-hidden dark:bg-slate-950/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 md:mb-32 text-center">
                <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.2em] uppercase text-[10px] sm:text-sm mb-4">Chapter III</h2>
                <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tighter text-balance">The Revise-It Foundation</h3>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                {/* Horizontal Glowing Connector Line */}
                <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-indigo-500/20 via-cyan-500/50 to-emerald-500/20 z-0 -translate-y-1/2">
                    <motion.div 
                        className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm transform-gpu"
                        animate={{ x: ['-100%', '300%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
                    {pillars.map((pillar, idx) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: isMobile ? 15 : 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: isMobile ? "200px" : "-50px" }}
                                transition={{ duration: isMobile ? 0.2 : 0.8, delay: isMobile ? idx * 0.05 : idx * 0.2, type: "spring", bounce: isMobile ? 0.1 : 0.4 }}
                                className="relative group perspective-1000 transform-gpu"
                            >
                                {/* Gradient Border on Hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-[3.2rem] opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                                
                                <div className="relative glass p-10 h-full rounded-[3rem] border-slate-200 dark:border-white/10 transition-all duration-500 group-hover:scale-[1.02] shadow-xl group-hover:shadow-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl">
                                    <div className={`w-16 h-16 rounded-3xl bg-${pillar.color}-500/10 flex items-center justify-center border border-${pillar.color}-500/20 mb-8`}>
                                        <Icon className={`w-8 h-8 text-${pillar.color}-500`} />
                                    </div>
                                    <h4 className="text-2xl font-black dark:text-white mb-4 tracking-tight">{pillar.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">{pillar.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default KeyPillars;
