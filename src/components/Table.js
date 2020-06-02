import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import dataApiStarWars from '../actions/apiTbela';
import SimpleTable from './TableHead';

class Table extends Component {
  componentDidMount() {
    const { test } = this.props;
    test();
  }

  render() {
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <SimpleTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  test: () => dispatch(dataApiStarWars()),
});

Table.propTypes = {
  test: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Table);
