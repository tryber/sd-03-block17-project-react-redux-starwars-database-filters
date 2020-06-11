import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAPIData } from '../actions/APIAction';
import TableHead from './TableHead';
import TableBody from './TableBody';
import SearchImputs from './SearchImputs';
import NavigationBar from './NavigationBar';
import Remover from './Remover';

function comparasionChosed(column, comparison, value, planet) {
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
    const { APIDispatch } = this.props;
    APIDispatch();
  }

  planetFilter(planetsList) {
    const { searchText } = this.props;
    if (searchText !== '') {
      return planetsList.filter(({ name }) => name.planetsList
        .toLowerCase().includes(planetsList.toLowerCase()));
    }
    return planetsList;
  }

  selectedFilters(planetsList) {
    const { selectedImput } = this.props;
    if (selectedImput) {
      return selectedImput.reduce((acc, { column, comparison, value }) => acc
        .filter((planet) => comparasionChosed(column, comparison, value, planet)),
      this.planetFilter(planetsList));
    }
    return this.planetFilter(planetsList);
  }

  render() {
    const { planetsList, loading } = this.props;
    if (!loading) {
      return (
        <div>
          <div>
            <SearchImputs />
            <NavigationBar />
            <Remover />
          </div>
          <div>
            <table>
              <TableHead />
              <TableBody planetsList={this.selectedImput(planetsList)} />
            </table>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  APIDispatch: () => dispatch(getAPIData()),
});

const mapStateToProps = (state) => ({
  planetsList: state.APIReducer.data,
  loading: state.APIReducer.loading,
  searchText: state.filters.filterByName.searchText,
  selectedImput: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  APIDispatch: PropTypes.func.isRequired,
  planetsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchText: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  selectedImput: PropTypes.arrayOf(
    PropTypes.shape({
      comparison: PropTypes.string,
      column: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};
