import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';

export const App = () => {
  const [movie, setMovie] = useState(moviesFromServer);

  function addNewMovie(newMovie: Movie) {
    setMovie([
      ...movie,
      newMovie,
    ]);
  }

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movie} />
      </div>
      <div className="sidebar">
        <NewMovie
          onAdd={(newMovie) => {
            addNewMovie(newMovie);
          }}
        />
      </div>
    </div>
  );
};
