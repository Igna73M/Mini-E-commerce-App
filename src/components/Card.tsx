import { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

interface CardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  onAddToCart?: () => void;
}

function Card({ image, name, description, price, onAddToCart }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 w-64 flex flex-col text-left p-4'>
      <div className='w-full h-48 rounded-xl relative mb-2'>
        <img
          className={`w-full h-full object-cover rounded-xl ${
            isHovered ? "border-2 border-red-500" : ""
          }`}
          src={image}
          alt={name}
        />
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onAddToCart}
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl bg-red-500 text-white text-sm font-semibold border w-fit text-nowrap px-3 py-2 cursor-pointer shadow-lg transition ${
            isHovered ? "scale-105" : ""
          }`}
        >
          <MdOutlineAddShoppingCart className='inline-block mr-1 text-lg text-white' />
          Add to Cart
        </div>
      </div>
      <div className='py-2'>
        <small className='text-gray-500'>{name}</small>
        <h2 className='font-bold text-lg'>{description}</h2>
        <span className='text-red-500 font-semibold'>{price}</span>
      </div>
    </div>
  );
}

export default Card;
