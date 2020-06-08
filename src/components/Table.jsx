import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchData,
} from '../actions/action';

const header = ['name', 'population', 'climate', 'diameter', 'created', 'gravity', 'orbital_period', 'rotation_period',
  'surface_water', 'terrain', 'films', 'edited', 'url'];

function doCompare(e, el) {
  switch (el.comparison) {
    case 'maior que': return parseInt(e[el.column], 10) > parseInt(el.value, 10);
    case 'menor que': return parseInt(e[el.column], 10) < parseInt(el.value, 10);
    case 'igual a': return parseInt(e[el.column], 10) === parseInt(el.value, 10);
    default: return [];
  }
}

class Table extends React.Component {
  static renderTableheaders() {
    return (
      <thead>
        <tr>
          {header.map((e) => <th>{e}</th>)}
        </tr>
      </thead>
    );
  }

  componentDidMount() {
    const { getInfo } = this.props;
    getInfo();
  }

  filterData() {
    const { data, numericFilter } = this.props;
    if (numericFilter) {
      const filteredData = numericFilter
        .reduce((acc, el) => acc.filter((e) => doCompare(e, el)), data);
      if (filteredData) return filteredData;
      return [];
    }
    return [];
  }

  renderTableData() {
    const { filter, data, numericFilter } = this.props;
    return (
      (numericFilter.length === 0) && !filter && data.map((e) => (
        <tr key={e.name}>
          {header.map((el) => <td key={e.name + el}>{e[el]}</td>)}
        </tr>
      ))
    );
  }

  renderFilteredDataByName() {
    const { data, filter, numericFilter } = this.props;

    return (
      (numericFilter.length === 0) && filter && data.filter((e) => e.name.toLowerCase()
        .includes(filter.name.toLowerCase())).map((e) => (
          <tr key={e.name}>
            {header.map((el) => <td key={e.name + el}>{e[el]}</td>)}
          </tr>
      ))
    );
  }

  renderFilteredDataByNumeric() {
    const { numericFilter } = this.props;
    return (
      (numericFilter.length > 0) && this.filterData().map((e) => (
        <tr key={e.name}>
          {header.map((el) => <td key={e.name + el}>{e[el]}</td>)}
        </tr>
      ))
    );
  }

  render() {
    const { order } = this.props;
    console.log(order);
    return (
      <div>
        <table>
          {Table.renderTableheaders()}
          <tbody>
            {this.renderTableData()}
            {this.renderFilteredDataByName()}
            {this.renderFilteredDataByNumeric()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
  filter: state.filters.filterByName,
  numericFilter: state.filters.filterByNumericValues,
  order: state.filters.order,
  columnOptions: state.columnsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  filter: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  numericFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.shape({
    colum: PropTypes.string,
    sort: PropTypes.string,
  }).isRequired,
  getInfo: PropTypes.func.isRequired,
};
