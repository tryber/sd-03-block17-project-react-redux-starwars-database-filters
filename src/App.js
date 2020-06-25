import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApi } from './actions/apiActions';
import Table from './components/Table';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    return (
      <div className="App">
        <span>StarWars Datatable</span>
        <Table />
      </div>
    );
  }
}

// mapeie as ações despachadas como propriedade do componente
const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(getApi()),
});

// conecte as ações despachadas ao redux
export default connect(null, mapDispatchToProps)(App);

// faça as proptypes da ação oriunda do thunk
App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
};
