import React from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../action';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      number: 0,
      column: '',
      comparation: '',
    }

    this.onTextChange = this.onTextChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.getColumns = this.getColumns.bind(this);
    this.getComparation = this.getComparation.bind(this);
  }

  onTextChange(event) {
    this.setState({ text: event.target.value });
    this.props.filterByName(event.target.value);
  }

  onNumberChange(event){
    this.setState({ number: event.target.value });
  }

  onSelectChange(event, chave) {
    const { value } = event.target;
    this.setState({ [chave]: value })
  }

  getColumns() {
    const columns = [
      'Selecione',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'
    ];
    return (
      <select
        onChange={(event) => this.onSelectChange(event, 'column')}
        data-testid='column-filter'
        value={this.state.column}
      >
        {columns.map(option =>
          <option key={option} value={option}>{option}</option>)
        }
      </select>
    );
  }

  getComparation() {
    const comparation = [
      'Selecione',
      'Maior que',
      'Menor que',
      'Igual a',
    ];
    return (
      <select
        onChange={(event) => this.onSelectChange(event, 'comparation')}
        data-testid='column-filter'
        value={this.state.comparation}
      >
        {comparation.map(option =>
          <option key={option} value={option}>{option}</option>)
        }
      </select>
    );
  }

  render() {
    return (
      <div>
        <input
          className='input'
          data-testid='name-filter'
          type='text'
          value={this.state.text}
          placeholder='Faça uma pesquisa'
          onChange={(event) => this.onTextChange(event)}
        />
        {this.getColumns()}
        {this.getComparation()}
        <input
          type='number'
          data-testid='value-filter'
          value={this.state.number}
          onChange={(event) => this.onNumberChange(event)}
        >
        </input>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByName(name)),
});

export default connect(null, mapDispatchToProps)(Input);
