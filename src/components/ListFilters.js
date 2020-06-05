import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

class ListFilters extends React.Component {
  render() {
    const { filterByNumericValues, clearFilter } = this.props;
    return (
      filterByNumericValues.map(({ column, comparison, value }, index) => {
        if (column && comparison && value) {
          return (
            <div key={`${column} Filter`} data-testid="filter">
              <span>{`Filter ${index}: ${column} ${comparison} ${value}`}</span>
              <button onClick={() => clearFilter(index)}>X</button>
            </div>
          );
        }
        return undefined;
      })
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  clearFilter: (index) => dispatch(actions.removeFilter(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListFilters);

ListFilters.defaultProps = {
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

ListFilters.propTypes = {
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object),
  clearFilter: PropTypes.func.isRequired,
};
