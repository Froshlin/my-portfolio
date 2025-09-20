import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Card from './components/Card'
import Skill from './components/Skill'
import { Contact } from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Card/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
