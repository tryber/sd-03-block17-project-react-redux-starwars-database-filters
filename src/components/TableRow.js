import React from 'react';
import { connect } from 'react-redux';
import propTypes, { arrayOf } from 'prop-types';

const applyTextFilter = (data, text) => {
  console.log(data.name.toUpperCase());
  if (data.name.toUpperCase().includes(text.toUpperCase()) || text === '') { return true; }
  return false;
};

const TableRow = ({ data, name }) => applyTextFilter(data, name) && (
<tr>
  {Object.values(data).map((value) => (
    <td>{value}</td>
  ))}
</tr>
);

const mapStateToProps = ({
  textFilterReducer: {
    filters: {
      filterByName: { name },
    },
  },
}) => ({
  name,
});

export default connect(mapStateToProps)(TableRow);

TableRow.propTypes = {
  name: propTypes.string.isRequired,
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
