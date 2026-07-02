import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Products from './pages/Products.jsx'
import Checkout from './pages/Checkout.jsx'
import Search from './pages/Search.jsx'
import Loader from "./components/Loader";

const App = () => {

  const [loading, setLoading] = useState(true);

if (loading) {
  return (
    <Loader
      onFinish={() => setLoading(false)}
    />
  );
}
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App