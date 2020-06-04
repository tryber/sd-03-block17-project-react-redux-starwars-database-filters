import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions/NumFilterActions';
import * as funcAPI from '../services/functions';

const comparisonOptions = ['maior que', 'menor que', 'igual a'];

class NumFilter extends React.Component {
  renderSelectOf (name, value, optionsList) {
    const { onChange } = this.props;
    return (
      <label htmlFor={name}>
        <select
          data-testid={`${name}-filter`}
          defaultValue={value}
          id={name}
          name={name}
          onChange={({ target: { value: nextValue } }) => onChange(name, nextValue)}
        >{funcAPI.renderOptions(optionsList)}</select>
      </label>
    );
  }

  sentFilter() {
    const { createFilter } = this.props;
    createFilter();
  }

  render() {
    const { columnOptions, filterValues, onChange } = this.props;
    const { column, comparison, value } = filterValues;
    return (
      <div>
        {this.renderSelectOf('column', column, columnOptions)}
        {this.renderSelectOf('comparison', comparison, comparisonOptions)}
        <label htmlFor="value-filter">
          <input
            data-testid="value-filter"
            defaultValue={value}
            id="value-filter"
            name="value-filter"
            onChange={({ target: { value } }) => onChange('value', value)}
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={() => this.sentFilter()}
        >Activate
        </button>
      </div>
    );
  }
}

NumFilter.propTypes = {
  columnOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  filterValues: PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  createFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filters: { inProgress } }) => ({
  filterValues: inProgress,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (filter, value) => dispatch(actions.changeValue(filter, value)),
  createFilter: () => dispatch(actions.createFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumFilter);
