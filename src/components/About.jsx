import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const education = [
  {
    school: 'New York University',
    degree: 'M.S. Computer Science',
    year: 'May 2024',
    gpa: '3.96 / 4.0',
    location: 'New York, NY',
    color: 'from-violet-500 to-purple-600',
  },
  {
    school: 'PES University',
    degree: 'B.E. Computer Science & Engineering',
    year: 'July 2021',
    gpa: '8.79 / 10.0',
    location: 'Bangalore, India',
    color: 'from-primary to-indigo-600',
  },
]

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-surface/50 to-dark pointer-events-none" />
      <div ref={ref} className="section-fade relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase">Get to know me</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a Software Development Engineer at <span className="text-orange-400 font-semibold">Amazon</span>, where I design and scale ML inference pipelines and data infrastructure for catalog systems. My work has directly driven significant cost savings through smarter pre-filtering, model caching, and operational excellence.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I graduated with an <span className="text-primary font-semibold">MS in Computer Science from NYU</span> with a 3.96 GPA, specializing in machine learning and cloud systems. Before Amazon, I worked at <span className="text-blue-400 font-semibold">IBM</span> as a Cognitive Data Scientist, building full-stack AI applications and high-accuracy ML models.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I'm passionate about building systems that are not just technically sound, but that deliver <span className="text-accent font-semibold">measurable, real-world impact</span> at scale. I thrive at the intersection of ML, cloud infrastructure, and software engineering.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['Problem Solver', 'ML Systems', 'Cloud Native', 'Team Mentor', 'Data Engineering'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap size={22} className="text-primary" />
              Education
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative p-6 rounded-2xl glass border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className={`absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${edu.color}`} />
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <div className="font-bold text-white text-base">{edu.school}</div>
                    <div className="text-slate-400 text-sm mt-1">{edu.degree}</div>
                    <div className="text-slate-500 text-xs mt-1">{edu.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 text-sm">{edu.year}</div>
                    <div className="text-primary font-mono font-bold text-sm mt-1">GPA: {edu.gpa}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
