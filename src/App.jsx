import { useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Home from './components/Home'
import './App.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default App