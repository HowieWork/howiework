import { Fragment } from 'react/cjs/react.production.min';
import ProjectItem from '../../shared/components/Project/ProjectItem';
import './ProjectList.css';

// APP DATA
const APP_DATA = [
  {
    type: 'app',
    title: 'Snap App',
    technologyList: ['React', 'Node', 'Express', 'MongoDB', 'Figma'],
    description:
      'Snap App focus on creating a photo sharing platform for people who love architecture.',
  },
  {
    type: 'app',
    title: 'Snap App 2',
    technologyList: ['React', 'Node'],
    description:
      'It integrates sharing, navigation, architecture information and tour planning together.',
  },
];
// DESIGN DATA
const DESIGN_DATA = [
  {
    type: 'design',
    title: 'Museum',
    technologyList: ['Adobe XD', 'Photoshop', 'Illustration'],
    description:
      'A mobile app design for a museum. Its goal is to enhance visiting experience. It integrates multiple key features together.',
  },
];
// ARCHITECTURE DATA
const ARCH_DATA = [];

const ProjectList = () => {
  const appContent = (
    <Fragment>
      {APP_DATA.map((app) => {
        /* TODO CSS STYLING */
        return (
          <ProjectItem
            key={app.title}
            type={app.type}
            title={app.title}
            description={app.description}
          />
        );
      })}
    </Fragment>
  );
  return <div className='app-container'>{appContent}</div>;
};

export default ProjectList;
