import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import { ShoppingBag, Menu, X } from "lucide-react"; 

export default function Header() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-[#1F2937] shadow-md text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Celestial
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-gray-300 transition-colors duration-200">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-300 transition-colors duration-200">
            Products List
          </Link>
        </nav>

        {/* Right Section with Cart and Auth Links */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-4">
            <Link
              to="#"
              className="border border-white px-4 py-1 rounded-full hover:bg-[#111d2d] hover:text-white transition duration-200"
            >
              Signin
            </Link>
            <Link
              to="#"
              className="border border-white px-4 py-1 rounded-full hover:bg-[#111d2d] hover:text-white transition duration-200"
            >
              Signup
            </Link>
          </div>

          {/* Cart Icon with Item Count */}
          <Link to="/cart" className="relative flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 hover:text-gray-300 transition-colors duration-200" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none hover:text-gray-300 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#111d2d] text-white w-full text-center">
          <ul className="flex flex-col space-y-4 py-4">
            <li>
              <Link
                to="/"
                className="block hover:text-gray-300 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block hover:text-gray-300 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Products List
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block border border-white px-4 py-1 rounded-full mx-4 hover:bg-gray-700 transition duration-200"
                onClick={toggleMenu}
              >
                Signin
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block border border-white px-4 py-1 rounded-full mx-4 hover:bg-gray-700 transition duration-200"
                onClick={toggleMenu}
              >
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
