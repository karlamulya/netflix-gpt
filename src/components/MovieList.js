import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movieList}) => {
    console.log(movieList,'movue');
    
  return (
    
    movieList && (<div className='px-6'>
        <h1 className='text-2xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex '>
        {Array.isArray(movieList) ?(movieList.map((movie)=>(
            <MovieCard key={movie?.id} posterPath ={movie?.poster_path}/>
        ))):'Error'}
        </div>
        </div>
    </div>
  ))
}

export default MovieList