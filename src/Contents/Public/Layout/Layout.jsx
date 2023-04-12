import React from 'react'

import { Outlet } from 'react-router-dom'

import NavbarPublic from '../../../Components/Navbar/Navbar'

export default function Layout() {
    return (
        <div className="layout">
            <NavbarPublic />
            <Outlet />
        </div>
    )
}