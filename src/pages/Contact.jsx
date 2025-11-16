import { useState } from 'react'
import { Phone, Mail, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+971555000000'
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || '+971555000000'

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact' })
      })
      const data = await res.json()
      if (data.ok) setStatus('Thanks! We will reach out shortly.')
      else setStatus('Could not submit. Please try WhatsApp or call.')
    } catch (e) {
      setStatus('Network error. Please try WhatsApp or call.')
    }
  }

  return (
    <main className="bg-white">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-2 text-gray-600">Tejas works with Fine Acers to provide exclusive real estate investment opportunities.</p>

          <div className="mt-10 grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-3">
              <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-black/10"><Phone size={16}/> Call</a>
              <a href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-black/10" target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a>
              <a href="mailto:hello@moneybytej.com" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-black/10"><Mail size={16}/> Email</a>
              <div className="pt-4 space-x-4 text-sm text-gray-600">
                <a href="https://instagram.com/moneybytej" target="_blank" rel="noreferrer">Instagram</a>
                <a href="#" className="ml-3" target="_blank" rel="noreferrer">Facebook</a>
                <a href="#" className="ml-3" target="_blank" rel="noreferrer">TikTok</a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="md:col-span-3 grid grid-cols-1 gap-4">
              <input className="border border-black/10 rounded-lg px-3 py-2" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
              <input className="border border-black/10 rounded-lg px-3 py-2" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
              <input className="border border-black/10 rounded-lg px-3 py-2" placeholder="WhatsApp Number" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
              <textarea className="border border-black/10 rounded-lg px-3 py-2" placeholder="Message" rows={4} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
              <button className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-black text-white" type="submit">
                <Send size={16}/> Send
              </button>
              {status && <p className="text-sm text-gray-600">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
