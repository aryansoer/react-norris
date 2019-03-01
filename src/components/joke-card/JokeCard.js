import React from 'react';
import PropTypes from 'prop-types';

import './JokeCard.css';

const JokeCard = ({ text, children }) => {
  return (
    <h1 className="JokeCard">
      {children} <span>{text}</span>
    </h1>
  );
}

JokeCard.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default JokeCard;