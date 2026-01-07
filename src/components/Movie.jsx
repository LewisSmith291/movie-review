import React from 'react'
import './Movie.css'

export default function Movie
() {
  return (
    <a href="#" className='movie'>
      <img src="../src/assets/scott-pilgrim-poster.jpg" className="movie-img" alt="movie-image"></img>
      <p className="movie-detail movie-name">Scott Pilgrim vs. the World</p>
      <p className="movie-detail movie-date">25 August 2010</p>
      <p className="movie-detail movie-rating">IMDb - 7.5/10</p>
    </a>
  )
}
