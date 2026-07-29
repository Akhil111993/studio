import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Lektik",
    period: "Sep 2023 — Present",
    location: "Infopark, Kakkanad",
    summary:
      "Leading AI-driven product development across mobile and web—owning requirement analysis, architecture, UI, performance, and deployment.",
    highlights: [
      "Helped CascadeMD achieve SOC 2 compliance while supporting secure clinical workflows processing 15,000+ submissions per month.",
      "Improved CascadeMD performance by 53% through targeted usability, scalability, and cross-platform performance enhancements.",
      "Built Sprinkle for 5,000+ users and pioneered a backend-driven sports system that reduced development effort by 40% and crash rates by 32%.",
      "Optimized Narraited’s Azure infrastructure, reducing monthly hosting costs from $941.85 to under $100—a saving of more than 90%.",
      "Mentor junior developers through code reviews and technical guidance while maintaining scalable Flutter architecture and CI/CD workflows.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Reubro International",
    period: "Apr 2022 — Aug 2023",
    location: "Kochi, Kerala",
    summary:
      "Lead Flutter and Android developer across e-commerce, employee management, social, and healthcare products.",
    highlights: [
      "Integrated REST APIs, Firebase, BigCommerce, and third-party platforms across production mobile and web applications.",
      "Reduced application crash rates by 30% through performance tuning, crash analytics, and maintenance of legacy Java and Kotlin apps.",
    ],
  },
  {
    role: "Software Consultant",
    company: "Freelance",
    period: "Jan 2021 — Mar 2022",
    location: "Remote",
    summary:
      "Built an end-to-end operations platform for dance and music academies.",
    highlights: [
      "Delivered enrollment, attendance, class scheduling, instructor management, reporting, and role-based access.",
      "Engineered subscriptions and payments with Stripe, Apple In-App Purchase, and Google Play Billing.",
      "Added notifications, reminders, and analytics for revenue, attendance, and student engagement.",
    ],
  },
];

const projects = [
  {
    index: "01",
    name: "CascadeMD",
    category: "Healthcare · AI documentation",
    description:
      "An AI-powered clinical documentation platform processing 15,000+ submissions each month for a U.S. government healthcare service, with SOC 2-compliant workflows and 53% faster performance.",
    tags: ["Flutter", "Clinical AI", "SOC 2", "RBAC"],
    href: "https://dictate.cascade.md",
    image: `${basePath}/projects/cascade.png`,
    className: "project-cascade",
  },
  {
    index: "02",
    name: "Seequince",
    category: "Field operations · Location intelligence",
    description:
      "A field workforce monitoring application with refactored AI-generated code, GPS geofencing, background location tracking, scheduled processes, and Firebase notifications.",
    tags: ["Flutter", "Geofencing", "Background tasks", "Firebase"],
    image: `${basePath}/projects/seequince.png`,
    className: "project-seequince",
  },
  {
    index: "03",
    name: "Sprinkle",
    category: "Sports · Consumer mobile",
    description:
      "A cross-platform sports information app serving 5,000+ users, with a backend-driven sports system, authentication, payments, deep links, and location-aware features.",
    tags: ["Clean architecture", "Payments", "Deep links"],
    href: "https://play.google.com/store/apps/details?id=com.lektik.sprinkle",
    image: `${basePath}/projects/sprinkle.png`,
    className: "project-sprinkle",
  },
  {
    index: "04",
    name: "Narraited",
    category: "Generative AI · Storytelling",
    description:
      "An AI-powered biography platform serving 1,000+ users across mobile and web, with speech, multimedia, secure sign-in, and Azure hosting costs reduced by more than 90%.",
    tags: ["Android / iOS / Web", "Speech", "Azure", "AI"],
    href: "https://app.narraited.com",
    image: `${basePath}/projects/narraited.png`,
    className: "project-narraited",
  },
  {
    index: "05",
    name: "Ashadhara",
    category: "Healthcare · Android security",
    description:
      "A healthcare app for hemophilia patients, designed for accessibility and hardened with SSL pinning, root detection, obfuscation, and screenshot protection.",
    tags: ["Kotlin", "SSL pinning", "Accessibility"],
    image: `${basePath}/projects/ashadhara.png`,
    className: "project-ashadhara",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Product engineering",
    skills: ["Flutter", "React", "FastAPI", "Tailwind CSS", "Jetpack Compose", "Responsive UI"],
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
          <p className="kicker"><span>Senior Software Engineer</span> Kerala, India</p>
          <h1>
            Hi! I&apos;m <em>Akhil.</em><br />I build mobile &amp; web products.
          </h1>
          <p className="hero-copy">
            5+ years shipping cross-platform products across healthcare, AI, commerce, and enterprise workflows—with measurable gains in scale, speed, reliability, and cloud cost.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <Arrow /></a>
            <a className="button button-secondary" href={`${basePath}/Senior-software-engineer.pdf`} download>Download résumé <Arrow diagonal /></a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Portrait of Akhil V S">
          <Image src={`${basePath}/hero-portrait-v2.png`} alt="Akhil V S in an orange sweatshirt" fill priority sizes="(max-width: 960px) 100vw, 42vw" />
          <div className="portrait-ring ring-one" />
          <div className="portrait-ring ring-two" />
          <div className="profile-badge badge-top"><span>✦</span><div><strong>15K+ monthly</strong><small>Clinical submissions</small></div></div>
          <div className="profile-badge badge-bottom tech-badge"><span>⌘</span><div><strong>Flutter · React · FastAPI</strong><small>Mobile · Web · APIs</small></div></div>
          <div className="profile-orbit">30%<small>fewer crashes</small></div>
        </aside>

        <div className="hero-stats" aria-label="Career highlights">
          <div><strong>5+</strong><span>Years shipping<br />production software</span></div>
          <div><strong>53%</strong><span>Performance gain<br />on CascadeMD</span></div>
          <div><strong>90%+</strong><span>Azure hosting<br />cost reduction</span></div>
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
                <Image className="project-image" src={project.image} alt="" fill sizes={index === 0 ? "(max-width: 680px) 100vw, 1180px" : "(max-width: 680px) 100vw, 580px"} />
                <div className="project-shade" />
                <div className="project-top"><span>{project.index}</span>{project.href && <Arrow diagonal />}</div>
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
        <div className="more-work">
          <div className="more-work-heading">
            <div>
              <span>AND THERE&apos;S MORE</span>
              <h3>10+ products shipped.</h3>
            </div>
            <strong>10+</strong>
            <p>Across healthcare, AI, workforce operations, commerce, education, and public services.</p>
          </div>
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
        <a className="brand-logo" href="#top" aria-label="Akhil V S, home"><Image src={`${basePath}/logo_akhil.png`} alt="" fill sizes="90px" /></a>
        <p>© {new Date().getFullYear()} Akhil V S · Senior Software Engineer</p>
        <div>
          <a href="https://www.linkedin.com/in/akhil15111993" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/akhil111993" target="_blank" rel="noreferrer">GitHub</a>
          <a href={`${basePath}/Senior-software-engineer.pdf`}>Résumé</a>
        </div>
      </footer>
    </main>
  );
}
