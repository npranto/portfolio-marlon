import React from 'react';
import './Button.css';
import removeExtraSpaces from '../../helpers/removeExtraSpaces';

const getSize = (props) => {
  if (props.sm) return 'sm';
  if (props.md) return 'md';
  if (props.lg) return 'lg';
  return 'sm'; // fallback default size
};

//=============================================================================
// PRIMARY BUTTON
//=============================================================================
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

//=============================================================================
// SECONDARY BUTTON
//=============================================================================
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

//=============================================================================
// LINK BUTTON
//=============================================================================
const LinkButton = (props) => {
  const { children, className = '', href = '#/', resetLinkStyle } = props;
  const customClassName = `
    ${className}
    link
    ${resetLinkStyle ? 'reset' : ''}
  `;

  console.log({ linkProps: props });

  return (
    <a href={href} {...props} className={removeExtraSpaces(customClassName)}>
      {children}
    </a>
  );
};

//=============================================================================
// DEFAULT BUTTON
//=============================================================================
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
  const { className = '', primary, secondary, link } = props;
  const customClassName = `
    Button
    ${className}
    ${getSize(props)}
  `;

  console.log({ buttonProps: props });

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
  if (link)
    return (
      <LinkButton
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
