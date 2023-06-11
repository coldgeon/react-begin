import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovieApi = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovieApi();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Detail Loading..</h1>
      ) : (
        <div>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/movie">Movies</Link>
          </p>
          <h2>
            {movies.title}({movies.year})
          </h2>
          <p>
            genres:{' '}
            {movies.genres.map((genre) => (
              <span key={genre}>{genre}, </span>
            ))}
          </p>
          <img src={movies.medium_cover_image} alt={movies.title} />
          {movies.description_intro === '' ? (
            <h3>Summary isn't exist..</h3>
          ) : (
            <p>Summary: {movies.description_intro}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Detail;
