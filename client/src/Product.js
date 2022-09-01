import { React, useState, useEffect, useRef } from "react";
import TableRow from "./TableRow";
import Overlay from "./Overlay";
import EditRowForm from "./EditRowForm";
// import ProductCard from "./ProductCard";

function Product() {
  // const products = {
  //   name: "Product Name",
  //   price: "$10.99",
  //   image:
  //     "https://st3.depositphotos.com/8069272/35760/v/380/depositphotos_357601916-stock-illustration-realistic-paper-box-mockup-packaging.jpg?forcejpeg=true",
  // };

  const [coils, setCoils] = useState([]);
  const [user, setUser] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  const table = useRef(null);

  function handleLogin(user) {
    setUser(user);
  }

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
  function updateCoilsOnDeleteCoil(deletedCoil) {
    const filteredCoils = coils.filter((c) => deletedCoil.id !== c.id);
    setCoils(filteredCoils);
  }

  function updateCoilsOnEditCoil(editedCoil) {
    const filteredCoils = coils.filter((c) => editedCoil.id !== c.id);
    const updatedCoils = [...filteredCoils, editedCoil];
    setCoils(updatedCoils);
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getCoils();
  }, [user]);

  function errorAnimation() {
    table.current.className = "error";
    setTimeout(() => {
      table.current.className = "";
    }, 550);
  }

  const tableRow = coils.map((data) => (
    <TableRow
      data={data}
      user={user}
      updateCoilsOnDeleteCoil={updateCoilsOnDeleteCoil}
      updateCoilsOnEditCoil={updateCoilsOnEditCoil}
      errorAnimation={errorAnimation}
      key={data.id}
    />
  ));

  function handleSubmit() {
    fetch("/coils", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok)
        r.json().then((data) => {
          setCoils([...coils, data]);
          setIsEditing(false);
        });
      else
        r.json().then((data) => {
          console.log(data.errors);
          errorAnimation();
        });
    });
  }

  function logout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) setUser("");
    });
  }

  return (
    <div className="product">
      <div className="new_banner3">
        <div className="banner_text">
          <h4 className="subhead">PRODUCTS</h4>
          <h2 className="mainhead">VIEW INVENTORY</h2>
        </div>
      </div>
      {user ? (
        <div className="table_product">
          <table ref={table}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Grade</th>
                <th>Commodities & Specification (MM)</th>
                <th>Net Weight (KGs)</th>
                <th>Gross Weight (KGs)</th>
                <th>Quantity</th>
                <th>Pkgs</th>
              </tr>
            </thead>
            <tbody>
              {tableRow}
              {user.isAdmin && isEditing ? (
                <tr>
                  <EditRowForm setFormData={setFormData} data={""} />
                </tr>
              ) : null}
            </tbody>
          </table>
          {user.isAdmin ? (
            isEditing ? (
              <>
                <button onClick={() => handleSubmit()}>Confirm</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
              </>
            ) : (
              <button
                className="update_button"
                onClick={() => setIsEditing(true)}
              >
                +
              </button>
            )
          ) : null}
          {user.isAdmin ? <Overlay changePassword={true} /> : null}
          <button onClick={logout} className="delete_button">
            Log out
          </button>
        </div>
      ) : (
        <Overlay handleLogin={handleLogin} changePassword={false} />
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
