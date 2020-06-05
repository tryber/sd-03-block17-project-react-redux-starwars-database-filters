import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchPlanets from '../actions/fetchPlanetsAction';
import './FetchData.css';

class FetchData extends React.Component {
  componentDidMount() {
    this.props.fetchPlanets();
  }

  render() {
    return (
      <div className="loading">Loading...</div>
    );
  }
}

const mapDipatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});

FetchData.propTypes = { fetchPlanets: PropTypes.func.isRequired };

export default connect(null, mapDipatchToProps)(FetchData);
