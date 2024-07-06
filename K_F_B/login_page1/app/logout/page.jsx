// pages/logout.js
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../store/auth';

export default function LogoutPage() {
  const { DeleteToken } = useAuth();

  useEffect(() => {
    const handleLogout = async () => {
      await DeleteToken(); // Ensure the token deletion is completed
    };

    handleLogout();
  }, [DeleteToken]);

  return null; // Render nothing as the component is used for redirection
}
