import { Fragment } from 'react/cjs/react.production.min';
import ProjectItem from '../../shared/components/Project/ProjectItem';
import './ProjectList.css';

const ProjectList = (props) => {
  let appContent;
  if (props.category === 'app')
    appContent = (
      <Fragment>
        {props.data.map((app) => {
          return (
            <ProjectItem
              key={app.title}
              type={app.type}
              view={props.view}
              title={app.title}
              description={app.description}
              imageSrc={app.imageSrc}
              demoUrl={app.demoUrl}
              gitHubUrl={app.gitHubUrl}
            />
          );
        })}
      </Fragment>
    );

  if (props.category === 'design')
    appContent = (
      <Fragment>
        {props.data.map((app) => {
          return (
            <ProjectItem
              key={app.title}
              type={app.type}
              view={props.view}
              title={app.title}
              description={app.description}
              imageSrc={app.imageSrc}
              readMoreUrl={app.demoUrl}
            />
          );
        })}
      </Fragment>
    );
  if (props.category === 'arch') appContent = '';

  return <div className={`app-container--${props.view}`}>{appContent}</div>;
};

export default ProjectList;
