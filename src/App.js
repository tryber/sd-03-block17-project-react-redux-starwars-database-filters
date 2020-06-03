import React from 'react';
import './App.css';

import Table from './components/Table';
import { fetchPlanet } from './actions';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        filterByName: {
          name: ''
        }
      }
    }
  }

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
  }

  render() {
    const { planets, numResults, nextPageURL, fetchPlanets } = this.props;
    const { name } = this.state.filters.filterByName;
    return (
      <div className="App">
        <header>
          <h2>Projeto Bloco 17</h2>
          <label htmlFor='name-filter'>Filtrar por nome</label>
          <input
            data-testid='name-filter'
            name='inputFilter'
            onChange={(evt) => this.setState({filters: {filterByName: {name: evt.target.value}}})}
            value={name}
          />
          <Table planets={planets}/>
        </header>
        <footer>
          <p>A pesquisa retornou {numResults} resultados.</p>
          <button onClick={() => (fetchPlanets(nextPageURL))}>Próxima página</button>
        </footer>
      </div>
      );
    }
}

const mapStateToProps = (state) => ({
  planets: state.planetReducer.data,
  numResults: state.planetReducer.count,
  nextPageURL: state.planetReducer.next
})

const mapDispatchToProps = (dispatch) => (
  {
    fetchPlanets: () => dispatch(fetchPlanet())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
