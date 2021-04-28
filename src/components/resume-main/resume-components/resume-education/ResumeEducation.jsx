// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import Paper from '../../../paper/Paper';
import Sticker from '../../../sticker/Sticker';
import styles from './styles.module.css';

function ResumeEducation({ text }) {

  let id = 0;
  let innerId = 0;
  return (
    <div className="styles.resumeEducationDivContent">
      <Sticker
        text={text.title}
        fontSize="1.2rem"
        margin="0.5rem auto 0 auto"
        innerPadding="0.3rem"
        fontColor="#e20000"
        innerBorderColor="#e20000"
        innerBorderSize="0.3rem"
        outerBorderSize="0rem"
      />
      <ul className={styles.resumeList}>
        {text.list.map((item) => {
          id += 1;
          return (
            <li key={id}>
              <Paper sectionClassName="education" pinColor="random">
                {item.map((i, index) => {
                  innerId += 1;
                  return index === 0 ? (
                    <p key={innerId} style={{ fontWeight: 'bold' }}>
                      {i}
                    </p>
                  ) : (
                    <p key={innerId}> {i} </p>
                  );
                })}
              </Paper>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ResumeEducation;
