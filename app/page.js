import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const experiences = [
  {
    mark: "L",
    role: "Senior Software Engineer",
    company: "Lektik",
    period: "Sep 2023 — Present",
    location: "Infopark, Kakkanad",
    tags: ["Flutter", "React", "FastAPI", "AWS", "PostgreSQL", "SOC 2"],
    highlights: [
      "Lead a team of 3 engineers, driving architecture, code reviews, CI/CD, testing, and end-to-end delivery of Flutter, React, and FastAPI products through store release and post-release monitoring.",
      "CascadeMD: Architected a cross-platform clinical documentation platform processing 15,000+ documents monthly for a U.S. government healthcare service, with role-based access, secure clinical workflows, and healthcare integrations supporting SOC 2 compliance.",
      "Reduced a core clinical workflow's completion time by 53% (49 seconds to 23 seconds) through state management improvements, API optimization, and cross-platform performance work.",
      "Sprinkle: Built a Flutter sports app with 20,000+ downloads and 15,000+ active users. Its backend-driven architecture lets new sports be added without frontend code changes; integrated authentication, payments, and deep links.",
      "Narraited: Built a cross-platform AI biography app serving 1,000+ active users, with speech recognition, audio recording, and social sign-in; reduced Azure hosting costs by 90%+ ($940 to under $100 per month).",
      "Seequince: Added GPS geofencing and background location tracking, improving core workflow completion time by 20% through codebase refactoring.",
    ],
  },
  {
    mark: "R",
    role: "Flutter Developer",
    company: "Reubro International",
    period: "Apr 2022 — Aug 2023",
    location: "Kochi, Kerala",
    tags: ["Flutter", "Firebase", "REST APIs", "Stripe", "Payments"],
    highlights: [
      "Delivered 5+ Flutter applications across Android, iOS, and Web, spanning e-commerce, social networking, job search, and employee management.",
      "Built an employee management app using GetX MVVM, role-based access, and payroll workflows.",
      "Mentored 4 junior developers in Flutter, Kotlin, and Firebase to support production feature delivery.",
      "Set up GitHub Actions CI/CD pipelines and handled performance optimization, crash monitoring, and maintenance of legacy Java and Kotlin Android apps.",
      "Ashadhara: Developed a secure Kotlin healthcare app for people with haemophilia, implementing SSL pinning, root detection, code obfuscation, and screenshot restrictions.",
      "Built a subscription-based academy management platform with enrollment, attendance, and scheduling, integrating Stripe, Apple In-App Purchase, and Google Play Billing.",
    ],
  },
];

