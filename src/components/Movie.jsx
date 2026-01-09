import React from 'react'
import PropTypes from 'prop-types' 
import './Movie.css'

export default function Movie({movie}) {
  const tmdbLink = 'https://www.themoviedb.org/movie/' + movie.id
  return (
    <a href={tmdbLink} className='movie'>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="movie-img" alt="movie-image"></img>
      <p className="movie-detail movie-name">{movie.original_title}</p>
      <p className="movie-detail movie-rating">{Math.round(movie.vote_average * 10)/10} / 10</p>
    </a>
  )
};