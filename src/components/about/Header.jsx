// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import Sticker from '../Sticker';
import Title from '../Title';

function Header() {

  return (
    <header className="elements-sections">
      <div className="header-div">
        <Title />
        <Sticker text="Contato"/>
      </div>
    </header>
  );
}

export default Header;
