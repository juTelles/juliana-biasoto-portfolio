// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';

function StickNote({ text, color, isHome, noteName, onClick, rotate }) {
  return (
    <div
      onClick={!isHome ? () => onClick(noteName) : ''}
      className={isHome ? styles.homeStickNoteDiv : styles.stickNoteDiv}>
      <div
        className={styles.stickNote}
        style={{ backgroundColor: color, transform: `rotate(${rotate})` }}>
        <div
          className={isHome ? styles.homeStickNoteGlue : styles.stickNoteGlue}>
        </div>
        <div
          className={
            isHome ? styles.homeStickNoteContent : styles.stickNoteContent
          }
        >
          <p
            className={isHome ? styles.homeStickNoteText : styles.stickNoteText}
          >
            {text}
          </p>
        </div>
      </div>
      <div className={styles.stickNoteShadow}></div>
    </div>
  );
}

export default StickNote;
