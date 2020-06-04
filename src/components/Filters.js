import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import SortFilters from './SortFilters';
import actionFilterNames from '../store/actions/actionFilterNames';
import actionAddFilterValues from '../store/actions/actionAddFilterValues';
import actionRemoveFilterValues from '../store/actions/actionRemoveFilterValues';
import actionSortFilter from '../store/actions/actionSortFilter';
import './Filters.css';

export class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const {
      column, comparison, value,
    } = this.state;
    const { addFilter } = this.props;
    if (value === '') return false;
    addFilter(column, comparison, value);
    this.setState({
      column: '',
      comparison: '',
      value: '',
    });
    return true;
  }

  handleRemove(column) {
    const { removeFilter } = this.props;
    removeFilter(column);
  }

  renderInputName() {
    const { filterNames } = this.props;
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(e) => filterNames(e.target.value)}
        />
      </div>
    );
  }

  renderOptionsFilter() {
    const { options } = this.props;
    return (
      <div>
        <select data-testid="column-filter" name="column" onChange={(e) => this.handleChange(e)}>
          <option value="" />
          {options.map((column) => <option value={column} key={column}>{column}</option>)}
        </select>
      </div>
    );
  }

  renderComparisonFilter() {
    return (
      <div>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={(e) => this.handleChange(e)}
        >
          <option value="" />
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </div>
    );
  }

  renderValueFilter() {
    const { value } = this.state;
    return (
      <div>
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          onChange={(e) => this.handleChange(e)}
          value={value}
        />
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <button
        data-testid="button-filter"
        type="button"
        onClick={() => this.handleSubmit()}
      >
        Adicionar Filtro
      </button>
    );
  }

  renderActiveFilters(filterByNumericValues) {
    if (filterByNumericValues.length === 0 || filterByNumericValues[0].column === '') return false;
    return (
      <div>
        {filterByNumericValues.map(({ column, comparison, value }) => (
          <p data-testid="filter">
            {`Filtro aplicado: ${column} | ${comparison} | ${value} `}
            <button
              key={column}
              type="button"
              value="X"
              onClick={() => this.handleRemove(column)}
            >
              X
            </button>
          </p>
        ))}
      </div>
    );
  }

  render() {
    const { filterByNumericValues } = this.props;
    return (
      <div>
        <div className="filterBox">
          {this.renderInputName()}
          {this.renderOptionsFilter()}
          {this.renderComparisonFilter()}
          {this.renderValueFilter()}
          {this.renderSubmitButton()}
        </div>
        <SortFilters />
        <div>
          {this.renderActiveFilters(filterByNumericValues)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  filters: { filterByNumericValues, options },
}) => ({
  filterByNumericValues,
  options,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    filterNames: actionFilterNames,
    addFilter: actionAddFilterValues,
    removeFilter: actionRemoveFilterValues,
    sortFilter: actionSortFilter,
  }, dispatch,
);

Filters.propTypes = {
  filterNames: PropTypes.func.isRequired,
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.instanceOf(Array),
  options: PropTypes.instanceOf(Array),
};

Filters.defaultProps = {
  filterByNumericValues: [{
    column: '',
    comparison: '',
    value: '',
  }],
  options: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
