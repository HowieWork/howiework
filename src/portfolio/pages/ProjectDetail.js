// import { useState } from 'react';
import { useParams } from 'react-router-dom';

import YoutubeEmbed from '../../shared/components/UIElements/YoutubeEmbed';
import Button from '../../shared/components/FormElements/Button';
import PostDetail from '../../post/pages/PostDetail';
import { APP_DATA } from '../../data/appData';

import './ProjectDetail.css';

const ProjectDetail = () => {
  const projectSlug = useParams().projectSlug;

  const projectData = APP_DATA.filter((data) => data.slug === projectSlug);

  const { title, description, demoUrl, gitHubUrl, embedId } = projectData[0];

  return (
    <div className='center-flex-column responsive-width project-detail-container'>
      <div className='project-overview'>
        {/* OVERVIEW */}
        <div className='center-flex-column project-heading'>
          <h2>{title}</h2>
          <div>
            {description}{' '}
            <Button
              href={`https://youtu.be/${embedId}`}
              secondary
              hoverUnderline
              targetBlank
            >
              Watch a demo video
            </Button>{' '}
            for main features and how to navigate.
          </div>
        </div>

        {/* VIDEO */}
        <div className='project-video'>
          <YoutubeEmbed embedId={embedId} title={title} />
          <div className='center-text project-video--btn'>
            <Button href={demoUrl} secondary hoverUnderline targetBlank>
              Visit Site
            </Button>{' '}
            |{' '}
            <Button href={gitHubUrl} secondary hoverUnderline targetBlank>
              GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* POST */}
      <div className='post-intro'>
        I also wrote about the story behind {title}, including main idea and key
        features in a written format.
      </div>

      <div className='divider-container'>
        <div className='divider' />
      </div>

      <PostDetail showTitle={false} />
    </div>
  );
};

export default ProjectDetail;