const projects = [
  {
    index: "01",
    name: "CascadeMD",
    category: "Healthcare · AI documentation",
    description:
      "An AI-powered clinical documentation platform processing 15,000+ submissions each month for a U.S. government healthcare service, with SOC 2-compliant workflows and a 53% reduction in core workflow completion time.",
    tags: ["Flutter", "Clinical AI", "SOC 2", "RBAC"],
    href: "https://cascade.md/",
  },
  {
    index: "02",
    name: "Seequince",
    category: "Field operations · Location intelligence",
    description:
      "A field workforce monitoring application with refactored AI-generated code, GPS geofencing, background location tracking, scheduled processes, and Firebase notifications—improving core workflow completion time by 20%.",
    tags: ["Flutter", "Geofencing", "Background tasks", "Firebase"],
    href: "https://www.seequince.com/",
  },
  {
    index: "03",
    name: "Sprinkle",
    category: "Sports · Consumer mobile",
    description:
      "A cross-platform sports information app with 20,000+ downloads and 15,000+ active users, featuring a backend-driven sports system, authentication, payments, deep links, and location-aware features.",
    tags: ["Clean architecture", "Payments", "Deep links"],
    href: "https://sprinkle.bet/",
  },
  {
    index: "04",
    name: "Narraited",
    category: "Generative AI · Storytelling",
    description:
      "An AI-powered biography platform serving 1,000+ users across mobile and web, with speech, multimedia, secure sign-in, and Azure hosting costs reduced by more than 90%.",
    tags: ["Android / iOS / Web", "Speech", "Azure", "AI"],
    href: "https://app.narraited.com",
  },
  {
    index: "05",
    name: "Ashadhara",
    category: "Healthcare · Android security · Nov 2022–Feb 2023",
    description:
      "A healthcare app for hemophilia patients, designed for accessibility and hardened with SSL pinning, root detection, obfuscation, and screenshot protection.",
    tags: ["Kotlin", "SSL pinning", "Accessibility"],
  },
  {
    index: "06",
    name: "DAP — Drivers App",
    category: "Reubro International · Nov–Dec 2022",
    description:
      "A job-matching app connecting heavy vehicle drivers with employers looking to hire.",
    tags: [],
  },
  {
    index: "07",
    name: "Petty — Dating App",
    category: "Reubro International · Apr–Dec 2022",
    description: "A dating app designed around the familiar swipe-to-match experience.",
    tags: [],
  },
  {
    index: "08",
    name: "Jiwok Coach",
    category: "Reubro International · Jun–Nov 2022",
    description: "A Java healthcare and sports coaching application.",
    tags: ["Java"],
  },
  {
    index: "09",
    name: "KMRL Connect",
    category: "Apr–Nov 2022",
    description: "A business application for Kochi Metro Rail Limited.",
    tags: [],
  },
  {
    index: "10",
    name: "Slogan",
    category: "Reubro International · Aug 2022",
    description: "A social app where companies can get slogan ideas for their brands.",
    tags: [],
  },
  {
    index: "11",
    name: "Organisation Management App",
    category: "Dec 2022–Nov 2023",
    description: "A small-business management app for attendance, finance, and daily operations.",
    tags: [],
  },
  {
    index: "12",
    name: "Greenwealth",
    category: "Reubro International · Apr–Jul 2023",
    description: "An e-commerce application.",
    tags: [],
  },
  {
    index: "13",
    name: "Paytym",
    category: "Reubro International · Oct 2022–Jul 2023",
    description: "An employee and employer management application.",
    tags: [],
  },
  {
    index: "14",
    name: "Esegate",
    category: "Dec 2021–Feb 2022",
    description: "An app for GATE students.",
    tags: [],
  },
];

function ProjectCard({ project }) {
  const Tag = project.href ? "a" : "article";
  const externalProps = project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Tag className="project-card" {...externalProps}>
      <div className="project-card-heading">
        <span className="project-number">{project.index}</span>
        <div><h3>{project.name}</h3><p>{project.category}</p></div>
        {project.href && <span className="project-arrow"><Arrow diagonal /></span>}
      </div>
      <p className="project-description">{project.description}</p>
      <ul className="project-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
    </Tag>
  );
}

const skillGroups = [
  {
    number: "01",
    icon: "rocket",
    title: "Product engineering",
    skills: ["Flutter", "React", "FastAPI", "Tailwind CSS", "Jetpack Compose", "Responsive UI"],
  },
  {
    number: "02",
    icon: "database",
    title: "Architecture & data",
    skills: ["BLoC", "Riverpod", "Provider", "GetX", "REST APIs", "GraphQL", "PostgreSQL", "Firebase"],
  },
  {
    number: "03",
    icon: "cloud",
    title: "Cloud & delivery",
    skills: ["AWS ECS / ECR", "Azure App Service", "Docker", "GitHub Actions", "Codemagic", "App Store delivery"],
  },
  {
    number: "04",
    icon: "puzzle",
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

function CapabilityIcon({ name }) {
  const paths = {
    rocket: <><path d="M14.8 3.2c2.3-1.3 4.7-1.5 6-1.5.1 1.3-.2 3.7-1.5 6l-5.1 8.1-5.3-5.3 5.9-7.3Z" /><path d="m9.1 10.5-4.3.7-2.3 2.3 5.4 1.1m4.3 1.2-.7 4.3-2.3 2.3-1.1-5.4" /><circle cx="16.7" cy="7.3" r="1.5" fill="white" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v5c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 10v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5M4 15v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4" /></>,
    cloud: <path d="M19 18H6a4 4 0 0 1-.5-8A6.5 6.5 0 0 1 18 8a5 5 0 0 1 1 10Z" />,
    puzzle: <path d="M19 13h-2v-2a2 2 0 1 0-4 0v2h-2v-2H9a2 2 0 1 1-4 0V9H3V3h6v2a2 2 0 1 0 4 0V3h8v6h-2a2 2 0 1 0 0 4Zm-6 0v2a2 2 0 1 1-4 0v-2H7v2a2 2 0 1 1-4 0v-2H1v8h8v-2a2 2 0 1 1 4 0v2h8v-8h-2a2 2 0 1 1-4 0v-2h-2Z" />,
  };

  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="nav shell">
        <a className="brand-logo" href="#top" aria-label="Akhil V S, home">
          <Image src={`${basePath}/logo_akhil.png`} alt="" fill priority sizes="90px" />
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
          <p className="kicker"><span>Senior Software Engineer</span><i /> Kerala, India</p>
          <h1>
            I design and build<br /><em>digital products</em><br />that make an impact.
          </h1>
          <p className="hero-copy">
            Cross-platform mobile and web applications for healthcare, AI, commerce and more.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See my work <Arrow /></a>
            <a className="button button-secondary" href={`${basePath}/Akhil_software_engineer_cv.pdf`} download>Download résumé <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Portrait of Akhil V S">
          <Image src={`${basePath}/hero-portfolio-artwork.png`} alt="Akhil V S in a cream overshirt against a white background with soft blue shapes and technology notes" fill priority sizes="(max-width: 960px) 100vw, 60vw" />
        </aside>

        <div className="hero-stats" aria-label="Career highlights">
          <div><strong>4.5+</strong><span>Years</span></div>
          <div><strong>14+</strong><span>Products</span></div>
          <div><strong>15K+</strong><span>Monthly Users</span></div>
          <div><strong>53%</strong><span>Faster Workflow</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Core technologies">
        <div>
          <span>Flutter</span><i>✦</i><span>FastAPI</span><i>✦</i><span>Firebase</span><i>✦</i>
          <span>AWS</span><i>✦</i><span>PostgreSQL</span><i>✦</i><span>React</span><i>✦</i>
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
            {experiences.map((job) => (
              <article className="timeline-item" key={job.company}>
                <div className="company-mark" aria-hidden="true">{job.mark}</div>
                <div className="timeline-body">
                  <div className="experience-meta"><span>{job.period}</span><span className="experience-location">{job.location}</span></div>
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  <div className="experience-tags" aria-label="Technologies and focus areas">{job.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
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
          {projects.slice(0, 6).map((project) => <ProjectCard project={project} key={project.name} />)}
        </div>
        <details className="more-projects">
          <summary><span className="more-projects-open">See more projects</span><span className="more-projects-close">Show fewer projects</span></summary>
          <div className="project-grid">
            {projects.slice(6).map((project) => <ProjectCard project={project} key={project.name} />)}
          </div>
        </details>
      </section>

      <section className="skills section" id="skills">
        <div className="shell">
          <div className="section-index">04 / CAPABILITIES</div>
          <div className="section-title-row skills-heading">
            <h2>A practical<br /><span>toolkit.</span></h2>
            <p>Chosen for the problem, grounded in production experience.</p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <span className="skill-number">{group.number}</span>
                <span className="skill-icon"><CapabilityIcon name={group.icon} /></span>
                <div className="skill-copy"><h3>{group.title}</h3><p>{group.skills.join(" · ")}</p></div>
              </article>
            ))}
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
        <a className="brand-logo" href="#top" aria-label="Akhil V S, home"><Image src={`${basePath}/logo_akhil.png`} alt="" fill sizes="90px" /></a>
        <p>© {new Date().getFullYear()} Akhil V S · Senior Software Engineer</p>
        <div>
          <a href="https://www.linkedin.com/in/akhil15111993" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/akhil111993" target="_blank" rel="noreferrer">GitHub</a>
          <a href={`${basePath}/Akhil_software_engineer_cv.pdf`}>Résumé</a>
        </div>
      </footer>
    </main>
  );
}
