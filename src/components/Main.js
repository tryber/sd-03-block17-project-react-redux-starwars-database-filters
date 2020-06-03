import React, { Component } from 'react';
import Table from './Table';
import Filters from './Filters';

import { connect } from 'react-redux';
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
