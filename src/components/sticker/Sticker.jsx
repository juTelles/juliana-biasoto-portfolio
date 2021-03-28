// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';

function Sticker(props) {
  const {
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
    onClick,
    name
  } = props;

  return (
    <div
      style={{
        backgroundColor: outerBorderColor,
        width: width,
        transform: `rotate(${rotate})`,
        padding: outerBorderSize,
        margin: margin
      }}
      className={styles.stickerDiv}
      onClick={() => onClick(name)}
    >
      <div
        style={{
          backgroundColor: backgroundColor,
          border: `solid 3px ${innerBorderColor}`,
          padding: innerPadding
        }}
        className={styles.sticker}
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
