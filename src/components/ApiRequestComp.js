import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApiData } from '../actions/apiAction';

class ApiRequestComp extends Component {
  componentDidMount() {
    const { apiRequest } = this.props;
    apiRequest();
  }

  render() {
    return (
      <div>
        <h1>Star Wars Table</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  apiRequest: () => dispatch(getApiData()),
});

export default connect(null, mapDispatchToProps)(ApiRequestComp);
