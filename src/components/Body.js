import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { auth } from '../utils/firebase';
import {onAuthStateChanged } from "firebase/auth";
import  {addUser, removeUser } from '../utils/userslice';
import { useDispatch } from 'react-redux';



const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login/>
        },
        {
            path:'browse',
            element:<Browse/>
        }
    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;    
              console.log( uid, email, displayName, 'user details'); 
              dispatch(addUser({uid: uid, email:email, displayName:displayName}));
            } else {
                dispatch(removeUser());
            }
          });
    },[]);
  return (
    <div>
        <RouterProvider router={appRouter}>

        </RouterProvider>
    </div>
  )
}

export default Body