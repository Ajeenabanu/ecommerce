import React from 'react'
import Header from "../Components/Header/Header"
import ProductTile from "../Components/product/productTile"
import Footer from "../Components/footer/footer"

function Home() {
  return (
    <div>
      <Header data={{role:"home"}}/>
      <ProductTile data={{role:"home"}}/>
      <Footer/>
    </div>
  )
}

export default Home
