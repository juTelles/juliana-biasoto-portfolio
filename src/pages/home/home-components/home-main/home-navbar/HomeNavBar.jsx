// eslint-disable-next-line no-unused-vars
import react from 'react';
import StickNote from '../../../../../components/sticknote/StickNote';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function HomeNavBar({ isHome, text }) {

  return (
     <div className={styles.homeNavNotesDiv}
  >
      <Link to="/about" className={styles.noteLink}>
        <StickNote
          isHome={isHome}
          text={text.aboutStickNote}
          noteName="about"
          color="#fffa92"
          rotate="2deg"
        />
      </Link>
      <Link to="/resume" className={styles.noteLink}>
        <StickNote
          isHome={isHome}
          text={text.resumeStickNote}
          noteName="resume"
          color="#f8bed8"
          rotate="-2deg"
        />
      </Link>
      <Link to="/portfolio" className={styles.noteLink}>
        <StickNote
          isHome={isHome}
          text={text.portfolioStickNote}
          noteName="portfolio"
          color="#d5f8a5"
          rotate="2deg"
        />
      </Link>
      <Link to="/contact" className={styles.noteLink}>
        <StickNote
          isHome={isHome}
          text={text.contactStickNote}
          noteName="contact"
          color="#c8fbfc"
          rotate="-2deg"

        />
      </Link>

  </div>
  )}

export default HomeNavBar;
