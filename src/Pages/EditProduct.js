import React from 'react'
import Header from "../Components/Header/Header"
import Footer from "../Components/footer/footer"
import ProductForm from "../Components/product/productForm"

function EditProduct() {
  return (
    <div>
      <Header data={{role:"editProduct"}}/>
      <ProductForm data={{role:"editProduct"}}/>
      <Footer/>
    </div>
  )
}

export default EditProduct
