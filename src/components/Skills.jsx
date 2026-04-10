import '../styles/Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "MERN Stack",
      icon: "fas fa-layer-group",
      skills: [
        { name: "MongoDB", icon: "fas fa-database" },
        { name: "Express.js", icon: "fab fa-node-js" },
        { name: "React", icon: "fab fa-react" },
        { name: "Node.js", icon: "fab fa-node" }
      ],
      description: "Full-stack app development with modern JavaScript"
    },
    {
      title: "Frontend",
      icon: "fas fa-paint-brush",
      skills: [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "React", icon: "fab fa-react" },
        { name: "Vite", icon: "fas fa-bolt" }
      ],
      description: "Responsive, interactive user interfaces"
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", icon: "fab fa-node" },
        { name: "Express.js", icon: "fab fa-node-js" },
        { name: "RESTful APIs", icon: "fas fa-code" },
        { name: "MongoDB", icon: "fas fa-database" }
      ],
      description: "Scalable server-side applications and APIs"
    },
    {
      title: "Tools",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "GitHub", icon: "fab fa-github" },
        { name: "Figma", icon: "fab fa-figma" },
        { name: "Postman", icon: "fas fa-paper-plane" },
        { name: "VS Code", icon: "fas fa-code" }
      ],
      description: "Essential tools for modern development"
    },
    {
      title: "Python & Data",
      icon: "fab fa-python",
      skills: [
        { name: "Python", icon: "fab fa-python" },
        { name: "NumPy", icon: "fas fa-calculator" },
        { name: "Pandas", icon: "fas fa-table" },
        { name: "Scripting", icon: "fas fa-terminal" }
      ],
      description: "Data handling, scripting, and analytics"
    },
    {
      title: "Machine Learning",
      icon: "fas fa-brain",
      skills: [
        { name: "Scikit-learn", icon: "fas fa-cogs" },
        { name: "Regression", icon: "fas fa-chart-line" },
        { name: "Classification", icon: "fas fa-tags" },
        { name: "NLP", icon: "fas fa-comments" },
        { name: "Feature Eng.", icon: "fas fa-sliders-h" }
      ],
      description: "ML models for regression, classification & NLP"
    }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title reveal">Technical Skills</h2>
          <p className="section-subtitle reveal">Technologies and tools I use to build production-ready applications</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-category reveal reveal-delay-${(index % 3) + 1}`}>
              <div className="category-header">
                <div className="category-icon"><i className={category.icon}></i></div>
                <div>
                  <h3>{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-icon"><i className={skill.icon}></i></div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card reveal reveal-delay-1">
            <div className="summary-icon"><i className="fas fa-code"></i></div>
            <div className="summary-content">
              <h3>Production Experience</h3>
              <p>Shipped LegalAId (AI LegalTech PWA) and NomadGym (gym booking platform) to real users</p>
            </div>
          </div>
          <div className="summary-card reveal reveal-delay-2">
            <div className="summary-icon"><i className="fas fa-brain"></i></div>
            <div className="summary-content">
              <h3>AI & ML Projects</h3>
              <p>F1 race prediction model + LLM integration for production legal document generation</p>
            </div>
          </div>
          <div className="summary-card reveal reveal-delay-3">
            <div className="summary-icon"><i className="fas fa-users"></i></div>
            <div className="summary-content">
              <h3>Co-Founder Experience</h3>
              <p>Led full product development at two startups from architecture to deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills