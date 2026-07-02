import React from 'react'
import { useContext, useEffect } from 'react'
import { productContext } from '../stores/ProductContex'
import Cart from '../components/Cart'

const Products = () => {
  const { products, cart, addToCart, setCart } = useContext(productContext)
  return (
    <div className='product-page'>
      <h1 className='text-3xl font-bold text-center my-4'>Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map(prod => (
          <div key={prod.id} className='product-content  '>
            <img src={prod.image} alt={prod.name} className='w-full h-48 object-cover mb-4' />
            <h2 className='text-xl font-bold mb-2'>{prod.name}</h2>
            <p className='text-gray-700 mb-4'>${prod.price}</p>
            <div className="stars">
              {"⭐".repeat(Math.floor(prod.rating))}
            </div>
            <button onClick={() => addToCart(prod)} className='bg-blue-500 text-white px-4 py-2 rounded'>Add to Cart</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Products