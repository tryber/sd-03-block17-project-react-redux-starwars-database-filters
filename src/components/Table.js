import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestFetchPlanet } from '../actions/data';
import TableLine from './TableLine';
import TableHeader from './TableHeader';
import Loading from './Loading';

class Table extends React.Component {
  componentDidMount() {
    this.props.getPlanetsData();
  }

  render() {
    const { isFetching, data } = this.props;
    if(isFetching) return <Loading />;
    return (
      <table className="container">
        <TableHeader />
        {data.map((planet) => <TableLine planet={planet} key={planet.name} />)};
      </table>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  getPlanetsData: () => dispatch(requestFetchPlanet()),
});

const mapStateToProps = (state) => ({
  isFetching: state.planetsData.isFetching,
  data: state.planetsData.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getPlanetsData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
};
