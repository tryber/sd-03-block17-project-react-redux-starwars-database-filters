import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApiData } from './actions/apiAction';
import Table from './components/Table';
import './App.css';


class App extends Component() {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Table />
        </header>
      </div>
    );
  }
}

App.propTypes = {
  fetch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetch: getApiData }, dispatch);

export default connect(null, mapDispatchToProps)(App);
