import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

class Table extends React.Component {
  static filterByNumericValues(planets, { column, comparison, value }) {
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
  }

  filterByName(planets) {
    const { searched } = this.props;
    return planets.filter(({ name }) => name.includes(searched));
  }

  sortBySelectedOrder(planets, selectedOrder) {
    const { sort } = selectedOrder;
    switch (sort) {
      case 'ASC': {
        const { column } = selectedOrder;
        planets.sort((a,b) => {
          return a[column.toLowerCase()] > b[column.toLowerCase()];
        })

        return planets;
      }

      case 'DESC': {
        const { column } = selectedOrder;
        planets.sort((a,b) => {
          return a[column.toLowerCase()] < b[column.toLowerCase()];
        })

        return planets;
      }

      default: {
        return planets;
      }
    }
  }

  filterByParams() {
    const { planets, numericValues, selectedOrder } = this.props;

    let arrFiltered = this.filterByName(planets);

    this.sortBySelectedOrder(arrFiltered, selectedOrder);

    numericValues.forEach(
      (filtro) =>
        (arrFiltered = Table.filterByNumericValues(arrFiltered, filtro))
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
  selectedOrder: state.filters.order,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  searched: PropTypes.string.isRequired,
  numericValues: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  numericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: '150000',
    },
  ],
};
