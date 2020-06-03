import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions/NumFilterActions';

const comparisonOptions = ['maior que', 'menor que', 'igual a'];

const renderOptions = (optionsList) => (
  ['', ...optionsList].map((option) => <option key={option} value={option}>{option}</option>)
);

class NumFilter extends React.Component {
  renderSelectOf (name, value, optionsList) {
    const { id, onChange } = this.props;
    return (
      <label htmlFor={name}>
        <select
          data-testid={`${name}-filter`}
          defaultValue={value}
          id={name}
          name={name}
          onChange={({ target: { value: nextValue } }) => onChange(name, nextValue, id)}
        >{renderOptions(optionsList)}</select>
      </label>
    );
  }

  render() {
    const { columnOptions, filterValues, onChange, id, activateFilter } = this.props;
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
            onChange={({ target: { value } }) => onChange('value', value, id)}
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={() => activateFilter(id)}
        >Activate
        </button>
      </div>
    );
  }
}

NumFilter.propTypes = {
  columnOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  column: PropTypes.string,
  comparison: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  activateFilter: PropTypes.func.isRequired,
};

NumFilter.defaultProps = {
  column: '',
  comparison: '',
  value: null,
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (filter, value, id) => dispatch(actions.changeValue(filter, value, id)),
  activateFilter: (id) => dispatch(actions.createFilter(id)),
});

export default connect(null, mapDispatchToProps)(NumFilter);
