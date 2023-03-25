import PropTypes from 'prop-types';
import { MessageText } from './FeedbackStyled';

export const Notification = ({ message }) => {
  return <MessageText>{message}</MessageText>;
};

Notification.propTypes = { message: PropTypes.string.isRequired };