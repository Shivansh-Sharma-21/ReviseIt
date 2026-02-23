import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import TopicSelection from './components/TopicSelection'
import Mindmap from './components/Mindmap'
import FlashcardsView from './components/FlashcardsView'
import QuizView from './components/QuizView'
import RevisionQuizView from './components/RevisionQuizView'
import SessionAnalysisView from './components/SessionAnalysisView'
import './App.css'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [view, setView] = useState('home') // 'home', 'topics', 'mindmap', 'flashcards', 'quiz', 'revision-quiz', 'analysis'
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [currentSubject, setCurrentSubject] = useState(null)
  const [userConfidence, setUserConfidence] = useState(3)
  const [sessionScore, setSessionScore] = useState({ score: 0, total: 15 })

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
    setView('home')
    setCurrentSubject(null)
    setSelectedTopic(null)
  }

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
    setView('mindmap')
  }

  const navigateBackToTopics = () => {
    setView('topics')
    setSelectedTopic(null)
  }

  const startRevision = () => {
    setView('flashcards')
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
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className={['mindmap', 'flashcards', 'quiz', 'revision-quiz', 'analysis'].includes(view) ? "" : "container mx-auto px-4 py-8"}>
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
          onInitiate={startRevision}
        />
      )}
      {view === 'flashcards' && selectedTopic && (
        <FlashcardsView
          chapter={selectedTopic}
          onBack={() => setView('mindmap')}
          onComplete={startInitialQuiz}
        />
      )}
      {view === 'quiz' && selectedTopic && (
        <QuizView
          chapter={selectedTopic}
          onBack={() => setView('flashcards')}
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
