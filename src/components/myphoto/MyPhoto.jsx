// eslint-disable-next-line no-unused-vars
import react, { useState } from 'react';
import myPhoto from '../../img/polaroid-ju-nopin.png';
import Pin from '../pin/Pin';
import styles from './styles.module.css';

function MyPhoto({ margin, rotate, width }) {

  const [hover, setHover] =  useState(false);

  return (
    <div className={styles.photoDiv}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
      <div className={styles.pinDiv}>
        <Pin notPinned={hover? true : false}/>
      </div>
      <div
        className={styles.polaroidDiv}
        style={{ margin: margin, transform: `rotate(${rotate})`, width: width }}
      >
        <figure className={styles.photoFig}>
          <img className={styles.photo} src={myPhoto} alt="Juliana Biasoto" />
          <div className={styles.photoShadow}></div>
        </figure>
      </div>
    </div>
  );
}

export default MyPhoto;
