import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearchValue = useSelector((store)=> store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header/>
      {showGptSearchValue && showGptSearchValue ? <GptSearch/>: 
      <><MainContainer/>
        <SecondaryContainer/>
        </>}
      
     
    </div>
  )
}

export default Browse