import React from 'react';
import removeExtraSpaces from '../../helpers/removeExtraSpaces';
import './ProgressBar.css';

const defaultProps = {
  className: '',
  width: '100%',
  thinkness: '7px',
  statusColor: 'skyblue',
  backgroundColor: 'lightgrey',
};

function ProgressBar(props) {
  const {
    className,
    width,
    thinkness,
    backgroundColor,
    statusColor,
    status,
  } = props;
  const customClassName = `
    ProgressBar
    ${className}
  `;
  const numberToPercentage = (number) => `${number}%`;

  if (!status) {
    throw new Error('Must pass in a `status` prop');
  }

  if (typeof status !== 'number') {
    throw new Error('Please pass in a number value for `status` prop');
  }

  if (status < 0 || status > 100) {
    throw Error('Please pass in a `status` value between 0 and 100');
  }

  return (
    <div
      className={removeExtraSpaces(customClassName)}
      style={{ width, height: thinkness, backgroundColor }}
    >
      <div
        style={{
          backgroundColor: statusColor,
          height: thinkness,
          width: numberToPercentage(status),
        }}
      />
    </div>
  );
}

ProgressBar.defaultProps = defaultProps;
export default ProgressBar;
