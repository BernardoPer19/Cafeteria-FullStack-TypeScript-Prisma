export interface Coffee {
    id: number
    name: string 
    description :string
    coffee_flavor :string
    categoty :string
    img :string
    rating: number 
    country :string
    price :string
  }
  
  
// types.ts
export interface ProductType {
  id: number;
  name: string;
  description: string;
  coffee_flavor: string;
  categoty: string;  // Corregido de 'category' a 'categoty'
  img: string;       // Cambié 'image' por 'img' para que coincida con tu estructura
  rating: number;
  country: string;
  price: string;
}
