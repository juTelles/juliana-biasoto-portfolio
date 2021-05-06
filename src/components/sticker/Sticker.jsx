// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';

function Sticker(props) {
  const {
    specialClass,
    text,
    outerBorderColor,
    outerBorderSize,
    innerBorderColor,
    innerPadding,
    fontColor,
    backgroundColor,
    fontSize,
    width,
    rotate,
    fontFamily,
    margin,
    innerBorderSize
  } = props;

  const special = specialClass === 'contact' ? 'contactClass' : '';
  return (
    <div
      style={{
        backgroundColor: outerBorderColor,
        width: width,
        transform: `rotate(${rotate})`,
        padding: outerBorderSize,
        margin: margin
      }}
      className={ `${styles.stickerDiv} ${styles[special]}` }
      >
      <div
        style={{
          backgroundColor: backgroundColor,
          borderColor: innerBorderColor,
          borderWidth: innerBorderSize,
          padding: innerPadding,
          width: width,
        }}
        className={ `${styles.sticker} ${styles[special]}` }
      >
        <p
          style={{ color: fontColor, fontSize: fontSize, fontFamily: fontFamily }}
          className={styles.text}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default Sticker;
