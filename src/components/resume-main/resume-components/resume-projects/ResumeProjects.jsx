// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Paper from '../../../paper/Paper';
import Sticker from '../../../sticker/Sticker';

function ResumeProjects({ text }) {

  let id = 0;
  return (
    <>
    <Sticker text={text.title}
      fontSize="1.2rem"
      margin="0.5rem auto 0 auto"
      innerPadding="0.3rem"
      fontColor="#e20000"
      innerBorderColor="#e20000"
      innerBorderSize="0.3rem"
      outerBorderSize="0rem"
      />
    <div className={styles.projectsDiv}>
    {text.projects.map((project) => {
    id += 1;
    return (
      <Paper sectionClassName="project">
        <div className={styles.projectList}>
          {project === '' ? (
            <div key={id} className={styles.emptyProject}>
              <br />
            </div>
          ) : (
            <div key={id} className={styles.project}>
              <h5>{project.title}</h5>
              <p>{project.description}</p>
            </div>
          )}
        </div>
      </Paper>
    );
  })};
  </div>
  </>
  )}

export default ResumeProjects;

// text,
// outerBorderColor,
// outerBorderSize,
// innerBorderColor,
// innerPadding,
// fontColor,
// backgroundColor,
// fontSize,
// width,
// rotate,
// fontFamily,
// margin,
// onClick,
// name