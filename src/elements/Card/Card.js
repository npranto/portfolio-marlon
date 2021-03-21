import React, { useState } from 'react';
import removeExtraSpaces from '../../helpers/removeExtraSpaces';
import Button from '../Button/Button';
import './Card.css';

const defaultProps = {
  className: '',
};

function Card(props) {
  const { className, coverImage, coverColor, reference } = props;
  const customClassName = `
    Card
    ${className}
    ${coverImage ? 'with-cover-image' : ''}
    ${coverColor ? 'with-cover-color' : ''}
  `;

  if (reference) {
    return (
      <Button link className="link" href={reference} target="_blank">
        <div
          className={removeExtraSpaces(customClassName)}
          style={{
            backgroundImage: coverImage ? `url(${coverImage})` : 'none',
            backgroundColor: coverColor ? coverColor : 'none',
          }}
        />
      </Button>
    );
  }

  return (
    <div
      className={removeExtraSpaces(customClassName)}
      style={{
        backgroundImage: coverImage ? `url(${coverImage})` : 'none',
        backgroundColor: coverColor ? coverColor : 'none',
      }}
    ></div>
  );
}

Card.defaultProps = defaultProps;
export default Card;
