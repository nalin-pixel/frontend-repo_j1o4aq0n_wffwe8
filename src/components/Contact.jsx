import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // demo: pretend to send
      await new Promise(r => setTimeout(r, 900))
      setStatus('Thanks! I will get back to you soon.')
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">Let’s build a story together</motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="text-slate-300 mt-3 text-center">Tell me about your idea — product, pitch, or playful experiment.</motion.p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400/40" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400/40" />
          </div>
          <input placeholder="Subject" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <textarea required rows="5" placeholder="Your message" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <button type="submit" className="px-5 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">Send Message</button>
            <span className="text-slate-300/80 text-sm min-h-[1.5rem]">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
