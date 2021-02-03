// eslint-disable-next-line no-unused-vars
import react, { useState } from 'react';
import NavNotes from '../navnotes/NavNotes';
import styles from './styles.module.css'

function NavBar({ resume, about, portfolio, home, isHome }) {
  return (
    <nav className={isHome? styles.navBarHome : styles.navBar}>
      <NavNotes
        resume={resume}
        about={about}
        portfolio={portfolio}
        home={home}
        isHome={isHome}
      />
    </nav>
  );
}

export default NavBar;
