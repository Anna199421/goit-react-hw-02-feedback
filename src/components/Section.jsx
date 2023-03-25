import { Container, Title } from './FeedbackStyled';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
    return (
      <section>
        <Container>
          <Title>{title}</Title>
          {children}
        </Container>
      </section>
    );
  };
  
  Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  