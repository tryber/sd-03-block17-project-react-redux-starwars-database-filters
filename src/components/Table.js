import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import orderFuncAsc from './orderFuncAsc';
import orderFuncDesc from './orderFuncDesc';


function Table({ planets, name, numericValues, columnSort, sort }) {
  const data = sort === 'ASC' ? orderFuncAsc(planets, name, numericValues, columnSort) :
    orderFuncDesc(planets, name, numericValues, columnSort);
  function head(){
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Film</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
    </thead>
    )
  }

  function body(){
    return (
      <tbody>
        {data.map((planet) => (
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
                <span key={film}>{film}</span>
              ))}
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <div>
      <table>
        {head()}
        {body()}
      </table>
    </div>
  )
  
}

const mapStateToProps = (state) => ({
  planetas: state.getPlanets.data,
  name: state.filters.filterByName.name,
  numericValues: state.filters.filterByNumericValues,
  columnSort: state.filters.order.column,
  sort: state.filters.order.sort,
});

Table.defaultProps = {
  columnSort: 'Name',
  sort: 'ASC',
};

Table.propTypes = {
  planetas: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  name: PropTypes.string.isRequired,
  numericValues: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
      columnSort: PropTypes.string,
      sort: PropTypes.string,
    }),
  ).isRequired,
  columnSort: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Table);