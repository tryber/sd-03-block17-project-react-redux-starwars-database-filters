import React, { Component } from 'react';
// import { connect } from 'react-redux';

class SelectColumn extends Component {
  render() {
    return (
      <div className='control'>
        <div className='select is-info'>
          <select data-testid='column-filter'>
            <option value=''></option>
            <option value='population'>population</option>
            <option value='orbital_period'>orbital_period</option>
            <option value='diameter'>diameter</option>
            <option value='rotation_period'>rotation_period</option>
            <option value='surface_water'>surface_water</option>
          </select>
        </div>
      </div>
    );
  }
}

// export default connect(null, mapDispatchToProps)(SelectColumn);
export default SelectColumn;
