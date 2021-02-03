// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';


function StickNote({ text, color, isHome, noteName }) {

  const classNameBuilder = noteName => {
    let className;
    switch (noteName) {
      case 'about':
        className = styles.aboutNote;
        break;
      case 'portfolio':
        className = styles.portfolioNote;
        break;
      case 'resume':
        className = styles.resumeNote;
        break;
      default:
        className = styles.homeNote;
        break;
    }
    return className;
  }

  return (
    <div className={isHome ? styles.homeStickNoteDiv : styles.stickNoteDiv}>
      <div
        className={classNameBuilder(noteName)}
        style={{ backgroundColor: color }}
      >
        <div className={isHome ? styles.homeStickNoteGlue : styles.stickNoteGlue}></div>
        <p className={isHome ? styles.homeStickNoteText : styles.stickNoteText}>{text}</p>
      </div>
    </div>
  );
}

export default StickNote;
