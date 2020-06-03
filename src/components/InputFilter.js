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
          name="filter"
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


utFilter.defaultProps = {
  filter: '',
};InputFilter.propTypes = {
  filter: PropTypes.instanceOf(Function),
};

Inp

export default connect(null, mapDispatchToProps)(InputFilter);
