import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputByName from './InputByName';
import SelectColumn from './SelectColumn';
import SelectComparison from './SelectComparison';
import InputByNumber from './InputByNumber';
import FilterButton from './FilterButton';
import SelectedFilters from './SelectedFilters';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: '',
      comparison: '',
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  renderFilters() {
    const { numericValues } = this.props;
    if (numericValues.length === 0 || numericValues[0].column) {
      return <SelectedFilters />;
    }

    return null;
  }

  render() {
    return (
      <div>
        <InputByName />
        <div className='field is-horizontal'>
          <div className='field-body'>
            <div className='field is-grouped'>
              <SelectColumn changeFilter={this.handleChange} />
              <SelectComparison changeFilter={this.handleChange} />
              <InputByNumber changeFilter={this.handleChange} />
            </div>
          </div>
        </div>
        <FilterButton clickParam={this.state} />
        {this.renderFilters()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(Filters);
