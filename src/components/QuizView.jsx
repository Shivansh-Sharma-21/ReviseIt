import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, ChevronRight, Trophy, RefreshCw } from 'lucide-react';

const QuizView = ({ chapter, onBack, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);

    // Randomly select 5 Foundational (F) questions
    const quizQuestions = useMemo(() => {
        const foundational = chapter.questions.filter(q => q.tag === 'F');
        // Shuffle and pick 5
        return [...foundational]
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);
    }, [chapter.questions]);

    if (quizQuestions.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                    <Trophy size={40} className="text-slate-400" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight uppercase">No Foundational Tests</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs font-semibold">We are still calibrating the entrance level questions for this unit.</p>
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
        } else {
            setShowResult(true);
        }
    };

    const handleReset = () => {
        setCurrentIndex(0);
        setSelectedOption(null);
        setScore(0);
        setShowResult(false);
        setConfidence(null); // Reset confidence on retake
    };

    const [confidence, setConfidence] = useState(null);

    if (showResult) {
        return (
            <div className="max-w-2xl mx-auto py-12 px-4 flex flex-col items-center justify-center min-h-[70vh]">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-2xl p-10 text-center"
                >
                    <div className="w-20 h-20 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-6">
                        <Trophy size={40} className="text-indigo-600 dark:text-indigo-400" />
                    </div>

                    <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Foundation Built!</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-bold mb-10 uppercase tracking-widest text-[10px]">How confident are you with this unit?</p>

                    <div className="flex flex-col gap-8 mb-12">
                        <div className="grid grid-cols-5 gap-3 md:gap-4">
                            {[1, 2, 3, 4, 5].map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setConfidence(level)}
                                    className={`aspect-square rounded-2xl md:rounded-3xl flex flex-col items-center justify-center gap-2 border-2 transition-all duration-300 group ${confidence === level
                                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-600/30 -translate-y-2'
                                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-400 hover:border-indigo-400 hover:text-indigo-600'
                                        }`}
                                >
                                    <span className="text-xl md:text-2xl font-black">{level}</span>
                                    <span className={`text-[8px] font-black uppercase tracking-tighter transition-opacity ${confidence === level ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>Level</span>
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between px-2 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            <span>Basic Grip</span>
                            <span>Absolute Mastery</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleReset}
                            className="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 hover:text-indigo-600 transition-colors"
                        >
                            <RefreshCw size={16} /> Retake
                        </button>
                        <button
                            onClick={() => onComplete(confidence)}
                            disabled={!confidence}
                            className={`flex-1 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg transition-all ${confidence
                                ? 'bg-indigo-600 text-white shadow-indigo-600/20 hover:scale-105 opacity-100'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed opacity-50'
                                }`}
                        >
                            Complete Review
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col min-h-[calc(100vh-80px)]">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-black text-[10px] tracking-[0.2em] uppercase transition-all"
                >
                    <ArrowLeft size={14} /> Back
                </button>

                <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Foundational Quiz</span>
                    <span className="text-xs font-black text-indigo-600 dark:text-indigo-400">
                        Question {currentIndex + 1} of {quizQuestions.length}
                    </span>
                </div>
            </div>

            {/* Progress */}
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-12 overflow-hidden">
                <motion.div
                    className="h-full bg-indigo-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                />
            </div>

            {/* Question Card */}
            <div className="flex-grow flex flex-col">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex-grow flex flex-col"
                    >
                        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-xl mb-8">
                            <h2 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight mb-12">
                                {currentQuestion.text}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {currentQuestion.options.map((option, idx) => {
                                    const isSelected = selectedOption === option;
                                    const isCorrect = option === currentQuestion.correctAnswer;
                                    const showResultFlag = selectedOption !== null;

                                    let buttonStyle = "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300";

                                    if (showResultFlag) {
                                        if (isCorrect) {
                                            buttonStyle = "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-500 text-emerald-700 dark:text-emerald-400";
                                        } else if (isSelected) {
                                            buttonStyle = "bg-rose-50 dark:bg-rose-900/30 border-rose-500 text-rose-700 dark:text-rose-400";
                                        } else {
                                            buttonStyle = "opacity-50 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300";
                                        }
                                    } else {
                                        buttonStyle += " hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer";
                                    }

                                    return (
                                        <button
                                            key={idx}
                                            disabled={selectedOption !== null}
                                            onClick={() => handleOptionSelect(option)}
                                            className={`group relative p-6 rounded-2xl border-2 text-left font-bold transition-all flex items-center justify-between ${buttonStyle}`}
                                        >
                                            <span className="text-base md:text-lg">{option}</span>
                                            {showResultFlag && isCorrect && <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />}
                                            {showResultFlag && isSelected && !isCorrect && <XCircle size={24} className="text-rose-500 shrink-0" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Remark Overlay */}
                        <AnimatePresence>
                            {selectedOption && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    className="mb-8 p-6 flex items-center justify-between bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedOption === currentQuestion.correctAnswer ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                                            {selectedOption === currentQuestion.correctAnswer ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                                        </div>
                                        <div>
                                            <p className={`font-black uppercase tracking-widest text-xs ${selectedOption === currentQuestion.correctAnswer ? 'text-emerald-600' : 'text-rose-600'}`}>
                                                {selectedOption === currentQuestion.correctAnswer ? 'Remarkably Correct!' : 'Needs Calibration'}
                                            </p>
                                            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">
                                                {selectedOption === currentQuestion.correctAnswer ? 'Foundational node mastered.' : 'Rethink the core concept.'}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleNext}
                                        className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                                    >
                                        {currentIndex === quizQuestions.length - 1 ? 'Finish Results' : 'Next Question'}
                                        <ChevronRight size={14} />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default QuizView;
