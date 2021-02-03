// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import ResumePage from './resume-paper/ResumePaper';
import ResumeStickers from './resume-sidebar/ResumeStickers';
import NavBar from '../navbar/NavBar';

function ResumeMain({ resume, about, portfolio, home, isHome, inMainSection }) {
  return (
    <section className="elements-sections main-section">
      <div className={styles.mainSectionDiv}>
        <div className={styles.resumeSideBarDiv}>
          <NavBar
            resume={resume}
            about={about}
            portfolio={portfolio}
            home={home}
            isHome={isHome}
            inMainSection={inMainSection}
          />
          <ResumeStickers />
        </div>
          <ResumePage />
      </div>
    </section>
  );
}

export default ResumeMain;
