import React from 'react';
import removeExtraSpaces from '../../helpers/removeExtraSpaces';
import Text from '../Text/Text';
import ProgressBar from '../ProgressBar/ProgressBar';
import './SkillItem.css';

const defaultProps = {
  className: '',
};

function SkillItem(props) {
  const { className, logo, name, proficiency } = props;
  const customClassName = `
    SkillItem
    ${className}
  `;

  if (!logo) {
    throw new Error('Please provide a `logo` prop');
  }
  if (!name) {
    throw new Error('Please provide a `name` prop');
  }
  if (!proficiency) {
    throw new Error('Please provide a `proficiency` prop');
  }

  return (
    <div className={removeExtraSpaces(customClassName)}>
      <div className="skill-details">
        <div className="skill-logo-wrapper">
          <img className="skill-logo" src={logo} />
        </div>
        <Text className="skill-name"> {name} </Text>
        <Text className="skill-proficiency"> {proficiency}% </Text>
      </div>
      <ProgressBar status={proficiency} statusColor="green" />
    </div>
  );
}

SkillItem.defaultProps = defaultProps;
export default SkillItem;
