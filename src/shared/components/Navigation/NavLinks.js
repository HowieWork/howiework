import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import './NavLinks.css';

const NavLinks = () => {
  return (
    <ul className='center-flex-row small-gap nav-links'>
      <li>
        <NavLink to='/portfolio'>Works</NavLink>
      </li>
      <li>
        <NavLink to='/posts'>Posts</NavLink>
      </li>
      <li>
        <NavHashLink smooth to='/#about' exact>
          About
        </NavHashLink>
      </li>
    </ul>
  );
};

export default NavLinks;
