import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Table from './Table';
import Filters from './Filters';
import { callServiceAPI } from '../actions';

class Main extends Component {
  componentDidMount() {
    this.props.getAPIService();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <div>
            <Filters />
            <Table />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAPIService: () => dispatch(callServiceAPI()),
});

const mapStateToProps = (state) => ({
  isLoading: state.apiReducer.isRequesting,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  getAPIService: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
