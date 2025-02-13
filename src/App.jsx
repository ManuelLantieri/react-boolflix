import { useContext, useState } from "react";
import { MovieContext } from "./context/MovieContext";

function App() {
  const { setMovies } = useContext(MovieContext);

  // stato della query di ricerca
  const [query, setQuery] = useState("");

  // chiamata api con query
  const handleSearch = async () => {
    const apiKey = "9284ae6835d4b85d3e8bf73ddb4ee5a8";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=it-IT`;

    const response = await fetch(url);
    const data = await response.json();

    // salvo il risultato ricerca in globale
    setMovies(data.results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Find your Film..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default App;
