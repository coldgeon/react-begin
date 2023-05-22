import styles from '../App.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.main}>
      <h1>Here is the Home!</h1>
      <ul>
        <li>
          <Link to="/movie">MovieApp</Link>
        </li>
        <li>
          <Link to="/cointracker">CoinTrackerApp</Link>
        </li>
        <li>
          <Link to="/todolist">TodoApp</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
