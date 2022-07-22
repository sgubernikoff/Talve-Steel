import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Product from "./Product";
import Feature from "./Feature";
import Contact from "./Contact";
import About from "./About";
import Conversions from "./Conversions";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/products"} element={<Product />} />
        <Route exact path={"/contact"} element={<Contact />} />
        <Route exact path={"/feature"} element={<Feature />} />
        <Route exact path={"/conversions"} element={<Conversions />} />
        <Route exact path={"/about"} element={<About />} />
      </Routes>
      <Footer />
      <div className="copyright">
        <p>COPYRIGHT 2022. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default App;
