import {MOVIES_VIDEO_API, API_OPTIONS} from '../utils/Constants'
import { useDispatch } from 'react-redux';
import { addTraileVideo } from '../utils/movieSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) =>{    
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(MOVIES_VIDEO_API+movieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        const trailer = json?.results.filter((video)=> video?.type === "Trailer");
        const finalTrailer = trailer.length ? trailer[0] : json.results[0];
        dispatch(addTraileVideo(finalTrailer))

    }
    useEffect(()=>{getMovieVideos()}, [])
}

export default useMovieTrailer;