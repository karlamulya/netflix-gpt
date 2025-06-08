import React, { useRef } from 'react';
import {BG_URL, API_OPTIONS, SEARCH_MOVIE} from '../utils/Constants'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector((store)=> store.config?.lang);
    const searchText = useRef(null);
    const dispact = useDispatch()
    const searchMovieTmdb = async (movie) =>{
      const data = await fetch(SEARCH_MOVIE+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
      const json = await data.json();      
      return json.results;
    }
    const handleGptSearchClick = async ()=>{
      const query = "Act as a movie recommendation system and suggest some movies for query :"+searchText?.current?.value + "only give me name of 5 movies with comma separated like the example results given head. Example Result: Bahubali, Mirchi, Varsham, Salaar, Kalki"
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });
      const gpMovieList = gptResults?.choices[0]?.message?.content.split(",");
      const data = gpMovieList.map((movieName)=> searchMovieTmdb(movieName));
      const tmdbMoviesList = await Promise.all(data);
      dispact(addGptMovieResult({movieNames:gpMovieList, movieResults: tmdbMoviesList}))
    }


  return (
    <div className='pt-[5%] flex justify-center'>
         <div className='fixed -z-10'>
                  <img src={BG_URL}
                        alt='logo'></img></div>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={e => e.preventDefault()}>
            <input type='text' className='p-4 m-4 col-span-9' ref={searchText} placeholder={lang[langKey]?.gptSearchMovieplaceHolder}></input>
            <button onClick={handleGptSearchClick} className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langKey]?.search}</button>
        </form> 
    </div>
  )
}

export default GptSearchBar