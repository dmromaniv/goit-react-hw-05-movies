import React from 'react';
import clsx from 'clsx';

import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={style.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(style.link, isActive && style.activeLink)
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              clsx(style.link, isActive && style.activeLink)
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
