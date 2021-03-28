// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import ProgressBar from '../../../../progress-bar/ProgressBar';

function Skill({ skills, color }) {
  let id = 0;
  return (
    skills.map((skill) => {
    id += 1;
    return (
      <div key={id} className={styles.skill}>
        <div className={styles.skillNameDiv}>
          <h4>{skill.name}</h4>
        </div>
        <ProgressBar progress={skill.level} color={color}/>
      </div>
    );
  }))
}

export default Skill;
