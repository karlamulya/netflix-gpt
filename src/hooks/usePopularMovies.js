import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/Constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { POPULAR_PLAYING_API} from '../utils/Constants'

const usePopularMovies = () =>{
    const dispatch = useDispatch();

    const getPopularMovies =async()=>{
    const data = await fetch(POPULAR_PLAYING_API , API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json?.results)); 
    }
    useEffect(()=>{getPopularMovies()},[])

}

export default usePopularMovies;