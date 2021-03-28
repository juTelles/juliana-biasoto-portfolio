// eslint-disable-next-line no-unused-vars
import react, { Children, useEffect, useState } from 'react';
import styles from './styles.module.css';

function Container({children}) {

  return (
      <div className={styles.container}>
        {children}
      </div>
  );
}

export default Container;