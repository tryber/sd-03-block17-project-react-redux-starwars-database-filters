import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../action';
import FilterValue from './FilterValue';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(event) {
    this.setState({ text: event.target.value });
    this.props.filterByName(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          className="input"
          data-testid="name-filter"
          type="text"
          value={this.state.text}
          placeholder="Faça uma pesquisa"
          onChange={(event) => this.onTextChange(event)}
        />
        {/* {this.props.numericValues.map((_, key) => <FilterValue key={key} select={this.state.select} />)} */}
        <FilterValue />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);

Input.propTypes = {
  filterByName: PropTypes.func.isRequired,
};
