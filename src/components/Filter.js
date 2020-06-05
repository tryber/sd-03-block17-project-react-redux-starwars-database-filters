import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

class Filter extends React.Component {
  render() {
    const { getPlanetByName } = this.props;
    return (
      <div>
        <label htmlFor="name-filter">
          <span>Pesquise pelo nome do Planeta </span>
        </label>
        <input
          data-testid="name-filter" type="text" name="name-filter"
          onChange={(e) => getPlanetByName(e.target.value)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanetByName: (e) => dispatch(actions.filterByName(e)),
});

export default connect(null, mapDispatchToProps)(Filter);

Filter.propTypes = {
  getPlanetByName: PropTypes.func.isRequired,
};
