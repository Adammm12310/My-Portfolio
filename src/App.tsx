import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute('href')
      if (href?.startsWith('#')) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <nav className="nav">
          <div className="logo">Jin Liu</div>
          <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="nav-controls">
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
            <button 
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Jin Liu</span></h1>
            <p className="hero-subtitle">Full Stack Developer & Problem Solver</p>
            <p className="hero-description">
              I create innovative web applications and solutions that bridge technology and user needs.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
                  I enjoy solving complex problems and building scalable applications that make a difference.
                </p>
                <p>
                  With experience in both frontend and backend development, I focus on creating 
                  seamless user experiences while maintaining robust and efficient code architecture.
                </p>
              </div>
              <div className="about-image">
                <div className="placeholder-avatar">👨‍💻</div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder">🛒</div>
                </div>
                <div className="project-content">
                  <h3>E-Commerce Platform</h3>
                  <p>A comprehensive online marketplace with user authentication, product catalog, shopping cart, and secure payment processing. Features admin dashboard and inventory management.</p>
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">MongoDB</span>
                    <span className="tag">Stripe</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-sm" onClick={(e) => e.preventDefault()}>Live Demo</a>
                    <a href="#" className="btn btn-sm btn-outline" onClick={(e) => e.preventDefault()}>GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder">✅</div>
                </div>
                <div className="project-content">
                  <h3>Task Management System</h3>
                  <p>A collaborative project management tool with real-time updates, team collaboration features, deadline tracking, and progress analytics. Includes drag-and-drop kanban boards.</p>
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">Firebase</span>
                    <span className="tag">Material-UI</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-sm" onClick={(e) => e.preventDefault()}>Live Demo</a>
                    <a href="#" className="btn btn-sm btn-outline" onClick={(e) => e.preventDefault()}>GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder">📊</div>
                </div>
                <div className="project-content">
                  <h3>Data Visualization Dashboard</h3>
                  <p>An interactive analytics dashboard with real-time data visualization, customizable charts, and export functionality. Built with modern charting libraries and responsive design.</p>
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">D3.js</span>
                    <span className="tag">Chart.js</span>
                    <span className="tag">Express</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn btn-sm" onClick={(e) => e.preventDefault()}>Live Demo</a>
                    <a href="#" className="btn btn-sm btn-outline" onClick={(e) => e.preventDefault()}>GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="container">
            <h2>Skills & Technologies</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skills-list">
                  <span className="skill">React</span>
                  <span className="skill">TypeScript</span>
                  <span className="skill">JavaScript</span>
                  <span className="skill">HTML5</span>
                  <span className="skill">CSS3</span>
                  <span className="skill">Tailwind CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skills-list">
                  <span className="skill">Node.js</span>
                  <span className="skill">Express</span>
                  <span className="skill">Python</span>
                  <span className="skill">MongoDB</span>
                  <span className="skill">PostgreSQL</span>
                  <span className="skill">REST APIs</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <div className="skills-list">
                  <span className="skill">Git</span>
                  <span className="skill">Docker</span>
                  <span className="skill">AWS</span>
                  <span className="skill">Vite</span>
                  <span className="skill">Webpack</span>
                  <span className="skill">Figma</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <p>I'm always interested in new opportunities and collaborations.</p>
                <div className="contact-links">
                  <a href="mailto:jin.liu@example.com" className="contact-link">
                    📧 jin.liu@example.com
                  </a>
                  <a href="https://linkedin.com/in/jinliu" className="contact-link" target="_blank" rel="noopener noreferrer">
                    💼 LinkedIn
                  </a>
                  <a href="https://github.com/jinllf" className="contact-link" target="_blank" rel="noopener noreferrer">
                    🐱 GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Jin Liu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
