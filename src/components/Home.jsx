import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-orb hero-bg-orb-1"></div>
      <div className="hero-bg-orb hero-bg-orb-2"></div>
      <div className="hero-bg-orb hero-bg-orb-3"></div>
      <div className="hero-grid-bg"></div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <div className="hero-badge">
                Full-Stack Developer (MERN) &amp; ML Enthusiast
              </div>
            </div>
            <h1>Devraj Bhore</h1>
            <h2>
              Aspiring Software Engineer
              <span className="cursor-blink"></span>
            </h2>
            <p>
              Building real-world products combining AI, data, and software
              engineering. Co-founder of LegalAId &amp; NomadGym. Passionate
              about scalable systems and impactful solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" /><path d="M22 6L12 13L2 6" /></svg>
                Get In Touch
              </a>
              <a href="/Devraj_Bhore_Resume.pdf" className="btn btn-resume" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" /></svg>
                Resume
              </a>
            </div>

            <div className="hero-social">
              <span>Find me on</span>
              <div className="social-divider"></div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/devraj-bhore-686643269/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://github.com/DevrajBhore" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="image-ring"></div>
              <div className="profile-image">
                <img src="/images/devraj.jpg" alt="Devraj Bhore" className="profile-photo" />
              </div>
              <div className="image-decoration"></div>
              <div className="stat-card stat-card-1">
                <div className="stat-number">3+</div>
                <div className="stat-label">Projects Shipped</div>
              </div>
              <div className="stat-card stat-card-2">
                <div className="stat-number">MERN</div>
                <div className="stat-label">Full-Stack Stack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;