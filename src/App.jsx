import React from 'react'
import { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { productContext } from './stores/ProductContex.jsx'
import Cart from './components/Cart.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Header from './components/Header.jsx'

const App = () => {
  // save cards in local storage, and get cards from local storage when the page is refreshed
  const { products, cart, addToCart, setCart } = useContext(productContext)

  return (

    // display the products in a grid, with add to cart button, and display the products that was added by clicking the add to cart button
    <div>
      <Header />
      <h1 className='text-3xl font-bold text-center my-4'>Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map(prod => (
          <div key={prod.id} className='border p-4 rounded'>
            <img src={prod.image} alt={prod.name} className='w-full h-48 object-cover mb-4' />
            <h2 className='text-xl font-bold mb-2'>{prod.name}</h2>
            <p className='text-gray-700 mb-4'>${prod.price}</p>
            <button onClick={() => addToCart(prod)} className='bg-blue-500 text-white px-4 py-2 rounded'>Add to Cart</button>
          </div>
        ))}
      </div>
      <Cart />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>



    </div>
  )
}

export default App
