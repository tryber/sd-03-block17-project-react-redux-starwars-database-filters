
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../actions';

class FilterBar extends React.Component {
  render() {
    const { filter } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              placeholder="Filtro"
              onChange={(event) => filter(event.target.value)}
              data-testid="name-filter"
              type="text"
            />
          </form>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filter: (name) => dispatch(filterByName(name)),
});

FilterBar.propTypes = { filter: PropTypes.func.isRequired };

export default connect(null, mapDispatchToProps)(FilterBar);
