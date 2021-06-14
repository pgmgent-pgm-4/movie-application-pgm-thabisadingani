
import styles from './HomePage.module.scss';
import { BaseLayout } from '../layouts';
import { SerieList } from '../components/series';
//import { BaseLayout } from '../components/movies';

const SeriesPage = () => {
  return (
    <BaseLayout>
      <div className={styles.main}>
        <h2>SERIE</h2>
        <SerieList />
      </div>
    </BaseLayout>
  );
};

export default SeriesPage;