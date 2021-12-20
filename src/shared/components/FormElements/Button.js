import { Link } from 'react-router-dom';

import './Button.css';

const Button = (props) => {
  // NOTE PAGE RELOADS WHEN CLICKING ANCHOR ELEMENT *OUTSIDE HOWIEWORK.COM
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || 'default'} ${
          props.primary && 'button--primary'
        } ${props.secondary && 'button--secondary'} ${
          props.danger && 'button--danger'
        } ${props.hoverUnderline && 'button--hoverUnderline'}`}
        href={props.href}
        target={props.targetBlank && '_blank'}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    );
  }

  // NOTE NAVLINK NOT REFRESH THE WHOLE PAGE, ONLY UPDATE THE COMPONENT TIED TO THE PAGE. *WITHIN HOWIEWORK.COM
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={`button button--${props.size || 'default'} ${
          props.primary && 'button--primary'
        } ${props.secondary && 'button--secondary'} ${
          props.danger && 'button--danger'
        } ${props.hoverUnderline && 'button--hoverUnderline'} `}
      >
        {props.children}
      </Link>
    );
  }

  return (
    // NOTE BUTTON EXECUTES AN ACTION (UNDOABLE WITH THE BACK BUTTON) VS. LINKS NAVIGATE TO A DIFFERENT PORTION OF A WEBSITE
    <button
      className={`button button--${props.size || 'default'} ${
        props.primary && 'button--primary'
      } ${props.secondary && 'button--secondary'} ${
        props.danger && 'button--danger'
      } ${props.hoverUnderline && 'button--hoverUnderline'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
