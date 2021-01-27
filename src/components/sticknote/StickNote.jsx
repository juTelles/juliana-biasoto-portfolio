// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';

function StickNote( { text, color, className } ) {
  return (
    <div className={styles.stickNoteDiv} >
      <div className={styles.stickNote} style={{backgroundColor: color}}>
        <div className={styles.stickNoteGlue}></div>
        <p className=[noteText">{text}</p>
      </div>
    </div>
  );
}

export default StickNote;
