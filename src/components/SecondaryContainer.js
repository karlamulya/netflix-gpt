import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);

  
  return (
    movies?.nowPlayingMovies && (<div className=' bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title = {'Now Playing'} movieList= {movies.nowPlayingMovies}/>
      <MovieList title = {'Top Rated'} movieList= {movies.popularMovies}/>
      <MovieList title = {'Horror'} movieList= {movies?.nowPlayingMovies}/>
      <MovieList title = {'Telugu'} movieList= {movies?.nowPlayingMovies}/>
      <MovieList title = {'Hindi'} movieList= {movies?.nowPlayingMovies}/></div>
    </div>
  ))
}

export default SecondaryContainer