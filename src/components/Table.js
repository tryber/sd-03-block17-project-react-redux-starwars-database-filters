import React from 'react';
import { connect } from 'react-redux';
import { requestFetchPlanet } from '../actions/data';
import TableLine from './TableLine';

class Table extends React.Component {
  componentDidMount() {
    this.props.getPlanetsData();
  }

  render() {
    const { isFetching, data } = this.props;
    return (
      <div>
        {data.map((planet) => <TableLine planet={planet} key={planet.name} />)}
      </div>
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
