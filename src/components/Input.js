import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName, orderColumns } from '../action';
import FilterValue from './FilterValue';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      columnSort: 'Name',
      inputSort: 'ASC',
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onOrderChange = this.onOrderChange.bind(this);
    this.getColumns = this.getColumns.bind(this);
    this.getRadios = this.getRadios.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onTextChange(event) {
    this.setState({ text: event.target.value });
    this.props.filterByName(event.target.value);
  }

  onOrderChange(event, chave) {
    const { value } = event.target;
    this.setState({ [chave]: value });
  }

  onClick() {
    const { columnSort, inputSort } = this.state;
    this.props.orderFunc(columnSort, inputSort);
  }

  getColumns() {
    const columns = [
      'Name',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    return (
      <select
        className="select is-info"
        onChange={(event) => this.onOrderChange(event, 'columnSort')}
        data-testid="column-sort"
        value={this.state.columnSort}
      >
        {columns.map((option) =>
          <option key={option} value={option}>{option}</option>)
        }
      </select>
    );
  }

  getRadios() {
    return (
      <div>
        <input
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
          onChange={(event) => this.onOrderChange(event, 'inputSort')}
        />
        <label htmlFor="DESC">DESC</label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <input
          className="input"
          data-testid="name-filter"
          type="text"
          value={this.state.text}
          placeholder="Faça uma pesquisa"
          onChange={(event) => this.onTextChange(event)}
        />
        <FilterValue />
        <div>
          {this.getColumns()}
          {this.getRadios()}
          <button data-testid="column-sort-button" type="button" onClick={this.onClick}>
            Ordenar
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByName(name)),
  orderFunc: (column, sort) => dispatch(orderColumns(column, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);

Input.propTypes = {
  filterByName: PropTypes.func.isRequired,
  orderFunc: PropTypes.func.isRequired,
};
