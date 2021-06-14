import {
  useEffect,
  useState
} from 'react';

const useFetch = ({endpoint, type = 'multi', input = '',  page = 1}) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_MOVIE_DB = `https://api.themoviedb.org/3/${endpoint}/${type}?api_key=f02cb535c0e59c5987d7c49644b9a744&append_to_response=videos&page=${page}&include_adult=false&query=${input}`;
                                      

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API_MOVIE_DB);
    
        if (!response.ok) {
          setError('There went something wrong, are you sure the API link is right?');
        }
        const json = await response.json();
        setData(json);

      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [API_MOVIE_DB]);




  return [data, isLoading, error];

}
export default useFetch;