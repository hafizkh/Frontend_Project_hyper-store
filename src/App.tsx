import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar"
import Cart from "./pages/Cart";
import ProductItem from "./pages/ProductItem";
import NotFound from "./pages/NotFound";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Footer from "./components/Footer";

function App() {
  //
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path=":itemId" element={<ProductItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />

      </Router>
    </div >
  );
}

export default App;
