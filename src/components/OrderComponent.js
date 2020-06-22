import React from 'react';
import { connect } from 'react-redux';
import { columnOrder } from '../action/index';

export class OrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.changeOrder = this.changeOrder.bind(this);
    this.changeSelectValue = this.changeSelectValue.bind(this);
    this.changeRadioValue = this.changeRadioValue.bind(this);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
  }

  changeRadioValue(event) {
    console.log('clicou no 1', event.target.value);
    this.setState({ sort: event.target.value });
  }

  changeSelectValue(event) {
    console.log('clicou no 1', event.target.value);
    this.setState({ column: event.target.value });
  }

  changeOrder() {
    const { orderer } = this.props;

    orderer(this.state.column, this.state.sort);
  }

  render() {
    return (
      <div>
        <fieldset>
          <label htmlFor="seletion">
          Column Select
          </label>
          <select onChange={(event) => this.changeSelectValue(event)} name="seletion" data-testid="column-sort">
            <option>
             Name
            </option>
            <option>
            rotation_period
            </option>
            <option>
            orbital_period
            </option>
            <option>
            diameter
            </option>
            <option>
            climate
            </option>
          </select>
          <div onChange={this.changeRadioValue}>
            <input type="radio" id="ASC" name="order" value="ASC" data-testid="column-sort-input" />
            <label htmlFor="ASC">ASC</label>
            <input type="radio" id="DESC" name="order" value="DESC" data-testid="column-sort-input" />
            <label htmlFor="DESC">DESC</label>
            <button type="button" data-testid="column-sort-button" onClick={() => this.changeOrder()}> set order </button>
          </div>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  values: state,
});

const mapDispatchToProps = (dispatch) => ({
  orderer: (column, sort) => dispatch(columnOrder(column, sort)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderComponent);
