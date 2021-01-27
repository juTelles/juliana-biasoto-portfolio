// eslint-disable-next-line no-unused-vars
import react from 'react';
import myPhoto from './../img/pollaroid-ju.png';
import styles from './styles.module.css';

function MyPhoto() {
  return (
    <div className="photo-div">
      <figure className="photo-fig">
        <img
          className="photo"
          src={myPhoto}
          alt="Juliana Biasoto"
        />
      </figure>
    </div>
  );
}

export default MyPhoto;