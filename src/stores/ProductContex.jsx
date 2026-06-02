import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { Products } from '../Products.js'

export const productContext = createContext()

const ProductContext = ({children}) => {
  const [products, setProducts] = useState(Products)
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart')
    return storedCart ? JSON.parse(storedCart) : []
  })

//   const [loading, setLoading] = useState(false)

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


// create add to cart function, if product already in cart, then increase quantity, else add to cart
  const addToCart = (prd) => {

    const existingItem = cart.find(item => item.id === prd.id)
    if (existingItem) {
      setCart(cart.map(item => item.id === prd.id ? {...item, quantity: item.quantity + 1} : item))
    } else {
      setCart([...cart, {...prd, quantity: 1}])
    }
  }


  return (
    <productContext.Provider value={{products, setProducts, cart, setCart, addToCart}}>
      {children}
    </productContext.Provider>
  )
}

export default ProductContext
