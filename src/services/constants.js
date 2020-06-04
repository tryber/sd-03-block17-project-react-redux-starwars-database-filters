import React from 'react';
import PropTypes from 'prop-types';

export const planetShape = () => ({
  name: PropTypes.string.isRequired,
  rotation_period: PropTypes.string.isRequired,
  orbital_period: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  gravity: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  surface_water: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  residents: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  created: PropTypes.string.isRequired,
  edited: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const numColumn = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export const renderOptions = (optionsList) => (
  ['', ...optionsList].map((option) => <option key={option} value={option}>{option}</option>)
);

export const frendlyUser = (title) => (
  title[0].toUpperCase() + title.replace('_', ' ').slice(1)
);

