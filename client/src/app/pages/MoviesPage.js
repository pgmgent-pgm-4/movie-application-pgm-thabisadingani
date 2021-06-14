
import styles from './HomePage.module.scss';
import { BaseLayout } from '../layouts';
import { MovieList ,  } from '../components/movies';


const MoviesPage = () => {
  return (
    <BaseLayout>
      <div className={styles.main}>
        <h2>MOVIE</h2>
        <MovieList />
      </div>
    </BaseLayout>
  );
};

export default MoviesPage;