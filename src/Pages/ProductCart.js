import React from 'react'
import Header from "../Components/Header/Header"
import ProductTile from "../Components/product/productTile"
import Footer from "../Components/footer/footer"

function ProductCart() {
  return (
    <div>
    <Header data={{role:"cart"}}/>
    <ProductTile data={{role:"cart"}}/>
    <Footer/>
    </div>
  )
}

export default ProductCart
