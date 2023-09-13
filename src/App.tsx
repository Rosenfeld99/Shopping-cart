// App.tsx
import React from 'react';
import { CartProvider } from './context/CartContext';
import ShoppingCart from './components/ShoppingCart';
import AppRoutes from './routes/AppRoutes';
import './index.css'

function App() {
  return (
    <CartProvider>
      <div className="App">
        {/* <ShoppingCart /> */}
        <AppRoutes/>
      </div>
    </CartProvider>
  );
}

export default App;
