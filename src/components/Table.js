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

  selectedFilters(data) {
    const { selectedImput } = this.props;
    if (selectedImput) {
      return selectedImput.reduce((acc, { column, comparison, value }) => acc
        .filter((planet) => comparasionChosed(column, comparison, value, planet)),
      this.planetFilter(data));
    }
    return this.planetFilter(data);
  }

  planetFilter(data) {
    const { searchText } = this.props;
    if (searchText !== '') {
      return data.filter(({ name }) => name.toLowerCase().includes(data.toLowerCase()));
    }
    return data;
  }

  render() {
    const { data, loading } = this.props;
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
            <TableBody data={this.selectedFilters(data)} />
          </table>
        </div>
        {loading && <h1>loading....</h1>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  APIDispatch: () => dispatch(getAPIData()),
});

const mapStateToProps = (state) => ({
  data: state.APIReducer.data,
  loading: state.APIReducer.loading,
  searchText: state.filters.filterByName.name,
  selectedImput: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  APIDispatch: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
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
