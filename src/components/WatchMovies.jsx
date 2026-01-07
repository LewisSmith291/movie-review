import React, { useState } from 'react'
import './watchMovies.css'
import Movie from './Movie.jsx'

export default function WatchMovies() {
  const [sortDrop, setSortDrop] = useState("");

  const sortingChange = (event) =>{
    setSortDrop(event.target.value);
  };
  return (
    <section id="movie-list">
      <header id="movie-list-headers" className="flex flex-col">
        <h2 className="">Popular</h2>
        <div id="filters" className="flex flex-row gap-20 items-center">
          <div id="ratings" className="flex flex-col">
            <h3>Ratings</h3>
            <ul className="age-ratings flex flex-row place-content-between">
              <li className="movie-filter-item hoverable">G</li>
              <li className="movie-filter-item hoverable">PG13</li>
              <li className="movie-filter-item hoverable">18+</li>
            </ul>
          </div>
          <select name="sorting-category" id="sort-by" className="movie-sorting"
              onChange={sortingChange} value={sortDrop}>
            <option id="default-value" disabled value="">-Sort By-</option>
            <option value="date">Release Date</option>
            <option value="rating">Public Rating</option>
            <option value="rating">Critic Rating</option>
          </select>
          <select name="ascending-or-descending" id="asc-desc" className="movie-sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie-container">
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
      </div>
    </section>
  )
}
