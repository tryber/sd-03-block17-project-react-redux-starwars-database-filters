import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterByName from '../actions/actionsCreators';

const FilterByNameBar = ({ planetName }) => (
  <div>
    <label htmlFor="filter-by-name">
      Selecione o planeta pelo Nome
      <input
        type="text"
        name="filter-by-name"
        id="filter-by-name"
        data-testid="name-filter"
        placeholder="Digite o nome do planeta"
        onChange={(event) => planetName(event.target.value)}
      />
    </label>
  </div>
);

FilterByNameBar.propTypes = {
  planetName: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  planetName: (planetName) => dispatch(filterByName(planetName)),
});

export default connect(null, mapDispatchToProps)(FilterByNameBar);
