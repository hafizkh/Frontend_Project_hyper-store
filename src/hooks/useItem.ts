import { useState, useEffect } from "react";
import { Product } from "../types/product";

export const useItem = (itemId: string | undefined)=>{
    const [item, setItem] = useState<Product | undefined>(undefined)
    useEffect(
        () => {
          fetch(`https://api.escuelajs.co/api/v1/products/${itemId}`)
            .then(data => data.json())
            .then(data => setItem(data));
        },[itemId]);
      return item;
    };
