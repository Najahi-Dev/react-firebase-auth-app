import React from 'react';
import { useState } from 'react';
import { useNavigate, Link, Links } from 'react-router-dom';

export default function Signup() {
    

  return (
    <form className='card'>
        <h2>Sign Up</h2>
        {/* {err && <p className='error'>{err}</p>} */}
        <input type="text" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button className='click' type="submit">Create Account</button>
        <p>Already have an account? <a href="./Login.jsx">Login</a></p>
    </form>
  )
}
