import { NOW_PLAYING_API, API_OPTIONS } from '../utils/Constants';
import {addNowPlayingMovies} from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

 const getNowPlayingMovies = async ()=>{
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{getNowPlayingMovies()}, [])

} 

export default useNowPlayingMovies;