import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterByName from '../actions/filterByName';

function Filters({ byName }) {
  return (
    <div>
      <input data-testid="name-filter" type="text" onChange={(e) => byName(e.target.value)} />
      <input type="button" value="Filtrar" />
    </div>
  );
}

Filters.propTypes = {
  byName: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ byName: filterByName }, dispatch);

export default connect(null, mapDispatchToProps)(Filters);
