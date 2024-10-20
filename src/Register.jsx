import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState ('');
    const navigate = useNavigate()
    const handleLogin = () => {
      navigate ('/todo')
    }
  return (
    <div className='container' >
    <form >
        <h2>Welcome!</h2>
        <p>Create your Account here:</p>
       
        <label htmlFor='name' >Full Name :</label>
            <input onChange={e => { setName(e.target.value) }} type='email' id='email' />
        <br/>
            <label htmlFor='email' >Email address :</label>
            <input onChange={e => { setEmail(e.target.value) }} type='email' id='email' />
        <br/>
            <label htmlFor='password'>Password :</label>
            <input onChange={e => { setPassword(e.target.value) }} type='password' id='password' />
        <br/>
        <button onClick={handleLogin} >LOG IN</button>
        <p style={{ marginTop: "2vh" }}>Have an account?<Link to={'/login'}>Login</Link></p>
        
    </form>
    </div>
  )
}
