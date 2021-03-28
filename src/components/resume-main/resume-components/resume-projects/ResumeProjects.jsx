// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Paper from '../../../paper/Paper';
import PageTitle from '../../../page-title/PageTitle';

function ResumeProjects({ text }) {

  let id = 0;
  return (
    <div className={styles.projectDiv}>
    <PageTitle text={text.title} fontSize="28px" alignText="center" width="90%" margin="0px auto"/>
    {text.projects.map((project) => {
    id += 1;
    return (
      <Paper>
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
  )}

export default ResumeProjects;
