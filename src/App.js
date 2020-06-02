import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import store from './store/index';

import Table from './components/Table';
import fetchPlanets from './actions/fetchPlanetsAction';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { dispatch, planets } = this.props;
    console.log(planets);
    dispatch(fetchPlanets());
  }

  render() {
    const { planets } = this.props;
    if (planets.length === 0) return <div>loading...</div>;
    return (
      <div className="App">
        <Table planets={planets} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dispatch: store.dispatch,
  planets: state.data,
});

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps)(App);
