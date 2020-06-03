import React, { Component } from 'react';
import Table from './Table';

import { connect } from 'react-redux';
import { callServiceAPI, filterByName } from '../actions';

class Main extends Component {
  componentDidMount() {
    this.props.getAPIService();
  }

  handleChange(e) {
    const { value } = e.target;
    this.props.filterName(value);
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
              onChange={(e) => this.handleChange(e)}
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
  filterName: (e) => dispatch(filterByName(e)),
});

export default connect(null, mapDispatchToProps)(Main);
