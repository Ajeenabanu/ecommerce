import Header from "../Components/Header/Header";
import ProductTile from "../Components/product/productTile";
import Footer from "../Components/footer/footer";
import { React, useState, useEffect } from "react";

function Home() {
  var cartProducts = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  const [productCount, setproductCount] = useState(cartProducts.length);
  return (
    <div>
      <Header
        data={{
          role: "home",
          productCount: productCount,
        }}
      />
      <ProductTile data={{ role: "home", setproductCount: setproductCount }} />
      <Footer />
    </div>
  );
}

export default Home;
