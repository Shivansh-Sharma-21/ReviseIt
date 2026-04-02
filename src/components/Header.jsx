import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';
import toast from 'react-hot-toast';

const Header = ({ theme, toggleTheme, onLoginClick, onLogoClick }) => {
    const { currentUser, logout } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            setDropdownOpen(false);
            toast.success("Successfully logged out");
        } catch (error) {
            toast.error("Failed to log out");
        }
    };

    const getInitial = () => {
        if (currentUser?.displayName) return currentUser.displayName.charAt(0).toUpperCase();
        if (currentUser?.email) return currentUser.email.charAt(0).toUpperCase();
        return <User className="w-5 h-5 text-indigo-400" />;
    };

    return (
        <header className="sticky top-0 z-50 header-glass">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer group" onClick={onLogoClick}>
                    {/* New AI Generated Logo */}
                    <img 
                        src="/logo.png" 
                        alt="Revise-it Logo" 
                        className="w-10 h-10 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform object-cover"
                    />
                    <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300 tracking-tight">
                        ReviseIt
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    {/* Auth Section */}
                    {currentUser ? (
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-indigo-400/30 flex items-center justify-center hover:border-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                            >
                                <img 
                                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=${currentUser.email || 'user'}&backgroundColor=e2e8f0`} 
                                    alt="Profile" 
                                    className="w-full h-full rounded-full object-cover dark:bg-slate-700 bg-slate-200"
                                    referrerPolicy="no-referrer"
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                                    <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-700 mb-2 truncate">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                                            {currentUser?.displayName || 'User'}
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                            {currentUser?.email}
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 flex items-center gap-2 transition-colors"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        <span>Sign Out</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={onLoginClick}
                            className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 hover:from-indigo-700 hover:via-indigo-600 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_10px_20px_-5px_rgba(79,70,229,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-[0.98] hidden sm:block"
                        >
                            Sign In
                        </button>
                    )}

                    {/* Theme Toggle */}
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
            </div>
        </header>
    );
};

export default Header;
