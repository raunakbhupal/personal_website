import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'raunakbhupal7@gmail.com',
    href: 'mailto:raunakbhupal7@gmail.com',
    color: 'from-primary to-violet-500',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/raunakbhupal',
    href: 'https://github.com/raunakbhupal',
    color: 'from-slate-600 to-slate-500',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/raunakbhupal7',
    href: 'https://www.linkedin.com/in/raunakbhupal7/',
    color: 'from-blue-600 to-blue-500',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:raunakbhupal7@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }, 800)
  }

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-surface pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase">Let's connect</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Whether it's a job opportunity, collaboration, or just a hello — I'd love to hear from you.
            </p>
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
            <div className="p-6 rounded-2xl glass border border-border">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={18} className="text-primary" />
                <span className="text-white font-semibold">Based in New York, NY</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed ml-7">
                Currently at Amazon — always excited to discuss impactful engineering challenges and new opportunities.
              </p>
            </div>

            <div className="space-y-3">
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-border hover:border-primary/30 transition-all duration-200 group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <c.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">{c.label}</div>
                    <div className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{c.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-2xl glass border border-green-500/30 text-center"
              >
                <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-slate-400">Your email client opened. I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl glass border border-border space-y-5">
                <h3 className="text-white font-bold text-lg mb-2">Send a Message</h3>

                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { name: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-slate-400 text-sm mb-1.5 font-medium">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-slate-400 text-sm mb-1.5 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or just say hi..."
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-primary/30 disabled:opacity-60"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
