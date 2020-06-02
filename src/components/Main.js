import React, { Component } from 'react';
import Table from './Table';

import { connect } from 'react-redux';
import { callServiceAPI } from '../actions';

class Main extends Component {
  componentDidMount() {
    this.props.getAPIService();
  }

  render() {
    return (
      <div>
        <div className='field'>
          <label className='label' htmlFor='byName'>
            Filtro pelo nome
          </label>
          <div className='control'>
            <input
              className='input'
              id='byName'
              type='text'
              placeholder='Filtro por nome'
              data-testid='name-filter'
            />
          </div>
        </div>
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAPIService: () => dispatch(callServiceAPI()),
});

export default connect(null, mapDispatchToProps)(Main);
