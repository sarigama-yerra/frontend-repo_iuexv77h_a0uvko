import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const initialProjects = [
  { name: 'Regenta Resort & Spa – Pushkar', developer: 'Regenta', location: 'Pushkar', ownership_options: ['Studio', '1BHK'], benefits: ['Branded hospitality', 'High occupancy potential'] },
  { name: 'Kamah Resort – Udaipur', developer: 'Kamah', location: 'Udaipur', ownership_options: ['Villa'], benefits: ['Luxury wellness retreat'] },
  { name: 'Wyndham Grand Jaipur Amer', developer: 'Wyndham', location: 'Jaipur Amer', ownership_options: ['Studio', '1BHK'], benefits: ['International brand', 'Strong ROI'] },
  { name: 'Kamah Resort – Jawai', developer: 'Kamah', location: 'Jawai', ownership_options: ['Villa'], benefits: ['Safari destination'] },
  { name: 'Kamah Wellness Farm – Jawai', developer: 'Kamah', location: 'Jawai', ownership_options: ['Farm Villa'], benefits: ['Wellness + Nature'] },
  { name: 'Kamah Resort – Coorg', developer: 'Kamah', location: 'Coorg', ownership_options: ['Villa'], benefits: ['Hill retreat'] },
  { name: 'Kamah Resort – Goa', developer: 'Kamah', location: 'Goa', ownership_options: ['Suite'], benefits: ['Beach tourism'] },
  { name: 'The Ame Resort – Sakleshpur', developer: 'The Ame', location: 'Sakleshpur', ownership_options: ['Villa'], benefits: ['Green getaways'] },
]

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects)

  // In real app we'd fetch from backend: /api/projects
  // const baseUrl = import.meta.env.VITE_BACKEND_URL
  // useEffect(() => { fetch(`${baseUrl}/api/projects`).then(r=>r.json()).then(d=> setProjects(d.items || [])) }, [])

  return (
    <main className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-semibold tracking-tight">Fine Acers Properties</h1>
          <p className="mt-2 text-gray-600">Explore investment-ready hospitality assets.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="group rounded-2xl border border-black/10 p-6 hover:shadow-xl transition-shadow bg-white"
              >
                <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-50 to-white border border-black/5" />
                <h3 className="mt-4 font-medium">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.location} • {p.developer}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.ownership_options?.map(opt => (
                    <span key={opt} className="text-xs px-2 py-1 rounded-full bg-gray-100">{opt}</span>
                  ))}
                </div>
                <button className="mt-4 text-sm underline underline-offset-4">View details</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
