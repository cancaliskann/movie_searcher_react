// 9030ba7
import { useEffect, useState } from "react";

import './index.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
const API_KEY = '9030ba7'
const API_URL = 'http://omdbapi.com?apikey=' + API_KEY;




function App() {
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    console.log('Calling searchMovies function with title:', title);
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies (data.Search);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovies(searchTerm);
    }
  };

  useEffect(() => {
    searchMovies('BatMan');
  
  }, []);

  return (
    <div className="app">
      <h1> Search Movies </h1>
      <div className="search">
        <input 
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value) }
        onKeyPress={handleKeyPress}
        />

        <img src={SearchIcon} 
        alt="search"
        onClick={() => searchMovies(searchTerm) }
        />
      </div>

      {movies?.length > 0
        ?(
          <div className="container">
            {movies.map( (movie) => (
              <MovieCard movie ={movie} />
            ))}
          </div>  
        ) : (
          <div className="empty">
            <h2> No movies found </h2>
          </div>  
        )}
    </div>
  );
}

export default App;
