import { NOW_PLAYING_API, API_OPTIONS } from '../utils/Constants';
import {addNowPlayingMovies} from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=> store.movies?.nowPlayingMovies)
 const getNowPlayingMovies = async ()=>{
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{ !nowPlayingMovies && getNowPlayingMovies()}, [])

} 

export default useNowPlayingMovies;