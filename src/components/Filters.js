import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import A_filterNames from '../store/actions/A_filterNames';


export class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
      options: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  renderInputName() {
    const { A_filterNames } = this.props;
    return (
      <div>
        <input type="text" onChange={(e) => A_filterNames(e.target.value)} />
      </div>
    );
  }

  renderOptionsFilter() {
    const { options } = this.state;
    return (
      <div>
        <select name="column" onChange={(e) => this.handleChange(e)}>
          {options.map((column) => <option value={column} key={column}>{column}</option>)}
        </select>
      </div>
    )
  }

  renderComparisonFilter() {
    return (
      <div>
        <select name="comparison" onChange={(e) => this.handleChange(e)}>
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
        </select>
      </div>
    );
  }

  renderValueFilter() {
    return (
      <div>
        <input type="number" name="value" onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }


  render() {
    return (
      <div>
        {this.renderInputName()}
        {this.renderOptionsFilter()}
        {this.renderComparisonFilter()}
        {this.renderValueFilter()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ A_filterNames }, dispatch);

export default connect(null, mapDispatchToProps)(Filters)
