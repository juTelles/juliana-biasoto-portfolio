// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';

function Sticker(props) {
  const {
    text,
    outerBorder,
    outerBorderSize,
    innerBorder,
    innerPadding,
    fontColor,
    background,
    fontSize,
    width,
    rotate,
    fontFamily
  } = props;

  return (
    <div
      style={{
        backgroundColor: outerBorder,
        width: width,
        transform: `rotate(${rotate})`,
        padding: outerBorderSize
      }}
      className={styles.stickerDiv}
    >
      <div
        style={{
          backgroundColor: background,
          border: `solid 3px ${innerBorder}`,
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
