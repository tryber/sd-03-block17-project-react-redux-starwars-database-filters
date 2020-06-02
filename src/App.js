import React from 'react';
import './App.css';

import Table from './components/Table';
import { fetchPlanet } from './actions';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      url: 'swapi-trybe.herokuapp.com/api/planets/',
    }
  }

  componentDidMount() {
    const { fetchPlanets } = this.props;
    this.setState(
      {
        planets: fetchPlanets(this.state.url)
      }
    );
    console.log(fetchPlanets(this.state.url))
  }

  render() {
    const { planets, numResults, nextPageURL } = this.props;
    return (
      <div className="App">
        <header>
          <h2>Projeto Bloco 17</h2>
          <Table planets={planets}/>
        </header>
        <footer>
          <p>A pesquisa retornou {numResults} resultados.</p>
          <button onClick={() => (this.fetchPlanets(nextPageURL))}>Próxima página</button>
        </footer>
      </div>
      );
    }
}

const mapStateToProps = (state) => ({
  planets: state.planetReducer.results,
  numResults: state.planetReducer.count,
  nextPageURL: state.planetReducer.next
})

const mapDispatchToProps = (dispatch) => (
  {
    fetchPlanets: () => dispatch(fetchPlanet())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
