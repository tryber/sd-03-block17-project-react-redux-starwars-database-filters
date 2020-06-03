import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const comparisonOptions = ['Maior que', 'Menor que', 'Igual a'];

const renderOptions = (optionsList) => (
  optionsList.map((option) => <option key={option} value={option}>{option}</option>)
);

const renderSelectOf = (name, value, optionsList) => (
  <label htmlFor={name}>
    <select
      data-testid={name}
      name={name}
      value={value}
    >{renderOptions(optionsList)}</select>
  </label>
);

const NumFilter = (
  { columnOptions, filterValues: { column, comparison, value } }
) => (
  <div>
    {renderSelectOf('column-filter', column, columnOptions)}
    {renderSelectOf('comparison-filter', comparison, comparisonOptions)}
    <label htmlFor="value-filter">
      <input
        data-testid="value-filter"
        id="value-filter"
        name="value-filter"
        value={value}
      />
    </label>
  </div>
);

NumFilter.propTypes = {
  columnOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  comparisonOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  column: PropTypes.string,
  comparison: PropTypes.string,
  value: PropTypes.number,
};

NumFilter.defaultProps = {
  column: '',
  comparison: '',
  value: null,
};

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(null, mapDispatchToProps)(NumFilter);
