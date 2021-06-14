
import { useFetch } from '../../hooks';
import styles from './LandingList.module.scss';
import { Error, Loading, ListItem } from '../layout';

const TrendingList = () => {
 
  const [movies, isLoading, error] =  useFetch({endpoint:'trending', type:'all/day'});

  return (
    error ? <Error>{error}</Error> : isLoading || !movies ? <Loading /> :
      <div className={styles.inner}>  
        <h3 className={styles.title}>Trending</h3> 
      <div className={styles.content}>
      {movies.results.length > 0 && movies.results.slice(0, 4).map(item => {
           return (
              <div key={item.id} >
                 <ListItem key={item.id} item={item} />
              </div>
            ) 
      })}
      </div>
    </div>
  )
};

export default TrendingList;