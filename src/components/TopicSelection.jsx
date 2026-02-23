import React, { useState, useEffect } from 'react';
import { getAvailableChapters } from '../utils/dataLoader';

const TopicSelection = ({ subject, onBack, onSelectTopic }) => {
    const [chapters, setChapters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadChapters = async () => {
            const availableChapters = await getAvailableChapters(subject);
            setChapters(availableChapters);
            setLoading(false);
        };
        loadChapters();
    }, [subject]);

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
                    Choose a chapter from {subject} to begin your focused revision session.
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
                                onClick={() => onSelectTopic(chapter)}
                                className="group relative w-full p-6 text-left rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-black text-xl border border-indigo-100 dark:border-indigo-800/50">
                                            {chapter.id.replace('chapter', '')}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                {chapter.title}
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
        </div>
    );
};

export default TopicSelection;
