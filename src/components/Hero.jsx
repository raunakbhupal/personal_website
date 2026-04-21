import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const roles = [
  'Software Development Engineer',
  'ML Systems Builder',
  'Cloud Architect',
  'AI Enthusiast',
]

function ParticleBg() {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </div>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBg />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 text-center lg:text-left"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border text-sm text-slate-400 mb-8">
            <MapPin size={13} />
            <span>New York, NY</span>
            <span className="mx-2 text-border">•</span>
            <span>SDE @ Amazon</span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Raunak</span>
          </motion.h1>

          <motion.div variants={item} className="h-16 flex items-center justify-center lg:justify-start mb-6">
            <div className="text-xl md:text-2xl font-mono font-medium text-slate-300">
              <span>{displayed}</span>
              <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-pulse" />
            </div>
          </motion.div>

          <motion.p variants={item} className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
            SDE at <span className="text-orange-400 font-semibold">Amazon</span>, NYU MS CS grad.
            I build ML inference pipelines, cost-saving cloud systems, and scalable data infrastructure
            that make a <span className="text-primary font-semibold">real impact</span>.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <a
              href="#experience"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-xl shadow-primary/30 glow-primary"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl glass border border-border text-white font-semibold text-base hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4 justify-center lg:justify-start">
            {[
              { icon: FaGithub, href: 'https://github.com/raunakbhupal', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/raunakbhupal7/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:raunakbhupal7@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-xl glass border border-border flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-purple-500 to-accent animate-[gradient-x_4s_ease_infinite] opacity-20 blur-xl" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-accent p-0.5">
              <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-7xl font-black gradient-text mb-2">RB</div>
                  <div className="text-slate-500 text-sm font-mono">@raunakbhupal</div>
                  <div className="mt-6 flex flex-col gap-3">
                    {[
                      { label: 'Amazon SDE', color: 'text-orange-400' },
                      { label: 'NYU MS CS • 3.96 GPA', color: 'text-blue-400' },
                      { label: 'ML & Cloud Systems', color: 'text-green-400' },
                    ].map(({ label, color }) => (
                      <div key={label} className={`text-xs font-semibold font-mono ${color} bg-black/30 rounded-lg px-3 py-1.5`}>
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 rounded-[2rem] border border-dashed border-primary/20"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-primary transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  )
}
