import React from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions'

class FilterBar extends React.Component {

  attStateWithFilter(event) {
    // const { filter } = this.props;
    console.log(event.target.value);
    // filter(event.target.value)
  }

  render() {
    const { filter } = this.props;
    return (
      <form>
        <input onChange={(event) => filter(event.target.value)} data-testid='name-filter'type='text' placeholder='Filtro'/>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filter: (e) => dispatch(filterByName(e)),
});

export default connect(null, mapDispatchToProps)(FilterBar);
