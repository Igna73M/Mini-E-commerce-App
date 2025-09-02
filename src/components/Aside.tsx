import { LiaTimesCircle } from "react-icons/lia";

type CartItem = {
    name: string;
    description: string;
    price: string;
    quantity: number;
};

type AsideProps = {
    cart: CartItem[];
    onRemoveFromCart: (productName: string) => void;
};

function Aside({ cart, onRemoveFromCart }: AsideProps) {
    const cartCount = cart?.reduce((acc, item) => acc + item.quantity, 0) || 0;
    return (
        <div className='p-4 flex flex-col lg:w-500'>
            <h1 className='text-2xl font-bold text-red-500 text-center'>Your Cart ({ cartCount })</h1>
            { cartCount === 0 ? (
                <div className='flex flex-col justify-center w-full items-center'>
                    <img src="/images/no_cart.png" alt="Cart" className='w-60' />
                    <span className='text-gray-500'>Your added items will appear here</span>
                </div>
            ) : (
                <div>
                    { cart.map((item, idx) => (
                        <div key={ idx } className='flex flex-col justify-center w-full items-center mb-4'>
                            <h4 className='text-left w-full'>{ item.description }</h4>
                            <div className='flex flex-row justify-between w-full'>
                                <div className='flex items-center'>
                                    <span className='mr-2 text-red-500'>{ item.quantity }X</span>
                                    <span className='mr-1'>{ item.price }</span>
                                    <span className='mr-1'>${ (parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2) }</span>
                                </div>
                                <button className='cursor-pointer text-red-500' onClick={ () => onRemoveFromCart(item.name) }>
                                    <LiaTimesCircle />
                                </button>
                            </div>
                        </div>
                    )) }
                </div>
            ) }
        </div>
    )
}

export default Aside
