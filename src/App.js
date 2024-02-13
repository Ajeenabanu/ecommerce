import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";
import ProductCart from "./Pages/ProductCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />
        <Route path="/productcart" element={<ProductCart />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
