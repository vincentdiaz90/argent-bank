import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getToken } from "../../../redux/reducer/Token/token";
import { getFirstName } from "../../../redux/reducer/User/firstName";
import { getLastName } from "../../../redux/reducer/User/lastName";
import { Navigate } from "react-router-dom";

export default function SignOut() {
 
    // Change the token
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToken(0));
        dispatch(getFirstName(""));
        dispatch(getLastName(""));

        localStorage.removeItem("token");
    });
    

    // Redirection
    return < Navigate to="/home" /> 
}
