import React, { useState } from "react";

import ShopContext from "./shop-context";

const GlobalState = props => {
  const products = [
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 }
  ];

  const [cart, setCart] = useState([]);

  const addProductToCart = product => {
    console.log("Adding product", product);
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setTimeout(() => {
      // this.setState({ cart: updatedCart });
      setCart(updatedCart);
    }, 700);
  };

  const removeProductFromCart = productId => {
    console.log("Removing product with id: " + productId);
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setTimeout(() => {
      // this.setState({ cart: updatedCart });
      setCart(updatedCart);
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
