import { Product } from "./product";

export interface ProductsList{
    id: number;
    name: string;
    productsList: Product[]; 
}