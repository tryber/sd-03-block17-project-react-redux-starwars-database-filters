import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchBox from './SearchBox';
import NumFilter from './NumFilter';
import FilterSetted from './FilterSetted';
import OrderFilters from './OrderFilters';

import { changeTable } from '../actions/changeTableActions';

import * as constants from '../services/constants';
import './FiltersBar.css';

const takeUnused = (completeList, usedListOfObj) => (
  completeList.filter((option) => (
    usedListOfObj.every(({ column }) => column !== option)
  ))
);

const FilterBar = ({ numFilters, changeTableFormat, isClassicFormatTable }) => (
  <section className="filter-bar">
    <div className="filters">
      <SearchBox />
      <NumFilter columnOptions={takeUnused(constants.numColumn, numFilters)} />
      <OrderFilters />
      <button
        className="radius-border filter-button"
        type="button"
        onClick={() => changeTableFormat(!isClassicFormatTable)}
      >
        Change Table Format
      </button>
    </div>
    {numFilters.map(({ column, comparison, value }, id) => (
      <FilterSetted
        id={id}
        key={column}
        column={column}
        comparison={comparison}
        value={value}
      />
    ))}
  </section>
);

const mapStateToProps = ({ filters: { filterByNumericValues }, format }) => ({
  numFilters: [...filterByNumericValues],
  isClassicFormatTable: format,
});

const mapDispatchToProps = (dispatch) => ({
  changeTableFormat: (isClassic) => dispatch(changeTable(isClassic)),
});

FilterBar.propTypes = {
  numFilters: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired),
  ).isRequired,
  isClassicFormatTable: PropTypes.bool,
};

FilterBar.defaultProps = { isClassicFormatTable: false };

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
