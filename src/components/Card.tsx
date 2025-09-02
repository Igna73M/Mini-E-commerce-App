import React from 'react';
import { useState } from 'react';
import { MdOutlineAddShoppingCart } from "react-icons/md";

type CardProps = {
    image: string;
    name: string;
    description: string;
    price: string;
    onAddToCart?: () => void;
};

function Card({ image, name, description, price, onAddToCart }: CardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="border border-transparent rounded-lg overflow-hidden w-fit flex flex-col text-left">
            <div className='lg:w-90 w-50 lg:h-80 h-60 rounded-xl relative'>
                <img className={ `w-full h-full object-fill ${isHovered ? 'border-2 border-red-500' : ''}` } src={ image } alt={ name } />
                <div
                    onMouseEnter={ () => setIsHovered(true) }
                    onMouseLeave={ () => setIsHovered(false) }
                    onClick={ onAddToCart }
                    className={ `absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl bg-white text-sm  font-semibold text-black border-red-400 border w-fit text-nowrap px-2.5 py-1.5 cursor-pointer ${isHovered ? 'hover:text-white hover:bg-red-500' : ''}` } >
                    <MdOutlineAddShoppingCart className={ `inline-block mr-1 ${isHovered ? 'text-white' : 'text-red-500'}` } />
                    Add to Cart
                </div>
            </div>
            <div className='py-4'>
                <small className='text-gray-500'>{ name }</small>
                <h2>{ description }</h2>
                <span className='text-red-500'>{ price }</span>
            </div>
        </div>
    )
}

export default Card
