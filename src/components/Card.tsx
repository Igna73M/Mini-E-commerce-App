import { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import { FaPlus, FaMinus } from "react-icons/fa";

interface CardProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  quantity?: number;
  onAddToCart?: () => void;
  onRemoveFromCart?: () => void;
}

function Card({
  image,
  name,
  description,
  price,
  quantity = 0,
  onAddToCart,
  onRemoveFromCart,
}: CardProps) {
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
        {quantity > 0 ? (
          <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white rounded-2xl px-3 py-2 shadow-lg border font-semibold'>
            <button
              onClick={onRemoveFromCart}
              className='text-red-500 hover:text-red-700 p-1 rounded'
            >
              <FaMinus />
            </button>
            <span className='text-black'>{quantity}</span>
            <button
              onClick={onAddToCart}
              className='text-green-500 hover:text-green-700 p-1 rounded'
            >
              <FaPlus />
            </button>
          </div>
        ) : (
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
        )}
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
