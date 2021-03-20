import React from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import './Icon.css';

const ICONS = [{ name: 'menu', component: IoMenuSharp }];

const getSize = (props) => {
  if (props.xs) return '1em';
  if (props.sm) return '1.5em';
  if (props.md) return '2em';
  if (props.lg) return '2.5em';
  if (props.xl) return '3em';
  return '1.5em'; // fallback default size
};

const defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  name: ICONS[0].name,
  className: '',
};

function Icon(props) {
  const { name, className } = props;
  const icon = ICONS.find(
    (s) => s.name.toLocaleLowerCase() === name.toLowerCase(),
  );

  if (!icon) {
    throw new Error(`[${name}] is not a valid icon \`name\``);
  }

  const { name: title, component: IconComponent } = icon;
  const customClassName = `
    Icon
    ${className}
  `;
  const size = getSize(props);

  return (
    <IconComponent
      title={title}
      size={size}
      {...props}
      className={customClassName}
    />
  );
}

Icon.defaultProps = defaultProps;
export default Icon;
