import React from "react";
import { useCart } from "../context/CartContext";

const FoodCard = ({ food }) => {
  const { addToCart, updateQuantity, cartItems } = useCart();
  const cartItem = cartItems.find((item) => item.id === food.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(food);
  };

  const increaseQuantity = () => {
    updateQuantity(food.id, quantity + 1);
  };

  const decreaseQuantity = () => {
    updateQuantity(food.id, quantity - 1);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={food.image}
        alt={food.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{food.name}</h2>
        <p className="text-gray-600 text-lg">₦{food.price}</p>

        <div className="mt-4">
          {quantity === 0 ? (
            <button
              onClick={handleAddToCart}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 font-bold"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={decreaseQuantity}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 font-bold"
              >
                -
              </button>
              <span className="text-xl font-bold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 font-bold"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
