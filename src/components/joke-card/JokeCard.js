import React from 'react';
import PropTypes from 'prop-types';

import './JokeCard.css';

const JokeCard = ({ joke, children }) => {
  return (
    <h1 className="JokeCard">
      {children} <span>{joke}</span>
    </h1>
  );
}

JokeCard.propTypes = {
  joke: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default JokeCard;