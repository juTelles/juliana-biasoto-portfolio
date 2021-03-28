// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import ResumeSections from './resume-components/resume-sections/ResumeSections';
import ResumeStickNotes from './resume-components/resume-sticknotes/ResumeStickNotes';

function ResumeMain() {

  const [resumePaperShowing, setResumePaperShowing] = useState('skills');

 const handleResumePaperChange = (name) => {
  setResumePaperShowing(name)
 }
  return (
    <section>
      <div className={styles.mainSectionDiv}>
        <ResumeStickNotes handleClick={handleResumePaperChange} />
        <div className={styles.resumeContentDiv}>
        <ResumeSections resumePaperShowing={resumePaperShowing}/>
        </div>
      </div>
    </section>
  );
}

export default ResumeMain;
