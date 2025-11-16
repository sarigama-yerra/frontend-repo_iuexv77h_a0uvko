import { motion } from 'framer-motion'

const benefits = [
  { title: '9% Guaranteed ROI', desc: 'Structured fixed returns backed by hospitality assets.' },
  { title: '50% Profit Share (Approx. 16% Total)', desc: 'Participate in net operating profits for upside.' },
  { title: '25 Free Nights Every Year', desc: 'Complimentary nights at partnered resorts.' },
  { title: 'One-Time 99 Rooms Complimentary for Event', desc: 'Host a large event at partner properties.' },
  { title: '25% Buyback Guarantee', desc: 'Optional exit with minimum buyback value.' },
]

export default function Benefits() {
  return (
    <main className="bg-white">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-semibold tracking-tight">Investor Benefits</h1>
          <p className="mt-2 text-gray-600">Fine Acers investment model highlights</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-black/10 bg-white"
              >
                <div className="text-amber-600 text-sm">Benefit {i + 1}</div>
                <h3 className="mt-1 font-medium">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
