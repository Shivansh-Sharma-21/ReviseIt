import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, ChevronRight, Trophy, RefreshCw, Info } from 'lucide-react';

const RevisionQuizView = ({ chapter, confidence, onBack, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);

    // Adaptive Question Selection based on Confidence Level
    const quizQuestions = useMemo(() => {
        const fQuestions = chapter.questions.filter(q => q.tag === 'F');
        const cQuestions = chapter.questions.filter(q => q.tag === 'C');
        const sQuestions = chapter.questions.filter(q => q.tag === 'S');

        const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

        let fCount, cCount, sCount;

        if (confidence <= 2) {
            fCount = 6; cCount = 6; sCount = 3;
        } else if (confidence === 3) {
            fCount = 3; cCount = 7; sCount = 5;
        } else {
            fCount = 2; cCount = 5; sCount = 8;
        }

        const selected = [
            ...shuffle(fQuestions).slice(0, fCount),
            ...shuffle(cQuestions).slice(0, cCount),
            ...shuffle(sQuestions).slice(0, sCount)
        ];

        return selected; // Grouped by F, then C, then S tags
    }, [chapter.questions, confidence]);

    if (quizQuestions.length < 15) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                    <Info size={40} className="text-slate-400" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight uppercase">Incomplete Module</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs font-semibold">This adaptive revision set requires 15 specific questions which are currently being indexed.</p>
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
                >
                    <ArrowLeft size={16} /> Back
                </button>
            </div>
        );
    }

    const currentQuestion = quizQuestions[currentIndex];
    const progress = ((currentIndex + 1) / quizQuestions.length) * 100;

    const handleOptionSelect = (option) => {
        if (selectedOption !== null) return;
        setSelectedOption(option);
        if (option === currentQuestion.correctAnswer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < quizQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setShowExplanation(false);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <div className="max-w-2xl mx-auto py-12 px-4 flex flex-col items-center justify-center min-h-[70vh]">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-full bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-slate-200 dark:border-slate-800 shadow-2xl p-10 text-center"
                >
                    <div className="w-24 h-24 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-8">
                        <Trophy size={48} className="text-indigo-600 dark:text-indigo-400" />
                    </div>

                    <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-2">Revision Summary</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Adaptive Unit Mastering Complete</p>

                    <div className="grid grid-cols-2 gap-6 mb-12">
                        <div className="p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50">
                            <div className="text-4xl font-black text-emerald-600 mb-1">{score}</div>
                            <div className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest">Mastered</div>
                        </div>
                        <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                            <div className="text-4xl font-black text-slate-400 mb-1">{15 - score}</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Review Needed</div>
                        </div>
                    </div>

                    <button
                        onClick={() => onComplete(score, 15)}
                        className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-5 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] transition-all active:scale-95"
                    >
                        Analyze Session
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col min-h-[calc(100vh-80px)]">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex flex-col">
                    <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">Adaptive Revision</h4>
                    <h2 className="text-xl font-black text-slate-900 dark:text-white truncate max-w-[200px] md:max-w-md">{chapter.title}</h2>
                </div>

                <div className="flex items-center gap-6">
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
                        <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">{currentIndex + 1} / 15</span>
                    </div>
                </div>
            </div>

            {/* Progress */}
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-12 overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                />
            </div>

            {/* Question Workspace */}
            <div className="flex flex-col gap-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${currentQuestion.tag === 'F' ? 'bg-emerald-100 text-emerald-600' :
                                currentQuestion.tag === 'C' ? 'bg-amber-100 text-amber-600' :
                                    'bg-rose-100 text-rose-600'
                                }`}>
                                {currentQuestion.tag === 'F' ? 'FOUNDATIONAL' : currentQuestion.tag === 'C' ? 'CORE COMPETENCY' : 'STRETCH CHALLENGE'}
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight mb-12">
                            {currentQuestion.text}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currentQuestion.options.map((option, idx) => {
                                const isSelected = selectedOption === option;
                                const isCorrect = option === currentQuestion.correctAnswer;
                                const showResultFlag = selectedOption !== null;

                                let buttonStyle = "bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300";

                                if (showResultFlag) {
                                    if (isCorrect) {
                                        buttonStyle = "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/30";
                                    } else if (isSelected) {
                                        buttonStyle = "bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-500/30";
                                    } else {
                                        buttonStyle = "opacity-40 bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-800";
                                    }
                                } else {
                                    buttonStyle += " hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-1";
                                }

                                return (
                                    <button
                                        key={idx}
                                        disabled={selectedOption !== null}
                                        onClick={() => handleOptionSelect(option)}
                                        className={`p-6 rounded-2xl border-2 text-left font-bold transition-all flex items-center justify-between ${buttonStyle}`}
                                    >
                                        <span className="text-base md:text-lg">{option}</span>
                                        {showResultFlag && isCorrect && <CheckCircle2 size={24} className="shrink-0" />}
                                        {showResultFlag && isSelected && !isCorrect && <XCircle size={24} className="shrink-0" />}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Solution Node Panel - Now Below the Question */}
                <div className="min-h-[160px]">
                    <AnimatePresence>
                        {selectedOption && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col md:flex-row items-center gap-8"
                            >
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedOption === currentQuestion.correctAnswer ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                                            {selectedOption === currentQuestion.correctAnswer ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                                        </div>
                                        <div>
                                            <div className="font-black text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">
                                                Concept Node
                                            </div>
                                            <div className="font-black text-xs uppercase tracking-widest text-slate-900 dark:text-white">
                                                {selectedOption === currentQuestion.correctAnswer ? 'Correct Analysis' : 'Concept Bridge'}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-bold leading-relaxed">
                                        {currentQuestion.shortExplanation}
                                    </p>
                                </div>

                                <button
                                    onClick={handleNext}
                                    className="w-full md:w-auto bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all active:scale-95 shadow-2xl shadow-indigo-600/30 whitespace-nowrap"
                                >
                                    {currentIndex === quizQuestions.length - 1 ? 'Analyze Results' : 'Next Question'}
                                    <ChevronRight size={18} />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default RevisionQuizView;
