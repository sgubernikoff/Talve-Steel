import { React, useState, useEffect } from "react";

function Overlay({ handleLogin, changePassword }) {
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [username, setUsername] = useState("guest");

  function login(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    }).then((r) => {
      if (r.ok) r.json().then((user) => handleLogin(user));
      else r.json().then((err) => setErr(err.errors));
    });
  }

  function updatePassword(e) {
    e.preventDefault();
    fetch("/me", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    }).then((r) => {
      if (r.ok) r.json().then((user) => console.log(user));
      else r.json().then((err) => setErr(err.errors));
    });
  }

  console.log(username, password);

  return (
    <div className="overlay_form">
      <div className="login_form">
        <p className="head_text">
          {changePassword ? "Update Password" : "Log in to View Inventory"}
        </p>
        <form>
          <div className="dropdown_menu">
            {/* <label>Sign in as: </label> */}
            <select
              className="dropdown"
              onChange={(e) => setUsername(e.target.value)}
            >
              <option value="guest" defaultValue>
                Guest
              </option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <label className="product_label">
            Password:{" "}
            <input
              className="product_input"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>{" "}
          </label>
          <div>
            <button
              className="product_button"
              onClick={(e) => {
                changePassword ? updatePassword(e) : login(e);
              }}
            >
              {changePassword ? "Update" : "Sign in"}
            </button>
            {/* <button onClick={(e) => login(e, "admin")}>Sign in as Admin</button> */}
          </div>
          {err ? (
            <p className="error_text">{err}</p>
          ) : (
            <div>
              <p className="invis_text">a</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Overlay;
