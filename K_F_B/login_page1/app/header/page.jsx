"use client";
import React from "react";
import "./header.css";
import Link from "next/link";
import Brands from "../brands/page";
import { useAuth } from "../store/auth";

const Header = () => {
  const { user, islogedin } = useAuth();
  console.log(user);
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Brands />
          </li>
          <li>
            <Link href="/category">Categories</Link>
          </li>
          <li>
            <Link href="/subcategories">Subcategories</Link>
          </li>
          {islogedin ? (
            <>
              <li>Welcome {user && user.userData.username}</li>
              <li>
                <button type="button">
                  <Link href= "/cart"> Cart Items</Link>
                </button>
              </li>
              <li>
                <button type="button">
                  <Link href="/logout">LogOut</Link>
                </button>
              </li>
            </>
          ) : (
            <li>
              <button type="button">
               <Link href="/login">Login</Link> 
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
