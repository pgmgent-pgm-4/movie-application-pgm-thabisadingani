
import { small, unavailable } from "../../configImg/configImg";

import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

import styles from './Search.module.scss';

const SearchListSuggest  = ({ movie }) => {

  return (
    <li className={styles.projectlistItem} key={movie.id}>
      <Link className={styles.logoLink} to={ movie.title ? `${Routes.MOVIE_DETAILS.replace(':id', movie.id )}` : `${Routes.SERIE_DETAILS.replace(':id', movie.id )}`} >      
          <div className={styles.img}>
             <img src={movie.poster_path ? `${small}/${movie.poster_path}`: unavailable} alt={movie.name}  />
          </div>
        <p className={styles.title}>{ movie.title ? `${movie.title}` : `${movie.name}`}</p>   
      </Link>
    </li>
  )
};

export default SearchListSuggest ;