export interface Coffee {
  id: number;
  name: string;
  description: string;
  coffee_flavor: string;
  categoty: string;
  img: string;
  rating: number;
  country: string;
  price: string;
}

// types.ts
export interface ProductType {
  id: number;
  name: string;
  description: string;
  coffee_flavor: string;
  categoty: string; 
  img: string;
  rating: number;
  country: string;
  price: string;
}

export interface CartType {
  id: number;
  name: string;
  categoty: string; 
  img: string; 
  price: string;
  quantity: number;
}
