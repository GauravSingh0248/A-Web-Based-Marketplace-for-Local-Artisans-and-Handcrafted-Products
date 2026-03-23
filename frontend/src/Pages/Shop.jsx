import React, { useState, useEffect } from "react";
import { Hero } from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend Products:", data);
        setProducts(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Cart:", [...cart, product]);
  };

  return (
    <div>
      <h2>Products</h2>

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}

      {/* 🛒 CART UI */}
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
        ))
      )}

      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;