import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchingPlanetsInfo } from '../actions/actionsCreators';

class FetchData extends React.Component {
  componentDidMount() {
    const { getPlanetsInfo } = this.props;
    getPlanetsInfo();
  }

  render() {
    return <div>Loading...</div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanetsInfo: () => dispatch(fetchingPlanetsInfo()),
});

FetchData.propTypes = { getPlanetsInfo: PropTypes.func.isRequired };

export default connect(null, mapDispatchToProps)(FetchData);
