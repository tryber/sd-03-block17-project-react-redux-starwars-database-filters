import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumber } from '../actions/NumericFIlterAction';

const comparisons = ['', 'maior que', 'igual a', 'menor que'];

const columns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function columnFilter(filterValue, option) {
  return !filterValue.find(({ column }) => column === option);
}

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.sideBar = this.sideBar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  sideBar() {
    const { filterValue } = this.props;
    return (
      <header>
        <nav>
          <select
            data-testid="column-filter"
            onChange={(elem) => this.handleChange('column', elem.target.value)}
          >
            <option value="" />
            {columns.map((column) => (columnFilter(filterValue, column)
              && (<option key={column}>{column}</option>)
            ))}
          </select>
          <select
            data-testid="comparison-filter"
            onChange={(elem) => this.handleChange('comparison', elem.target.value)}
          >
            {comparisons.map((comparison) => (
              <option key={comparison}>{comparison}</option>
            ))}
          </select>
          <input
            type="number"
            data-testid="value-filter"
            onChange={(elem) => this.handleChange('value', elem.target.value)}
          />
        </nav>
      </header>
    );
  }

  render() {
    const { selectImput } = this.props;
    const usa = this.state;
    return (
      <div>
        {this.sideBar()}
        <div>
          <button
            type="button"
            data-testid="button-filter"
            onClick={() => selectImput(usa)}
          >
            Filtrar
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterValue: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  selectImput: (elem) => dispatch(filterByNumber(elem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

NavigationBar.propTypes = {
  selectImput: PropTypes.func.isRequired,
  filterValue: PropTypes.arrayOf(
    PropTypes.shape({
      comparison: PropTypes.string,
      column: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};
