import './MainHeader.css';

const MainHeader = (props) => {
  return (
    <header className='main-header center-flex-row'>{props.children}</header>
  );
};

export default MainHeader;
