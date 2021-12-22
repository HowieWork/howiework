import Button from '../FormElements/Button';
import './ProjectItem.css';

const ProjectItem = (props) => {
  // GRID VIEW
  if (props.view === 'grid') {
    // 1) APPS
    if (props.type === 'app')
      return (
        <div className='project-container--grid'>
          <div className='project-title--grid'>{props.title}</div>
          <div className='project-sub-container--grid'>
            <div className='project-image--grid'>
              {/* FIXME UPDATE IMAGE SRC */}
              <img src='' alt={`${props.title} Cover`} />
            </div>
            {props.technologyList && (
              <ul className='project-technology--grid'>
                {props.technologyList.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}
          </div>
          <div className='project-description--grid'>
            <p>{props.description}</p>
            <div className='project-cta--grid'>
              <Button href={props.demoUrl} secondary hoverUnderline targetBlank>
                Demo
              </Button>{' '}
              |{' '}
              <Button
                href={props.gitHubUrl}
                secondary
                hoverUnderline
                targetBlank
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
      );

    // 2) DESIGN
    if (props.type === 'design')
      return (
        <div className='project-container--grid'>
          <div className='project-title--grid'>{props.title}</div>
          <div className='project-sub-container--grid'>
            <div className='project-image--grid'>
              <img src='' alt={`${props.title} Cover`} />
            </div>
            {props.technologyList && (
              <ul className='project-technology--grid'>
                {props.technologyList.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}
          </div>
          <div className='project-description--grid'>
            <p>{props.description}</p>
            {/* FIXME UPDATE MUSEUM PROJECT LINK */}
            <Button to={props.readMoreUrl} secondary hoverUnderline>
              Read More
            </Button>
          </div>
        </div>
      );

    // TODO 3) ARCHITECTURE
    if (props.type === 'arch') return;
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
        <div className='project-container'>
          <div className='project-title'>{props.title}</div>
          <div className='project-description'>
            <p>{props.description}</p>
            {/* FIXME UPDATE MUSEUM PROJECT LINK */}
            <Button to={props.readMoreUrl} secondary hoverUnderline>
              Read More
            </Button>
          </div>
        </div>
      );

    // TODO 3) ARCHITECTURE
    if (props.type === 'arch') return;
  }
};

export default ProjectItem;
