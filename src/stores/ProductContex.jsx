import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { Products } from '../Products.js'

export const productContext = createContext()

const ProductContext = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [products, setProducts] = useState(Products);

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // 💾 Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // ➕ ADD TO CART
  const addToCart = (prd) => {
    const existingItem = cart.find(item => item.id === prd.id);

    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === prd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...prd, quantity: 1 }]);
    }
  };

  // ➕ INCREASE QTY
  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ DECREASE QTY
  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // ❌ CLEAR CART
  const clearCart = () => {
    setCart([]);
  };

  // 💰 TOTAL PRICE
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <productContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        addToCart,
        cartOpen,
        setCartOpen,
        increaseQty,
        decreaseQty,
        clearCart,
        totalPrice,
        showConfirm,
        setShowConfirm,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContext;