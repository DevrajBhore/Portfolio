import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <p className="section-subtitle reveal">Aspiring engineer who loves building impactful products with AI, data, and software.</p>
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro reveal">
              <p>
                Aspiring software engineer and <span className="highlight">machine learning enthusiast</span> with a focus on building real-world products.
              </p>
              <p>
                Co-founder of <span className="highlight">LegalAId</span>, an AI-powered LegalTech platform for automated contract generation. Co-founder &amp; full-stack developer at <span className="highlight">NomadGym</span>, India's first pay-per-hour gym booking platform.
              </p>
            </div>

            <div className="about-details reveal reveal-delay-1">
              <p>
                Experienced in full-stack development using the <span className="highlight">MERN stack</span> and scalable system design. Built machine learning models for predictive analytics, including Formula 1 race outcome prediction. Strong in data handling, feature engineering, and backend development using Python.
              </p>

              <div className="skills-preview">
                <h3>Focus Areas</h3>
                <div className="skills-grid">
                  <div className="skill-item">
                    <div className="skill-icon"><i className="fas fa-laptop-code"></i></div>
                    <span>Full-Stack Development</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon"><i className="fas fa-brain"></i></div>
                    <span>Machine Learning</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon"><i className="fas fa-database"></i></div>
                    <span>Data Engineering</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon"><i className="fas fa-rocket"></i></div>
                    <span>Product Building</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual reveal reveal-delay-2">
            <div className="visual-card">
              <div className="code-icon"><i className="fas fa-code"></i></div>
              <h4>Full-Stack Developer &amp; ML Enthusiast</h4>
              <p>Building impactful products with AI, data, and modern web engineering.</p>
            </div>
            <div className="experience-badge">
              <span className="number">3+</span>
              <span className="label">Projects Shipped</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About