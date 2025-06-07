import React from 'react';
import {BG_URL} from '../utils/Constants'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector((store)=> store.config?.lang)
  return (
    <div className='pt-[5%] flex justify-center'>
         <div className='absolute -z-10'>
                  <img src={BG_URL}
                        alt='logo'></img></div>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey]?.gptSearchMovieplaceHolder}></input>
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langKey]?.search}</button>
        </form> 
    </div>
  )
}

export default GptSearchBar