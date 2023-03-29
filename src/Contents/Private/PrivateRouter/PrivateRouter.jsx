import React from 'react'
import { Routes, Route } from 'react-router-dom'

import  { Layout, Home, SignOut, User  } from '../../Private'
import Error from '../../Error/Error'

export default function PrivateRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>

          <Route index element={<User />} />

          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/sign-out" element={<SignOut />} />

          <Route path="*" element={<Error />} />

      </Route>
    </Routes>
  )
}