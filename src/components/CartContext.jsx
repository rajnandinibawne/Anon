import React, { createContext, useState, useContext,useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
// const getLocalCartData = () => {
//     let localCartData = localStorage.getItem("thapaCart");
//     // if (localCartData === []) {
//     //   return [];
//     // } else {
//     //   return JSON.parse(localCartData);
//     // }
//     const parsedData = JSON.parse(localCartData);
//     if (!Array.isArray(parsedData)) return [];
  
//     return parsedData;
//   };
const getLocalCartData = () => {
    const localCartData = localStorage.getItem("cart");
    return localCartData ? JSON.parse(localCartData) : [];
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };
  const [cart, setCart] = useState(getLocalCartData);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    useEffect(() => {
        
        dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    
        localStorage.setItem("thapaCart", JSON.stringify(state.cart));
      }, [state.cart]);
    
  };

//   const total = cart.reduce((acc, item) => acc + item.realprice * item.quantity, 0);
const total = cart.reduce(
    (acc, item) => acc + parseFloat(item.realprice || 0) * (item.quantity || 1),
    0
  );


  return (
    <CartContext.Provider value={{ cart, addToCart, total,removeItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
