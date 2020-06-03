import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getApiData from '../actions/apiAction';

class FetchData extends React.Component {
  componentDidMount() {
    this.props.dispatchFetchPlanets();
  }

  render() {
    return (
      <div>Loading...</div>
    );
  }
}

const mapDipatchToProps = (dispatch) => ({ dispatchFetchPlanets: () => dispatch(getApiData()) });

FetchData.propTypes = { dispatchFetchPlanets: PropTypes.func.isRequired };

export default connect(null, mapDipatchToProps)(FetchData);
