import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumber } from '../Actions';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

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
  }

  handleChangeInput(name, value) {
    this.setState({
      [name]: value,
    });
  }

  sideBar() {
    const { valueFilter } = this.props;
    return (
      <header className="header">
        <nav className="menu">
          <select
            data-testid="column-filter"
            onChange={(e) => this.handleChangeInput('column', e.target.value)}
          >
            <option value="" />
            {columns.map((column) => (filterColumn(valueFilter, column)
              && (
                <option key={column}>{column}</option>
              )
            ))}
          </select>
          <select
            data-testid="comparison-filter"
            onChange={(e) => this.handleChangeInput('comparison', e.target.value)}
          >
            {comparisons.map((comparison) => <option key={comparison}>{comparison}</option>)}
          </select>
          <input
            type="number"
            data-testid="value-filter"
            onChange={(e) => this.handleChangeInput('value', e.target.value)}
          />
        </nav>
      </header>
    );
  }
  render() {
    const { selectInput } = this.props;
    const usa = this.state;
    return (
      <div>
        {this.sideBar()}
        <div>
          <button
            type="button"
            data-testid="button-filter"
            onClick={() => selectInput(usa)}
          >
            Filtrar
        </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  valueFilter: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  selectInput: (e) => dispatch(filterByNumber(e)),
});

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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
