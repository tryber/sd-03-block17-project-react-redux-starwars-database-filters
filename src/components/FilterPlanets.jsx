import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../action/index';


class FilterPlanets extends Component {
  // constructor(props) {
  //   super(props);
  //   this.planetsFilter = this.planetsFilter.bind(this);
  // }

  // planetsFilter(e) {
  //   const { data } = this.props;
  //   return ({
  //     name: data.filter((ele) => ele.name.includes(e)),
  //   });
  // }

  render() {
    const { getPlanetByname } = this.props;
    return (
      <div>
        Filter Planets
        <input
          type="text"
          data-testid="name-filter"
          onChange={(e) => console.log('sera que funciona', getPlanetByname(e.target.value))}
        />
        <button
          type="button"
          onClick={(e) => getPlanetByname(e)}
        >
          Search
        </button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   data: state.requestAPI.data,
// });

const mapDispatchToProps = (dispatch) => ({
  getPlanetByname: (e) => dispatch(filterByName(e)),
});

FilterPlanets.propTypes = {
  getPlanetByname: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterPlanets);
