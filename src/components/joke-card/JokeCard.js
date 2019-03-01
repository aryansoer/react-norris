import React from 'react';
import PropTypes from 'prop-types';

import './JokeCard.css';

const JokeCard = ({ joke }) => {
  return (
    <h1 className="JokeCard">{joke}</h1>
  );
}

JokeCard.propTypes = {
  joke: PropTypes.string.isRequired
};

export default JokeCard;