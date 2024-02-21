// Import necessary React components and hooks
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase';

// Functional component for the login page
const SignUp = (props) => {
    const navigate = useNavigate()
  // State variables to store email and password input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username,setUserName]=useState('')
const auth = getAuth(app)
  // Event handler for the login button click
  const handleLogin = () => {
    const displayName = username
      
    
    // Basic validation, you may want to add more robust validation logic
    if (email && password) {
      if(password.length <6){
        alert("Password must be at least 6 characters")
      }
      createUserWithEmailAndPassword(auth,email, password,displayName,{ headers: [ { key: 'Cross-Origin-Opener-Policy', value: 'same-origin', }, ],})
      .then(res => {
        navigate('/')
        alert('SignUp successful')
      })

    //   auth/email-already-in-use
      .catch(er=> {
        console.log(er)
        if(er.message.includes(" auth/email-already-in-use")){
            alert("Email already in use")
        }
      })
        sessionStorage.setItem('login',true)
    //   console.log('Login successful',sessionStorage.getItem('login'));
      
    } else {
      alert('Please enter both email and password')
      console.log('Please enter both email and password');
    }
  };

  return (
    <div className='flex flex-col items-center m-10 bg-slate-400 rounded-lg'>
      <h2 className='text-lg text-yellow-400 font-bold'>SignUP Page</h2>
      {/* Email input field */}
      <label>Username:</label>
      <input
      className='rounded-md border-black p-3 px-16'
      // style={{padding:'15px',borderRadius:'10px'}}
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label>Email:</label>
      <input
      className='rounded-md border-black p-3 px-16'
      // style={{padding:'15px',borderRadius:'10px'}}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Password input field */}
      <label>Password:</label>
      <input
      className='rounded-md border-black p-3 px-16'
      // style={{padding:'15px',borderRadius:'10px'}}
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Login button */}
      <button className='bg-amber-500 m-3 p-3 rounded-xl px-10 text-white'onClick={handleLogin}>SignUP</button>
    </div>
  );
};

export default SignUp;
