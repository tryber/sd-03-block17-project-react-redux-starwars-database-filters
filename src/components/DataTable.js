import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  filterComparison(column, comparison, value, planet) {
    console.log(this.state);
    switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'menor que':
        return Number(planet[column]) < Number(value);
      case 'igual a':
        return Number(planet[column]) === Number(value);
      default:
        return [];
    }
  }

  orderASC(numberValues, column, data) {
    console.log(this.state);
    let sorted = data;
    if (numberValues.includes(column)) {
      sorted = data.sort(function (a, b) {
        if (Number(a[column]) > Number(b[column])) {
          return 1;
        }
        if (Number(a[column]) < Number(b[column])) {
          return -1;
        }
        return 0;
      });
    } else {
      sorted = data.sort(function (a, b) {
        if ((a[column]) > (b[column])) {
          return 1;
        }
        if ((a[column]) < (b[column])) {
          return -1;
        }
        return 0;
      });
    }
    return sorted;
  }

  orderDESC(numberValues, column, data) {
    console.log(this.state);
    let sorted = data;
    if (numberValues.includes(column)) {
      sorted = data.sort(function (a, b) {
        if (Number(a[column]) < Number(b[column])) {
          return 1;
        }
        if (Number(a[column]) > Number(b[column])) {
          return -1;
        }
        return 0;
      });
    } else {
      sorted = data.sort(function (a, b) {
        if ((a[column]) < (b[column])) {
          return 1;
        }
        if ((a[column]) > (b[column])) {
          return -1;
        }
        return 0;
      });
    }
    return sorted;
  }

  orderPlanets(filteredData) {
    const { order: { sort } } = this.props;
    let { order: { column } } = this.props;
    column = (column === 'Name') ? 'name' : column;
    const numberValues = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const newData = (sort === 'ASC')
      ? this.orderASC(numberValues, column, filteredData)
      : this.orderDESC(numberValues, column, filteredData);
    return newData;
  }

  filterNames(filteredData) {
    const { filterByName } = this.props;
    return filteredData.filter(({ name }) => name.match(new RegExp(filterByName.name, 'i')));
  }

  filterNumeric(filteredData) {
    const { filterByNumericValues } = this.props;
    return filterByNumericValues.reduce((acc, { column, comparison, value }) => {
      console.log('teste');
      return acc.filter((planet) => this.filterComparison(column, comparison, value, planet));
    }, filteredData);
  }

  renderTableHead() {
    const { data } = this.props;
    return (
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  renderTableBody() {
    const { data } = this.props;
    let filteredData = data;
    filteredData = this.orderPlanets(filteredData);
    filteredData = this.filterNames(filteredData);
    filteredData = this.filterNumeric(filteredData);
    return (
      <tbody>
        {filteredData.map((planet) => (
          <tr key={planet.name}>
            {Object.values(planet).map((planetValue) => (
              <td key={planetValue}>{planetValue}</td>))}
          </tr>
        ))}
      </tbody>
    );
  }

  renderTable() {
    return (
      <table border="1px">
        {this.renderTableHead()}
        {this.renderTableBody()}
      </table>
    );
  }

  render() {
    return (
      <div>
        {this.renderTable()}
      </div>
    );
  }
}

const mapStateToProps = ({
  reducerFetchPlanets: { data },
  filters: { filterByName, filterByNumericValues, order },
}) => ({
  data,
  filterByName,
  filterByNumericValues,
  order,
});

DataTable.propTypes = {
  data: PropTypes.instanceOf(Array),
  filterByName: PropTypes.shape({
    name: PropTypes.string,
  }),
  filterByNumericValues: PropTypes.instanceOf(Array),
  order: PropTypes.shape({
    column: PropTypes.string,
    sort: PropTypes.string,
  }),
};

DataTable.defaultProps = {
  data: [],
  filterByNumericValues: [],
  filterByName: {},
  order: {},
};

export default connect(mapStateToProps)(DataTable);
