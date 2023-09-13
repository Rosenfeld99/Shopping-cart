// cartTypes.ts

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
}

export interface CartState {
  cartItems: CartItem[];
}
