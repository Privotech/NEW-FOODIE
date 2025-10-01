import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [query, setQuery] = useState("");

  const foods = [
    {
      id: 1,
      name: "Jollof Rice",
      price: 1500,
      image:
        "https://www.allrecipes.com/thmb/EJn9SMTzr4QRkdiWdi3ZBgC0Clw=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/7499757JollofriceChefJohn4x3-d601da10d7e845d1ad4c8656a5b87ed4.jpg",
    },
    {
      id: 2,
      name: "Fried Rice",
      price: 1700,
      image:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/fried-rice-1296x728-header.jpg?w=1155&h=1528",
    },
    {
      id: 3,
      name: "Pounded Yam & Egusi",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwQhKwNvhzrGQTIxkwmwxh9kG7Zul-h--Qw&s",
    },
    {
      id: 4,
      name: "Efo Riro",
      price: 1800,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWEnHzya52nMKYRz4PyuPg1sQ6MXlSrGh5r2Mv0xhMTe9RepbmRNsWuS3ZOGXJt_fJaklTqd_JVA2let321CupOt3FEViBez5oGpBsWOi8",
    },
    {
      id: 5,
      name: "Amala & Ewedu",
      price: 1600,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZt7cl-3o6UDv7OzCH4caWOWPZXxhRi7cHyYQ1C1PYB4UXPWQOd3rVyUuJnO-RRVDnsGEM3NfV_RUxLgQKJOXwMZr_kGP1QNIAXSan7w",
    },
    {
      id: 6,
      name: "Suya",
      price: 1200,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZKfX56bcmT_aNSH0VPgUqllcYwAUuxzRSocVkYrc4IS_5xMY2PaYi8nO0R8robWLnu5B_4-tNZMWW3Zo-Wk50YBBJYEV_K5uyFpxkdokH",
    },
    {
      id: 7,
      name: "Akara",
      price: 800,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTD2pHwlQwjV662HjuV0MXHs0ImnnJaYfXNaBa5EJ5nNldrYBKpsjLOVnSgu2KA6wzay6kNZu3SnO-ikbRHG6M12TIA3s3egsf1mCE8ONRDw",
    },
    {
      id: 8,
      name: "Moi Moi",
      price: 1000,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQMOFKkc8YczeS42PGhk2JqEeYfGOdmwaluEUHYx-K0HIlhFGtmfQERk7XvD1vBM9g6KS-k-F7yVvwByWqSztxMfQivz-45N74MHBqysHefKQ",
    },
    {
      id: 9,
      name: "Pepper Soup",
      price: 1400,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSK1Qoe-3tsrRFdLu4QwPKcLLQoUNHI6aMKcG-mkO70c0LIzwKoLxzIF0esrXFoZ5HU8aWnRIZfnfeC-x_6JevTsnqOfRUZndr5PvWKYdW-OQ",
    },
    {
      id: 10,
      name: "Ofada Rice & Sauce",
      price: 1800,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQk48RgIU6HpTdimOxk_zsUvcGAdeZFjcHwPjsuyJC4x5GdMjL3sf8OPgXHDpIJIEzfSbdUvd0UpTYkHMcZcn-OjvZiSUXYtnBVUWtGrYf9HA",
    },
    {
      id: 11,
      name: "Beans",
      price: 1500,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3EO8XF6r0PmmkUj5jByVuWiu-JF8jBzRS53bvDIy_j5irqtYwfaBRh-D6av5ENuWBlDBsAQ3wxuUwwBcqBMv5PDV_RissVQfa8ek-7zgR",
    },
    {
      id: 12,
      name: "Nkwobi",
      price: 2200,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3MaDibMDRPEJN-34r76eUBo0iWLW1qol0xQ0sHqXs1UIqTq1qfK4RO3R2B6WOVR3CgMEseEgDY_MKnjTd7G4JLneR5sMJs12SsDA9zJ2",
    },
    {
      id: 13,
      name: "Isi Ewu",
      price: 2500,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuNChFzjRBD3IzXk2lhKscjFSm2Mam-3qaGwGzNOgMcvQpns73upMLjVObLqD9Vx1CAZb8xZtToaKz8mi_CNcYDJICLG7A3ZowDDmIbM1Z",
    },
    {
      id: 14,
      name: "Okra Soup",
      price: 1700,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8eErfWKSoPdGoUFi7pmrBdv1yHWHSPaubug1wqZ2cotufeWuScnYUUC6N78XAtbI39ncymjGxRh_HrjGH6ov5BtxN0x4aajtVGZAfX2Fm",
    },
    {
      id: 15,
      name: "Ogbono Soup",
      price: 1800,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRYNKiwLRd7IOAjmNN8aAc5eSeu1C2Juchm9m6ZsRob8V50iBWhnQbIJXyvfpFRZH8Xqn_63zJohtY3TLPFtyyc96tgI3gIwTpM3DX8LSVC",
    },
    {
      id: 16,
      name: "Tuwo Shinkafa",
      price: 2000,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3Fo7gMZp2K858ddUK6OSwMZMUSwm2tVtp-Q8eJZyLcqThUHqG05duCOTAG36jBGmZ5T30KPELE2psMETHUOq8OkVH1BT2QlBNHAeQAR5iWQ",
    },
    {
      id: 17,
      name: "Egusi soup",
      price: 1900,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZPx9PTtYD8AjHUjn1YFPcbJUgx9HzJvOD1_SFY2--nDx0euppEsoLZeUtLQ84lbw41X0ycBHZoVTVARP8n41HB-gsbpUheXtwyYY7JSgMdQ",
    },
    {
      id: 18,
      name: "Oha Soup",
      price: 1900,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHxTOB0FekCheJ9NjXG3lIU9JRKkMZnc-ppruS9l1JCoGta26kr_4dU_PEXIel2QoCFCcGywNACCM6XwL7UCj1CIXU5hsyUdGSby8P-oq",
    },
    {
      id: 19,
      name: "Bitterleaf Soup",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlErdHOlL47QNx2eByDuIrRlFCZHJbp6pLgTQrgnlggeJ58aPgTAwNfND0sF2h0WOykRwcuQyAlWgseNuu82mHbFSIrD8&s=10",
    },
    {
      id: 20,
      name: "Catfish Soup",
      price: 2200,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsPZ3pPbeHOk9tN91-XRUGZHJcf6w3jS66_drR0mF2GnFdGwBnuofYqLuFCOfKCGndUoK1lK1LjMhMb-DuSaG4ySiigCX7DUtPcIRhwfxqOQ",
    },
    {
      id: 21,
      name: "spicy noodles",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxl9wR_zp4Imx2LBipnNRS-WbEDFajkNBszQRt9I2ekFjpRd9SPW1nO3OEYbVaT9yiCYFBDhK1Kbi6Jp_-PDQ2qX6cyGU&s=10",
    },
    {
      id: 24,
      name: "Yam Porridge",
      price: 1500,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThGpuDYywUvXeId-iUBuCpPdJO545179MlwAy22XBC7bWqvQ5CU2Atk2gnMHiJ7cEhQ-Ozlxo6p32HKnpFedS9u7u5pLCA96mO-fsrESiv",
    },
    {
      id: 25,
      name: "Salad",
      price: 1200,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnAug3F8Cjx6piU2jx93swjJyRVbjVQRKsN_iXrMKynZsRbK-bFnsss_il9eafBuN62s&s",
    },
    {
      id: 30,
      name: "Spaghetti",
      price: 500,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTlW49hvMBPf8XW-JMhFN-RuZx_x90BjdoDd36M0G89qwA4871v30VhHwzINI4Oeheh1lmQZ7P7JxHwRoYwEbzLjgrtyuVRQxbQ63a2w4RE",
    },
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

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <CartContext.Provider
      value={{
        foods,
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        query,
        setQuery,
        filteredFoods,
        handleSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
