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
    const { data, filterByName, filterByNumericValues } = this.props;
    console.log('filters', filterByName);
    let filteredData = data.filter(({ name }) => name.match(new RegExp(filterByName.name, 'i')));
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      filteredData = filteredData.filter((planet) => this.filterComparison(column, comparison, value, planet));
    });
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
  reducerFetchPlanets,
  filters: { filterByName, filterByNumericValues },
}) => ({
  data: reducerFetchPlanets.data,
  filterByName,
  filterByNumericValues,
});

DataTable.propTypes = {
  data: PropTypes.instanceOf(Array),
  filterByName: PropTypes.shape({
    name: PropTypes.string,
  }),
  filterByNumericValues: PropTypes.instanceOf(Array),

};

DataTable.defaultProps = {
  data: [],
  filterByNumericValues: [],
  filterByName: {},
};

export default connect(mapStateToProps)(DataTable);
