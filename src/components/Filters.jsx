import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterByName from '../actions/filterByName';
import filterByNumericValue from '../actions/filterByNumericValue';
import Option from './Option';
import disableSelect from '../actions/disableSelect';

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

  render() {
    const { byName } = this.props;
    return (
      <div>
        <input data-testid="name-filter" type="text" onChange={(e) => byName(e.target.value)} />
        {this.selectColumn()}
        {this.selectComparison()}
        {this.filterValueInput()}
        {this.filterButton()}
      </div>
    );
  }
}

Filters.propTypes = {
  byName: PropTypes.func.isRequired,
  byNumeric: PropTypes.func.isRequired,
  avaliableFilters: PropTypes.objectOf(PropTypes.array).isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { byName: filterByName, byNumeric: filterByNumericValue, disable: disableSelect },
  dispatch,
);

const mapStateToProps = (state) => ({
  avaliableFilters: state.filters.avaliableFilters,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
