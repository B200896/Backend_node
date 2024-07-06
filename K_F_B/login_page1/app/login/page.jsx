"use client"
import './login.css'
import { useState } from 'react';
// import { useRouter } from 'next/router';
import {useRouter} from 'next/navigation';
import axios from 'axios';
import { useAuth } from '../store/auth';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');
  const [loading, setLoading] = useState(false);
  const{ storeServerToken } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password
      });

      console.log(response,"response>>>>>")

      const matchingUser = await response.data;
      storeServerToken(matchingUser.token);
      console.log(matchingUser,"matching")
      if (matchingUser) {
        router.push('/');
      } else {
        alert("Incorrect username or password");
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.msg || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
      </form>

      <h5>Don't have an account? <a href="/register">Register</a></h5>
      
     
    </div>
  );
}
