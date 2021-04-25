// eslint-disable-next-line no-unused-vars
import react, { useState } from 'react';
import styles from './styles.module.css';

function StickNote({
  text,
  color,
  isHome,
  noteName,
  onClick,
  rotate,
  selected,
}) {
  const handleClick = (noteName) => {
    onClick(noteName);
  };
  const selectedClass = isHome?
  'home'
  : selected
  ? 'selected' : '';
  const homeClass = isHome ? 'home' : '';
  return (

    <div
      onClick={!isHome ? () => handleClick(noteName) : ''}
      className={`${styles.stickNoteDiv} ${styles[selectedClass]}`}
    >
      <div
        className={styles.stickNote}
        style={{ backgroundColor: color, transform: `rotate(${rotate})` }}
      >
        <div
          className={`${styles.stickNoteGlue} ${styles[homeClass]}`}
        ></div>
        <div
          className={`${styles.stickNoteContent} ${styles[homeClass]}`}
        >
          <p
            className={`${styles.stickNoteText} ${styles[homeClass]}`}
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
