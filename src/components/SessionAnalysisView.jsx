import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Target, AlertCircle, Home, RotateCcw, TrendingDown, CheckCircle2 } from 'lucide-react';

const SessionAnalysisView = ({ score, total, chosenConfidence, onHome, onRetry }) => {
    const percentage = (score / total) * 100;

    const analysis = useMemo(() => {
        let actualLevel;
        let message;
        let verdict;
        let colorClass;

        if (percentage >= 75) {
            actualLevel = chosenConfidence;
            message = "Your self-assessment was spot on. You've mastered this unit at the level you expected.";
            verdict = "EXCELLENT";
            colorClass = "text-emerald-500";
        } else if (percentage >= 50) {
            actualLevel = Math.max(1, chosenConfidence - 1);
            message = `You performed slightly below your chosen level. You are currently at Level ${actualLevel}.`;
            verdict = "NEEDS IMPROVEMENT";
            colorClass = "text-amber-500";
        } else if (percentage >= 40) {
            actualLevel = Math.max(1, chosenConfidence - 2);
            message = `Significant gaps detected. Your actual competency fits 2 levels below your assessment.`;
            verdict = "RE-CALIBRATE";
            colorClass = "text-rose-500";
        } else {
            actualLevel = 1;
            message = "Critical foundational gaps found. We recommend restarting the vision map to bridge these nodes.";
            verdict = "CRITICAL REVIEW";
            colorClass = "text-rose-600";
        }

        return { actualLevel, message, verdict, colorClass };
    }, [percentage, chosenConfidence]);

    const isLevelMatch = analysis.actualLevel === chosenConfidence;

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col min-h-[calc(100vh-80px)] items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-slate-200 dark:border-slate-800 shadow-2xl p-8 md:p-12 overflow-hidden relative"
            >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-3xl rounded-full -mr-32 -mt-32" />

                <div className="text-center mb-12">
                    <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-6">
                        <TrendingDown size={40} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-2">Session Analysis</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">Competency Mapping Result</p>
                </div>

                {/* Confidence vs Reality Section */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 mb-8 border border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        <div className="text-center">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">You Chose</p>
                            <div className="relative inline-block">
                                <span className={`text-6xl font-black ${isLevelMatch ? 'text-indigo-600' : 'text-slate-300 dark:text-slate-700'}`}>
                                    {chosenConfidence}
                                </span>
                                {!isLevelMatch && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-full h-1.5 bg-rose-500 rounded-full rotate-45 opacity-60" />
                                    </div>
                                )}
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase mt-2">Level</p>
                        </div>

                        {!isLevelMatch && (
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="text-slate-300 dark:text-slate-700"
                            >
                                <ArrowRight size={48} strokeWidth={3} />
                            </motion.div>
                        )}

                        {!isLevelMatch && (
                            <div className="text-center">
                                <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-4">Actual Index</p>
                                <span className="text-6xl font-black text-indigo-600">
                                    {analysis.actualLevel}
                                </span>
                                <p className="text-[10px] font-black text-indigo-500 uppercase mt-2">Level</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-8 text-center px-4">
                        <p className="text-slate-600 dark:text-slate-300 font-bold leading-relaxed max-w-lg mx-auto">
                            {analysis.message}
                        </p>
                    </div>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <Target size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Scored</p>
                            <p className="text-xl font-black text-slate-900 dark:text-white">{score} <span className="text-sm text-slate-400">/ {total}</span></p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                            <AlertCircle size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gaps Found</p>
                            <p className="text-xl font-black text-slate-900 dark:text-white">{total - score}</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center ${analysis.colorClass}`}>
                            <Trophy size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verdict</p>
                            <p className={`text-sm font-black uppercase tracking-tight ${analysis.colorClass}`}>{analysis.verdict}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={onRetry}
                        className="flex-1 flex items-center justify-center gap-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-200 transition-all active:scale-95"
                    >
                        <RotateCcw size={18} /> Re-Calibrate
                    </button>
                    <button
                        onClick={onHome}
                        className="flex-1 flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] transition-all active:scale-95"
                    >
                        <Home size={18} /> Return Home
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default SessionAnalysisView;
