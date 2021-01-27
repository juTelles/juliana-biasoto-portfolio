// eslint-disable-next-line no-unused-vars
import react, { useState } from 'react';
import NavNotes from '../navnotes/NavNotes';
import styles from './styles.module.css'

function NavBar({ resume, about, portfolio, home, fromHome }) {
  return (
    <nav className={fromHome? styles.nav : styles.navHome}>
      <NavNotes
        resume={resume}
        about={about}
        portfolio={portfolio}
        home={home}
      />
    </nav>
  );
}

export default NavBar;
