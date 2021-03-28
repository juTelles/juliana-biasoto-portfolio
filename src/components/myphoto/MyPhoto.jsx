// eslint-disable-next-line no-unused-vars
import react from 'react';
import myPhoto from '../../img/polaroid-ju.png';
import styles from './styles.module.css';

function MyPhoto({ margin, rotate, width }) {
  return (
    <div
      className={styles.photoDiv}
      style={{ margin: margin, transform: `rotate(${rotate})`, width: width }}
    >
      <figure className={styles.photoFig}>
        <img className={styles.photo} src={myPhoto} alt="Juliana Biasoto" />
        <div className={styles.photoShadow}></div>
      </figure>
    </div>
  );
}

export default MyPhoto;
