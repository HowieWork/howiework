// import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import YoutubeEmbed from '../../shared/components/UIElements/YoutubeEmbed';
import Button from '../../shared/components/FormElements/Button';
import { APP_DATA } from '../../data/appData';

import './ProjectDetail.css';

const ProjectDetail = () => {
  const projectSlug = useParams().projectSlug;

  const projectData = APP_DATA.filter((data) => data.slug === projectSlug);

  const { title, demoUrl, gitHubUrl, embedId } = projectData[0];
  // const {technologyList} = projectData[0];

  return (
    <div className='center-flex-column responsive-width project-detail-container'>
      {/* TODO EDIT PRODUCT DETAIL PAGE */}
      {/* <div className=' project-detail-heading-container'>
        <div className='project-detail-heading--title'>{title}</div>{' '}
        <div className='center-flex-row extra-tiny-gap post-detail-heading-sub-container'>
          <Fragment>
            {technologyList.map((keyword, index) => {
              return (
                <span key={index} className='post-detail-heading--keyword'>
                  {keyword}
                </span>
              );
            })}
          </Fragment>
        </div>
      </div> */}

      <div className='project-video'>
        <YoutubeEmbed embedId={embedId} title={title} />
      </div>

      <div className='project-cta'>
        <Button href={demoUrl} secondary hoverUnderline targetBlank>
          Demo
        </Button>{' '}
        |{' '}
        <Button href={gitHubUrl} secondary hoverUnderline targetBlank>
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetail;