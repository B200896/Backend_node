"use client";
import React, { useState, useEffect } from "react";
import "./brands.css";
const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/BrandData");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Fetched data:", data);

        if (Array.isArray(data)) {
          setBrands(data);
        } else {
          throw new Error("Fetched data is not an array");
        }
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="brands">
      <h1>Brands</h1>
      <div className="inner-brands">
        <ul>
          {brands.map((item, index) => (
            <li>
              <a href={`/products/${item._id}`}>{item.name}</a>
              
            </li>
            
            
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Brands;
