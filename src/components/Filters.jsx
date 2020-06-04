import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterByName from '../actions/filterByName';
import filterByNumericValue from '../actions/filterByNumericValue';
import Option from './Option';
import disableSelect from '../actions/disableSelect';
import removeFilter from '../actions/removeFilter';
import enableSelect from '../actions/enableSelect';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'all',
      comparison: 'all',
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectColumn = this.selectColumn.bind(this);
    this.selectComparison = this.selectComparison.bind(this);
    this.filterValueInput = this.filterValueInput.bind(this);
    this.filterButton = this.filterButton.bind(this);
    this.activeFiltersTable = this.activeFiltersTable.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  selectColumn() {
    const { avaliableFilters } = this.props;
    return (
      <select data-testid="column-filter" id="column" onChange={(e) => this.handleChange(e)}>
        {avaliableFilters.columnFilters.reduce((acc, { name, avaliable }) => {
          if (avaliable) acc.push(<Option key={name} name={name} />);
          return acc;
        }, [])}
      </select>
    );
  }

  selectComparison() {
    const { avaliableFilters } = this.props;
    return (
      <select
        data-testid="comparison-filter"
        id="comparison"
        onChange={(e) => this.handleChange(e)}
      >
        {avaliableFilters.comparisonFilters.map((filter) => (
          <Option key={filter} name={filter} />
        ))}
      </select>
    );
  }

  filterValueInput() {
    const { value } = this.state;
    return (
      <input
        data-testid="value-filter"
        id="value"
        type="number"
        value={value}
        onChange={(e) => this.handleChange(e)}
      />
    );
  }

  filterButton() {
    const { byNumeric, avaliableFilters } = this.props;
    const { column, comparison, value } = this.state;
    return (
      <button
        data-testid="button-filter"
        type="button"
        onClick={() => {
          if (column !== 'all' && comparison !== 'all' && value) {
            byNumeric(column, comparison, value);
            const newAvaliableFilters = avaliableFilters.columnFilters;
            newAvaliableFilters[
              newAvaliableFilters.findIndex((filter) => filter.name === column)
            ].avaliable = false;
            disableSelect(newAvaliableFilters);
            this.setState({ column: 'all' });
          }
        }}
      >
        Filtrar
      </button>
    );
  }

  activeFiltersTable() {
    const { activeFilters, rmFilter, avaliableFilters } = this.props;
    return (
      <ul className="list-group">
        {activeFilters.map(({ column, comparison, value }, index) => (
          <li className="list-group-item" key={column} data-testid="filter">
            {`${column} ${comparison} ${value}`}
            <button
              type="button"
              className="btn btn-primary"
              onClick={
              () => {
                const newActiveFilters = activeFilters;
                newActiveFilters.splice(index, 1);
                rmFilter(newActiveFilters);
                const newAvaliableFilters = avaliableFilters.columnFilters;
                newAvaliableFilters[
                  newAvaliableFilters.findIndex((filter) => filter.name === column)
                ].avaliable = true;
                enableSelect(newAvaliableFilters);
              }
            }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { byName } = this.props;
    return (
      <div>
        <input data-testid="name-filter" type="text" onChange={(e) => byName(e.target.value)} />
        {this.selectColumn()}
        {this.selectComparison()}
        {this.filterValueInput()}
        {this.filterButton()}
        {this.activeFiltersTable()}
      </div>
    );
  }
}

Filters.propTypes = {
  byName: PropTypes.func.isRequired,
  byNumeric: PropTypes.func.isRequired,
  rmFilter: PropTypes.func.isRequired,
  avaliableFilters: PropTypes.objectOf(PropTypes.array).isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    byName: filterByName,
    byNumeric: filterByNumericValue,
    disable: disableSelect,
    rmFilter: removeFilter,
    enable: enableSelect,
  },
  dispatch,
);

const mapStateToProps = (state) => ({
  avaliableFilters: state.filters.avaliableFilters,
  activeFilters: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
