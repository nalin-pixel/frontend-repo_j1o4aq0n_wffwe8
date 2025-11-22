import { motion } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'

const projects = [
  {
    title: 'Narrative Canvas',
    description: 'A visual storytelling tool that lets teams storyboard product ideas and user journeys in real-time.',
    tags: ['React', 'WebGL', 'Realtime'],
    link: '#'
  },
  {
    title: 'Microverse',
    description: 'A playful 3D microsite exploring the universe of developer tools through interactive scenes.',
    tags: ['Three.js', 'Spline', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'Pulseboard',
    description: 'Developer-friendly analytics dashboards with narrative threads and embedded walkthroughs.',
    tags: ['Next.js', 'Tailwind', 'Charts'],
    link: '#'
  },
]

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="text-slate-300 mt-2">Interactive, performant, and story-driven.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-slate-200 hover:text-white/90 transition">
            <Play size={18} /> Watch demo reel
          </a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => (
            <motion.a key={i} variants={item} href={p.link} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold tracking-tight">{p.title}</h3>
                  <ExternalLink className="text-slate-300 group-hover:text-white" size={18} />
                </div>
                <p className="text-slate-300/90 mt-2 text-sm">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-900/70 border border-white/10 text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
