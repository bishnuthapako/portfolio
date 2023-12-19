import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoute from './components/approute/AppRoute'
import Footer from "../src/components/Footer"

const App = () => {
  return (
  <>
  {
    <BrowserRouter>
    <Navbar />
    <div className="grid grid-cols-1 mx-auto mt-[100px] w-full items-center justify-center ">
    <AppRoute />
    </div>
    <Footer/>
    </BrowserRouter>
  }
  </>
  )
}

export default App
