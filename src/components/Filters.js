import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import actionFilterNames from '../store/actions/actionFilterNames';
import actionAddFilterValues from '../store/actions/actionAddFilterValues';

export class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
      options: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { column, comparison, value, options } = this.state;
    const { }
  }

  renderInputName() {
    const { filterNames } = this.props;
    return (
      <div>
        <input data-testid='name-filter' type="text" onChange={(e) => filterNames(e.target.value)} />
      </div>
    );
  }

  renderOptionsFilter() {
    const { options } = this.state;
    return (
      <div>
        <select data-testid='column-filter' name="column" onChange={(e) => this.handleChange(e)}>
          <option value="" />
          {options.map((column) => <option value={column} key={column}>{column}</option>)}
        </select>
      </div>
    )
  }

  renderComparisonFilter() {
    return (
      <div>
        <select testid='comparison-filter' name="comparison" onChange={(e) => this.handleChange(e)}>
          <option value="" />
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
        </select>
      </div>
    );
  }

  renderValueFilter() {
    return (
      <div>
        <input data-testid='value-filter' type="number" name="value" onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }

  renderSubmitButton() {
    const
    <button data-testid='button-filter'>Adicionar Filtro</button>
  }

  render() {
    return (
      <div>
        {this.renderInputName()}
        {this.renderOptionsFilter()}
        {this.renderComparisonFilter()}
        {this.renderValueFilter()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ filterNames: actionFilterNames }, dispatch);
};

Filters.propTypes = {
  filterNames: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Filters);
