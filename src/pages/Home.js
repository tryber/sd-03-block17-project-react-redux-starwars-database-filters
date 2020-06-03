import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlanets, filterByText } from '../actions';
import Table from '../components/Table';
import FilterByNameInput from '../components/FilterByNameInput';


class Home extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  filterDataByText(data) {
    const { nameFilter } = this.props;
    if (nameFilter !== '') {
      return data.filter(({ name }) => name.toLowerCase().includes(nameFilter.toLowerCase()));
    }
    return data;
  }

  render() {
    const {
      data, isFetching, getByName,
    } = this.props;
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
          <Table data={this.filterDataByText(data)} />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
  getByName: (planetName) => dispatch(filterByText(planetName)),
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
