import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchingPlanetsInfo } from '../actions/actionsCreators';
import Table from '../components/table/Table';

export class Home extends Component {
  componentDidMount() {
    const { getPlanetsInfo } = this.props;
    getPlanetsInfo();
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <Table data={data} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanetsInfo: () => dispatch(fetchingPlanetsInfo()),
});

const mapStateToProps = (state) => ({
  data: state.planetsInfoReducer.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  getPlanetsInfo: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
