import React from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions'

class FilterBar extends React.Component {
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
  filter: (name) => dispatch(filterByName(name)),
});

export default connect(null, mapDispatchToProps)(FilterBar);
