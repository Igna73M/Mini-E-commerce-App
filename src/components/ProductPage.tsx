import Products from "./Products";
import Aside from "./Aside";

import type { CartItem } from "../types/CartItem";

type ProductPageProps = {
  productsPageProps: {
    onAddToCart: (product: Omit<CartItem, "quantity">) => void;
    cart: CartItem[];
    onRemoveFromCart: (productId: number) => void;
  };
};

function ProductPage({ productsPageProps }: ProductPageProps) {
  const { onAddToCart, cart, onRemoveFromCart } = productsPageProps || {};
  return (
    <div className='flex py-6 flex-col lg:flex-row justify-center'>
      <Products
        onAddToCart={onAddToCart}
        cart={cart}
        onRemoveFromCart={onRemoveFromCart}
      />
      <Aside cart={cart} onRemoveFromCart={onRemoveFromCart} />
    </div>
  );
}

export default ProductPage;
