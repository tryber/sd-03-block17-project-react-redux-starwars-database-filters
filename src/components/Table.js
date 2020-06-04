import React from 'react';
import { connect } from 'react-redux';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.filterByParams = this.filterByParams.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.filterByNumericValues = this.filterByNumericValues.bind(this);
  }

  filterByName = (planets) => {
    const { searched } = this.props;
    return planets.filter(({ name }) => name.includes(searched));
  };

  filterByNumericValues = (planets, { column, comparison, value }) => {
    switch (comparison) {
      case 'maior que':
        return planets.filter(
          (planet) => Number(planet[column]) > Number(value)
        );
      case 'menor que':
        return planets.filter(
          (planet) => Number(planet[column]) < Number(value)
        );
      case 'igual a':
        return planets.filter(
          (planet) => Number(planet[column]) === Number(value)
        );
      default:
        return planets;
    }
  };

  filterByParams() {
    const { planets, numericValues } = this.props;
    let arrFiltered = this.filterByName(planets);

    numericValues.forEach(
      (filtro) =>
        (arrFiltered = this.filterByNumericValues(arrFiltered, filtro))
    );

    return arrFiltered;
  }

  render() {
    return (
      <div className='table-container'>
        <table className='table is-hoverable is-striped'>
          <TableHeaders />
          <TableBody arrPlanets={this.filterByParams()} />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.apiReducer.data,
  searched: state.filters.filterByName.name,
  numericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(Table);
