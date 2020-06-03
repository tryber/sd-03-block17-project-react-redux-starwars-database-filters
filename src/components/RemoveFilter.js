import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { element } from 'prop-types';
import { removeFilterNumeric } from '../action';

function RemoveFilter({ numericValues, removeFilterNumeric }) {
  const onClick = (index) => removeFilterNumeric(index)
  return numericValues.map((element, index) => {
    if (element.column === '') return false
    return (
      <div data-testid="filter" key={element.column} >
        <span>
          {console.log(index)}
          {`${element.column} - ${element.comparison} - ${element.value} `}
        </span>
        <button onClick={() => onClick(index)}>X</button>
      </div >
    )
  });
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilterNumeric: (index) =>
    dispatch(removeFilterNumeric(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFilter);

RemoveFilter.propTypes = {
  numericValues: PropTypes.arrayOf(PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  removeFilterNumeric: PropTypes.func.isRequired,
};

