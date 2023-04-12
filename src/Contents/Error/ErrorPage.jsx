import './ErrorPage.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

import { getToken } from "../../redux/reducer/Token/token";
import { getLoginFetch } from "../../API/api";


export default function ErrorPage() {

  const token = useSelector((state) => state.token.value);

      // Use Effect
    const dispatch = useDispatch();
    useEffect(() => {
        if(token === localStorage.getItem("token")) {
            dispatch(getToken(localStorage.getItem("token")));
        }
    });

  return (
    <div className='error'>
      <h1>Une erreur est survenue</h1>
      <div className='error-nav'>
      { 
        token === 0 &&
          <Link to="/">
            <p>Acceuil</p>
          </Link>
      }
      {          
        token !== 0 &&
        <Link to="/user">
          <p>Acceuil</p>
        </Link>
      }

      </div>
    </div>
  )
}
