import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ListFilters extends React.Component {
  render() {
    const { filterByNumericValues } = this.props;
    return (
      filterByNumericValues.map(({ column, comparison, value }) => {
        if (column && comparison && value) {
          return <div key={`${column} Filter`}><span>{`Filter: ${column} ${comparison} ${value}`}</span></div>;
        }
        return undefined;
      })
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(ListFilters);

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
};
