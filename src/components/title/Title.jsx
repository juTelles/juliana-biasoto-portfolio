// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';

function Title({ text }) {
  return (
    <div className={styles.titleDiv}>
      <h1 className={styles.titleText}>{text}</h1>
    </div>
  );
}

export default Title;
