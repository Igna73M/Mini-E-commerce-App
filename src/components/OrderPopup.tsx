import React from "react";
import type { CartItem } from "../types/CartItem";

interface OrderPopupProps {
  open: boolean;
  cart: CartItem[];
  orderTotal: number;
  onClose: () => void;
  onNewOrder: () => void;
}

const OrderPopup: React.FC<OrderPopupProps> = ({
  open,
  cart,
  orderTotal,
  onClose,
  onNewOrder,
}) => {
  if (!open) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40'>
      <div className='bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative'>
        <button
          className='absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl'
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className='text-2xl font-bold text-green-600 mb-4 text-center'>
          Order Confirmed!
        </h2>
        <div className='mb-4'>
          <h3 className='font-semibold mb-2'>Order Details:</h3>
          <ul className='divide-y divide-gray-200'>
            {cart.map((item) => (
              <li key={item.id} className='py-2 flex justify-between'>
                <span>
                  {item.quantity}x {item.description}
                </span>
                <span className='font-semibold'>
                  $
                  {(
                    parseFloat(item.price.replace("$", "")) * item.quantity
                  ).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex justify-between items-center text-lg font-bold mb-4'>
          <span>Total:</span>
          <span className='text-red-500'>${orderTotal.toFixed(2)}</span>
        </div>
        <button
          className='w-full bg-red-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-red-600 transition'
          onClick={onNewOrder}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderPopup;
