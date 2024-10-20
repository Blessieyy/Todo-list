import React, {useRef, useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function login() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleLogin = () => {
      navigate ('/todo')
    }



  return (
    <div className='container' style={{ marginTop: '10vh' }}>
            <form >
                <h2>Login to your account</h2>
                <h3>Welcome back!</h3>
                <div>
                    <label htmlFor='email' >Email address :</label>
                    <input onChange={e => { setEmail(e.target.value) }} type='email' id='email' />
                </div>
                <div >
                    <label htmlFor='password'>Password :</label>
                    <input onChange={e => { setPassword(e.target.value) }} type='password' id='password' />
                </div>
      
                <button onClick={handleLogin} >LOG IN</button>
                <p style={{ marginTop: "2vh" }}>Don't Have an Account? <Link to={'/register'}>Lets get you started!</Link></p>
            </form>
        </div>
  )
}


