import React, { Component } from 'react';
import InputByName from './InputByName';
import SelectColumn from './SelectColumn';
import SelectComparison from './SelectComparison';
import InputByNumber from './InputByNumber';
import FilterButton from './FilterButton';

class Filters extends Component {
  render() {
    return (
      <div>
        <InputByName />
        <div className='field is-horizontal'>
          <div className='field-body'>
            <div className='field is-grouped'>
              <SelectColumn />
              <SelectComparison />
              <InputByNumber />
            </div>
          </div>
        </div>
        <FilterButton />
      </div>
    );
  }
}

export default Filters;
