import React from 'react';
import styles from './Button.module.scss';

const Button = ({ type = 'secondary', text = ' Play Trailer' }) => {

  return (
    <button className={styles[type]}>
      {text}
    </button>
  )

}

export default Button;