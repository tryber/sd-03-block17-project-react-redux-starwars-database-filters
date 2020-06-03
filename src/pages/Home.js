import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlanets } from '../actions';
import Table from '../components/Table';


class Home extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { data, isFetching } = this.props;
    return (
      <div className="Home">
        {isFetching ? (
          <h1>Loading..</h1>
        ) : (
          <Table data={data} />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

const mapStateToProps = (state) => ({
  data: state.selectPlanets.data,
  isFetching: state.selectPlanets.isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};
