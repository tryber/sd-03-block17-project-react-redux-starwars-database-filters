import React from 'react';
import { connect } from 'react-redux';
import './Layout/Table.css';
import DispatchStore from '../services/dispatchStore';
import TableData from './TableData';

function switchComparison(column, comparison, value, planet) {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    default:
      return [];
  }
}

class Table extends React.Component {
  filterSelectedValues(data) {
    const { selectInput } = this.props;
    console.log(selectInput);
    if (selectInput) {
      return selectInput.reduce(
        (acc, { column, comparison, value }) =>
          acc.filter((planet) => switchComparison(column, comparison, value, planet)),
        this.filteredPlanet(data),
      );
    }
    return this.filteredPlanet(data);
  }

  filteredPlanet(planets) {
    const { filterByName } = this.props;
    if (filterByName !== '') {
      return planets.filter(({ name }) => name.toLowerCase().includes(filterByName.toLowerCase()));
    }
    return planets;
  }

  render() {
    const { planets, isFetching } = this.props;
    const planetsData = planets;
    return (
      <div className="container">
        <h1 className="titleTable">
          como príncipe lutaste com Deus e com os homens, e prevaleceste.
          Gênesis 32:28
        </h1>
        <div className="TabelaProdutos">
          <DispatchStore />
          <tbody>
            {isFetching ? 'Loading' : <TableData data={this.filterSelectedValues(planetsData)} />}
          </tbody>
        </div>
        {/* <div className="barFilter">
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.requestAPI.data,
  isFetching: state.requestAPI.isFetching,
  filterByName: state.filters.filterByName.name,
  selectInput: state.filters.filterByNumericValues,
});

// Table.propType = {

// }
// const mapDispatch = dispatch =>
//   bindActionCreators({ filterByName }, dispatch);

export default connect(mapStateToProps)(Table);
