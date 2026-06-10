import { useState } from 'react'
import Header from './components/Header'
import ProfessionalMap from './components/ProfessionalMap'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import './styles/App.css'

function App() {
  const [isHumanVersion, setIsHumanVersion] = useState(true)

  const toggleVersion = () => {
    setIsHumanVersion(!isHumanVersion)
  }

  return (
    <div className="app">
      <div className="version-toggle">
        <span className={`version-label ${isHumanVersion ? 'active' : ''}`}>Versão para Humanos</span>
        <button 
          className={`toggle-switch ${!isHumanVersion ? 'active' : ''}`} 
          onClick={toggleVersion} 
          aria-label="Toggle version"
        >
          <div className="toggle-circle"></div>
        </button>
        <span className={`version-label ${!isHumanVersion ? 'active' : ''}`}>Versão para IA</span>
      </div>
      
      {isHumanVersion ? (
        <main className="main-content">
          <Header />
          <ProfessionalMap />
          <Resume />
          <Skills />
          <Education />
          <Projects />
          <Experience />
        </main>
      ) : (
        <main className="main-content ia-version">
          <Header />
          <div className="ia-content">
            <p>Versão para IA - Conteúdo estruturado</p>
          </div>
        </main>
      )}
    </div>
  )
}

export default App
