import React from 'react'
import Navbar from './components/navbar/Navbar'
import RemoveBackground from './components/removeBackground/RemoveBackground'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <div className=" h-screen">
      <RemoveBackground/>
      </div>
      <Footer/>
    </div>
  )
}
