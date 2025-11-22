import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const { cartItems, handleSearch, filteredFoods, query, setQuery } = useCart();
  const cartItemCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  return (
    <nav className="bg-white border-b-2 border-gray-200 px-4 lg:px-12 py-2.5 fixed w-full top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold text-yellow-500">
          <Link to="/">FOODIE</Link>
        </div>

        <div className="flex-1 px-4 lg:px-16">
          <div className="relative" ref={wrapperRef}>
            <input
              value={query}
              onChange={(e) => {
                handleSearch(e);
              }}
              onFocus={() => setIsOpen(true)}
              type="text"
              placeholder="Search for products, brands and categories"
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <div className="absolute w-full">
              {isOpen && (
                <div className="border bg-gray-100 w-full p-2">
                  <ul>
                    {filteredFoods.map((item) => (
                      <li
                        key={item.id}
                        className="cursor-pointer px-2 py-1 hover:bg-yellow-100"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setQuery(item.name);
                          setIsOpen(false);
                        }}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <button className="absolute top-0 right-0 bg-yellow-500 text-white font-bold py-3 px-3 rounded-r-md hover:bg-yellow-600">
              🔍
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="/shop"
            className="text-gray-800 hover:text-yellow-500 transition font-semibold"
          >
            Shop
          </Link>
          <Link
            to="/cart"
            className="relative text-gray-800 hover:text-yellow-500 transition"
            aria-label="Cart"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
