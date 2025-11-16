import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Calendar, MessageCircle } from 'lucide-react'

export default function Hero() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+971555000000'

  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-semibold tracking-tight text-black"
        >
          Helping You Build Wealth Through Real Estate & Hospitality Investing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Meet Tejas – Official Investment Advisor for Fine Acers. Access curated investor deals, structured ROI options, and a bespoke plan for your goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#booking"
            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition-colors"
          >
            <Calendar size={18} /> Book a Meeting
          </a>
          <a
            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 hover:border-black/20 transition-colors"
            href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent('Hi Tejas, I would like to learn about Fine Acers investments.')}`}
            target="_blank" rel="noreferrer"
          >
            <MessageCircle size={18} /> WhatsApp Chat
          </a>
        </motion.div>
      </div>
    </section>
  )
}
