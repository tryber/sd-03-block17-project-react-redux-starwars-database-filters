import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { optionPopulation } from '../actions/apiTbela';

class ValueFilters extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      population: 'population',
      value: 'maior que',
      numberOfPopulation: 0,
    });
    this.columnChange = this.columnChange.bind(this);
    this.biggerChange = this.biggerChange.bind(this);
    this.numberChange = this.numberChange.bind(this);
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

  numberChange(event) {
    this.setState({
      numberOfPopulation: event.target.value,
    });
  }

  render() {
    const submitChange = (event) => {
      event.preventDefault();
      const { submitToState } = this.props;
      const { population, value, numberOfPopulation } = this.state;
      submitToState(population, value, numberOfPopulation);
    };
    const { population, value, numberOfPopulation } = this.state;
    return (
      <div>
        <form onSubmit={submitChange}>
          <select data-testid="column-filter" value={population} onChange={this.columnChange}>
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select data-testid="comparison-filter" value={value} onChange={this.biggerChange}>
            <option value="maior que">Maior que</option>
            <option value="menor que">Menor que</option>
            <option value="igual a">Igual a</option>
          </select>
          <input data-testid='value-filter' type="number" value={numberOfPopulation} onChange={this.numberChange} />
          <button type="submit" data-testid="button-filter">filtar</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  all: state,
});

const mapDispatchToProps = (dispatch) => ({
  submitToState: (population, value, numberOfPopulation) => dispatch(
    optionPopulation(population, value, numberOfPopulation),
  ),
});

ValueFilters.propTypes = {
  submitToState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ValueFilters);
