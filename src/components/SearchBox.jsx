import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import typeName from '../actions/SearchTextAction';

function SearchBox({ searchText, onType }) {
  return (
    <label htmlFor="search-text-input" className="container">
      <span>Search By Name</span>
      <input
        className="radius-border"
        data-testid="name-filter"
        id="search-text-input"
        type="text"
        value={searchText}
        onChange={({ target: { value } }) => onType(value)}
      />
    </label>
  );
}

const mapStateToProps = ({ filters: { filterByName } }) => ({ searchText: filterByName.name });

const mapDispatchToProps = (dispatch) => ({ onType: (text) => dispatch(typeName(text)) });

SearchBox.propTypes = {
  searchText: PropTypes.string.isRequired,
  onType: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
