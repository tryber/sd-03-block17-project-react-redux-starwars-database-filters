import React, { Component } from 'react';
import { queryByName, saveFilters } from '../actions';
import { connect } from 'react-redux';

class Filters extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      columnSelector: 'population',
      comparisonSelector: 'Maior que',
      valueFilter: 0,
    }
  }
  renderOptions(array) {
    return (
      array.map(e => <option>{e}</option>)
    )
  }

  handle(event, stateId) {
    this.setState({ [stateId]: event.target.value })
  }

  btn() {
    const { columnSelector, comparisonSelector, valueFilter } = this.state;
    this.props.handleFilterBtn(columnSelector, comparisonSelector, valueFilter);
  }

  render() {
    const { handleQuery } = this.props;
    const colArray = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const compArray = [ 'Maior que', 'Menor que', 'Igual a'];
    return (
      <div className='filters'>
        <label htmlFor='name-in'>Filtrar por nome</label>
        <input id='name-in' data-testid='name-filter' type='text' onChange={e => handleQuery(e)} />
        <select 
          data-testid='column-filter'
          onChange={e => this.handle(e, 'columnSelector')}
        >
          {this.renderOptions(colArray)}
        </select>
        <select 
          data-testid='comparison-filter' 
          onChange={e => this.handle(e, 'comparisonSelector')}
        >
          {this.renderOptions(compArray)}
        </select>
        <input 
          data-testid='value-filter' type='number' 
          onChange={e => this.handle(e, 'valueFilter')} 
        />
        <button type='button' data-testid='button-filter' onClick={() => this.btn()}>Filtro</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleQuery: (event) => dispatch(queryByName(event.target.value)),
  handleFilterBtn: (column, comparison, value) => dispatch(saveFilters(column, comparison, value)),
})
 
export default connect(null, mapDispatchToProps)(Filters);