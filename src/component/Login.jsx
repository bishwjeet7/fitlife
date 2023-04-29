import React, { useState } from 'react';
import Footer from './Footer';
import axios from 'axios';

export default function Signup() {

  const [text,setText] = useState('');
  const [password,setPassword] = useState('');

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      text,password
    }
    const formDataJSON = JSON.stringify(data);
    console.log(formDataJSON)
    try {
      const response = await fetch("http://localhost:9800/login",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:formDataJSON
      })
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required value={text} onChange={(e)=>setText(e.target.value)} />
          <input type="password" name="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
        <a href="/sendOtp">Forgot Password</a>
      </div>
      <Footer/>
    </>
  )
}
