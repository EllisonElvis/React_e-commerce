import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>SneaX</h2>
          <p>Building modern web experiences.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Support</h3>
          <a href="#">FAQs</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#"><i className="ri-twitter-x-line"></i></a>
            <a href="#"><i className="ri-github-line"></i></a>
            <a href="#"><i className="ri-youtube-fill"></i></a>
            <a href="#"><i className="ri-facebook-fill"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 SneaX. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer