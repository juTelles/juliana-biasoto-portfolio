// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import ResumeSections from './resume-sections/ResumeSections';
import ResumeStickNotes from './resume-navbar/ResumeNavBar';

function ResumeMain({ text }) {
  const [selectedResumeSection, setSelectedResumeSection] = useState('skills');

  const handleResumeSectionChange = (name) => {
    setSelectedResumeSection(name);
  };
  return (
    <section>
      <div className={styles.mainSectionDiv}>
        <ResumeStickNotes
          text={text}
          handleClick={handleResumeSectionChange}
          selectedResumeSection={selectedResumeSection}
        />
        <div className={styles.resumeContentDiv}>
          <ResumeSections
            text={text}
            resumeSectionShowing={selectedResumeSection}
          />
        </div>
      </div>
    </section>
  );
}

export default ResumeMain;
