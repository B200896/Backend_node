
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const isAdmin = user && user.userType === 'admin';
    console.log(user);

    return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
