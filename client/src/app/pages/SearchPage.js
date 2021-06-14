import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useFetch } from '../hooks';
import {useState} from 'react';
import { Error, Loading, ListItem } from '../components/layout';
import styles from './HomePage.module.scss';
import styled from './SearchPage.module.scss';
import { BaseLayout } from '../layouts';

import {useLocation} from "react-router-dom";


const SearchPage = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get('query');
  
  const [count, setCount] = useState(1);

  const [searchResults, isLoading, error] =  useFetch({endpoint: 'search', input:`${query}`, page:`${count}`});

  return (
    <BaseLayout>
      {
        error ? <Error>{error}</Error> : isLoading || !searchResults ? <Loading /> : 
          <div className={styles.main} >
          <h2>Search results: [<i>{query}</i>]</h2>
          <div className={styled.content}>
          {searchResults.results.map(item => {
            return(
                <li key={item.id}>
                  <ListItem key={item.id} item={item} /> 
                </li>
              )
            })}
            </div>
            <div className={styled.pagination}>
              <button  onClick={() => (( count > 1) ? setCount(count - 1) : ' ')}><FaAngleDoubleLeft size={35}  color="#ff7800" /></button>
              <p className={styled.pagination__count}>{count}</p> 
              <button onClick={() => setCount(count + 1)}><FaAngleDoubleRight size={35}  color="#ff7800" /></button>
            </div>
        </div>
      }
    </BaseLayout>
    )
  };

export default SearchPage;


