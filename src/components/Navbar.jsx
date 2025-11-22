import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const NavLink = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-200 hover:text-white/90 transition-colors px-3 py-2 rounded-md"
  >
    {label}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/50 border border-white/10 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#hero" onClick={(e)=>handleNav(e,'#hero')} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-inner grid place-items-center text-white font-bold">SE</div>
              <span className="text-slate-100 font-semibold tracking-tight group-hover:text-white/90">Story Engineer</span>
            </a>

            <nav className="hidden md:flex items-center gap-2">
              <NavLink href="#projects" label="Projects" onClick={(e)=>handleNav(e,'#projects')} />
              <NavLink href="#about" label="About" onClick={(e)=>handleNav(e,'#about')} />
              <NavLink href="#contact" label="Contact" onClick={(e)=>handleNav(e,'#contact')} />
              <div className="w-px h-6 bg-white/10 mx-2" />
              <a href="mailto:hello@storyengineer.dev" className="p-2 hover:text-white/90 text-slate-200" aria-label="Email"><Mail size={20} /></a>
              <a href="#" className="p-2 hover:text-white/90 text-slate-200" aria-label="GitHub"><Github size={20} /></a>
              <a href="#" className="p-2 hover:text-white/90 text-slate-200" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </nav>

            <button onClick={()=>setOpen(!open)} className="md:hidden p-2 text-slate-200" aria-label="Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 grid gap-1">
              <NavLink href="#projects" label="Projects" onClick={(e)=>handleNav(e,'#projects')} />
              <NavLink href="#about" label="About" onClick={(e)=>handleNav(e,'#about')} />
              <NavLink href="#contact" label="Contact" onClick={(e)=>handleNav(e,'#contact')} />
              <div className="flex items-center gap-3 pt-2">
                <a href="mailto:hello@storyengineer.dev" className="p-2 hover:text-white/90 text-slate-200" aria-label="Email"><Mail size={20} /></a>
                <a href="#" className="p-2 hover:text-white/90 text-slate-200" aria-label="GitHub"><Github size={20} /></a>
                <a href="#" className="p-2 hover:text-white/90 text-slate-200" aria-label="LinkedIn"><Linkedin size={20} /></a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
