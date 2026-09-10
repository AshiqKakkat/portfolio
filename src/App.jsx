import React, { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TechAndProcess from './components/TechAndProcess'
import Experience from './components/Experience/index.jsx'
import Testimonials from './components/Testimonials'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ParticleNetwork from './components/ParticleNetwork'
import ErrorBoundary from './ErrorBoundary'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <ErrorBoundary>
      <div className="bg-primary min-h-screen text-text-main font-sans selection:bg-accent selection:text-black">
        <ParticleNetwork />
        <main>
          <Hero />
          <About />
          <Services />
          <TechAndProcess />
          <Projects />
          <Experience />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
