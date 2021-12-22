import { useState } from 'react';
import Checkbox from '../../shared/components/FormElements/Checkbox';
import ProjectList from '../components/ProjectList';
import { APP_DATA, TUTORIAL_APP_DATA } from '../../data/appData';

import './Projects.css';

const Projects = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxChangeHandler = () => {
    setIsChecked(!isChecked);
  };

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
          * Below is a collection of tutorial projects.
        </div>
        <ProjectList
          category='app'
          view={isChecked ? 'list' : 'grid'}
          data={TUTORIAL_APP_DATA}
        />
      </section>

      {/* DESIGN */}
      <section id='design'></section>

      {/* ARCHITECTURE */}
      <section id='architecture'></section>
    </div>
  );
};

export default Projects;
