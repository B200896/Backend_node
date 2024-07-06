"use client";
import React, { useState, useEffect } from "react";
import "./products.css";
import { useAuth } from "../store/auth";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [refresh, setRefresh] = useState(false); // State variable to trigger useEffect
  const { user } = useAuth();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/GetCartData/${user.userData._id}`
        );
        const data = await response.json();
        setCartData(data.products);
        console.log(data, "cartdata");
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    if (user && user.userData && user.userData._id) {
      fetchCartData();
    }
  }, [user, refresh]); // Add 'refresh' to the dependency array

  const updateCartQuantity = async (productId, quantity) => {
    try {
      const response = await fetch("http://localhost:4000/UpdateCartQuantity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.userData._id,
          productId,
          quantity,
        }),
      });

      const data = await response.json();
      setCartData(data.products);
      setRefresh(!refresh); // Toggle the refresh state to trigger useEffect
    } catch (error) {
      console.error("Error updating cart quantity:", error);
    }
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cartData];
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.product._id === product.product._id
    );

    if (existingItemIndex !== -1) {
      const newQuantity = updatedCart[existingItemIndex].quantity + 1;
      updatedCart[existingItemIndex].quantity = newQuantity;
      setCartData(updatedCart); // Update the cart data locally
      updateCartQuantity(product.product._id, newQuantity); // Sync with the server
    }
  };

  const handleDecrement = (product) => {
    const updatedCart = [...cartData];
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.product._id === product.product._id
    );

    if (
      existingItemIndex !== -1 &&
      updatedCart[existingItemIndex].quantity > 1
    ) {
      const newQuantity = updatedCart[existingItemIndex].quantity - 1;
      updatedCart[existingItemIndex].quantity = newQuantity;
      setCartData(updatedCart); // Update the cart data locally
      updateCartQuantity(product.product._id, newQuantity); // Sync with the server
    }
  };

  const handleRemove = async (productId) => {
    try {
      const response = await fetch('http://localhost:4000/RemoveCartProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.userData._id, productId }),
      });

      const data = await response.json();
      setCartData(data.products);
      setRefresh(!refresh); // Toggle the refresh state to trigger useEffect
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  return (
    <div className="cart-container">
      <ul className="mycart">
        <h2 className="h2">Cart Items</h2>
        {cartData &&
          cartData.map((item) => (
            <li key={item.product._id}>
              <img
                src={item.product.image}
                alt={item.product.name}
                style={{ maxWidth: "300px" }}
              />
              <div className="content">
                <span>Title : {item.product.name}</span> <br />
              </div>
              <div className="button">
                <button type="button" onClick={() => handleDecrement(item)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => handleAddToCart(item)}>
                  +
                </button>
              </div>
              <div className="button">
                <button type="button" onClick={() => handleRemove(item.product._id)}>Remove</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cart;
