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

        if (percentage >= 90) {
            actualLevel = chosenConfidence;
            if (chosenConfidence === 5) {
                realityCheck = "Zero negative marking risk. You've secured maximum potential here.";
                rankImpact = "increase your rank by ~1000";
                prescription = "Absolute mastery achieved! No immediate revision needed. Review this chapter briefly after 14 days to maintain peak retention.";
                nextStep = "MASTERY";
                colorClass = "text-emerald-500";
                gradientClass = "from-emerald-500 to-teal-400";
            } else {
                realityCheck = `Great performance at Level ${chosenConfidence}, but JEE demands more depth to secure a top rank.`;
                rankImpact = "increase your rank by another ~500";
                prescription = `Come back tomorrow and challenge yourself strictly at Level ${chosenConfidence + 1}.`;
                nextStep = "LEVEL UP";
                colorClass = "text-emerald-500";
                gradientClass = "from-emerald-500 to-teal-400";
            }
        } else if (percentage >= 70) {
            actualLevel = chosenConfidence;
            realityCheck = "You lost marks to minor conceptual gaps or careless errors.";
            rankImpact = "decrease your rank by ~500";
            prescription = `Revise the specific missed concepts for 1 day. Come back tomorrow and re-attempt at Level ${chosenConfidence} to secure those lost marks.`;
            nextStep = "1-DAY REVISION";
            colorClass = "text-indigo-500";
            gradientClass = "from-indigo-600 to-blue-400";
        } else if (percentage >= 40) {
            actualLevel = Math.max(1, chosenConfidence - 1);
            realityCheck = `High risk of negative marking. Your perceived confidence was Level ${chosenConfidence}, but the reality is lower.`;
            rankImpact = "decrease your rank by ~1000";
            prescription = `Stop solving advanced problems. Dedicate 2 full days to re-reading the theory. Return in 48 hours to attempt a Level ${actualLevel} test.`;
            nextStep = "2-DAY RE-READ";
            colorClass = "text-amber-500";
            gradientClass = "from-amber-500 to-orange-400";
        } else {
            actualLevel = 1;
            realityCheck = "Major negative marking trap detected. Foundation is critically weak.";
            rankImpact = "decrease your rank by ~2000";
            prescription = "Halt all practice for this topic immediately. Spend 3 days rebuilding from scratch. Return and start strictly at a Level 1 diagnostic.";
            nextStep = "3-DAY REBUILD";
            colorClass = "text-rose-600";
            gradientClass = "from-rose-600 to-pink-500";
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
