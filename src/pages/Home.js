import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../components/table/Table';
import getApiData from '../actions/apiAction';

class Home extends Component {
  componentDidMount() {
    const { getPlanetsInfo } = this.props;
    getPlanetsInfo();
  }

  render() {
    const { data, loading } = this.props;
    return (
      <div>
        {loading ? (<h1>Loading...</h1>) : <Table data={data} /> }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanetsInfo: () => dispatch(getApiData()),
});

const mapStateToProps = (state) => ({
  data: state.apiReducer.data,
  loading: state.apiReducer.loading,
});

Home.propTypes = {
  getPlanetsInfo: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
