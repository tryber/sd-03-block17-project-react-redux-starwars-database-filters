import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import typeName from '../actions/SearchTextAction';

function SearchBox({ searchText, onType }) {
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={searchText}
        onChange={({ target: { value } }) => onType(value)}
      />
    </div>
  );
}

const mapStateToProps = ({ filters: { filterByName } }) => ({
  searchText: filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  onType: (text) => dispatch(typeName(text)),
});

SearchBox.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
