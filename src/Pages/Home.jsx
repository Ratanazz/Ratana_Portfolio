import React from 'react'
import HeroSection from '../components/HeroSection'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Education from '../components/Education'

function Home() {
  return (
    
    <div className="homepage">
      
      <HeroSection/>
      <Education />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  )
}

export default Home