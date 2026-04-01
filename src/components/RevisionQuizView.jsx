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
    X,
    BookOpen
} from 'lucide-react';
import Latex from './Latex';

const RevisionQuizView = ({ chapter, initialConfidence, onBack, onComplete }) => {
    const quizQuestions = useMemo(() => {
        const foundational = chapter.questions.filter(q => q.tag === 'F');
        const core = chapter.questions.filter(q => q.tag === 'C');
        const stretch = chapter.questions.filter(q => q.tag === 'S');

        let selection = [];
        if (initialConfidence <= 2) {
            selection = [...foundational.slice(0, 8), ...core.slice(0, 5), ...stretch.slice(0, 2)];
        } else if (initialConfidence === 3) {
            selection = [...foundational.slice(0, 4), ...core.slice(0, 8), ...stretch.slice(0, 3)];
        } else {
            selection = [...foundational.slice(0, 2), ...core.slice(0, 6), ...stretch.slice(0, 7)];
        }

        return selection.sort(() => Math.random() - 0.5).slice(0, 15);
    }, [chapter.questions, initialConfidence]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [responses, setResponses] = useState({});
    const [questionStates, setQuestionStates] = useState(
        quizQuestions.map(() => 'not-visited')
    );
    const [showResult, setShowResult] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);

    useEffect(() => {
        if (questionStates[currentIndex] === 'not-visited') {
            const newStates = [...questionStates];
            newStates[currentIndex] = 'not-answered';
            setQuestionStates(newStates);
        }
    }, [currentIndex]);

    const handleOptionSelect = (option) => {
        if (responses[currentIndex]) return;
        setResponses(prev => ({ ...prev, [currentIndex]: option }));
    };

    const handleSaveAndNext = () => {
        const newStates = [...questionStates];
        newStates[currentIndex] = responses[currentIndex] ? 'answered' : 'not-answered';
        setQuestionStates(newStates);

        if (currentIndex < quizQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setShowExplanation(false);
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
            setShowExplanation(false);
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
        setShowExplanation(false);
    };

    const calculateScore = () => {
        return quizQuestions.reduce((score, q, idx) => 
            responses[idx] === q.correctAnswer ? score + 1 : score, 0);
    };

    if (showResult) {
        const score = calculateScore();
        return (
            <div className="max-w-2xl mx-auto py-8 md:py-12 px-4 flex flex-col items-center justify-center min-h-[70vh]">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-full bg-white dark:bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-2xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] -z-10" />
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] bg-indigo-500 text-white flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-indigo-600/30">
                        <Trophy size={40} md:size={48} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-2">Revision Summary</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-bold mb-8 md:mb-12 uppercase tracking-[0.4em] text-[8px] md:text-[10px]">Adaptive Mastering Module Complete</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
                        <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-emerald-50 dark:bg-emerald-900/10 border-2 border-emerald-100 dark:border-emerald-800/50 group hover:scale-[1.02] transition-all">
                            <div className="text-4xl md:text-5xl font-black text-emerald-600 mb-2">{score}</div>
                            <div className="text-[9px] md:text-[10px] font-black text-emerald-600 uppercase tracking-widest opacity-60">Nodes Mastered</div>
                        </div>
                        <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/30 border-2 border-slate-200 dark:border-slate-800 group hover:scale-[1.02] transition-all">
                            <div className="text-4xl md:text-5xl font-black text-slate-400 mb-2">{15 - score}</div>
                            <div className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest opacity-60">Deep Calibration</div>
                        </div>
                    </div>

                    <button
                        onClick={() => onComplete(score, 15)}
                        className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-xs md:text-sm uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-4"
                    >
                        Detailed Analysis <ChevronRight size={18} />
                    </button>
                </motion.div>
            </div>
        );
    }

    const currentQuestion = quizQuestions[currentIndex];

    const getPaletteStyles = (state, isActive) => {
        const base = "w-10 h-10 md:w-11 md:h-11 flex items-center justify-center text-[10px] md:text-xs font-black rounded-xl md:rounded-2xl border-2 transition-all duration-300 transform";
        const activeRing = isActive ? "ring-2 ring-indigo-500 ring-offset-2 md:ring-offset-4 dark:ring-offset-slate-950 scale-110" : "hover:scale-105 opacity-80 hover:opacity-100";
        
        switch (state) {
            case 'answered': return `${base} ${activeRing} bg-emerald-500 border-emerald-500 text-white shadow-lg`;
            case 'marked': return `${base} ${activeRing} bg-violet-600 border-violet-600 text-white rounded-full shadow-lg`;
            case 'answered-marked': return `${base} ${activeRing} bg-violet-600 border-violet-600 text-white rounded-full relative after:content-[''] after:absolute after:-bottom-0.5 after:-right-0.5 after:bg-emerald-500 after:w-3 after:h-3 after:rounded-full after:border-2 after:border-white shadow-lg`;
            case 'not-answered': return `${base} ${activeRing} bg-rose-500 border-rose-500 text-white shadow-lg`;
            default: return `${base} ${activeRing} bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400`;
        }
    };

    return (
        <div className="max-w-7xl mx-auto py-4 md:py-12 pb-12 md:pb-8 px-2 md:px-6 flex flex-col gap-4 md:gap-8 min-h-[calc(100vh-80px)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 pb-4 md:pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-4 md:gap-6">
                    <button 
                        onClick={onBack}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-all shadow-sm group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <div>
                        <h4 className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-0.5 md:mb-1">Adaptive Synaptic Revision</h4>
                        <h2 className="text-lg md:text-2xl font-black text-slate-900 dark:text-white tracking-tight line-clamp-1">{chapter.title}</h2>
                    </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 bg-slate-50 dark:bg-slate-800/50 md:bg-transparent p-3 md:p-0 rounded-2xl">
                    <div className="flex flex-col items-start md:items-end">
                        <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5 opacity-60">Adaptive Progress</span>
                        <div className="flex items-center gap-2">
                            <span className="text-lg md:text-xl font-black text-indigo-600 dark:text-indigo-400">{currentIndex + 1}</span>
                            <span className="text-slate-300 dark:text-slate-700 font-bold">/</span>
                            <span className="text-slate-400 font-black">15</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                <div className="flex-grow space-y-4 md:space-y-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <div className="bg-white dark:bg-slate-900 p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-indigo-500/5 blur-[60px] md:blur-[100px] -z-10" />
                                
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-10">
                                    <div className="flex items-center gap-3">
                                        <div className={`px-3 md:px-4 py-1.5 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest shadow-sm ${currentQuestion.tag === 'F' ? 'bg-emerald-500 text-white' :
                                            currentQuestion.tag === 'C' ? 'bg-amber-500 text-white' :
                                                'bg-rose-500 text-white'
                                            }`}>
                                            {currentQuestion.tag === 'F' ? 'Foundational' : currentQuestion.tag === 'C' ? 'Core Questions' : 'Stretch Challenge'}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between sm:justify-end gap-3">
                                        <button 
                                            onClick={() => setShowExplanation(!showExplanation)}
                                            className={`flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-[9px] md:text-[10px] font-black uppercase transition-all shadow-md group ${showExplanation ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200'}`}
                                        >
                                            <BookOpen size={14} className={showExplanation ? 'animate-pulse' : ''} />
                                            {showExplanation ? 'Hide Concept' : 'Show Concept'}
                                        </button>
                                        <button className="text-slate-300 hover:text-rose-500 transition-colors p-1">
                                            <Flag size={16} />
                                        </button>
                                    </div>
                                </div>

                                <h2 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white leading-[1.4] mb-8 md:mb-12">
                                    <Latex>{currentQuestion.text}</Latex>
                                </h2>

                                {currentQuestion.diagram && (
                                    <div className="mb-8 md:mb-12 p-4 md:p-6 bg-slate-50 dark:bg-slate-800/80 rounded-2xl md:rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-800/50">
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
                                        const hasAnswered = !!responses[currentIndex];

                                        let styleClasses = "bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-400";
                                        let icon = null;

                                        if (hasAnswered) {
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
                                                className={`p-4 md:p-6 rounded-2xl md:rounded-[2rem] border-2 text-left transition-all duration-300 group relative flex items-center gap-4 md:gap-5 ${styleClasses} ${hasAnswered && !isSelected && !isCorrect ? 'opacity-50' : ''}`}
                                            >
                                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-2xl border-2 flex items-center justify-center shrink-0 font-black text-xs md:text-sm transition-all ${
                                                    hasAnswered 
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

                                <AnimatePresence>
                                    {showExplanation && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="mt-8 md:mt-10"
                                        >
                                            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-100 dark:border-indigo-800/50 p-6 md:p-8 rounded-2xl md:rounded-[2.5rem]">
                                                <div className="flex items-center gap-3 mb-3 md:mb-4 text-indigo-600 dark:text-indigo-400">
                                                    <BookOpen size={18} />
                                                    <h4 className="font-black text-xs uppercase tracking-widest">Synaptic Bridge</h4>
                                                </div>
                                                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
                                                    <Latex>{currentQuestion.shortExplanation}</Latex>
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 md:p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-3xl md:rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-800 shadow-xl mb-2">
                        <div className="flex items-center gap-2 md:gap-3 order-2 sm:order-1">
                            <button 
                                onClick={handleMarkForReview}
                                className="flex-1 sm:flex-none px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:border-violet-400 hover:text-violet-600 transition-all active:scale-95"
                            >
                                Mark
                            </button>
                            <button 
                                onClick={handleClear}
                                className="flex-1 sm:flex-none px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:text-rose-500 transition-all active:scale-95"
                            >
                                Clear
                            </button>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3 order-1 sm:order-2">
                             <div className="flex items-center gap-2 flex-grow sm:flex-none">
                                <button 
                                    onClick={() => currentIndex > 0 && (setCurrentIndex(prev => prev - 1), setShowExplanation(false))}
                                    disabled={currentIndex === 0}
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-300 disabled:opacity-30 hover:border-indigo-500 transition-all flex items-center justify-center"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button 
                                    onClick={handleSaveAndNext}
                                    className="flex-grow sm:flex-none bg-indigo-600 hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 text-white px-8 md:px-12 py-3 md:py-4 rounded-xl md:rounded-3xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
                                >
                                    {currentIndex === quizQuestions.length - 1 ? 'Submit' : 'Next'}
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-84 shrink-0 space-y-4 md:space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
                        <div className="absolute -bottom-10 -right-10 w-32 md:w-40 h-32 md:h-40 bg-indigo-500/5 blur-[50px] -z-10" />
                        
                        <div className="flex items-center justify-between mb-6 md:mb-10 pb-4 md:pb-6 border-b border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-[1.25rem] bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
                                    <LayoutGrid size={20} />
                                </div>
                                <div>
                                    <h3 className="font-black text-xs md:text-xs uppercase tracking-widest text-slate-900 dark:text-white">Navigator</h3>
                                    <p className="text-[9px] md:text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter mt-0.5">15 Questions</p>
                                </div>
                            </div>
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest lg:hidden">
                                Scroll &rarr;
                            </span>
                        </div>

                        <div className="flex lg:grid lg:grid-cols-4 gap-3 md:gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 py-2 px-1 scrollbar-hide no-scrollbar">
                            {quizQuestions.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setCurrentIndex(idx);
                                        setShowExplanation(false);
                                    }}
                                    className={`${getPaletteStyles(questionStates[idx], currentIndex === idx)} shrink-0`}
                                >
                                    {(idx + 1).toString().padStart(2, '0')}
                                </button>
                            ))}
                        </div>

                        <div className="mt-6 md:mt-12 pt-6 md:pt-10 border-t border-slate-100 dark:border-slate-800 flex lg:flex-col flex-wrap gap-4 md:gap-5">
                            <div className="flex items-center justify-between group flex-grow lg:flex-none">
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-emerald-500" />
                                    <span className="text-[10px] md:text-[10px] font-black uppercase text-slate-400 tracking-wider">Answered</span>
                                </div>
                                <span className="text-[9px] md:text-[9px] font-black text-emerald-500/50">{Object.keys(responses).length}</span>
                            </div>
                            <div className="flex items-center justify-between group flex-grow lg:flex-none">
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-rose-500" />
                                    <span className="text-[10px] md:text-[10px] font-black uppercase text-slate-400 tracking-wider">Pending</span>
                                </div>
                                <span className="text-[9px] md:text-[9px] font-black text-rose-500/50">{15 - Object.keys(responses).length}</span>
                            </div>
                            <div className="flex items-center justify-between group flex-grow lg:flex-none">
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-violet-600" />
                                    <span className="text-[10px] md:text-[10px] font-black uppercase text-slate-400 tracking-wider">Marked</span>
                                </div>
                                <span className="text-[9px] md:text-[9px] font-black text-violet-600/50">{questionStates.filter(s => s.includes('marked')).length}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl shadow-indigo-600/30 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white/10 blur-[60px] -z-0" />
                        <h4 className="text-white/60 font-black text-[10px] md:text-[10px] uppercase tracking-widest mb-3 md:mb-4">Complete Mastery</h4>
                        <p className="text-white font-bold text-sm md:text-base leading-relaxed mb-6 md:mb-8 opacity-90">Ready to finalize your revision session?</p>
                        <button 
                            onClick={() => {
                                if (window.confirm('Commence final synaptic calibration?')) setShowResult(true);
                            }}
                            className="w-full py-4 md:py-5 bg-white text-indigo-600 rounded-xl md:rounded-[1.5rem] font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl active:scale-95"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevisionQuizView;
