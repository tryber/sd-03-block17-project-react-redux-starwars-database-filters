import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableLine from './TableLine';

const filter = (data, nameFilter) => data
  .reduce((acc, planet) => {
    if (nameFilter && planet.name.match(new RegExp(nameFilter, 'i'))) {
      acc.push(<TableLine key={planet.name} planet={planet} />);
    }
    if (!nameFilter) acc.push(<TableLine key={planet.name} planet={planet} />);
    return acc;
  }, []);

const Table = ({ data, isFetching, nameFilter }) => {
  if (isFetching) return <p>loading</p>;
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>orbital_period</th>
          <th>population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>{filter(data, nameFilter)}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  isFetching: state.planetsReducer.isFetching,
  nameFilter: state.filters.filterByName.name,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  nameFilter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Table);
