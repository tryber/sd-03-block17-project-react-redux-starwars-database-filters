import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValues } from '../../action';

class ByNumericValues extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
      column: '',
      comparation: '',
    };

    this.updateColumn = this.updateColumn.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.getColumns = this.getColumns.bind(this);
    this.getComparation = this.getComparation.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.updateColumn();
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
    const { filterNumericValues } = this.props;
    filterNumericValues(column, comparation, number);
    this.setState({ number: '', column: '', comparation: '' });
  }

  getColumns() {
    const select = this.updateColumn();
    const { column } = this.state;
    return (
      <select
        className="select is-info"
        onChange={(event) => this.onSelectChange(event, 'column')}
        data-testid="column-filter"
        value={column}
      >
        {select.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    );
  }

  getComparation() {
    const comparationValue = [
      '',
      'maior que',
      'menor que',
      'igual a',
    ];
    const { comparation } = this.state;
    return (
      <select
        className="select is-info"
        onChange={(event) => this.onSelectChange(event, 'comparation')}
        data-testid="comparison-filter"
        value={comparation}
      >
        {comparationValue.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    );
  }

  updateColumn() {
    const { numericValues } = this.props;
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const stateColumns = numericValues.map(({ column }) => column);
    return ['', ...columns.filter((column) => !stateColumns.includes(column))];
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        {this.getColumns()}
        {this.getComparation()}
        <input
          className="input"
          type="number"
          data-testid="value-filter"
          value={number}
          onChange={(event) => this.onNumberChange(event)}
        />
        <button
          type="submit"
          className="button is-info"
          data-testid="button-filter"
          onClick={this.onClick}
        >
          Filtrar
        </button>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterNumericValues: (column, comparison, value) => dispatch(filterByNumericValues(
    column, comparison, value,
  )),
});

export default connect(mapStateToProps, mapDispatchToProps)(ByNumericValues);

ByNumericValues.propTypes = {
  numericValues: PropTypes.arrayOf(PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  filterNumericValues: PropTypes.func.isRequired,
};
