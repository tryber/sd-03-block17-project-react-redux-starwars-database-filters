import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchStarWarsDataBase } from '../actions/index';
import PropTypes from 'prop-types';
import Table from './Table';

class Home extends Component {
  componentDidMount() {
    const { getFetchStarWarsDataBase } = this.props;

    getFetchStarWarsDataBase();
  }

  render() {
    return (
      <Table />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFetchStarWarsDataBase: () => dispatch(FetchStarWarsDataBase()),
});

Home.propTypes = {
  getFetchStarWarsDataBase: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Home);
