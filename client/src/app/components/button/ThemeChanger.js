import { ThemeContext } from "../../libs/context";
import { useContext } from "react";
import styles from './Button.module.scss';
import React from 'react';

const ThemeChanger = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  const handleThemeChange = (e) => {
    e.preventDefault();
    setTheme(theme === 'light'? 'dark' : 'light');
  }

    return(
        <button className={styles.themeChange} onClick={handleThemeChange}>
            <span role="img" aria-label="switch theme">
              {theme === 'light'? '🌞' : '🔅'}
            </span>
        </button>
    )
}

export default ThemeChanger;