import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterName } from '../actions';

class Filters extends Component {
  render() {
    const { getFilterByName } = this.props;

    console.log('My name:', this.props.name);
    return (
      <div>
        <h3>Filter results</h3>
        <input data-testid='name-filter' type="text" placeholder="Type a planet name" value={this.props.name} onChange={(event) => getFilterByName(event.target.value)}></input>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
})

const mapDispatchToProps = (dispatch) => ({
  getFilterByName: (name) => dispatch(filterName(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
