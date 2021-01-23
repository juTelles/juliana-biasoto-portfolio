// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import Title from './Title';

function Header({ text }) {

  return (
    <header className="elements-sections">
      <div className="header-div">
        <Title text={text}/>
      </div>
    </header>
  );
}

export default Header;
