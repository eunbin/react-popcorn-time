import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-weight: 600;
`;

const NotFound = ({ text, color }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

NotFound.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default NotFound;
