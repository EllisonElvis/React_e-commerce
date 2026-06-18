import React, { useContext, useState } from 'react'
import { productContext } from '../stores/ProductContex.jsx'
import Checkout from '../pages/Checkout.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    cart,
    cartOpen,
    setCartOpen,
    increaseQty,
    decreaseQty,
    totalPrice,
    clearCart,
    showConfirm,
    setShowConfirm
  } = useContext(productContext);

  return (
    <div className={`cart-drawer ${cartOpen ? "open" : ""}`}>

      {/* overlay */}
      <div
        className="cart-overlay"
        onClick={() => setCartOpen(false)}
      />

      {/* sidebar */}
      <div className="cart-panel">

        <div className="cart-top">
          <h2>Cart</h2>
          <button onClick={() => setCartOpen(false)}><i className="ri-close-line"></i></button>
        </div>

        {/* CART CONTENT */}
        <div className="cart-items">

          {cart.length === 0 ? (
            <p style={{ padding: "20px" }}>Cart is empty 🛒</p>
          ) : (
            <div className="cart-grid">

              {cart.map((item, index) => (
                <div key={index} className="cart-card">

                  <img src={item.image} alt={item.name} />

                  <h2>{item.name}</h2>
                  <p>${item.price}</p>

                  {/* QUANTITY CONTROLS */}
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>


                </div>
              ))}

            </div>
          )}

          {/* TOTAL PRICE */}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>

          <button className="clear-cart-btn" onClick={() => setShowConfirm(true)}>
            Clear Cart
          </button>

        </div>

        {/* CONFIRMATION DIALOG */}
        {showConfirm && (
          <div className="confirm-overlay">

            <div className="confirm-box">
              <h3>Are you sure?</h3>
              <p>This will remove all items from your cart.</p>

              <div className="confirm-actions">
                <button
                  className="cancel-btn"
                  onClick={() => setShowConfirm(false)}
                >
                  Cancel
                </button>

                <button
                  className="yes-btn"
                  onClick={() => {
                    clearCart();
                    setShowConfirm(false);
                  }}
                >
                  Yes, Clear
                </button>
              </div>
            </div>

          </div>
        )}

        <Link to="/checkout">
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </Link>

      </div>
    </div>
  )
}

export default Cart