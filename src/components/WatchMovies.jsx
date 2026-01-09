import React, { useState, useEffect } from 'react'
import './watchMovies.css'
import Movie from './Movie.jsx'
import MovieFilters from './MovieFilters.jsx';

export default function WatchMovies() {

  const [movies, setMovies] = useState([]);


  const [pageNum, setPageNum] = useState(1);

  function changePage(pageNum){

  }

  useEffect(() => {
    fetchTop();
  },[]);

  async function fetchTop(){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2Y2Njg4NDkzZWE1ZGJjODcyOWNlNDI1MjE0NmI3YiIsIm5iZiI6MTc2Nzc5NDEzMC45MzI5OTk4LCJzdWIiOiI2OTVlNjVkMjQyMTRhYWZhODZjZmQ0OTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dD62ZYgFoEsULnqcftC0aHyxroG0cRhZwo7v1gwUvek',
      }
    };
    
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNum}`, options);
    const data = await response.json();
    console.log(response);
    setMovies(data.results);
    setFilteredMovies(data.results);
  }

  /* Rating filter*/
  const [giveRating, setGiveRating] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState([]);
  function handleFilter(rating){
    if (rating == giveRating){
      setGiveRating(0);
      setMovies(filteredMovies);
    }
    else {
      setGiveRating(rating);
      const filtered = filteredMovies.filter(movie => movie.vote_average > rating);
      setMovies(filtered);
    }
  }

  const [sortDrop, setSortDrop] = useState("");
  const sortingChange = (event) =>{
    setSortDrop(event.target.value);
  };

  return (
    <section id="movie-list flex flex-col justify-center text-center">
      <header id="movie-list-headers" className="flex flex-col">
        <h2 className="">Popular</h2>
        <div id="filters" className="flex flex-row gap-10 items-center">
          <MovieFilters giveRating={giveRating} handleFilter={handleFilter} ratings={[2,3,4,5,6,7,8]}/>
          <select name="sorting-category" id="sort-by" className="movie-sorting"
              onChange={sortingChange} value={sortDrop}>
            <option id="default-value" disabled value="">-Sort By-</option>
            <option value="date">Release Date</option>
            <option value="rating">Rating</option>
          </select>
          <select name="ascending-or-descending" id="asc-desc" className="movie-sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <p className="text-3xl ">Page 1</p>
      <div className="movie-container">
        {movies.length >0 ? movies.map(movie => <Movie key={movie.id} movie={movie}/>) :
          <p className="text-3xl">No movies match current filters</p>}
      </div>
    </section>
  )
}
