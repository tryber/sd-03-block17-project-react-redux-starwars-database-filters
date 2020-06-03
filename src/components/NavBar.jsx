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
  }

  handleChangeInput(name, value) {
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  sideBar() {
    return (
      <header className="header">
        <h1>Monkey Planets</h1>
        <nav className="menu">
          <ul>
            <li>Planets</li>
            <li>Start</li>
            <li>About</li>
            <li>Contats</li>
            <select
              data-testid="column-filter"
              onClick={(e) => this.handleChangeInput('column', e.target.value)}
            >
              <option>NodeName</option>
              <option>population</option>
              <option>orbital_period</option>
              <option>diameter</option>
              <option>rotation_period</option>
              <option>surface_water</option>
            </select>
            <select
              data-testid="comparison-filter"
              onClick={(e) => this.handleChangeInput('comparison', e.target.value)}
            >
              <option>NodeName</option>
              <option>maior que</option>
              <option>igual a</option>
              <option>menor que</option>
            </select>
            <input
              type="number"
              data-testid="value-filter"
              onChange={(e) => this.handleChangeInput('value', e.target.value)}
            />
          </ul>
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
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => selectInput(usa)}
        >
          Filtrar
        </button>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  selectInput: (e) => dispatch(filterByNumber(e)),
});

export default connect(null, mapDispatch)(NavBar);
