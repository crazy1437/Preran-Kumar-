import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import heroPortrait from './assets/hero.png'
import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  {
    title: 'AI / MACHINE LEARNING',
    items: ['Machine Learning', 'Deep Learning', 'Model Exploration', 'Data-Driven Experimentation'],
  },
  {
    title: 'COMPUTER VISION',
    items: ['Image Processing', 'Visual Analysis', 'Vision Workflows', 'Experimentation'],
  },
  {
    title: 'UI / UX',
    items: ['Figma', 'FigJam', 'Wireframing', 'Prototyping', 'UX Design', 'Interface Design'],
  },
  {
    title: 'ANIMATION / GRAPHICS',
    items: ['Motion Design', 'Graphics', 'Visual Design', 'VFX', 'Creative Storytelling'],
  },
  {
    title: 'CREATIVE TECHNOLOGY',
    items: ['Generative AI', 'Creative AI', 'Interactive Experiences', 'Design Systems'],
  },
]

const profileName = 'Preran Kumar K R'

const workProjects = [
  {
    id: 1,
    number: '01',
    title: 'Vision-Driven ML Prototype',
    category: 'AI / ML',
    description: 'Explored computer vision and machine learning workflows to build visual interpretation systems with interactive potential.',
    tech: ['Computer Vision', 'ML Workflows', 'Visual Analysis'],
    role: 'Developer / Researcher',
    details: {
      project: 'Vision-Driven ML Prototype',
      overview: 'A concept-led exploration of how machine learning and computer vision can support visual interpretation and intelligent interaction design.',
      problem: 'To understand how data-driven systems can improve perception, analysis, and digital creativity in visual experiences.',
      approach: 'Built an experimental workflow around computer vision and ML concepts, then connected the outcomes to practical, user-centered storytelling.',
      technology: ['Machine Learning', 'Computer Vision', 'Image Processing', 'Visual Analysis'],
      role: 'Explored model workflows and translated technical experimentation into a more design-aware digital outcome.',
      result: 'Strengthened practical understanding of AI workflows, visual interpretation, and how creative technology can become usable and expressive.',
    },
  },
  {
    id: 2,
    number: '02',
    title: 'Creative AI Interface Study',
    category: 'UI / UX',
    description: 'Designed and prototyped AI-driven interfaces focused on usability, aesthetics, and immersive storytelling.',
    tech: ['Figma', 'UX Design', 'Prototyping'],
    role: 'UI / UX Designer',
    details: {
      project: 'Creative AI Interface Study',
      overview: 'A design-led exploration of AI-powered experiences that feel intuitive, immersive, and visually refined.',
      problem: 'To create meaningful AI interactions without sacrificing clarity, usability, or overall visual impact.',
      approach: 'Translated early concepts into wireframes, UI flows, and prototype explorations using structured design thinking and creative direction.',
      technology: ['Figma', 'FigJam', 'Wireframing', 'Prototyping', 'UX Design', 'Interface Design'],
      role: 'Focused on interface planning, interaction clarity, and the visual language of AI experiences.',
      result: 'Built a more user-centered process for designing intelligent digital products and creative technology experiences.',
    },
  },
  {
    id: 3,
    number: '03',
    title: 'Motion + Visual Experiment',
    category: 'Animation',
    description: 'Created cinematic visual studies using motion, graphics, and composition to enhance digital storytelling.',
    tech: ['Motion Design', 'Graphics', 'VFX'],
    role: 'Motion / Visual Contributor',
    details: {
      project: 'Motion + Visual Experiment',
      overview: 'A creative study focused on rhythm, atmosphere, and storytelling through motion and visual composition.',
      problem: 'To craft expressive motion design that feels premium and cinematic while remaining purposeful and minimal.',
      approach: 'Developed design-led studies using layered composition, motion cues, and visual direction to explore mood and narrative.',
      technology: ['Motion Design', 'Graphics', 'VFX', 'Visual Design', 'Creative Storytelling'],
      role: 'Focused on layout, atmosphere, and motion-driven visual composition.',
      result: 'Deepened understanding of timing, mood, and visual communication in digital storytelling.',
    },
  },
]

const journey = [
  {
    type: 'Education',
    title: 'B.Tech / Engineering in Artificial Intelligence & Machine Learning',
    status: 'Completed',
    detail: 'Focused on intelligent systems, emerging technologies, and practical problem solving.',
  },
  {
    type: 'Internship',
    title: 'Cocos Innovative Pvt Ltd',
    subtitle: 'ML Engineer Intern',
    status: 'Completed',
    detail: 'Worked on machine learning exploration, applied experimentation, and learning in a professional technical environment.',
  },
  {
    type: 'MSc',
    title: 'Animation, Graphics & VFX',
    subtitle: 'Specialization: UI/UX',
    status: 'Currently pursuing',
    detail: 'Emphasis on motion design, visual communication, and digital storytelling.',
  },
]

