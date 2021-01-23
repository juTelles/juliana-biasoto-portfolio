// eslint-disable-next-line no-unused-vars
import react from 'react';

function Sticker( { text, color, className } ) {
  return (
    <div className={`sticker-div ${className}`} >
      <div className="sticker" style={{backgroundColor: color}}>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default Sticker;
