import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';

const FinalCTA = ({ onGetStarted }) => {
    const isMobile = useIsMobile();
    const { scrollYProgress } = useScroll({
        offset: ["end end", "start start"]
    });
    
    // Animate characters upwards as we scroll down into this section
    const yTransform = useTransform(scrollYProgress, [1, 0.8], isMobile ? [0, 0] : [100, 0]);

    const titleWords = ["Bridge", "The", "Gap"];
    let charCounter = 0;

    return (
        <section className="h-screen relative overflow-hidden flex items-center justify-center border-t border-slate-200 dark:border-white/5 z-30">
            {/* Fixed Background Layering */}
            <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 -z-20" />
            
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                {/* Linear Moving Grid - Hardware Accelerated Transform */}
                <motion.div 
                    animate={{ 
                        x: [0, 40],
                        y: [0, 40],
                    }}
                    transition={{ 
                        duration: isMobile ? 0.75 : 1.5, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="absolute -top-10 -left-10 w-[calc(100%+80px)] h-[calc(100%+80px)] opacity-40 dark:opacity-20 transition-all duration-1000 group-hover:opacity-80 transform-gpu"
                    style={{
                        backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at center, black, transparent 70%)',
                    }}
                />
                
                {/* Static Aura */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-600/30 blur-[150px] rounded-full z-0" />
            </div>

            <div className="mx-auto max-w-5xl px-6 text-center relative z-40 w-full">
                <div className="flex flex-col items-center group/cta">
                    <h3 className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-10 uppercase leading-[1.1] flex flex-wrap justify-center overflow-hidden py-4">
                        {titleWords.map((word, wordIdx) => (
                            <span key={wordIdx} className="inline-block whitespace-nowrap">
                                {Array.from(word).map((char, charIdx) => {
                                    const index = charCounter++;
                                    return (
                                        <motion.span 
                                            key={index} 
                                            style={{ y: yTransform }}
                                            className={`inline-block ${
                                                index >= 6 // "Your Rank" part
                                                ? "bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400" 
                                                : "text-slate-900 dark:text-white"
                                            }`}
                                            transition={{ delay: isMobile ? index * 0.001 : index * 0.05 }}
                                            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true, margin: isMobile ? "200px" : "100px" }}
                                        >
                                            {char}
                                        </motion.span>
                                    );
                                })}
                                {wordIdx < titleWords.length - 1 && <span className="inline-block">&nbsp;</span>}
                            </span>
                        ))}
                    </h3>

                    <motion.p 
                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: isMobile ? "200px" : "0px" }}
                        transition={{ duration: isMobile ? 0.05 : 0.8, delay: isMobile ? 0 : 0.5 }}
                        className="text-slate-600 dark:text-slate-400 text-lg md:text-2xl mb-14 max-w-3xl mx-auto font-medium leading-relaxed"
                    >
                        Stop guessing. Start diagnosing. Join the elite aspirants identifying their gaps and fixing them before they cost marks on exam day.
                    </motion.p>

                    <div className="relative z-50">
                        <motion.button
                            initial={isMobile ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, margin: isMobile ? "200px" : "0px" }}
                            transition={{ type: "spring", bounce: 0.4, delay: isMobile ? 0 : 0.7 }}
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onGetStarted}
                            className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 md:px-16 py-5 md:py-6 rounded-2xl text-xl md:text-2xl font-black shadow-[0_20px_50px_-10px_rgba(99,102,241,0.5)] transition-all flex items-center gap-4 mx-auto border border-indigo-400/30 cursor-pointer pointer-events-auto"
                        >
                            Start Your Session
                            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover/cta:translate-x-2 transition-transform" />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none z-10" />
        </section>
    );
};

export default FinalCTA;
