import React from 'react';
import './Header.css';

const getSize = (props) => {
  if (props.sm) return 'sm';
  if (props.md) return 'md';
  if (props.lg) return 'lg';
  return 'sm'; // fallback default size
}

export default function Header(props) {
  const { className = '', children } = props;
  const customClassName = `
    Header
    ${className}
    ${getSize(props)}
  `;
  return (
    <h1 className={customClassName}>
      {children}
    </h1>
  )
}
