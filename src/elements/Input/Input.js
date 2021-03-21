import React, { useState } from 'react';
import './Input.css';
import removeExtraSpaces from '../../helpers/removeExtraSpaces';

const defaultProps = {
  className: '',
};

function Input(props) {
  const { className = '', initialValue, onChange = () => {} } = props;
  const customClassName = `
    Input
    ${className}
  `;

  const [inputValue, setInputValue] = useState(initialValue || '');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  return (
    <input
      {...props}
      className={removeExtraSpaces(customClassName)}
      value={inputValue || ''}
      onChange={handleOnChange}
    />
  );
}

Input.defaultProps = defaultProps;
export default Input;
