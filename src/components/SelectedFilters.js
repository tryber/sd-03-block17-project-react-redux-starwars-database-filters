import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedFilters extends Component {
  render() {
    const { numericValues } = this.props;
    return (
      <span>
        {numericValues.map((filter) => {
          return (
            <span className='tag is-dark is-normal' data-testid='filter' id={filter.column}>
              {filter.column}-{filter.comparison}-{filter.value}
              <button class='delete is-normal'>X</button>
            </span>
          );
        })}
      </span>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(SelectedFilters);
