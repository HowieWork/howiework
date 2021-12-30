import ProjectItem from '../../shared/components/Project/ProjectItem';
import './SelectedWorks.css';

const SelectedWorks = () => {
  return (
    <section className='responsive-width section-works'>
      <div className='center-flex-row tiny-gap works-title'>
        <div></div> Some things I've built
      </div>
      {/* TODO WORK WITH APP/DESIGN DATA INSTEAD */}
      <ProjectItem
        view='grid'
        type='app'
        title='Snap App'
        technologyList={['React', 'Node', 'Express', 'MongoDB', 'Figma']}
        description='Snap App focus on creating a photo sharing platform for people who love architecture. It integrates sharing, navigation, architecture information and tour planning together.'
        imageSrc='/assets/app/app-snap-cover.webp'
        demoUrl='https://howiework.github.io/snap-app/'
        gitHubUrl='https://github.com/HowieWork/snap-app'
      />
      <ProjectItem
        view='grid'
        type='design'
        title='Museum'
        technologyList={['Adobe XD', 'Photoshop', 'Illustration']}
        description='A mobile app design for a museum. Its goal is to enhance visiting experience. It integrates multiple key features together.'
        imageSrc='/assets/design/design-museum-cover.webp'
        // FIXME UPDATE READ MORE URL
        readMoreUrl='/portfolio'
      />
    </section>
  );
};

export default SelectedWorks;
