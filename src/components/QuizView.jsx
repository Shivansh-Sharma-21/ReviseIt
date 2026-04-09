import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowLeft, 
    CheckCircle2, 
    XCircle, 
    ChevronRight, 
    Trophy, 
    RefreshCw, 
    ChevronLeft, 
    HelpCircle,
    Flag,
    LayoutGrid,
    Check,
    X
} from 'lucide-react';
import Latex from './Latex';

const QuizView = ({ chapter, onBack, onComplete }) => {
    const quizQuestions = useMemo(() => {
        const foundational = chapter.questions.filter(q => q.tag === 'F');
        return [...foundational]
            .sort(() => Math.random() - 0.5)
            .slice(0, Math.min(foundational.length, 5));
    }, [chapter.questions]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [responses, setResponses] = useState({}); 
    const [questionStates, setQuestionStates] = useState(
        quizQuestions.map(() => 'not-visited') 
    );
    const [showResult, setShowResult] = useState(false);
    const [confidence, setConfidence] = useState(null);
    const [submittedQuestions, setSubmittedQuestions] = useState(new Set());

    useEffect(() => {
        if (questionStates[currentIndex] === 'not-visited') {
            const newStates = [...questionStates];
            newStates[currentIndex] = 'not-answered';
            setQuestionStates(newStates);
        }
    }, [currentIndex]);

    const handleOptionSelect = (option) => {
        if (submittedQuestions.has(currentIndex)) return;
        setResponses(prev => ({ ...prev, [currentIndex]: option }));
    };

    const handleSubmitQuestion = () => {
        if (!responses[currentIndex]) return;
        setSubmittedQuestions(prev => {
            const next = new Set(prev);
            next.add(currentIndex);
            return next;
        });
    };

    const handleSaveAndNext = () => {
        const newStates = [...questionStates];
        newStates[currentIndex] = responses[currentIndex] ? 'answered' : 'not-answered';
        setQuestionStates(newStates);

        if (currentIndex < quizQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleMarkForReview = () => {
        const newStates = [...questionStates];
        newStates[currentIndex] = responses[currentIndex] ? 'answered-marked' : 'marked';
        setQuestionStates(newStates);

        if (currentIndex < quizQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handleClear = () => {
        setResponses(prev => {
            const newResp = { ...prev };
            delete newResp[currentIndex];
            return newResp;
        });
        const newStates = [...questionStates];
        newStates[currentIndex] = 'not-answered';
        setQuestionStates(newStates);
    };

    const calculateScore = () => {
        return quizQuestions.reduce((score, q, idx) => 
            responses[idx] === q.correctAnswer ? score + 1 : score, 0);
    };

    const handleSubmit = () => {
        if (window.confirm('Ready to calibrate your results and integrate foundational knowledge?')) {
            setShowResult(true);
        }
    };

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

    if (showResult) {
        const finalScore = calculateScore();
        return (
            <div className="max-w-2xl mx-auto py-8 md:py-12 px-4 flex flex-col items-center justify-center min-h-[70vh]">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-full bg-white dark:bg-slate-900 rounded-[2rem] md:rounded-[3rem] border-2 border-slate-200 dark:border-slate-800 shadow-2xl p-8 md:p-12 text-center"
                >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-6 md:mb-8">
                        <Trophy size={40} className="text-indigo-600 dark:text-indigo-400" />
                    </div>

                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-2">Foundational Knowledge Check</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-bold mb-6 md:mb-8 uppercase tracking-[0.3em] text-[10px]">Test Complete</p>
                    
                    <div className="relative inline-block mb-8 md:mb-12">
                        <div className="text-5xl md:text-7xl font-black text-indigo-600 dark:text-indigo-400 tracking-tighter">
                            {finalScore}<span className="text-slate-300 dark:text-slate-700 text-2xl md:text-3xl mx-2">/</span>{quizQuestions.length}
                        </div>
                        <div className="absolute -inset-4 bg-indigo-500/10 blur-2xl -z-10 rounded-full" />
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 font-bold mb-8 md:mb-10 uppercase tracking-widest text-[10px]">How confident are you in your understanding of this topic?</p>

                    <div className="grid grid-cols-5 gap-2 md:gap-4 mb-8 md:mb-12 max-w-sm md:max-w-md mx-auto">
                        {[1, 2, 3, 4, 5].map((level) => (
                            <button
                                key={level}
                                onClick={() => setConfidence(level)}
                                className={`aspect-square rounded-xl md:rounded-[1.5rem] flex flex-col items-center justify-center gap-1 md:gap-2 border-2 transition-all duration-500 group ${confidence === level
                                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-600/40 -translate-y-1 md:-translate-y-2'
                                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-400 hover:border-indigo-400 hover:text-indigo-600'
                                    }`}
                            >
                                <span className="text-xl md:text-2xl font-black">{level}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => {
                                setResponses({});
                                setQuestionStates(quizQuestions.map(() => 'not-visited'));
                                setCurrentIndex(0);
                                setShowResult(false);
                                setConfidence(null);
                            }}
                            className="flex-1 flex items-center justify-center gap-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-3xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-slate-200 transition-all active:scale-95"
                        >
                            <RefreshCw size={16} /> Retake
                        </button>
                        <button
                            onClick={() => onComplete(confidence)}
                            disabled={!confidence}
                            className={`flex-1 px-6 md:px-10 py-4 md:py-5 rounded-2xl md:rounded-3xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95 ${confidence
                                ? 'bg-indigo-600 text-white shadow-indigo-600/30 hover:scale-[1.02]'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed opacity-50'
                                }`}
                        >
                            Final Revision Session
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    const currentQuestion = quizQuestions[currentIndex];

    const getPaletteStyles = (state, isActive) => {
        const base = "w-10 h-10 md:w-11 md:h-11 flex items-center justify-center text-[10px] md:text-xs font-black rounded-xl md:rounded-2xl border-2 transition-all duration-300 transform";
        const activeRing = isActive ? "ring-2 ring-indigo-500 ring-offset-2 md:ring-offset-4 dark:ring-offset-slate-950 scale-110" : "hover:scale-105";
        
        switch (state) {
            case 'answered': return `${base} ${activeRing} bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/20`;
            case 'marked': return `${base} ${activeRing} bg-violet-600 border-violet-600 text-white rounded-full shadow-lg shadow-violet-600/20`;
            case 'answered-marked': return `${base} ${activeRing} bg-violet-600 border-violet-600 text-white rounded-full shadow-lg shadow-violet-600/20 relative after:content-[''] after:absolute after:-bottom-0.5 after:-right-0.5 after:bg-emerald-500 after:w-3 after:h-3 after:rounded-full after:border-2 after:border-white dark:after:border-slate-950`;
            case 'not-answered': return `${base} ${activeRing} bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-500/20`;
            default: return `${base} ${activeRing} bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400`;
        }
    };

    return (
        <div className="max-w-7xl mx-auto py-4 md:py-12 pb-12 md:pb-8 px-2 md:px-6 flex flex-col gap-4 md:gap-8 min-h-[calc(100vh-80px)]">
            {/* Minimal App Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 pb-4 md:pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-4 md:gap-6">
                    <button 
                        onClick={onBack}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-all shadow-sm group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <div>
                        <h4 className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-0.5 md:mb-1">Foundational Unit Integration</h4>
                        <h2 className="text-lg md:text-2xl font-black text-slate-900 dark:text-white tracking-tight line-clamp-1">{chapter.title}</h2>
                    </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 bg-slate-50 dark:bg-slate-800/50 md:bg-transparent p-3 md:p-0 rounded-2xl">
                    <div className="flex flex-col items-start md:items-end">
                        <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5 opacity-60">Sequence Progress</span>
                        <div className="flex items-center gap-2">
                            <span className="text-lg md:text-xl font-black text-indigo-600 dark:text-indigo-400">{currentIndex + 1}</span>
                            <span className="text-slate-300 dark:text-slate-700 font-bold">/</span>
                            <span className="text-slate-400 font-black">{quizQuestions.length}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                {/* Workspace: Left Area */}
                <div className="flex-grow space-y-4 md:space-y-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <div className="bg-white dark:bg-slate-900 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border-2 border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-indigo-500/5 blur-[60px] md:blur-[100px] -z-10" />
                                <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-violet-500/5 blur-[60px] md:blur-[100px] -z-10" />

                                <div className="flex items-center justify-between mb-6 md:mb-10">
                                    <div className="px-3 md:py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50">
                                        <span className="text-[8px] md:text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Question {currentIndex + 1}</span>
                                    </div>
                                    <button className="text-slate-300 hover:text-rose-500 transition-colors">
                                        <Flag size={16} />
                                    </button>
                                </div>

                                <h2 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white leading-[1.4] mb-8 md:mb-12">
                                    <Latex>{currentQuestion.text}</Latex>
                                </h2>

                                {currentQuestion.diagram && (
                                    <div className="mb-8 md:mb-12 p-3 md:p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl md:rounded-3xl border-2 border-slate-100 dark:border-slate-800/50">
                                        <img 
                                            src={currentQuestion.diagram} 
                                            alt="Diagram" 
                                            className="max-h-[250px] md:max-h-[350px] w-auto mx-auto rounded-xl"
                                        />
                                    </div>
                                )}

                                <div className="grid grid-cols-1 gap-3 md:gap-4">
                                    {currentQuestion.options.map((option, idx) => {
                                        const isSelected = responses[currentIndex] === option;
                                        const isCorrect = option === currentQuestion.correctAnswer;
                                        const hasSubmitted = submittedQuestions.has(currentIndex);

                                        let styleClasses = "bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-400";
                                        let icon = null;

                                        if (hasSubmitted) {
                                            if (isCorrect) {
                                                styleClasses = "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-500/20";
                                                icon = <Check size={18} className="shrink-0" />;
                                            } else if (isSelected) {
                                                styleClasses = "bg-rose-600 border-rose-600 text-white shadow-lg shadow-rose-500/20";
                                                icon = <X size={18} className="shrink-0" />;
                                            }
                                        } else if (isSelected) {
                                            styleClasses = "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/20";
                                        }

                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => handleOptionSelect(option)}
                                                className={`p-4 md:p-6 rounded-2xl md:rounded-3xl border-2 text-left transition-all duration-300 group relative flex items-center gap-4 md:gap-5 ${styleClasses} ${hasSubmitted && !isSelected && !isCorrect ? 'opacity-50' : ''}`}
                                            >
                                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-2xl border-2 flex items-center justify-center shrink-0 font-black text-xs md:text-sm transition-all ${
                                                    hasSubmitted 
                                                    ? (isCorrect ? 'bg-white/20 border-white/40 text-white' : (isSelected ? 'bg-white/20 border-white/40 text-white' : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-400'))
                                                    : (isSelected ? 'bg-white/20 border-white/40 text-white' : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-400 group-hover:border-indigo-300 group-hover:text-indigo-600')
                                                }`}>
                                                    {String.fromCharCode(65 + idx)}
                                                </div>
                                                <span className="text-base md:text-lg font-bold flex-grow leading-snug">
                                                    <Latex>{option}</Latex>
                                                </span>
                                                {icon}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Styled Action Bar */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 md:p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-3xl md:rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-800 shadow-xl mb-2">
                        <div className="flex items-center gap-2 md:gap-3 order-2 sm:order-1">
                            <button 
                                onClick={handleMarkForReview}
                                className="flex-1 sm:flex-none px-4 md:px-6 py-3 md:py-3.5 rounded-xl md:rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:border-violet-400 hover:text-violet-600 transition-all active:scale-95"
                            >
                                Mark
                            </button>
                            <button 
                                onClick={handleClear}
                                className="flex-1 sm:flex-none px-4 md:px-6 py-3 md:py-3.5 rounded-xl md:rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:text-rose-500 transition-all active:scale-95"
                            >
                                Clear
                            </button>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3 order-1 sm:order-2">
                            <div className="flex items-center gap-2 flex-grow sm:flex-none">
                                <button 
                                    onClick={() => currentIndex > 0 && setCurrentIndex(prev => prev - 1)}
                                    disabled={currentIndex === 0}
                                    className="w-12 h-12 rounded-xl md:rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-300 disabled:opacity-30 hover:border-indigo-500 transition-all flex items-center justify-center shrink-0"
                                >
                                    <ChevronLeft size={24} />
                                </button>

                                {!submittedQuestions.has(currentIndex) && responses[currentIndex] && (
                                    <button 
                                        onClick={handleSubmitQuestion}
                                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        Submit
                                        <Check size={16} />
                                    </button>
                                )}

                                <button 
                                    onClick={handleSaveAndNext}
                                    className="flex-grow sm:flex-none bg-indigo-600 hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 text-white px-6 md:px-10 py-3 md:py-3.5 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                                >
                                    {currentIndex === quizQuestions.length - 1 ? 'Results' : 'Next'}
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigator Section: Right Area */}
                <div className="w-full lg:w-80 shrink-0 space-y-4 md:space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border-2 border-slate-200 dark:border-slate-800 shadow-xl">
                        <div className="flex items-center justify-between mb-6 md:mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600">
                                    <LayoutGrid size={18} />
                                </div>
                                <h3 className="font-black text-xs md:text-xs uppercase tracking-widest text-slate-900 dark:text-white">Navigator</h3>
                            </div>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest lg:hidden">
                                Scroll &rarr;
                            </span>
                        </div>

                        {/* Horizontal scroll on mobile, grid on desktop */}
                        <div className="flex lg:grid lg:grid-cols-4 gap-3 md:gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 py-2 px-1 scrollbar-hide no-scrollbar">
                            {quizQuestions.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`${getPaletteStyles(questionStates[idx], currentIndex === idx)} shrink-0`}
                                >
                                    {(idx + 1).toString().padStart(2, '0')}
                                </button>
                            ))}
                        </div>

                        <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-slate-100 dark:border-slate-800 flex lg:flex-col flex-wrap gap-4 md:gap-4">
                            <div className="flex items-center gap-2 md:gap-3 group">
                                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30" />
                                <span className="text-[10px] md:text-[10px] font-black uppercase text-slate-400 tracking-wider">Answered</span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 group">
                                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-rose-500 shadow-lg shadow-rose-500/30" />
                                <span className="text-[10px] md:text-[10px] font-black uppercase text-slate-400 tracking-wider">Pending</span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 group">
                                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-violet-600 shadow-lg shadow-violet-600/30" />
                                <span className="text-[10px] md:text-[10px] font-black uppercase text-slate-400 tracking-wider">Marked</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-indigo-600 p-8 rounded-[2.5rem] md:rounded-[3rem] shadow-xl shadow-indigo-600/20 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] -z-0" />
                        <h4 className="text-white/60 font-black text-[10px] md:text-[10px] uppercase tracking-widest mb-3 md:mb-4">Final Submission</h4>
                        <p className="text-white font-bold text-sm md:text-sm leading-relaxed mb-5 md:mb-6 opacity-90">Ready to commit your foundational answers?</p>
                        <button 
                            onClick={handleSubmit}
                            className="w-full py-4 bg-white text-indigo-600 rounded-xl md:rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95"
                        >
                            Submit Test
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizView;
