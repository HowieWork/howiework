import PropTypes from 'prop-types';
import './YoutubeEmbed.css';

const YoutubeEmbed = (props) => {
  return (
    <div className='video-responsive'>
      <iframe
        width='853'
        height='480'
        src={`https://www.youtube.com/embed/${props.embedId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title={props.title}
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
