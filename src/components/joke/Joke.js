import React from 'react';
import PropTypes from 'prop-types';

import './Joke.css';

const Joke = ({ text, children }) => {
  return (
    <h1 className="Joke">
      {children} <span>{text}</span>
    </h1>
  );
}

Joke.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default Joke;