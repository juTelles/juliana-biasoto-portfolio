// eslint-disable-next-line no-unused-vars
import react from 'react';
import { Link } from 'react-router-dom';
import StickNote from '../sticknote/StickNote';
import styles from './styles.module.css';


function NavNotes({ home, about, resume, portfolio }) {
  return (
    <div className="nav-notes-div">
      {home && (
        <Link to="/about" className="note-link">
          <StickNote color="#FCCDFF" text="Sobre Mim" className="about-stick" />
        </Link>
      )}
      {about && (
        <Link to="/about" className="note-link">
          <StickNote color="#FCCDFF" text="Sobre Mim" className="about-stick" />
        </Link>
      )}
      {resume && (
        <Link to="/resume" className="note-link">
          <StickNote
            color="#FFFAAE"
            text="Currículo"
            className="resume-stick"
          />
        </Link>
      )}
      {portfolio && (
        <Link to="/portfolio" className="note-link">
          <StickNote
            color="#c8e3ff"
            text="Portfólio"
            className="portfolio-stick"
          />
        </Link>
      )}
    </div>
  );
}

export default NavNotes;
