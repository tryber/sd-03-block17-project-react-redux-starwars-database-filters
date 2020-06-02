import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import store from '../store/index';
import fetchPlanets from '../actions/fetchPlanetsAction';

class FetchData extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPlanets());
  }

  render() {
    return (
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = (state) => ({
  dispatch: store.dispatch,
});

FetchData.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(FetchData);
