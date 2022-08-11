import { Category } from "./category";

export interface Product {
  quantity: string | number | readonly string[] | undefined;
  
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];

}

export interface cartItems extends Product {
  quantity: number;
}