const creativeLab = [
  { label: 'Computer Vision', tone: 'a' },
  { label: 'Generative AI', tone: 'b' },
  { label: 'Motion Design', tone: 'c' },
  { label: 'UI / UX Systems', tone: 'd' },
  { label: 'Graphic Design', tone: 'e' },
  { label: 'VFX Concepts', tone: 'f' },
]

const contactDetails = {
  email: 'prerankr7@gmail.com',
  phone: '+91 8073298655',
  github: 'https://github.com/crazy1437',
  linkedin: 'https://www.linkedin.com/in/preran-kumar',
  portfolio: 'https://preran-kumar.dev',
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onPointerMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('pointermove', onPointerMove)
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const message = formData.get('message')?.toString().trim()

    if (!name || !email || !message) {
      event.currentTarget.reportValidity()
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )

    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="page-shell" onPointerLeave={() => setCursorVariant('default')}>
      <div
        className={`custom-cursor ${cursorVariant}`}
        style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
      />

      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a className="brand" href="#home" aria-label="Home">
            PK
          </a>

          <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="intro-section" id="home">
          <div className="intro-backdrop" aria-hidden="true">
            <span className="light-beam" />
            <span className="particle particle-a" />
            <span className="particle particle-b" />
            <span className="particle particle-c" />
            <span className="particle particle-d" />
            <span className="particle particle-e" />
            <span className="particle particle-f" />
          </div>

          <motion.div
            className="intro-portrait"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <div className="portrait-frame">
              <img src={heroPortrait} alt="Preran Kumar portrait" />
            </div>
          </motion.div>

          <div className="identity-wrap">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              PRERAN KUMAR K R
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9 }}
            >
              AI/ML ENGINEER
            </motion.h1>
            <motion.p
              className="subline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              AI/ML ENGINEER • UI/UX • ANIMATION • GRAPHICS • CREATIVE TECHNOLOGY
            </motion.p>
          </div>
        </section>

        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="section-kicker">AI / ML • UI / UX • Animation • Graphics • Creative Technology</p>
            <h2 id="hero-title">ENGINEERING INTELLIGENCE.</h2>
            <h3>DESIGNING EXPERIENCES.</h3>
            <p className="lead">
              Multidisciplinary AI/ML engineering shaped by computer vision, design systems, motion, and visual storytelling.
            </p>
            <p className="subtext">
              I enjoy turning technical ideas into user-centered digital experiences that blend engineering thinking with creative expression.
            </p>
            <div className="button-row">
              <a href="#work" className="primary-btn">
                EXPLORE MY WORK
              </a>
              <a href="/preran-kumar-resume.pdf" target="_blank" rel="noreferrer" className="secondary-btn">
                VIEW RESUME
              </a>
              <a href="#contact" className="secondary-btn">
                LET&apos;S CONNECT
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="signal-grid" />
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="glass-card">
              <span>Creative Tech</span>
              <strong>ML + design systems</strong>
            </div>
          </div>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-heading">
            <span>01 / ABOUT</span>
            <h2>TECHNOLOGY MEETS CREATIVITY.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I am Preran Kumar K R, a multidisciplinary AI/ML engineer with a strong foundation in machine
                learning, computer vision, UI/UX, animation, graphics, and VFX. I enjoy turning technical ideas
                into visually compelling and user-centered digital experiences.
              </p>
              <p>
                My engineering foundation is in Artificial Intelligence &amp; Machine Learning, and I am currently
                pursuing an MSc in Animation, Graphics &amp; VFX with a UI/UX specialization. My focus is on
                combining engineering thinking with creative expression and digital storytelling.
              </p>
              <p>
                My work is rooted in creative technology — blending AI workflows, design systems, and visual
                communication to build experiences that are intelligent, immersive, and memorable.
              </p>
            </div>

            <div className="about-image-panel">
              <img src={heroPortrait} alt="Preran Kumar portrait detail" />
            </div>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-heading">
            <span>02 / CAPABILITIES</span>
            <h2>WHAT I WORK WITH</h2>
          </div>

          <div className="skills-orbit" aria-label="Skill categories">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                className="skill-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -6 }}
              >
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="content-section work-section" id="work">
          <div className="section-heading">
            <span>03 / SELECTED WORK</span>
            <h2>PROJECTS</h2>
          </div>

          <div className="filter-row" aria-label="Work categories">
            <span>AI / ML</span>
            <span>COMPUTER VISION</span>
            <span>APP DEVELOPMENT</span>
            <span>UI / UX</span>
            <span>ANIMATION</span>
            <span>GRAPHICS / VFX</span>
            <span>CREATIVE TECHNOLOGY</span>
          </div>

          <div className="project-grid">
            {workProjects.map((project) => (
              <motion.article
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setCursorVariant('project')}
                onMouseLeave={() => setCursorVariant('default')}
                onClick={() => setActiveProject(project)}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-image" aria-hidden="true">
                  <span className="image-glow" />
                </div>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {activeProject && (
          <div className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <div className="detail-backdrop" onClick={() => setActiveProject(null)} />
            <div className="detail-panel">
              <button className="close-btn" type="button" onClick={() => setActiveProject(null)} aria-label="Close project details">
                ×
              </button>

              <div className="detail-header">
                <span>{activeProject.number}</span>
                <h3 id="project-modal-title">{activeProject.title}</h3>
              </div>

              <div className="detail-grid">
                <div>
                  <h4>PROJECT</h4>
                  <p>{activeProject.details.project}</p>
                </div>
                <div>
                  <h4>OVERVIEW</h4>
                  <p>{activeProject.details.overview}</p>
                </div>
                <div>
                  <h4>PROBLEM</h4>
                  <p>{activeProject.details.problem}</p>
                </div>
                <div>
                  <h4>APPROACH</h4>
                  <p>{activeProject.details.approach}</p>
                </div>
                <div>
                  <h4>TECHNOLOGY</h4>
                  <p>{activeProject.details.technology.join(' • ')}</p>
                </div>
                <div>
                  <h4>MY ROLE</h4>
                  <p>{activeProject.details.role}</p>
                </div>
                <div className="wide">
                  <h4>RESULT / LEARNING</h4>
                  <p>{activeProject.details.result}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="content-section experience-section" id="experience">
          <div className="section-heading">
            <span>04 / EXPERIENCE</span>
            <h2>INTERNSHIP</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-type">INTERNSHIP COMPLETED</span>
                <h3>COCOS INNOVATIVE PVT LTD</h3>
                <p>ML Engineer Intern</p>
                <small>Worked on machine learning exploration, applied experimentation, and learning in a professional technical environment.</small>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section journey-section" id="journey">
          <div className="section-heading">
            <span>05 / JOURNEY</span>
            <h2>EDUCATION &amp; GROWTH</h2>
          </div>

          <div className="vertical-timeline">
            {journey.map((step) => (
              <div key={step.title} className="journey-item">
                <div className="journey-line" />
                <div className="journey-card">
                  <span>{step.type}</span>
                  <h3>{step.title}</h3>
                  {step.subtitle && <p>{step.subtitle}</p>}
                  <strong>{step.status}</strong>
                  <small>{step.detail}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section creative-section" id="creative-lab">
          <div className="section-heading">
            <span>06 / CREATIVE LAB</span>
            <h2>EXPERIMENTS IN MOTION &amp; VISION</h2>
          </div>

          <div className="creative-grid">
            {creativeLab.map((item, index) => (
              <div key={item.label} className={`creative-card tone-${item.tone}`}>
                <span>{index + 1}</span>
                <h3>{item.label}</h3>
                <p>Placeholder concept for future creative asset replacement.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section resume-section" id="resume">
          <div className="section-heading">
            <span>07 / RESUME</span>
            <h2>THE COMPLETE STORY</h2>
          </div>

          <div className="resume-actions">
            <a href="/preran-kumar-resume.pdf" target="_blank" rel="noreferrer" className="primary-btn">
              VIEW RESUME
            </a>
            <a href="/preran-kumar-resume.pdf" download className="secondary-btn">
              DOWNLOAD RESUME
            </a>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-heading">
            <span>08 / CONTACT</span>
            <h2>LET&apos;S BUILD SOMETHING.</h2>
          </div>

          <div className="contact-wrap">
            <div className="contact-copy">
              <p className="quote">
                “I&apos;m looking for opportunities where AI, design, and storytelling can come together to build meaningful digital experiences.”
              </p>
              <ul className="contact-list">
                <li>
                  <span>Email</span>
                  <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}>{contactDetails.phone}</a>
                </li>
                <li>
                  <span>GitHub</span>
                  <a href={contactDetails.github} target="_blank" rel="noreferrer">github.com/crazy1437</a>
                </li>
                <li>
                  <span>LinkedIn</span>
                  <a href={contactDetails.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/preran-kumar</a>
                </li>
                <li>
                  <span>Portfolio</span>
                  <a href={contactDetails.portfolio} target="_blank" rel="noreferrer">preran-kumar.dev</a>
                </li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label>
                <span>NAME</span>
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label>
                <span>EMAIL</span>
                <input type="email" name="email" required placeholder="your@email.com" />
              </label>
              <label>
                <span>MESSAGE</span>
                <textarea name="message" required rows="5" placeholder="Tell me about your idea..." />
              </label>
              <button type="submit" className="primary-btn">SEND MESSAGE</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="ending-screen" aria-label="Closing statement">
        <div className="ending-inner">
          <p>PRERAN KUMAR K R</p>
          <p>AI/ML × UI/UX × ANIMATION × VFX</p>
          <p>BUILD • CREATE • EXPLORE</p>
          <span>© PRERAN KUMAR K R</span>
        </div>
      </footer>
    </div>
  )
}

export default App
