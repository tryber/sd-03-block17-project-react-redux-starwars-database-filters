import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filtersNameAction } from '../actions/filtersNameAction';
import { removeFilterDisplayAction } from '../actions/removeFilterDisplayAction';

const displayFilterName = (column, arrFilters, dispatchOne) => {
  const newArr = [...arrFilters];
  newArr.push(column);
  dispatchOne(newArr);
};

const displaySearches = (column, arrSearches, dispatch) => {
  const newArr = [...arrSearches].filter((e) => e.column !== column);
  dispatch(newArr);
};

const SelectedFilters = (props) => {
  const {
    numericSearched,
    allFiltersArr,
    changeFiltersDisplay,
    removeFilterDisplay,
  } = props;
  if (numericSearched.length === 0) return <div />;
  return (
    <div data-testid="filter">
      {numericSearched.map((e) => (
        <div key={e.column}>
          <div>{e.column}</div>
          <div>{e.comparison}</div>
          <div>{e.value}</div>
          <button
            type="button"
            onClick={() => {
              displayFilterName(e.column, allFiltersArr, changeFiltersDisplay);
              displaySearches(e.column, numericSearched, removeFilterDisplay);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  numericSearched: state.filters.filterByNumericValues,
  allFiltersArr: state.filtersArrReducer.allFilters,
});

const mapDispatchToProps = (dispatch) => ({
  changeFiltersDisplay: (arr) => dispatch(filtersNameAction(arr)),
  removeFilterDisplay: (arr) => dispatch(removeFilterDisplayAction(arr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters);

SelectedFilters.propTypes = {
  numericSearched: PropTypes.arrayOf(PropTypes.any),
  allFiltersArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeFiltersDisplay: PropTypes.func,
  removeFilterDisplay: PropTypes.func,
};

SelectedFilters.defaultProps = {
  numericSearched: [],
  changeFiltersDisplay: () => {},
  removeFilterDisplay: () => {},
};
