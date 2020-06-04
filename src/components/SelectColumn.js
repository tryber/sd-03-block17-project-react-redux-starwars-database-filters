import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectColumn extends Component {
  verifyAvaliableFilters() {
    const { numericValues, optionState } = this.props;
    const avaliableOptions = [];
    const shouldNotBeAvaliable = numericValues.map(({ column }) => column);
    optionState.forEach((option) => {
      if (shouldNotBeAvaliable.every((notAoption) => notAoption !== option)) {
        avaliableOptions.push(option);
      }
    });

    return avaliableOptions;
  }

  render() {
    const { changeFilter } = this.props;

    return (
      <div className='control'>
        <div className='select is-info'>
          <select
            id='column'
            data-testid='column-filter'
            onChange={(e) => changeFilter(e)}
          >
            <option value=''></option>
            {this.verifyAvaliableFilters().map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  optionState: state.apiReducer.optionData,
  numericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(SelectColumn);
