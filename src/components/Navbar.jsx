import { useState } from 'react'
import { Menu } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Problem', href: '#problem' },
  { label: 'Services', href: '#services' },
  { label: 'Trends', href: '#trends' },
  { label: 'Why Us', href: '#uniqueness' },
  { label: 'Business Model', href: '#business' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
              <span className="text-white font-semibold tracking-tight text-lg">PLUTO</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-cyan-400 transition-colors">
                Get Early Access
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white" onClick={() => setOpen(!open)}>
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm text-blue-100/90 hover:text-white hover:bg-white/5" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="block text-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25" onClick={() => setOpen(false)}>
                Get Early Access
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
