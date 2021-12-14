import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

import './MainNavigation.css';

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerHandler = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Fragment>
      {/* 1. NON-SIDE-DRAWER NAVIGATION */}
      <MainHeader>
        <div className='center-flex-row main-navigation'>
          <h1 className='center-flex-row tiny-gap main-navigation__title'>
            <span>LOGO</span>
            <Link to='/'>Howie Hao Wang</Link>
          </h1>
          <div className='center-flex-row small-gap'>
            {/* TODO DARK MODE SWITCH */}
            <div>DARK</div>
            {/* NAV LINKS */}
            <nav className='main-navigation__links'>
              <NavLinks />
            </nav>
            {/* HAMBURGER MENU */}
            <button
              className='main-navigation__menu-btn'
              onClick={toggleDrawerHandler}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </MainHeader>
      {/* 2. SIDE-DRAWER NAVIGATION */}
      <SideDrawer show={isDrawerOpen} onClick={toggleDrawerHandler}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>
      {isDrawerOpen && <Backdrop onClick={toggleDrawerHandler} />}
    </Fragment>
  );
};

export default MainNavigation;
