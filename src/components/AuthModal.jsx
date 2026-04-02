import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const AuthModal = ({ isOpen, onClose, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login, signup, signInWithGoogle } = useAuth();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
        toast.success("Successfully logged in!");
      } else {
        await signup(email, password);
        toast.success("Account created successfully!");
      }
      onSuccess?.();
      onClose();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to authenticate");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success("Successfully logged in with Google!");
      onSuccess?.();
      onClose();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to login with Google");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setError('');
    setIsLogin(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { onClose(); resetForm(); }}
            className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[70] flex min-h-full items-center justify-center p-4 text-center sm:p-0 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="w-full max-w-md pointer-events-auto overflow-hidden bg-slate-50 dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-[2.5rem] shadow-[0_20px_50px_rgba(79,70,229,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
            >
              {/* Decorative background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 dark:bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />
              
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); resetForm(); }}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100/50 hover:bg-slate-200/80 dark:bg-slate-800/50 dark:hover:bg-slate-700/80 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors z-[60] backdrop-blur-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl shadow-xl shadow-indigo-500/30 overflow-hidden group">
                    <img 
                      src="/logo.png" 
                      alt="Revise-it Logo" 
                      className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                    {isLogin 
                      ? 'Enter your credentials to continue your journey' 
                      : 'Join us to unlock premium learning features'}
                  </p>
                </div>

                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-red-200">{error}</span>
                  </motion.div>
                )}

                <form onSubmit={handleAuth} className="space-y-5">
                  <div>
                    <div className="relative group">
                      <Mail className="w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 absolute left-4 top-1/2 -translate-y-1/2 transition-colors" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className="w-full bg-white dark:bg-slate-800 border border-indigo-50 dark:border-slate-700/50 rounded-2xl py-4 pl-12 pr-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 shadow-sm transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative group">
                      <Lock className="w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 absolute left-4 top-1/2 -translate-y-1/2 transition-colors" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full bg-white dark:bg-slate-800 border border-indigo-50 dark:border-slate-700/50 rounded-2xl py-4 pl-12 pr-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 shadow-sm transition-all font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-4 mt-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 hover:from-indigo-700 hover:via-indigo-600 hover:to-indigo-500 text-white font-black rounded-2xl shadow-[0_10px_25px_-5px_rgba(79,70,229,0.5)] dark:shadow-[0_10px_25px_-5px_rgba(79,70,229,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-[0.98] focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-70 flex justify-center items-center gap-2"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                      <>
                        <span className="uppercase tracking-wider">{isLogin ? 'Sign In' : 'Join Now'}</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200 dark:border-slate-700/50"></div>
                    </div>
                    <div className="relative flex justify-center text-sm font-medium">
                      <span className="px-3 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400">Or continue with</span>
                    </div>
                  </div>

                  <button
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    type="button"
                    className="mt-6 w-full py-4 px-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-bold rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all flex items-center justify-center gap-3 disabled:opacity-70 group/google"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover/google:scale-110 transition-transform" aria-hidden="true">
                      <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"></path>
                      <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"></path>
                      <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"></path>
                      <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"></path>
                    </svg>
                    Continue with Google
                  </button>
                </div>

                <div className="mt-8 text-center">
                  <button
                    type="button"
                    onClick={() => { setIsLogin(!isLogin); setError(''); }}
                    className=" cursor-pointer text-sm text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold transition-colors"
                  >
                    {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
