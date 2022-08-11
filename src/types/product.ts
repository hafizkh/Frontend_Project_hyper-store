import { Category } from "./category";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}
export interface Checkoutproduct extends Product {
  itemQuantity: number;
  totalAmountWithItemQty: any;
}