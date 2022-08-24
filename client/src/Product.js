import { React, useState, useEffect } from "react";
import TableRow from "./TableRow";
import Overlay from "./Overlay";
// import ProductCard from "./ProductCard";

function Product() {
  // const products = {
  //   name: "Product Name",
  //   price: "$10.99",
  //   image:
  //     "https://st3.depositphotos.com/8069272/35760/v/380/depositphotos_357601916-stock-illustration-realistic-paper-box-mockup-packaging.jpg?forcejpeg=true",
  // };

  const [coils, setCoils] = useState([]);
  const [user, setUser] = useState([]);

  function getCoils() {
    fetch("/coils").then((res) => {
      if (res.ok) {
        res.json().then((coil) => setCoils(coil));
      }
    });
  }

  function getUser() {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      } else res.json().then((err) => console.log(err));
    });
  }

  useEffect(() => {
    getCoils();
    getUser();
  }, []);

  console.log(coils);
  console.log(user);

  const tableRow = coils.map((data) => <TableRow data={data} />);

  return (
    <div className="product">
      <div className="new_banner3">
        <div className="banner_text">
          <h4 className="subhead">PRODUCTS</h4>
          <h2 className="mainhead">VIEW INVENTORY</h2>
        </div>
      </div>
      {!user ? (
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
            {tableRow}
          </table>
        </div>
      ) : (
        <Overlay />
      )}
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
