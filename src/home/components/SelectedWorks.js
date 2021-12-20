import ProjectItem from '../../shared/components/Project/ProjectItem';

import './SelectedWorks.css';

const SelectedWorks = () => {
  return (
    <section className='responsive-width section-works'>
      <div className='center-flex-row tiny-gap works-title'>
        <div></div> Some things I've built
      </div>
      <ProjectItem
        type='app'
        title='Snap App'
        technologyList={['React', 'Node', 'Express', 'MongoDB', 'Figma']}
        description='Snap App focus on creating a photo sharing platform for people who love architecture. It integrates sharing, navigation, architecture information and tour planning together.'
      />
      <ProjectItem
        type='design'
        title='Museum'
        technologyList={['Adobe XD', 'Photoshop', 'Illustration']}
        description='A mobile app design for a museum. Its goal is to enhance visiting experience. It integrates multiple key features together.'
      />
    </section>
  );
};

export default SelectedWorks;
