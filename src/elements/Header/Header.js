import React from 'react';
import removeExtraSpaces from '../../helpers/removeExtraSpaces';
import './Header.css';

const getSize = (props) => {
  if (props.sm) return 'sm';
  if (props.md) return 'md';
  if (props.lg) return 'lg';
  return 'sm'; // fallback default size
};

const defaultProps = {
  sm: false,
  md: false,
  lg: false,
  className: '',
}

function Header(props) {
  const { className = '', children } = props;
  const customClassName = `
    Header
    ${className}
    ${getSize(props)}
  `;
  return <h1 className={removeExtraSpaces(customClassName)}>{children}</h1>;
}

Header.defaultProps = defaultProps;
export default Header;
