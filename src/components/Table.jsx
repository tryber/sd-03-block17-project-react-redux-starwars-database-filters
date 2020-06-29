import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterTable from './FilterTable';
import TableData from './TableData';

import fetchRequestPlanets from '../actions/index';
import FilterName from './FilterName';

class Table extends Component {
  componentDidMount() {
    const { requestAPIPlanets } = this.props;

    requestAPIPlanets();
  }

  render() {
    const { isFetching, planets } = this.props;
    console.log('props: ', this.props);

    return (
      <main>
        <h3>StarWars Datatable with Filters</h3>
        <FilterTable />
        <FilterName />
        {isFetching ? 'Loading...' : <TableData data={planets} />}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.reducerAPI.isFetching,
  planets: state.reducerAPI.planets,
});

const mapDispatchToProps = (dispatch) => ({
  requestAPIPlanets: () => dispatch(fetchRequestPlanets()),
});

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  requestAPIPlanets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);



// Diego



// filterSelectedValues(data) {
//   const { selectInput } = this.props;
//   if (selectInput) {
//   return selectInput.reduce(
//   (acc, { column, comparison, value }) =>
//   acc.filter((planet) => switchComparison(column, comparison, value, planet)),
//   this.filteredPlanet(data),
//   );
//   }
//   return this.filteredPlanet(data);
//   }
  
//   filteredPlanet(data) {
//   const { nameInput } = this.props;
//   if (nameInput !== '') {
//   return data.filter(({ name }) => name.toLowerCase().includes(nameInput.toLowerCase()));
//   }
//   return data;
//   } 