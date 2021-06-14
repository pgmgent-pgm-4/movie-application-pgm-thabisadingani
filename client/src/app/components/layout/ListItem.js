
import { small, unavailable} from "../../configImg/configImg";

import { Link } from 'react-router-dom';
import { FaStar, FaThumbsUp } from "react-icons/fa";
import * as Routes from '../../routes';
import styles from './ListItem.module.scss';
import { CalculateRate} from "../helpers/helpers";

const ListItem = ({ item }) => {

  return (
    <article className={styles.projectlistItem} key={item.id}> 
      <Link to={ item.title ? `${Routes.MOVIE_DETAILS.replace(':id', item.id )}` : `${Routes.SERIE_DETAILS.replace(':id', item.id )}`}>    
      <picture className={styles.image} >
        <img src={item.poster_path ? `${small}/${item.poster_path}`: unavailable} alt={item.name}  />
      </picture>
      <div className={styles.title}>
        <h3 className={styles.title}>{ item.title ? `${item.title}` : `${item.name}`}</h3>
      </div>
      </Link>   
      <footer className={styles.meta}>
          <p className={styles.numViews}><FaStar size={25}  color="yellow"/> <span >{CalculateRate(item.vote_average)}</span></p>
          <p><FaThumbsUp size={25}  color="#01b4e9" /> <span>{item.popularity}</span></p>
      </footer>   
    </article>
  )
};

export default ListItem;
