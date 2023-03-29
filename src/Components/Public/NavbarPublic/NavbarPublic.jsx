import React from 'react'
import { Link } from 'react-router-dom'
import imgBank from '../../../asset/images/argent.png'


export default function NavbarPublic() {

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
        <Link to="/sign-in">
                <i className="fa fa-user-circle main-nav-item"></i>
                <p> Sign In </p>       
        </Link>
    </nav>
  )
}