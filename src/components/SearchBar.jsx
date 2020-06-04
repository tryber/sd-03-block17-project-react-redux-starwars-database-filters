import React from 'react';
import { connect } from 'react-redux';
import { filterName, filterNumber } from '../actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'population',
      comparison: 'maior que',
      value: 0,
      columns: [
        { name: 'population', value: 'Population' },
        { name: 'orbital_period', value: 'Orbital Period' },
        { name: 'diameter', value: 'Diameter' },
        { name: 'rotation_period', value: 'Rotation Period' },
        { name: 'surface_water', value: 'Surface Water' },
      ]
    };
  }


  render() {
    const { filterByName, addNumFilter } = this.props;
    const { column, comparison, value, columns } = this.state;
    return (
      <div className='filterBar'>
        <label htmlFor="name-filter">Filtrar por nome</label>
        <input
          data-testid="name-filter"
          name="inputFilter"
          onChange={(e) => { filterByName(e.target.value.toLowerCase()); }} />
        <label htmlFor="column-filter">Filtrar por outros:</label>
        <select
          data-testid='column-filter'
          onChange={(e) => this.setState({column: e.target.value})}
          value={this.state.column}>
          {columns.map((col) => <option value={col.name}>{col.value}</option>)}
        </select>
        <select
          data-testid='comparison-filter'
          onChange={(e) => this.setState({comparison: e.target.value})}
          value={this.state.comparison}
        >
          <option value='menor que'>Menor que</option>
          <option value='igual a'>Igual a</option>
          <option value='maior que'>Maior que</option>
        </select>
        <input
          type='number'
          maxLength='15'
          onChange={(e) => this.setState({value: e.target.value})}
          value={this.state.value}
        />
        <button onClick={() => addNumFilter({column, comparison, value})}>Adicionar filtro</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    filterByName: (evt) => dispatch(filterName(evt)),
    addNumFilter: (evt) => dispatch(filterNumber(evt)),
  }
);

export default connect(null, mapDispatchToProps)(SearchBar);
