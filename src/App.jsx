import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import TopicSelection from './components/TopicSelection'
import Mindmap from './components/Mindmap'
import QuizView from './components/QuizView'
import RevisionQuizView from './components/RevisionQuizView'
import SessionAnalysisView from './components/SessionAnalysisView'
import Landing from './components/Landing'
import Loader from './components/Loader'
import ScrollProgress from './components/landing/ScrollProgress'
import AuthModal from './components/AuthModal'
import PrivacyPolicy from './components/PrivacyPolicy'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import { useAuth } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [currentSubject, setCurrentSubject] = useState(null)
  const [userConfidence, setUserConfidence] = useState(3)
  const [sessionScore, setSessionScore] = useState({ score: 0, total: 15 })
  const [isLoading, setIsLoading] = useState(false)
  const [loadingDuration, setLoadingDuration] = useState(3000)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const navigateToTopics = (subject) => {
    setCurrentSubject(subject)
    navigate('/topics')
  }

  const navigateToHome = () => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }

    // Trigger loader transition when entering the app
    setIsLoading(true);
    
    // Smooth transition to app after loader has time to show its animations
    setTimeout(() => {
      setCurrentSubject(null)
      setSelectedTopic(null)
      navigate('/home')
      setIsLoading(false);
    }, 2000);
  }

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
    navigate('/mindmap')
  }

  const navigateBackToTopics = () => {
    setSelectedTopic(null)
    navigate('/topics')
  }

  const startInitialQuiz = () => {
    navigate('/quiz')
  }

  const startRevisionQuiz = (confidence) => {
    setUserConfidence(confidence)
    navigate('/revision-quiz')
  }

  const handleCompleteRevision = (score, total) => {
    setSessionScore({ score, total })
    navigate('/analysis')
  }

  const restartFromQuiz = () => {
    navigate('/quiz')
  }

  // Paths that should not have the container padding
  const fullWidthPaths = ['/', '/mindmap', '/quiz', '/revision-quiz', '/analysis', '/privacy', '/about', '/contact'];
  const isFullWidth = fullWidthPaths.includes(location.pathname);
  const isLanding = location.pathname === '/';

  return (
    <div className="app-bg text-main">
      <Toaster position="top-center" toastOptions={{
        style: {
          background: theme === 'dark' ? '#1e293b' : '#ffffff',
          color: theme === 'dark' ? '#f8fafc' : '#0f172a',
          border: '1px solid ' + (theme === 'dark' ? '#334155' : '#e2e8f0'),
        }
      }} />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onSuccess={() => {}} 
      />
      {isLanding && <ScrollProgress />}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader 
            key="global-loader" 
            duration={loadingDuration} 
            onComplete={() => {}} 
          />
        )}
      </AnimatePresence>

      <Header theme={theme} toggleTheme={toggleTheme} onLoginClick={() => setIsAuthModalOpen(true)} onLogoClick={() => navigate('/')} />
      <main className={isFullWidth ? "" : "container mx-auto px-4 py-8"}>
        <Routes>
          <Route path="/" element={<Landing onGetStarted={navigateToHome} />} />
          <Route path="/home" element={<Home onSelectPhysics={() => navigateToTopics('Physics')} onSelectChemistry={() => navigateToTopics('Chemistry')} onSelectMaths={() => navigateToTopics('Maths')} />} />
          <Route path="/topics" element={currentSubject ? <TopicSelection subject={currentSubject} onBack={() => navigate('/home')} onSelectTopic={handleTopicSelect} /> : <Navigate to="/home" replace />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          
          <Route path="/mindmap" element={selectedTopic ? <Mindmap chapter={selectedTopic} onBack={navigateBackToTopics} onInitiate={startInitialQuiz} /> : <Navigate to="/home" replace />} />
          <Route path="/quiz" element={selectedTopic ? <QuizView chapter={selectedTopic} onBack={() => navigate('/mindmap')} onComplete={startRevisionQuiz} /> : <Navigate to="/home" replace />} />
          <Route path="/revision-quiz" element={selectedTopic ? <RevisionQuizView chapter={selectedTopic} confidence={userConfidence} onBack={() => navigate('/quiz')} onComplete={handleCompleteRevision} /> : <Navigate to="/home" replace />} />
          <Route path="/analysis" element={selectedTopic ? <SessionAnalysisView score={sessionScore.score} total={sessionScore.total} chosenConfidence={userConfidence} onHome={() => navigate('/home')} onRetry={restartFromQuiz} /> : <Navigate to="/home" replace />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {['/', '/home', '/privacy', '/about', '/contact'].includes(location.pathname) && (
        <Footer />
      )}
    </div>
  )
}

export default App
