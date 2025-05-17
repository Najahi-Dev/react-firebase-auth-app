import React from 'react'

export default function Login() {
  return (
    <form className='card'>
        <h2>Login</h2>
        {/* {err && <p className='error'>{err}</p>} */}
        <input type="text" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button className='click' type="submit">Login</button>
        <p>Don't have an account? <a href="./Signup.jsx">Sign Up</a></p>
    </form>
  )
}
