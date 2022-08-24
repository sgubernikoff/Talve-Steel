import { React, useState, useEffect } from "react";

function Overlay({}) {
  return (
    <div className="overlay_form">
      <div className="login_form">
        <form>
          <label>
            Password: <input></input>{" "}
          </label>
          <div>
            <button>Sign in as Guest</button>
            <button>Sign in as Admin</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Overlay;
