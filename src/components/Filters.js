import React, { Component } from 'react';
import { connect } from 'react-redux';

getFilteredName = (event) => {
  const { name } = this.props
  return name: event.target.value;
}

class Filters extends Component {
  render() {
    return (
      <div>
        <h3>Filter results</h3>
        <input data-testid='name-filter' type="text" placeholder="Type a planet name" onChange={this.getFilteredName}></input>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.filterName.name,
})

export default connect(mapStateToProps)(Filters);
