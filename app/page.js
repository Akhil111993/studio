const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Lektik Consulting",
    period: "Sep 2023 — Present",
    location: "Kakkanad, Kerala",
    summary:
      "Building healthcare, AI-assisted documentation, and enterprise workflow products across mobile and web.",
    highlights: [
      "Ship speech recognition, AI-generated clinical documentation, payment flows, Firebase services, and cloud-connected features.",
      "Shape scalable Flutter architecture with BLoC and Provider while establishing CI/CD workflows with GitHub Actions.",
      "Mentor junior developers through code reviews, technical guidance, and collaborative delivery.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Reubro International",
    period: "Jan 2022 — Aug 2023",
    location: "Kochi, Kerala",
    summary:
      "Delivered social, commerce, workforce, job-search, and dating products for Android, iOS, and web.",
    highlights: [
      "Integrated REST APIs, Firebase, BigCommerce, and third-party platforms across production applications.",
      "Reduced application crash rates by 30% through performance tuning, analytics, and targeted maintenance.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Instyart Private Limited",
    period: "Jan 2021 — Dec 2021",
    location: "Remote",
    summary:
      "Built an operations platform for dance and music academies, from enrollment and attendance to subscriptions and reporting.",
    highlights: [
      "Integrated Stripe, Apple In-App Purchase, and Google Play Billing for flexible subscription workflows.",
      "Delivered role-based access, reminders, notifications, and analytics for daily academy operations.",
    ],
  },
];

const projects = [
  {
    index: "01",
    name: "CascadeMD",
    category: "Healthcare · AI documentation",
    description:
      "A clinical documentation platform that turns dictated patient encounters into structured records for secure external submission.",
    tags: ["Flutter", "Speech recognition", "AI", "RBAC"],
    href: "https://dictate.cascade.md",
    className: "project-cascade",
  },
  {
    index: "02",
    name: "Seequince",
    category: "Workforce · Location intelligence",
    description:
      "A field-workforce app for attendance, shift activity, and location compliance with geofencing and background monitoring.",
    tags: ["Geofencing", "Background tasks", "Firebase"],
    className: "project-seequince",
  },
  {
    index: "03",
    name: "Sprinkle",
    category: "Sports · Consumer mobile",
    description:
      "A scalable cross-platform sports betting experience with secure authentication, subscriptions, deep links, and location-aware features.",
    tags: ["Clean architecture", "Payments", "Deep links"],
    href: "https://play.google.com/store/apps/details?id=com.lektik.sprinkle",
    className: "project-sprinkle",
  },
  {
    index: "04",
    name: "Narraited",
    category: "Generative AI · Storytelling",
    description:
      "An AI-powered biography platform combining guided storytelling with speech, audio, multimedia, and cross-platform publishing.",
    tags: ["Android / iOS / Web", "Audio", "AI"],
    href: "https://app.narraited.com",
    className: "project-narraited",
  },
  {
    index: "05",
    name: "Ashadhara",
    category: "Public health · Android security",
    description:
      "A secure government health-data app designed for accessibility, with SSL pinning, root detection, obfuscation, and screenshot protection.",
    tags: ["Kotlin", "SSL pinning", "Accessibility"],
    className: "project-ashadhara",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Mobile & frontend",
    skills: ["Flutter", "Dart", "React", "Tailwind CSS", "Jetpack Compose", "Responsive UI"],
  },
  {
    number: "02",
    title: "Architecture & data",
    skills: ["BLoC", "Riverpod", "Provider", "GetX", "REST APIs", "GraphQL", "PostgreSQL", "Firebase"],
  },
  {
    number: "03",
    title: "Cloud & delivery",
    skills: ["AWS ECS / ECR", "Azure App Service", "Docker", "GitHub Actions", "Codemagic", "App Store delivery"],
  },
  {
    number: "04",
    title: "Applied product systems",
    skills: ["AI integrations", "WebSockets", "Payments", "Geofencing", "Deep linking", "FCM", "Security"],
  },
];

