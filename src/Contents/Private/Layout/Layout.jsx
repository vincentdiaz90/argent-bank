import React from 'react'

import { Outlet } from 'react-router-dom'

import NavbarPrivate from '../../../Components/Private/NavbarPrivate/NavbarPrivate'

export default function Layout() {
    return (
        <div className="layout">
            <NavbarPrivate />
            <Outlet />
        </div>
    )
}