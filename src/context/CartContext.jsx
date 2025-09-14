import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const foods = [
    { id: 1, name: "Jollof Rice", price: 1500, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fallnigerianfoods.com%2Fnigerian-jellof-rice%2F&psig=AOvVaw0Ek23rSCAmORZEUn4C7T_s&ust=1757776194494000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDBzt_A048DFQAAAAAdAAAAABAE" },
    { id: 2, name: "Fried Rice", price: 1700, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftherecipecritic.com%2Feasy-fried-rice%2F&psig=AOvVaw2yFrVoBQGnoVtZpcZat455&ust=1757776237548000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNj6pvPA048DFQAAAAAdAAAAABAE" },
    { id: 3, name: "Pounded Yam & Egusi", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwQhKwNvhzrGQTIxkwmwxh9kG7Zul-h--Qw&s" },
    { id: 4, name: "Efo Riro", price: 1800, image: "https://www.pinterest.com/pin/703756188099908/" },
    { id: 5, name: "Amala & Ewedu", price: 1600, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZt7cl-3o6UDv7OzCH4caWOWPZXxhRi7cHyYQ1C1PYB4UXPWQOd3rVyUuJnO-RRVDnsGEM3NfV_RUxLgQKJOXwMZr_kGP1QNIAXSan7w" },
    { id: 6, name: "Suya", price: 1200, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcheflolaskitchen.com%2Fsuya%2F&psig=AOvVaw1JVu-tsz_EpO7yzUtnXx0F&ust=1757776259323000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDv5_3A048DFQAAAAAdAAAAABAE" },
    { id: 7, name: "Akara", price: 800, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAkara&psig=AOvVaw34dBDuvCf9UohOzzfVSGaU&ust=1757776281045000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDMx4jB048DFQAAAAAdAAAAABAE" },
    { id: 8, name: "Moi Moi", price: 1000, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsisijemimah.com%2F2015%2F12%2F21%2Fmoimoi-steamed-bean-pudding%2F&psig=AOvVaw3OLzAY6X7K-8nioYTeIq3D&ust=1757776300568000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjJupHB048DFQAAAAAdAAAAABAE" },
    { id: 9, name: "Pepper Soup", price: 1400, image: "/https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myactivekitchen.com%2Fassorted-meat-pepper-soup%2F&psig=AOvVaw2B7f4E-cmkmQQha_Q42yyI&ust=1757776325107000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDDhp3B048DFQAAAAAdAAAAABAE" },
    { id: 10, name: "Ofada Rice & Sauce", price: 1800, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DaJc3JL5Praw&psig=AOvVaw0c-XJpRhWq7vZ8KfbNpaLk&ust=1757776349356000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICG7KjB048DFQAAAAAdAAAAABAE" },
    { id: 11, name: "Beans & Plantain", price: 1500, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnigerianfoodiehub.com%2Fsweet-plantain-and-beans-porridge-easy-recipe%2F&psig=AOvVaw1q1gvS0ys7hnloN2tUbkE5&ust=1757776374215000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjMzbTB048DFQAAAAAdAAAAABAE" },
    { id: 12, name: "Nkwobi", price: 2200, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mydiasporakitchen.com%2Fnkwobi-nigerian-cow-foot-special%2F&psig=AOvVaw0uGKCUjk7Ht5EELxkU2g8P&ust=1757776398715000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODvoMDB048DFQAAAAAdAAAAABAE" },
    { id: 13, name: "Isi Ewu", price: 2500, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlkG-huHQscs&psig=AOvVaw0jpsKvfHJC6fVTybIGRAKX&ust=1757776423359000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID5p87B048DFQAAAAAdAAAAABAE" },
    { id: 14, name: "Okra Soup", price: 1700, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fallnigerianfoods.com%2Fokra-soup%2F&psig=AOvVaw3F65peWnW0HBCgvWlQgO9v&ust=1757776495781000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj3qO7B048DFQAAAAAdAAAAABAE" },
    { id: 15, name: "Ogbono Soup", price: 1800, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjoyfulcook.com%2Frecipe%2Fogbono-soup%2F&psig=AOvVaw0lZ3Bys8S-8OSo1IBlPQpw&ust=1757776520751000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjUtPrB048DFQAAAAAdAAAAABAE" },
    { id: 16, name: "Tuwo Shinkafa", price: 2000, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTuwon_shinkafa&psig=AOvVaw1G-Bdu39FfSys9buxBfL9T&ust=1757776545297000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPj18IXC048DFQAAAAAdAAAAABAN" },
    { id: 17, name: "Egusi soup", price: 1900, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fallnigerianfoods.com%2Fnigerian-egusi-soup%2F&psig=AOvVaw0TR3hKurhbjp4pHTJ4_aFG&ust=1757776587365000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjaoJrC048DFQAAAAAdAAAAABAE" },
    { id: 18, name: "Oha Soup", price: 1900, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fallnigerianfoods.com%2Fuha-soup%2F&psig=AOvVaw2-IWQVbQQ9nlPdQ0fdYKtO&ust=1757776605892000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOj1_KLC048DFQAAAAAdAAAAABAE" },
    { id: 19, name: "Bitterleaf Soup", price: 2000, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allnigerianfoods.com%2Fnigerian-bitter-leaf-soup%2F&psig=AOvVaw1cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 20, name: "Catfish Pepper Soup", price: 2200, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myactivekitchen.com%2Fcatfish-pepper-soup%2F&psig=AOvVaw1cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 21, name: "Chicken Pepper Soup", price: 2000, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myactivekitchen.com%2Fchicken-pepper-soup%2F&psig=AOvVaw3pX1eXG7y8j7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 22, name: "Goat Meat Pepper Soup", price: 2500, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myactivekitchen.com%2Fgoat-meat-pepper-soup%2F&psig=AOvVaw1cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 23, name: "Fufu & Light Soup", price: 2000, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.196flavors.com%2Fghana-light-soup%2F&psig=AOvVaw3cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 24, name: "Yam Porridge", price: 1500, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allnigerianfoods.com%2Fnigerian-yam-porridge%2F&psig=AOvVaw1cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 25, name: "Nigerian Salad", price: 1200, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allnigerianfoods.com%2Fnigerian-salad%2F&psig=AOvVaw1cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 26, name: "Nigerian Meat Pie", price: 800, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allnigerianfoods.com%2Fnigerian-meat-pie%2F&psig=AOvVaw1cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 27, name: "Nigerian Puff Puff", price: 600, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allnigerianfoods.com%2Fnigerian-puff-puff%2F&psig=AOvVaw1cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 28, name: "Nigerian Chin Chin", price: 700, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allnigerianfoods.com%2Fnigerian-chin-chin%2F&psig=AOvVaw1cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 29, name: "Nigerian Akamu", price: 500, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allnigerianfoods.com%2Fnigerian-akamu%2F&psig=AOvVaw1cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 30, name: "Nigerian Ogi", price: 500, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allnigerianfoods.com%2Fnigerian-ogi%2F&psig=AOvVaw1cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 31, name: "Nigerian Masa", price: 800, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allnigerianfoods.com%2Fnigerian-masa%2F&psig=AOvVaw1cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
    { id: 32, name: "Nigerian Kuli Kuli", price: 600, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allnigerianfoods.com%2Fnigerian-kuli-kuli%2F&psig=AOvVaw1cX4Yc1eX4k7b8jK3m3mJH&ust=1757776629783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjWqJfD048DFQAAAAAdAAAAABAE" },
  ];

  const addToCart = (food) => {
    setCartItems((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === food.id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...food, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ foods, cartItems, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
