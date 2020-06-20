import React from 'react';
import { connect } from 'react-redux';

export class TagNumericFilters extends React.Component {
  render() {
    const { filters } = this.props;

    return (
      <div>
        {filters.map((element) => (
          <label htmlFor="">
            {element.column}
            <button data-testid="filter" type="button">x</button>
          </label>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(TagNumericFilters);
