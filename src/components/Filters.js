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

  handleSelectors(value, stateId) {
    this.setState({ [stateId]: value })
  }

  btnClick() {
    const { columnSelector, comparisonSelector, valueFilter } = this.state;
    this.props.handleFilterBtn(columnSelector, comparisonSelector, valueFilter);
  }

  render() {
    const { handleQuery } = this.props;
    const colArray = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const compArray = [ 'Maior que', 'Menor que', 'Igual a'];
    return (
      <div className='filters'>
        <label htmlFor='name-filter'>Filtrar por nome</label>
        <input 
          id='name-filter' 
          data-testid='name-filter' 
          type='text'
          onChange={e => handleQuery(e.target.value)}
        />
        <div className='NumFilters'>
        <select 
          data-testid='column-filter'
          onChange={e => this.handleSelectors(e.target.value, 'columnSelector')}
        >
          {this.renderOptions(colArray)}
        </select>
        <select 
          data-testid='comparison-filter' 
          onChange={e => this.handleSelectors(e.target.value, 'comparisonSelector')}
        >
          {this.renderOptions(compArray)}
        </select>
        <input 
          data-testid='value-filter' type='number' 
          onChange={e => this.handleSelectors(e.target.value, 'valueFilter')} 
        />
        <button type='button' data-testid='button-filter' onClick={() => this.btnClick()}>Filtro</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleQuery: (query) => dispatch(queryByName(query)),
  handleFilterBtn: (column, comparison, value) => dispatch(saveFilters(column, comparison, value)),
})
 
export default connect(null, mapDispatchToProps)(Filters);