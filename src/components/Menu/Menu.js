import React from 'react';
import removeExtraSpaces from '../../helpers/removeExtraSpaces';
import './Menu.css';

const defaultProps = {
  className: '',
  items: [],
};

function Menu(props) {
  const { className, items } = props;
  const customClassName = `
    Menu
    ${className}
  `;

  if (!items || !items.length) {
    throw new Error('Please add `items` to render menu');
  }

  return (
    <ul className={removeExtraSpaces(customClassName)}>
      {items.map(item => <li className="item">{item}</li>)}
    </ul>
  )
}

Menu.defaultProps = defaultProps;
export default Menu;