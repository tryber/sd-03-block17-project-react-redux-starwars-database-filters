import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilter } from '../actions';

class FilterList extends React.Component {
  render() {
    const { valueFilters, removeSelectedFilter } = this.props;
    if (valueFilters.length !== 0) {
      return (
        <div>
          {valueFilters.map((filter) =>
            <p key={filter.column} data-testid="filter">
              <button type="button" onClick={() => removeSelectedFilter(filter)}>
                X
              </button>
              <span>{`${filter.column} `}</span>
              <span>{`${filter.comparison} `}</span>
              <span>{filter.value}</span>
            </p>,
          )}
        </div>
      );
    }
    return (
      <p>No Filter Aplied</p>
    );
  }
}

FilterList.propTypes = {
  removeSelectedFilter: PropTypes.func.isRequired,
  valueFilters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  valueFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeSelectedFilter: (object) => dispatch(removeFilter(object)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
