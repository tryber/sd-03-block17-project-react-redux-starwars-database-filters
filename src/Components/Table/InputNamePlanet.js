import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filters } from '../Actions';

import './Table.css';

class InputNamePlanet extends Component {
  render() {
    const { getFilters } = this.props;
    return (
      <form>
        <input
          placeholder="Filter Name"
          type="text"
          data-testid="name-filter"
          onChange={(e) => getFilters(e.target.value)}
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFilters: (e) => dispatch(filters(e)),
});

export default connect(null, mapDispatchToProps)(InputNamePlanet);
