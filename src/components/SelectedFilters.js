import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SelectedFilters = (props) => {
  const { numericSearched } = props;
  return (
    <div>
      {numericSearched.map((e) => (
        <div key={e.column}>
          <div>{e.column}</div>
          <div>{e.comparison}</div>
          <div>{e.value}</div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  numericSearched: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(SelectedFilters);

SelectedFilters.propTypes = {
  numericSearched: PropTypes.arrayOf(PropTypes.any),
};

SelectedFilters.defaultProps = {
  numericSearched: [],
};
