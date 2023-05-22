import ProPtypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, genres, coverImage, summary }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>

      <img src={coverImage} alt={title} />
    </div>
  );
}

Movie.propTypes = {
  id: ProPtypes.number.isRequired,
  coverImage: ProPtypes.string.isRequired,
  title: ProPtypes.string.isRequired,
  genres: ProPtypes.arrayOf(ProPtypes.string).isRequired,
  summary: ProPtypes.string.isRequired,
};

export default Movie;
