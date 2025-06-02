import React, { useRef, useState } from 'react';
import Header from './Header';
import { BG_URL,USER_AVATAR } from '../utils/Constants';
import checkValidData from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userslice';


const Login = () => {
    const navigate = useNavigate();
    const [isSignForm, setIsSignForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);
    const dispatch = useDispatch()

    const email = useRef(null);
    const password = useRef(null);
    const displayName = useRef(null);


    const toggleSignInForm = ()=>{
        setIsSignForm(!isSignForm);
    }

    const handleButtonClick = ()=>{
        //validate form data
        const message = checkValidData(email?.current?.value, password?.current?.value, displayName?.current?.value);
        seterrorMessage(message)
        if(message) return;
        //Sign In Sign Up

        if(!isSignForm){
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value,displayName?.current?.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential?.user;              
              if(user){
                updateProfile(user, {
                    displayName: displayName?.current?.value, photoURL: USER_AVATAR
                  }).then(() => {
                    const {uid, email, displayName} = auth.currentUser;
                    dispatch(addUser({uid: uid, email:email, displayName:displayName}))
                  }).catch((error) => {
                    seterrorMessage(error.errorMessage)
                  });
              }
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorMessage(errorMessage);
              // ..
            });
        }else{
            signInWithEmailAndPassword(auth,email?.current?.value, password?.current?.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential?.user;

            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorMessage(errorMessage);
            });
        }

    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
          <img src={BG_URL}
                alt='logo'></img></div>
                <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-gray-400 my-36 m-auto right-0 left-0 text-white'>
                <h1 className='font-bold text-3xl py-4'>{isSignForm ? 'Sign In': 'Sign Up'}</h1>
                {!isSignForm && (<input type='text' ref={displayName} placeholder='Full Name' className='p-2 my-4 w-full bg-gray-600 rounded-lg'/>)}
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