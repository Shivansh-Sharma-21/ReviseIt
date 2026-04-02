import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4 animate-pulse-slow"></div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Our Mission</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        Perfecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300">Revision Loop</span>.
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        ReviseIt was born out of a simple observation: JEE aspirants spend more time deciding what to study than actually studying. We built a system that eliminates decision fatigue and focuses on what truly matters—bridging the gap between theory and execution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {[
                        {
                            icon: <Target className="w-6 h-6 text-indigo-500" />,
                            title: "Smart Adaptation",
                            desc: "Our algorithms dynamically adjust question difficulty based on your real-time performance and confidence levels."
                        },
                        {
                            icon: <Zap className="w-6 h-6 text-cyan-500" />,
                            title: "Efficiency First",
                            desc: "No fluff, no gamification, just pure focused revision designed to maximize score impact per minute spent."
                        },
                        {
                            icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
                            title: "Honest Assessment",
                            desc: "We prioritize detecting 'false confidence'—the silent killer of JEE scores—through strategic foundation checkpoints."
                        },
                        {
                            icon: <Users className="w-6 h-6 text-cyan-500" />,
                            title: "User-Centric Design",
                            desc: "Built with the intense schedule of a JEE aspirant in mind. Every interaction is optimized for speed and clarity."
                        }
                    ].map((feature, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-white/50 dark:bg-slate-800/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-500/30 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="p-10 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-cyan-600 text-white text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black mb-6 italic">"Revision isn't just re-reading; it's re-thinking."</h2>
                        <p className="text-indigo-100 max-w-xl mx-auto mb-8 text-lg font-medium">
                            Join thousands of students who are turning their weak topics into strong foundations with ReviseIt's precision-engineered revision paths.
                        </p>
                        <div className="flex flex-wrap justify-center gap-12 mt-10">
                            <div>
                                <div className="text-4xl font-black mb-1">50K+</div>
                                <div className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Questions Solved</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black mb-1">98%</div>
                                <div className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Accuracy Improvement</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black mb-1">24/7</div>
                                <div className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Revision Support</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
