import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import { accountService } from '../../../_services/account.service';

export default function SignIn() {

  let navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    username: 'steve@rogers.com',
    password: 'password456'
  })

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  
    // Soumission du formulaire
    const onSubmit = (e) => {
      e.preventDefault()
      console.log(credentials);

      axios.post('http://localhost:3001/api/v1/user/login',
          {body : JSON.stringify(credentials)}, 
          { headers: { "Content-Type": "application/json"} },
        )  
        .then(res => {
          console.log(res)
          accountService.saveToken(res.data.access_token)
          navigate('/user')
        })
        .catch(err => console.log(err))

      // accountService.login(credentials)
      //     .then(res => {
      //         // Sauvegarde du token et envoi vers admin
      //         accountService.saveToken(res.data.access_token)
      //         navigate('/admin', {replace: true})
      //     })
      //     .catch(error => console.log(error))
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" name="username" id="username"  value={credentials.username} onChange={onChange}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" name="password" id="password"  value={credentials.password} onChange={onChange}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"> Remember me </label>
          </div>

          <button className="sign-in-button">Sign In</button>

        </form>
      </section>
    </main>
  )

}