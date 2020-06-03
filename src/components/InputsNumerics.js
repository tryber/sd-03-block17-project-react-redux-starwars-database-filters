import React from 'react';
import { connect } from 'react-redux';
import { filterSelect, filterComparison } from '../actions/index';

class InputsNumerics extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeFilterSelect = this.onChangeFilterSelect.bind(this);
    this.onChangeComparison = this.onChangeComparison.bind(this);
  }

  onChangeFilterSelect(event) {
    console.log(event.target.value);
    const { option } = this.props;
    option(event.target.value);
  }

  onChangeComparison(event) {
    const { comparison } = this.props;
    comparison(event.target.value);
  }

  selectFilter() {
    return (
      <select data-testid="column-filter" onChange={this.onChangeFilterSelect}>
        <option></option>
        <option value="population">population</option>
        <option value="orbital_period">Orbital period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation period</option>
        <option value="surface_water">Rurface water</option>
      </select>
    );
  }

  selectComparison() {
    return (
      <select data-testid="comparison-filter" onChange={this.onChangeComparison}>
        <option></option>
        <option value="bigger_then">Maior que</option>
        <option value="less_than">Menor que</option>
        <option value="equal">Igual</option>
      </select>
    );
  }

  render() {
    return (
      <div>
        {this.selectFilter()}
        {this.selectComparison()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  option: (value) => dispatch(filterSelect(value)),
  comparison: (value) => dispatch(filterComparison(value)),
});

export default connect(null, mapDispatchToProps)(InputsNumerics);
