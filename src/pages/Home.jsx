import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../components/table/Table';
import FilterContainer from '../components/filters/FilterContainer';
import FetchData from '../components/FetchData';

const Home = ({ loading }) => (loading ? (
  <FetchData />
) : (
  <div>
    <div>
      <FilterContainer />
    </div>
    <Table />
  </div>
));

const mapStateToProps = (state) => ({
  loading: state.planetsInfoReducer.loading,
});

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Home);
