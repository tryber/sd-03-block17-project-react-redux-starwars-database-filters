import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterTable from './filterTable';
import TableData from './TableData';

import fetchRequestPlanets from '../actions/index';

class Table extends Component {
  componentDidMount() {
    const { requestAPIPlanets } = this.props;

    requestAPIPlanets();
  }

  render() {
    const { isFetching, planets } = this.props;

    return (
      <main>
        <h3>StarWars Datatable with Filters</h3>
        <FilterTable />
        {isFetching ? 'Loading' : <TableData data={planets} />}
      </main>
    );
  }
}

const mapStateToProps = ({ requestAPI: { isFetching, planets } }) => ({
  isFetching,
  planets,
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
