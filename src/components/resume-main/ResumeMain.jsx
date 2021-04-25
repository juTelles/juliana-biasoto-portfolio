// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import ResumeSections from './resume-components/resume-sections/ResumeSections';
import ResumeStickNotes from './resume-components/resume-sticknotes/ResumeStickNotes';

function ResumeMain() {
  const [selectedResumeSection, setSelectedResumeSection] = useState('skills');

  const handleResumeSectionChange = (name) => {
    setSelectedResumeSection(name);
  };
  return (
    <section>
      <div className={styles.mainSectionDiv}>
        <ResumeStickNotes
          handleClick={handleResumeSectionChange}
          selectedResumeSection={selectedResumeSection}
        />
        <div className={styles.resumeContentDiv}>
          <ResumeSections resumeSectionShowing={selectedResumeSection} />
        </div>
      </div>
    </section>
  );
}

export default ResumeMain;
