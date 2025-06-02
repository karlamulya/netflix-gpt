import React from 'react';
import { TMDB_IMAGE} from '../utils/Constants'

const MovieCard = ({posterPath}) => {    
  return (
    <div className='w-48 pr-4'>
        <img alt="movie" src = {TMDB_IMAGE+ posterPath}></img>
    </div>
  )
}

export default MovieCard