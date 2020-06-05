import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { optionPopulation } from '../actions/apiTbela';

class ValueFilters extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      population: 'population',
      value: 'igual a',
      numbOfPop: '200000',
    });
    this.columnChange = this.columnChange.bind(this);
    this.biggerChange = this.biggerChange.bind(this);
    this.numb = this.numb.bind(this);
  }

  columnChange(value) {
    this.setState({
      population: value.target.value,
    });
  }

  biggerChange(value) {
    this.setState({
      value: value.target.value,
    });
  }

  numb(event) {
    this.setState({
      numbOfPop: event.target.value,
    });
  }

  render() {
    const submitChange = () => {
      const { submitToState } = this.props;
      const { population, value, numbOfPop } = this.state;
      console.log(value)
      submitToState(population, value, numbOfPop);
    };
    const { population, value, numbOfPop } = this.state;
    return (
      <div>
        <select data-testid="column-filter" value={population} onChange={this.columnChange}>
          <option>-</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter" value={value} onChange={this.biggerChange}>
          <option>-</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input data-testid="value-filter" type="number" value={numbOfPop} onChange={this.numb} />
        <button type="submit" data-testid="button-filter" onClick={() => submitChange()}>filtrar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  all: state,
});

const mapDispatchToProps = (dispatch) => ({
  submitToState: (population, value, numbOfPop) => dispatch(
    optionPopulation(population, value, numbOfPop),
  ),
});

ValueFilters.propTypes = {
  submitToState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ValueFilters);
