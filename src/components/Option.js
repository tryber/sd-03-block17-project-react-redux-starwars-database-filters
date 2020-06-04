import React from 'react';
import PropTypes from 'prop-types';

function Option({ name }) {
  return (<option>{name}</option>);
}

Option.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Option;
