import React, { Component } from 'react';

class InputByNumber extends Component {
  render() {
    const { changeFilter } = this.props;
    return (
      <div>
        <p className='control'>
          <input
            id='value'
            className='input is-info'
            type='number'
            placeholder='Informe um número'
            data-testid='value-filter'
            onChange={(e) => changeFilter(e)}
          />
        </p>
      </div>
    );
  }
}

export default InputByNumber;
