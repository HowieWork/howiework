import { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import { ThemeContext } from '../../context/theme-context';

import './MainNavigation.css';

const MainNavigation = () => {
  const themeContext = useContext(ThemeContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerHandler = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Fragment>
      {/* 1. NON-SIDE-DRAWER NAVIGATION */}
      <MainHeader>
        <div className='responsive-width center-flex-row main-navigation'>
          <h1 className='center-flex-row tiny-gap main-navigation__title'>
            <span>LOGO</span>
            <Link to='/'>Howie Hao Wang</Link>
          </h1>
          <div className='center-flex-row small-gap'>
            <div
              className='center-flex-row'
              onClick={themeContext.toggleDarkThemeHandler}
            >
              {themeContext.isDarkTheme ? (
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
