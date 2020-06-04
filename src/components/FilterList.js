import React from 'react';
import { connect } from 'react-redux';
import { removeFilter } from '../actions';
import PropTypes from 'prop-types';

class FilterList extends React.Component {
  render() {
    const { valueFilters, removeFilter } = this.props;
    if (valueFilters.length !== 0) {
      return (
        <div>
          {valueFilters.map((filter) => {
            return (
              <p key={filter.column} data-testid="filter">
                <button type="button" onClick={() => removeFilter(filter)}>
                  X
              </button>
                <span>{`${filter.column} `}</span>
                <span>{`${filter.comparison} `}</span>
                <span>{filter.value}</span>
              </p>
            )
          })}
        </div>
      )
    }
    return (
      <p>No Filter Aplied</p>
    )
  }
}

FilterList.propTypes = {
  valueFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  valueFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (object) => dispatch(removeFilter(object)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
