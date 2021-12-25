import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

import './MainNavigation.css';

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDrawerHandler = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleDarkTheme = () => {
    document.body.classList.toggle('dark-theme');
    setIsDarkTheme(!isDarkTheme);
  };

  // SYNC WITH SYSTEM COLOR THEME
  // NOTE ISSYSTEMDARK RETURN TRUE/FALSE
  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)');

  isSystemDark.addEventListener('change', function (event) {
    event.matches ? setIsDarkTheme(true) : setIsDarkTheme(false);
  });

  // TOGGLE DARK THEME FOR BODY ELEMENT
  isDarkTheme
    ? document.body.classList.add('dark-theme')
    : document.body.classList.remove('dark-theme');

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
            {/* TODO DARK THEME SWITCH */}
            <div className='center-flex-row' onClick={toggleDarkTheme}>
              {isDarkTheme ? (
                <MdOutlineLightMode size='1.8rem' />
              ) : (
                <MdDarkMode size='1.8rem' />
              )}
            </div>
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
