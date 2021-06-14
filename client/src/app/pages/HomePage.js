import styles from './HomePage.module.scss';

import { BaseLayout } from '../layouts';

import { TrendingList, PopularSerieList, PopularMovieList } from '../components/landing';
import { Hero } from '../components/layout';

const HomePage = () => {
  return (
    <BaseLayout>
      <Hero />
      <div className={styles.main}>
        <TrendingList />
        <PopularSerieList />
        <PopularMovieList />
      </div>
    </BaseLayout>
  );
};

export default HomePage;