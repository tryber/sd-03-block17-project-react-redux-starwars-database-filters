import React, { Component } from 'react';
// import { connect } from 'react-redux';

class SelectComparison extends Component {
  render() {
    return (
      <div className='control'>
        <div className='select is-info'>
          <select data-testid='comparison-filter'>
            <option value=''></option>
            <option value='biggerThen'>maior que</option>
            <option value='equalTo'>igual a</option>
            <option value='lessThan'>menor que</option>
          </select>
        </div>
      </div>
    );
  }
}

// export default connect(null, mapDispatchToProps)(SelectComparison);
export default SelectComparison;
