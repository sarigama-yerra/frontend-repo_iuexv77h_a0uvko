import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Calendar, MessageCircle } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Investor Benefits', to: '/benefits' },
  { label: 'Booking', to: '/booking' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const backendUrl = import.meta.env.VITE_BACKEND_URL || ''
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+971555000000'

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-xl">
          Money <span className="text-amber-500">By</span> Tej
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm transition-colors ${location.pathname === item.to ? 'text-black' : 'text-gray-600 hover:text-black'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent('Hi Tejas, I would like to learn about Fine Acers investments.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-black/10 hover:border-black/20 transition-colors"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition-colors"
          >
            <Calendar size={16} /> Book Meeting
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`block py-2 ${location.pathname === item.to ? 'text-black' : 'text-gray-700'}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 flex gap-2">
              <Link to="/booking" onClick={() => setOpen(false)} className="flex-1 text-center text-sm px-3 py-2 rounded-full bg-black text-white">Book</Link>
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent('Hi Tejas, I would like to learn about Fine Acers investments.')}`}
                target="_blank" rel="noreferrer"
                className="flex-1 text-center text-sm px-3 py-2 rounded-full border border-black/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
