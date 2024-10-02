import { Link } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import { ShoppingBag } from "lucide-react";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="bg-[#1F2937] shadow-md text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Celestial
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-600">
                Products List
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row space-x-6 align-middle items-center justify-center">
          <div className="flex flex-row gap-6">
            <Link
              to="#"
              className="border border-white px-4 py-1 rounded-full hover:bg-[#111d2d] hover:text-white"
            >
              Signin
            </Link>
            <Link
              to="#"
              className="border border-white px-4 py-1 rounded-full hover:bg-[#111d2d] hover:text-white"
            >
              Signup
            </Link>
          </div>
          <Link to="/cart" className="relative">
            <ShoppingBag className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
