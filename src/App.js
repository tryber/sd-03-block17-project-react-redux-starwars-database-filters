import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './components/Filter';
import Table from './components/Table';
import { requestFetch } from './action';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) {
      return (
        <div>
          <h1>StarWars Datatable with Filters</h1>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <Filter />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = ({
  planetReducer: { isFetching },
}) => ({
  isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(requestFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
