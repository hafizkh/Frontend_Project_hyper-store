import React ,{useEffect}from "react";
import { fetchProducts } from "./redux/reducer/productReducer";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useAppDispatch } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch()
  const productList = useSelector((state: RootState) => {
    return state.productReducer.productList

  })
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="App">
      {
        productList.map((item)=>
        <div key={item.id}>
          <h3>{item.title}</h3>


        </div>

        )
      }

    </div>
  );
}

export default App;
