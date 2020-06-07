import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterDataByNumericValue from '../../helpers/index';

const TableBody = ({
  data,
  nameFilter,
  sortColumnFilter,
  sortOrderFilter,
  valueFilters,
}) => {
  const filteredData = filterDataByNumericValue(
    data,
    nameFilter,
    sortColumnFilter,
    sortOrderFilter,
    valueFilters,
  );

  return filteredData.length === 0 ? (
    <tbody>
      <tr>
        <td>Nenhum Planeta Encontrado</td>
      </tr>
    </tbody>
  ) : (
    <tbody>
      {filteredData.map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>
            {planet.films.map((film) => (
              <a
                href={film}
                target="_blank"
                rel="noopener noreferrer"
                key={film}
              >
                {film}
              </a>
            ))}
          </td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>
            <a href={planet.url} target="_blank" rel="noopener noreferrer">
              {planet.url}
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const mapStateToProps = (state) => ({
  data: state.planetsInfoReducer.data,
  nameFilter: state.filters.filterByName.name,
  sortColumnFilter: state.filters.order.column,
  sortOrderFilter: state.filters.order.sort,
  valueFilters: state.filters.filterByNumericValues,
});

TableBody.defaultProps = {
  nameFilter: '',
  valueFilters: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  nameFilter: PropTypes.string,
  sortColumnFilter: PropTypes.string.isRequired,
  sortOrderFilter: PropTypes.string.isRequired,
  valueFilters: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(TableBody);
