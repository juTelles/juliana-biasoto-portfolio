// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import StickNote from '../../../sticknote/StickNote';
import styles from './styles.module.css';

function ResumeStickNotes({ handleClick }) {
  return (
    <div className={styles.resumeStickNotesDiv}>
      <StickNote
        text="Skills"
        noteName="skills"
        color="#fffa92"
        onClick={handleClick}
        rotate="3deg"
        />
      <StickNote
        text="Educação"
        color="#f8bed8"
        noteName="education"
        onClick={handleClick}
        rotate="1deg"
        />
      <StickNote
        text="Projetos"
        color="#d5f8a5"
        noteName="projects"
        onClick={handleClick}
        rotate="-2deg"
        />
      <StickNote
        text="PDF"
        color="#c8fbfc"
        noteName="pdf"
        onClick={handleClick}
        rotate="-1deg"
      />
    </div>
  );
}

export default ResumeStickNotes;