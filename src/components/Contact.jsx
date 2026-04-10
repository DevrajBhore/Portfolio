import { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Thank you for your message! I will get back to you within 24 hours.");
        setFormData({ name: "", email: "", company: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Email error:", error);
        alert("Oops! Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact-background">
        <div className="contact-shape contact-shape-1"></div>
        <div className="contact-shape contact-shape-2"></div>
      </div>

      <div className="container">
        <div className="contact-header">
          <h2 className="section-title reveal"><span>Let's Connect</span></h2>
          <p className="section-subtitle reveal">Open to new opportunities and ready to contribute to your team's
            success
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info reveal">
            <div className="info-card">
              <div className="availability-badge">
                <div className="status-dot"></div>
                <span>Available for opportunities</span>
              </div>

              <h3>Ready to Bring Value to Your Team</h3>
              <p>
                I'm actively seeking full-stack development roles where I can
                leverage my MERN stack expertise to build innovative solutions.
                Let's discuss how I can contribute to your organization's
                success.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <span>bhoredevraj896@gmail.com</span>
                    <small>Response within 24 hours</small>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Phone/WhatsApp</h4>
                    <span>(+91) 9136433309</span>
                    <small>Available for calls</small>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <span>Mumbai, India</span>
                    <small>Open to relocation & remote work</small>
                  </div>
                </div>
              </div>

              <div className="quick-actions">
                <h4>Quick Connect</h4>
                <div className="action-buttons">
                  <a
                    href="mailto:bhoredevraj896@gmail.com"
                    className="action-btn primary"
                  >
                    <i className="fas fa-envelope"></i>
                    Send Email
                  </a>
                </div>
              </div>

              <div className="professional-profiles">
                <h4>Professional Profiles</h4>
                <div className="profile-links">
                  <a
                    href="https://www.linkedin.com/in/devraj-bhore-686643269/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link"
                  >
                    <i className="fab fa-linkedin"></i>
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/DevrajBhore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link"
                  >
                    <i className="fab fa-github"></i>
                    GitHub
                  </a>
                  <a
                    href="/Devraj_Bhore_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link"
                  >
                    <i className="fas fa-file-pdf"></i>
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form reveal reveal-delay-1" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Get in Touch</h3>
              <p>Interested in working together? Let me know how I can help.</p>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <div className="input-group">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="name">Full Name *</label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="email">Email Address *</label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <i className="fas fa-building"></i>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <label htmlFor="company">Company</label>
                </div>
              </div>

              <div className="form-group full-width">
                <div className="input-group">
                  <i className="fas fa-message"></i>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message">Message *</label>
                </div>
              </div>
            </div>

            <div className="form-footer">
              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
              <p className="form-note">
                <i className="fas fa-shield-alt"></i>
                Your information is secure and will never be shared with third
                parties.
              </p>
            </div>
          </form>
        </div>

        <div className="job-preferences reveal">
          <h3>What I'm Looking For</h3>
          <div className="preference-cards">
            <div className="preference-card">
              <i className="fas fa-laptop-code"></i>
              <h4>Full-Stack Roles</h4>
              <p>
                MERN stack development positions with focus on both frontend and
                backend
              </p>
            </div>
            <div className="preference-card">
              <i className="fas fa-users"></i>
              <h4>Team Collaboration</h4>
              <p>
                Opportunities to work in agile teams and contribute to
                meaningful projects
              </p>
            </div>
            <div className="preference-card">
              <i className="fas fa-graduation-cap"></i>
              <h4>Learning & Growth</h4>
              <p>
                Roles that offer mentorship and opportunities for continuous
                learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;