// eslint-disable-next-line no-unused-vars
import react from 'react';
import myPhoto from '../../img/pollaroid-ju.png';
import styles from './styles.module.css';

function MyPhoto() {
  return (
    <div className={styles.photoDiv}>
      <figure className={styles.photoFig}>
        <img
          className={styles.photo}
          src={myPhoto}
          alt="Juliana Biasoto"
        />
      </figure>
    </div>
  );
}

export default MyPhoto;