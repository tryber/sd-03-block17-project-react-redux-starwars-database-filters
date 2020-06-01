import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Filters from './Filters';
import A_fetchPlanets from '../store/actions/A_fetchPlanets';

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { A_fetchPlanets } = this.props;
    A_fetchPlanets();
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
    const { loading, error, data } = this.props;
    if (!loading && data !== undefined) {
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

const mapStateToProps = (state) => ({
  loading: state.R_fetchPlanets.loading,
  error: state.R_fetchPlanets.error,
  data: state.R_fetchPlanets.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ A_fetchPlanets }, dispatch);


Table.propTypes = {
  A_fetchPlanets: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
