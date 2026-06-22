import React from 'react'
import Navbar from './Navbar'
import Profile from './Profile'
import Stack from './TechStack'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="py-4 md:py-8 space-y-16 md:space-y-24">
          <Profile />
          <Stack />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Portfolio

