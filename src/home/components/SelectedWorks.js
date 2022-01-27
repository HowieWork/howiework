import ProjectItem from '../../shared/components/Project/ProjectItem';
import './SelectedWorks.css';

const SelectedWorks = () => {
  return (
    <section className='responsive-width section-works'>
      <div className='center-flex-row tiny-gap works-title'>
        <div></div> Some things I've built
      </div>
      <ProjectItem
        view='grid'
        type='app'
        title='Snap App'
        technologyList={['React', 'Node', 'Express', 'MongoDB', 'Figma']}
        description='Snap App focus on creating a photo sharing platform for people who love architecture. It integrates sharing, navigation, architecture information and tour planning together.'
        imageSrc='/assets/app/app-snap-cover.png'
        demoUrl='https://howiework.github.io/snap-app/'
        gitHubUrl='https://github.com/HowieWork/snap-app'
      />
      <ProjectItem
        view='grid'
        type='app'
        title='Lunch Break'
        technologyList={['Next', 'React', 'MongoDB', 'Vercel']}
        description='A blog site focus on work-life balance. Its content is around three topics: design, psychology and community. Built with Next.js.'
        imageSrc='/assets/app/app-lunch-break-cover.png'
        demoUrl='https://lunch-break.vercel.app/'
        gitHubUrl='https://github.com/HowieWork/lunch-break/'
      />
      <ProjectItem
        view='grid'
        type='design'
        title='Museum'
        technologyList={['Adobe XD', 'Photoshop', 'Illustration']}
        description='A mobile app design for a museum. Its goal is to enhance visiting experience. It integrates multiple key features together.'
        imageSrc='/assets/design/design-museum-featured-cover.webp'
        readMoreUrl='/posts/museum'
      />
    </section>
  );
};

export default SelectedWorks;
