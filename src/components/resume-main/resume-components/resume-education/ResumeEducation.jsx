// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import Paper from '../../../paper/Paper';
import styles from './styles.module.css';

function ResumeEducation({ text }) {

  let id = 0;
  return (
    <Paper title={text.title}>
        <ul className={styles.resumeList}>
          {text.text.map((item) => {
            id += 1;
            return item === '' ? (
              <li key={id}>
                <br />
              </li>
            ) : (
              <li key={id}>{item}</li>
            );
          })}
        </ul>
    </Paper>
  );
}

export default ResumeEducation;
