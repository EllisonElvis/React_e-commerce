import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Products from './pages/Products.jsx'
import Checkout from './pages/Checkout.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App