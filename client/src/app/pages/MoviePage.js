
import { useFetch, useFetchSimilar, useFetchCredits } from '../hooks';
import { Error, Loading, ItemDetails, ListItem, Iframe } from '../components/layout';
import { useParams } from "react-router";
import { BaseLayout } from '../layouts';

import styles from './MoviePage.module.scss';
import { small, unavailable} from "../configImg/configImg";


const MoviePage = () => {
  const { id } = useParams();

  const [item, isLoading, error] =  useFetch({endpoint:'movie', type:`${id}`});
  const [item2] = useFetchSimilar({endpoint:'movie', type:`${id}`, similar: 'similar'})
  const [item3] = useFetchSimilar({endpoint:'movie', type:`${id}`, similar: 'videos'})
  const [item4] = useFetchCredits({endpoint:'movie', type:`${id}`, credits: 'credits'});


  return (
    error ? <Error>{error}</Error> : isLoading || !item || !item2 || !item3 || !item4 ? <Loading /> : 
    <BaseLayout>
      <div>
        <ItemDetails item={item} key={item.id} />
      </div>
      <div className={styles.content}>

      <h3>Cast Members</h3>
        <ul className={styles.carouselItem__img}>
          {item4.cast.length > 0 && item4.cast.slice(0,6).map(item => {
            return (
            <li key={item.id} >
                <div>
                  <img
                    src={item.profile_path ? `${small}/${item.profile_path}`: unavailable} alt={item.name}  
                  />
                </div>
                <b >{item?.name}</b>
            </li>
            ) 
          })}
        </ul>

      <h3 className={styles.content__title}>Trailer | {item.title}</h3>
        <Iframe key={item3.id} item3={item3}/>
        <h3 className={styles.content__title}>Similar Movies: </h3>
        <ul className={styles.content__inner}>
          {item2.results.length > 0 && item2.results.slice(0, 8).map(item => {
            return (
            <li key={item.id} >
                <ListItem key={item.id} item={item} />
            </li>
            ) 
          })}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default MoviePage;

