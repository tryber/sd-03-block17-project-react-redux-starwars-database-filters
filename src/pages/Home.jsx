import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchingPlanetsInfo, filterByText } from '../actions/actionsCreators';
import Table from '../components/table/Table';
import FilterByNameBar from '../components/FilterByNameBar';

export class Home extends Component {
  componentDidMount() {
    const { getPlanetsInfo } = this.props;
    getPlanetsInfo();
  }

  filteredPlanetDataByText(data) {
    const { nameFilter } = this.props;
    const filteredData = data.filter(({ name }) => name.includes(nameFilter));
    if (nameFilter !== '') return filteredData;
    return data;
  }

  render() {
    const { data, planetName, loading } = this.props;
    return (
      <div>
        <div>
          <FilterByNameBar
            onChange={(event) => planetName(event.target.value)}
          />
        </div>
        {loading ? <h1>Loading..</h1> : <Table data={this.filteredPlanetDataByText(data)} />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanetsInfo: () => dispatch(fetchingPlanetsInfo()),
  planetName: (planetName) => dispatch(filterByText(planetName)),
});

const mapStateToProps = (state) => ({
  data: state.planetsInfoReducer.data,
  loading: state.planetsInfoReducer.loading,
  nameFilter: state.filterDataValuesReducer.filters.filterByName.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.defaultProps = { nameFilter: '' };

Home.propTypes = {
  getPlanetsInfo: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  nameFilter: PropTypes.string,
  planetName: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
