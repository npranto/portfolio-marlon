import React from 'react';
import removeExtraSpaces from '../../helpers/removeExtraSpaces';
import './ProfilePicture.css';

const defaultProps = {
  className: '',
  src: 'https://rb.gy/rhgtfb',
  width: 'auto',
  height: 'auto',
};

function ProfilePicture(props) {
  const { className, src, width, height } = props;
  const customClassName = `
    ProfilePicture
    ${className}
  `;

  return (
    <div className={removeExtraSpaces(customClassName)}>
      <img
        className={width === 'auto' && height === 'auto' ? 'responsive' : ''}
        src={src}
        alt="Profile"
        width={width}
        height={height}
      />
    </div>
  );
}

ProfilePicture.defaultProps = defaultProps;
export default ProfilePicture;
