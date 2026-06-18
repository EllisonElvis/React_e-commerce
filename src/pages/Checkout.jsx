import React, { useContext } from 'react'
import { productContext } from '../stores/ProductContex'
import { NavLink } from 'react-router-dom'

const Checkout = () => {
  const { cart, totalPrice } = useContext(productContext)

  return (
    <>

    <header className='checkout-to-home'>
      <h1></h1>
    </header>
      <div className="checkout">

        <div className="checkout-left">
          <h1>Checkout</h1>

          <form className="checkout-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Delivery Address" />
            <input type="text" placeholder="City" />


          </form>
        </div>

        <div className="checkout-right">
          <h2>Order Summary</h2>

          {cart.map(item => (
            <div key={item.id} className="summary-item">
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <div className="summary-total">
            <h3>Total</h3>
            <h3>${totalPrice.toFixed(2)}</h3>
          </div>


        </div>
        <button type="submit" className='checkout-formbtn'>
          Place Order
        </button>

      </div>
    </>
  )
}

export default Checkout