// eslint-disable-next-line no-unused-vars
import react from 'react';
import { Link } from 'react-router-dom';
import StickNote from '../sticknote/StickNote';
import styles from './styles.module.css';

function NavNotes({ home, about, resume, portfolio, isHome, inMainSection }) {
  return (
    <div
      className={
        isHome
          ? styles.homeNavNotesDiv
          : inMainSection
          ? styles.navNotesDivSideBar
          : styles.navNotesDiv
      }
    >
      {home && (
        <Link to="/" className={styles.noteLink}>
          <StickNote
            isHome={isHome}
            color="#cfb7f0"
            text="Home"
            noteName="home"
          />
        </Link>
      )}
      {about && (
        <Link to="/about" className={styles.noteLink}>
          <StickNote
            isHome={isHome}
            color="#FCCDFF"
            text="Sobre Mim"
            noteName="about"
          />
        </Link>
      )}
      {resume && (
        <Link to="/resume" className={styles.noteLink}>
          <StickNote
            isHome={isHome}
            color="#FFFAAE"
            text="Currí-culo"
            noteName="resume"
          />
        </Link>
      )}
      {portfolio && (
        <Link to="/portfolio" className={styles.noteLink}>
          <StickNote
            isHome={isHome}
            color="#c8e3ff"
            text="Port-fólio"
            noteName="portfolio"
          />
        </Link>
      )}
    </div>
  );
}

export default NavNotes;
