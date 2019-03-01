import React from 'react';
import PropTypes from 'prop-types';

import spinner from '../../assets/icons/spinner.svg';

import './Spinner.css';

const Spinner = ({ show }) => {
  if (show) {
    return (
      <div className="Spinner">
        <img src={spinner} className="Spinner-icon" alt="spinner" />
      </div>
    );
  }

  return null;
};

Spinner.propTypes = {
  show: PropTypes.bool
};

Spinner.defaultProps = {
  show: false
};

export default Spinner;