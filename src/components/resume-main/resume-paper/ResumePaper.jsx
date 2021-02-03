// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { resumeText } from './resume-text';

function ResumePaper() {
  const string = resumeText.pt.education;

  return (
    <div className={styles.resumePaperDiv}>
      <div className={styles.resumePaper}>
        <div className={styles.pinsDiv}>
          <div className={styles.pin}></div>
          <div className={styles.pin}></div>
        </div>
        <div className={styles.resumeContentDiv}>
          <h2 className={styles.resumeTitle}>{string.title}</h2>
          <ul className={styles.resumeList}>
            {string.text.map((item) => {
              return item === '' ? (
                <li>
                  <br />
                </li>
              ) : (
                <li key={item}>{item}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumePaper;
