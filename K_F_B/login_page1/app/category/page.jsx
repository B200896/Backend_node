
"use client"
import React, { useState, useEffect } from 'react';
import './category.css'

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/categoriesData');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json(); 
        setCategory(data); 
        console.log(data,'lijhhbhbbh')
      } catch (error) {
        console.error('Error fetching API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="category-name">
      <h2>Categories</h2>
      {category.map((item) => (
        <div className="cart" key={item.id}>
            <div className="image">
                <img src={item.image}/>
            </div>
          <div className='content'>
            <h1>Title: {item.name}</h1>
            <p>Description:{item.description}</p>
            <div>
              <button>Add to Cart</button>
      </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
