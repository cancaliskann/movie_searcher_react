// 9030ba7
import { useEffect } from "react";

import './index.css';
import SearchIcon from './search.svg'
const API_KEY = ''
const API_URL = 'http://omdbapi.com?apikey=' + API_KEY;

const movie1 ={
  
    "Title": "Batman",
    "Year": "1989",
    "imdbID": "tt0096895",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg"

}


function App() {
  const searchMovies = async (title) => {
    console.log('Calling searchMovies function with title:', title);
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log('Response data:', data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }


  useEffect(() => {
    searchMovies('BatMan');
  
  }, []);

  return (
    <div className="app">
      <h1> MovieTest </h1>
      <div className="search">
        <input 
        placeholder="Search for movies"
        value="Batman"
        onChange={() => {}}
        />

        <img src={SearchIcon} 
        alt="search"
        onClick={() => {}}
        />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p> {movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400' } alt={movie1.title} />
          </div>
          <div>
            <span>{movie1.Type } </span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
