// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import Paper from '../../../paper/Paper';
import styles from './styles.module.css';

function ResumeEducation({ text }) {
  let id = 0;
  return (
    <Paper title={text.title} sectionClassName="education">
      <ul className={styles.resumeList}>
        {text.list.map((item) => {
          id += 1;
          return (
          <li key={id} style={{order:{id}}}>
            {
            item.map((i, index) => {
              return (
              index === 0 ?
              <p style={{fontWeight:"bold"}}>{i}</p>
              : <p>{i}</p>
               )
            })
            }
          </li>
          )
        })}
      </ul>
    </Paper>
  );
}

export default ResumeEducation;
