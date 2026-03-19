import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import News from './components/News'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Play from './components/Play'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <News/>
      <Gallery/>
      <Play/>
      <Footer/>
    </div>
  )
}

export default App