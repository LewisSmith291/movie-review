import React, { useState, useEffect } from 'react'
import './watchMovies.css'
import Movie from './Movie.jsx'

export default function WatchMovies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopular();
  },[]);

  async function fetchPopular(){
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=0cf6688493ea5dbc8729ce4252146b7b");
    const data = await response.json();
    setMovies(data.results);
  }

  const [sortDrop, setSortDrop] = useState("");
  const sortingChange = (event) =>{
    setSortDrop(event.target.value);
  };

  const movieOut = (movies.map(movie => 
    <li><Movie key={movie.id} movie={movie}/></li>
  ));
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
        {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
      </div>
    </section>
  )
}
