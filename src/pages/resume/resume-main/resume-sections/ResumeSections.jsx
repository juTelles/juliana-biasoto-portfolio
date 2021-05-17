// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import ResumeSkills from './resume-skills/ResumeSkills';
import ResumeEducation from './resume-education/ResumeEducation';
import ResumeProjects from './resume-projects/ResumeProjects';

function ResumeSections({ resumeSectionShowing, text }) {

  return (
    <div className={styles.resumeContent}>
      {resumeSectionShowing === 'education' ? (
        <ResumeEducation text={text.education} />
      ) : resumeSectionShowing === 'projects' ? (
        <ResumeProjects text={text.projects} />
      ) : (
        <ResumeSkills text={text.skills} />
      )}
    </div>
  );
}

export default ResumeSections;
