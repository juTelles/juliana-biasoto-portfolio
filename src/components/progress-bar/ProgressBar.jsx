// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';
import Pin from '../pin/Pin.jsx'

function ProgressBar({ color, progress }) {
  const progressLevel = Array(progress).fill({});

  return (
    <div className={styles.progressBarDiv}>
      <div className={styles.progressBar}>
        {progressLevel.map((level, i) => {
          return (
            <div
              key={i} className={styles.pinDiv}
            >
              <Pin color={color}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;
