// ShoppingCart.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types/cartTypes';
import PRODUCTS from '../data/items.json'

const ShoppingCart: React.FC = () => {
  const { state, dispatch } = useCart();
  console.log(state);

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (item: CartItem) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const incrementQuantity = (item: CartItem) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: item });
  };

  const decrementQuantity = (item: CartItem) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: item });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => removeFromCart(item)}>Remove</button>
            <button onClick={() => incrementQuantity(item)}>+</button>
            <button onClick={() => decrementQuantity(item)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
