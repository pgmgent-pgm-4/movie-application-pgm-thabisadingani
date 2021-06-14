
import { useFetch } from '../../hooks';
import styles from './Hero.module.scss';
import { Error, Loading} from '../layout';
import { small, large , unavailable } from "../../configImg/configImg";
import { FaStar, FaLanguage, FaThumbsUp } from "react-icons/fa";
import { CalculateRate, ShowYear } from "../helpers/helpers";


import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

const Hero = () => {
 
  const [movies, isLoading, error] =  useFetch({endpoint:'movie', type: 'popular'});

  // const showYear = (year) => {
  //  return  year.slice(0, 4);
  // }

  return (
    error ? <Error>{error}</Error> : isLoading || !movies ? <Loading /> :
      <div className={styles.inner}>  
      {movies.results.length > 0 && movies.results.slice(7, 8).map(movie => {
           return (
             <section key={movie.id} className={styles.content} style={{ backgroundImage: `url(${large}/${movie.poster_path})` }}>
               <div className={styles.hero}>
                <div className={styles.hero__content}>
                  <article>
                    <div className={styles.button}>
                    <div className={styles.details}>
                      <h3>{ movie.first_air_date ? `First Air | ${ShowYear(movie.first_air_date)}` : `Release | ${ShowYear(movie.release_date)}`}</h3>
                      <Link to={ movie.title ? `${Routes.MOVIE_DETAILS.replace(':id', movie.id )}` : `${Routes.SERIE_DETAILS.replace(':id', movie.id )}`}> <h2>{ movie.title ? `${movie.title}` : `${movie.name}`}</h2></Link>
                      <p className={styles.rating}> <span><FaStar size={20}  color="ffffff" /> {CalculateRate(movie.vote_average)}</span>  <span className={styles.pipe}>|</span>  <span><FaThumbsUp size={20}  color="#ffffff" /> {movie.popularity}</span> <span className={styles.pipe}>|</span> <span><FaLanguage size={25}  color="#ffffff" /> <span className={styles.language}>{movie.original_language}</span> </span></p>
                      <p className={styles.overview}>{movie.overview}</p>
                    </div>  
                    <Link className={styles.button} to={ movie.title ? `${Routes.MOVIE_DETAILS.replace(':id', movie.id )}` : `${Routes.SERIE_DETAILS.replace(':id', movie.id )}`}>Watch Trailer</Link>
                    </div>
                    </article>
                    <Link to={ movie.title ? `${Routes.MOVIE_DETAILS.replace(':id', movie.id )}` : `${Routes.SERIE_DETAILS.replace(':id', movie.id )}`}>
                    <article className={styles.img}>
                      <img src={movie.poster_path ? `${small}/${movie.poster_path}`: unavailable} alt={movie.name} />
                    </article>
                  </Link>  
                </div>
              </div>
            </section>
            ) 
      })}
    </div>
  )
};

export default Hero;