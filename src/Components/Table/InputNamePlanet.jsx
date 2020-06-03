import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filters } from '../Actions';

import './Table.css';

class InputNamePlanet extends Component {
  render() {
    const { getFilters } = this.props;
    return (
      <form className="value">
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Filter Name"
            type="text"
            data-testid="name-filter"
            onChange={(e) => getFilters(e.target.value)}
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFilters: (e) => dispatch(filters(e)),
});

export default connect(null, mapDispatchToProps)(InputNamePlanet);
