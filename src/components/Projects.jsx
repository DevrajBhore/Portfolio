import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "LegalAId",
      url: "https://legal-aid.xyz",
      description: "AI-Powered Legal Document Generation Platform (LegalTech)",
      role: "Co-Founder",
      period: "11/2025 – Present",
      features: [
        "Co-founded and built an AI-powered platform to generate legally structured Indian documents (NDAs, MoUs, agreements)",
        "Designed a clause-based document generation system aligned with Indian legal standards",
        "Implemented dynamic form-driven workflows to customize contracts based on user inputs",
        "Integrated LLM-based generation using structured prompts for context-aware legal drafting",
        "Developed full-stack MERN application and architecting lawyer onboarding system (BCI-based)"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "LLM Integration", "MERN"]
    },
    {
      title: "NomadGym",
      url: "https://nomadgym.xyz",
      description: "India's first pay-per-hour gym booking platform",
      role: "Co-Founder & Full-Stack Developer",
      period: "06/2025 – Present",
      features: [
        "Built and launched a PWA enabling users to instantly book gyms across India without long-term memberships",
        "Designed user flows for gym-goers, gym owners, and admins with role-based dashboards",
        "Integrated Razorpay payments, real-time availability, and Leaflet Maps API with geolocation",
        "Onboarded initial gyms with React + Vite frontend and Node.js/Express + MongoDB backend"
      ],
      technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "Razorpay", "Leaflet Maps"]
    },
    {
      title: "F1 Winner Prediction",
      url: "https://github.com/DevrajBhore/F1_ML",
      description: "Machine Learning | Predictive Modeling | FastF1 Data",
      role: "ML Engineer",
      period: "04/2026 – Present",
      features: [
        "Developed an ML model to predict F1 race winners using historical data and feature engineering",
        "Generated probabilistic predictions based on driver and team performance metrics",
        "Built a modular pipeline with automated training, evaluation, and artifact storage"
      ],
      technologies: ["Python", "Scikit-learn", "FastF1", "NumPy", "Pandas", "Machine Learning"]
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title reveal">Featured Projects</h2>
        <p className="section-subtitle reveal">Real-world products combining AI, data engineering, and full-stack development</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card reveal reveal-delay-${index + 1}`}>
              <div className="project-card-inner">
                <div className="project-header">
                  <div className="project-title-wrapper">
                    <h3>{project.title}</h3>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Visit ${project.title}`}>
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                  <p className="project-description">{project.description}</p>
                  {project.period && (
                    <span className="project-period">
                      <i className="fas fa-calendar-alt"></i> {project.period}
                    </span>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-role">
                    <i className="fas fa-user-tie"></i>
                    <span>{project.role}</span>
                  </div>

                  <div className="project-technologies">
                    <h4>Stack</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-features">
                    <h4><i className="fas fa-star"></i> Key Contributions</h4>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}><i className="fas fa-check"></i>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-actions">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-btn primary">
                    <i className="fas fa-globe"></i>
                    {project.title === "F1 Winner Prediction" ? "View on GitHub" : "Live Demo"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects