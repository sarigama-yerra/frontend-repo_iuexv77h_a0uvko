import { useEffect } from 'react'

export default function Booking() {
  const calendlyUrlInPerson = import.meta.env.VITE_CALENDLY_INPERSON || 'https://calendly.com/'
  const calendlyUrlOnline = import.meta.env.VITE_CALENDLY_ONLINE || 'https://calendly.com/'

  useEffect(() => {
    // No-op. Placeholder for future analytics hooks
  }, [])

  return (
    <main className="bg-white">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-semibold tracking-tight">Book a Meeting</h1>
          <p className="mt-2 text-gray-600">Automatic email confirmation. Meet Tejas – Official Investment Advisor for Fine Acers.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-black/10 overflow-hidden">
              <div className="px-5 py-3 border-b border-black/10 font-medium">Book In-Person (Dubai / UAE)</div>
              <iframe src={calendlyUrlInPerson} className="w-full h-[700px]" title="Calendly In-Person" />
            </div>
            <div className="rounded-2xl border border-black/10 overflow-hidden">
              <div className="px-5 py-3 border-b border-black/10 font-medium">Book Online Zoom Meeting</div>
              <iframe src={calendlyUrlOnline} className="w-full h-[700px]" title="Calendly Online" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
