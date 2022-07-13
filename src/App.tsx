import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar"
import Cart from "./pages/Cart";
import ProductItem from "./pages/ProductItem";
import NotFound from "./pages/NotFound";

function App() {
  //
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productItem" element={<ProductItem />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

      </Router>
    </div >
  );
}

export default App;
