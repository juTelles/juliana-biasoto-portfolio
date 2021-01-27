// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';


function Sticker( { text, className } ) {
  return (
    <div className={styles.stickerDiv} >
      <div className={styles.sticker}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export default Sticker;