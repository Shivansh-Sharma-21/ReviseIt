import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Twitter, Github, Send, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate an API call
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("Message received! We'll get back to you soon.", {
                icon: '🚀',
                style: {
                    borderRadius: '1.5rem',
                    background: '#1e293b',
                    color: '#fff',
                }
            });
            e.target.reset();
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full translate-x-1/2"></div>
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full -translate-x-1/2"></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-widest mb-6">
                            <Sparkles className="w-3.5 h-3.5" />
                            Say Hello
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                            Let's <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">Connect</span>.
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-md leading-relaxed">
                            Have questions or feedback? We'd love to hear from you. Our team is dedicated to supporting your JEE journey.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@reviseit.com" },
                                { icon: <MessageSquare className="w-5 h-5" />, label: "Twitter", value: "@ReviseItApp" },
                                { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "ReviseIt-Source" }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-center gap-4 group cursor-pointer"
                                    onClick={() => toast(`Copied ${item.label}!`)}
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-none border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</div>
                                        <div className="text-slate-900 dark:text-white font-bold">{item.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full"
                    >
                        <div className="p-10 rounded-[2.5rem] bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl dark:shadow-indigo-500/5">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                                    <input 
                                        type="text" 
                                        required 
                                        placeholder="John Doe" 
                                        className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        required 
                                        placeholder="john@example.com" 
                                        className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                                    <textarea 
                                        rows="4" 
                                        required 
                                        placeholder="How can we help you?" 
                                        className="w-full px-6 py-4 rounded-3xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-slate-900 dark:text-white resize-none"
                                    ></textarea>
                                </div>
                                <button 
                                    disabled={isSubmitting}
                                    type="submit" 
                                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:scale-[1.02] active:scale-[0.98] transition-all text-white font-black shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-3 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-5 h-5 mt-0.5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
