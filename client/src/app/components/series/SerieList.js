
import { useFetch } from '../../hooks';
import {
  useState,
} from 'react';
import { Error, Loading , ListItem } from '../layout';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import styles from './SerieList.module.scss';

const SerieList = () => {

  const [count, setCount] = useState(1);
  
  const [series, isLoading, error] =  useFetch({endpoint:'discover', type:'tv', page:`${count}`});
 
  return (
    error ? <Error>{error}</Error> : isLoading || !series ? <Loading /> : 
    <div>
      <div className={styles.content}>
          
        {series.results.map(item => {

          return (
              <li>
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

export default SerieList;