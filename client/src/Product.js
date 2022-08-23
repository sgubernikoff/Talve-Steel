import React from "react";
// import ProductCard from "./ProductCard";

function Product() {
  // const products = {
  //   name: "Product Name",
  //   price: "$10.99",
  //   image:
  //     "https://st3.depositphotos.com/8069272/35760/v/380/depositphotos_357601916-stock-illustration-realistic-paper-box-mockup-packaging.jpg?forcejpeg=true",
  // };
  return (
    <div className="product">
      <div className="new_banner3">
        <div className="banner_text">
          <h4 className="subhead">PRODUCTS</h4>
          <h2 className="mainhead">VIEW INVENTORY</h2>
        </div>
      </div>
      <div className="table_product">
        <table>
          <tr>
            <th>No.</th>
            <th>Grade</th>
            <th>Commodities & Specification (MM)</th>
            <th>Net Weight (KGs)</th>
            <th>Gross Weight (KGs)</th>
            <th>Quantity</th>
            <th>Pkgs</th>
          </tr>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
            <td>Male</td>
          </tr>
        </table>
      </div>
      {/* <div className="product_hold">
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
      </div> */}
    </div>
  );
}

export default Product;
