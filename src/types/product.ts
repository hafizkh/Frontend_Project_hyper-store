import { Category } from "./category";

export interface Product {
  // quantity: number;
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];

}

export interface itemsInCart extends Product {
  quantity: number;
}

// export interface Cart{
//   cartItems:itemsInCart[],
//   total:number
// }