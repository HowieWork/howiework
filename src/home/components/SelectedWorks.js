import './SelectedWorks.css';

const SelectedWorks = () => {
  return (
    <section className='section-works'>
      <div className='works-title'>Some things I've built</div>
      {/* TODO COULD CONVERT INTO PROJECT COMPONENT */}
      <div className='center-flex-column small-gap project-container'>
        <div className='project-title'>Snap App</div>
        <div className='center-flex-row project-image'>
          <img src='' alt='snap app cover' />
        </div>
        <div className='center-flex-column tiny-gap project-description'>
          <p>
            Snap App focus on creating a photo sharing platform for people who
            love architecture. It integrates sharing, navigation, architecture
            information and tour planning together.
          </p>
          <p>Read More</p>
        </div>
      </div>
      <div className='center-flex-column small-gap project-container'>
        <div className='project-title'>Museum</div>
        <div className='center-flex-row project-image'>
          <img src='' alt='museum app cover' />
        </div>
        <div className='center-flex-column tiny-gap project-description'>
          <p>
            A mobile app design for a museum. Its goal is to enhance visitors’
            museum experience.
          </p>
          <p>Read More</p>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
