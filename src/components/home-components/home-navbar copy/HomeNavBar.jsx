// eslint-disable-next-line no-unused-vars
import react from 'react';
import StickNote from '../../sticknote/StickNote';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function HomeNavBar({ isHome }) {

  return (
     <div className={styles.homeNavNotesDiv}
  >
      <Link to="/about" className={styles.noteLink}>
        <StickNote
          isHome={isHome}
          text="Sobre Mim"
          noteName="about"
          color="#fffa92"
          rotate="2deg"
        />
      </Link>
      <Link to="/resume" className={styles.noteLink}>
        <StickNote
          isHome={isHome}
          text="Currículo"
          noteName="resume"
          color="#f8bed8"
          rotate="-2deg"
        />
      </Link>
      <Link to="/portfolio" className={styles.noteLink}>
        <StickNote
          isHome={isHome}
          text="Portfólio"
          noteName="portfolio"
          color="#d5f8a5"
          rotate="2deg"
        />
      </Link>
      <Link to="/contact" className={styles.noteLink}>
        <StickNote
          isHome={isHome}
          text="Contato e Links"
          noteName="contact"
          color="#c8fbfc"
          rotate="-2deg"

        />
      </Link>

  </div>
  )}

export default HomeNavBar;
