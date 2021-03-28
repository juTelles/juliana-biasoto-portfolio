// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Sticker from '../../../sticker/Sticker';
import Skill from './skill/Skill';

function ResumeSkills({ text }) {

  let id = 0;
  return (
    <div className={styles.resumeSkillsDiv}>
      {text.skillsSections.map((section) => {
        id += 1;
        return (
          <div key={id} className={styles.resumeSkillsSectionDiv}>
            <div className={styles.skillsSectionTitleDiv}>
            <Sticker
              text={section.title}
              innerBorder="2px"
              innerPadding="1px 2px"
              margin="5px 0px 5px 0px"
              />
            </div>
            <div className={styles.skillsDiv}>
            <Skill skills={section.skills} color={section.color}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ResumeSkills;
