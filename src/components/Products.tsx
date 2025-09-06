import Card from "./Card";

const products = [
  {
    id: 1,
    image: "/images/1.jpg",
    name: "Waffle",
    description: "Waffle with Berries",
    price: "$6.50",
  },
  {
    id: 2,
    image: "/images/2.jpg",
    name: "Pancake",
    description: "Pancake with Syrup",
    price: "$5.00",
  },
  {
    id: 3,
    image: "/images/3.jpg",
    name: "Noodles",
    description: "Noodles with Vegetables",
    price: "$7.00",
  },
  {
    id: 4,
    image: "/images/4.jpg",
    name: "Pasta",
    description: "Pasta with Marinara Sauce",
    price: "$5.50",
  },
  {
    id: 5,
    image: "/images/5.jpg",
    name: "Rice",
    description: "Rice with Vegetables",
    price: "$6.00",
  },
  {
    id: 6,
    image: "/images/6.jpg",
    name: "Pancake",
    description: "Classic Pancake",
    price: "$4.50",
  },
  {
    id: 7,
    image: "/images/7.jpg",
    name: "Waffle",
    description: "Waffle with Ice Cream",
    price: "$7.50",
  },
  {
    id: 8,
    image: "/images/8.jpg",
    name: "Pancake",
    description: "Pancake with Honey",
    price: "$5.75",
  },
  {
    id: 9,
    image: "/images/9.jpg",
    name: "Waffle",
    description: "Waffle with Caramel",
    price: "$7.25",
  },
];

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
}

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
}

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: number) => void;
  cart: CartItem[];
}

const Products: React.FC<ProductsProps> = ({
  onAddToCart,
  onRemoveFromCart,
  cart,
}) => {
  const getQuantity = (id: number) => {
    const found = cart.find((item) => item.id === id);
    return found ? found.quantity : 0;
  };
  return (
    <div className='h-full px-4'>
      <h1 className='text-center lg:text-left text-2xl font-bold lg:ml-5 my-5'>
        Desserts
      </h1>
      <div className='flex flex-wrap gap-6 justify-center bg-gray-50 rounded-xl p-6 shadow'>
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            quantity={getQuantity(product.id)}
            onAddToCart={() => onAddToCart(product)}
            onRemoveFromCart={() => onRemoveFromCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
