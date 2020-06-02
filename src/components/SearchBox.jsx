import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function SearchBox({ searchText }) {
  return (
    <div>
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchText: state.filters.filterByName,
});

SearchBox.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(SearchBox);
