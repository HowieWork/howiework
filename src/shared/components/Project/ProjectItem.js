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
          {/* FIXME CHANGE READ MORE TO ANCHOR, MAYBE BUTTON? */}
          <p className='project-cta'>Read More</p>
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
          {/* FIXME CHANGE READ MORE TO ANCHOR, MAYBE BUTTON? */}
          <p className='project-cta'>Demo | GitHub</p>
        </div>
      </div>
    );

  // TODO 3) ARCHITECTURE
  if (type === 'arch') return;
};

export default ProjectItem;
