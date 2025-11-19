import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0B1020] text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Services />
        <Process />
        <CTA />
        <footer className="border-t border-white/10 bg-[#070B14] py-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Nebula Agency. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
