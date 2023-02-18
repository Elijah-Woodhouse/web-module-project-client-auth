import React, { useEffect } from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import FriendsList from './FriendsList'

const PrivateRoute = () => {
    
    const push = useNavigate();
    if (!localStorage.getItem('token')) {
        //push('/login')
        <Navigate to="/login"/>
    } 
    return  <FriendsList/>
}

export default PrivateRoute;

