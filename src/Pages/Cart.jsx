import React from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    localStorage.setItem('order', JSON.stringify(cartItems));
    console.log('Order placed:', cartItems.item);
    
    clearCart();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-32 p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <Link to="/shop" className="text-yellow-500 hover:underline font-semibold">
            Continue Shopping
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="bg-white p-10 rounded-lg shadow-md text-center ">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-gray-600 mb-6">You have no items in your shopping cart. Let's go buy something!</p>
                <Link to="/shop" className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 font-bold">
                  SHOP NOW
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center p-4 ">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-6" />
                    <div className="flex-grow">
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="text-gray-500">₦{item.price}</p>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 text-sm font-semibold mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Remove
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-4 py-2 border rounded-md font-bold">-</button>
                      <span className="text-lg font-bold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-4 py-2 border rounded-md font-bold">+</button>
                    </div>
                    <div className="text-right w-32 font-bold text-lg">
                      ₦{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="lg:col-span-1" hidden={!cartItems.length}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold border-b pb-4 mb-4">Cart Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold">₦{total}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Shipping</span>
                <span className="font-bold">FREE</span>
              </div>
              <div className="flex justify-between font-extrabold text-xl border-t pt-4">
                <span>Total</span>
                <span>₦{total}</span>
              </div>
              <button onClick={handlePlaceOrder} className="w-full bg-yellow-500 text-white py-4 rounded-lg hover:bg-yellow-600 font-bold text-lg mt-6 transition-transform transform hover:scale-105">
                CHECKOUT (₦{total})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
