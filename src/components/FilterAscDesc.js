import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sort } from '../actions/index';
// import PropTypes from 'prop-types';

import SelectOrder from './SelectOrder';
import RadioOrder from './RadioOrder';

class FilterAscDesc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      sort: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { goSort } = this.props;
    return (
      <div className='container'>
        <div className='field is-grouped'>
          <SelectOrder handleOrder={this.handleChange} />
          <RadioOrder handleOrder={this.handleChange} />
          <button
            data-testid='column-sort-button'
            className='button is-info'
            type='button'
            onClick={() => goSort(this.state)}
          >
            Ordenar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goSort: (selectedState) => dispatch(sort(selectedState)),
});

export default connect(null, mapDispatchToProps)(FilterAscDesc);
