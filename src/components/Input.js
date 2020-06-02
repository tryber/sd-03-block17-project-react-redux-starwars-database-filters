import React from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../action';



const getComparation = () => {
  const comparation = [
    'Maior que',
    'Menor que',
    'Igual a',
  ];
  return (
    <select
      data-testid='column-filter'
      value={this.state.comparation}
    >
      {comparation.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
  );
}

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
  }

  onTextChange(event) {
    this.setState({ text: event.target.value });
    this.props.filterByName(event.target.value);
  }

  onSelectChange() {

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
        {getColumns()}
        {getComparation()}
        <input
          type='number'
          data-testid='value-filter'
          value={this.state.number}
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
