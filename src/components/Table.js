import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Filters from './Filters';
import actionFetchPlanets from '../store/actions/actionFetchPlanets';

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
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
    console.log('filtros', filterByNumericValues, filterByName)
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
    const {
      loading, error, data,
    } = this.props;
    if (!loading && data.length !== 0) {
      return (
        <div>
          <h1>StarWars Datatable with Filters:</h1>
          <Filters />
          {this.renderTable()}
        </div>
      );
    }
    if (error) { return <div>{error}</div>; }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = ({
  reducerFetchPlanets,
  reducerFilters: {
    filters: { filterByName, filterByNumericValues },
  },
}) => ({
  loading: reducerFetchPlanets.loading,
  error: reducerFetchPlanets.error,
  data: reducerFetchPlanets.data,
  filterByName,
  filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { fetchPlanets: actionFetchPlanets }, dispatch,
);


Table.propTypes = {
  fetchPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  data: PropTypes.instanceOf(Array),
  filters: PropTypes.shape({
    filterByName: PropTypes.shape({
      name: PropTypes.string,
    }),
    filterByNumericValues: PropTypes.instanceOf(Array),
  }),
};

Table.defaultProps = {
  data: [],
  error: '',
  filters: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
