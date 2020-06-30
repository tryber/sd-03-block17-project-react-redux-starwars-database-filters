import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestFetchPlanet } from '../actions/data';
import TableLine from './TableLine';
import TableHead from './TableHead';
import Loading from './Loading';
import filterPlanets from '../helpers/filterFunction';
import orderFunction from '../helpers/orderFunction';

class Table extends React.Component {
  componentDidMount() {
    this.props.getPlanetsData();
  }

  render() {
    const { nameFilter, numericFilters, data } = this.props
    const { isFetching, sortColumnFilter, orderColumns  } = this.props;
    const filteredPlanets = filterPlanets({ nameFilter, numericFilters, data })
    const orderedPlanets = orderFunction( filteredPlanets, sortColumnFilter, orderColumns )
    if (isFetching) return <Loading />;
    if (data) {
      return (
        <table className="container">
          <TableHead />
          <tbody>
            {orderedPlanets.map((planet) => 
              <TableLine planet={planet} key={planet.name} />
            )};
          </tbody>
        </table>
      );
    }
    return <p>No Planet Found</p>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanetsData: () => dispatch(requestFetchPlanet()),
});

const mapStateToProps = (state) => ({
  isFetching: state.planetsData.isFetching,
  data: state.planetsData.data,
  nameFilter: state.filters.filterByName.name,
  numericFilters: state.filters.filterByNumericValue,
  sortColumnFilter: state.filters.order.column,
  orderColumns: state.filters.order.sort,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getPlanetsData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
