import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, WhyBook, CalendlyEmbed } from './components/HomeSections'
import PopupLead from './components/PopupLead'
import Projects from './pages/Projects'
import Benefits from './pages/Benefits'
import Booking from './pages/Booking'
import Contact from './pages/Contact'

function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <WhyBook />
      <CalendlyEmbed id="booking" />
    </main>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PopupLead />
      <footer className="border-t border-black/5 py-8 text-center text-sm text-gray-600">© {new Date().getFullYear()} Money By Tej • Fine Acers Partner</footer>
    </div>
  )
}

export default App
