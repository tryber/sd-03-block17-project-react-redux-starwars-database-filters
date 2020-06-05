import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Layout/NavBar.css';
import { filterByNumber } from '../action/index';

const columns = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

const comparisons = ['', 'maior que', 'igual a', 'menor que'];

function filterColumn(valueFilter, option) {
  return !valueFilter.find(({ column }) => column === option);
}

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
    // this.filterColumn = this.filterColumn.bind(this);
  }

  handleChangeInput(name, value) {
    this.setState({
      [name]: value,
    });
  }

  // verifyColumns = (columns, values, options) => {
  //   if(options) return options.map((elem) => <options>{elem}</options>);
  //   return false;
  // }
  // const { selectInput, valueFilter } = this.props;

  funcParaPassarNoCC(selectInput, valueFilter) {
    return (
      <div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => selectInput(this.state)}
        >
          Filtrar
        </button>
        <input
          data-testid="value-filter"
          onChange={(e) => this.handleChangeInput('value', e.target.value)}
        />
        <select
          data-testid="column-filter"
          onChange={(e) => this.handleChangeInput('column', e.target.value)}
        >
          <option value="" />
          {columns.map((list) => (filterColumn(valueFilter, list)
            && (<option key={list}>{list}</option>)))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={(e) => this.handleChangeInput('comparison', e.target.value)}
        >
          {comparisons.map((list) => <option key={list}>{list}</option>)}
        </select>
      </div>
    );
  }

  sideBar() {
    const { selectInput, valueFilter } = this.props;
    return (
      <header className="header">
        <nav className="menu">
          <ul>
            {this.funcParaPassarNoCC(selectInput, valueFilter)}
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

NavBar.propTypes = {
  selectInput: PropTypes.func.isRequired,
};

NavBar.propTypes = {
  valueFilter: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};

const mapState = (state) => ({
  valueFilter: state.filters.filterByNumericValues,
});

const mapDispatch = (dispatch) => ({
  selectInput: (e) => dispatch(filterByNumber(e)),
});

export default connect(mapState, mapDispatch)(NavBar);
