import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../actions';

class InputByName extends Component {
  handleChange(e) {
    const { value } = e.target;
    this.props.filterName(value);
  }

  render() {
    return (
      <div className='field'>
        <label className='label' htmlFor='byName'>
          Filtro pelo nome
        </label>
        <div className='control'>
          <input
            className='input is-info'
            id='byName'
            type='text'
            placeholder='Filtro por nome'
            data-testid='name-filter'
            onChange={(e) => this.handleChange(e)}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterName: (e) => dispatch(filterByName(e)),
});

export default connect(null, mapDispatchToProps)(InputByName);
