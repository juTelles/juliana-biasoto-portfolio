// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StickNote from '../../../../components/sticknote/StickNote';
import styles from './styles.module.css';

function ResumeStickNotes({ handleClick, selectedResumeSection, text }) {
  return (
    <div className={styles.resumeStickNotesDiv}>
      <StickNote
        text={text.skills.title}
        noteName="skills"
        color="#fffa92"
        onClick={handleClick}
        rotate="3deg"
        selected={selectedResumeSection === 'skills' ? true : false}
      />
      <StickNote
        text={text.education.title}
        color="#f8bed8"
        noteName="education"
        onClick={handleClick}
        rotate="1deg"
        selected={selectedResumeSection === 'education' ? true : false}
      />
      <StickNote
        text={text.projects.title}
        color="#d5f8a5"
        noteName="projects"
        onClick={handleClick}
        rotate="-2deg"
        selected={selectedResumeSection === 'projects' ? true : false}
      />
      <Link to={'/contact' || '/'} className={styles.noteLink}>
        <StickNote
          text="PDF"
          color="#c8fbfc"
          noteName="pdf"
          onClick={handleClick}
          rotate="-1deg"
          selected={selectedResumeSection === 'pdf' ? true : false}
        />
      </Link>
    </div>
  );
}

export default ResumeStickNotes;
