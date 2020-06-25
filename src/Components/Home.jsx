import React, { Component } from 'react';
import Table from './Table';
import { connect } from 'react-redux';
import { FetchStarWarsDataBase } from '../actions/index';

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

export default connect(null, mapDispatchToProps)(Home);
