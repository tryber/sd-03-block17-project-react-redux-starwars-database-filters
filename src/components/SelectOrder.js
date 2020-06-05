import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SelectOrder extends Component {
  render() {
    const { optionsOrder, handleOrder } = this.props;
    return (
      <div className='control'>
        <div className='select is-info'>
          <select data-testid='column-sort' id="column" onChange={(e) => handleOrder(e)} >
            <option value='name'>Name</option>
            {optionsOrder.map((valueOp) => (
              <option key={valueOp} value={valueOp}>
                {valueOp}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  optionsOrder: state.apiReducer.optionData,
});

export default connect(mapStateToProps)(SelectOrder);

SelectOrder.propTypes = {
  optionsOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/* <input
          defaultChecked
          data-testid="column-sort-input"
          type="radio"
          id="ASC"
          name="order"
          value="ASC"
          onChange={(event) => this.onOrderChange(event, 'inputSort')}
        />
        <label htmlFor="ASC">ASC</label>
        <input
          data-testid="column-sort-input"
          type="radio"
          id="DESC"
          name="order"
          value="DESC"
          onChange={(event) => 
            this.onOrderChange(event, 'inputSort')}
            <label htmlFor="DESC">DESC</label> */
