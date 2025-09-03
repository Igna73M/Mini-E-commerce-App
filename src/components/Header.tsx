import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='w-full p-4 bg-white border-b flex items-center justify-between shadow-sm'>
      <div className='md:text-2xl font-bold text-red-500 mr-1'>MiCommerce</div>
      <nav className='space-x-4'>
        <Link to='/' className='text-gray-700 hover:text-red-500 font-medium'>
          Home
        </Link>
        <Link
          to='/products'
          className='text-gray-700 hover:text-red-500 font-medium'
        >
          Products
        </Link>
        <Link
          to='/contact'
          className='text-gray-700 hover:text-red-500 font-medium'
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
