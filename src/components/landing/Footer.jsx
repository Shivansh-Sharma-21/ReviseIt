import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 relative z-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-slate-600 dark:text-slate-400 text-sm font-bold tracking-tight">
                        © {new Date().getFullYear()} Revise-It System. All rights reserved.
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm font-bold">
                        Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for JEE Aspirants.
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Element */}
            <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-400 to-indigo-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                />
            </div>
        </footer>
    );
};

export default Footer;
