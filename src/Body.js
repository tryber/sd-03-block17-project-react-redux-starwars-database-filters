import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanet } from './services/fetchAPI';
import Table from './components/Table';
import PropTypes from 'prop-types';
import './App.css';

class Body extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filters: {
  //       filterByName: {
  //         name: '',
  //       },
  //     },
  //   };
  // 
// }

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets('https://swapi-trybe.herokuapp.com/api/planets/');
  }

  render() {
    const { planets, numResults, loading, nextPageURL, fetchPlanets, nameFilter } = this.props;
    if (loading) return (<p>Carregamento...</p>);
    return (
      <div className="Body">
        <Table planets={planets} nameFilter={nameFilter} />
        <p>A pesquisa retornou {numResults} resultados.</p>
        {nextPageURL ? (
        <button onClick={() => (fetchPlanets(nextPageURL))}>Próxima página</button>) :
        <button 
          onClick={() => (fetchPlanets('https://swapi-trybe.herokuapp.com/api/planets/'))}>
          Voltar p/ primeira</button>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.planetReducer.loading,
  planets: state.planetReducer.data,
  numResults: state.planetReducer.count,
  nextPageURL: state.planetReducer.next,
  nameFilter: state.filterReducer.filterByName,
});

// Observe que os nomes são diferentes, já que uma se refere à função original
// e o outro, à importada
const mapDispatchToProps = (dispatch) => (
  {
    fetchPlanets: (u) => dispatch(fetchPlanet(u)),
  }
);

Body.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.string.isRequired),
  numResults: PropTypes.number.isRequired,
  fetchPlanet: PropTypes.func.isRequired,
  fetchPlanets: PropTypes.func.isRequired,
  nextPageURL: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
