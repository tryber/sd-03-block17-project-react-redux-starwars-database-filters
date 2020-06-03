import React from 'react';
import { connect } from 'react-redux';
import { filterRows } from '../actions';

class SearchBar extends React.Component {
  render() {
    const { filterByName } = this.props;
    return(
      <div>
        <label htmlFor="name-filter">Filtrar por nome </label>
        <input
          data-testid="name-filter"
          name="inputFilter"
          onChange={(e) => {
            filterByName(e.target.value.toLowerCase())
            console.log('Baby step no. 2', filterByName(e.target.value.toLowerCase()))}
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    filterByName: (evt) => dispatch(filterRows(evt)),
  }
)

export default connect(null, mapDispatchToProps)(SearchBar);