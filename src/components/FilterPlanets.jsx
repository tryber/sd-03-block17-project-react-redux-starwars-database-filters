import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../action/index';


class FilterPlanets extends Component {
  render() {
    const { getPlanetByname } = this.props;
    return (
      <div>
        Filter Planets
        <input
          type="text"
          data-testid="name-filter"
          onChange={(e) => getPlanetByname(e.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanetByname: (e) => dispatch(filterByName(e)),
});

FilterPlanets.propTypes = {
  getPlanetByname: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterPlanets);
