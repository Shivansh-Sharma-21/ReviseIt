import React from 'react';

const SubjectCard = ({ title, status, color, icon, disabled, onClick }) => {
    return (
        <div
            onClick={!disabled ? onClick : undefined}
            className={`relative group p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${disabled
                ? 'bg-slate-200/40 dark:bg-slate-900/50 border-slate-300/50 dark:border-slate-800 opacity-60 cursor-not-allowed'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 cursor-pointer'
                }`}
        >
            {/* Background Accent */}
            {!disabled && (
                <div className={`absolute -right-12 -bottom-12 w-40 h-40 bg-gradient-to-br ${color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
            )}

            <div className="flex flex-col h-full gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-inner ${disabled ? 'bg-slate-300 dark:bg-slate-800 text-slate-500' : `bg-gradient-to-br ${color} text-white`
                    }`}>
                    {icon}
                </div>

                <div className="flex-grow">
                    <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                        {disabled
                            ? `Advanced revision modules for ${title} are currently in preparation.`
                            : `Master high-yield ${title} concepts with our adaptive practice system.`}
                    </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${disabled
                        ? 'bg-slate-300/50 dark:bg-slate-800 text-slate-600 dark:text-slate-500'
                        : 'bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50'
                        }`}>
                        {status}
                    </span>
                    {!disabled && (
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
};

const Home = ({ onSelectPhysics, onSelectChemistry, onSelectMaths }) => {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Hero Section */}
            <section className="text-center mb-20 space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200 dark:bg-indigo-900/20 border border-slate-300 dark:border-indigo-900/30 text-slate-600 dark:text-indigo-400 text-xs font-black tracking-[0.2em] uppercase mb-4">
                    JEE REVISION SYSTEM V1.0
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">
                    Kill false confidence.<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300">
                        Master the basics.
                    </span>
                </h2>
                <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed font-semibold">
                    Stop guessing. Identify your gaps. Build a rock-solid foundation.
                </p>
            </section>

            {/* Subjects Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                <SubjectCard
                    title="PHYSICS"
                    status="Available"
                    color="from-indigo-600 to-indigo-400"
                    icon="⚛"
                    disabled={false}
                    onClick={onSelectPhysics}
                />
                <SubjectCard
                    title="CHEMISTRY"
                    status="Available"
                    color="from-emerald-600 to-emerald-400"
                    icon="🧪"
                    disabled={false}
                    onClick={onSelectChemistry}
                />
                <SubjectCard
                    title="MATHS"
                    status="Available"
                    color="from-amber-600 to-amber-400"
                    icon="∑"
                    disabled={false}
                    onClick={onSelectMaths}
                />
            </div>

            {/* Feature Pills */}
            <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-80">
                {['Adaptive Difficulty', 'Zero Distractions', 'Instant Feedback', 'Data-Driven Insights'].map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-bold text-[10px] tracking-[0.15em] uppercase">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
