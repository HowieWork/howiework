import { createPortal } from 'react-dom';

import './Modal.css';

const Modal = (props) => {
  return createPortal(
    // <div className='modal-container responsive-width center-text'>
    <div className='modal-container responsive-width'>{props.children}</div>,
    document.getElementById('modal-hook')
  );
};

export default Modal;
