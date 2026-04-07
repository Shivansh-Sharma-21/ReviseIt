import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Youtube, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="relative mt-20 pb-12 overflow-hidden">
            {/* Subtle Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
            
            <div className="container mx-auto px-4 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div 
                            className="flex items-center gap-2 cursor-pointer group" 
                            onClick={() => navigate('/')}
                        >
                            <img 
                                src="/logo.png" 
                                alt="Revise-it Logo" 
                                className="w-10 h-10 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform object-cover"
                            />
                            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300 tracking-tight">
                                ReviseIt
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                            The ultimate revision companion for JEE aspirants. Precision learning, adaptive algorithms, and zero distractions.
                        </p>
                        <div className="flex gap-4">
                            <button className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-110 transition-all border border-slate-200 dark:border-slate-800">
                                <Twitter className="w-5 h-5" />
                            </button>
                            <button className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-110 transition-all border border-slate-200 dark:border-slate-800">
                                <Github className="w-5 h-5" />
                            </button>
                            <button className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-110 transition-all border border-slate-200 dark:border-slate-800">
                                <Youtube className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-black uppercase text-xs tracking-widest mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Landing', path: '/' },
                                { name: 'Home', path: '/home' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <button 
                                        onClick={() => navigate(item.path)}
                                        className="text-slate-500 dark:text-slate-400 font-bold hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-sm"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-black uppercase text-xs tracking-widest mb-8">Support</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Contact Us', path: '/contact' },
                                { name: 'Privacy Policy', path: '/privacy' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <button 
                                        onClick={() => navigate(item.path)}
                                        className="text-slate-500 dark:text-slate-400 font-bold hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-sm"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Educational Note */}
                    <div className="p-8 rounded-[2rem] bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/10 dark:border-indigo-500/20">
                        <GraduationCap className="w-8 h-8 text-indigo-500 mb-4" />
                        <h5 className="text-slate-900 dark:text-white font-bold mb-2">Academic Integrity</h5>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                            Designed as a supplemental tool. For full syllabus coverage, please refer to official NCERT textbooks and standard JEE reference materials.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">
                        © 2026 Revise-it. Built for JEE Aspirants.
                    </p>
                    <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">
                        <span>Made with</span>
                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
                        <span>for students</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
