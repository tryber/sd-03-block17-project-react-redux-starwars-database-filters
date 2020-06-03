import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import changeValue from '../actions/NumFilterActions';

const comparisonOptions = ['Maior que', 'Menor que', 'Igual a'];

const renderOptions = (optionsList) => (
  optionsList.map((option) => <option key={option} value={option}>{option}</option>)
);

class NumFilter extends React.Component {
  renderSelectOf (name, value, optionsList) {
    const { id, onChange } = this.props;
    return (
      <label htmlFor={name}>
        <select
          data-testid={`${name}-filter`}
          id={name}
          name={name}
          onChange={({ target: { value: nextValue } }) => onChange(name, nextValue, id)}
          value={value}
        >{renderOptions(optionsList)}</select>
      </label>
    );
  }

  render() {
    const { columnOptions, filterValues, onChange, id } = this.props;
    const { column, comparison, value } = filterValues;
    return (
      <div>
        {this.renderSelectOf('column', column, columnOptions)}
        {this.renderSelectOf('comparison', comparison, comparisonOptions)}
        <label htmlFor="value-filter">
          <input
            data-testid="value-filter"
            id="value-filter"
            name="value-filter"
            value={value}
            onChange={({ target: { value } }) => onChange('value', value, id)}
          />
        </label>
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
};

NumFilter.defaultProps = {
  column: '',
  comparison: '',
  value: null,
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (filter, value, id) => dispatch(changeValue(filter, value, id)),
});

export default connect(null, mapDispatchToProps)(NumFilter);
