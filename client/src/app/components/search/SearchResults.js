import { useFetch } from '../../hooks';
import React from 'react';
import { Error, Loading } from '../layout';
import SearchListSuggest  from './SearchListSuggest';
import styles from './SearchResults.module.scss'

const SearchResults = ({ query }) => {

  const [searchResults, isLoading, error] =  useFetch({endpoint: 'search', input:`${query}`});
 
  return (
    error ? <Error>{error}</Error> : isLoading || !searchResults ? <Loading /> : 
    <ul className={styles.listItem}>
      {searchResults.results.map(item => {
            return (
                <li>
                  <SearchListSuggest key={item.id} movie={item} />
                </li>
            )
        })}
    </ul>
  )
}

export default SearchResults
