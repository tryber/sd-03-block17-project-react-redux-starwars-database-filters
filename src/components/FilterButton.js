import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByNumericValue } from '../actions/index';

class FilterButton extends Component {
  render() {
    const { clickParam, filterTable } = this.props;
    return (
      <div className="field">
        <div className="control">
          <button
            className="button is-info"
            type="button"
            data-testid="button-filter"
            onClick={() => filterTable(clickParam)}
          >
            Filtrar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterTable: (filter) => dispatch(filterByNumericValue(filter)),
});

export default connect(null, mapDispatchToProps)(FilterButton);

FilterButton.PropTypes = {
  clickParam: PropTypes.object.isRequired,
  filterTable: PropTypes.func.isRequired,
};

FilterButton.defaultProps = {
  clickParam: { column: '', comparison: '', value: '' },
};
