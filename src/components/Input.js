import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName, filterByNumericValues } from '../action';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      number: '',
      column: '',
      comparation: '',
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.getColumns = this.getColumns.bind(this);
    this.getComparation = this.getComparation.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onTextChange(event) {
    this.setState({ text: event.target.value });
    this.props.filterByName(event.target.value);
  }

  onNumberChange(event) {
    this.setState({ number: event.target.value });
  }

  onSelectChange(event, chave) {
    const { value } = event.target;
    this.setState({ [chave]: value });
  }

  onClick() {
    const { number, column, comparation } = this.state;
    this.props.filterByNumericValues(column, comparation, number);
  }

  getColumns() {
    const columns = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    return (
      <select
        onChange={(event) => this.onSelectChange(event, 'column')}
        data-testid="column-filter"
        value={this.state.column}
      >
        {columns.map((option) =>
          <option key={option} value={option}>{option}</option>)
        }
      </select>
    );
  }

  getComparation() {
    const comparation = [
      '',
      'maior que',
      'menor que',
      'igual a',
    ];
    return (
      <select
        onChange={(event) => this.onSelectChange(event, 'comparation')}
        data-testid="comparison-filter"
        value={this.state.comparation}
      >
        {comparation.map((option) =>
          <option key={option} value={option}>{option}</option>)
        }
      </select>
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
        {this.getColumns()}
        {this.getComparation()}
        <input
          type="number"
          data-testid="value-filter"
          value={this.state.number}
          onChange={(event) => this.onNumberChange(event)}
        />
        <button
          data-testid="button-filter"
          onClick={this.onClick}
        >Filtrar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByName(name)),
  filterByNumericValues: (column, comparison, value) =>
    dispatch(filterByNumericValues(column, comparison, value)),
});

export default connect(null, mapDispatchToProps)(Input);

Input.propTypes = {
  filterByName: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.func.isRequired,
};
