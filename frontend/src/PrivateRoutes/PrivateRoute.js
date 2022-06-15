import React from "react"
import { Navigate, Outlet } from "react-router-dom"


const PrivateRoute = () => {

    const isAuthenticated = {
        token: localStorage.getItem("token")
    }
    
    return isAuthenticated.token ? <Outlet /> : <Navigate to="/login" />

} 

export default PrivateRoute;