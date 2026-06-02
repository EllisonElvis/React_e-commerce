import React from 'react'
import { useContext } from 'react'
import { productContext } from '../stores/ProductContex.jsx'

const Cart = () => {
  const { cart, setCart } = useContext(productContext);

  return (
    <div>
          {/* display the products that was added by clicking the add to cart button */}

      < h2 className='text-2xl font-bold text-center my-4'>CartItems</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {cart.map((item, index) => (
          // increment quantity if item already in cart, else add to cart
          <div key={index} className='border p-4 rounded'>
            <img src={item.image} alt={item.name} className='w-full h-48 object-cover mb-4' />
            <h2 className='text-xl font-bold mb-2'>{item.name}</h2>
            <p className='text-gray-700 mb-4'>${item.price}</p>
            <p className='text-gray-700 mb-4'>Quantity: {item.quantity}</p>
          </div>  
    ))}
      </div>
      
    </div>
  )
}

export default Cart
