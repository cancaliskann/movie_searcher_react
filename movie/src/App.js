// 9030ba7
import { useEffect } from "react";
const API_KEY = 'apikeyhere'
const API_URL = 'http://omdbapi.com?apikey=' + API_KEY;


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
    searchMovies('spiderman');
  
  }, []);

  return (
    <div className="App">
     test 123
    </div>
  );
}

export default App;
