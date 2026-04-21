import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    color: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'MySQL', level: 82 },
    ],
  },
  {
    title: 'Cloud (AWS)',
    color: 'from-orange-500 to-amber-500',
    glow: 'shadow-orange-500/20',
    skills: [
      { name: 'SageMaker', level: 88 },
      { name: 'S3 / EC2', level: 90 },
      { name: 'Lambda', level: 83 },
      { name: 'Athena', level: 78 },
    ],
  },
  {
    title: 'ML / Data',
    color: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-500/20',
    skills: [
      { name: 'Apache Spark', level: 87 },
      { name: 'TensorFlow', level: 85 },
      { name: 'Scikit-learn', level: 82 },
      { name: 'Pandas / NumPy', level: 90 },
    ],
  },
  {
    title: 'AI & Frameworks',
    color: 'from-primary to-indigo-500',
    glow: 'shadow-primary/20',
    skills: [
      { name: 'Claude API', level: 88 },
      { name: 'Agentic AI', level: 82 },
      { name: 'Flask / Django', level: 83 },
      { name: 'Prompt Engineering', level: 85 },
    ],
  },
]

const techBadges = [
  'Java', 'Python', 'JavaScript', 'MySQL', 'Apache Spark', 'TensorFlow',
  'Keras', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn',
  'AWS S3', 'EC2', 'Lambda', 'Athena', 'SageMaker', 'Flask', 'Django',
  'Claude API', 'Agentic AI', 'Prompt Engineering', 'Git', 'OpenCV',
  'Tesseract OCR', 'Postman', 'Apache Solr',
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-surface pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase">What I work with</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
              className={`p-6 rounded-2xl glass border border-border hover:border-primary/20 transition-all duration-300 shadow-xl ${cat.glow}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${cat.color}`} />
                <h3 className="text-white font-bold text-base">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.1 + si * 0.1 + 0.3, duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-slate-400 text-sm font-mono tracking-widest uppercase mb-8">Full Tech Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 rounded-xl glass border border-border text-slate-300 text-sm font-medium hover:border-primary/40 hover:text-white hover:bg-primary/10 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
