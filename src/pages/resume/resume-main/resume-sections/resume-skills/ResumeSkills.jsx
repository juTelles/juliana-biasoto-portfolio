// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Sticker from '../../../../../components/sticker/Sticker';
import Skill from './skill/Skill';

function ResumeSkills({ text }) {
  let id = 0;
  return (
    <div className={styles.resumeSkillsDiv}>
      {text.skillsSubSections.map((sub) => {
        id += 1;
        const title = sub.title;
        const subSection = sub.subSection;
        return (
          <div key={id} className={`${styles.resumeSkillsSectionDiv} ${styles[subSection]}`}>
            <div className={styles.skillsSectionTitleDiv}>
            <Sticker
              text={title}
              innerBorder="2px"
              innerPadding="1px 2px"
              margin="5px 0px 5px 0px"
              />
            </div>
            <div className={styles.skillsDiv}>
            <Skill skills={sub.skills} color={sub.color}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ResumeSkills;
