import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "9284ae6835d4b85d3e8bf73ddb4ee5a8";

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: API_KEY,
            query: query,
            language: "it-IT",
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Errore nella ricerca del film", error);
    }
  };

  return (
    <div className="container">
      <h1>Search Movie</h1>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
