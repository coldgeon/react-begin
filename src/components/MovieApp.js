import { useState, useEffect } from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom';
import styles from '../styles/Movie.module.css';
import '../styles/Header.css';

function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const movieApi = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8'
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    movieApi();
  }, []);
  return (
    <div>
      <div class="headerBox">
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </div>
      {loading ? (
        <div class="headerBox">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className={styles.movieBox}>
          <div className={styles.movieContainer}>
            {movies.map((movie) => (
              <Movie
                id={movie.id}
                key={movie.id}
                coverImage={movie.medium_cover_image}
                title={movie.title}
                genres={movie.genres}
                summary={movie.summary}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieApp;
