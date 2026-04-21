import { motion } from 'framer-motion'
import { Briefcase, TrendingUp, DollarSign, Clock, Shield, Star } from 'lucide-react'

const experiences = [
  {
    company: 'Amazon',
    role: 'Software Development Engineer',
    tech: ['Java', 'Apache Spark', 'AWS'],
    period: 'June 2024 – Present',
    location: 'New York, NY',
    logo: '📦',
    color: 'from-orange-500 to-amber-500',
    current: true,
    highlights: [
      {
        icon: DollarSign,
        text: 'Reduced ML inference costs by $1.2M annually by designing a pre-filtering strategy that cut model input volume by 28%, reducing SageMaker runtime by 30 hours on average.',
        tag: '$1.2M saved',
        tagColor: 'text-green-400 bg-green-400/10',
      },
      {
        icon: TrendingUp,
        text: 'Mentored a summer intern on a model caching system delivering $2.2M in annual savings and reducing cloud compute by 200K+ hours, enabling adoption of an improved matching model.',
        tag: '$2.2M + 200K hrs',
        tagColor: 'text-emerald-400 bg-emerald-400/10',
      },
      {
        icon: Star,
        text: 'Designed and owned a widely consumed internal dataset adopted across multiple teams, driving catalog corrections and improving overall catalog quality at scale.',
        tag: 'Cross-team',
        tagColor: 'text-blue-400 bg-blue-400/10',
      },
      {
        icon: Shield,
        text: 'Represent the team as Operational Excellence lead; analyze ticket trends, identify root causes, propose process improvements, and ensure pipelines remain healthy, reducing operational toil.',
        tag: 'OpEx Lead',
        tagColor: 'text-purple-400 bg-purple-400/10',
      },
      {
        icon: Clock,
        text: 'Identified and resolved a critical duplicate-processing bug during a live model launch, preventing delays and driving an additional 15% cost reduction.',
        tag: '15% cost reduction',
        tagColor: 'text-yellow-400 bg-yellow-400/10',
      },
    ],
  },
  {
    company: 'Amazon',
    role: 'Software Development Engineer Intern',
    tech: ['Java', 'Apache Spark', 'AWS'],
    period: 'May 2023 – August 2023',
    location: 'New York, NY',
    logo: '📦',
    color: 'from-orange-400 to-yellow-500',
    current: false,
    highlights: [
      {
        icon: Briefcase,
        text: 'Developed and deployed an automated workflow analysis tool, significantly enhancing efficiency and expediting issue identification and resolution for Amazon Selection and Catalog Systems (ASCS).',
        tag: 'Automation',
        tagColor: 'text-orange-400 bg-orange-400/10',
      },
      {
        icon: TrendingUp,
        text: 'Implemented a streamlined input process, optimizing data retrieval and processing times, resulting in notable time savings and improved productivity.',
        tag: 'Performance',
        tagColor: 'text-amber-400 bg-amber-400/10',
      },
    ],
  },
  {
    company: 'IBM',
    role: 'Cognitive Data Scientist',
    tech: ['Flask', 'TensorFlow', 'Solr'],
    period: 'September 2021 – August 2022',
    location: 'Bangalore, India',
    logo: '🔵',
    color: 'from-blue-600 to-indigo-600',
    current: false,
    highlights: [
      {
        icon: Briefcase,
        text: 'Built and deployed a full-stack PDF annotation web app for a client using Flask, handling both frontend and backend development end-to-end.',
        tag: 'Full-stack',
        tagColor: 'text-blue-400 bg-blue-400/10',
      },
      {
        icon: Star,
        text: 'Developed an image classification model achieving 95%+ accuracy, reducing data processing time through coreset-based optimization.',
        tag: '95%+ accuracy',
        tagColor: 'text-cyan-400 bg-cyan-400/10',
      },
      {
        icon: TrendingUp,
        text: 'Engineered a backend search service using Flask and Solr, significantly improving search relevance and query performance for the client.',
        tag: 'Search Engine',
        tagColor: 'text-indigo-400 bg-indigo-400/10',
      },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-dark pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase">Where I've worked</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative pl-16 md:pl-20"
              >
                <div className={`absolute left-3 md:left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {exp.current && (
                  <div className="absolute left-2 md:left-4 top-5 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 opacity-30 animate-ping" />
                )}

                <div className="glass border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {exp.logo}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-slate-400 text-sm mt-0.5">
                          <span className="font-semibold text-white/80">{exp.company}</span>
                          <span className="mx-2 text-border">•</span>
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                      <span className="text-slate-400 text-sm font-mono">{exp.period}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {exp.highlights.map((h, hi) => (
                      <motion.div
                        key={hi}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + hi * 0.08, duration: 0.4 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
                          <h.icon size={13} className="text-slate-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-400 text-sm leading-relaxed">{h.text}</p>
                          <span className={`inline-block mt-1.5 px-2 py-0.5 rounded-md text-xs font-semibold font-mono ${h.tagColor}`}>
                            {h.tag}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
