import React, { useState } from "react";
import { createContext, useContext, useMemo } from "react";
import { ToastContainer, toast,Bounce } from "react-toastify";
const CartContext = createContext();

import { initialProducts } from "../data/Product.";

export const CartProvider = (props) => {
  const [cart, setcart] = useState([]);
  const products = initialProducts;
  //add item in to cart
  const addToCart = (product) => {
    toast.success("Item Added To Cart...", {
      position: "top-right",
      autoClose: 1497,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setcart((prevCart) => {
      const existingCart = prevCart.find((item) => item.id === product.id);
      if (existingCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  //remove for cart

  const removeFromCart = (productid, removeAll = false) => {
     toast.success("Item Remove To Cart...", {
       position: "top-right",
       autoClose: 1497,
       hideProgressBar: false,
       closeOnClick: false,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "dark",
       transition: Bounce,
     });
    setcart((prevCart) => {
      const existingCart = prevCart.find((item) => item.id === productid);
      if (!existingCart) return prevCart;
      if (removeAll || existingCart.quantity === 1) {
        return prevCart.filter((item) => item.id !== productid);
      } else {
        return prevCart.map((item) =>
          item.id === productid
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };
  //clear cart
  const clearCart = () => setcart([]);
  //cart count
  const cartCount = useMemo(() =>
    cart.reduce((total, item) => total + item.quantity, 0)
  );

  //cart total price

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
