// import React from 'react'
import { useState, useRef } from 'react';
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  
  const handleButtonClick = () => {
    //Firstly Validate the Form data
    // console.log(email.current.value);

    const message = checkValidData(email.current.value, password.current.value, name.current.value);
    setErrorMessage(message);
    //If Email and Password are correct then proceede to SignIn/SignUp
  };

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                alt='logo' 
            />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className=' font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          
          {!isSignInForm && <input 
            ref = {name}
            type="text" 
            placeholder="Full Name" 
            className='p-4 my-4 w-full bg-gray-800 rounded-lg'
          />}
          <input 
            ref = {email}
            type="text" 
            placeholder="Enter Email or Number" 
            className='p-4 my-4 w-full bg-gray-800 rounded-lg'>
          </input>
          <input 
            ref = {password}
            type="password" 
            placeholder="Password" 
            className='p-4 my-4 w-full bg-gray-800 rounded-lg'>
          </input>
          <p className='text-red-500 font-bold py-2'>{errorMessage}</p>
          
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg +' onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;