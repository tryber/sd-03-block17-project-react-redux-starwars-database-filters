import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { filterInputName } from '../Actions';

import './Table.css';

class InputNamePlanet extends Component {

  render() {
    const { data, filterInputName } = this.props;
    return (
      <form className="value">
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Filter Name"
            type="text"
            data-testid="name-filter"
            onChange={(event) => filterInputName(data, event.target.value)}
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ filterInputName }, dispatch);


export default connect(null, mapDispatchToProps)(InputNamePlanet);
