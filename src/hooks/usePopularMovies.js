import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/Constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { POPULAR_PLAYING_API} from '../utils/Constants'
const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=> store.movies?.popularMovies)

    const getPopularMovies =async()=>{
    const data = await fetch(POPULAR_PLAYING_API , API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json?.results)); 
    }
    useEffect(()=>{ !popularMovies && getPopularMovies()},[])

}

export default usePopularMovies;