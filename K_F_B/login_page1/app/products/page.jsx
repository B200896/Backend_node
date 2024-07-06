"use client";

import React, { useState, useEffect } from 'react';
import '../products/products.css';
import { useRouter } from 'next/navigation';
import { useAuth } from '../store/auth';

const Products = () => {
    const [posts, setPosts] = useState([]);
    const [cart, setCart] = useState([]);
    const router = useRouter();

    const {user} = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/ProductData");
                if (!response.ok) {
                    throw new Error("No response");
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error in fetching data', error);
            }
        };
        fetchData();


        const storedCart = JSON.parse(localStorage.getItem('Cart item')) || [];
        setCart(storedCart);
    }, []);

    const handleDelete = (postId) => {
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
    };

    const handleCart = async (product) => {
        const userId = user.userData._id; // Replace with actual user ID
        const response = await fetch('http://localhost:4000/addToCart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, productId: product._id })
        });
        
        console.log(product,"product");
        console.log(userId,"Userid")
        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to add product to cart');
        }
        const existingCart = [...cart];
        const existingProductIndex = existingCart.findIndex(item => item._id === product._id);

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].count += 1;
        } else {
            existingCart.push({ ...product, count: 1 });
        }

        setCart(existingCart);
        localStorage.setItem('Cart item', JSON.stringify(existingCart));
        console.log("Cart updated:", existingCart);
        router.push('/cart')
    };

    return (
        <div className="posts-container">
            <h2 className='h2'>Products</h2>
            <ul className="product-list">
                {posts.map(post => (
                    <li key={post.id} className="product">
                        <div>
                            <img src={post.image} alt={post.title}  />
                            {/* {post.rating && (
                                <p>Rating: <span>rate: {post.rating.rate}</span> <span>count: {post.rating.count}</span> </p>
                                )} */}
                            <h3>{post.name}</h3>
                            <p>{post.description}</p>
                            <button type='button' onClick={() => handleDelete(post._id)}>Delete</button>
                            <button type='button' onClick={() => handleCart(post)}>Add to Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;