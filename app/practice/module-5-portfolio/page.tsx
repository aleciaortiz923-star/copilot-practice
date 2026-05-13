'use client'

const projects = [
  {
    title: 'Design System Redesign',
    description:
      'Modernized the UI for a B2B web app with reusable components, improved accessibility, and faster onboarding.',
    link: '#',
    tags: ['Design', 'Accessibility', 'React'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Design system dashboard sample',
  },
  {
    title: 'Marketing Website Launch',
    description:
      'Built a responsive landing page with polished interactions, testimonials, and analytics integration.',
    link: '#',
    tags: ['Tailwind', 'Next.js', 'Performance'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Marketing website homepage concept',
  },
  {
    title: 'Portfolio Dashboard',
    description:
      'Created an interactive dashboard to visualize project metrics, user feedback, and release velocity.',
    link: '#',
    tags: ['Data', 'Dashboard', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Dashboard analytics overview',
  },
]

export default function Module5Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="text-lg font-semibold text-cyan-300">
            Ava Chen
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="mailto:hello@example.com"
            className="rounded-full border border-cyan-500 px-4 py-2 text-sm text-cyan-200 transition hover:bg-cyan-500/10"
          >
            Contact Me
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
              Hi, I’m Ava Chen
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Product designer and front-end developer building polished web experiences.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I create user-focused digital products with thoughtful interactions, clean design, and reliable code.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-white"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-cyan-500/10">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Available for freelance work</p>
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <p className="text-sm text-slate-400">Ava Chen</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Product designer & front-end engineer</h2>
                <p className="mt-4 text-slate-300">
                  I help teams launch digital products with delightful interfaces and fast, accessible experiences.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-900 p-5 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Expertise</p>
                  <p className="mt-3">Design systems, animation, UI components</p>
                </div>
                <div className="rounded-2xl bg-slate-900 p-5 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Tools</p>
                  <p className="mt-3">Next.js, Tailwind CSS, Figma, React</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-20">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Selected work</p>
            <h2 className="text-3xl font-semibold text-white">Projects</h2>
            <p className="max-w-2xl text-slate-400">
              A curated selection of recent work with an emphasis on clean interfaces, strong brand presence, and
              polished interactions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/95 transition hover:-translate-y-1 hover:border-cyan-500/50"
              >
                <figure className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </figure>
                <div className="p-6">
                  <div className="mb-5 flex items-center justify-between text-sm text-slate-400">
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">Case study</span>
                    <span className="text-slate-500">2026</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-300">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-slate-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-800 bg-slate-950/90 px-3 py-1 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="mt-6 inline-flex items-center text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                  >
                    View project ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/95 p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">About me</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">A creator who makes every interface feel intentional.</h2>
              <p className="mt-4 text-slate-300 leading-8">
                I partner with founders and teams to turn ideas into beautiful digital experiences. I focus on
                accessible layouts, polished animation, and clear information architecture.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-950/90 p-6">
              <p className="text-sm text-slate-400">Core skills</p>
              <ul className="grid gap-3 text-slate-200 sm:grid-cols-2">
                <li className="rounded-2xl bg-slate-900 p-4">Responsive design</li>
                <li className="rounded-2xl bg-slate-900 p-4">Component libraries</li>
                <li className="rounded-2xl bg-slate-900 p-4">Performance tuning</li>
                <li className="rounded-2xl bg-slate-900 p-4">Interaction design</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/95 p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Get in touch</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">I’m ready to help with your next project.</h2>
            </div>
            <a
              href="mailto:hello@example.com"
              className="inline-flex rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Email me
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/95 px-6 py-8 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ava Chen. Designed with Tailwind CSS.</p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="https://github.com/ava-chen"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ava-chen"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/ava_chen"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

 *    - Add your own projects and achievements
 *    - Make it reflect your personality and style
 *
 * 5. LEARN BY REVIEWING
 *    - Don't just accept code blindly
 *    - Read what Copilot generates
 *    - Ask it to explain anything unclear
 *    - Understand the patterns so you can use them later
 *
 * 6. COMMON ISSUES & FIXES
 *    - Spacing looks off? → "Improve spacing using Tailwind"
 *    - Not responsive? → "Make this section responsive on mobile"
 *    - Missing types? → "Add TypeScript types for props"
 *    - Need animation? → "Add smooth transition animations"
 *
 * ========================================== */

/* ==========================================
 * 🎉 CONGRATULATIONS!
 * ==========================================
 *
 * When you complete this portfolio, you will have:
 *
 * ✓ Built a real, production-ready website with Copilot
 * ✓ Mastered Agent Mode for large scaffolding tasks
 * ✓ Used Edit Mode for precise refinements
 * ✓ Applied Ask Mode for strategic guidance
 * ✓ Leveraged rules for consistent code style
 * ✓ Created something you can actually deploy and share!
 *
 * NEXT STEPS:
 * - Deploy your portfolio to Vercel or Netlify
 * - Share it on LinkedIn and Twitter
 * - Keep practicing with Copilot on real projects
 * - Teach others what you've learned
 *
 * Remember: Copilot is a tool to amplify your skills,
 * not replace them. The more you understand code, the
 * better you'll be at directing Copilot to build
 * exactly what you envision.
 *
 * Happy coding! 🚀
 *
 * ========================================== */
