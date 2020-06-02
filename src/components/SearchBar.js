import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterList } from '../actions';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={(event) => this.props.filterList(event.target.value.toLowerCase())}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterList: (e) => dispatch(filterList(e)),
});

SearchBar.propTypes = {
  filterList: PropTypes.function,
};

export default connect(null, mapDispatchToProps)(SearchBar);
