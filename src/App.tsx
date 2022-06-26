import React, { useEffect } from "react";
import { fetchProducts } from "./redux/reducer/productReducer";
import { useAppDispatch } from "./redux/hooks";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="App">
      <Home />
      <Products />

    </div >
  );
}

export default App;
