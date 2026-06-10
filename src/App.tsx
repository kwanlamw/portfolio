import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* NAV */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold tracking-wide">KLW</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-400 text-sm font-medium tracking-widest uppercase mb-4">
            Full Stack Developer
          </p>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Kwan Lam Wong
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-8">
            5+ years of experience delivering scalable web
            applications across various sectors. Based in{" "}
            <span className="text-white">Yorkshire, UK</span>.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-gray-950 font-semibold rounded-lg transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 rounded-lg transition-colors"
            >
              View experience
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Frontend",
                skills: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Redux Toolkit",
                  "Tailwind CSS",
                  "HTML5",
                  "CSS3",
                ],
              },
              {
                title: "Backend",
                skills: [
                  "Node.js",
                  "Express",
                  "NestJS",
                  "RESTful APIs",
                  "GraphQL",
                ],
              },
              {
                title: "Databases",
                skills: [
                  "PostgreSQL",
                  "MongoDB",
                  "MS SQL",
                  "TypeORM",
                  "Drizzle ORM",
                ],
              },
              {
                title: "Cloud & DevOps",
                skills: ["AWS", "Azure", "Docker", "Terraform", "CI/CD", "Git"],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 bg-gray-800 text-gray-300 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Software Engineer",
                company: "Choco Up",
                type: "Fintech",
                period: "04/2024 – 11/2025",
                location: "Hong Kong",
                points: [
                  "Built TypeScript/Node.js microservices on AWS with Terraform deployment",
                  "Delivered PostgreSQL → MongoDB migration with zero data loss",
                  "Integrated eDDA/eGIRO payment gateways end-to-end",
                  "Automated compliance workflows via Slackbot ChatOps",
                ],
              },
              {
                title: "Software Engineer",
                company: "Bupa Hong Kong",
                type: "HealthTech",
                period: "02/2023 – 04/2024",
                location: "Hong Kong",
                points: [
                  "Architected secure data pipelines to the GOVHK eHealth portal (NHS Spine equivalent)",
                  "Maintained full-stack billing and medical network systems using Vue.js, Node.js, MS SQL, Azure",
                  "Delivered legacy system modernisation with TypeScript and Java Spring Boot",
                ],
              },
              {
                title: "Full Stack Developer",
                company: "Ringus Solution",
                type: "Fintech",
                period: "09/2022 – 01/2023",
                location: "Hong Kong",
                points: [
                  "Built cross-platform investment app with React Native and Redux-Saga",
                  "Developed real-time CRM portal with NestJS and TypeScript",
                ],
              },
              {
                title: "Full Stack Developer",
                company: "GreenTomato",
                type: "Tech",
                period: "10/2021 – 08/2022",
                location: "Hong Kong",
                points: [
                  "Built high-traffic React/Next.js frontend for AI-powered platform",
                  "Architected recommendation microservice with Kotlin, Spring Boot, GraphQL, MongoDB",
                ],
              },
            ].map((job) => (
              <div
                key={job.company}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-orange-400 text-sm mt-0.5">
                      {job.company} <span className="text-gray-600">·</span>{" "}
                      {job.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{job.period}</p>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {job.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-gray-400 text-sm flex gap-2"
                    >
                      <span className="text-orange-500 mt-1 flex-shrink-0">
                        ▸
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Patient Appointment Tracker</h3>
                  <p className="text-gray-500 text-xs mt-1">Healthcare Demo</p>
                </div>
                <span className="text-xs px-2 py-1 bg-orange-900/50 text-orange-400 rounded-md border border-orange-800">
                  Live
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                A full-stack demo simulating a healthcare appointment management
                system. Built with React, TypeScript, and Node.js — inspired by
                real-world experience integrating private healthcare systems
                with government health portals.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "TypeScript", "Node.js", "Zod", "Tailwind CSS"].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
              <a
                href="https://github.com/kwanlamw"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-orange-400 hover:text-orange-300 transition-colors"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT
      <section id="contact" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:kwanlamw@gmail.com"
              className="p-4 text-red-500 hover:bg-red-500 hover:text-white border border-transparent hover:border-red-500 rounded-lg transition-colors"
              >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://linkedin.com/in/kwanlamw"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-blue-700 hover:bg-blue-700 hover:text-white border border-transparent hover:border-blue-700 rounded-lg transition-colors"
              >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </section> */}

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-gray-800">
  <div className="max-w-5xl mx-auto flex items-center justify-between">
    <p className="text-gray-600 text-sm">
      Kwan Lam WONG · Full Right to Work · United Kingdom 🇬🇧 · Hong Kong 🇭🇰
    </p>
    <div className="flex gap-3">
      <a
        href="mailto:kwanlamw@gmail.com"
        className="p-3 text-red-500 hover:bg-red-500 hover:text-white border border-transparent hover:border-red-500 rounded-lg transition-colors"
      >
        <FaEnvelope size={18} />
      </a>
      <a
        href="https://linkedin.com/in/kwanlamw"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 text-blue-700 hover:bg-blue-700 hover:text-white border border-transparent hover:border-blue-700 rounded-lg transition-colors"
      >
        <FaLinkedin size={18} />
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;
