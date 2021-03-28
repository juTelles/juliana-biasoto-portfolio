// eslint-disable-next-line no-unused-vars
import react, { useState } from 'react';
import PinnedNote from '../pinned-note/PinnedNote';
import styles from './styles.module.css';

function MenuNotesBackground({ resume, about, portfolio, contact, home }) {
  return (
    <>
      {about && (
        <div className={`${styles.menuBackgroundNoteDiv} ${styles.aboutNote}`}>
          <PinnedNote color="#f5f5f5" noteName="about" shadowOpacity="0.1" />
        </div>
      )}
      {resume && (
        <div className={`${styles.menuBackgroundNoteDiv} ${styles.resumeNote}`}>
          <PinnedNote
            color="#f5f5f5"
            noteName="resume"
            shadowOpacity="0.1"
          />
        </div>
      )}
      {portfolio && (
        <div className={`${styles.menuBackgroundNoteDiv} ${styles.portfolioNote}`}>
        <PinnedNote
            color="#fdfeff"
            noteName="portfolio"
            shadowOpacity="0.1"

          />
        </div>
      )}
      {contact && (
        <div className={`${styles.menuBackgroundNoteDiv} ${styles.contactNote}`}>
        <PinnedNote color="#f5f5f5" noteName="contact" shadowOpacity="0.1"
 />
        </div>
      )}
      {home && (
        <div className={`${styles.menuBackgroundNoteDiv} ${styles.homeNote}`}>
        <PinnedNote color="#f5f5f5" noteName="contact" shadowOpacity="0.4"
/>
        </div>
      )}
    </>
  );
}

export default MenuNotesBackground;
