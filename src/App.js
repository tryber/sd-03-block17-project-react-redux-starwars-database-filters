import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from './actions/index';
import Table from './components/Table';
import Filter from './components/Filter';
import NumericFilter from './components/NumericFilter';
import ListFilters from './components/ListFilters';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    return (
      <div className="App">
        <span>StarWars Datatable with Filters</span>
        <Filter />
        <NumericFilter />
        <ListFilters />
        <Table />
      </div>
    );
  }
}

// mapeie as ações despachadas como propriedade do componente
const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

// conecte as ações despachadas ao redux
export default connect(null, mapDispatchToProps)(App);

// faça as proptypes da ação oriunda do thunk
App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
};
