import React from "react";
import ProductCard from "./ProductCard";

function Product() {
  const products = {
    name: "Product Name",
    price: "$10.99",
    image:
      "https://st3.depositphotos.com/8069272/35760/v/380/depositphotos_357601916-stock-illustration-realistic-paper-box-mockup-packaging.jpg?forcejpeg=true",
  };
  return (
    <div className="product">
      <div className="new_banner3">
        <div className="banner_text">
          <h4 className="subhead">PRODUCTS</h4>
          <h2 className="mainhead">VIEW INVENTORY</h2>
        </div>
      </div>
      <div className="product_hold">
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
      </div>
    </div>
  );
}

export default Product;
