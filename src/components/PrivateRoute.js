import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
         if(!isAuthenticated) {
            alert("You are not logged in")
         }

  return isAuthenticated ? children : <Navigate to="/login"/>
}

export default PrivateRoute