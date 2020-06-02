import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from './components/Table';
import FetchData from './components/FetchData';

import './App.css';

class App extends React.Component {
  render() {
    const { planets } = this.props;
    if (planets.length === 0) return <FetchData />;
    return (
      <div className="App">
        <Table planets={planets} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.data,
});

FetchData.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps)(App);
