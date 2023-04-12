import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

import imgBank from '../../asset/images/argent.png'


import { getToken } from "../../redux/reducer/Token/token";
import { getLoginFetch } from "../../API/api";
import { getFirstName } from "../../redux/reducer/User/firstName";




export default function Navbar() {

    // Use Selector
    const firstName = useSelector((state) => state.firstName.value);
    const token = useSelector((state) => state.token.value);


    // Use Effect
    const dispatch = useDispatch();
    useEffect(() => {
        if(token === localStorage.getItem("token")) {
            dispatch(getToken(localStorage.getItem("token")));
            const user = getLoginFetch(token);
            user.then(obj => {
                dispatch(getFirstName(obj.firstName));
            });
        }
    });

  return (
    <nav className="main-nav">
        <Link to="/home">      
            < img
                src={imgBank}
                className="main-nav-item"
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {/* No connected */}
        { 
            token === 0 &&
            <>
                <Link to="/sign-in" className='main-nav-item'>
                        <i className="fa fa-user-circle"></i>
                        <p> Sign In </p>       
                </Link>
            </>
        }


        {/* Connected */}
        {          
            token !== 0 &&
            <>

            <Link to="/user" className='main-nav-item'>
                <i class="fa fa-user-circle"></i>
                <p>{firstName}</p>    
            </Link>
            <Link to="/sign-out" className='main-nav-item'>
                <i class="fa fa-sign-out"></i>
                <p>Sign Out</p>        
            </Link>

            </>
        }

    </nav>
  )
}