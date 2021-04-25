// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import StickNote from '../../../sticknote/StickNote';
import styles from './styles.module.css';

function ResumeStickNotes({ handleClick, selectedResumeSection }) {

  const [ selected, setSelected ] = useState('')

  return (
    <div className={styles.resumeStickNotesDiv}>
      <StickNote
        text="Skills"
        noteName="skills"
        color="#fffa92"
        onClick={handleClick}
        rotate="3deg"
        selected={selectedResumeSection === 'skills' ? true : false}
        />
      <StickNote
        text="Educação"
        color="#f8bed8"
        noteName="education"
        onClick={handleClick}
        rotate="1deg"
        selected={selectedResumeSection === 'education' ? true : false}
        />
      <StickNote
        text="Projetos"
        color="#d5f8a5"
        noteName="projects"
        onClick={handleClick}
        rotate="-2deg"
        selected={selectedResumeSection === 'projects' ? true : false}
        />
      <StickNote
        text="PDF"
        color="#c8fbfc"
        noteName="pdf"
        onClick={handleClick}
        rotate="-1deg"
        selected={selectedResumeSection === 'pdf' ? true : false}
      />
    </div>
  );
}

export default ResumeStickNotes;