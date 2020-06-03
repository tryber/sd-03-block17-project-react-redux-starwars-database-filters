import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlanets, fetchByName } from '../actions';
import Table from '../components/Table';
import FilterByNameInput from '../components/FilterByNameInput';


class Home extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const {
      data, isFetching, getByName, nameFilter,
    } = this.props;
    console.log(nameFilter);
    return (
      <div className="Home">
        <div>
          <FilterByNameInput
            onChange={(event) => getByName(event.target.value)}
          />
        </div>
        {isFetching ? (
          <h1>Loading..</h1>
        ) : (
          <Table data={data} />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
  getByName: (planetName) => dispatch(fetchByName(planetName)),
});

const mapStateToProps = (state) => ({
  data: state.selectPlanets.data,
  isFetching: state.selectPlanets.isFetching,
  nameFilter: state.filters.filterByName.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.defaultProps = {
  nameFilter: '',
};

Home.propTypes = {
  getPlanets: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  getByName: PropTypes.func.isRequired,
  nameFilter: PropTypes.string,
};
