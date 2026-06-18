import React, { useContext, useState } from 'react'
import { productContext } from '../stores/ProductContex.jsx'

const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart, setCartOpen } = useContext(productContext);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">

      {/* MOBILE MENU BUTTON */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i
          className={
            menuOpen
              ? "ri-close-line"
              : "ri-menu-4-fill"
          }
        ></i>
      </button>

      <div className="logo">
        <h1>SneaX</h1>
      </div>



      {/* NAVIGATION */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="/">MEN</a>
        <a href="/">WOMEN</a>
        <a href="/">SALE</a>
        <a href="/">ABOUT</a>

      </nav>

      {/* RIGHT SIDE */}
      <div className="nav-right">

        <button>
          <i className="ri-search-line"></i>
        </button>

        {/* PROFILE */}
        <div className="user-profile">

          <button onClick={() => setProfileOpen(true)}>
            <i className="ri-user-line"></i>
          </button>

          <div
            className={`profile-drawer ${profileOpen ? "open" : ""
              }`}
          >
            <div
              className="profile-overlay"
              onClick={() => setProfileOpen(false)}
            />

            <div className="profile-panel">

              <div className="profile-top">
                <h2>My Account</h2>

                <button
                  onClick={() => setProfileOpen(false)}
                >
                  <i className="ri-sidebar-fold-line"></i>
                </button>
              </div>

              <div className="profile-links">
                <button><i class="ri-shopping-bag-fill"></i> My Orders</button>
                <button><i class="ri-todo-fill"></i> Wishlist</button>
                <button><i class="ri-settings-fill"></i> Settings</button>
                <button><i class="ri-logout-box-r-line"></i> Logout</button>
              </div>

            </div>
          </div>

        </div>

        <button className='helpbtn'>
          <i className="ri-question-line"></i>
        </button>

        {/* CART */}
        <div className="cart-icon-wrapper">

          <button
            className="cart-btn"
            onClick={() => setCartOpen(true)}
          >
            <i className="ri-shopping-bag-line"></i>
          </button>

          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}

        </div>

      </div>

    </header>
  )
}

export default Header