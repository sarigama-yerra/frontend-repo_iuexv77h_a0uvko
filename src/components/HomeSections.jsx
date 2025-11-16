import { motion } from 'framer-motion'

export function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About Tejas</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Investment Consultant & Lead Partner at Fine Acers. I help investors access profitable hospitality real estate opportunities with structured returns and long-term growth.
          </p>
          <div className="mt-6 inline-flex items-center px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm">Verified Fine Acers Partner</div>
        </div>
        <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-black/5" />
      </div>
    </section>
  )
}

export function WhyBook() {
  const items = [
    { title: 'Direct access to investor deals', desc: 'Priority access to exclusive pre-launch & bulk-negotiated assets.' },
    { title: 'Guaranteed ROI options', desc: 'Fixed returns up to 9% with hybrid profit share structures.' },
    { title: 'Free personalized investment plan', desc: 'A tailored portfolio strategy based on your risk & timeline.' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why Book With Me</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-black/10 bg-white"
            >
              <h3 className="font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CalendlyEmbed({ id = 'booking' }) {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/'
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Book Appointment</h2>
        <p className="mt-2 text-gray-600">Book an in-person or online Zoom meeting.</p>
        <div className="mt-8 rounded-2xl border border-black/10 overflow-hidden">
          <iframe
            src={calendlyUrl}
            title="Calendly"
            className="w-full h-[700px]"
          />
        </div>
      </div>
    </section>
  )
}
