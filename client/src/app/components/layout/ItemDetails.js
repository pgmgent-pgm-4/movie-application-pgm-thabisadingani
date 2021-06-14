import { FaStar , FaThumbsUp, FaLanguage } from "react-icons/fa";
import { small, large, unavailable } from "../../configImg/configImg";
import { CalculateRate, ShowYear } from "../helpers/helpers";

import styles from './ItemDetails.module.scss';

const ItemDetails = ({ item }) => {



  return (
      <article className={styles.itemlistItem} key={item.id} style={{ backgroundImage: `url(${large}/${item.poster_path})` }}>
        <div className={styles.wrapper}>
          <div className={styles.inner }>     
            <picture className={styles.picture}>
              <img src={item.poster_path ? `${small}/${item.poster_path}`: unavailable} alt={item.name} />
            </picture> 
            <div className={styles.details}>
                <h3>{ item.first_air_date ? `First Air | ${ShowYear(item.first_air_date)}` : `Release | ${ShowYear(item.release_date)}`}</h3>
                <h2 className={styles.title}>{ item.title ? `${item.title}` : `${item.name}`}</h2>
                <p className={styles.rating}> <span><FaStar size={20}  color="ffffff" /> {CalculateRate(item.vote_average)}</span>  <span className={styles.pipe}>|</span>  <span><FaThumbsUp size={20}  color="#ffffff" /> {item.popularity}</span> <span className={styles.pipe}>|</span> <span><FaLanguage size={25}  color="#ffffff" /> <span className={styles.language}>{item.original_language}</span> </span></p>
              <p>{item.overview}</p>
            </div>   
          </div>
        </div>
      </article>
  )
};

export default ItemDetails;