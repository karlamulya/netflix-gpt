import React, { useRef, useState } from 'react';
import Header from './Header';
import { BG_URL } from '../utils/Constants';
import checkValidData from '../utils/Validate';

const Login = () => {

    const [isSignForm, setIsSignForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);


    const toggleSignInForm = ()=>{
        setIsSignForm(!isSignForm);
    }

    const handleButtonClick = ()=>{

        console.log(email, password, 'data')
        //validate form data
        const message = checkValidData(email.current.value, password.current.value, fullName.current.value);
        seterrorMessage(message)
        console.log(message,'message')
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
          <img src={BG_URL}
                alt='logo'></img></div>
                <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-gray-400 my-36 m-auto right-0 left-0 text-white'>
                <h1 className='font-bold text-3xl py-4'>{isSignForm ? 'Sign In': 'Sign Up'}</h1>
                {!isSignForm && (<input type='text' ref={fullName} placeholder='Full Name' className='p-2 my-4 w-full bg-gray-600 rounded-lg'/>)}
                    <input type='text' ref={email} placeholder='Email Address' className='p-2 my-4 w-full bg-gray-600 rounded-lg'/>
                    <input type='password' ref={password} placeholder='Password' className='p-2  my-4 w-full bg-gray-600 rounded-lg'/>
                    <p className='text-red-500 text-xl py-2'>{errorMessage}</p>
                    <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignForm ? 'Sign In': 'Sign Up'}</button>
                    <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignForm ? 'Are you new to netflix? Sign Up Now': 'Already  Register Sign In now'}
                        </p>
                </form>
    </div>
  )
}

export default Login