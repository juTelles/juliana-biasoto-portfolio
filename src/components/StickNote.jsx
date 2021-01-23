// eslint-disable-next-line no-unused-vars
import react from 'react';

function StickNote( { text, color, className } ) {
  return (
    <div className={`stickNote-div ${className}`} >
      <div className="stickNote" style={{backgroundColor: color}}>
        <div className="stickNoteGlue"></div>
        <p className="noteText">{text}</p>
      </div>
    </div>
  );
}

export default StickNote;
