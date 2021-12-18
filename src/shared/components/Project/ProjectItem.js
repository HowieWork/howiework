import Button from '../FormElements/Button';
import './ProjectItem.css';

const ProjectItem = ({ type, title, technologyList, description }) => {
  // 1) DESIGN
  if (type === 'design')
    return (
      <div className='project-container'>
        <div className='project-title'>{title}</div>
        <div className='project-sub-container'>
          <div className='project-image'>
            <img src='' alt={`${title} Cover`} />
          </div>
          <ul className='project-technology'>
            {technologyList.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className='project-description'>
          <p>{description}</p>
          {/* FIXME UPDATE MUSEUM PROJECT LINK */}
          <Button to='#' secondary hoverUnderline>
            Read More
          </Button>
        </div>
      </div>
    );

  // 2) APPS
  if (type === 'app')
    return (
      <div className='project-container'>
        <div className='project-title'>{title}</div>
        <div className='project-sub-container'>
          <div className='project-image'>
            <img src='' alt={`${title} Cover`} />
          </div>
          <ul className='project-technology'>
            {technologyList.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className='project-description'>
          <p>{description}</p>
          {/* FIXME UPDATE DEMO & GITHUB LINKS */}
          <div className='project-cta'>
            <Button href='#' secondary hoverUnderline targetBlank>
              Demo
            </Button>{' '}
            |{' '}
            <Button href='#' secondary hoverUnderline targetBlank>
              GitHub
            </Button>
          </div>
        </div>
      </div>
    );

  // TODO 3) ARCHITECTURE
  if (type === 'arch') return;
};

export default ProjectItem;
