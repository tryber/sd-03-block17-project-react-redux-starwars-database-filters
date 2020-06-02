import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterInputName } from '../action/a_InpuName';

class FilterPlanets extends Component {
  constructor(props) {
    super(props);
    this.planetsFilter = this.planetsFilter.bind(this);
  }

  planetsFilter(e) {
    const { data } = this.props;
    return ({
      name: data.filter((ele) => ele.name.includes(e)),
    });
  }

  render() {
    return (
      <div>
        Filter Planets :
        <input
          type="text"
          data-testid="name-filter"
          onChange={() => filterInputName((e) => this.planetsFilter(e.target.value))}
        />
        <button
          type="button"
          onClick={() => filterInputName((e) => this.planetsFilter(e.target.value))}
        >
          Search
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.requestAPI.data,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ filterInputName }, dispatch);

FilterPlanets.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPlanets);
