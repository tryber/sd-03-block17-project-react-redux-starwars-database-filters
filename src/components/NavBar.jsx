import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Layout/NavBar.css';
import { filterByNumber } from '../action/index';



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.sideBar = this.sideBar.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.filterColumn = this.filterColumn.bind(this);
  }

  handleChangeInput(name, value) {
    this.setState({
      [name]: value,
    });
  }

  filterColumn(valueFilter, option) {
    return !valueFilter.find(({ column }) => column === option);
  }

  // verifyColumns = (columns, values, options) => {
  //   if(options) return options.map((elem) => <options>{elem}</options>);
  //   return false;
  // }

  sideBar() {
    const { selectInput, valueFilter } = this.props;
    console.log(valueFilter);
    const columns = ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'];
    const comparisons = ['', 'maior que', 'igual a', 'menor que'];
    return (
      <header className="header">
        <h1>Monkey Planets</h1>
        <nav className="menu">
          <ul>
            <li>Planets</li>
            <li>Start</li>
            <li>About</li>
            <li>Contats</li>
            <button
              type="button"
              data-testid="button-filter"
              onClick={() => selectInput(this.state)}
            >
              Filtrar
            </button>
            <input
              type="number"
              data-testid="value-filter"
              onChange={(e) => this.handleChangeInput('value', e.target.value)}
            />
            <select
              data-testid="column-filter"
              onChange={(e) => this.handleChangeInput('column', e.target.value)}
            >
              {/* {this.verifyColumns('', '', columns)} */}
              <option value="" />
              {columns.map((list) => (this.filterColumn(valueFilter, list)
                && (<option key={list}>{list}</option>)

              ))}
            </select>
            <select
              data-testid="comparison-filter"
              onChange={(e) => this.handleChangeInput('comparison', e.target.value)}
            >
              {comparisons.map((list) => <option key={list}>{list}</option>)}
            </select>

          </ul>
        </nav>
      </header>
    );
  }

  render() {
    return (
      <div>
        {this.sideBar()}
      </div>
    );
  }
}

const mapState = (state) => ({
  valueFilter: state.filters.filterByNumericValues,
});

const mapDispatch = (dispatch) => ({
  selectInput: (e) => dispatch(filterByNumber(e)),
});

export default connect(mapState, mapDispatch)(NavBar);
