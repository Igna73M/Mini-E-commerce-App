import React from 'react';

function Header() {
    return (
        <header className="w-full p-4 bg-white border-b flex items-center justify-between shadow-sm">
            <div className="md:text-2xl font-bold text-red-500 mr-1">MiCommerce</div>
            <nav className="space-x-4">
                <a href="#" className="text-gray-700 hover:text-red-500 font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-red-500 font-medium">Products</a>
                <a href="#" className="text-gray-700 hover:text-red-500 font-medium">Contact</a>
            </nav>
        </header>
    );
}

export default Header
