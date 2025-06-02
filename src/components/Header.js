import React, {useEffect} from 'react';
import { LOGO , USER_AVATAR} from '../utils/Constants';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import  {addUser, removeUser } from '../utils/userslice';
import { useDispatch } from 'react-redux';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store=> store.user);  
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;    
          dispatch(addUser({uid: uid, email:email, displayName:displayName}));
          navigate('/browse');
        } else {
            dispatch(removeUser());
            navigate('/');
        }
      });

      return () => unsubscribe();
},[]);
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <img className='w-40' src={LOGO}
        alt='logo'></img>
        {user &&(
        <div className='flex'>
        <img className='w-12 h-12 p-2' src={USER_AVATAR}
        alt='user-avatar'></img>
        <h3 className='font-bold text-red-50'>{user?.displayName}</h3>
        <button className='font-bold text-red-50' onClick={handleSignOut}>Sign Out</button></div>)}

    </div>
  )
}

export default Header