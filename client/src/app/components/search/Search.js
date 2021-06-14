
import styles from './Search.module.scss';
import React from 'react';
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import {
  useState
} from 'react';
import SearchResults from './SearchResults';

const Search = () => {

  let history = useHistory();
  const [query, setQuery] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      //alert("Please enter a Value");
      return false;
    }
    history.push({
        pathname: '/search',
        search: '?query='+ query,
        state: { data: query }
    });


 };

  return (
      <div>
        <form className={styles.search} onSubmit={ handleOnSubmit } >
          <input 
            type="text"
            value={query}
            placeholder={"search..."}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button> <FaSearch size={20} color="#01B4E9" /></button>
        </form>
          { query &&  <SearchResults key={query.id} query={query}/>}
      </div>
  )
};

export default Search;

