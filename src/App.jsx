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
import './App.css'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [view, setView] = useState('landing') // 'landing', 'home', 'topics', 'mindmap', 'flashcards', 'quiz', 'revision-quiz', 'analysis'
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [currentSubject, setCurrentSubject] = useState(null)
  const [userConfidence, setUserConfidence] = useState(3)
  const [sessionScore, setSessionScore] = useState({ score: 0, total: 15 })
  const [isLoading, setIsLoading] = useState(true)
  const [loadingDuration, setLoadingDuration] = useState(3000)

  useEffect(() => {
    // Initial landing page entrance sequence (1.5s)
    const splashTimer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(splashTimer)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const navigateToTopics = (subject) => {
    setCurrentSubject(subject)
    setView('topics')
  }

  const navigateToHome = () => {
    setCurrentSubject(null)
    setSelectedTopic(null)
    setView('home')
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
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader 
            key="global-loader" 
            duration={loadingDuration} 
            onComplete={() => {}} 
          />
        )}
      </AnimatePresence>

      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className={['landing', 'mindmap', 'quiz', 'revision-quiz', 'analysis'].includes(view) ? "" : "container mx-auto px-4 py-8"}>
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
    </div>
  )
}

export default App
