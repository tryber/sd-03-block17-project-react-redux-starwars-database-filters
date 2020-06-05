import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByText } from '../../actions/actionsCreators';


const FilterByNameBar = ({ planetName }) => (
  <div>
    <h2>Selecione um planeta</h2>
    <input
      type="text"
      name="filter-by-name"
      id="filter-by-name"
      data-testid="name-filter"
      placeholder="Digite o nome do planeta"
      onChange={(event) => planetName(event.target.value)}
    />
  </div>
);

FilterByNameBar.propTypes = {
  planetName: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  planetName: (planetName) => dispatch(filterByText(planetName)),
});

export default connect(null, mapDispatchToProps)(FilterByNameBar);
