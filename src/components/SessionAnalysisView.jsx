import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
    Trophy, 
    ArrowRight, 
    ArrowDown, 
    Target, 
    AlertCircle, 
    Home, 
    RotateCcw, 
    Activity,
    BrainCircuit,
    Sparkles,
    Calendar,
    ArrowUpRight
} from 'lucide-react';
import Latex from './Latex';

const SessionAnalysisView = ({ score, total, chosenConfidence, onHome, onRetry }) => {
    const percentage = (score / total) * 100;

    const analysis = useMemo(() => {
        let actualLevel;
        let realityCheck;
        let rankImpact;
        let prescription;
        let nextStep;
        let colorClass;
        let gradientClass;

        if (percentage === 100) {
            actualLevel = chosenConfidence;
            if (chosenConfidence === 5) {
                realityCheck = "Absolute perfection. Zero negative marking risk. You've secured maximum potential here.";
                rankImpact = "increase your rank by ~1500";
                prescription = "Maintain this level. Review briefly after 14 days to keep it fresh. You are ready for advanced mocks.";
                nextStep = "MASTERY";
            } else {
                realityCheck = `Perfect execution at Level ${chosenConfidence}. However, JEE demands you master higher difficulties.`;
                rankImpact = "increase your rank by ~800";
                prescription = `You are ready. Tomorrow, challenge yourself strictly at Level ${chosenConfidence + 1} to build deeper resilience.`;
                nextStep = "LEVEL UP";
            }
            colorClass = "text-emerald-500";
            gradientClass = "from-emerald-500 to-teal-400";
        } else if (percentage >= 90) {
            actualLevel = chosenConfidence;
            if (chosenConfidence === 5) {
                realityCheck = "Mastery approaching at the highest level, but JEE demands flawless execution. One silly mistake costs hundreds of ranks.";
                rankImpact = "increase your rank by ~1000";
                prescription = "Focus strictly on the missed questions. Re-attempt to secure a perfect 100% at this max difficulty.";
                nextStep = "PRECISION TUNING";
            } else {
                realityCheck = `Excellent performance at Level ${chosenConfidence}, but minor gaps exist before you can safely level up.`;
                rankImpact = "increase your rank by ~600";
                prescription = `Identify the silly mistakes. Iron them out today and aim for Level ${chosenConfidence + 1} tomorrow.`;
                nextStep = "REFINEMENT";
            }
            colorClass = "text-emerald-500";
            gradientClass = "from-emerald-500 to-teal-400";
        } else if (percentage >= 80) {
            actualLevel = chosenConfidence;
            realityCheck = `Strong performance at Level ${chosenConfidence}, but you are leaving marks on the table. Minor gaps are the difference between IITs and NITs.`;
            rankImpact = "increase your rank by ~500";
            prescription = `Revise specific weak points for 1 day. Re-attempt at Level ${chosenConfidence} to iron out the remaining errors before moving up.`;
            nextStep = "1-DAY REVISION";
            colorClass = "text-cyan-500";
            gradientClass = "from-cyan-500 to-blue-400";
        } else if (percentage >= 70) {
            actualLevel = Math.max(1, chosenConfidence - 1);
            realityCheck = `Solid understanding for Level ${chosenConfidence}, but highly prone to tricky questions. You are in the danger zone for negative marks.`;
            rankImpact = "decrease your rank by ~500";
            prescription = `Do not move to a higher level yet. Spend 1 day refining core concepts before re-attempting Level ${chosenConfidence}.`;
            nextStep = "1-DAY REFINEMENT";
            colorClass = "text-indigo-500";
            gradientClass = "from-indigo-500 to-blue-500";
        } else if (percentage >= 60) {
            actualLevel = Math.max(1, chosenConfidence - 1);
            realityCheck = `Average grasp. You confidently chose Level ${chosenConfidence}, but lack the analytical depth required to score securely.`;
            rankImpact = "decrease your rank by ~1500";
            prescription = "Drop down one level. Review your notes for 2 days. Focus on application rather than memorization.";
            nextStep = "2-DAY REVIEW";
            colorClass = "text-violet-500";
            gradientClass = "from-violet-500 to-purple-500";
        } else if (percentage >= 50) {
            actualLevel = Math.max(1, chosenConfidence - 2);
            realityCheck = `Surface-level knowledge. You aimed for Level ${chosenConfidence}, but the delusion gap is widening. Your confidence outpaces your competence.`;
            rankImpact = "decrease your rank by ~2500";
            prescription = `Stop advanced problem-solving. Re-read the theory thoroughly for 2 days. Re-calibrate at Level ${actualLevel}.`;
            nextStep = "2-DAY RE-READ";
            colorClass = "text-amber-500";
            gradientClass = "from-amber-500 to-orange-400";
        } else if (percentage >= 40) {
            actualLevel = Math.max(1, chosenConfidence - 2);
            realityCheck = chosenConfidence >= 4 
                ? `Massive delusion gap. You attempted Level ${chosenConfidence} but fell into a negative marking trap. You are applying concepts fundamentally incorrectly.`
                : `High risk of negative marking trap. You are guessing or applying foundational concepts incorrectly.`;
            rankImpact = "decrease your rank by ~4000";
            prescription = "Halt practice. You need a 3-day conceptual rebuild. Start over with the absolute basics.";
            nextStep = "3-DAY REBUILD";
            colorClass = "text-orange-500";
            gradientClass = "from-orange-500 to-red-400";
        } else if (percentage >= 30) {
            actualLevel = 1;
            realityCheck = chosenConfidence >= 4 
                ? `Severe delusion. Continuing to attempt Level ${chosenConfidence} with this understanding will actively destroy your overall JEE score.`
                : `Severe conceptual weakness. Continuing this path will actively destroy your overall JEE score.`;
            rankImpact = "decrease your rank by ~6000";
            prescription = "Immediate intervention required. Spend 3 days with detailed lectures. Re-attempt only at Level 1.";
            nextStep = "INTERVENTION";
            colorClass = "text-rose-500";
            gradientClass = "from-rose-500 to-pink-500";
        } else if (percentage >= 20) {
            actualLevel = 1;
            realityCheck = "Fundamental misunderstanding. You are operating on pure guesswork and false assumptions.";
            rankImpact = "decrease your rank by ~8000";
            prescription = "Scrap everything you think you know about this chapter. Dedicate 4 full days to foundational theory.";
            nextStep = "FOUNDATION RESET";
            colorClass = "text-red-600";
            gradientClass = "from-red-600 to-rose-600";
        } else if (percentage >= 10) {
            actualLevel = 1;
            realityCheck = chosenConfidence === 1
                ? "Critical failure point even at Level 1. It is mathematically better to skip this topic entirely than to attempt it and get negative marks."
                : `Critical failure point. You chose Level ${chosenConfidence} but lack Level 1 understanding. It is mathematically better to skip this topic entirely.`;
            rankImpact = "decrease your rank by ~10000+";
            prescription = "Re-evaluate if you should tackle this chapter right now. If yes, start from 0 for the next 5 days.";
            nextStep = "CRITICAL RESET";
            colorClass = "text-red-700";
            gradientClass = "from-red-700 to-red-900";
        } else {
            actualLevel = 1;
            realityCheck = chosenConfidence === 5 
                ? "Total disconnect. The delusion gap is at its peak. You are actively harming your JEE preparation by attempting Level 5."
                : "Total disconnect. The delusion gap is at its peak. You are actively harming your JEE preparation by guessing.";
            rankImpact = "jeopardize your selection";
            prescription = "Drop this chapter entirely for now. Focus on your strong subjects. Only return when you have 1 week to spare.";
            nextStep = "ABORT & PIVOT";
            colorClass = "text-slate-800 dark:text-slate-400";
            gradientClass = "from-slate-800 to-slate-950 dark:from-slate-700 dark:to-slate-900";
        }

        return { actualLevel, realityCheck, rankImpact, prescription, nextStep, colorClass, gradientClass };
    }, [percentage, chosenConfidence]);

    const isLevelMatch = analysis.actualLevel === chosenConfidence;

    return (
        <div className="max-w-5xl mx-auto py-8 md:py-16 px-4 flex flex-col min-h-[calc(100vh-80px)] items-center justify-center relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[4rem] border border-slate-200/50 dark:border-slate-800/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] p-6 md:p-14 relative"
            >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 border-b border-slate-200/50 dark:border-slate-800/50 pb-10">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black tracking-widest uppercase mb-4">
                            <Activity size={12} />
                            Diagnostic Complete
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tighter">
                            Session <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500">Analysis</span>
                        </h1>
                    </div>
                    
                    <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${analysis.gradientClass} flex items-center justify-center text-white shadow-lg`}>
                            <BrainCircuit size={32} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency Index</p>
                            <p className="text-2xl font-black text-slate-900 dark:text-white">{percentage}%</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
                    {/* Comparison Side */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-white dark:bg-slate-950/50 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800/50 shadow-sm">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-10 text-center">Calibration Result</h3>
                            
                            <div className="flex items-center justify-around relative">
                                {/* Connector line */}
                                {!isLevelMatch && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-px bg-dashed border-t-2 border-dashed border-slate-200 dark:border-slate-800 hidden md:block" />
                                )}
                                
                                <div className="text-center group">
                                    <div className={`text-6xl font-black mb-2 transition-colors ${isLevelMatch ? 'text-indigo-600' : 'text-slate-200 dark:text-slate-800'}`}>
                                        {chosenConfidence}
                                    </div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Self Map</p>
                                </div>

                                {!isLevelMatch && (
                                    <div className="text-slate-300 dark:text-slate-700 animate-pulse">
                                        <ArrowRight size={32} className="hidden md:block" />
                                        <ArrowDown size={32} className="block md:hidden" />
                                    </div>
                                )}

                                {!isLevelMatch && (
                                    <div className="text-center">
                                        <div className={`text-6xl font-black mb-2 ${analysis.colorClass}`}>
                                            {analysis.actualLevel}
                                        </div>
                                        <p className={`text-[10px] font-black uppercase tracking-widest ${analysis.colorClass}`}>Reality</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-6 rounded-3xl border border-emerald-100/50 dark:border-emerald-800/50">
                                <Target className="text-emerald-500 mb-3" size={20} />
                                <p className="text-2xl font-black text-slate-900 dark:text-white">{score}</p>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Hits</p>
                            </div>
                            <div className="bg-rose-50/50 dark:bg-rose-900/10 p-6 rounded-3xl border border-rose-100/50 dark:border-rose-800/50">
                                <AlertCircle className="text-rose-500 mb-3" size={20} />
                                <p className="text-2xl font-black text-slate-900 dark:text-white">{total - score}</p>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Misses</p>
                            </div>
                        </div>
                    </div>

                    {/* Report Side */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className={`p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br ${analysis.gradientClass} text-white shadow-xl relative overflow-hidden group`}>
                            <Sparkles className="absolute -top-4 -right-4 w-24 h-24 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
                            
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 opacity-80">Rank Status Analysis</h3>
                            <div className="flex items-start gap-4 mb-8">
                                <ArrowUpRight size={28} className="shrink-0 mt-1" />
                                <p className="text-xl md:text-2xl font-bold leading-tight">
                                    Continuing this path will <span className="underline decoration-2 underline-offset-4 font-black">{analysis.rankImpact}</span> in the actual exam.
                                </p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <p className="text-sm font-medium leading-relaxed opacity-90 italic">
                                    "<Latex>{analysis.realityCheck}</Latex>"
                                </p>
                            </div>
                        </div>

                        <div className="flex-grow bg-slate-50 dark:bg-slate-950/50 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-3 mb-6">
                                <Calendar size={18} className="text-indigo-600 dark:text-indigo-400" />
                                <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Prescribed Action Plan</h4>
                            </div>
                            
                            <div className="flex flex-col gap-6">
                                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <p className="text-slate-600 dark:text-slate-300 font-bold leading-relaxed">
                                        {analysis.prescription}
                                    </p>
                                </div>
                                
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Next Target</span>
                                        <span className={`text-lg font-black ${analysis.colorClass}`}>{analysis.nextStep}</span>
                                    </div>
                                    <Trophy size={32} className={`${analysis.colorClass} opacity-20`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={onRetry}
                        className="flex-1 flex items-center justify-center gap-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
                    >
                        <RotateCcw size={18} /> Re-Calibrate
                    </button>
                    <button
                        onClick={onHome}
                        className="flex-1 flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-indigo-500/20 hover:scale-[1.02] transition-all active:scale-95"
                    >
                        <Home size={18} /> Dashboard
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default SessionAnalysisView;
