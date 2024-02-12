import React from 'react'
import Header from "../Components/Header/Header"
import ProductTile from "../Components/product/productTile"
import Footer from "../Components/footer/footer"

function Admin() {
  return (
    <div>
      <Header data={{role:"admin"}}/>
      <ProductTile data={{role:"admin"}}/>
      <Footer/>
    </div>
  )
}

export default Admin
