import React, { Component } from 'react';
// import { connect } from 'react-redux';

class FilterButton extends Component {
  render() {
    return (
      <div className='field'>
        <div className='control'>
          <button
            className='button is-info'
            type='button'
            data-testid='button-filter'
          >
            Filtrar
          </button>
        </div>
      </div>
    );
  }
}

// export default connect(null, mapDispatchToProps)(FilterButton);
export default FilterButton;
