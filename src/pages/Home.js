import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStarWarsApi, filterPlanetName } from '../actions/index';
import Loading from '../components/Loading';
import Table from '../components/Table';
import InputsNumerics from '../components/InputsNumerics';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.filterTableNameOnChange = this.filterTableNameOnChange.bind(this);
  }

  componentDidMount() {
    const { search } = this.props;
    search('planets');
  }

  filterTableNameOnChange(event) {
    const { filterName } = this.props;
    filterName(event.target.value);
  }

  render() {
    const { isFetching, data, name } = this.props;
    if (isFetching) return <Loading />;
    return (
      <div>
        <label htmlFor="namePlanet">
          <input
            data-testid="name-filter"
            name="namePlanet"
            type="text"
            onChange={this.filterTableNameOnChange}
          />
        </label>
        <InputsNumerics />
        <Table data={data} name={name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.requestData.data,
  isFetching: state.requestData.isFetching,
  error: state.requestData.error,
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  search: (value) => dispatch(fetchStarWarsApi(value)),
  filterName: (name) => dispatch(filterPlanetName(name)),
});

Home.propTypes = {
  search: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  filterName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