function Arrow({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      <path
        d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14m-5-5 5 5-5 5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48">
      <path d="m18 12-12 12 12 12M30 12l12 12-12 12M27 7l-6 34" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="nav shell">
        <a className="logo" href="#top" aria-label="Akhil V S, home">
          AVS<span>/</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="nav-contact" href="mailto:akhil.15111993@gmail.com">
          Let&apos;s talk <Arrow diagonal />
        </a>
      </header>

      <section className="hero shell">
        <div className="hero-intro">
          <p className="kicker"><span>Senior Software Engineer</span> Kerala, India</p>
          <h1>
            I build mobile products that work in the <em>real world.</em>
          </h1>
          <p className="hero-copy">
            Five-plus years turning complex workflows into reliable Flutter experiences across Android, iOS, and web—from clinical documentation to field operations.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <Arrow /></a>
            <a className="button button-secondary" href="/resume">Download résumé <Arrow diagonal /></a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Engineering profile highlights">
          <div className="panel-top">
            <span className="window-dots"><i /><i /><i /></span>
            <span>profile.json</span>
          </div>
          <div className="code-card">
            <p><span>01</span><code>{`{`}</code></p>
            <p><span>02</span><code><b>"focus"</b>: <em>"mobile systems"</em>,</code></p>
            <p><span>03</span><code><b>"platforms"</b>: [<em>"iOS"</em>, <em>"Android"</em>, <em>"Web"</em>],</code></p>
            <p><span>04</span><code><b>"mindset"</b>: <em>"ship, measure, improve"</em>,</code></p>
            <p><span>05</span><code><b>"domains"</b>: [<em>"AI"</em>, <em>"healthcare"</em>, <em>"commerce"</em>]</code></p>
            <p><span>06</span><code>{`}`}</code></p>
          </div>
          <div className="panel-metric">
            <strong>30%</strong>
            <span>fewer crashes<br />through targeted optimization</span>
          </div>
          <div className="floating-mark"><CodeMark /></div>
        </aside>

        <div className="hero-stats" aria-label="Career highlights">
          <div><strong>5+</strong><span>Years building<br />production software</span></div>
          <div><strong>3</strong><span>Platforms<br />Android · iOS · Web</span></div>
          <div><strong>End-to-end</strong><span>From interface<br />to cloud delivery</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Core technologies">
        <div>
          <span>Flutter</span><i>✦</i><span>Dart</span><i>✦</i><span>Firebase</span><i>✦</i>
          <span>AWS</span><i>✦</i><span>PostgreSQL</span><i>✦</i><span>CI/CD</span><i>✦</i>
          <span>AI integrations</span>
        </div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-index">01 / ABOUT</div>
        <div className="about-content">
          <h2>Engineering clarity into <span>complex products.</span></h2>
          <div className="about-copy">
            <p>
              I&apos;m a senior software engineer who works across product layers: responsive interfaces, app architecture, APIs, data, authentication, payments, and release pipelines.
            </p>
            <p>
              I&apos;ve shipped products across healthcare, generative AI, workforce operations, commerce, and public services. I care about the details users feel—and the reliability they never have to think about.
            </p>
            <a className="inline-link" href="mailto:akhil.15111993@gmail.com">Start a conversation <Arrow diagonal /></a>
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="shell">
          <div className="section-index">02 / EXPERIENCE</div>
          <div className="section-title-row">
            <h2>Built through<br /><span>doing the work.</span></h2>
            <p>Production ownership, cross-functional delivery, and a growing responsibility for architecture and people.</p>
          </div>
          <div className="timeline">
            {experiences.map((job, index) => (
              <article className="timeline-item" key={job.company}>
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="timeline-meta">
                  <p>{job.period}</p>
                  <span>{job.location}</span>
                </div>
                <div className="timeline-body">
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <p>{job.summary}</p>
                  <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work section shell" id="work">
        <div className="section-index">03 / SELECTED WORK</div>
        <div className="section-title-row">
          <h2>Products shaped for<br /><span>actual use.</span></h2>
          <p>A selection of mobile and web products spanning high-trust workflows, consumer experiences, and real-world operations.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => {
            const Tag = project.href ? "a" : "article";
            const externalProps = project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {};
            return (
              <Tag className={`project-card ${project.className} ${index === 0 ? "project-featured" : ""}`} key={project.name} {...externalProps}>
                <div className="project-top"><span>{project.index}</span>{project.href && <Arrow diagonal />}</div>
                <div className="project-graphic" aria-hidden="true"><b>{project.name.slice(0, 2)}</b><i /><i /></div>
                <div className="project-content">
                  <p>{project.category}</p>
                  <h3>{project.name}</h3>
                  <div>{project.description}</div>
                  <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
              </Tag>
            );
          })}
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="shell">
          <div className="section-index">04 / CAPABILITIES</div>
          <div className="skills-layout">
            <div className="skills-intro">
              <h2>A practical<br /><span>toolkit.</span></h2>
              <p>Chosen for the problem, grounded in production experience.</p>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <article key={group.title}>
                  <span>{group.number}</span>
                  <h3>{group.title}</h3>
                  <p>{group.skills.join(" · ")}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="education">
            <span>Education</span>
            <p><strong>Master of Computer Applications</strong> · Indira Gandhi National Open University · 2026</p>
            <p><strong>B.Tech, Mechanical Engineering</strong> · Universal Engineering College · 2016</p>
          </div>
        </div>
      </section>

      <section className="contact shell">
        <div className="contact-mark"><CodeMark /></div>
        <p>LET&apos;S BUILD SOMETHING USEFUL</p>
        <h2>Have a hard problem?<br /><span>I&apos;m listening.</span></h2>
        <a href="mailto:akhil.15111993@gmail.com">akhil.15111993@gmail.com <Arrow diagonal /></a>
      </section>

      <footer className="footer shell">
        <a className="logo" href="#top">AVS<span>/</span></a>
        <p>© {new Date().getFullYear()} Akhil V S · Senior Software Engineer</p>
        <div>
          <a href="https://www.linkedin.com/in/akhil15111993" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/akhil111993" target="_blank" rel="noreferrer">GitHub</a>
          <a href="/resume">Résumé</a>
        </div>
      </footer>
    </main>
  );
}
