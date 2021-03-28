// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import Paper from '../paper/Paper';
import styles from './styles.module.css';
import { aboutText } from './aboutText';
import Frame from '../frame/Frame';

function AboutMain() {
  const text = aboutText.pt;

  return (
    <section>
      <div className={styles.mainAboutDiv}>
        <div className={styles.aboutPaperDiv}>
          <Paper color="#dbc3f3" pinColor="purple" className={styles.paperContentDiv}>
            <div className={styles.paperHeader}>
            <h2 className={styles.aboutPaperTitle}>Juliana Biasoto</h2>
            <Frame/>
            </div>
            <div className={styles.paperMainContent}>
            <p className={styles.aboutPaperText}>{text.text}</p>
            <div className={styles.bottomFrameAndDate}>
            <Frame rotate="180deg"/>
            <p>{text.date}</p>
            </div>
            </div>
          </Paper>
        </div>
      </div>
    </section>
  );
}

export default AboutMain;
