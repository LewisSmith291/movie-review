import React, { useState } from 'react'
import './movies.css'
export default function Movies() {
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
            <option value="date">Date</option>
            <option value="rating">Rating</option>
          </select>
          <select name="ascending-or-descending" id="asc-desc" className="movie-sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
    </section>
  )
}
