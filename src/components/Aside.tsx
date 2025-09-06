import { LiaTimesCircle } from "react-icons/lia";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
}

interface AsideProps {
  cart: CartItem[];
  onRemoveFromCart: (productId: number) => void;
}

function Aside({ cart, onRemoveFromCart }: AsideProps) {
  const cartCount = cart?.reduce((acc, item) => acc + item.quantity, 0) || 0;
  const orderTotal =
    cart?.reduce(
      (acc, item) =>
        acc + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    ) || 0;
  return (
    <aside className='bg-white rounded-xl shadow-md p-6 flex flex-col lg:w-500 min-w-[300px]'>
      <h1 className='text-2xl font-bold text-red-500 text-center mb-4'>
        Your Cart ({cartCount})
      </h1>
      {cartCount === 0 ? (
        <div className='flex flex-col justify-center w-full items-center'>
          <img src='/images/no_cart.png' alt='Cart' className='w-60' />
          <span className='text-gray-500'>
            Your added items will appear here
          </span>
        </div>
      ) : (
        <div>
          {cart.map((item, idx) => (
            <div
              key={idx}
              className='flex flex-col justify-center w-full items-center mb-4'
            >
              <h4 className='text-left w-full font-semibold'>
                {item.description}
              </h4>
              <div className='flex flex-row justify-between w-full items-center'>
                <div className='flex items-center'>
                  <span className='mr-2 text-red-500 font-bold text-lg'>
                    {item.quantity}X
                  </span>
                  <span className='mr-1 font-semibold'>{item.price}</span>
                  <span className='mr-1 text-gray-700'>
                    $
                    {(
                      parseFloat(item.price.replace("$", "")) * item.quantity
                    ).toFixed(2)}
                  </span>
                </div>
                <button
                  className='cursor-pointer text-red-500 ml-2'
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  <LiaTimesCircle className='text-2xl' />
                </button>
              </div>
              <hr className='my-2 border-gray-200 w-full' />
            </div>
          ))}
          <div className='mt-6 p-4 rounded-xl bg-gray-50 shadow-inner'>
            <div className='flex justify-between items-center mb-2 text-lg font-bold'>
              <span>Order Total</span>
              <span className='text-red-500'>${orderTotal.toFixed(2)}</span>
            </div>
            <div className='mb-4 text-green-600 text-sm font-medium'>
              <span className='font-bold'>✓</span> This is a{" "}
              <span className='font-bold'>carbon-neutral</span> delivery
            </div>
            <button className='w-full bg-red-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-red-600 transition'>
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Aside;
