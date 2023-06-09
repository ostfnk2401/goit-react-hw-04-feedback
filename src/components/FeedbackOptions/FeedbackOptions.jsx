import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FeedbackList, FeedbackItem, FeedbackButton } from './FeedbackOptions.styled';

 export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // const [selectedOption, setSelectedOption] = useState('');

  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);
  //   onLeaveFeedback(option);
  // };

  return (
    <FeedbackList>
      {options.map((option) => {
        const buttonOption = option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <FeedbackItem key={option}>
            <FeedbackButton
              type='button'
              prop={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {buttonOption}
            </FeedbackButton>
          </FeedbackItem>
        );
      })}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
