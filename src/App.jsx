import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
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
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [view, setView] = useState('landing') // 'landing', 'home', 'topics', 'mindmap', 'flashcards', 'quiz', 'revision-quiz', 'analysis'
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

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const navigateToTopics = (subject) => {
    setCurrentSubject(subject)
    setView('topics')
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
      setView('home')
      setIsLoading(false);
    }, 2000);
  }

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
    setView('mindmap')
  }

  const navigateBackToTopics = () => {
    setSelectedTopic(null)
    setView('topics')
  }

  const startInitialQuiz = () => {
    setView('quiz')
  }

  const startRevisionQuiz = (confidence) => {
    setUserConfidence(confidence)
    setView('revision-quiz')
  }

  const handleCompleteRevision = (score, total) => {
    setSessionScore({ score, total })
    setView('analysis')
  }

  const restartFromQuiz = () => {
    setView('quiz')
  }

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
        onSuccess={() => {
          if (view === 'landing') {
            // Because state updates might be batched, handle carefully or just let them stay on landing with an updated header, 
            // but navigating to home gives a better UX.
            // Note: navigateToHome will run in the next render when currentUser is set
          }
        }} 
      />
      {view === 'landing' && <ScrollProgress />}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader 
            key="global-loader" 
            duration={loadingDuration} 
            onComplete={() => {}} 
          />
        )}
      </AnimatePresence>

      <Header theme={theme} toggleTheme={toggleTheme} onLoginClick={() => setIsAuthModalOpen(true)} onLogoClick={() => setView('landing')} />
      <main className={['landing', 'mindmap', 'quiz', 'revision-quiz', 'analysis', 'privacy', 'about', 'contact'].includes(view) ? "" : "container mx-auto px-4 py-8"}>
        {view === 'landing' && <Landing onGetStarted={navigateToHome} />}
        {view === 'home' && (
          <Home
            onSelectPhysics={() => navigateToTopics('Physics')}
            onSelectChemistry={() => navigateToTopics('Chemistry')}
            onSelectMaths={() => navigateToTopics('Maths')}
          />
        )}
        {view === 'topics' && (
          <TopicSelection
            subject={currentSubject}
            onBack={navigateToHome}
            onSelectTopic={handleTopicSelect}
          />
        )}
        {view === 'privacy' && <PrivacyPolicy />}
        {view === 'about' && <AboutUs />}
        {view === 'contact' && <ContactUs />}
      </main>
      {view === 'mindmap' && selectedTopic && (
        <Mindmap
          chapter={selectedTopic}
          onBack={navigateBackToTopics}
          onInitiate={startInitialQuiz}
        />
      )}
      {view === 'quiz' && selectedTopic && (
        <QuizView
          chapter={selectedTopic}
          onBack={() => setView('mindmap')}
          onComplete={startRevisionQuiz}
        />
      )}
      {view === 'revision-quiz' && selectedTopic && (
        <RevisionQuizView
          chapter={selectedTopic}
          confidence={userConfidence}
          onBack={() => setView('quiz')}
          onComplete={handleCompleteRevision}
        />
      )}
      {view === 'analysis' && selectedTopic && (
        <SessionAnalysisView
          score={sessionScore.score}
          total={sessionScore.total}
          chosenConfidence={userConfidence}
          onHome={navigateToHome}
          onRetry={restartFromQuiz}
        />
      )}
      {['landing', 'home', 'privacy', 'about', 'contact'].includes(view) && (
        <Footer setView={setView} />
      )}
    </div>
  )
}

export default App
