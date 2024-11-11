import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div>
      <Hero/>
      <Navbar/>
      
      <div className="container">
      <Title/>
      <Programs/>
      
      </div>
    </div>
  )
}

export default App
