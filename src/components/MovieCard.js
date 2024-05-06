import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.moviemainphotos[0]} alt={movie.movietitle} />
      <div className="movie-details">
        <h2>{movie.movietitle}</h2>
        <p>IMDb ID: {movie.imdbmovieid}</p>
        <p>Languages: {movie.movielanguages.join(', ')}</p>
        <p>Countries: {movie.moviecountries.join(', ')}</p>
        <p>Genres: {movie.moviegenres.join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieCard;
