import { useState } from 'react';
import Checkbox from '../../shared/components/FormElements/Checkbox';
import ProjectList from '../components/ProjectList';

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
        <ProjectList />
      </section>

      {/* DESIGN */}
      <section id='design'></section>

      {/* ARCHITECTURE */}
      <section id='architecture'></section>
    </div>
  );
};

export default Projects;
