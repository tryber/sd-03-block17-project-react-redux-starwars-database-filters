import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchRequestAPI } from '../Actions';
import InputNamePlanet from './InputNamePlanet';
import CreateTable from './CreateTable';
import NavBar from './NavBar';
import RemoveFilters from './RemoveFilters';

import './Table.css';

function switchComparison(column, comparison, value, planet) {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    default:
      return [];
  }
}

class Table extends React.Component {
  componentDidMount() {
    const { apiRequestDispatch } = this.props;

    apiRequestDispatch();
  }

  filterSelectedValues(data) {
    const { selectInput } = this.props;
    if (selectInput) {
      return selectInput.reduce(
        (acc, { column, comparison, value }) =>
          acc.filter((planet) => switchComparison(column, comparison, value, planet)),
        this.filteredPlanet(data),
      );
    }
    return this.filteredPlanet(data);
  }

  filteredPlanet(data) {
    const { nameInput } = this.props;
    if (nameInput !== '') {
      return data.filter(({ name }) => name.toLowerCase().includes(nameInput.toLowerCase()));
    }
    return data;
  }

  render() {
    const { loading, data } = this.props;
    return (
      <div>
        <div>
          <hr style={{ border: 'outset' }} />
          <h1>Star Wars Table</h1>
          <hr style={{ border: 'outset' }} />
        </div>
        <div className="input-filter">
          <InputNamePlanet />
          <NavBar />
          <RemoveFilters />
        </div>
        <div className="TabelaProdutos">
          <CreateTable data={this.filterSelectedValues(data)} />
        </div>
        {loading && <h1>Loading...</h1>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.requestAPIReducer.data,
  loading: state.requestAPIReducer.loading,
  nameInput: state.filters.filterByName.name,
  selectInput: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  apiRequestDispatch: () => dispatch(fetchRequestAPI()),
});

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  filterByName: PropTypes.string.isRequired,
  selectInput: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
