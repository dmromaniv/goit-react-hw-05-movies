import React from 'react';

import Navigation from 'components/Navigation/Navigation';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <Navigation />
    </header>
  );
};

export default Header;
