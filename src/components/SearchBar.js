import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterPlanetsByName } from '../actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { filterPlanetsByName: filter } = this.props;
    filter(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Planet name"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  filterPlanetsByName: propTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  filterPlanetsByName: (name) => dispatch(filterPlanetsByName(name)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
