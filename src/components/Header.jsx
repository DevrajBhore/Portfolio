import { useEffect, useState } from 'react'
import '../styles/Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const headerOffset = 80
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
                <span className="logo-text">Devraj</span>
                <span className="logo-dot">.</span>
              </a>
            </div>
            
            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
              <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
              <li><a href="#education" onClick={(e) => handleNavClick(e, '#education')}>Education</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
            </ul>

            <div className="nav-actions">             
              <a 
                href="#contact" 
                className="cta-button"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Let's Talk
              </a>
              
              <button 
                className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    </>
  )
}

export default Header