// eslint-disable-next-line no-unused-vars
import react, { useState } from 'react';
import MenuNotesBackground from '../menu-back-notes/MenuBackNotes';
import NavNotes from '../navnotes/NavNotes';
import PinnedNote from '../pinned-note/PinnedNote';
import styles from './styles.module.css';

function NavBar({ resume, about, portfolio, home, contact }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClickMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.menuDiv}>
          <PinnedNote
            text="Menu"
            noteName="menu"
            onClick={handleClickMenu}
            rotate="1deg"
            margin="-7px auto"
          />
        {!menuIsOpen && (
            <MenuNotesBackground
              home={home}
              about={about}
              resume={resume}
              portfolio={portfolio}
              contact={contact}
            />
        )}
      </div>
      {menuIsOpen && (
        <div className={styles.navNotesDiv}>
          <NavNotes
            resume={resume}
            about={about}
            portfolio={portfolio}
            home={home}
            contact={contact}
          />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
