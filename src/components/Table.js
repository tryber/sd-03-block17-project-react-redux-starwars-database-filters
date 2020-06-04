import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanetsList } from '../actions';
import PlanetLine from './PlanetLine';
import TableHeader from './TableHeader';

class Table extends Component {
  constructor(props) {
    super(props);
    this.filterPlanets = this.filterPlanets.bind(this);
  }
  componentDidMount() {
    const { getPlanetsList } = this.props;
    getPlanetsList();
  }

  filterPlanets() {
    const { name, numericFilters, data } = this.props;
    const filterName = data.filter((planet) => (planet.name.toLowerCase()).includes(name));
    if (numericFilters.length !== 0) {
      return numericFilters.reduce((newList, { column, comparison, value }) =>
        newList.filter((planet) => {
          if (comparison === 'maior que') return Number(planet[column]) > Number(value);
          if (comparison === 'igual a') return Number(planet[column]) === Number(value);
          if (comparison === 'menor que') return Number(planet[column]) < Number(value);
          return planet;
        })
      , filterName);
    }
    return filterName;
  }

  render() {
    const { isFetching, data } = this.props;

    if (isFetching) { return <p>Loading...</p>; }

    if (data) {
      return (
        <table className="table-div">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {this.filterPlanets().map((planet) => <PlanetLine planet={planet} key={planet.name} />)}
          </tbody>
        </table>
      );
    }
    return <p>No Planet Found</p>;
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.planetsList.isFetching,
  data: state.planetsList.data,
  name: state.filters.filterByName.name,
  numericFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanetsList: () => dispatch(fetchPlanetsList()),
});

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getPlanetsList: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string.isRequired,
  numericFilters: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  data: null,
  numericFilters: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
