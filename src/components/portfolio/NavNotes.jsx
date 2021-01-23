// eslint-disable-next-line no-unused-vars
import react from 'react';
import { Link } from 'react-router-dom';
import StickNote from '../StickNote';

function NavNotes() {
  return (
    <div className="nav-notes-div">
      {/* <Link to="#HOME" className="nav-link" text="Home">
        <StickNote />
      </Link> */}
      <Link to="/about" className="note-link">
        <StickNote
          color="#FCCDFF"
          text="Sobre Mim"
          className="about-stick" />
      </Link>
      <Link to="/resume" className="note-link">
        <StickNote
          color="#FFFAAE"
          text="Currículo"
          className="resume-stick"
        />
      </Link>
      <Link to="/portfolio" className="note-link">
        <StickNote
          color="#c8e3ff"
          text="Portfólio"
          className="portfolio-stick"
        />
      </Link>
    </div>
  );
}

export default NavNotes;
