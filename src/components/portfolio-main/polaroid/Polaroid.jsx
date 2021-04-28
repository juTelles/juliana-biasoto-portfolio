// eslint-disable-next-line no-unused-vars
import react from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Polaroid({ margin, rotate, width, src, alt, linkTo }) {
  return (
    <div
      className={styles.polaroidDiv}
      style={{ margin: margin, transform: `rotate(${rotate})`, width: width }}
      >
    <a className={styles.polaroidLink} href={linkTo}>
      <figure className={styles.polaroidFig}>
        <img className={styles.polaroid} src={src} alt={alt} />
        <div className={styles.polaroidShadow}></div>
      </figure>
    </a>
    </div>
  );
}

export default Polaroid;
