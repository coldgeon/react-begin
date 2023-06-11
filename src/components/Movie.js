import ProPtypes from 'prop-types';
// import { Link } from 'react-router-dom';
import styles from '../styles/Movie.module.css';

function Movie({ id, title, genres, coverImage, summary }) {
  return (
    <div className={styles.movieItem}>
      <h3 className={styles.movieTitle}>
        {/* <Link to={`/movie/${id}`}>{title}</Link> */}
        {title}
      </h3>

      <img className={styles.movieImg} src={coverImage} alt={title} />
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
