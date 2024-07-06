import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom';
import { Homedetails } from './Homedetails';
export function Home() {

    return (
        <div className="home">
            <div className="left-side">
                <div className="text-container">
                    <Link to='/login'><span>Login</span></Link>
                </div>
                <div className="text-container">
                    <Link to='/user'><span>Users</span></Link>
                </div>
                <div className="text-container">
                    <Link to='/categoriesdata'><span>Categories</span></Link>
                </div>
                <div className="text-container">
                    <Link to='/branddata'><span>Brands</span></Link>
                </div>
                <div className="text-container">
                    <Link to='/productdata'><span>Products</span></Link>
                </div>
                <div className="text-container">
                    <Link to='/subcategory'><span>Sub-Categories</span></Link>
                </div>
                
                
            </div>
            <div className="App">
                <header className="App-header">
                    <h1>Hello User!!!</h1>
                </header>
            </div>

        </div>
    );
}
