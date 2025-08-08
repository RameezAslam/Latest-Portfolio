import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe'
import Skills from '../Components/Skills'
import Experience from '../Components/Experience'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

function Portfolio() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </div>
     
  )
}

export default Portfolio