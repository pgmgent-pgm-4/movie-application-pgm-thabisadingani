import { AuthProvider, FirebaseProvider, FirestoreProvider } from './contexts/firebase';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeContext } from "./libs/context";
import { useState } from "react";

import * as Routes from './routes';

import styles from './App.css';
import {HomePage, MoviesPage, MoviePage, SeriesPage, SeriePage, SearchPage, SignInPage, NotFoundPage} from './pages';


function App() {
  
  const [theme, setTheme] = useState('Dark');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className={styles.app} data-theme={theme}>
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <Router basename={'movie-application-pgm-thabisadingani'}>
              <Switch>
                  <Route exact path={Routes.LANDING} component={ HomePage }/>
                  <Route from={Routes.HOME} to={Routes.LANDING}/>
                  <Route exact path={Routes.MOVIE_DETAILS} component={ MoviePage }/>
                  <Route exact path={Routes.SEARCH} component={ SearchPage }/>
                  <Route exact path={Routes.MOVIES} component={ MoviesPage }/>
                  <Route exact path={Routes.SERIES} component={ SeriesPage }/>
                
                  <Route exact path={Routes.SERIE_DETAILS} component={ SeriePage }/>
                  <Route exact path={Routes.AUTH_SIGN_IN} component={ SignInPage }/>
                  <Route path="/404" component={NotFoundPage} />
                  <Redirect to="/404" />
                  
              </Switch>
            </Router>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;