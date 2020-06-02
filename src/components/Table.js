import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import dataApiStarWars from '../actions/apiTbela';
import SimpleTable from './TableHead';

class Table extends Component {
  componentDidMount() {
    const { searchValuesApi } = this.props;
    searchValuesApi();
  }

  render() {
    const { all: { showResults } } = this.props;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <SimpleTable />
        {!showResults && <h1>Carregando</h1>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchValuesApi: () => dispatch(dataApiStarWars()),
});

const MapStateToProps = (state) => ({
  all: state.apiData,
});

Table.propTypes = {
  searchValuesApi: PropTypes.func.isRequired,
  all: PropTypes.isRequired,
};

export default connect(MapStateToProps, mapDispatchToProps)(Table);
