import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw, Brain, CheckCircle2 } from 'lucide-react';

const Flashcard = ({ card, isFlipped, onFlip }) => {
    return (
        <div
            className="relative w-full aspect-[4/3] md:aspect-[3/2] max-w-2xl perspective-1000 cursor-pointer group"
            onClick={onFlip}
        >
            <motion.div
                className="w-full h-full relative preserve-3d will-change-transform"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.6 }}
            >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden w-full h-full bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col p-8 md:p-12 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-indigo-500/10 transition-colors" />

                    <div className="flex justify-between items-start mb-auto">
                        <div className="px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-100 dark:border-indigo-800/50">
                            Question
                        </div>
                        <Brain size={20} className="text-slate-300 dark:text-slate-700" />
                    </div>

                    <div className="flex-grow flex items-center justify-center text-center">
                        <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                            {card.question}
                        </h3>
                    </div>

                    <div className="mt-auto text-center">
                        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] animate-pulse">
                            Tap to reveal answer
                        </p>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 backface-hidden w-full h-full bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[2.5rem] shadow-2xl flex flex-col p-8 md:p-12 text-white overflow-hidden"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 blur-3xl rounded-full -ml-20 -mb-20" />

                    <div className="flex justify-between items-start mb-auto">
                        <div className="px-4 py-1.5 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                            Explanation
                        </div>
                        <CheckCircle2 size={20} className="text-white/40" />
                    </div>

                    <div className="flex-grow flex items-center justify-center text-center overflow-y-auto custom-scrollbar">
                        <p className="text-xl md:text-3xl font-bold leading-relaxed">
                            {card.answer}
                        </p>
                    </div>

                    <div className="mt-auto text-center">
                        <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em]">
                            Foundational Concept Mastered
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const FlashcardsView = ({ chapter, onBack, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const cards = chapter.flashcards || [];

    const handleNext = (e) => {
        e.stopPropagation();
        if (currentIndex < cards.length - 1) {
            setDirection(1);
            setIsFlipped(false);
            setTimeout(() => setCurrentIndex(prev => prev + 1), 50);
        } else {
            onComplete();
        }
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        if (currentIndex > 0) {
            setDirection(-1);
            setIsFlipped(false);
            setTimeout(() => setCurrentIndex(prev => prev - 1), 50);
        }
    };

    const handleReset = () => {
        setCurrentIndex(0);
        setIsFlipped(false);
        setDirection(0);
    };

    if (cards.length === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6">
                    <Brain size={40} className="text-slate-400" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">No Flashcards Found</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs font-semibold">Our educators are currently preparing active recall modules for this chapter.</p>
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
                >
                    <ArrowLeft size={16} /> Back to Chapters
                </button>
            </div>
        );
    }

    const currentCard = cards[currentIndex];
    const progress = ((currentIndex + 1) / cards.length) * 100;

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col min-h-[calc(100vh-80px)]">
            {/* Header Controls */}
            <div className="flex justify-between items-center mb-12">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-black text-[10px] tracking-[0.2em] uppercase transition-all group"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>

                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Active Progress</div>
                        <div className="text-xs font-black text-indigo-600 dark:text-indigo-400">
                            {currentIndex + 1} <span className="text-slate-300 dark:text-slate-700 mx-1">/</span> {cards.length}
                        </div>
                    </div>
                    <button
                        onClick={handleReset}
                        className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                        <RotateCcw size={18} />
                    </button>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mb-16 overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                />
            </div>

            {/* Card Container */}
            <div className="flex-grow flex flex-col items-center justify-center gap-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ x: direction * 50, opacity: 0, scale: 0.95 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: direction * -50, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="w-full flex justify-center"
                    >
                        <Flashcard
                            card={currentCard}
                            isFlipped={isFlipped}
                            onFlip={() => setIsFlipped(!isFlipped)}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="flex items-center gap-8 md:gap-12">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className={`p-5 md:p-6 rounded-3xl border-2 transition-all ${currentIndex === 0
                            ? 'border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700 opacity-50 cursor-not-allowed'
                            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 hover:-translate-x-1 shadow-lg'
                            }`}
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={handleNext}
                        className="group flex items-center gap-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 md:px-14 py-5 md:py-6 rounded-[2rem] shadow-2xl hover:scale-105 transition-all active:scale-95"
                    >
                        <span className="text-sm font-black uppercase tracking-[0.2em]">
                            {currentIndex === cards.length - 1 ? "Complete Set" : "Next"}
                        </span>
                        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Shortcuts hint */}
            <div className="mt-16 text-center">
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center justify-center gap-3">
                    <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">CLICK CARD</span>
                    <span>TO REVEAL ANSWER</span>
                </p>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .perspective-1000 { perspective: 1000px; }
                .preserve-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { 
                    background: rgba(255,255,255,0.2); 
                    border-radius: 10px; 
                }
            `}} />
        </div>
    );
};

export default FlashcardsView;
