import { motion } from 'framer-motion'
import { BookOpen, Camera, Trophy, ExternalLink, Gift, Sparkles } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Phia Gifting — AI Gift Discovery',
    subtitle: 'Hackathon Project · phia-gifts-ui.onrender.com',
    description:
      'An intelligent gift recommendation platform where users describe a recipient in natural language and the AI finds personalized gifts. Built a multi-stage pipeline: Claude extracts interests and traits, generates diverse search queries, fetches live Google Shopping results via SerpAPI, enforces category diversity, and ranks candidates using Wilson score confidence + semantic matching — returning 9 tailored gift picks with explanations.',
    tech: ['React 18', 'TypeScript', 'Python', 'FastAPI', 'Claude API', 'SerpAPI', 'Tailwind CSS', 'Vite'],
    icon: Gift,
    color: 'from-pink-500 to-rose-500',
    glow: 'hover:shadow-pink-500/20',
    badge: 'Hackathon',
    badgeColor: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
    link: 'https://github.com/raunakbhupal/phiaHack',
    linkLabel: 'View on GitHub',
    featured: true,
  },
  {
    title: 'Finger Vein Recognition System',
    subtitle: 'IEEE Xplore Publication — 2020',
    description:
      'Published research on biometric authentication using Gabor Filter Kernels and Skeletonization for finger vein pattern recognition. The system provides robust, contactless identity verification with high precision.',
    tech: ['Python', 'OpenCV', 'Image Processing', 'Gabor Filters', 'Biometrics'],
    icon: BookOpen,
    color: 'from-violet-500 to-purple-600',
    glow: 'hover:shadow-violet-500/20',
    badge: 'IEEE Xplore',
    badgeColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    link: 'https://ieeexplore.ieee.org',
    linkLabel: 'View Publication',
    featured: false,
  },
  {
    title: 'License Plate Recognition & Authentication',
    subtitle: 'Computer Vision System',
    description:
      'A real-time computer vision system for vehicle number plate detection and authentication using OpenCV for image preprocessing and Tesseract OCR for accurate character recognition, enabling automated vehicle authentication.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Tesseract OCR', 'Computer Vision'],
    icon: Camera,
    color: 'from-cyan-500 to-blue-600',
    glow: 'hover:shadow-cyan-500/20',
    badge: 'Computer Vision',
    badgeColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    link: null,
    linkLabel: null,
    featured: false,
  },
]

const achievements = [
  {
    title: 'Cisco IOT Hackathon',
    award: 'Winner',
    location: 'Bangalore, India',
    year: 'November 2018',
    color: 'from-primary to-indigo-500',
  },
  {
    title: 'Slac Fest Hackathon',
    award: 'Special Mention Winner',
    location: 'Bangalore, India',
    year: 'March 2019',
    color: 'from-accent to-blue-500',
  },
]

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-surface/30 to-dark pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase">What I've built & published</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              Projects & <span className="gradient-text">Publications</span>
            </h2>
          </motion.div>
        </div>

        {/* Featured project — full width */}
        {featured.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`group relative p-6 md:p-10 rounded-2xl glass border border-border ${project.glow} hover:border-pink-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 mb-6`}
          >
            <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.color}`} />

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex items-start gap-5 flex-1">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                  <project.icon size={30} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="text-white font-bold text-xl group-hover:text-pink-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-semibold">
                      <Sparkles size={11} /> Featured
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs font-mono mb-3">{project.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 text-xs font-mono hover:bg-pink-500/10 hover:text-pink-400 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-pink-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={15} />
                    {project.linkLabel}
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Remaining projects grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`group relative p-6 md:p-8 rounded-2xl glass border border-border ${project.glow} hover:border-primary/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.color}`} />

              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <project.icon size={26} className="text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>

              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 text-xs font-mono mb-4">{project.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 text-xs font-mono hover:bg-primary/10 hover:text-primary transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors"
                >
                  {project.linkLabel} <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Trophy size={24} className="text-yellow-400" />
            Hackathon Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-5 p-5 rounded-2xl glass border border-border hover:border-yellow-400/20 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ach.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Trophy size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-yellow-400 text-xs font-bold font-mono uppercase tracking-wider mb-1">{ach.award}</div>
                  <div className="text-white font-semibold">{ach.title}</div>
                  <div className="text-slate-500 text-xs mt-1">{ach.location} • {ach.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
