
import { useFetch } from '../../hooks';
import {
  useState,
} from 'react';
import { Error, Loading, ListItem } from '../layout';
import styles from './MovieList.module.scss';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";



const MovieList = () => {

  const [count, setCount] = useState(1);


  const [movies, isLoading, error] =  useFetch({endpoint:'discover', type:'movie', page:`${count}`});
  
  return (
    error ? <Error>{error}</Error> : isLoading || !movies ? <Loading /> : 
    <div>
      <div className={styles.content}>
      {movies.results.map(item => {
            return (
              <li key={item.id}>
                  <ListItem key={item.id} item={item} />
              </li>
            )
      })}
      </div>
      <div className={styles.pagination}>
        <button  onClick={() => (( count > 1) ? setCount(count - 1) : ' ')}><FaAngleDoubleLeft size={35}  color="#ff7800" /></button>
        <p className={styles.pagination__count}>{count}</p> 
        <button onClick={() => setCount(count + 1)}><FaAngleDoubleRight size={35}  color="#ff7800" /></button>
       </div>
    </div>
  )
};

export default MovieList;