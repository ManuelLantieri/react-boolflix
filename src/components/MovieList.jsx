import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Titolo Originale: {movie.original_title}</p>
              <p>Lingua: {movie.original_language}</p>
              <p>Voto: {movie.vote_average}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nessun film trovato.</p>
      )}
    </div>
  );
};

export default MovieList;
