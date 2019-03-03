import React from 'react';
import PropTypes from 'prop-types';

import './JokeError.css';

const JokeError = ({ error, children }) => {
  return (
    <h2 className="JokeError">
      {children} <span>{error}</span>
    </h2>
  );
}

JokeError.propTypes = {
  error: PropTypes.string,
  children: PropTypes.element
};

JokeError.defaultProps = {
  error: 'Something went wrong!',
};

export default JokeError;