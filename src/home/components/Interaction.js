import { useState } from 'react';
import Checkbox from '../../shared/components/FormElements/Checkbox';
import './Interaction.css';

const Interaction = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Checkbox
        label='Interactive'
        onChange={checkboxChangeHandler}
        className='center-flex-row tiny-gap checkbox'
      />
      {/* TODO ADD INTERACTION */}
      {isChecked && (
        <div className='interactive-container'>
          <div className='interactive-content'>
            <h2>INTERACTION SECTION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='center-flex-column interactive-scroll'>SCROLL</div>
        </div>
      )}
    </div>
  );
};

export default Interaction;
