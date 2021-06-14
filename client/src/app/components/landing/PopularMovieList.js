// import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks';

import styles from './LandingList.module.scss';
import { Error, Loading, ListItem } from '../layout';

const PopularMovieList = () => {
 
  const [movies, isLoading, error] =  useFetch({endpoint:'movie', type:'popular'});

  return (
    error ? <Error>{error}</Error> : isLoading || !movies ? <Loading /> :
      <div className={styles.inner}>  
        <h3 className={styles.title}>Popular Movies</h3> 
      <div className={styles.content}>
      {movies.results.length > 0 && movies.results.slice(12, 16).map(item => {
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

export default PopularMovieList;