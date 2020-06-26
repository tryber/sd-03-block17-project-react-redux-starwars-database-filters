import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchStarWarsDataBase } from '../actions/index';
import FilterOrder from '../Components/NumericFilter/FilterOrder';
import FilterValue from '../Components/NumericFilter/FilterValue';
import RemoveFilter from '../Components/NumericFilter/RemoveFilter';
import Table from './Table';
import NameFilter from './NameFilter';

class Home extends Component {
  componentDidMount() {
    const { getFetchStarWarsDataBase } = this.props;

    getFetchStarWarsDataBase();
  }

  render() {
    return (
      <div>
        <NameFilter />
        <FilterValue />
        <FilterOrder />
        <RemoveFilter />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFetchStarWarsDataBase: () => dispatch(FetchStarWarsDataBase()),
});

Home.propTypes = {
  getFetchStarWarsDataBase: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
