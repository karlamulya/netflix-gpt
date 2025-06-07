import React, {act, useEffect} from 'react';
import { LOGO , USER_AVATAR, SUPPORTED_LANG} from '../utils/Constants';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import  {addUser, removeUser } from '../utils/userslice';
import { useDispatch } from 'react-redux';
import { toggleGptSearchValue } from '../utils/gptSlice';
import { changeLanguage } from '../utils/ConfigSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store=> store.user);  
  const showLanguageDropdown = useSelector((store)=> store.gpt?.showGptSearch)
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

const handleGptSearch = () =>{
      dispatch(toggleGptSearchValue());
}

const handleLangChange = (e) =>{
   dispatch(changeLanguage(e.target.value))
}
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <img className='w-40' src={LOGO}
        alt='logo'></img>
        {user &&(
        <div className='flex'>
          {showLanguageDropdown &&
          <select className='p-2 m-2 bg-gray-500 text-white' onChange={handleLangChange}>
            {SUPPORTED_LANG?.map((lang)=>
              <option key={lang?.identifier} value={lang?.identifier}>{lang?.name}</option>
            )}
          </select>}
          <button className='py-2 px-4 mx-2 my-2 bg-purple-800 text-white rounded-lg'
          onClick={handleGptSearch}>{showLanguageDropdown?'Home':'Gpt Search'}</button>
        <img className='w-12 h-12 p-2' src={USER_AVATAR}
        alt='user-avatar'></img>
        <h3 className='font-bold text-red-50'>{user?.displayName}</h3>
        <button className='font-bold text-red-50' onClick={handleSignOut}>Sign Out</button></div>)}

    </div>
  )
}

export default Header