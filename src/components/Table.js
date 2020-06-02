import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Filters from './Filters';
import ActionPlanets from '../store/actions/ActionPlanets';

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { ActionPlanets } = this.props;
    ActionPlanets();
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ ActionPlanets }, dispatch);


Table.propTypes = {
  ActionPlanets: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
