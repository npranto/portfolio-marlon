import React from 'react';
import './Button.css';
import removeExtraSpaces from '../../helpers/removeExtraSpaces';

const getSize = (props) => {
  if (props.sm) return 'sm';
  if (props.md) return 'md';
  if (props.lg) return 'lg';
  return 'sm'; // fallback default size
};

const PrimaryButton = (props) => {
  const { children, className = '' } = props;
  const customClassName = `
    ${className}
    primary
  `;
  return (
    <button className={removeExtraSpaces(customClassName)}>{children}</button>
  );
};

const SecondaryButton = (props) => {
  const { children, className = '' } = props;
  const customClassName = `
    ${className}
    secondary
  `;
  return (
    <button {...props} className={removeExtraSpaces(customClassName)}>
      {children}
    </button>
  );
};

const DefaultButton = (props) => {
  const { children, className = '' } = props;
  const customClassName = `
    ${className}
    default
  `;
  return (
    <button {...props} className={removeExtraSpaces(customClassName)}>
      {children}
    </button>
  );
};

function Button(props) {
  const { className = '', primary, secondary } = props;
  const customClassName = `
    Button
    ${className}
    ${getSize(props)}
  `;

  if (primary)
    return (
      <PrimaryButton
        {...props}
        className={removeExtraSpaces(customClassName)}
        type="button"
      />
    );
  if (secondary)
    return (
      <SecondaryButton
        {...props}
        className={removeExtraSpaces(customClassName)}
        type="button"
      />
    );
  return (
    <DefaultButton
      {...props}
      className={removeExtraSpaces(customClassName)}
      type="button"
    />
  );
}

export default Button;
