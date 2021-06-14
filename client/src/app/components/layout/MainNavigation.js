import {
  Link
} from "react-router-dom";

import * as Routes from '../../routes';
import { useAuth } from '../../contexts/firebase/auth.context';

import styles from './MainNavigation.module.scss';
import { Search } from '../search';


const MainNavigation = () => {
const {currentUser, signOut} = useAuth();

  return (
    <nav>
      <div className={styles.nav}>
        <Link className={styles.logoLink} to={Routes.LANDING}><p className={styles.logo}><span>M</span>ovie<span>M</span>agic</p></Link>
        <Search className={styles.logoLink} />
        <ul>
          <li>
            <Link to={Routes.LANDING}>Home</Link>
          </li>
          <li>
            <Link to={Routes.MOVIES}>Movies</Link>
          </li>
          <li>
            <Link to={Routes.SERIES}>Series</Link>
          </li>
          <li className={styles.logOut}>
          {!!currentUser
          ? <button onClick={signOut}><img className={styles.user__avatar} src={currentUser.photoURL} alt={currentUser.email}/>Logout</button>
          : <Link to={Routes.AUTH_SIGN_IN}><span className={styles.logIn}>Sign In</span></Link>
          }    
        </li>
        <li>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;