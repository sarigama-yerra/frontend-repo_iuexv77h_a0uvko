import { useEffect, useState } from 'react'

export default function PopupLead() {
  const [open, setOpen] = useState(false)
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 5000)
    return () => clearTimeout(t)
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, source: 'brochure-popup' })
      })
      const data = await res.json()
      if (data.ok) setStatus('Sent! We will WhatsApp you the brochure.')
      else setStatus('Please try again later')
    } catch (e) {
      setStatus('Network error')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
      <div className="relative z-10 w-[90%] max-w-md rounded-2xl border border-black/10 bg-white p-6 shadow-2xl">
        <button className="absolute top-3 right-3 text-gray-400" onClick={() => setOpen(false)} aria-label="Close">×</button>
        <h3 className="text-lg font-medium">Download Property Brochure</h3>
        <p className="mt-1 text-sm text-gray-600">Enter your WhatsApp number, and we'll send it instantly.</p>
        <form className="mt-4 flex gap-2" onSubmit={submit}>
          <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="WhatsApp Number" className="flex-1 border border-black/10 rounded-lg px-3 py-2" />
          <button className="px-4 py-2 rounded-lg bg-black text-white" type="submit">Get</button>
        </form>
        {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
      </div>
    </div>
  )
}
