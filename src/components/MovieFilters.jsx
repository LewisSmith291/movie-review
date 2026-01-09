import React from 'react'

export default function MovieFilters({giveRating, handleFilter, ratings}) {
  return (
    <div id="ratings" className="flex flex-col">
      <h3>Ratings Filter:</h3>
      <ul className="age-ratings flex flex-row place-content-between gap-2">
        {ratings.map(rating => <li key={rating} className={giveRating===rating ?'movie-filter-item hoverable active-filter' : 
        'movie-filter-item hoverable' } onClick={() => handleFilter(rating)}>{rating}+</li>)}
      </ul>
    </div>
  )
}
