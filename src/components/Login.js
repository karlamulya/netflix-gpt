import React, { useState } from 'react';
import Header from './Header';
import { BG_URL } from '../utils/Constants';

const Login = () => {

    const [isSignForm, setIsSignForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignForm(!isSignForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
          <img src={BG_URL}
                alt='logo'></img></div>
                <form className='w-3/12 absolute p-12 bg-opacity-80 my-36 m-auto right-0 left-0 text-white'>
                <h1 className='font-bold text-3xl py-4'>{isSignForm ? 'Sign In': 'Sign Up'}</h1>
                {!isSignForm && (<input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-600 rounded-lg'/>)}
                    <input type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-600 rounded-lg'/>
                    <input type='password' placeholder='Password' className='p-2  my-4 w-full bg-gray-600 rounded-lg'/>
                    <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignForm ? 'Sign In': 'Sign Up'}</button>
                    <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignForm ? 'Are you new to netflix? Sign Up Now': 'Already  Register Sign In now'}
                        </p>
                </form>
    </div>
  )
}

export default Login