import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import functionAsc from './Funtions/functionAsc';
import functionDesc from './Funtions/functionDesc';


function TableInfo({
  planets,
  name,
  numericValues,
  columnSort,
  sort,
}) {
  const data = sort === 'ASC' ? functionAsc(
    planets,
    name,
    numericValues,
    columnSort,
  ) : functionDesc(
    planets,
    name,
    numericValues,
    columnSort,
  );
  return (
    <tbody>
      {data.map((planets) =>
        <tr key={planets.name}>
          <td>{planets.name}</td>
          <td>{planets.rotation_period}</td>
          <td>{planets.orbital_period}</td>
          <td>{planets.diameter}</td>
          <td>{planets.climate}</td>
          <td>{planets.gravity}</td>
          <td>{planets.terrain}</td>
          <td>{planets.surface_water}</td>
          <td>{planets.population}</td>
          <td>{planets.films.map((film) => <span key={film}>{film}</span>)}</td>
          <td>{planets.created}</td>
          <td>{planets.edited}</td>
          <td>{planets.url}</td>
        </tr>,
      )}
    </tbody>
  );
}

const mapStateToProps = (state) => (
  {
    planets: state.apiReducer.data,
    name: state.filtersReducer.filterByName.name,
    numericValues: state.filtersReducer.filterByNumericValues,
    columnSort: state.filtersReducer.order.column,
    sort: state.filtersReducer.order.sort,
  }
);

export default connect(mapStateToProps)(TableInfo);

TableInfo.defaultProps = {
  columnSort: 'Name',
  sort: 'ASC',
};

TableInfo.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.string,
    film: PropTypes.string,
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
  name: PropTypes.string.isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.string,
    columnSort: PropTypes.string,
    sort: PropTypes.string,
  })).isRequired,
  columnSort: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};
