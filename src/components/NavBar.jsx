import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => (
  <>
    <header className="navFlex">
      <nav>
        <NavLink to="/">
          <button type='button' className='btn'>&larr;</button>
        </NavLink>
        <ul className='ul'>
          <li>
            <NavLink to="/">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </>

);

export default NavBar;