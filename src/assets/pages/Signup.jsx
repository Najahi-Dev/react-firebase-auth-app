import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
    
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      navigate('/');
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <form className='card' onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {err && <p className='error'>{err}</p>}
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} required placeholder='Email'/>
      <input type="password" value={pass} onChange={e => setPass(e.target.value)} required placeholder='Password'/>
        <button className='click' type="submit">Create Account</button>
        <p>Already have an account?<Link to="./Login.jsx"></Link></p>
    </form>
  )
}
