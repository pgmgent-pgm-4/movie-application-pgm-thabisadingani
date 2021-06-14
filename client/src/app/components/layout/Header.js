import MainNavigation from './MainNavigation';
import { useContext } from "react";
import styles from './Header.module.scss';
import { ThemeContext } from "../../libs/context";


const Header = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <header className={styles.header}>
      <MainNavigation  theme={theme}/>
    </header>
  );
};

export default Header;