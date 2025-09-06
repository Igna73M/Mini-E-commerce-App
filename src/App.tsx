import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./LayoutFolder/Layout";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Contact from "./components/Contact";

import type { CartItem } from "./types/CartItem";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === product.id);
      if (found) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path='products'
            element={
              <ProductPage
                productsPageProps={{
                  onAddToCart: handleAddToCart,
                  cart,
                  onRemoveFromCart: handleRemoveFromCart,
                }}
              />
            }
          />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
