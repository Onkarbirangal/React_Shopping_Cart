import React from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <>
      <header
        className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl
       shadow-gray-950/70 border-b border-orange-900"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <Home className="w-8 h-8 text-orange-400 drop-shadow-lg" />
              <h1 className="text-4xl font-extrabold tracking-widest uppercase">
                WDM<span className="text-orange-400">STORE</span>
              </h1>
            </div>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              to={"/cart"}
              className="relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-500/20 transition
             duration-200 border border-orange-400/50 shadow-lg cursor-pointer"
            >
              <ShoppingCart className="w-6 h-6 text-orange-400" />
              {cartCount > 0 && 
                <span
                  className="absolute top-0 right-0
                  inline-flex items-center justify-center px-2 py-1 text-xs font-bold
                  leading-none text-white transform translate-x-1/2 -translate-y-1/2
                   bg-red-600 rounded-full min-w-[24px] h-[20xp]"
                >
                  {cartCount}
                </span>
              }
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
