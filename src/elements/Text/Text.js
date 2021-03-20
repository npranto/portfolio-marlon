import React from 'react';
import removeExtraSpaces from '../../helpers/removeExtraSpaces';
import './Text.css';

const defaultProps = {
  className: '',
};

function Text(props) {
  const { className, children } = props;
  const customClassName = `
    Text
    ${className}
  `;

  return (
    <p className={removeExtraSpaces(customClassName)}>
      {children}
    </p>
  );
}

Text.defaultProps = defaultProps;
export default Text;
