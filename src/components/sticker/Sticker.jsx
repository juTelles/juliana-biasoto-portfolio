// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';


function Sticker( { text, className } ) {
  return (
    <div className={`sticker-div ${className}`} >
      <div className="sticker">
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default Sticker;