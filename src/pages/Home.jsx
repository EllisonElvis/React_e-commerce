import React from 'react'
import Products from './Products.jsx'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import AnnouncementBar from '../components/Announcementbar.jsx'
import CategoryCard from '../components/CategoryCard.jsx'
// import Checkout from './Checkout.jsx'
import Cart from '../components/Cart.jsx'

const Home = () => {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Hero />
      <CategoryCard />
      <Products />
      <Cart />
    </>
  )
}

export default Home