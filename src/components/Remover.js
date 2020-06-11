import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilters } from '../actions/RemoveFIlterAction';

class Remove extends React.Component {
  constructor(props) {
    super(props);
    this.display = this.display.bind(this);
  }

  display(list) {
    const { removed } = this.props;
    return (
      <p
        key={list.column}
        data-testid="filter"
      >
        <span>{list.comparison}</span>
        <span>{list.column}</span>
        <span>{list.value}</span>
        <button
          type="button"
          onClick={() => removed(list)}
        >
          X
        </button>
      </p>
    );
  }

  render() {
    const { filterChoice } = this.props;
    const infoFilters = filterChoice.filter((elem) => elem.column !== '');
    return (
      <div>
        <h1>Used Filters</h1>
        {infoFilters.map((filter) => this.displayFilters(filter))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterChoice: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removed: (elem) => dispatch(removeFilters(elem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Remove);

Remove.propTypes = {
  filterChoice: PropTypes.arrayOf(
    PropTypes.shape({
      comparison: PropTypes.string,
      column: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  removed: PropTypes.func.isRequired,
};
