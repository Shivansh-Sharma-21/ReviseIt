import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAvailableChapters } from '../utils/dataLoader';
import Latex from './Latex';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Zap, X } from 'lucide-react';

const TopicSelection = ({ subject, onBack, onSelectTopic }) => {
    const [chapters, setChapters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedChapterForModal, setSelectedChapterForModal] = useState(null);

    useEffect(() => {
        const loadChapters = async () => {
            const availableChapters = await getAvailableChapters(subject);
            setChapters(availableChapters);
            setLoading(false);
        };
        loadChapters();
    }, [subject]);

    const handleChapterClick = (chapter) => {
        setSelectedChapterForModal(chapter);
    };

    const handlePathSelection = (destination) => {
        if (selectedChapterForModal) {
            onSelectTopic(selectedChapterForModal, destination);
            setSelectedChapterForModal(null);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
            <Helmet>
                <title>{subject} Topics | ReviseIt - Select to Diagnose</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            {/* Back Button */}
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold text-sm tracking-widest uppercase transition-colors mb-8 group"
            >
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Subjects
            </button>

            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tighter mb-4">
                    {subject} <span className="text-indigo-600 dark:text-indigo-400">Chapters</span>
                </h2>
                <p className="text-muted font-medium text-lg italic">
                    Choose a chapter from {subject} to diagnose your gaps and begin focused revision.
                </p>
            </div>

            {loading ? (
                <div className="grid gap-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-24 w-full bg-slate-200 dark:bg-slate-800 animate-pulse rounded-2xl" />
                    ))}
                </div>
            ) : (
                <div className="grid gap-4">
                    {chapters.length > 0 ? (
                        chapters.map((chapter) => (
                            <button
                                key={chapter.id}
                                onClick={() => handleChapterClick(chapter)}
                                className="group relative w-full p-6 text-left rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-black text-xl border border-indigo-100 dark:border-indigo-800/50">
                                            {chapter.id.replace('chapter', '')}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                <Latex>{chapter.title}</Latex>
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                                                Mindmaps, Flashcards & Adaptive Questions Ready
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-slate-100 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800">
                            <p className="text-muted font-bold tracking-widest uppercase">No chapters found for {subject}</p>
                        </div>
                    )}
                </div>
            )}

            {/* Dynamic Counter */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-slate-400 dark:text-slate-500 text-xs font-black uppercase tracking-[0.2em]">
                <span>{subject} Repository</span>
                <span>{chapters.length} Modules Detected</span>
            </div>

            {/* Path Selection Modal */}
            <AnimatePresence>
                {selectedChapterForModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] p-6 sm:p-10 shadow-2xl border-2 border-slate-200 dark:border-slate-800 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 blur-[50px] -z-10 rounded-full" />
                            
                            <button 
                                onClick={() => setSelectedChapterForModal(null)}
                                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2 pr-8">
                                Path Selection
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest mb-8">
                                How would you like to begin?
                            </p>

                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={() => handlePathSelection('mindmap')}
                                    className="group flex items-start gap-4 p-5 rounded-[1.5rem] border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 text-left"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:scale-110 transition-transform">
                                        <BookOpen size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-slate-900 dark:text-white mb-1">Revise Theory</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-snug">
                                            Start with Mindmaps and Flashcards to brush up on the concepts first.
                                        </p>
                                    </div>
                                </button>

                                <button
                                    onClick={() => handlePathSelection('quiz')}
                                    className="group flex items-start gap-4 p-5 rounded-[1.5rem] border-2 border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300 text-left"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-slate-900 dark:text-white mb-1">Warm-Up Quiz</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-snug">
                                            Directly jump into the foundational warm-up questions to test your baseline.
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TopicSelection;
