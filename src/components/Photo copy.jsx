// eslint-disable-next-line no-unused-vars
import react from 'react';
import myPhoto from './../img/pollaroid-ju.png';

function Photo() {
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

export default Photo;