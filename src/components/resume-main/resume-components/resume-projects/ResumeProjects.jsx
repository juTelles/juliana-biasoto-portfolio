// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Paper from '../../../paper/Paper';
import Sticker from '../../../sticker/Sticker';

function ResumeProjects({ text }) {
  let id = 0;
  return (
    <div className="styles.resumeProjectsDivContent">
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
      <div className={styles.projectsDiv}>
        {text.projects.map((project) => {
          id += 1;
          return (
            <div className={styles.projectsPaperDiv} key={id}>
              <Paper doublePinned pinColor="random" sectionClassName="project">
                <div className={styles.projectList}>
                  {project === '' ? (
                    <div className={styles.emptyProject}>
                      <br />
                    </div>
                  ) : (
                    <div className={styles.project}>
                      <h5>{project.title}</h5>
                      <p>{project.description}</p>
                      <div className={styles.linksDiv}>
                        <a href={project.website} >
                          <Sticker
                            text={'Website'}
                            outerBorderColor="#2ca248"
                            innerBorderColor="#2ca248"
                            fontColor="#fff"
                            backgroundColor="#2ca248"
                            rotate="0deg"
                            innerBorderSize="0.1rem"
                            outerBorderSize="0rem"
                            />
                        </a>
                        <a href={project.sourceCode}>
                          <Sticker
                            text={'Código Fonte'}
                            width="5rem"
                            outerBorderColor="#a22c4b"
                            innerBorderColor="#a22c4b"
                            fontColor="#fff"
                            backgroundColor="#a22c4b"
                            rotate="0deg"
                            innerBorderSize="0.1rem"
                            outerBorderSize="0rem"
                          />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </Paper>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}

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
