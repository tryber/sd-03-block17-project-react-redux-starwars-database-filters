import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../actions';

class FilterBar extends React.Component {
  render() {
    const { filter } = this.props;
    return (
      <form>
        <input
          onChange={(event) => filter(event.target.value)}
          data-testid="name-filter"type="text" placeholder="Filtro"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filter: (name) => dispatch(filterByName(name)),
});

FilterBar.propTypes = { filter: PropTypes.func.isRequired };

export default connect(null, mapDispatchToProps)(FilterBar);
