import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./LayoutFolder/Layout";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Contact from "./components/Contact";

type CartItem = {
  name: string;
  description: string;
  price: string;
  quantity: number;
};

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Omit<CartItem, "quantity">) => {
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
