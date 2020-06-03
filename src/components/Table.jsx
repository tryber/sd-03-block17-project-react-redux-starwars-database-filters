import React from 'react';
import { connect } from 'react-redux';
import './Layout/Table.css';
import DispatchStore from '../services/dispatchStore';
import TableData from './TableData';

const tableForm = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Rotation</th>
      <th>Orbital</th>
      <th>Diameter</th>
      <th>Climate</th>
      <th>Gravity</th>
      <th>Terrain</th>
      <th>Surface Water</th>
      <th>Population</th>
      <th>films</th>
      <th>created</th>
      <th>edited</th>
      <th>url</th>
    </tr>
  </thead>
);

class Table extends React.Component {

  // filterSelectedValues() {
  //   const { selectInput, planets } = this.props;
  //   const { column, comparison, value } = selectInput;

  //   let arrayFilterPlanets = [];

  //   if (column && comparison && value) {
  //     return planets.map((elem) => elem.name)
  //   }
  // }

  filteredPlanets(planets) {
    const { filterByName } = this.props;
    if (filterByName !== '') {
      return planets.filter(({ name }) => name.toLowerCase().includes(filterByName.toLowerCase()));
    }
    return planets;
  }

  render() {
    const { planets, isFetching } = this.props;
    return (
      <div className="container">
        <h1 className="titleTable">
          como príncipe lutaste com Deus e com os homens, e prevaleceste.
          Gênesis 32:28
        </h1>
        {/* {this.filterSelectedValues()} */}
        <div className="TabelaProdutos">
          <DispatchStore />
          <table>
            {tableForm()}
            <tbody>
              {isFetching ? 'Loading' : <TableData data={this.filteredPlanets(planets)} />}
            </tbody>
          </table>
        </div>
        <div className="barFilter">
        </div>
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

// const mapDispatch = dispatch =>
//   bindActionCreators({ filterByName }, dispatch);

export default connect(mapStateToProps)(Table);
