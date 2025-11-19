import { useState } from 'react'
import { Menu, X, Rocket, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg shadow-blue-500/20">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-white/90">Nebula Agency</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20">
                <Phone className="h-4 w-4" />
                Book a call
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/5 px-6 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20">
                  <Phone className="h-4 w-4" />
                  Book a call
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
