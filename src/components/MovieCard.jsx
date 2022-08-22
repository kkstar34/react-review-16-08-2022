import React from 'react'
import './MovieCard.css';

function MovieCard({movie}) {
  return (
    <div className="movie-card">
    <div className="img-container">
        <img src={movie.posterUrl} alt=""/>
    </div>
        
        <h3>{movie.name}</h3>
    </div>
  )
}

export default MovieCard