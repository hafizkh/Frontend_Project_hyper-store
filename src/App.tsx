import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar"
import Cart from "./pages/Cart";
import ProductItem from "./pages/ProductItem";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>5
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path=":itemId" element={<ProductItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
