import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';

type CartItem = {
  name: string;
  description: string;
  price: string;
  quantity: number;
};

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.name === product.name);
      if (found) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productName: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  return (
    <>
      <Header />
      <ProductPage
        productsPageProps={ {
          onAddToCart: handleAddToCart,
          cart,
          onRemoveFromCart: handleRemoveFromCart,
        } }
      />
      <Footer />
    </>
  );
}

export default App
