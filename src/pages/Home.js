import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../components/table/Table';
import { getApiData, filterByPlanetText } from '../actions/apiAction';
import FilterContainer from '../components/filters/FilterContainer';

class Home extends Component {
  componentDidMount() {
    const { getPlanetsInfo } = this.props;
    getPlanetsInfo();
  }

  filterDataByText(data) {
    const { nameFilter } = this.props;
    if (nameFilter !== '') {
      return data.filter(({ name }) => name.toLowerCase().includes(nameFilter.toLowerCase()));
    }
    return data;
  }

  render() {
    const { data, loading, planetName } = this.props;
    return (
      <div>
        <div>
          <FilterContainer onChange={(event) => planetName(event.target.value)} />
        </div>
        {loading ? (<h1>loading...</h1>) : <Table data={data} /> }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanetsInfo: () => dispatch(getApiData()),
  planetName: (planetName) => dispatch(filterByPlanetText(planetName)),
});

const mapStateToProps = (state) => ({
  data: state.apiReducer.data,
  loading: state.apiReducer.loading,
  nameFilter: state.filterReducer.filterByName.name,
});

Home.defaultProps = {
  nameFilter: '',
};

Home.propTypes = {
  getPlanetsInfo: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  planetName: PropTypes.func.isRequired,
  nameFilter: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
