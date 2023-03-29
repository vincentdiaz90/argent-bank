import React from 'react'
import { Routes, Route } from 'react-router-dom'

import  { Layout, Home, SignIn, User  } from '../../Public'
import Error from '../../Error/Error'

export default function PublicRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User />} />

          <Route path="*" element={<Error />} />

      </Route>
  </Routes>
  )
}
