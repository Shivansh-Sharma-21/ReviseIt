import React from 'react';

const Header = ({ theme, toggleTheme }) => {
    return (
        <header className="sticky top-0 z-50 header-glass">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Simple Premium Logo using Indigo/Cyan Gradient */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <span className="text-white font-bold text-xl italic">R</span>
                    </div>
                    <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300 tracking-tight">
                        Revise-it
                    </h1>
                </div>

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 group"
                    aria-label="Toggle Theme"
                >
                    {theme === 'light' ? (
                        <svg className="w-6 h-6 text-slate-700 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-yellow-400 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                        </svg>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
