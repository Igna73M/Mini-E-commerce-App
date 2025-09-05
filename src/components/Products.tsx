import Card from "./Card";

const products = [
  {
    image: "/images/1.jpg",
    name: "Waffle",
    description: "Waffle with Berries",
    price: "$6.50",
  },
  {
    image: "/images/2.jpg",
    name: "Pancake",
    description: "Pancake with Syrup",
    price: "$5.00",
  },
  {
    image: "/images/3.jpg",
    name: "Noodles",
    description: "Noodles with Vegetables",
    price: "$7.00",
  },
  {
    image: "/images/4.jpg",
    name: "Pasta",
    description: "Pasta with Marinara Sauce",
    price: "$5.50",
  },
  {
    image: "/images/5.jpg",
    name: "Rice",
    description: "Rice with Vegetables",
    price: "$6.00",
  },
  {
    image: "/images/6.jpg",
    name: "Pancake",
    description: "Classic Pancake",
    price: "$4.50",
  },
  {
    image: "/images/7.jpg",
    name: "Waffle",
    description: "Waffle with Ice Cream",
    price: "$7.50",
  },
  {
    image: "/images/8.jpg",
    name: "Pancake",
    description: "Pancake with Honey",
    price: "$5.75",
  },
  {
    image: "/images/9.jpg",
    name: "Waffle",
    description: "Waffle with Caramel",
    price: "$7.25",
  },
];

interface Product {
  image: string;
  name: string;
  description: string;
  price: string;
}

interface CartItem {
  name: string;
  description: string;
  price: string;
  quantity: number;
}

type ProductsProps = {
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productName: string) => void;
  cart: CartItem[];
};

function Products({ onAddToCart, onRemoveFromCart, cart }: ProductsProps) {
  const getQuantity = (name: string) => {
    const found = cart.find((item) => item.name === name);
    return found ? found.quantity : 0;
  };
  return (
    <div className='h-full px-4'>
      <h1 className='text-center lg:text-left text-2xl font-bold lg:ml-5 my-5'>
        Desserts
      </h1>
      <div className='flex flex-wrap gap-6 justify-center bg-gray-50 rounded-xl p-6 shadow'>
        {products.map((product, idx) => (
          <Card
            key={idx}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            quantity={getQuantity(product.name)}
            onAddToCart={() => onAddToCart(product)}
            onRemoveFromCart={() => onRemoveFromCart(product.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
