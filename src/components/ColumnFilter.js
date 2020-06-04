import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPlanetsByName } from '../actions';

class NameFilter extends React.Component {
  render() {
    return (
      <input
        type="text"
        data-testid="name-filter"
        onChange={(event) => this.props.filterPlanetsByName(event.target.value.toLowerCase())}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterPlanetsByName: (value) => dispatch(filterPlanetsByName(value)),
});

NameFilter.propTypes = {
  filterPlanetsByName: PropTypes.func,
};

NameFilter.defaultProps = {
  filterPlanetsByName: null,
};

export default connect(null, mapDispatchToProps)(NameFilter);
