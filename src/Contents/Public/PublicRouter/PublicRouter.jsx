import React from 'react'
import { Routes, Route } from 'react-router-dom'

import  { Layout, Home, SignIn, SignOut, User, Error  } from '../../Public'

// import Home from '../Home/Home'
// import SignIn from '../SignIn/SignIn'
// import SignOut from '../SignOut/SignOut'
// import User from '../User/User'


//import Error from '../../Error/Error'

export default function PublicRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-out" element={<SignOut />} />
          <Route path="/user" element={<User />} />

          <Route path="*" element={<Error />} />

      </Route>
  </Routes>
  )
}
