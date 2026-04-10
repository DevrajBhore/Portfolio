import '../styles/Education.css'

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="education-header">
          <h2 className="section-title reveal">Education</h2>
          <p className="section-subtitle reveal">My academic journey and continuous learning path</p>
        </div>

        <div className="education-timeline">
          <div className="timeline-item reveal">
            <div className="timeline-marker">
              <div className="marker-icon"><i className="fas fa-graduation-cap"></i></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-card">
                <div className="card-header">
                  <div className="institution-info">
                    <h3>St. ROCKS COLLEGE</h3>
                    <p className="timeline-location"><i className="fas fa-map-marker-alt"></i>Mumbai, India</p>
                  </div>
                  <div className="education-period">
                    <span className="period-badge">2023 – 2026</span>
                  </div>
                </div>

                <div className="degree-info">
                  <p className="timeline-degree">
                    <i className="fas fa-book"></i>
                    Bachelor of Science in Information &amp; Technology (B.Sc I.T)
                  </p>
                  <p className="timeline-status">
                    <i className="fas fa-hourglass-half"></i>
                    Currently in 3rd year — graduating April 2026
                  </p>
                </div>

                <div className="education-details">
                  <h4><i className="fas fa-lightbulb"></i> Key Focus Areas</h4>
                  <div className="skills-grid">
                    <span className="skill-pill">Software Development</span>
                    <span className="skill-pill">Database Management</span>
                    <span className="skill-pill">Web Technologies</span>
                    <span className="skill-pill">Project Management</span>
                    <span className="skill-pill">Data Structures</span>
                    <span className="skill-pill">Algorithms</span>
                  </div>
                </div>

                <div className="achievements">
                  <h4><i className="fas fa-user-graduate"></i> Academic Highlights</h4>
                  <ul className="achievement-list">
                    <li><i className="fas fa-check-circle"></i>Co-founded two startups (LegalAId & NomadGym) during studies</li>
                    <li><i className="fas fa-check-circle"></i>Built ML models for F1 race prediction using FastF1 data</li>
                    <li><i className="fas fa-check-circle"></i>Active in real-world full-stack product development alongside coursework</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="continuous-learning">
          <h3 className="reveal">Continuous Learning</h3>
          <div className="learning-cards">
            <div className="learning-card reveal reveal-delay-1">
              <div className="learning-icon"><i className="fas fa-laptop-code"></i></div>
              <h4>Online Courses</h4>
              <p>Regularly sharpening skills through YouTube, freeCodeCamp, and hands-on project work</p>
            </div>
            <div className="learning-card reveal reveal-delay-2">
              <div className="learning-icon"><i className="fas fa-project-diagram"></i></div>
              <h4>Real-World Products</h4>
              <p>Building and launching actual products — not just tutorials — to apply and deepen knowledge</p>
            </div>
            <div className="learning-card reveal reveal-delay-3">
              <div className="learning-icon"><i className="fas fa-brain"></i></div>
              <h4>AI & ML Exploration</h4>
              <p>Staying current with LLMs, ML pipelines, and predictive modeling techniques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education