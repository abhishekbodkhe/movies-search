import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import './App.css'; // Add your global CSS styles here

function App() {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({
    language: '',
    country: '',
    genre: ''
  });

  useEffect(() => {
    // Fetch data from movies.json
    fetch('/data/movies.json') // Adjust the path if necessary
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Filter movies based on selected filters
  const filteredMovies = movies.filter(movie => {
    return (
      (filters.language === '' || movie.movielanguages.includes(filters.language)) &&
      (filters.country === '' || movie.moviecountries.includes(filters.country)) &&
      (filters.genre === '' || movie.moviegenres.includes(filters.genre))
    );
  });

  // Event handler to update filters
  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  return (
    <div >
     <div>
      <h1 className='title'>Movie Mania</h1>

      {/* Filter Controls */}

      
      <div className="filter-controls ">
        <label >
          Language:
          <select  value={filters.language} onChange={e => handleFilterChange('language', e.target.value)}>
            <option  value="">All</option>
            <option  value="Hindi">Hindi</option>
            <option  value="Gujarati">Gujarati</option>
            <option  value="Marathi">Marathi</option>
            <option  value="Bhojpuri">Bhojpuri</option>
            <option value="Tamil">Tamil</option>
            <option  value="Telugu">Telugu</option>
            <option  value="Kannada">Kannada</option>
            <option  value="Malayalam">Malayalam</option>
            <option  value="English">English</option>
            <option  value="Punjabi">Punjabi</option>
            <option  value="Oriya">Oriya</option>
            <option  value="Chinese">Chinese</option>
            <option  value="Spanish">Spanish</option>
            <option  value="Korean">Korean</option>
            <option  value="Japanese">Japanese</option>
                              
          </select>
        </label>

        <label >
          Country:
          <select value={filters.country} onChange={e => handleFilterChange('country', e.target.value)}>
            <option value="">All</option>
            <option value="India">India</option>
            <option value="France">France</option>
            <option value="Kuwait">Kuwait</option>
            <option value="United States">United States</option>
            <option value="Ireland">Ireland</option>
            <option value="Singapore">Singapore</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Germany">Germany</option>
            

            {/* Add other country options */}
          </select>
        </label>

        <label >
          Genre:
          <select value={filters.genre} onChange={e => handleFilterChange('genre', e.target.value)}>
            <option value="">All</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
            <option value="Horror">Horror</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Crime">Crime</option>   
            <option value="Romance">Romance</option>
            <option value="Animation">Animation</option>
            
            {/* Add other genre options */}
          </select>
        </label>
      </div>
      </div>
    
      {/* Display Filtered Movies */}
      <div className="movie-container app">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.imdbmovieid} movie={movie} />
        ))}
      </div>

      <footer className="footer">
        <p>&copy; 2024 Abhishek Bodkhe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
