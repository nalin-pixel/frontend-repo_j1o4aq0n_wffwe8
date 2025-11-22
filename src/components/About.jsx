import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-400/30 border border-white/10"></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About the Engineer</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I craft software like a narrative: characters are your users, scenes are your interfaces, and the plot is how data flows. With a background across product, frontend, and creative tech, I build experiences that feel cohesive and purposeful.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-200/90">
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Performance-first mindset</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Accessible by default</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Delightful micro-interactions</li>
              <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Collaborative storytelling</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
