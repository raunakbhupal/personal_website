import { motion } from 'framer-motion'
import { Mail, Terminal, Heart } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Terminal size={16} className="text-white" />
            </div>
            <span className="font-mono font-bold text-white">rb<span className="text-primary">.</span>dev</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm flex items-center gap-1.5"
          >
            Built with <Heart size={13} className="text-primary fill-primary" /> by Raunak Bhupal · {new Date().getFullYear()}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
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
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-slate-500 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
