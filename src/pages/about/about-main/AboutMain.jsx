// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import Paper from '../../../components/paper/Paper';
import styles from './styles.module.css';
import Frame from '../../../components/frame/Frame';

function AboutMain({ text }) {

  return (
    <section>
      <div className={styles.mainAboutDiv}>
        <div className={styles.aboutPaperDiv}>
          <Paper
            color="#dbc3f3"
            pinColor="purple"
            sectionClassName="about"
          >
            <div className={styles.paperContent}>
              <div className={styles.paperHeader}>
                <h2 className={styles.aboutPaperTitle}>Juliana Biasoto</h2>
                <Frame />
              </div>
              <div className={styles.paperMainContent}>
                <p className={styles.aboutPaperText}>{text.text}</p>
                <div className={styles.bottomFrameAndDate}>
                  <Frame rotate="180deg" />
                  <p>{text.date}</p>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </section>
  );
}

export default AboutMain;
