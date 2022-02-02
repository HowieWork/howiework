import { Fragment, useEffect, useState } from 'react';
import Button from '../FormElements/Button';
import './ProjectItem.css';

const ProjectItem = (props) => {
  const [imageFile, setImageFile] = useState();

  const { type, imageSrc } = props;

  useEffect(() => {
    import(`../../../assets/site/${type}/${imageSrc}`)
      .then((res) => {
        setImageFile(res.default);
      })
      .catch((err) => console.log('CATCH IMPORT ERROR:', err));
  }, [type, imageSrc]);

  // GRID VIEW
  if (props.view === 'grid') {
    // 1) APPS

    if (props.type === 'app') {
      let cta;

      if (props.viewProject) {
        cta = (
          <Button to={props.viewProject} secondary hoverUnderline>
            View Project
          </Button>
        );
      }

      if (!props.viewProject) {
        cta = (
          <Fragment>
            <Button href={props.demoUrl} secondary hoverUnderline targetBlank>
              Demo
            </Button>{' '}
            |{' '}
            <Button href={props.gitHubUrl} secondary hoverUnderline targetBlank>
              GitHub
            </Button>
          </Fragment>
        );
      }
      return (
        <div className='project-container--grid'>
          <div className='project-title--grid'>{props.title}</div>
          <div className='project-image--grid'>
            <img src={imageFile} alt={`${props.title} Cover`} />
          </div>
          <div className='center-flex-column tiny-gap project-content-container--grid'>
            {props.technologyList && (
              <ul className='center-flex-row extra-tiny-gap project-technology--grid'>
                {props.technologyList.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}
            <div className='project-description--grid'>
              <p>{props.description}</p>
              <div className='project-cta--grid'>{cta}</div>
            </div>
          </div>
        </div>
      );
    }

    // 2) DESIGN

    if (props.type === 'design')
      return (
        <div className='project-container--grid'>
          <div className='project-title--grid'>{props.title}</div>

          <div className='project-image--grid'>
            <img src={imageFile} alt={`${props.title} Cover`} />
          </div>

          <div className='center-flex-column tiny-gap project-content-container--grid'>
            {props.technologyList && (
              <ul className='center-flex-row extra-tiny-gap project-technology--grid'>
                {props.technologyList.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}
            <div className='project-description--grid'>
              <p>{props.description}</p>
              {props.readMoreUrl && (
                <Button to={props.readMoreUrl} secondary hoverUnderline>
                  Read More
                </Button>
              )}
            </div>
          </div>
        </div>
      );

    // 3) ARCHITECTURE

    if (props.type === 'arch')
      return (
        <div className='project-container--grid'>
          <div className='project-title--grid'>{props.title}</div>
          <div className='project-image--grid'>
            <img src={imageFile} alt={`${props.title} Cover`} />
          </div>
          <div className='center-flex-column tiny-gap project-content-container--grid'>
            <div className='project-description--grid'>
              <p>{props.description}</p>
              {props.readMoreUrl && (
                <Button to={props.readMoreUrl} secondary hoverUnderline>
                  Read More
                </Button>
              )}
            </div>
          </div>
        </div>
      );
  }

  // LIST VIEW
  if (props.view === 'list') {
    // 1) APPS
    if (props.type === 'app')
      return (
        <div className='project-container--list'>
          <div className='project-title--list'>{props.title}</div>
          <div className='project-description--list'>
            <p>{props.description}</p>
          </div>
          <div className='project-cta--list'>
            <Button href={props.demoUrl} secondary hoverUnderline targetBlank>
              Demo
            </Button>{' '}
            |{' '}
            <Button href={props.gitHubUrl} secondary hoverUnderline targetBlank>
              GitHub
            </Button>
          </div>
        </div>
      );

    // 2) DESIGN
    if (props.type === 'design')
      return (
        <div className='project-container--list'>
          <div className='project-title--list'>{props.title}</div>
          <div className='project-description--list'>
            <p>{props.description}</p>
          </div>
          <div className='project-cta--list'>
            {props.readMoreUrl && (
              <Button to={props.readMoreUrl} secondary hoverUnderline>
                Read More
              </Button>
            )}
          </div>
        </div>
      );

    // TODO 3) ARCHITECTURE
    if (props.type === 'arch')
      return (
        <div className='project-container--list'>
          <div className='project-title--list'>{props.title}</div>
          <div className='project-description--list'>
            <p>{props.description}</p>
          </div>
          <div className='project-cta--list'>
            {props.readMoreUrl && (
              <Button to={props.readMoreUrl} secondary hoverUnderline>
                Read More
              </Button>
            )}
          </div>
        </div>
      );
  }
};

export default ProjectItem;
