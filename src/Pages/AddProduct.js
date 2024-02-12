import React from 'react'
import Header from "../Components/Header/Header"
import Footer from "../Components/footer/footer"
import ProductForm from "../Components/product/productForm"

function AddProduct() {
  return (
    <div>
      <Header data={{role:"addProduct"}}/>
      <ProductForm/>
      <Footer/>
    </div>
  )
}

export default AddProduct
