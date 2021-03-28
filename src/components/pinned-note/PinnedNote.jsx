// eslint-disable-next-line no-unused-vars
import react from 'react';
import Pin from '../pin/Pin';
import styles from './styles.module.css';

function PinnedNote({
  text,
  color,
  onClick,
  notPinned,
  rotate,
  margin
}) {
  return (
    <div onClick={onClick} className={styles.pinnedNoteDiv}>
      <div
        className={styles.pinnedNote}
        style={{ backgroundColor: color, transform: `rotate(${rotate})` }}
      >
        <div className={styles.pinnedNoteContent}>
          <Pin notPinned={notPinned} />
          <p className={styles.pinnedNoteText} style={{margin: margin}}>{text}</p>
        </div>
      </div>
      <div className={styles.pinnedNoteShadow}></div>
    </div>
  );
}

export default PinnedNote;
