// CartContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, CartState } from '../types/cartTypes';

interface CartContextProps {
  children: ReactNode;
}

interface CartActions {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'INCREMENT_QUANTITY' | 'DECREMENT_QUANTITY';
  payload: CartItem;
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartActions>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartActions): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};

const CartProvider: React.FC<CartContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
