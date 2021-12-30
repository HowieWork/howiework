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
              /* FIXME NOT PASSING TECHNOLOGY LIST FOR AVOIDING LAYOUT ISSUE. BETTER SOLUTION? */
              key={app.title}
              view={props.view}
              type={app.type}
              title={app.title}
              technologyList={app.technologyList}
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
              readMoreUrl={app.readMoreUrl}
            />
          );
        })}
      </Fragment>
    );
  if (props.category === 'arch')
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
              readMoreUrl={app.readMoreUrl}
            />
          );
        })}
      </Fragment>
    );

  return (
    <Fragment>
      {props.category !== 'arch' && (
        <div className={`app-container--${props.view}`}>{appContent}</div>
      )}
      {props.category === 'arch' && (
        <div className={`app-container--list`}>{appContent}</div>
      )}
    </Fragment>
  );
};

export default ProjectList;
