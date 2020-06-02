import React from 'react';
import propTypes, { arrayOf } from 'prop-types';

const TableRow = ({ data }) => <tr>{Object.values(data).map((value) => <td>{value}</td>)}</tr>;

export default TableRow;

TableRow.propTypes = {
  data: propTypes.shape({
    name: propTypes.string,
    rotation_period: propTypes.string,
    diameter: propTypes.string,
    climate: propTypes.string,
    gravity: propTypes.string,
    terrain: propTypes.string,
    surface_water: propTypes.string,
    population: propTypes.string,
    films: arrayOf(propTypes.string),
    created: propTypes.string,
    edited: propTypes.string,
    url: propTypes.string,
  }).isRequired,
};
