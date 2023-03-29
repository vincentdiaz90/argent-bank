import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import imgBank from '../../../asset/images/argent.png'
import { accountService } from '../../../_services/account.service'


export default function NavbarPrivate() {

    let navigate = useNavigate()

    const logout = () => {
        accountService.logout()
        navigate('/')
    }

  return (
    <nav className="main-nav">
        <Link to="/home" className="main-nav-item">      
            < img
                src={imgBank}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <Link to="/user">
            <i class="fa fa-user-circle"></i>
            <p>Tony</p>    
        </Link>
        <Link to="/home" className='main-nav-item'>
            <i class="fa fa-sign-out"></i>
            <p>Sign Out</p>
            <button onClick={logout}>Logout</button>    
        </Link>
    </nav>
  )
}