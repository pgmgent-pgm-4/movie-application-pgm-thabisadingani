import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

import { admin, app, db, generateTimestamps } from './firebase';
import firebase from 'firebase';

//const GDMGENT_API_CASES = 'https://www.gdm.gent/static/data/cases.json';

(async () => {
  // Get movies collection
  let collectionRef = db.collection('movies');

  // Create a movie
  const createmovie = (movie) => {
    // Add a document via movie object
    const data = {

      ...generateTimestamps()
    };

    collectionRef.doc(movie.id.toString()).set(data).then(documentReference => {
      console.log(`Added movie.`);
    });
  };

  // Create movies via promises
  const createmovies = async () => {

    let movieData= [];
  
     for (let i = 1; i < 6; i++) {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f02cb535c0e59c5987d7c49644b9a744&append_to_response=videos&page=${i}&include_adult=false`);
      const jsonData = await response.json();
      movieData = [...movieData, ...jsonData.results];

     }
    db.collection('counters').doc('movies').set({numAmount: movieData.length}, {merge: true});
     
    const promises = [];
    movieData.forEach(movie => {
      promises.push(createmovie(movie));
    });
    return await Promise.all(promises);
  };

  await createmovies(); 
})();