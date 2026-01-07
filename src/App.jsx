import { useState } from 'react'
import './index.css'
import WatchMovies from './components/WatchMovies.jsx'
function App() {

  return (
    <>
    <header id="header" className="flex flex-row w-full place-content-between">
      <h1 className="self-center">Movie Review</h1>
      <nav className="self-center">
        <ul className="list-none flex flex-row gap-5">
          <li className="hoverable"><a href="#">Home</a></li>
          <li className="hoverable"><a href="#">Highest Rated</a></li>
          <li className="hoverable"><a href="#">New Releases</a></li>
        </ul>
      </nav>
    </header>
    <WatchMovies/>
    </>
  )
}

export default App
