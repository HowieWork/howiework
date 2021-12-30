import { useState, useEffect } from 'react';
import Checkbox from '../../shared/components/FormElements/Checkbox';
import Button from '../../shared/components/FormElements/Button';
import ProjectList from '../components/ProjectList';
import { APP_DATA, TUTORIAL_APP_DATA } from '../../data/appData';
import { DESIGN_DATA } from '../../data/designData';
import { ARCH_DATA } from '../../data/archData';

import './Projects.css';

const Projects = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

  const checkboxChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  const onClickShowMoreHandler = () => {
    setIsShowMoreClicked(!isShowMoreClicked);
  };

  useEffect(() => {
    // NAVIGATE TO TARGET HASHTAG FROM URL
    const url = window.location.href.split('/');
    const target = url[url.length - 1].slice(1).toLowerCase();
    const element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className='center-flex-column responsive-width projects-container'>
      {/* LIST / GRID VIEW */}
      <Checkbox
        label='List View'
        onChange={checkboxChangeHandler}
        className='center-flex-row tiny-gap checkbox-list-view'
        value={isChecked}
      />
      {/* APP */}
      <section id='app' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> App
        </div>
        <ProjectList
          category='app'
          view={isChecked ? 'list' : 'grid'}
          data={APP_DATA}
        />
        <div className='center-flex-row tiny-gap category-sub-title'>
          * Note: Below is a collection of tutorial projects.
        </div>
        <ProjectList
          category='app'
          view={isChecked ? 'list' : 'grid'}
          data={TUTORIAL_APP_DATA.slice(0, 4)}
        />
        {isShowMoreClicked && (
          <ProjectList
            category='app'
            view={isChecked ? 'list' : 'grid'}
            data={TUTORIAL_APP_DATA.slice(-4)}
          />
        )}
        <Button type='button' primary onClick={onClickShowMoreHandler}>
          {isShowMoreClicked ? 'Show Less' : 'Show More'}
        </Button>
      </section>

      {/* DESIGN */}
      <section id='design' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> Design
        </div>
        <ProjectList
          category='design'
          view={isChecked ? 'list' : 'grid'}
          data={DESIGN_DATA}
        />
      </section>

      {/* ARCHITECTURE */}
      <section id='arch' className='responsive-width'>
        <div className='center-flex-row tiny-gap category-title'>
          <div></div> Architecture
        </div>
        <ProjectList
          category='arch'
          view={isChecked ? 'list' : 'grid'}
          data={ARCH_DATA}
        />
      </section>
    </div>
  );
};

export default Projects;
