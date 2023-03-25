import PropTypes from 'prop-types';
import { ButtonContainer, FeedbackButton } from './FeedbackStyled';

const FeedbacWidget = ({ onLeaveFeedback, options }) => {
  return (
    <ButtonContainer>
      {options.map(option => {
        const text = option[0].toUpperCase() + option.slice(1, option.length);

        return (
          <FeedbackButton
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {text}
          </FeedbackButton>
        );
      })}
    </ButtonContainer>
  );
};

FeedbacWidget.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export { FeedbacWidget };
