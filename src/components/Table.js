import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
    const { data, filterByName: { name }, filterByNumericValues } = this.props;
    console.log('filtros', filterByNumericValues, name);
    return (
      <tbody>
        {data.map((planet) => (
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
  reducerFilters: {
    filters: { filterByName, filterByNumericValues },
  },
}) => ({
  data: reducerFetchPlanets.data,
  filterByName,
  filterByNumericValues,
});

Table.propTypes = {
  data: PropTypes.instanceOf(Array),
  filterByName: PropTypes.shape({
    name: PropTypes.string,
  }),
  filterByNumericValues: PropTypes.instanceOf(Array),

};

Table.defaultProps = {
  data: [],
  filterByNumericValues: [],
  filterByName: {},
};

export default connect(mapStateToProps)(Table);
