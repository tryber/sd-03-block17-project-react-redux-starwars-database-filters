import React, { Component } from 'react';
// import { connect } from 'react-redux';

class InputByNumber extends Component {
  render() {
    return (
      <div>
        <p className='control'>
          <input
            className='input is-info'
            type='number'
            placeholder='Informe um número'
            data-testid='value-filter'
          />
        </p>
      </div>
    );
  }
}

// export default connect(null, mapDispatchToProps)(InputByNumber);
export default InputByNumber;
