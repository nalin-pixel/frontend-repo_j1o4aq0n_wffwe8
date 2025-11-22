import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/60 to-slate-900/90 pointer-events-none" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Innovative Storytelling meets Solid Engineering
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl"
            >
              I build interactive experiences that turn complex ideas into memorable narratives — from performant web apps to playful 3D interfaces.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">View Work</a>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold backdrop-blur hover:bg-white/15 transition">Get in Touch</a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-10 text-slate-300/80 text-sm">
              Currently open for freelance and full-time opportunities.
            </motion.div>
          </div>
          <div className="lg:col-span-5" />
        </div>
      </div>
    </section>
  )
}
