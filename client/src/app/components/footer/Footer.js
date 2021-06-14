import React from 'react';
import styles from './Header.module.scss';

const Header = ({ children}) => {

  return (
    <button className={styles[type]}>
      {text}
    </button>
  )

}

export default Header;