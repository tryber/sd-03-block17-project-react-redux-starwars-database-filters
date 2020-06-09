import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPlanet } from '../action/index';

export class InputFilter extends Component {
  constructor(props) {
    super(props);
    this.filterByName = this.filterByName.bind(this);
  }

  filterByName(event) {
    const { filter } = this.props;
    filter(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          id="filter_name"
          placeholder="Filtro por nome de Planeta"
          onChange={(e) => this.filterByName(e)}
          data-testid="name-filter"
          size="50"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filter: (e) => dispatch(filterPlanet(e)),
});

InputFilter.propTypes = {
  filter: PropTypes.instanceOf(Function),
};

InputFilter.defaultProps = {
  filter: '',
};

export default connect(null, mapDispatchToProps)(InputFilter);
