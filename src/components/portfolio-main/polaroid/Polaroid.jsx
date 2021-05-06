// eslint-disable-next-line no-unused-vars
import react, { useState } from 'react';
import Pin from '../../pin/Pin';
import styles from './styles.module.css';


function Polaroid({ margin, rotate, width, src, alt, linkTo }) {

  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.polaroidDiv}
      style={{ margin: margin, transform: `rotate(${rotate})`, width: width }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      >
    <a className={styles.polaroidLink} href={linkTo}>
      <div className={styles.pinDiv}>
      <Pin notPinned={hover? true : false}/>
      </div>
      <figure className={styles.polaroidFig}>
        <img className={styles.polaroid} src={src} alt={alt} />
        <div className={styles.polaroidShadow}></div>
      </figure>
    </a>
    </div>
  );
}

export default Polaroid;
