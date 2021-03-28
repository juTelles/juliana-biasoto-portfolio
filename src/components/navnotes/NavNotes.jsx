// eslint-disable-next-line no-unused-vars
import react from 'react';
import { Link } from 'react-router-dom';
import PinnedNote from '../pinned-note/PinnedNote';
import styles from './styles.module.css';

function NavNotes({ home, about, resume, portfolio, isHome, contact }) {
  return (
    <div
      className={
        isHome
          ? styles.homeNavNotesDiv
          : styles.navNotesDiv
      }
    >
      {home && (
        <Link to={"/home" || "/"} className={styles.noteLink}>
          <PinnedNote
            notPinned={!isHome}
            isHome={isHome}
            text="Home"
            noteName="home"
            rotate="4deg"
          />
        </Link>
      )}
      {about && (
        <Link to="/about" className={styles.noteLink}>
          <PinnedNote
            notPinned={!isHome}
            isHome={isHome}
            text="Sobre Mim"
            noteName="about"
            rotate="-3deg"
          />
        </Link>
      )}
      {resume && (
        <Link to="/resume" className={styles.noteLink}>
          <PinnedNote
            notPinned={!isHome}
            isHome={isHome}
            text={isHome? 'Currículo': 'Currí-culo'}
            noteName="resume"
            rotate="4deg"
          />
        </Link>
      )}
      {portfolio && (
        <Link to="/portfolio" className={styles.noteLink}>
          <PinnedNote
            notPinned={!isHome}
            isHome={isHome}
            text={isHome? 'Portifólio': 'Port-fólio'}
            noteName="portfolio"
            rotate="3deg"
          />
        </Link>
      )}
      {contact && (
        <Link to="/contact" className={styles.noteLink}>
          <PinnedNote
            notPinned={!isHome}
            isHome={isHome}
            text="Contact"
            noteName="contact"
            rotate="-2deg"
          />
        </Link>
      )}
    </div>
  );
}

export default NavNotes;
